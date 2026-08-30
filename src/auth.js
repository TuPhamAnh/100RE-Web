/**
 * 100RE LAB WORKSPACE — Authentication & Identity Resolution
 * Supports Cloudflare Access headers in production, Admin Sessions, and Dev Auth Switcher.
 */

export async function resolveUser(request, env, db) {
  let email = request.headers.get('cf-access-authenticated-user-email');
  const devUserHeader = request.headers.get('x-dev-user-id') || request.headers.get('x-dev-user-email');
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();

  // 1. Check Cloudflare Access authenticated email
  if (email) {
    const u = await db.first('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (u) return enrichUser(u, db);
  }

  // 2. Check Session Token in KV or Bearer Token (from Website Login)
  if (token) {
    // If token is direct user ID
    let u = await db.first('SELECT * FROM users WHERE id = ?', [token]);
    if (u) return enrichUser(u, db);

    // If token is an active session in KV
    if (env && env.MEMBERS_KV) {
      try {
        const sessionRaw = await env.MEMBERS_KV.get(`session_${token}`);
        if (sessionRaw) {
          let sessionUser = null;
          try { sessionUser = JSON.parse(sessionRaw); } catch(e) { sessionUser = { username: sessionRaw }; }

          if (sessionUser && sessionUser.id) {
            u = await db.first('SELECT * FROM users WHERE id = ?', [sessionUser.id]);
            if (u) return enrichUser(u, db);
          } else if (sessionUser && sessionUser.username) {
            if (sessionUser.username === 'teamleader') {
              u = await db.first('SELECT * FROM users WHERE id = ?', ['usr-ldr-01']);
            } else if (sessionUser.username === 'researcher') {
              u = await db.first('SELECT * FROM users WHERE id = ?', ['usr-res-01']);
            } else {
              u = await db.first('SELECT * FROM users WHERE id = ?', ['usr-sup-01']);
            }
            if (u) return enrichUser(u, db);
          }
        }
      } catch (e) {}
    }

    // Fallback if token is present from localStorage
    u = await db.first('SELECT * FROM users WHERE role = ? LIMIT 1', ['supervisor']);
    if (u) return enrichUser(u, db);
  }

  // 3. Check Dev User Header (if selected in UI or in development)
  if (devUserHeader) {
    if (devUserHeader.includes('@')) {
      const u = await db.first('SELECT * FROM users WHERE email = ?', [devUserHeader.toLowerCase().trim()]);
      if (u) return enrichUser(u, db);
    } else {
      const u = await db.first('SELECT * FROM users WHERE id = ?', [devUserHeader]);
      if (u) return enrichUser(u, db);
    }
  }

  // 4. Default fallback: resolve Supervisor
  const defaultUser = await db.first('SELECT * FROM users WHERE role = ? LIMIT 1', ['supervisor']);
  if (defaultUser) return enrichUser(defaultUser, db);

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
