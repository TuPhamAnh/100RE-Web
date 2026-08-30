/**
 * 100RE LAB WORKSPACE — Lab-wide Activity Log View
 */

import { API } from '../api.js';
import { formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderActivity(container) {
  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>Lab Activity Timeline</h1>
        <p>Comprehensive audit log and timeline of research actions, task updates, and dataset uploads.</p>
      </div>
    </div>

    <div id="activityTimelineContainer">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  try {
    const res = await API.get('/api/activity');
    const logs = res.activity || [];
    const containerEl = container.querySelector('#activityTimelineContainer');

    if (logs.length === 0) {
      containerEl.innerHTML = renderEmptyState('No activity logged yet in the workspace');
      return;
    }

    containerEl.innerHTML = `
      <div class="ws-card">
        <div class="ws-card-body">
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${logs.map(a => {
              const u = a.user || { name: 'Member', avatar_url: '../assets/images/logo.jpg' };
              return `
                <div style="display:flex; gap:14px; padding-bottom:14px; border-bottom:1px solid #f1f5f9;">
                  <img src="${u.avatar_url || '../assets/images/logo.jpg'}" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border:1px solid var(--ws-border);" alt="${escapeHtml(u.name)}">
                  <div style="flex:1;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
                      <div>
                        <strong style="color:var(--ws-dark); font-size:0.9rem;">${escapeHtml(u.name)}</strong>
                        <span style="font-size:0.85rem; color:var(--ws-text-muted);"> ${formatActionText(a.action)}</span>
                      </div>
                      <span style="font-size:0.75rem; color:var(--ws-text-light);"><i class="fa-regular fa-clock"></i> ${formatDate(a.created_at)}</span>
                    </div>

                    ${a.team ? `
                      <div style="font-size:0.775rem; color:var(--ws-text-muted); margin-top:2px;">
                        <span>Team: <a href="#teams/${a.team.slug}" style="color:var(--ws-primary); font-weight:600; text-decoration:none;">${escapeHtml(a.team.name)}</a></span>
                        ${a.project ? ` | <span>Project: <a href="#projects/${a.project.id}" style="color:#0284c7; font-weight:600; text-decoration:none;">${escapeHtml(a.project.name)}</a></span>` : ''}
                      </div>
                    ` : ''}

                    ${a.metadata && Object.keys(a.metadata).length > 0 ? `
                      <div style="background:#f8fafc; border:1px solid var(--ws-border); padding:8px 12px; border-radius:var(--ws-radius-sm); font-size:0.8rem; margin-top:6px; color:var(--ws-text-muted);">
                        ${Object.entries(a.metadata).map(([k, v]) => `<strong>${escapeHtml(k)}:</strong> ${escapeHtml(String(v))}`).join(' | ')}
                      </div>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

function formatActionText(action) {
  switch (action) {
    case 'create_task': return 'created a new task';
    case 'update_task_status': return 'updated task status';
    case 'delete_task': return 'deleted a task';
    case 'add_comment': return 'posted a comment';
    case 'create_project': return 'launched a new project';
    case 'update_project': return 'updated project parameters';
    case 'upload_dataset': return 'uploaded a research dataset';
    case 'delete_dataset': return 'removed a dataset';
    case 'upload_document': return 'uploaded a document';
    case 'delete_document': return 'deleted a document';
    case 'create_team': return 'registered a new research team';
    case 'update_team': return 'updated team settings';
    case 'create_user': return 'created a new user profile';
    case 'update_user_role': return 'modified user role/status';
    default: return action.replace(/_/g, ' ');
  }
}
