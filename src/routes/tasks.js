/**
 * 100RE LAB WORKSPACE — Tasks & Comments API Routes (/api/tasks)
 */

import { RBAC } from '../rbac.js';
import { logActivity } from '../activity.js';

export async function handleTasks(request, user, db, env) {
  const url = new URL(request.url);
  const method = request.method;
  const pathParts = url.pathname.split('/').filter(Boolean); // ['api', 'tasks', ':id', 'comments'...]
  const taskId = pathParts[2] || null;
  const subAction = pathParts[3] || null;

  // 1. GET /api/tasks
  if (!taskId && method === 'GET') {
    const teamFilter = url.searchParams.get('team');
    const projectFilter = url.searchParams.get('project');
    const assignedFilter = url.searchParams.get('assigned_to');
    const statusFilter = url.searchParams.get('status');
    const priorityFilter = url.searchParams.get('priority');
    const search = (url.searchParams.get('search') || '').toLowerCase();

        let allTasks = [];
    if (env && env.MEMBERS_KV) {
      try {
        const kvTasksRaw = await env.MEMBERS_KV.get('tasks_dataset');
        if (kvTasksRaw) {
          allTasks = JSON.parse(kvTasksRaw);
        }
      } catch(e) {}
    }

    if (!allTasks || allTasks.length === 0) {
      allTasks = await db.all('SELECT * FROM tasks ORDER BY due_date ASC, created_at DESC');
    }
    let teams = await db.all('SELECT id, name, slug FROM teams');
    let projects = await db.all('SELECT id, name, slug FROM projects');
    let users = await db.all('SELECT id, name, email, avatar_url FROM users');

    const teamMap = new Map(teams.map(t => [t.id, t]));
    const projectMap = new Map(projects.map(p => [p.id, p]));
    const userMap = new Map(users.map(u => [u.id, u]));

    // Filter by user access (Supervisor/Admin can see all; Researchers/Leaders only see their team tasks + General tasks assigned to them)
    let filtered = allTasks.filter(t => {
      if (RBAC.isSuper(user)) return true;

      const uName = (user.display_name || user.name || '').toLowerCase();
      const uId = user.id;
      const isAssigned = (t.assigned_to === uId) ||
        (Array.isArray(t.assignees) && t.assignees.includes(uId)) ||
        (Array.isArray(t.assignee_names) && t.assignee_names.some(n => n.toLowerCase().includes(uName) || uName.includes(n.toLowerCase())));

      // General / Cross-team tasks: ONLY visible if user is directly assigned
      if (t.team_id === 'team-general' || t.team_id === 'general') {
        return isAssigned;
      }

      // Team tasks: Visible if user belongs to this research team
      if (RBAC.canAccessTeam(user, t.team_id)) {
        return true;
      }

      // If user is directly assigned to a task outside their team
      if (isAssigned) {
        return true;
      }

      return false;
    });

    if (teamFilter) {
      filtered = filtered.filter(t => t.team_id === teamFilter || (teamMap.get(t.team_id) && teamMap.get(t.team_id).slug === teamFilter));
    }
    if (projectFilter) {
      filtered = filtered.filter(t => t.project_id === projectFilter || (projectMap.get(t.project_id) && projectMap.get(t.project_id).slug === projectFilter));
    }
    if (assignedFilter) {
      if (assignedFilter === 'me') {
        filtered = filtered.filter(t => t.assigned_to === user.id);
      } else {
        filtered = filtered.filter(t => t.assigned_to === assignedFilter);
      }
    }
    if (statusFilter) {
      filtered = filtered.filter(t => t.status === statusFilter);
    }
    if (priorityFilter) {
      filtered = filtered.filter(t => t.priority === priorityFilter);
    }
    if (search) {
      filtered = filtered.filter(t => t.title.toLowerCase().includes(search) || (t.description && t.description.toLowerCase().includes(search)));
    }

    const enriched = filtered.map(t => ({
      ...t,
      team: teamMap.get(t.team_id) || null,
      project: projectMap.get(t.project_id) || null,
      assignee: userMap.get(t.assigned_to) || null,
      creator: userMap.get(t.created_by) || null,
      canEdit: RBAC.canEditTask(user, t),
      canDelete: RBAC.canDeleteTask(user, t)
    }));

    return { success: true, tasks: enriched };
  }

  // 2. POST /api/tasks
  if (!taskId && method === 'POST') {
    const body = await request.json();
    const team_id = body.team_id;
    const project_id = body.project_id || null;
    const title = (body.title || '').trim();
    const description = (body.description || '').trim();
    const priority = body.priority || 'medium';
    const assigned_to = body.assigned_to || null;
    const due_date = body.due_date || null;

    if (!team_id || !title) {
      return { error: 'Team và Tiêu đề Task là bắt buộc.', status: 400 };
    }

    if (!RBAC.canCreateTask(user, team_id)) {
      return { error: 'Forbidden: Bạn không có quyền tạo Task trong Team này.', status: 403 };
    }

    const id = `tsk-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      `INSERT INTO tasks (id, team_id, project_id, title, description, status, priority, assigned_to, created_by, due_date, created_at, updated_at, completed_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, team_id, project_id, title, description, body.status || 'todo', priority, assigned_to, user.id, due_date, now, now, null]
    );
    const newTaskObj = {
      id,
      team_id,
      project_id,
      title,
      description,
      status: body.status || 'todo',
      priority,
      assigned_to,
      assignees: body.assignees || (assigned_to ? [assigned_to] : []),
      assignee_names: body.assignee_names || [],
      created_by: user.id,
      due_date,
      created_at: now,
      updated_at: now,
      completed_at: null
    };

    if (env && env.MEMBERS_KV) {
      try {
        let curList = [];
        const kvRaw = await env.MEMBERS_KV.get('tasks_dataset');
        if (kvRaw) curList = JSON.parse(kvRaw);
        if (!curList || curList.length === 0) {
          curList = await db.all('SELECT * FROM tasks ORDER BY due_date ASC, created_at DESC');
        }
        curList.unshift(newTaskObj);
        await env.MEMBERS_KV.put('tasks_dataset', JSON.stringify(curList));
      } catch(e) {}
    }

    await logActivity(db, {
      userId: user.id,
      teamId: team_id,
      projectId: project_id,
      entityType: 'task',
      entityId: id,
      action: 'create_task',
      metadata: { title, priority, assigned_to }
    });

    return { success: true, task: { id, team_id, project_id, title, description, status: 'todo', priority, assigned_to, due_date } };
  }

  // 3. GET /api/tasks/:id
  if (taskId && !subAction && method === 'GET') {
    const task = await db.first('SELECT * FROM tasks WHERE id = ?', [taskId]);
    if (!task) return { error: 'Không tìm thấy Task.', status: 404 };

    if (!RBAC.canAccessTeam(user, task.team_id)) {
      return { error: 'Forbidden: Bạn không thuộc Team của Task này.', status: 403 };
    }

    const team = await db.first('SELECT id, name, slug FROM teams WHERE id = ?', [task.team_id]);
    const project = task.project_id ? await db.first('SELECT id, name, slug FROM projects WHERE id = ?', [task.project_id]) : null;
    const assignee = task.assigned_to ? await db.first('SELECT id, name, email, avatar_url FROM users WHERE id = ?', [task.assigned_to]) : null;
    const creator = await db.first('SELECT id, name, email, avatar_url FROM users WHERE id = ?', [task.created_by]);

    const commentsRaw = await db.all('SELECT * FROM task_comments WHERE task_id = ? ORDER BY created_at ASC', [task.id]);
    const allUsers = await db.all('SELECT id, name, avatar_url, role FROM users');
    const userMap = new Map(allUsers.map(u => [u.id, u]));

    const comments = commentsRaw.map(c => ({
      ...c,
      user: userMap.get(c.user_id) || { name: 'Member', avatar_url: 'assets/images/logo.jpg' }
    }));

    return {
      success: true,
      task: {
        ...task,
        team,
        project,
        assignee,
        creator,
        canEdit: RBAC.canEditTask(user, task),
        canDelete: RBAC.canDeleteTask(user, task)
      },
      comments
    };
  }

  // 4. PATCH /api/tasks/:id
  if (taskId && !subAction && method === 'PATCH') {
    const task = await db.first('SELECT * FROM tasks WHERE id = ?', [taskId]);
    if (!task) return { error: 'Không tìm thấy Task.', status: 404 };

    if (!RBAC.canEditTask(user, task)) {
      return { error: 'Forbidden: Bạn không có quyền chỉnh sửa Task này.', status: 403 };
    }

    const body = await request.json();
    const title = body.title !== undefined ? body.title.trim() : task.title;
    const description = body.description !== undefined ? body.description.trim() : task.description;
    const status = body.status || task.status;
    const priority = body.priority || task.priority;
    const assigned_to = body.assigned_to !== undefined ? body.assigned_to : task.assigned_to;
    const due_date = body.due_date !== undefined ? body.due_date : task.due_date;
    const now = Math.floor(Date.now() / 1000);
    const completed_at = status === 'done' ? (task.completed_at || now) : null;

    await db.run(
      `UPDATE tasks SET title = ?, description = ?, status = ?, priority = ?, assigned_to = ?, due_date = ?, updated_at = ?, completed_at = ? WHERE id = ?`,
      [title, description, status, priority, assigned_to, due_date, now, completed_at, task.id]
    );

    // If status changed, log activity
    if (body.status && body.status !== task.status) {
      await logActivity(db, {
        userId: user.id,
        teamId: task.team_id,
        projectId: task.project_id,
        entityType: 'task',
        entityId: task.id,
        action: 'update_task_status',
        metadata: { title: task.title, old_status: task.status, new_status: status }
      });
    }

    return { success: true, task: { ...task, title, description, status, priority, assigned_to, due_date, updated_at: now, completed_at } };
  }

  // 5. DELETE /api/tasks/:id
  if (taskId && !subAction && method === 'DELETE') {
    const task = await db.first('SELECT * FROM tasks WHERE id = ?', [taskId]);
    if (!task) return { error: 'Không tìm thấy Task.', status: 404 };

    if (!RBAC.canDeleteTask(user, task)) {
      return { error: 'Forbidden: Bạn không có quyền xóa Task này.', status: 403 };
    }

    await db.run('DELETE FROM tasks WHERE id = ?', [task.id]);

    await logActivity(db, {
      userId: user.id,
      teamId: task.team_id,
      projectId: task.project_id,
      entityType: 'task',
      entityId: task.id,
      action: 'delete_task',
      metadata: { title: task.title }
    });

    return { success: true, message: 'Đã xóa task thành công.' };
  }

  // 6. COMMENTS: GET & POST /api/tasks/:id/comments
  if (taskId && subAction === 'comments') {
    const task = await db.first('SELECT * FROM tasks WHERE id = ?', [taskId]);
    if (!task) return { error: 'Không tìm thấy Task.', status: 404 };

    if (!RBAC.canAccessTeam(user, task.team_id)) {
      return { error: 'Forbidden.', status: 403 };
    }

    if (method === 'GET') {
      const comments = await db.all('SELECT * FROM task_comments WHERE task_id = ? ORDER BY created_at ASC', [task.id]);
      return { success: true, comments };
    }

    if (method === 'POST') {
      if (user.role === RBAC.ROLE_ALUMNI) {
        return { error: 'Forbidden: Alumni có quyền xem read-only.', status: 403 };
      }

      const body = await request.json();
      const content = (body.content || '').trim();
      if (!content) return { error: 'Nội dung bình luận không được để trống.', status: 400 };

      const commentId = `cm-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const now = Math.floor(Date.now() / 1000);

      await db.run(
        'INSERT INTO task_comments (id, task_id, user_id, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)',
        [commentId, task.id, user.id, content, now, now]
      );

      await logActivity(db, {
        userId: user.id,
        teamId: task.team_id,
        projectId: task.project_id,
        entityType: 'comment',
        entityId: commentId,
        action: 'add_comment',
        metadata: { task_title: task.title }
      });

      return {
        success: true,
        comment: {
          id: commentId,
          task_id: task.id,
          user_id: user.id,
          content,
          created_at: now,
          user: { id: user.id, name: user.name, avatar_url: user.avatar_url, role: user.role }
        }
      };
    }
  }

  return { error: 'Method Not Allowed', status: 405 };
}
