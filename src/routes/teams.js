/**
 * 100RE LAB WORKSPACE — Teams API Routes (/api/teams)
 */

import { RBAC } from '../rbac.js';
import { logActivity } from '../activity.js';

export async function handleTeams(request, user, db) {
  const url = new URL(request.url);
  const method = request.method;
  const pathParts = url.pathname.split('/').filter(Boolean); // ['api', 'teams', ':id'...]
  const teamIdOrSlug = pathParts[2] || null;

  // 1. GET /api/teams
  if (!teamIdOrSlug && method === 'GET') {
    const teams = await db.all('SELECT * FROM teams WHERE status != "archived" ORDER BY name ASC');
    const allMembers = await db.all('SELECT * FROM team_members');
    const allProjects = await db.all('SELECT * FROM projects WHERE status != "archived"');
    const allTasks = await db.all('SELECT * FROM tasks WHERE status != "done"');
    const allDatasets = await db.all('SELECT * FROM datasets');
    const allDocs = await db.all('SELECT * FROM documents');

    const enriched = teams.map(t => {
      const isMember = user.teams.includes(t.id);
      const isLeader = user.teamRoles[t.id] === 'leader';
      const hasAccess = user.isSupervisor || isMember;

      return {
        ...t,
        hasAccess,
        isMember,
        isLeader,
        memberCount: allMembers.filter(m => m.team_id === t.id).length,
        projectCount: allProjects.filter(p => p.team_id === t.id).length,
        openTaskCount: allTasks.filter(tsk => tsk.team_id === t.id).length,
        datasetCount: allDatasets.filter(ds => ds.team_id === t.id).length,
        docCount: allDocs.filter(d => d.team_id === t.id).length
      };
    });

    return { success: true, teams: enriched };
  }

  // 2. POST /api/teams (Supervisor only)
  if (!teamIdOrSlug && method === 'POST') {
    if (!RBAC.canManageUsers(user)) {
      return { error: 'Forbidden: Chỉ Supervisor mới có quyền tạo Team mới.', status: 403 };
    }

    const body = await request.json();
    const name = (body.name || '').trim();
    const slug = (body.slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-')).trim();
    const description = (body.description || '').trim();

    if (!name || !slug) {
      return { error: 'Tên Team và slug là bắt buộc.', status: 400 };
    }

    const id = `team-${slug}`;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      'INSERT INTO teams (id, name, slug, description, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, name, slug, description, 'active', now, now]
    );

    // If leader specified
    if (body.leader_id) {
      await db.run(
        'INSERT INTO team_members (id, team_id, user_id, team_role, joined_at) VALUES (?, ?, ?, ?, ?)',
        [`tm-${Date.now()}`, id, body.leader_id, 'leader', now]
      );
    }

    await logActivity(db, {
      userId: user.id,
      teamId: id,
      entityType: 'team',
      entityId: id,
      action: 'create_team',
      metadata: { name, slug }
    });

    return { success: true, team: { id, name, slug, description } };
  }

  // 3. GET /api/teams/:id (Detail + Tabs)
  if (teamIdOrSlug && method === 'GET') {
    const team = await db.first('SELECT * FROM teams WHERE id = ? OR slug = ?', [teamIdOrSlug, teamIdOrSlug]);
    if (!team) return { error: 'Không tìm thấy Team.', status: 404 };

    if (!RBAC.canAccessTeam(user, team.id)) {
      return { error: 'Forbidden: Bạn không thuộc Team này.', status: 403 };
    }

    // Projects in team
    const projects = await db.all('SELECT * FROM projects WHERE team_id = ? AND status != "archived" ORDER BY updated_at DESC', [team.id]);
    
    // Tasks in team
    const tasks = await db.all('SELECT * FROM tasks WHERE team_id = ? ORDER BY due_date ASC', [team.id]);

    // Datasets in team
    const datasets = await db.all('SELECT * FROM datasets WHERE team_id = ? ORDER BY created_at DESC', [team.id]);

    // Documents in team
    const documents = await db.all('SELECT * FROM documents WHERE team_id = ? ORDER BY created_at DESC', [team.id]);

    // Team Members
    const membersRaw = await db.all(
      `SELECT u.id, u.name, u.email, u.avatar_url, u.role as global_role, tm.team_role, tm.joined_at
       FROM users u
       JOIN team_members tm ON u.id = tm.user_id
       WHERE tm.team_id = ?`,
      [team.id]
    );

    // Activity in team
    const activity = await db.all('SELECT * FROM activity_logs WHERE team_id = ? ORDER BY created_at DESC LIMIT 20', [team.id]);

    return {
      success: true,
      team,
      isLeader: RBAC.canManageTeam(user, team.id),
      stats: {
        memberCount: membersRaw.length,
        projectCount: projects.length,
        openTaskCount: tasks.filter(t => t.status !== 'done').length,
        datasetCount: datasets.length,
        docCount: documents.length
      },
      projects,
      tasks,
      datasets,
      documents,
      members: membersRaw,
      activity
    };
  }

  // 4. PATCH /api/teams/:id (Supervisor or Leader)
  if (teamIdOrSlug && method === 'PATCH') {
    const team = await db.first('SELECT * FROM teams WHERE id = ? OR slug = ?', [teamIdOrSlug, teamIdOrSlug]);
    if (!team) return { error: 'Không tìm thấy Team.', status: 404 };

    if (!RBAC.canManageTeam(user, team.id)) {
      return { error: 'Forbidden: Chỉ Team Leader hoặc Supervisor mới có quyền sửa Team.', status: 403 };
    }

    const body = await request.json();
    const name = body.name ? body.name.trim() : team.name;
    const slug = body.slug ? body.slug.trim() : team.slug;
    const description = body.description !== undefined ? body.description.trim() : team.description;
    const status = body.status || team.status;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      'UPDATE teams SET name = ?, slug = ?, description = ?, status = ?, updated_at = ? WHERE id = ?',
      [name, slug, description, status, now, team.id]
    );

    await logActivity(db, {
      userId: user.id,
      teamId: team.id,
      entityType: 'team',
      entityId: team.id,
      action: 'update_team',
      metadata: { name, slug }
    });

    return { success: true, team: { ...team, name, slug, description, status, updated_at: now } };
  }

  return { error: 'Method Not Allowed', status: 405 };
}
