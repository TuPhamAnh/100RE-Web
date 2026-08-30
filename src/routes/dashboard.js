/**
 * 100RE LAB WORKSPACE — Dashboard Aggregation Endpoint (/api/workspace/dashboard)
 */

import { RBAC } from '../rbac.js';

export async function handleDashboard(user, db) {
  // 1. Teams
  let allTeams = await db.all('SELECT * FROM teams WHERE status = "active"');
  let myTeams = user.isSupervisor ? allTeams : allTeams.filter(t => user.teams.includes(t.id));

  // 2. Projects
  let allProjects = await db.all('SELECT * FROM projects WHERE status != "archived" ORDER BY updated_at DESC');
  let myProjects = allProjects.filter(p => RBAC.canAccessProject(user, p));

  // 3. Tasks
  let allTasks = await db.all('SELECT * FROM tasks WHERE status != "done" ORDER BY due_date ASC, created_at DESC');
  let myTasks = allTasks.filter(t => t.assigned_to === user.id || RBAC.canAccessTeam(user, t.team_id));

  // Priority sort for My Tasks: urgent -> high -> medium -> low, then closest due_date
  const priorityWeight = { urgent: 4, high: 3, medium: 2, low: 1 };
  myTasks.sort((a, b) => {
    if (a.assigned_to === user.id && b.assigned_to !== user.id) return -1;
    if (b.assigned_to === user.id && a.assigned_to !== user.id) return 1;
    const diff = (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
    if (diff !== 0) return diff;
    if (a.due_date && b.due_date) return a.due_date.localeCompare(b.due_date);
    return 0;
  });

  // 4. Documents & Datasets
  let allDocs = await db.all('SELECT * FROM documents ORDER BY created_at DESC LIMIT 20');
  let recentDocs = allDocs.filter(d => RBAC.canAccessResource(user, d)).slice(0, 6);

  let allDatasets = await db.all('SELECT * FROM datasets ORDER BY created_at DESC LIMIT 20');
  let recentDatasets = allDatasets.filter(ds => RBAC.canAccessResource(user, ds)).slice(0, 6);

  // 5. Activity
  let allActivity = await db.all('SELECT * FROM activity_logs ORDER BY created_at DESC LIMIT 30');
  let recentActivity = allActivity.filter(a => !a.team_id || RBAC.canAccessTeam(user, a.team_id)).slice(0, 8);

  // Enrich Activity with User details
  const userMap = new Map();
  const allUsers = await db.all('SELECT id, name, avatar_url, role FROM users');
  allUsers.forEach(u => userMap.set(u.id, u));

  recentActivity = recentActivity.map(a => ({
    ...a,
    user: userMap.get(a.user_id) || { name: 'Lab Member', avatar_url: 'assets/images/logo.jpg' }
  }));

  // 6. Enrich Tasks with Project & Team names
  const teamMap = new Map(allTeams.map(t => [t.id, t]));
  const projectMap = new Map(allProjects.map(p => [p.id, p]));

  myTasks = myTasks.slice(0, 10).map(t => ({
    ...t,
    team: teamMap.get(t.team_id) || null,
    project: projectMap.get(t.project_id) || null,
    assignee: userMap.get(t.assigned_to) || null
  }));

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar_url: user.avatar_url,
      isSupervisor: user.isSupervisor
    },
    stats: {
      teamCount: myTeams.length,
      projectCount: myProjects.length,
      openTaskCount: myTasks.length,
      datasetCount: recentDatasets.length,
      documentCount: recentDocs.length
    },
    myTeams,
    myProjects: myProjects.slice(0, 6),
    myTasks,
    recentDocs,
    recentDatasets,
    recentActivity
  };
}
