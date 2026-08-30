/**
 * 100RE LAB WORKSPACE — Teams View & Team Detail Tabs
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { renderPriorityBadge, renderStatusBadge, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderTeams(container, teamIdOrSlug = null) {
  if (teamIdOrSlug) {
    return renderTeamDetail(container, teamIdOrSlug);
  }

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>Research Teams</h1>
        <p>100RE Laboratory multidisciplinary research teams and domains.</p>
      </div>
      <div class="ws-page-actions">
        ${Auth.isSupervisor() ? '<button class="btn-ws-primary" id="btnNewTeam"><i class="fa-solid fa-plus"></i> Create Team</button>' : ''}
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="teamSearchInput" class="ws-search-input" placeholder="Search research teams...">
    </div>

    <div id="teamsGridContainer" class="ws-stats-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  try {
    const res = await API.get('/api/teams');
    const teams = res.teams || [];
    const grid = container.querySelector('#teamsGridContainer');

    function displayTeams(list) {
      if (list.length === 0) {
        grid.innerHTML = renderEmptyState('No teams match your search');
        return;
      }

      grid.innerHTML = list.map(t => `
        <div class="ws-card" style="margin-bottom:0; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
              <div style="display:flex; align-items:center; gap:10px;">
                <div style="width:38px; height:38px; background:var(--ws-primary-light); color:var(--ws-primary); border-radius:var(--ws-radius-md); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.9rem;">
                  ${String(t.slug || 'TM').toUpperCase().slice(0, 3)}
                </div>
                <div>
                  <h3 style="font-size:1.05rem; font-weight:700; color:var(--ws-dark);">${escapeHtml(t.name)}</h3>
                  <span style="font-size:0.75rem; color:var(--ws-text-light); text-transform:uppercase; font-weight:600;">/${escapeHtml(t.slug)}</span>
                </div>
              </div>
              ${t.isLeader ? '<span class="ws-badge ws-badge-done">LEADER</span>' : (t.isMember ? '<span class="ws-badge ws-badge-in_progress">MEMBER</span>' : '')}
            </div>

            <p style="font-size:0.85rem; color:var(--ws-text-muted); margin-bottom:16px; min-height:42px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
              ${escapeHtml(t.description || 'No team description')}
            </p>

            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:6px; background:#f8fafc; padding:10px; border-radius:var(--ws-radius-md); text-align:center; font-size:0.75rem; border:1px solid var(--ws-border);">
              <div>
                <strong style="display:block; font-size:0.95rem; color:var(--ws-dark);">${t.memberCount}</strong>
                <span style="color:var(--ws-text-light);">Members</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.95rem; color:var(--ws-dark);">${t.projectCount}</strong>
                <span style="color:var(--ws-text-light);">Projects</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.95rem; color:var(--ws-dark);">${t.openTaskCount}</strong>
                <span style="color:var(--ws-text-light);">Tasks</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.95rem; color:var(--ws-dark);">${t.datasetCount}</strong>
                <span style="color:var(--ws-text-light);">Data</span>
              </div>
            </div>
          </div>

          <div style="padding:12px 20px; border-top:1px solid var(--ws-border); background:#fafbfc; display:flex; justify-content:space-between; align-items:center;">
            <a href="#teams/${t.slug}" class="btn-ws-primary btn-ws-sm" style="text-decoration:none;">
              Open Team Space <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      `).join('');
    }

    displayTeams(teams);

    const searchInput = container.querySelector('#teamSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = teams.filter(t => t.name.toLowerCase().includes(val) || (t.description && t.description.toLowerCase().includes(val)));
        displayTeams(filtered);
      });
    }

    const btnNewTeam = container.querySelector('#btnNewTeam');
    if (btnNewTeam) {
      btnNewTeam.addEventListener('click', () => {
        const name = prompt('Nhập tên Research Team mới:');
        if (name && name.trim()) {
          API.post('/api/teams', { name: name.trim() })
            .then(() => {
              renderTeams(container);
            })
            .catch(err => alert(err.message));
        }
      });
    }

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

async function renderTeamDetail(container, teamIdOrSlug) {
  container.innerHTML = `<div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>`;

  try {
    const res = await API.get(`/api/teams/${teamIdOrSlug}`);
    const { team, isLeader, stats, projects, tasks, datasets, documents, members, activity } = res;

    container.innerHTML = `
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">
            <a href="#teams" class="btn-ws-ghost btn-ws-sm"><i class="fa-solid fa-arrow-left"></i> All Teams</a>
            <span class="ws-badge ws-badge-in_progress">TEAM / ${escapeHtml(String(team.slug || '').toUpperCase())}</span>
            ${isLeader ? '<span class="ws-badge ws-badge-done">YOU ARE LEADER</span>' : ''}
          </div>
          <h1>${escapeHtml(team.name)}</h1>
          <p>${escapeHtml(team.description || 'No description provided')}</p>
        </div>
        <div class="ws-page-actions">
          <button class="btn-ws-primary" id="btnTeamActionNewProject"><i class="fa-solid fa-plus"></i> New Project</button>
          <button class="btn-ws-ghost" id="btnTeamActionNewTask"><i class="fa-solid fa-list-check"></i> New Task</button>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="ws-stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));">
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.memberCount}</div><div class="ws-stat-lbl">Members</div></div></div>
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.projectCount}</div><div class="ws-stat-lbl">Projects</div></div></div>
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.openTaskCount}</div><div class="ws-stat-lbl">Open Tasks</div></div></div>
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.datasetCount}</div><div class="ws-stat-lbl">Datasets</div></div></div>
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.docCount}</div><div class="ws-stat-lbl">Documents</div></div></div>
      </div>

      <!-- Tabs Navigation -->
      <div class="ws-tabs-bar" id="teamTabsBar">
        <button class="ws-tab-btn active" data-tab="tabProjects"><i class="fa-solid fa-diagram-project"></i> Projects (${projects.length})</button>
        <button class="ws-tab-btn" data-tab="tabTasks"><i class="fa-solid fa-list-check"></i> Tasks (${tasks.length})</button>
        <button class="ws-tab-btn" data-tab="tabData"><i class="fa-solid fa-database"></i> Research Data (${datasets.length})</button>
        <button class="ws-tab-btn" data-tab="tabDocs"><i class="fa-solid fa-file-lines"></i> Documents (${documents.length})</button>
        <button class="ws-tab-btn" data-tab="tabMembers"><i class="fa-solid fa-users"></i> Members (${members.length})</button>
        <button class="ws-tab-btn" data-tab="tabActivity"><i class="fa-solid fa-clock-rotate-left"></i> Activity</button>
      </div>

      <!-- Tab Contents -->
      <div id="teamTabContent">
        
        <!-- Tab: Projects -->
        <div id="tabProjects" class="ws-tab-pane">
          ${projects.length === 0 ? renderEmptyState('No projects yet in this team', 'Create a new project to start collaborating.') : `
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:16px;">
              ${projects.map(p => `
                <div class="ws-card" style="cursor:pointer;" onclick="location.hash='#projects/${p.id}'">
                  <div style="padding:18px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                      <h4 style="font-size:1rem; font-weight:700; color:var(--ws-dark);">${escapeHtml(p.name)}</h4>
                      ${renderStatusBadge(p.status)}
                    </div>
                    <p style="font-size:0.825rem; color:var(--ws-text-muted); margin-bottom:14px;">${escapeHtml(p.description || '')}</p>
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:6px;">
                      <span>Progress</span><strong>${p.progress}%</strong>
                    </div>
                    <div style="width:100%; height:6px; background:#f1f5f9; border-radius:3px; overflow:hidden;">
                      <div style="width:${p.progress}%; height:100%; background:var(--ws-primary);"></div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Tab: Tasks -->
        <div id="tabTasks" class="ws-tab-pane" style="display:none;">
          ${tasks.length === 0 ? renderEmptyState('No tasks in this team') : `
            <div class="ws-card">
              <div class="ws-table-container">
                <table class="ws-table">
                  <thead>
                    <tr>
                      <th>Task Title</th>
                      <th>Priority</th>
                      <th>Due Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${tasks.map(t => `
                      <tr class="clickable-task-row" data-task-id="${t.id}" style="cursor:pointer;">
                        <td><strong>${escapeHtml(t.title)}</strong></td>
                        <td>${renderPriorityBadge(t.priority)}</td>
                        <td>${t.due_date ? formatDate(t.due_date) : 'No due date'}</td>
                        <td>${renderStatusBadge(t.status)}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `}
        </div>

        <!-- Tab: Data -->
        <div id="tabData" class="ws-tab-pane" style="display:none;">
          ${datasets.length === 0 ? renderEmptyState('No datasets uploaded in this team') : `
            <div class="ws-card">
              <div class="ws-table-container">
                <table class="ws-table">
                  <thead>
                    <tr>
                      <th>Dataset Name</th>
                      <th>Type</th>
                      <th>Format</th>
                      <th>Resolution</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${datasets.map(ds => `
                      <tr>
                        <td>
                          <strong>${escapeHtml(ds.name)}</strong>
                          <div style="font-size:0.75rem; color:var(--ws-text-muted);">${escapeHtml(ds.source || '')}</div>
                        </td>
                        <td><span class="ws-badge">${escapeHtml(ds.data_type || 'time-series')}</span></td>
                        <td><strong>${escapeHtml(ds.format)}</strong></td>
                        <td>${escapeHtml(ds.resolution || 'N/A')}</td>
                        <td>
                          <button class="btn-ws-ghost btn-ws-sm" onclick="window.downloadResource('datasets', '${ds.id}', '${escapeHtml(ds.name)}.${ds.format.toLowerCase()}')">
                            <i class="fa-solid fa-download"></i> Download
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `}
        </div>

        <!-- Tab: Documents -->
        <div id="tabDocs" class="ws-tab-pane" style="display:none;">
          ${documents.length === 0 ? renderEmptyState('No documents uploaded in this team') : `
            <div class="ws-card">
              <div class="ws-table-container">
                <table class="ws-table">
                  <thead>
                    <tr>
                      <th>Document</th>
                      <th>Type</th>
                      <th>Uploaded</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${documents.map(doc => `
                      <tr>
                        <td>
                          <strong>${escapeHtml(doc.name)}</strong>
                          <div style="font-size:0.75rem; color:var(--ws-text-light);">${escapeHtml(doc.file_name)}</div>
                        </td>
                        <td><span class="ws-badge">${escapeHtml(doc.file_type.split('/')[1] || 'PDF')}</span></td>
                        <td>${formatDate(doc.created_at)}</td>
                        <td>
                          <button class="btn-ws-ghost btn-ws-sm" onclick="window.downloadResource('documents', '${doc.id}', '${escapeHtml(doc.file_name)}')">
                            <i class="fa-solid fa-download"></i> Download
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `}
        </div>

        <!-- Tab: Members -->
        <div id="tabMembers" class="ws-tab-pane" style="display:none;">
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:16px;">
            ${members.map(m => `
              <div class="ws-card" style="margin-bottom:0; padding:16px; display:flex; align-items:center; gap:12px;">
                <img src="${m.avatar_url || '../assets/images/logo.jpg'}" style="width:44px; height:44px; border-radius:50%; object-fit:cover; border:1px solid var(--ws-border);" alt="${escapeHtml(m.name)}">
                <div>
                  <strong style="font-size:0.95rem; display:block; color:var(--ws-dark);">${escapeHtml(m.name)}</strong>
                  <span style="font-size:0.75rem; color:var(--ws-text-muted);">${escapeHtml(m.email)}</span>
                  <div style="margin-top:4px;">
                    <span class="ws-badge ${m.team_role === 'leader' ? 'ws-badge-done' : 'ws-badge-low'}">${String(m.team_role || 'member').toUpperCase()}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab: Activity -->
        <div id="tabActivity" class="ws-tab-pane" style="display:none;">
          <div class="ws-card">
            <div class="ws-card-body">
              ${activity.length === 0 ? '<p>No team activity logged yet.</p>' : `
                <div style="display:flex; flex-direction:column; gap:12px;">
                  ${activity.map(a => `
                    <div style="padding:10px; background:#f8fafc; border:1px solid var(--ws-border); border-radius:var(--ws-radius-md); font-size:0.85rem;">
                      <strong>Action: ${escapeHtml(a.action)}</strong> on ${escapeHtml(a.entity_type)}
                      <div style="font-size:0.75rem; color:var(--ws-text-light); margin-top:4px;">${formatDate(a.created_at)}</div>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          </div>
        </div>

      </div>
    `;

    // Tabs switching
    container.querySelectorAll('.ws-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.ws-tab-btn').forEach(b => b.classList.remove('active'));
        container.querySelectorAll('.ws-tab-pane').forEach(p => p.style.display = 'none');
        btn.classList.add('active');
        const paneId = btn.getAttribute('data-tab');
        const pane = container.querySelector(`#${paneId}`);
        if (pane) pane.style.display = 'block';
      });
    });

    // Quick action buttons
    const btnNewProj = container.querySelector('#btnTeamActionNewProject');
    if (btnNewProj) {
      btnNewProj.addEventListener('click', () => window.openNewProjectModal(team.id));
    }
    const btnNewTsk = container.querySelector('#btnTeamActionNewTask');
    if (btnNewTsk) {
      btnNewTsk.addEventListener('click', () => window.openNewTaskModal(team.id));
    }

    container.querySelectorAll('.clickable-task-row').forEach(row => {
      row.addEventListener('click', () => {
        const taskId = row.getAttribute('data-task-id');
        if (taskId) window.openTaskDetailModal(taskId);
      });
    });

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
