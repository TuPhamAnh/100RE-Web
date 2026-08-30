/**
 * 100RE LAB WORKSPACE — Authentication & Identity Resolution
 * Supports Cloudflare Access headers in production and Dev Auth Switcher in development.
 */

export async function resolveUser(request, env, db) {
  let email = request.headers.get('cf-access-authenticated-user-email');
  const devUserHeader = request.headers.get('x-dev-user-id') || request.headers.get('x-dev-user-email');
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();

  // In development mode, allow explicit dev user selection
  const isDev = (env && env.ENVIRONMENT === 'development') || !env || !env.ENVIRONMENT;
  
  if (isDev && devUserHeader) {
    if (devUserHeader.includes('@')) {
      email = devUserHeader;
    } else {
      const u = await db.first('SELECT * FROM users WHERE id = ?', [devUserHeader]);
      if (u) return enrichUser(u, db);
    }
  }

  // Check Bearer Token if email not provided via Access
  if (!email && token) {
    const u = await db.first('SELECT * FROM users WHERE id = ?', [token]);
    if (u) return enrichUser(u, db);
  }

  if (email) {
    const u = await db.first('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (u) return enrichUser(u, db);
  }

  // Dev fallback default: if running locally and no headers passed, default to Supervisor
  if (isDev) {
    const defaultUser = await db.first('SELECT * FROM users WHERE role = ? LIMIT 1', ['supervisor']);
    if (defaultUser) return enrichUser(defaultUser, db);
  }

  return { user: null, isAuthenticated: false };
}

async function enrichUser(userRow, db) {
  if (!userRow || userRow.status !== 'active') {
    return { user: null, isAuthenticated: false };
  }

  // Fetch Team Memberships
  const teamMembers = await db.all('SELECT * FROM team_members WHERE user_id = ?', [userRow.id]);
  const teams = teamMembers.map(tm => tm.team_id);
  const teamRoles = {};
  teamMembers.forEach(tm => {
    teamRoles[tm.team_id] = tm.team_role;
  });

  // Fetch Project Memberships
  const projectMembers = await db.all('SELECT * FROM project_members WHERE user_id = ?', [userRow.id]);
  const projects = projectMembers.map(pm => pm.project_id);

  const displayName = userRow.display_name || userRow.name || 'Lab Member';

  const user = {
    id: userRow.id,
    email: userRow.email,
    display_name: displayName,
    name: displayName, // compatibility alias
    member_key: userRow.member_key || null,
    avatar_url: userRow.avatar_url || 'assets/images/logo.jpg',
    role: userRow.role, // 'supervisor' | 'team_leader' | 'researcher' | 'alumni'
    status: userRow.status,
    teams: teams,
    teamRoles: teamRoles,
    projects: projects,
    isSupervisor: userRow.role === 'supervisor',
    isLeader: userRow.role === 'team_leader' || userRow.role === 'supervisor',
    isAlumni: userRow.role === 'alumni'
  };

  return { user, isAuthenticated: true };
}
