/**
 * 100RE LAB WORKSPACE — Authentication & Identity Resolution
 * Supports Cloudflare Access headers in production, Admin Sessions, and Dev Auth Switcher.
 */

export async function resolveUser(request, env, db) {
  let email = request.headers.get('cf-access-authenticated-user-email');
  const devUserHeader = request.headers.get('x-dev-user-id') || request.headers.get('x-dev-user-email') || request.headers.get('x-logged-user');
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();

  // 1. Check Dev User Header (Highest Priority for explicit user role switching & local preview)
  if (devUserHeader) {
    const rawVal = devUserHeader.toLowerCase().trim();

    // Check specific known usernames
    if (rawVal === '100re' || rawVal === 'usr-admin-01') {
      return {
        user: {
          id: 'usr-admin-01',
          email: 'admin@100relab.hust.edu.vn',
          display_name: 'System Admin (100RE)',
          name: 'System Admin (100RE)',
          username: '100re',
          role: 'admin',
          isSupervisor: true,
          isLeader: true,
          isSystemAdmin: true,
          status: 'active',
          avatar_url: 'assets/images/logo.jpg',
          teams: ['team-pv', 'team-bess', 'team-ai', 'team-smartgrid', 'team-wind', 'team-ev', 'team-hydrogen', 'team-dr', 'team-uc'],
          projects: [],
          teamRoles: {},
          permissions: ['perm_ws_admin', 'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos', 'perm_members', 'perm_ws_all_teams', 'perm_ws_projects', 'perm_ws_tasks_create', 'perm_ws_tasks_update', 'perm_ws_scinote_edit', 'perm_ws_scinote_signoff', 'perm_ws_datasets', 'perm_ws_documents']
        },
        isAuthenticated: true
      };
    }

    if (rawVal === 'hai.duongminh' || rawVal === 'usr-res-05' || rawVal.includes('duongminh')) {
      return {
        user: {
          id: 'usr-res-05',
          email: 'hai.duongminh@100relab.hust.edu.vn',
          display_name: 'Duong Minh Hai',
          name: 'Duong Minh Hai',
          username: 'hai.duongminh',
          role: 'researcher',
          isSupervisor: false,
          isLeader: false,
          isSystemAdmin: false,
          status: 'active',
          avatar_url: 'assets/images/duong_minh_hai.png',
          teams: ['team-smartgrid'],
          projects: ['proj-scada-01'],
          teamRoles: { 'team-smartgrid': 'member' },
          permissions: ['perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos', 'perm_ws_tasks_update', 'perm_ws_scinote_edit', 'perm_ws_datasets']
        },
        isAuthenticated: true
      };
    }

    // Check by ID in DB
    let u = await db.first('SELECT * FROM users WHERE id = ?', [devUserHeader]);
    if (u) return enrichUser(u, db);

    // Check by Email in DB
    if (devUserHeader.includes('@')) {
      u = await db.first('SELECT * FROM users WHERE email = ?', [rawVal]);
      if (u) return enrichUser(u, db);
    }

    // Check by Member Key in DB
    u = await db.first('SELECT * FROM users WHERE member_key = ?', [rawVal]);
    if (u) return enrichUser(u, db);
  }

  // 2. Check Cloudflare Access authenticated email
  if (email) {
    const u = await db.first('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (u) return enrichUser(u, db);
  }

  // 3. Check Session Token in KV or Bearer Token (from Website Login)
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
            if (sessionUser.username === 'teamleader' || sessionUser.username === 'leader.pv') {
              u = await db.first('SELECT * FROM users WHERE id = ?', ['usr-ldr-01']);
            } else if (sessionUser.username === 'researcher' || sessionUser.username === 'hai.ai') {
              u = await db.first('SELECT * FROM users WHERE id = ?', ['usr-res-01']);
            } else if (sessionUser.username === 'hai.duongminh') {
              u = await db.first('SELECT * FROM users WHERE id = ?', ['usr-res-05']);
            } else if (sessionUser.username === '100re') {
              u = await db.first('SELECT * FROM users WHERE role = ? LIMIT 1', ['admin']);
            } else {
              u = await db.first('SELECT * FROM users WHERE id = ?', ['usr-sup-01']);
            }
            if (u) return enrichUser(u, db);
          }
        }
      } catch (e) {}
    }
  }

  // 4. Default fallback: resolve Supervisor
  const defaultUser = await db.first('SELECT * FROM users WHERE role = ? LIMIT 1', ['supervisor']);
  if (defaultUser) return enrichUser(defaultUser, db);

  return {
    user: {
      id: 'usr-sup-01',
      email: 'supervisor@100relab.hust.edu.vn',
      display_name: 'Assoc. Prof. Nguyen Duc Tuyen',
      name: 'Assoc. Prof. Nguyen Duc Tuyen',
      username: 'supervisor',
      role: 'supervisor',
      isSupervisor: true,
      isLeader: true,
      isSystemAdmin: false,
      status: 'active',
      avatar_url: 'assets/images/logo.jpg',
      teams: ['team-pv', 'team-bess', 'team-ai', 'team-smartgrid', 'team-wind', 'team-ev', 'team-hydrogen', 'team-dr', 'team-uc'],
      projects: [],
      teamRoles: {},
      permissions: ['perm_ws_admin', 'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos', 'perm_members', 'perm_ws_all_teams', 'perm_ws_projects', 'perm_ws_tasks_create', 'perm_ws_tasks_update', 'perm_ws_scinote_edit', 'perm_ws_scinote_signoff', 'perm_ws_datasets', 'perm_ws_documents']
    },
    isAuthenticated: true
  };
}

async function enrichUser(userRow, db) {
  if (!userRow || userRow.status !== 'active') {
    return { user: null, isAuthenticated: false };
  }

  const teamMembers = await db.all('SELECT tm.*, t.name as team_name, t.slug as team_slug FROM team_members tm JOIN teams t ON tm.team_id = t.id WHERE tm.user_id = ?', [userRow.id]);
  const projectMembers = await db.all('SELECT pm.*, p.name as project_name FROM project_members pm JOIN projects p ON pm.project_id = p.id WHERE pm.user_id = ?', [userRow.id]);

  const teams = teamMembers.map(tm => tm.team_id);
  const projects = projectMembers.map(pm => pm.project_id);

  return {
    user: {
      ...userRow,
      teams,
      projects,
      teamMembers,
      projectMembers,
      teamRoles: Object.fromEntries(teamMembers.map(tm => [tm.team_id, tm.team_role])),
      isSupervisor: userRow.role === 'supervisor' || userRow.role === 'admin',
      isLeader: userRow.role === 'team_leader' || userRow.role === 'supervisor' || userRow.role === 'admin',
      isSystemAdmin: userRow.role === 'admin'
    },
    isAuthenticated: true
  };
}
