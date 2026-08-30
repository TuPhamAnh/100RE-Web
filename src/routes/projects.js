/**
 * 100RE LAB WORKSPACE — Projects API Routes (/api/projects)
 */

import { RBAC } from '../rbac.js';
import { logActivity } from '../activity.js';
import { StorageService } from '../storage/index.js';

export async function handleProjects(request, user, db, env) {
  const url = new URL(request.url);
  const method = request.method;
  const pathParts = url.pathname.split('/').filter(Boolean); // ['api', 'projects', ':id', 'members'...]
  const projectId = pathParts[2] || null;
  const subAction = pathParts[3] || null;

  // 1. GET /api/projects
  if (!projectId && method === 'GET') {
    const teamFilter = url.searchParams.get('team');
    const statusFilter = url.searchParams.get('status');
    const search = (url.searchParams.get('search') || '').toLowerCase();

    let allProjects = await db.all('SELECT * FROM projects WHERE status != "archived" ORDER BY updated_at DESC');
    let teams = await db.all('SELECT id, name, slug FROM teams');
    const teamMap = new Map(teams.map(t => [t.id, t]));

    let filtered = allProjects.filter(p => RBAC.canAccessProject(user, p));

    if (teamFilter) {
      filtered = filtered.filter(p => p.team_id === teamFilter || (teamMap.get(p.team_id) && teamMap.get(p.team_id).slug === teamFilter));
    }
    if (statusFilter) {
      filtered = filtered.filter(p => p.status === statusFilter);
    }
    if (search) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search) || (p.description && p.description.toLowerCase().includes(search)));
    }

    const allTasks = await db.all('SELECT * FROM tasks');
    const allMembers = await db.all('SELECT * FROM project_members');

    const enriched = filtered.map(p => ({
      ...p,
      team: teamMap.get(p.team_id) || null,
      taskCount: allTasks.filter(t => t.project_id === p.id).length,
      openTaskCount: allTasks.filter(t => t.project_id === p.id && t.status !== 'done').length,
      memberCount: allMembers.filter(m => m.project_id === p.id).length
    }));

    return { success: true, projects: enriched };
  }

  // 2. POST /api/projects
  if (!projectId && method === 'POST') {
    const body = await request.json();
    const team_id = body.team_id;
    const name = (body.name || '').trim();
    const slug = (body.slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-')).trim();
    const description = (body.description || '').trim();
    const start_date = body.start_date || null;
    const end_date = body.end_date || null;

    if (!team_id || !name) {
      return { error: 'Team và tên Project là bắt buộc.', status: 400 };
    }

    if (!RBAC.canCreateProject(user, team_id)) {
      return { error: 'Forbidden: Bạn không có quyền tạo Project trong Team này.', status: 403 };
    }

    const id = `proj-${slug}-${Date.now().toString(36).slice(-4)}`;
    const now = Math.floor(Date.now() / 1000);

    // Auto-create Google Drive project folder
    let driveFolderId = null;
    try {
      driveFolderId = await StorageService.createFolder({ name, env });
    } catch (e) {
      console.warn('Drive folder create warning:', e);
    }

    await db.run(
      `INSERT INTO projects (id, team_id, name, slug, description, status, progress, start_date, end_date, drive_folder_id, created_by, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, team_id, name, slug, description, 'active', 0, start_date, end_date, driveFolderId, user.id, now, now]
    );

    // Add creator as leader
    await db.run(
      'INSERT INTO project_members (id, project_id, user_id, project_role, joined_at) VALUES (?, ?, ?, ?, ?)',
      [`pm-${Date.now()}`, id, user.id, 'leader', now]
    );

    await logActivity(db, {
      userId: user.id,
      teamId: team_id,
      projectId: id,
      entityType: 'project',
      entityId: id,
      action: 'create_project',
      metadata: { name, team_id, drive_folder_id: driveFolderId }
    });

    return { success: true, project: { id, team_id, name, slug, description, status: 'active', progress: 0, drive_folder_id: driveFolderId } };
  }

  // 3. GET /api/projects/:id
  if (projectId && !subAction && method === 'GET') {
    const project = await db.first('SELECT * FROM projects WHERE id = ?', [projectId]);
    if (!project) return { error: 'Không tìm thấy Project.', status: 404 };

    if (!RBAC.canAccessProject(user, project)) {
      return { error: 'Forbidden: Bạn không có quyền truy cập Project này.', status: 403 };
    }

    const team = await db.first('SELECT * FROM teams WHERE id = ?', [project.team_id]);
    const tasks = await db.all('SELECT * FROM tasks WHERE project_id = ? ORDER BY due_date ASC', [project.id]);
    const datasets = await db.all('SELECT * FROM datasets WHERE project_id = ? ORDER BY created_at DESC', [project.id]);
    const documents = await db.all('SELECT * FROM documents WHERE project_id = ? ORDER BY created_at DESC', [project.id]);

    const membersRaw = await db.all(
      `SELECT u.id, COALESCE(u.display_name, u.name) as name, u.email, u.avatar_url, u.role as global_role, pm.project_role, pm.joined_at
       FROM users u
       JOIN project_members pm ON u.id = pm.user_id
       WHERE pm.project_id = ?`,
      [project.id]
    );

    const activity = await db.all('SELECT * FROM activity_logs WHERE project_id = ? ORDER BY created_at DESC LIMIT 20', [project.id]);

    return {
      success: true,
      project,
      team,
      isLeader: RBAC.canManageProject(user, project),
      stats: {
        taskCount: tasks.length,
        openTaskCount: tasks.filter(t => t.status !== 'done').length,
        datasetCount: datasets.length,
        documentCount: documents.length,
        memberCount: membersRaw.length
      },
      tasks,
      datasets,
      documents,
      members: membersRaw,
      activity
    };
  }

  // 4. PATCH /api/projects/:id
  if (projectId && !subAction && method === 'PATCH') {
    const project = await db.first('SELECT * FROM projects WHERE id = ?', [projectId]);
    if (!project) return { error: 'Không tìm thấy Project.', status: 404 };

    if (!RBAC.canManageProject(user, project)) {
      return { error: 'Forbidden: Bạn không có quyền chỉnh sửa Project này.', status: 403 };
    }

    const body = await request.json();
    const name = body.name ? body.name.trim() : project.name;
    const description = body.description !== undefined ? body.description.trim() : project.description;
    const status = body.status || project.status;
    const progress = body.progress !== undefined ? Number(body.progress) : project.progress;
    const start_date = body.start_date !== undefined ? body.start_date : project.start_date;
    const end_date = body.end_date !== undefined ? body.end_date : project.end_date;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      `UPDATE projects SET name = ?, description = ?, status = ?, progress = ?, start_date = ?, end_date = ?, updated_at = ? WHERE id = ?`,
      [name, description, status, progress, start_date, end_date, now, project.id]
    );

    await logActivity(db, {
      userId: user.id,
      teamId: project.team_id,
      projectId: project.id,
      entityType: 'project',
      entityId: project.id,
      action: 'update_project',
      metadata: { name, status, progress }
    });

    return { success: true, project: { ...project, name, description, status, progress, start_date, end_date, updated_at: now } };
  }

  // 5. POST /api/projects/:id/members
  if (projectId && subAction === 'members' && method === 'POST') {
    const project = await db.first('SELECT * FROM projects WHERE id = ?', [projectId]);
    if (!project) return { error: 'Không tìm thấy Project.', status: 404 };

    if (!RBAC.canManageProject(user, project)) {
      return { error: 'Forbidden: Bạn không có quyền thêm thành viên vào Project này.', status: 403 };
    }

    const body = await request.json();
    const targetUserId = body.user_id;
    const role = body.project_role || 'member';

    if (!targetUserId) return { error: 'user_id là bắt buộc.', status: 400 };

    const now = Math.floor(Date.now() / 1000);
    await db.run(
      'INSERT OR IGNORE INTO project_members (id, project_id, user_id, project_role, joined_at) VALUES (?, ?, ?, ?, ?)',
      [`pm-${Date.now()}`, project.id, targetUserId, role, now]
    );

    return { success: true, message: 'Đã thêm thành viên vào Project.' };
  }

  return { error: 'Method Not Allowed', status: 405 };
}
