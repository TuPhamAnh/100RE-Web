/**
 * 100RE LAB WORKSPACE — Projects View & Project Detail
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { renderPriorityBadge, renderStatusBadge, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderProjects(container, projectId = null) {
  if (projectId) {
    return renderProjectDetail(container, projectId);
  }

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>Research Projects</h1>
        <p>Active and planned multi-disciplinary research projects across 100RE Lab.</p>
      </div>
      <div class="ws-page-actions">
        ${Auth.isTeamLeader() ? '<button class="btn-ws-primary" id="btnNewProject"><i class="fa-solid fa-plus"></i> New Project</button>' : ''}
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="projectSearchInput" class="ws-search-input" placeholder="Search projects...">
      <select id="projectStatusFilter" class="ws-select-filter">
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="planning">Planning</option>
        <option value="paused">Paused</option>
        <option value="completed">Completed</option>
      </select>
    </div>

    <div id="projectsGridContainer" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:18px;">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  try {
    const res = await API.get('/api/projects');
    const projects = res.projects || [];
    const grid = container.querySelector('#projectsGridContainer');

    function displayProjects(list) {
      if (list.length === 0) {
        grid.innerHTML = renderEmptyState('No projects match your filter');
        return;
      }

      grid.innerHTML = list.map(p => `
        <div class="ws-card" style="margin-bottom:0; cursor:pointer;" onclick="location.hash='#projects/${p.id}'">
          <div style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
              <span class="ws-badge ws-badge-in_progress">${p.team ? escapeHtml(p.team.name) : 'General'}</span>
              ${renderStatusBadge(p.status)}
            </div>

            <h3 style="font-size:1.1rem; font-weight:700; color:var(--ws-dark); margin-bottom:8px; line-height:1.3;">
              ${escapeHtml(p.name)}
            </h3>

            <p style="font-size:0.85rem; color:var(--ws-text-muted); margin-bottom:16px; min-height:42px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
              ${escapeHtml(p.description || 'No description')}
            </p>

            <div style="margin-bottom:14px;">
              <div style="display:flex; justify-content:space-between; font-size:0.775rem; margin-bottom:6px;">
                <span style="color:var(--ws-text-muted);">Progress</span>
                <strong style="color:var(--ws-dark);">${p.progress}%</strong>
              </div>
              <div style="width:100%; height:6px; background:#f1f5f9; border-radius:3px; overflow:hidden;">
                <div style="width:${p.progress}%; height:100%; background:var(--ws-primary);"></div>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--ws-text-light); border-top:1px solid #f1f5f9; padding-top:10px;">
              <span><i class="fa-solid fa-list-check"></i> ${p.openTaskCount} Open Tasks</span>
              <span><i class="fa-solid fa-users"></i> ${p.memberCount} Members</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    displayProjects(projects);

    const searchInput = container.querySelector('#projectSearchInput');
    const statusFilter = container.querySelector('#projectStatusFilter');

    function applyFilter() {
      const q = searchInput.value.toLowerCase();
      const s = statusFilter.value;
      const filtered = projects.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q));
        const matchesStatus = !s || p.status === s;
        return matchesQuery && matchesStatus;
      });
      displayProjects(filtered);
    }

    if (searchInput) searchInput?.addEventListener('input', applyFilter);
    if (statusFilter) statusFilter?.addEventListener('change', applyFilter);

    const btnNew = container.querySelector('#btnNewProject');
    if (btnNew) {
      btnNew?.addEventListener('click', () => window.openNewProjectModal());
    }

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

async function renderProjectDetail(container, projectId) {
  container.innerHTML = `<div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>`;

  try {
    const res = await API.get(`/api/projects/${projectId}`);
    const { project, team, isLeader, stats, tasks, datasets, documents, members, activity } = res;

    container.innerHTML = `
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">
            <a href="#projects" class="btn-ws-ghost btn-ws-sm"><i class="fa-solid fa-arrow-left"></i> All Projects</a>
            <span class="ws-badge ws-badge-in_progress">${team ? escapeHtml(team.name) : 'Team'}</span>
            ${renderStatusBadge(project.status)}
            ${isLeader ? '<span class="ws-badge ws-badge-done">YOU ARE LEADER</span>' : ''}
          </div>
          <h1>${escapeHtml(project.name)}</h1>
          <p>${escapeHtml(project.description || 'No description provided')}</p>
        </div>
        <div class="ws-page-actions">
          <button class="btn-ws-primary" id="btnProjActionNewTask"><i class="fa-solid fa-plus"></i> New Task</button>
          <button class="btn-ws-ghost" id="btnProjActionUploadData"><i class="fa-solid fa-database"></i> Upload Data</button>
          <button class="btn-ws-ghost" id="btnProjActionUploadDoc"><i class="fa-solid fa-file-arrow-up"></i> Upload Doc</button>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="ws-stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));">
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${project.progress}%</div><div class="ws-stat-lbl">Progress</div></div></div>
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.taskCount}</div><div class="ws-stat-lbl">Total Tasks</div></div></div>
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.openTaskCount}</div><div class="ws-stat-lbl">Open Tasks</div></div></div>
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.datasetCount}</div><div class="ws-stat-lbl">Datasets</div></div></div>
        <div class="ws-stat-card"><div class="ws-stat-info"><div class="ws-stat-val">${stats.documentCount}</div><div class="ws-stat-lbl">Documents</div></div></div>
      </div>

      <!-- Tabs Navigation -->
      <div class="ws-tabs-bar" id="projTabsBar">
        <button class="ws-tab-btn active" data-tab="tabProjTasks"><i class="fa-solid fa-list-check"></i> Tasks (${tasks.length})</button>
        <button class="ws-tab-btn" data-tab="tabProjData"><i class="fa-solid fa-database"></i> Research Data (${datasets.length})</button>
        <button class="ws-tab-btn" data-tab="tabProjDocs"><i class="fa-solid fa-file-lines"></i> Documents (${documents.length})</button>
        <button class="ws-tab-btn" data-tab="tabProjMembers"><i class="fa-solid fa-users"></i> Members (${members.length})</button>
        <button class="ws-tab-btn" data-tab="tabProjActivity"><i class="fa-solid fa-clock-rotate-left"></i> Activity</button>
      </div>

      <!-- Tab Contents -->
      <div id="projTabContent">
        <!-- Tab: Tasks -->
        <div id="tabProjTasks" class="ws-tab-pane">
          ${tasks.length === 0 ? renderEmptyState('No tasks in this project yet', 'Click New Task to add work items.') : `
            <div class="ws-card">
              <div class="ws-table-container">
                <table class="ws-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Priority</th>
                      <th>Deadline</th>
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
        <div id="tabProjData" class="ws-tab-pane" style="display:none;">
          ${datasets.length === 0 ? renderEmptyState('No research datasets attached to this project') : `
            <div class="ws-card">
              <div class="ws-table-container">
                <table class="ws-table">
                  <thead>
                    <tr>
                      <th>Dataset Name</th>
                      <th>Format</th>
                      <th>Resolution</th>
                      <th>Uploaded</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${datasets.map(ds => `
                      <tr>
                        <td><strong>${escapeHtml(ds.name)}</strong></td>
                        <td><span class="ws-badge">${escapeHtml(ds.format)}</span></td>
                        <td>${escapeHtml(ds.resolution || 'N/A')}</td>
                        <td>${formatDate(ds.created_at)}</td>
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

        <!-- Tab: Docs -->
        <div id="tabProjDocs" class="ws-tab-pane" style="display:none;">
          ${documents.length === 0 ? renderEmptyState('No documents uploaded in this project') : `
            <div class="ws-card">
              <div class="ws-table-container">
                <table class="ws-table">
                  <thead>
                    <tr>
                      <th>Document Title</th>
                      <th>File Name</th>
                      <th>Uploaded</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${documents.map(doc => `
                      <tr>
                        <td><strong>${escapeHtml(doc.name)}</strong></td>
                        <td><span style="font-size:0.8rem; color:var(--ws-text-muted);">${escapeHtml(doc.file_name)}</span></td>
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
        <div id="tabProjMembers" class="ws-tab-pane" style="display:none;">
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:16px;">
            ${members.map(m => `
              <div class="ws-card" style="margin-bottom:0; padding:16px; display:flex; align-items:center; gap:12px;">
                <img src="${m.avatar_url || '../assets/images/logo.jpg'}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:1px solid var(--ws-border);" alt="${escapeHtml(m.name)}">
                <div>
                  <strong style="font-size:0.9rem; display:block; color:var(--ws-dark);">${escapeHtml(m.name)}</strong>
                  <span style="font-size:0.75rem; color:var(--ws-text-muted);">${escapeHtml(m.email)}</span>
                  <div style="margin-top:4px;">
                    <span class="ws-badge ws-badge-in_progress">${String(m.project_role || 'member').toUpperCase()}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab: Activity -->
        <div id="tabProjActivity" class="ws-tab-pane" style="display:none;">
          <div class="ws-card">
            <div class="ws-card-body">
              ${activity.length === 0 ? '<p>No project activity logged yet.</p>' : `
                <div style="display:flex; flex-direction:column; gap:10px;">
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

    container.querySelector('#btnProjActionNewTask')?.addEventListener('click', () => window.openNewTaskModal(project.team_id, project.id));
    container.querySelector('#btnProjActionUploadData')?.addEventListener('click', () => window.openUploadDatasetModal(project.team_id, project.id));
    container.querySelector('#btnProjActionUploadDoc')?.addEventListener('click', () => window.openUploadDocumentModal(project.team_id, project.id));

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
