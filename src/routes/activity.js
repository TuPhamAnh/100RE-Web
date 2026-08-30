/**
 * 100RE LAB WORKSPACE — Activity Logs API Routes (/api/activity)
 */

import { RBAC } from '../rbac.js';

export async function handleActivity(request, user, db) {
  const url = new URL(request.url);
  const teamFilter = url.searchParams.get('team');
  const projectFilter = url.searchParams.get('project');
  const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
  const limit = Math.min(100, Math.max(1, Number(url.searchParams.get('limit')) || 30));
  const offset = (page - 1) * limit;

  let allActivity = await db.all('SELECT * FROM activity_logs ORDER BY created_at DESC LIMIT 200');
  let teams = await db.all('SELECT id, name, slug FROM teams');
  let projects = await db.all('SELECT id, name, slug FROM projects');
  let users = await db.all('SELECT id, name, email, avatar_url, role FROM users');

  const teamMap = new Map(teams.map(t => [t.id, t]));
  const projectMap = new Map(projects.map(p => [p.id, p]));
  const userMap = new Map(users.map(u => [u.id, u]));

  // Filter by user access
  let filtered = allActivity.filter(a => !a.team_id || RBAC.canAccessTeam(user, a.team_id));

  if (teamFilter) {
    filtered = filtered.filter(a => a.team_id === teamFilter || (teamMap.get(a.team_id) && teamMap.get(a.team_id).slug === teamFilter));
  }
  if (projectFilter) {
    filtered = filtered.filter(a => a.project_id === projectFilter);
  }

  const paginated = filtered.slice(offset, offset + limit);

  const enriched = paginated.map(a => {
    let parsedMeta = {};
    try {
      parsedMeta = typeof a.metadata === 'string' ? JSON.parse(a.metadata) : a.metadata || {};
    } catch (e) {}

    return {
      ...a,
      metadata: parsedMeta,
      user: userMap.get(a.user_id) || { name: 'Member', avatar_url: 'assets/images/logo.jpg' },
      team: teamMap.get(a.team_id) || null,
      project: projectMap.get(a.project_id) || null
    };
  });

  return {
    success: true,
    page,
    limit,
    total: filtered.length,
    activity: enriched
  };
}
