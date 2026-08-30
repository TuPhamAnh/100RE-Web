/**
 * 100RE LAB WORKSPACE — Supervisor Administration Console
 * Architecture: KV (Public Profiles) + D1 (Workspace Users & RBAC) + 100RE Database
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatDate, escapeHtml, showToast, renderEmptyState } from '../components.js';

export async function renderAdmin(container) {
  if (!Auth.isSupervisor()) {
    container.innerHTML = `
      <div class="ws-empty-state">
        <i class="fa-solid fa-lock" style="color:#ef4444;"></i>
        <h3>403 Access Denied</h3>
        <p>This administrative panel is strictly restricted to Lab Supervisors.</p>
        <a href="#dashboard" class="btn-ws-primary" style="margin-top:10px; display:inline-flex;">Return to Dashboard</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>Lab Administration &amp; Access Control</h1>
        <p>Supervisor management console for workspace users, roles, team assignments, and 100RE Database storage.</p>
      </div>
      <div class="ws-page-actions">
        <button class="btn-ws-primary" id="btnAdminCreateUserModal"><i class="fa-solid fa-user-plus"></i> New Workspace User</button>
      </div>
    </div>

    <!-- System Status Row -->
    <div class="ws-stats-grid">
      <div class="ws-stat-card">
        <div class="ws-stat-info">
          <div class="ws-stat-val" style="color:#16a34a; font-size:1.4rem;">CONNECTED</div>
          <div class="ws-stat-lbl">Cloudflare D1 (Workspace DB)</div>
        </div>
        <div class="ws-stat-icon"><i class="fa-solid fa-server"></i></div>
      </div>
      <div class="ws-stat-card">
        <div class="ws-stat-info">
          <div class="ws-stat-val" style="color:#0284c7; font-size:1.4rem;">ACTIVE (5 TB)</div>
          <div class="ws-stat-lbl">100RE Database Storage</div>
        </div>
        <div class="ws-stat-icon" style="background:#e0f2fe; color:#0284c7;"><i class="fa-solid fa-database"></i></div>
      </div>
      <div class="ws-stat-card">
        <div class="ws-stat-info">
          <div class="ws-stat-val" style="color:#7c3aed; font-size:1.4rem;">ACTIVE</div>
          <div class="ws-stat-lbl">Cloudflare KV (Public Profiles)</div>
        </div>
        <div class="ws-stat-icon" style="background:#ede9fe; color:#7c3aed;"><i class="fa-solid fa-globe"></i></div>
      </div>
    </div>

    <!-- Users Management Table -->
    <div class="ws-card">
      <div class="ws-card-header">
        <div class="ws-card-title"><i class="fa-solid fa-users-gear" style="color:var(--ws-primary)"></i> Workspace Users &amp; Public Profile Linking</div>
      </div>
      <div class="ws-card-body" style="padding:0;">
        <div id="adminUsersTableContainer">
          <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
        </div>
      </div>
    </div>
  `;

  try {
    const res = await API.get('/api/members');
    const members = res.users || res.members || [];
    const teamsRes = await API.get('/api/teams');
    const teams = teamsRes.teams || [];

    const tableContainer = container.querySelector('#adminUsersTableContainer');

    function renderUserTable() {
      if (members.length === 0) {
        tableContainer.innerHTML = renderEmptyState('No users in database');
        return;
      }

      tableContainer.innerHTML = `
        <div class="ws-table-container">
          <table class="ws-table">
            <thead>
              <tr>
                <th>User / Email</th>
                <th>Public Profile (KV)</th>
                <th>Role</th>
                <th>Status</th>
                <th>Assigned Teams</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${members.map(u => {
                const name = u.display_name || u.name;
                return `
                  <tr>
                    <td>
                      <div style="display:flex; align-items:center; gap:10px;">
                        <img src="${u.avatar_url || 'assets/images/logo.jpg'}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; border:1px solid var(--ws-border);" alt="${escapeHtml(name)}">
                        <div>
                          <strong style="color:var(--ws-dark); font-size:0.9rem; display:block;">${escapeHtml(name)}</strong>
                          <span style="font-size:0.775rem; color:var(--ws-text-muted);">${escapeHtml(u.email)}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      ${u.member_key ? `
                        <span class="ws-tag-pill" style="background:#dcfce7; color:#16a34a; font-weight:700;">
                          <i class="fa-solid fa-link"></i> ${escapeHtml(u.member_key)}
                        </span>
                      ` : `
                        <span style="font-size:0.75rem; color:var(--ws-text-light); font-style:italic;">No KV Profile</span>
                      `}
                    </td>
                    <td>
                      <select class="form-control role-changer-select" data-user-id="${u.id}" style="padding:4px 8px; font-size:0.8rem; width:130px;">
                        <option value="supervisor" ${u.role === 'supervisor' ? 'selected' : ''}>Supervisor</option>
                        <option value="team_leader" ${u.role === 'team_leader' ? 'selected' : ''}>Team Leader</option>
                        <option value="researcher" ${u.role === 'researcher' ? 'selected' : ''}>Researcher</option>
                        <option value="alumni" ${u.role === 'alumni' ? 'selected' : ''}>Alumni</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-control status-changer-select" data-user-id="${u.id}" style="padding:4px 8px; font-size:0.8rem; width:100px;">
                        <option value="active" ${u.status === 'active' ? 'selected' : ''}>Active</option>
                        <option value="inactive" ${u.status === 'inactive' ? 'selected' : ''}>Inactive</option>
                      </select>
                    </td>
                    <td>
                      <div style="display:flex; flex-wrap:wrap; gap:4px;">
                        ${u.teams && u.teams.length > 0 ? u.teams.map(t => `
                          <span class="ws-tag-pill" style="display:inline-flex; align-items:center; gap:4px;">
                            ${escapeHtml(t.team_name)}
                            <i class="fa-solid fa-xmark remove-team-btn" data-user-id="${u.id}" data-team-id="${t.team_id}" style="cursor:pointer; color:#dc2626;" title="Remove from team"></i>
                          </span>
                        `).join('') : '<span style="font-size:0.75rem; color:var(--ws-text-light);">None</span>'}
                      </div>
                    </td>
                    <td>
                      <div style="display:flex; gap:6px;">
                        <button class="btn-ws-ghost btn-ws-sm btn-assign-team" data-user-id="${u.id}" data-user-name="${escapeHtml(name)}">
                          <i class="fa-solid fa-plus"></i> Team
                        </button>
                        <button class="btn-ws-ghost btn-ws-sm btn-edit-kv-link" data-user-id="${u.id}" data-current-key="${u.member_key || ''}" title="Link to Public Member Profile in KV">
                          <i class="fa-solid fa-link"></i> KV
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;

      // Event listeners
      tableContainer.querySelectorAll('.role-changer-select').forEach(sel => {
        sel.addEventListener('change', async (e) => {
          const uid = sel.getAttribute('data-user-id');
          const newRole = e.target.value;
          try {
            await API.patch(`/api/members/${uid}`, { role: newRole });
            showToast('Đã cập nhật vai trò người dùng thành công!');
          } catch (err) {
            showToast(err.message, true);
          }
        });
      });

      tableContainer.querySelectorAll('.status-changer-select').forEach(sel => {
        sel.addEventListener('change', async (e) => {
          const uid = sel.getAttribute('data-user-id');
          const newStatus = e.target.value;
          try {
            await API.patch(`/api/members/${uid}`, { status: newStatus });
            showToast('Đã cập nhật trạng thái người dùng thành công!');
          } catch (err) {
            showToast(err.message, true);
          }
        });
      });

      tableContainer.querySelectorAll('.btn-edit-kv-link').forEach(btn => {
        btn.addEventListener('click', async () => {
          const uid = btn.getAttribute('data-user-id');
          const cur = btn.getAttribute('data-current-key');
          const key = prompt('Nhập Member Key trong KV (ví dụ: pv-1, bess-1, dr_uc-1) hoặc để trống:', cur);
          if (key !== null) {
            try {
              await API.patch(`/api/members/${uid}`, { member_key: key.trim() || null });
              showToast('Đã cập nhật liên kết KV thành công!');
              renderAdmin(container);
            } catch (err) {
              showToast(err.message, true);
            }
          }
        });
      });

      tableContainer.querySelectorAll('.remove-team-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const uid = btn.getAttribute('data-user-id');
          const tid = btn.getAttribute('data-team-id');
          if (confirm('Bạn có chắc muốn xóa thành viên khỏi team này?')) {
            try {
              await API.delete(`/api/members/${uid}/teams/${tid}`);
              showToast('Đã xóa thành viên khỏi Team.');
              renderAdmin(container);
            } catch (err) {
              showToast(err.message, true);
            }
          }
        });
      });

      tableContainer.querySelectorAll('.btn-assign-team').forEach(btn => {
        btn.addEventListener('click', async () => {
          const uid = btn.getAttribute('data-user-id');
          const uname = btn.getAttribute('data-user-name');
          const teamOptions = teams.map((t, idx) => `${idx + 1}. ${t.name} (${t.id})`).join('\n');
          const choice = prompt(`Chọn Team gán cho ${uname}:\n\n${teamOptions}\n\nNhập ID Team (ví dụ: team-pv, team-bess):`);
          if (choice && choice.trim()) {
            const teamId = choice.trim();
            const roleChoice = prompt('Vai trò trong team (leader / member):', 'member');
            try {
              await API.post(`/api/members/${uid}/teams`, {
                team_id: teamId,
                team_role: roleChoice === 'leader' ? 'leader' : 'member'
              });
              showToast(`Đã gán ${uname} vào team thành công!`);
              renderAdmin(container);
            } catch (err) {
              showToast(err.message, true);
            }
          }
        });
      });
    }

    renderUserTable();

    container.querySelector('#btnAdminCreateUserModal')?.addEventListener('click', async () => {
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
        showToast('Đã tạo người dùng mới trong D1!');
        renderAdmin(container);
      } catch (err) {
        showToast(err.message, true);
      }
    });

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
