/**
 * 100RE LAB WORKSPACE — Lab Members & Workspace Users Directory View
 * Synchronized with Lab Admin & Users console.
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatDate, escapeHtml, renderEmptyState, showToast } from '../components.js';

export async function renderMembers(container) {
  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>Workspace Users &amp; Member Profiles</h1>
        <p>100RE Laboratory researchers and contributors. D1 manages workspace access; Cloudflare KV manages public website profiles.</p>
      </div>
      <div class="ws-page-actions">
        ${Auth.isSupervisor() ? '<a href="#admin" class="btn-ws-primary" id="btnAdminAddUser"><i class="fa-solid fa-user-shield"></i> + Tạo &amp; Phân Quyền (Manage &amp; Add Users)</a>' : ''}
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="memberSearchInput" class="ws-search-input" placeholder="Search users by name, email, team...">
      <select id="memberRoleFilter" class="ws-select-filter">
        <option value="">All Roles</option>
        <option value="supervisor">Supervisor</option>
        <option value="team_leader">Team Leader</option>
        <option value="researcher">Researcher</option>
        <option value="alumni">Alumni</option>
      </select>
      <select id="memberProfileFilter" class="ws-select-filter">
        <option value="">All Profiles</option>
        <option value="linked">Linked to Public Website</option>
        <option value="unlinked">Workspace Only</option>
      </select>
    </div>

    <div id="membersGridContainer" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:18px;">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  try {
    let users = [];

    // Blacklist check
    let deletedUserIds = [];
    try {
      deletedUserIds = JSON.parse(localStorage.getItem('100re_deleted_user_ids') || '[]');
    } catch (e) {}

    try {
      const res = await API.get('/api/members');
      users = res.users || res.members || [];
    } catch (e) {
      console.warn('API members fetch error:', e);
    }

    // Default Seed Fallback if empty
    if (!users || users.length === 0) {
      users = [
        { id: 'usr-sup-01', username: 'supervisor', display_name: 'Assoc. Prof. Nguyen Duc Tuyen', name: 'Assoc. Prof. Nguyen Duc Tuyen', email: 'supervisor@100relab.hust.edu.vn', role: 'supervisor', status: 'active', teams: [], member_key: null, permissions: [] },
        { id: 'usr-ldr-01', username: 'leader.pv', display_name: 'Dr. Ngo Tri Duc', name: 'Dr. Ngo Tri Duc', email: 'leader.pv@100relab.hust.edu.vn', role: 'team_leader', status: 'active', teams: [{ team_id: 'team-pv', team_name: 'Photovoltaic (PV)' }], member_key: 'pv-1', permissions: [] },
        { id: 'usr-ldr-02', username: 'leader.bess', display_name: 'Dr. Trinh Minh Phuong', name: 'Dr. Trinh Minh Phuong', email: 'leader.bess@100relab.hust.edu.vn', role: 'team_leader', status: 'active', teams: [{ team_id: 'team-bess', team_name: 'Battery Storage (BESS)' }], member_key: 'bess-1', permissions: [] },
        { id: 'usr-res-01', username: 'hai.ai', display_name: 'Bui Quang Hai', name: 'Bui Quang Hai', email: 'hai.ai@100relab.hust.edu.vn', role: 'researcher', status: 'active', teams: [{ team_id: 'team-ai', team_name: 'Artificial Intelligence (AI)' }], member_key: 'ai-1', permissions: [] },
        { id: 'usr-res-02', username: 'anh.grid', display_name: 'Nguyen Tuan Anh', name: 'Nguyen Tuan Anh', email: 'anh.grid@100relab.hust.edu.vn', role: 'researcher', status: 'active', teams: [{ team_id: 'team-smartgrid', team_name: 'Smart Grid' }], member_key: 'dr_uc-1', permissions: [] },
        { id: 'usr-res-03', username: 'nam.wind', display_name: 'Nguyen Hoang Nam', name: 'Nguyen Hoang Nam', email: 'nam.wind@100relab.hust.edu.vn', role: 'researcher', status: 'active', teams: [{ team_id: 'team-wind', team_name: 'Wind Energy' }], member_key: 'wind-1', permissions: [] },
        { id: 'usr-res-04', username: 'cuong.ev', display_name: 'Le The Cuong', name: 'Le The Cuong', email: 'cuong.ev@100relab.hust.edu.vn', role: 'researcher', status: 'active', teams: [{ team_id: 'team-ev', team_name: 'Electric Vehicle (EV)' }], member_key: 'ev-1', permissions: [] },
        { id: 'usr-res-05', username: 'hai.duongminh', display_name: 'Duong Minh Hai', name: 'Duong Minh Hai', email: 'hai.duongminh@100relab.hust.edu.vn', role: 'researcher', status: 'active', teams: [{ team_id: 'team-smartgrid', team_name: 'Smart Grid' }], member_key: 'smartgrid-2', permissions: [] },
        { id: 'usr-res-06', username: 'dung.scada', display_name: 'Vu Tien Dung', name: 'Vu Tien Dung', email: 'dung.scada@100relab.hust.edu.vn', role: 'researcher', status: 'active', teams: [{ team_id: 'team-smartgrid', team_name: 'Smart Grid' }], member_key: 'smartgrid-3', permissions: [] }
      ];
    }

    // Filter out deleted users
    users = users.filter(u => !deletedUserIds.includes(u.id) && !deletedUserIds.includes(u.username) && !deletedUserIds.includes(u.email));

    // Merge with LocalStorage created users
    try {
      const createdList = JSON.parse(localStorage.getItem('100re_created_users') || localStorage.getItem('100re_custom_users') || '[]');
      createdList.forEach(cu => {
        if (!deletedUserIds.includes(cu.id) && !deletedUserIds.includes(cu.username) && !deletedUserIds.includes(cu.email)) {
          const idx = users.findIndex(u => u.id === cu.id || (u.username && u.username === cu.username) || (u.email && u.email === cu.email));
          if (idx >= 0) {
            users[idx] = { ...users[idx], ...cu };
          } else {
            users.unshift(cu);
          }
        }
      });
    } catch (e) {}

    const grid = container.querySelector('#membersGridContainer');

    function displayUsers(list) {
      if (list.length === 0) {
        grid.innerHTML = renderEmptyState('No users found matching your query');
        return;
      }

      grid.innerHTML = list.map(u => {
        const isSup = u.role === 'supervisor';
        const isLdr = u.role === 'team_leader';
        const isAlm = u.role === 'alumni';

        let badgeClass = 'ws-badge-low';
        if (isSup) badgeClass = 'ws-badge-urgent';
        else if (isLdr) badgeClass = 'ws-badge-high';
        else if (isAlm) badgeClass = 'ws-badge-todo';
        else badgeClass = 'ws-badge-in_progress';

        const name = u.display_name || u.name;

        return `
          <div class="ws-card" style="margin-bottom:0;">
            <div style="padding:20px;">
              <div style="display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:14px;">
                <div style="display:flex; align-items:center; gap:12px;">
                  <img src="${u.avatar_url || 'assets/images/logo.jpg'}" style="width:48px; height:48px; border-radius:50%; object-fit:cover; border:2px solid var(--ws-border);" alt="${escapeHtml(name)}">
                  <div>
                    <h3 style="font-size:1rem; font-weight:700; color:var(--ws-dark);">${escapeHtml(name)}</h3>
                    <span style="font-size:0.775rem; color:var(--ws-text-muted);">${escapeHtml(u.email || (u.username ? u.username + '@100relab.hust.edu.vn' : ''))}</span>
                    <div style="margin-top:4px;">
                      <span class="ws-badge ${badgeClass}">${String(u.role || 'researcher').replace('_', ' ').toUpperCase()}</span>
                      ${u.status === 'inactive' ? '<span class="ws-badge ws-badge-urgent">INACTIVE</span>' : ''}
                    </div>
                  </div>
                </div>
              </div>

              <!-- KV Public Profile Link Status -->
              <div style="margin-bottom:12px; padding:8px 10px; background:#f8fafc; border:1px solid var(--ws-border); border-radius:var(--ws-radius-sm); font-size:0.775rem;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="color:var(--ws-text-muted); font-weight:600;"><i class="fa-solid fa-globe"></i> Public Profile:</span>
                  ${u.member_key ? `
                    <span style="color:#16a34a; font-weight:700;"><i class="fa-solid fa-link"></i> Linked (${escapeHtml(u.member_key)})</span>
                  ` : `
                    <span style="color:var(--ws-text-light); font-weight:600;"><i class="fa-solid fa-user-lock"></i> Workspace Only</span>
                  `}
                </div>
                ${u.public_profile?.bio ? `
                  <p style="margin-top:6px; font-size:0.725rem; color:var(--ws-text-muted); display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                    ${escapeHtml(u.public_profile.bio)}
                  </p>
                ` : ''}
              </div>

              <!-- Teams section -->
              <div style="margin-bottom:10px;">
                <div style="font-size:0.7rem; font-weight:700; color:var(--ws-text-light); text-transform:uppercase; margin-bottom:4px;">Teams</div>
                <div>
                  ${u.teams && u.teams.length > 0 ? u.teams.map(t => `
                    <span class="ws-tag-pill" style="background:#e0f2fe; color:#0369a1;">
                      <i class="fa-solid fa-users" style="font-size:0.65rem;"></i> ${escapeHtml(typeof t === 'string' ? t.replace('team-', '').toUpperCase() : (t.team_name || t.team_id))}
                    </span>
                  `).join('') : '<span style="font-size:0.75rem; color:var(--ws-text-light);">Tất cả (Global)</span>'}
                </div>
              </div>

              <!-- Projects section -->
              <div>
                <div style="font-size:0.7rem; font-weight:700; color:var(--ws-text-light); text-transform:uppercase; margin-bottom:4px;">Projects</div>
                <div>
                  ${u.projects && u.projects.length > 0 ? u.projects.map(p => `
                    <span class="ws-tag-pill">
                      <i class="fa-solid fa-diagram-project" style="font-size:0.65rem;"></i> ${escapeHtml(p.project_name)}
                    </span>
                  `).join('') : '<span style="font-size:0.75rem; color:var(--ws-text-light);">No assigned projects</span>'}
                </div>
              </div>

              <!-- Supervisor Actions -->
              ${Auth.isSupervisor() ? `
                <div style="margin-top:14px; padding-top:12px; border-top:1px solid var(--ws-border); display:flex; justify-content:space-between; align-items:center;">
                  <a href="#admin" class="btn-ws-ghost btn-ws-sm" style="color:#16a34a; font-weight:600;">
                    <i class="fa-solid fa-sliders"></i> Phân Quyền Chi Tiết
                  </a>
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    displayUsers(users);

    const searchInput = container.querySelector('#memberSearchInput');
    const roleFilter = container.querySelector('#memberRoleFilter');
    const profileFilter = container.querySelector('#memberProfileFilter');

    function applyFilter() {
      const q = (searchInput?.value || '').toLowerCase();
      const r = roleFilter?.value || '';
      const p = profileFilter?.value || '';

      const filtered = users.filter(u => {
        const name = (u.display_name || u.name || '').toLowerCase();
        const email = (u.email || '').toLowerCase();
        const matchesQuery = name.includes(q) || email.includes(q) || (u.teams && u.teams.some(t => {
          const tname = typeof t === 'string' ? t : (t.team_name || t.team_id || '');
          return tname.toLowerCase().includes(q);
        }));
        const matchesRole = !r || u.role === r;
        const matchesProfile = !p || (p === 'linked' ? !!u.member_key : !u.member_key);
        return matchesQuery && matchesRole && matchesProfile;
      });
      displayUsers(filtered);
    }

    if (searchInput) searchInput?.addEventListener('input', applyFilter);
    if (roleFilter) roleFilter?.addEventListener('change', applyFilter);
    if (profileFilter) profileFilter?.addEventListener('change', applyFilter);

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
