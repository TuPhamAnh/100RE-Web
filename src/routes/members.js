/**
 * 100RE LAB WORKSPACE — Public Members (KV) & Workspace Users (D1) Handler
 * Supports Granular Permissions Matrix and Dynamic Account Creation
 */

import { RBAC } from '../rbac.js';
import { logActivity } from '../activity.js';

export async function handlePublicMembers(request, env) {
  const method = request.method;

  const DEFAULT_MEMBERS = [
    { id: "pv-1", name: "Ngô Trí Đức", team: "pv", teamName: "PV Team", role: "PV Team", image: "assets/images/ngo_tri_duc.png", bio: "Researcher in the PV Team at 100RE Laboratory. Focusing on photovoltaic systems modeling, performance analysis, and optimization." },
    { id: "pv-2", name: "Bui Quang Minh", team: "pv", teamName: "PV Team", role: "PV Team", image: "assets/images/bui_quang_minh.jpg", bio: "Researcher in the PV Team at 100RE Laboratory. Dedicated to solar irradiance modeling and high-efficiency photovoltaic integration." },
    { id: "ai-1", name: "Bui Quang Hai", team: "ai", teamName: "AI Team", role: "AI Team", image: "assets/images/bui_quang_hai.jpg", bio: "Researcher in the AI Team at 100RE Laboratory. Specializing in Artificial Intelligence, Deep Learning, and Neural Network applications for renewable energy systems." },
    { id: "dr_uc-1", name: "Nguyen Tuan Anh", team: "dr_uc", teamName: "Demand Response and Unit Commitment Team", role: "Unit Commitment Team", image: "assets/images/nguyen_tuan_anh.jpg", bio: "Researcher at 100RE Laboratory. Research focus: Unit commitment optimization, demand response mechanisms, power dispatch algorithms. Contact: Tel: +84 974 812 546 | Email: anh.nt196322@sis.hust.edu.vn" },
    { id: "dr_uc-2", name: "Le Anh Quan", team: "dr_uc", teamName: "Demand Response and Unit Commitment Team", role: "Unit Commitment Team", image: "assets/images/le_anh_quan.png", bio: "Researcher in Demand Response & Unit Commitment Team at 100RE Laboratory. Focusing on mathematical modeling, power system economic dispatch, and load curve optimization." },
    { id: "wind-1", name: "Nguyen Hoang Nam", team: "wind", teamName: "Wind Team", role: "Wind Team", image: "assets/images/nguyen_hoang_nam.jpg", bio: "Researcher in the Wind Energy Team at 100RE Laboratory. Researching wind turbine aerodynamics, power curve forecasting, and grid integration." },
    { id: "wind-2", name: "Nguyễn Như Tùng", team: "wind", teamName: "Wind Team", role: "Wind Team", image: "assets/images/nguyen_nhu_tung.png", bio: "Researcher in the Wind Team at 100RE Laboratory. Focusing on wind farm layout optimization and wake effect modeling." },
    { id: "smartgrid-1", name: "Le Ngoc Dung", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/le_ngoc_dung.jpg", bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Researching microgrid management, communication protocols, and grid automation." },
    { id: "smartgrid-2", name: "Duong Minh Hai", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/duong_minh_hai.png", bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Focused on real-time SCADA monitoring, voltage stability, and active distribution networks." },
    { id: "smartgrid-3", name: "Vu Tien Dung", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/vu_tien_dung.png", bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Investigating power quality improvement, inverter control, and distributed energy resources." },
    { id: "ev-1", name: "Le The Cuong", team: "ev", teamName: "Electric Vehicle", role: "Electric Vehicle Team", image: "assets/images/le_the_cuong.jpg", bio: "Researcher in the Electric Vehicle Team at 100RE Laboratory. Specializing in EV charging infrastructure, V2G (Vehicle-to-Grid) interactions, and power electronics." },
    { id: "ev-2", name: "Dao Quoc Khanh", team: "ev", teamName: "Electric Vehicle", role: "Electric Vehicle Team", image: "assets/images/dao_quoc_khanh.jpg", bio: "Researcher in the Electric Vehicle Team at 100RE Laboratory. Focused on smart charging scheduling and EV battery health degradation modeling." },
    { id: "hydrogen-1", name: "Nguyen Hoang Anh", team: "hydrogen", teamName: "Hydrogen Team", role: "Hydrogen Team", image: "assets/images/nguyen_hoang_anh.jpg", bio: "Researcher in the Hydrogen Team at 100RE Laboratory. Exploring Green Hydrogen production via water electrolysis, fuel cell efficiency, and hydrogen storage supply chains." },
    { id: "bess-1", name: "Trinh Minh Phuong", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/trinh_minh_phuong.jpg", bio: "Researcher in the BESS Team at 100RE Laboratory. Dedicated to battery state of charge (SoC) estimation, state of health (SoH), and energy storage economics." },
    { id: "bess-2", name: "Nguyen Quang Anh", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/nguyen_quang_anh.png", bio: "Researcher in the BESS Team at 100RE Laboratory. Working on battery energy management systems (BEMS) and hybrid renewable storage systems." },
    { id: "bess-3", name: "Tran Thi Hong Vinh", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/tran_thi_hong_vinh.png", bio: "Researcher in the BESS Team at 100RE Laboratory. Specializing in battery degradation models, thermal management, and energy storage peak shaving strategies." }
  ];

  // Helper to merge KV updates into default members ensuring all 8 teams always exist
  function mergeMembers(customList) {
    if (!Array.isArray(customList) || customList.length === 0) return DEFAULT_MEMBERS;
    const map = new Map(DEFAULT_MEMBERS.map(m => [String(m.id), { ...m }]));
    for (const cm of customList) {
      if (cm && cm.id) {
        const existing = map.get(String(cm.id)) || {};
        map.set(String(cm.id), { ...existing, ...cm });
      }
    }
    return Array.from(map.values());
  }

  if (method === 'GET') {
    if (env && env.MEMBERS_KV) {
      const custom = (await env.MEMBERS_KV.get('members_list')) || (await env.MEMBERS_KV.get('members_data'));
      if (custom) {
        try {
          const parsed = JSON.parse(custom);
          return mergeMembers(parsed);
        } catch (e) {}
      }
    }
    return DEFAULT_MEMBERS;
  }

  if (method === 'POST' || method === 'PUT') {
    try {
      const body = await request.json();
      let current = DEFAULT_MEMBERS;
      if (env && env.MEMBERS_KV) {
        const custom = (await env.MEMBERS_KV.get('members_list')) || (await env.MEMBERS_KV.get('members_data'));
        if (custom) {
          try { current = JSON.parse(custom); } catch (e) {}
        }
      }

      let savedMember = null;
      if (Array.isArray(body)) {
        current = body;
      } else if (body && Array.isArray(body.members)) {
        current = body.members;
      } else if (body && (body.name || body.display_name)) {
        const item = {
          id: body.id || `${body.team || 'pv'}-${Date.now()}`,
          name: body.name || body.display_name,
          team: body.team || 'pv',
          teamName: body.teamName || (body.team ? body.team.toUpperCase() + ' Team' : 'PV Team'),
          role: body.role || 'Researcher',
          image: body.image || body.avatar_url || 'assets/images/logo.jpg',
          bio: body.bio || ''
        };
        const idx = current.findIndex(m => String(m.id) === String(item.id));
        if (idx !== -1) {
          current[idx] = { ...current[idx], ...item };
        } else {
          current.unshift(item);
        }
        savedMember = item;
      }

      if (env && env.MEMBERS_KV) {
        await env.MEMBERS_KV.put('members_list', JSON.stringify(current));
      }
      return { success: true, member: savedMember, members: mergeMembers(current) };
    } catch (e) {
      return { error: 'Failed to update members: ' + e.message };
    }
  }

  if (method === 'DELETE') {
    try {
      const url = new URL(request.url);
      const memberId = url.pathname.split('/').pop();
      let current = DEFAULT_MEMBERS;
      if (env && env.MEMBERS_KV) {
        const custom = (await env.MEMBERS_KV.get('members_list')) || (await env.MEMBERS_KV.get('members_data'));
        if (custom) {
          try { current = JSON.parse(custom); } catch (e) {}
        }
      }
      current = current.filter(m => String(m.id) !== String(memberId));
      if (env && env.MEMBERS_KV) {
        await env.MEMBERS_KV.put('members_list', JSON.stringify(current));
      }
      return { success: true, members: current };
    } catch (e) {
      return { error: 'Failed to delete member: ' + e.message };
    }
  }

  return { error: 'Method Not Allowed' };
}

// Default permissions helper
export function getDefaultPermissionsForRole(role) {
  if (role === 'supervisor') {
    return [
      'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos', 'perm_members',
      'perm_ws_all_teams', 'perm_ws_projects', 'perm_ws_tasks_create', 'perm_ws_tasks_update',
      'perm_ws_scinote_edit', 'perm_ws_scinote_signoff', 'perm_ws_datasets', 'perm_ws_documents', 'perm_ws_admin'
    ];
  } else if (role === 'team_leader') {
    return [
      'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos', 'perm_members',
      'perm_ws_projects', 'perm_ws_tasks_create', 'perm_ws_tasks_update',
      'perm_ws_scinote_edit', 'perm_ws_datasets', 'perm_ws_documents'
    ];
  } else if (role === 'researcher') {
    return [
      'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos',
      'perm_ws_tasks_update', 'perm_ws_scinote_edit', 'perm_ws_datasets'
    ];
  } else {
    // alumni / view only
    return ['perm_ws_documents'];
  }
}

export async function handleWorkspaceUsers(request, user, db, env) {
  const url = new URL(request.url);
  const method = request.method;
  const pathParts = url.pathname.split('/').filter(Boolean); // ['api', 'members'|'workspace'..., ':id', 'teams', ':teamId']
  const targetId = pathParts[2] || null;
  const subAction = pathParts[3] || null;
  const subActionParam = pathParts[4] || null;

  // 1. GET /api/members (or /api/workspace/users)
  if (!targetId && method === 'GET') {
    const allUsers = await db.all('SELECT id, email, display_name, member_key, avatar_url, role, status, created_at, updated_at FROM users ORDER BY display_name ASC');
    const allTeams = await db.all('SELECT id, name, slug FROM teams');
    const allTeamMembers = await db.all('SELECT * FROM team_members');
    const allProjectMembers = await db.all('SELECT * FROM project_members');
    const allProjects = await db.all('SELECT id, name, slug FROM projects');

    // Fetch Public Members from KV to enrich profile if member_key exists
    let publicMembersMap = new Map();
    if (env && env.MEMBERS_KV) {
      try {
        const kvListStr = (await env.MEMBERS_KV.get('members_list')) || (await env.MEMBERS_KV.get('members_data'));
        if (kvListStr) {
          const list = JSON.parse(kvListStr);
          list.forEach(m => publicMembersMap.set(m.id, m));
        }
      } catch (e) {}
    }

    const teamMap = new Map(allTeams.map(t => [t.id, t]));
    const projMap = new Map(allProjects.map(p => [p.id, p]));

    const enriched = await Promise.all(allUsers.map(async u => {
      const userTeams = allTeamMembers
        .filter(tm => tm.user_id === u.id)
        .map(tm => ({
          team_id: tm.team_id,
          team_name: teamMap.get(tm.team_id)?.name || tm.team_id,
          team_slug: teamMap.get(tm.team_id)?.slug || tm.team_id,
          team_role: tm.team_role
        }));

      const userProjects = allProjectMembers
        .filter(pm => pm.user_id === u.id)
        .map(pm => ({
          project_id: pm.project_id,
          project_name: projMap.get(pm.project_id)?.name || pm.project_id,
          project_role: pm.project_role
        }));

      const publicProfile = u.member_key ? publicMembersMap.get(u.member_key) || null : null;

      // Fetch custom permissions from KV
      let perms = getDefaultPermissionsForRole(u.role);
      if (env && env.MEMBERS_KV) {
        try {
          const customPermsStr = await env.MEMBERS_KV.get('user_perms_' + u.id);
          if (customPermsStr) {
            perms = JSON.parse(customPermsStr);
          }
        } catch (e) {}
      }

      return {
        id: u.id,
        email: u.email,
        display_name: u.display_name,
        name: u.display_name,
        member_key: u.member_key,
        avatar_url: u.avatar_url || publicProfile?.image || 'assets/images/logo.jpg',
        role: u.role,
        status: u.status,
        permissions: perms,
        teams: userTeams,
        projects: userProjects,
        public_profile: publicProfile,
        is_linked_to_public: !!u.member_key,
        canManage: RBAC.canManageUsers(user)
      };
    }));

    // Synchronize and include all public lab researchers into the member pool
    let publicList = Array.from(publicMembersMap.values());
    if (publicList.length === 0) publicList = DEFAULT_MEMBERS;

    for (const pm of publicList) {
      const alreadyInEnriched = enriched.some(u => 
        u.member_key === pm.id || 
        (u.name && u.name.toLowerCase() === pm.name.toLowerCase()) || 
        (u.display_name && u.display_name.toLowerCase() === pm.name.toLowerCase())
      );

      if (!alreadyInEnriched) {
        const teamSlug = `team-${pm.team}`;
        const teamObj = allTeams.find(t => t.slug === pm.team || t.id === teamSlug);
        const teamName = teamObj?.name || pm.teamName || `${pm.team.toUpperCase()} Team`;
        const emailSlug = pm.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '.');

        enriched.push({
          id: `usr-${pm.id}`,
          email: `${emailSlug}@100relab.hust.edu.vn`,
          display_name: pm.name,
          name: pm.name,
          member_key: pm.id,
          avatar_url: pm.image || 'assets/images/logo.jpg',
          role: pm.role && pm.role.toLowerCase().includes('leader') ? 'team_leader' : 'researcher',
          status: 'active',
          permissions: getDefaultPermissionsForRole('researcher'),
          teams: [{
            team_id: teamObj?.id || teamSlug,
            team_name: teamName,
            team_slug: pm.team,
            team_role: 'member'
          }],
          projects: [],
          public_profile: pm,
          is_linked_to_public: true,
          canManage: RBAC.canManageUsers(user)
        });
      }
    }

    return { success: true, members: enriched, users: enriched };
  }

  // 2. POST /api/members (Create Workspace User with Granular Permissions - Supervisor only)
  if (!targetId && method === 'POST') {
    if (!RBAC.canManageUsers(user)) {
      return { error: 'Forbidden: Chỉ Supervisor mới có quyền tạo User mới.', status: 403 };
    }

    const body = await request.json();
    const email = (body.email || '').trim().toLowerCase();
    const display_name = (body.display_name || body.name || '').trim();
    const username = (body.username || email.split('@')[0] || '').trim().toLowerCase();
    const password = body.password || '100re';
    const role = body.role || 'researcher';
    const member_key = body.member_key ? body.member_key.trim() : null;
    const avatar_url = body.avatar_url || 'assets/images/logo.jpg';
    const teams = Array.isArray(body.teams) ? body.teams : (body.team_id ? [body.team_id] : []);
    const permissions = Array.isArray(body.permissions) ? body.permissions : getDefaultPermissionsForRole(role);

    if (!email || !display_name) {
      return { error: 'Email và Tên hiển thị là bắt buộc.', status: 400 };
    }

    const id = `usr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      'INSERT INTO users (id, email, display_name, member_key, avatar_url, role, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [id, email, display_name, member_key, avatar_url, role, 'active', now, now]
    );

    // Save Teams
    for (const tid of teams) {
      if (tid) {
        await db.run(
          'INSERT OR IGNORE INTO team_members (id, team_id, user_id, team_role, joined_at) VALUES (?, ?, ?, ?, ?)',
          [`tm-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`, tid, id, role === 'team_leader' ? 'leader' : 'member', now]
        );
      }
    }

    // Save Permissions and Credentials in KV
    if (env && env.MEMBERS_KV) {
      try {
        await env.MEMBERS_KV.put('user_perms_' + id, JSON.stringify(permissions));
        if (username) {
          const cred = {
            userId: id,
            id,
            username,
            password,
            display_name,
            email,
            role,
            permissions,
            teams
          };
          await env.MEMBERS_KV.put('user_cred_' + username, JSON.stringify(cred));
        }
      } catch (e) {
        console.error('Error storing KV user permissions / credentials', e);
      }
    }

    await logActivity(db, {
      userId: user.id,
      entityType: 'user',
      entityId: id,
      action: 'create_user',
      metadata: { display_name, email, username, role, member_key, permissionsCount: permissions.length }
    });

    return {
      success: true,
      user: { id, username, email, display_name, role, member_key, status: 'active', avatar_url, permissions, teams }
    };
  }

  // 3. PATCH /api/members/:id (Update Workspace User & Granular Permissions - Supervisor only)
  if (targetId && !subAction && method === 'PATCH') {
    if (!RBAC.canManageUsers(user)) {
      return { error: 'Forbidden: Chỉ Supervisor mới có quyền cập nhật User.', status: 403 };
    }

    const targetUser = await db.first('SELECT * FROM users WHERE id = ?', [targetId]);
    if (!targetUser) return { error: 'Không tìm thấy User.', status: 404 };

    const body = await request.json();
    const display_name = body.display_name ? body.display_name.trim() : (body.name ? body.name.trim() : targetUser.display_name);
    const role = body.role || targetUser.role;
    const status = body.status || targetUser.status;
    const member_key = body.member_key !== undefined ? (body.member_key ? body.member_key.trim() : null) : targetUser.member_key;
    const avatar_url = body.avatar_url || targetUser.avatar_url;
    const permissions = Array.isArray(body.permissions) ? body.permissions : null;
    const password = body.password || null;
    const teams = Array.isArray(body.teams) ? body.teams : null;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      'UPDATE users SET display_name = ?, role = ?, status = ?, member_key = ?, avatar_url = ?, updated_at = ? WHERE id = ?',
      [display_name, role, status, member_key, avatar_url, now, targetUser.id]
    );

    // Update Teams if provided
    if (teams !== null) {
      await db.run('DELETE FROM team_members WHERE user_id = ?', [targetUser.id]);
      for (const tid of teams) {
        if (tid) {
          await db.run(
            'INSERT OR IGNORE INTO team_members (id, team_id, user_id, team_role, joined_at) VALUES (?, ?, ?, ?, ?)',
            [`tm-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`, tid, targetUser.id, role === 'team_leader' ? 'leader' : 'member', now]
          );
        }
      }
    }

    // Update KV permissions and credentials
    if (env && env.MEMBERS_KV) {
      try {
        if (permissions !== null) {
          await env.MEMBERS_KV.put('user_perms_' + targetUser.id, JSON.stringify(permissions));
        }
        if (body.username || password) {
          const username = (body.username || targetUser.email.split('@')[0] || '').trim().toLowerCase();
          const cred = {
            userId: targetUser.id,
            id: targetUser.id,
            username,
            password: password || '100re',
            display_name,
            email: targetUser.email,
            role,
            permissions: permissions || getDefaultPermissionsForRole(role),
            teams: teams || []
          };
          await env.MEMBERS_KV.put('user_cred_' + username, JSON.stringify(cred));
        }
      } catch (e) {
        console.error('Error updating KV user permissions', e);
      }
    }

    await logActivity(db, {
      userId: user.id,
      entityType: 'user',
      entityId: targetUser.id,
      action: 'update_user_role',
      metadata: { target_name: display_name, new_role: role, new_status: status, member_key, permissionsCount: permissions ? permissions.length : undefined }
    });

    return {
      success: true,
      user: { ...targetUser, display_name, name: display_name, role, status, member_key, avatar_url, permissions, updated_at: now }
    };
  }

  // 4. POST /api/members/:id/teams (Assign User to Team)
  if (targetId && subAction === 'teams' && method === 'POST') {
    if (!RBAC.canManageUsers(user)) {
      return { error: 'Forbidden: Chỉ Supervisor mới có quyền gán Team.', status: 403 };
    }

    const body = await request.json();
    const team_id = body.team_id;
    const team_role = body.team_role || 'member';

    if (!team_id) return { error: 'team_id là bắt buộc.', status: 400 };

    const now = Math.floor(Date.now() / 1000);
    await db.run(
      'INSERT OR IGNORE INTO team_members (id, team_id, user_id, team_role, joined_at) VALUES (?, ?, ?, ?, ?)',
      [`tm-${Date.now()}`, team_id, targetId, team_role, now]
    );

    return { success: true, message: 'Đã gán thành viên vào Team thành công.' };
  }

  // 5. DELETE /api/members/:id/teams/:teamId (Remove User from Team)
  if (targetId && subAction === 'teams' && subActionParam && method === 'DELETE') {
    if (!RBAC.canManageUsers(user)) {
      return { error: 'Forbidden: Chỉ Supervisor mới có quyền xóa khỏi Team.', status: 403 };
    }

    await db.run('DELETE FROM team_members WHERE team_id = ? AND user_id = ?', [subActionParam, targetId]);
    return { success: true, message: 'Đã xóa thành viên khỏi Team.' };
  }

  // 6. DELETE /api/members/:id (Delete User - Supervisor only)
  if (targetId && !subAction && method === 'DELETE') {
    if (!RBAC.canManageUsers(user)) {
      return { error: 'Forbidden: Chỉ Supervisor mới có quyền xóa User.', status: 403 };
    }

    await db.run('DELETE FROM users WHERE id = ?', [targetId]);
    await db.run('DELETE FROM team_members WHERE user_id = ?', [targetId]);
    await db.run('DELETE FROM project_members WHERE user_id = ?', [targetId]);
    if (env && env.MEMBERS_KV) {
      try {
        await env.MEMBERS_KV.delete('user_perms_' + targetId);
      } catch (e) {}
    }
    return { success: true, message: 'Đã xóa người dùng thành công.' };
  }

  return { error: 'Method Not Allowed', status: 405 };
}
