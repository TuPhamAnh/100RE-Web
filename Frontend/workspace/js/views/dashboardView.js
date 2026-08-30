/**
 * 100RE LAB WORKSPACE — Dashboard View
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { renderPriorityBadge, renderStatusBadge, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderDashboard(container) {
  container.innerHTML = `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:10px;">Loading your workspace dashboard...</p>
    </div>
  `;

  try {
    const data = await API.get('/api/workspace/dashboard');
    const user = Auth.getUser() || data.user;
    const { stats, myTeams, myProjects, myTasks, recentDocs, recentDatasets, recentActivity } = data;

    // Greeting according to time of day
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : (hour < 18 ? 'Good afternoon' : 'Good evening');

    container.innerHTML = `
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <h1>${greeting}, ${escapeHtml(user.name)}</h1>
          <p>Welcome to 100RE Laboratory Internal Workspace. Here is an overview of your active research.</p>
        </div>
        <div class="ws-page-actions">
          <button class="btn-ws-ghost" id="btnRefreshDashboard"><i class="fa-solid fa-arrows-rotate"></i> Refresh</button>
          <button class="btn-ws-primary" id="btnDashNewTask"><i class="fa-solid fa-plus"></i> New Task</button>
        </div>
      </div>

      <!-- 1. Stats Row -->
      <div class="ws-stats-grid">
        <div class="ws-stat-card">
          <div class="ws-stat-info">
            <div class="ws-stat-val">${stats.teamCount}</div>
            <div class="ws-stat-lbl">Research Teams</div>
          </div>
          <div class="ws-stat-icon"><i class="fa-solid fa-people-group"></i></div>
        </div>

        <div class="ws-stat-card">
          <div class="ws-stat-info">
            <div class="ws-stat-val">${stats.projectCount}</div>
            <div class="ws-stat-lbl">Active Projects</div>
          </div>
          <div class="ws-stat-icon" style="background:#e0f2fe; color:#0284c7;"><i class="fa-solid fa-diagram-project"></i></div>
        </div>

        <div class="ws-stat-card">
          <div class="ws-stat-info">
            <div class="ws-stat-val">${stats.openTaskCount}</div>
            <div class="ws-stat-lbl">Open Tasks</div>
          </div>
          <div class="ws-stat-icon" style="background:#fef3c7; color:#d97706;"><i class="fa-solid fa-list-check"></i></div>
        </div>

        <div class="ws-stat-card">
          <div class="ws-stat-info">
            <div class="ws-stat-val">${stats.datasetCount}</div>
            <div class="ws-stat-lbl">Datasets</div>
          </div>
          <div class="ws-stat-icon" style="background:#ede9fe; color:#7c3aed;"><i class="fa-solid fa-database"></i></div>
        </div>
      </div>

      <!-- 2. Main 2-Column Grid -->
      <div class="ws-grid-2col">
        
        <!-- Left Column: Tasks & Projects -->
        <div class="ws-col-left">
          
          <!-- My Tasks Card -->
          <div class="ws-card">
            <div class="ws-card-header">
              <div class="ws-card-title"><i class="fa-solid fa-list-check" style="color:var(--ws-primary)"></i> My Tasks &amp; Priority Action Items</div>
              <a href="#tasks?filter=me" class="btn-ws-ghost btn-ws-sm">View All Kanban <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="ws-card-body" style="padding:0;">
              ${myTasks.length === 0 ? renderEmptyState('No open tasks assigned to you', 'All current deliverables are completed.') : `
                <div class="ws-table-container">
                  <table class="ws-table">
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Project / Team</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${myTasks.map(t => {
                        const isOverdue = t.due_date && new Date(t.due_date) < new Date() && t.status !== 'done';
                        return `
                          <tr class="clickable-task-row" data-task-id="${t.id}" style="cursor:pointer;">
                            <td>
                              <strong style="color:var(--ws-dark);">${escapeHtml(t.title)}</strong>
                            </td>
                            <td>
                              <span style="font-size:0.8rem; color:var(--ws-text-muted);">
                                ${t.project ? escapeHtml(t.project.name) : (t.team ? escapeHtml(t.team.name) : 'General')}
                              </span>
                            </td>
                            <td>${renderPriorityBadge(t.priority)}</td>
                            <td>
                              <span style="font-size:0.8rem; ${isOverdue ? 'color:#dc2626; font-weight:700;' : ''}">
                                ${t.due_date ? formatDate(t.due_date) : 'No due date'}
                              </span>
                            </td>
                            <td>${renderStatusBadge(t.status)}</td>
                          </tr>
                        `;
                      }).join('')}
                    </tbody>
                  </table>
                </div>
              `}
            </div>
          </div>

          <!-- My Active Projects Card -->
          <div class="ws-card">
            <div class="ws-card-header">
              <div class="ws-card-title"><i class="fa-solid fa-diagram-project" style="color:#0284c7"></i> My Research Projects</div>
              <a href="#projects" class="btn-ws-ghost btn-ws-sm">View All Projects</a>
            </div>
            <div class="ws-card-body">
              ${myProjects.length === 0 ? renderEmptyState('No active projects', 'You have not been assigned to any project yet.') : `
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
                  ${myProjects.map(p => `
                    <div class="ws-card" style="margin-bottom:0; cursor:pointer;" onclick="location.hash='#projects/${p.id}'">
                      <div style="padding:16px;">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                          <h4 style="font-size:0.95rem; font-weight:700; color:var(--ws-dark);">${escapeHtml(p.name)}</h4>
                        </div>
                        <p style="font-size:0.8rem; color:var(--ws-text-muted); margin-bottom:12px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                          ${escapeHtml(p.description || 'No description')}
                        </p>
                        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--ws-text-light); margin-bottom:6px;">
                          <span>Progress</span>
                          <strong>${p.progress}%</strong>
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
          </div>

        </div>

        <!-- Right Column: My Teams & Recent Activity -->
        <div class="ws-col-right">
          
          <!-- My Teams Card -->
          <div class="ws-card">
            <div class="ws-card-header">
              <div class="ws-card-title"><i class="fa-solid fa-people-group" style="color:var(--ws-primary)"></i> Research Teams</div>
              <a href="#teams" class="btn-ws-ghost btn-ws-sm">All Teams</a>
            </div>
            <div class="ws-card-body" style="padding:12px;">
              <div style="display:flex; flex-direction:column; gap:8px;">
                ${myTeams.map(t => `
                  <a href="#teams/${t.slug || t.id}" style="display:flex; align-items:center; justify-content:space-between; padding:10px 12px; background:#f8fafc; border:1px solid var(--ws-border); border-radius:var(--ws-radius-md); text-decoration:none; color:inherit; transition:background 0.15s ease;">
                    <div style="display:flex; align-items:center; gap:10px;">
                      <div style="width:32px; height:32px; background:var(--ws-primary-light); color:var(--ws-primary); border-radius:var(--ws-radius-sm); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem;">
                        ${(t.slug || 'TM').toUpperCase().slice(0, 3)}
                      </div>
                      <div>
                        <strong style="font-size:0.875rem; color:var(--ws-dark); display:block;">${escapeHtml(t.name)}</strong>
                        <span style="font-size:0.75rem; color:var(--ws-text-muted);">${escapeHtml((t.description || '').slice(0, 45))}...</span>
                      </div>
                    </div>
                    <i class="fa-solid fa-chevron-right" style="color:var(--ws-text-light); font-size:0.8rem;"></i>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity Timeline Card -->
          <div class="ws-card">
            <div class="ws-card-header">
              <div class="ws-card-title"><i class="fa-solid fa-clock-rotate-left" style="color:#7c3aed"></i> Recent Activity</div>
              <a href="#activity" class="btn-ws-ghost btn-ws-sm">View Log</a>
            </div>
            <div class="ws-card-body" style="padding:14px;">
              ${recentActivity.length === 0 ? '<p style="font-size:0.85rem; color:var(--ws-text-muted);">No activity recorded yet.</p>' : `
                <div style="display:flex; flex-direction:column; gap:12px;">
                  ${recentActivity.map(a => `
                    <div style="display:flex; gap:10px; font-size:0.825rem;">
                      <img src="${a.user?.avatar_url || '../assets/images/logo.jpg'}" style="width:28px; height:28px; border-radius:50%; object-fit:cover; border:1px solid var(--ws-border);" alt="${escapeHtml(a.user?.name || '')}">
                      <div style="flex:1;">
                        <strong style="color:var(--ws-dark);">${escapeHtml(a.user?.name || 'Member')}</strong>
                        <span style="color:var(--ws-text-muted);"> ${formatActionText(a.action)}</span>
                        <div style="font-size:0.725rem; color:var(--ws-text-light); margin-top:2px;">${formatDate(a.created_at)}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          </div>

        </div>
      </div>
    `;

    // Event listeners
    const refreshBtn = container.querySelector('#btnRefreshDashboard');
    if (refreshBtn) refreshBtn.addEventListener('click', () => renderDashboard(container));

    const newTaskBtn = container.querySelector('#btnDashNewTask');
    if (newTaskBtn) newTaskBtn.addEventListener('click', () => window.openNewTaskModal());

    container.querySelectorAll('.clickable-task-row').forEach(row => {
      row.addEventListener('click', () => {
        const taskId = row.getAttribute('data-task-id');
        if (taskId) window.openTaskDetailModal(taskId);
      });
    });

  } catch (err) {
    container.innerHTML = `
      <div class="ws-empty-state">
        <i class="fa-solid fa-triangle-exclamation" style="color:#ef4444;"></i>
        <h3>Error loading Dashboard</h3>
        <p>${escapeHtml(err.message)}</p>
        <button class="btn-ws-primary" onclick="location.reload()">Retry</button>
      </div>
    `;
  }
}

function formatActionText(action) {
  switch (action) {
    case 'create_task': return 'created a new task';
    case 'update_task_status': return 'updated task status';
    case 'add_comment': return 'commented on a task';
    case 'create_project': return 'launched a new research project';
    case 'upload_dataset': return 'uploaded a new research dataset';
    case 'upload_document': return 'uploaded a document';
    case 'create_user': return 'added a new member to the lab';
    default: return action.replace(/_/g, ' ');
  }
}
