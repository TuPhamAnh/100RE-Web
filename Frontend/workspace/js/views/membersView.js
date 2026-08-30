/**
 * 100RE LAB WORKSPACE — Lab Members & Workspace Users Directory View
 * D1 is Source of Truth for Workspace Users.
 * KV is Source of Truth for Public Member Profiles (linked via member_key).
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
        ${Auth.isSupervisor() ? '<button class="btn-ws-primary" id="btnAdminAddUser"><i class="fa-solid fa-user-plus"></i> Add Workspace User</button>' : ''}
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
    const res = await API.get('/api/members');
    const users = res.users || res.members || [];
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
                    <span style="font-size:0.775rem; color:var(--ws-text-muted);">${escapeHtml(u.email)}</span>
                    <div style="margin-top:4px;">
                      <span class="ws-badge ${badgeClass}">${u.role.replace('_', ' ').toUpperCase()}</span>
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
                      <i class="fa-solid fa-users" style="font-size:0.65rem;"></i> ${escapeHtml(t.team_name)}
                    </span>
                  `).join('') : '<span style="font-size:0.75rem; color:var(--ws-text-light);">No team assigned</span>'}
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
                  `).join('') : '<span style="font-size:0.75rem; color:var(--ws-text-light);">No active projects</span>'}
                </div>
              </div>

              ${Auth.isSupervisor() ? `
                <div style="margin-top:14px; padding-top:10px; border-top:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center;">
                  <button class="btn-ws-ghost btn-ws-sm btn-link-kv" data-user-id="${u.id}" data-current-key="${u.member_key || ''}">
                    <i class="fa-solid fa-link"></i> ${u.member_key ? 'Edit KV Link' : 'Link to KV'}
                  </button>
                  <button class="btn-ws-ghost btn-ws-sm btn-edit-user" data-user-id="${u.id}" data-user-name="${escapeHtml(name)}" data-role="${u.role}" data-status="${u.status}">
                    <i class="fa-solid fa-user-gear"></i> Role
                  </button>
                </div>
              ` : ''}

            </div>
          </div>
        `;
      }).join('');

      // Supervisor link and edit handlers
      grid.querySelectorAll('.btn-link-kv').forEach(btn => {
        btn.addEventListener('click', async () => {
          const uid = btn.getAttribute('data-user-id');
          const currentKey = btn.getAttribute('data-current-key');
          const newKey = prompt('Nhập Member Key trong KV (ví dụ: pv-1, bess-1, dr_uc-1) hoặc để trống để bỏ liên kết:', currentKey);
          if (newKey !== null) {
            try {
              await API.patch(`/api/members/${uid}`, { member_key: newKey.trim() || null });
              showToast('Đã cập nhật liên kết KV thành công!');
              renderMembers(container);
            } catch (err) {
              showToast(err.message, true);
            }
          }
        });
      });

      grid.querySelectorAll('.btn-edit-user').forEach(btn => {
        btn.addEventListener('click', async () => {
          const uid = btn.getAttribute('data-user-id');
          const uname = btn.getAttribute('data-user-name');
          const curRole = btn.getAttribute('data-role');
          const curStatus = btn.getAttribute('data-status');

          const newRole = prompt(`Cập nhật Role cho ${uname} (supervisor / team_leader / researcher / alumni):`, curRole);
          if (!newRole) return;
          const newStatus = prompt(`Trạng thái tài khoản (active / inactive):`, curStatus);
          if (!newStatus) return;

          try {
            await API.patch(`/api/members/${uid}`, { role: newRole.trim(), status: newStatus.trim() });
            showToast('Cập nhật người dùng thành công!');
            renderMembers(container);
          } catch (err) {
            showToast(err.message, true);
          }
        });
      });
    }

    displayUsers(users);

    const searchInput = container.querySelector('#memberSearchInput');
    const roleFilter = container.querySelector('#memberRoleFilter');
    const profileFilter = container.querySelector('#memberProfileFilter');

    function applyFilter() {
      const q = searchInput.value.toLowerCase();
      const r = roleFilter.value;
      const p = profileFilter.value;

      const filtered = users.filter(u => {
        const name = (u.display_name || u.name || '').toLowerCase();
        const matchesQuery = name.includes(q) || u.email.toLowerCase().includes(q) || (u.teams && u.teams.some(t => t.team_name.toLowerCase().includes(q)));
        const matchesRole = !r || u.role === r;
        const matchesProfile = !p || (p === 'linked' ? !!u.member_key : !u.member_key);
        return matchesQuery && matchesRole && matchesProfile;
      });
      displayUsers(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilter);
    if (roleFilter) roleFilter.addEventListener('change', applyFilter);
    if (profileFilter) profileFilter.addEventListener('change', applyFilter);

    const btnAdd = container.querySelector('#btnAdminAddUser');
    if (btnAdd) {
      btnAdd.addEventListener('click', async () => {
        const name = prompt('Nhập Họ và Tên (display_name):');
        if (!name || !name.trim()) return;
        const email = prompt('Nhập Email:');
        if (!email || !email.trim()) return;
        const role = prompt('Nhập Role (supervisor / team_leader / researcher / alumni):', 'researcher');
        const memberKey = prompt('Nhập Member Key trong KV (tùy chọn, ví dụ pv-1, bess-1 hoặc để trống):', '');

        try {
          await API.post('/api/members', {
            display_name: name.trim(),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            role: role ? role.trim() : 'researcher',
            member_key: memberKey ? memberKey.trim() : null
          });
          showToast('Đã tạo Workspace User thành công!');
          renderMembers(container);
        } catch (err) {
          showToast(err.message, true);
        }
      });
    }

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
