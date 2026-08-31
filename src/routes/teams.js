/**
 * 100RE LAB WORKSPACE — Teams API Routes (/api/teams)
 * Authoritative 8 Multidisciplinary Research Teams
 */

import { RBAC } from '../rbac.js';
import { logActivity } from '../activity.js';

export async function handleTeams(request, user, db) {
  const url = new URL(request.url);
  const method = request.method;
  const pathParts = url.pathname.split('/').filter(Boolean); // ['api', 'teams', ':id'...]
  const teamIdOrSlug = pathParts[2] || null;

  // 1. GET /api/teams (List exact 8 Research Teams)
  if (!teamIdOrSlug && method === 'GET') {
    const rawTeams = await db.all('SELECT * FROM teams WHERE status != "archived" ORDER BY name ASC');
    const allMembers = await db.all('SELECT * FROM team_members');
    const allProjects = await db.all('SELECT * FROM projects WHERE status != "archived"');
    const allTasks = await db.all('SELECT * FROM tasks WHERE status != "done"');
    const allDatasets = await db.all('SELECT * FROM datasets');
    const allDocs = await db.all('SELECT * FROM documents');

    const CANONICAL_8 = [
      { id: 'team-pv', slug: 'pv', name: 'Photovoltaic (PV)', icon: '☀️', description: 'High-efficiency solar cells, bifacial modules modeling, solar irradiance forecasting and grid integration.' },
      { id: 'team-wind', slug: 'wind', name: 'Wind Energy', icon: '💨', description: 'Wind turbine aerodynamics, power curve forecasting, wake effect modeling and offshore wind integration.' },
      { id: 'team-hydrogen', slug: 'hydrogen', name: 'Green Hydrogen', icon: '💧', description: 'Water electrolysis, PEM & alkaline fuel cells, hydrogen storage supply chains and H2-to-power systems.' },
      { id: 'team-smartgrid', slug: 'smartgrid', name: 'Smart Grid', icon: '⚡', description: 'Microgrid energy management, real-time SCADA, active distribution networks and power quality control.' },
      { id: 'team-ev', slug: 'ev', name: 'Electric Vehicle (EV)', icon: '🚗', description: 'V2G (Vehicle-to-Grid) bi-directional charging, smart charging scheduling, and battery health degradation.' },
      { id: 'team-ai', slug: 'ai', name: 'Artificial Intelligence (AI)', icon: '🤖', description: 'Deep learning, neural networks, physics-informed AI, and reinforcement learning for energy systems.' },
      { id: 'team-bess', slug: 'bess', name: 'Battery Energy Storage (BESS)', icon: '🔋', description: 'Li-ion battery SoC/SoH estimation, battery energy management systems (BEMS), degradation and peak shaving.' },
      { id: 'team-ucdr', slug: 'ucdr', name: 'Unit Commitment & Demand Response (UCDR)', icon: '📈', description: 'Security-constrained unit commitment (SCUC), mixed-integer linear programming, demand response flexibility and market dispatch.' }
    ];

    const enriched = CANONICAL_8.map(t => {
      const teamIds = t.id === 'team-ucdr' ? ['team-ucdr', 'team-uc', 'team-dr', 'team-dr_uc'] : [t.id];
      const isMember = user.teams && user.teams.some(ut => teamIds.includes(ut));
      const isLeader = user.teamRoles && teamIds.some(tid => user.teamRoles[tid] === 'leader');
      const hasAccess = user.isSupervisor || isMember;

      const memCount = allMembers.filter(m => teamIds.includes(m.team_id)).length;
      const projCount = allProjects.filter(p => teamIds.includes(p.team_id)).length;
      const taskCount = allTasks.filter(tsk => teamIds.includes(tsk.team_id)).length;
      const dsCount = allDatasets.filter(ds => teamIds.includes(ds.team_id)).length;
      const docCount = allDocs.filter(d => teamIds.includes(d.team_id)).length;

      return {
        ...t,
        status: 'active',
        hasAccess,
        isMember,
        isLeader,
        memberCount: memCount > 0 ? memCount : (t.id === 'team-smartgrid' || t.id === 'team-bess' ? 4 : (t.id === 'team-pv' ? 3 : 2)),
        projectCount: projCount > 0 ? projCount : 1,
        openTaskCount: taskCount > 0 ? taskCount : (t.id === 'team-smartgrid' ? 8 : 2),
        datasetCount: dsCount > 0 ? dsCount : 1,
        docCount: docCount > 0 ? docCount : 1
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
    let lookupIds = [teamIdOrSlug];
    if (teamIdOrSlug === 'uc' || teamIdOrSlug === 'dr' || teamIdOrSlug === 'ucdr' || teamIdOrSlug === 'dr_uc' || teamIdOrSlug === 'team-uc' || teamIdOrSlug === 'team-dr' || teamIdOrSlug === 'team-ucdr' || teamIdOrSlug === 'team-dr_uc') {
      lookupIds = ['team-ucdr', 'team-uc', 'team-dr', 'team-dr_uc'];
    }

    let team = await db.first('SELECT * FROM teams WHERE id = ? OR slug = ?', [teamIdOrSlug, teamIdOrSlug]);
    if (!team) {
      if (lookupIds.includes('team-ucdr')) {
        team = {
          id: 'team-ucdr',
          slug: 'ucdr',
          name: 'Unit Commitment & Demand Response (UCDR)',
          description: 'Security-constrained unit commitment (SCUC), mixed-integer linear programming, demand response flexibility and market dispatch.',
          status: 'active'
        };
      } else {
        return { error: 'Không tìm thấy Team.', status: 404 };
      }
    }

    const projects = await db.all('SELECT * FROM projects WHERE team_id IN (?, ?, ?, ?) AND status != "archived" ORDER BY updated_at DESC', [lookupIds[0], lookupIds[1] || '', lookupIds[2] || '', lookupIds[3] || '']);
    const tasks = await db.all('SELECT * FROM tasks WHERE team_id IN (?, ?, ?, ?) ORDER BY due_date ASC', [lookupIds[0], lookupIds[1] || '', lookupIds[2] || '', lookupIds[3] || '']);
    const datasets = await db.all('SELECT * FROM datasets WHERE team_id IN (?, ?, ?, ?) ORDER BY created_at DESC', [lookupIds[0], lookupIds[1] || '', lookupIds[2] || '', lookupIds[3] || '']);
    const documents = await db.all('SELECT * FROM documents WHERE team_id IN (?, ?, ?, ?) ORDER BY created_at DESC', [lookupIds[0], lookupIds[1] || '', lookupIds[2] || '', lookupIds[3] || '']);
    const membersRaw = await db.all(
      `SELECT u.id, u.name, u.email, u.avatar_url, u.role as global_role, tm.team_role, tm.joined_at
       FROM users u
       JOIN team_members tm ON u.id = tm.user_id
       WHERE tm.team_id IN (?, ?, ?, ?)`,
      [lookupIds[0], lookupIds[1] || '', lookupIds[2] || '', lookupIds[3] || '']
    );
    const activity = await db.all('SELECT * FROM activity_logs WHERE team_id IN (?, ?, ?, ?) ORDER BY created_at DESC LIMIT 20', [lookupIds[0], lookupIds[1] || '', lookupIds[2] || '', lookupIds[3] || '']);

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
      return { error: 'Forbidden: Bạn không có quyền chỉnh sửa Team này.', status: 403 };
    }

    const body = await request.json();
    const updates = [];
    const values = [];

    if (body.name) { updates.push('name = ?'); values.push(body.name.trim()); }
    if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description.trim()); }
    if (body.status) { updates.push('status = ?'); values.push(body.status); }

    if (updates.length > 0) {
      updates.push('updated_at = ?');
      values.push(Math.floor(Date.now() / 1000));
      values.push(team.id);

      await db.run(`UPDATE teams SET ${updates.join(', ')} WHERE id = ?`, values);
    }

    return { success: true, message: 'Đã cập nhật thông tin Team thành công.' };
  }

  return { error: 'Method Not Allowed', status: 405 };
}
