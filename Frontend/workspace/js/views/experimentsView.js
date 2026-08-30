/**
 * 100RE LAB WORKSPACE — SciNote Projects & Experiments View
 * Hierarchy: Projects -> Experiments -> Tasks & Protocols
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { renderStatusBadge, escapeHtml, formatDate, renderEmptyState } from '../components.js';

export async function renderExperiments(container) {
  container.innerHTML = `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:12px;">Loading SciNote Research Hierarchy...</p>
    </div>
  `;

  try {
    const [projRes, expRes, teamRes] = await Promise.all([
      API.get('/api/projects'),
      API.get('/api/experiments'),
      API.get('/api/teams')
    ]);

    const projects = projRes.projects || [];
    const experiments = expRes.experiments || [];
    const teams = teamRes.teams || [];

    const user = Auth.getUser();
    const canCreate = user && (user.isSupervisor || user.isLeader);

    container.innerHTML = `
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="ws-badge ws-badge-primary"><i class="fa-solid fa-folder-tree"></i> SCINOTE ELN HIERARCHY</span>
          </div>
          <h1>Projects &amp; Experiments</h1>
          <p>Organize laboratory research across Projects, Experiments, and Experimental Task Protocols.</p>
        </div>
        <div class="ws-page-actions">
          ${canCreate ? `
            <button class="btn-ws-primary" id="btnNewProject"><i class="fa-solid fa-plus"></i> New Project</button>
          ` : ''}
        </div>
      </div>

      <!-- SciNote Project-Experiment Tree List -->
      <div style="display:flex; flex-direction:column; gap:20px;">
        ${projects.length === 0 ? renderEmptyState('No Projects Found', 'Start by creating your first laboratory research project.') : projects.map(proj => {
          const projExps = experiments.filter(e => e.project_id === proj.id);
          const team = teams.find(t => t.id === proj.team_id) || { name: 'General', slug: 'all' };

          return `
            <div class="ws-card" style="margin-bottom:0; border-left:4px solid var(--ws-primary);">
              <!-- Project Header Card -->
              <div style="padding:20px; border-bottom:1px solid var(--ws-border); background:#fbfcfd; display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
                <div>
                  <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">
                    <span class="ws-badge ws-badge-in_progress"><i class="fa-solid fa-people-group"></i> ${escapeHtml(team.name)}</span>
                    <span class="ws-badge ws-badge-${proj.status}">${(proj.status || 'active').toUpperCase()}</span>
                    <span style="font-size:0.8rem; color:var(--ws-text-muted);"><i class="fa-solid fa-folder"></i> Drive: <code>${escapeHtml(proj.drive_folder_id || 'Auto')}</code></span>
                  </div>
                  <h3 style="font-size:1.2rem; font-weight:700; color:var(--ws-dark); margin-bottom:6px;">
                    <a href="#projects/${proj.slug || proj.id}" style="text-decoration:none; color:inherit;">${escapeHtml(proj.name)}</a>
                  </h3>
                  <p style="font-size:0.875rem; color:var(--ws-text-muted); max-width:850px; line-height:1.5;">${escapeHtml(proj.description || 'No description provided')}</p>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:0.8rem; color:var(--ws-text-muted); margin-bottom:4px;">Project Progress: <strong>${proj.progress || 0}%</strong></div>
                  <div style="width:140px; height:8px; background:#e2e8f0; border-radius:4px; overflow:hidden;">
                    <div style="width:${proj.progress || 0}%; height:100%; background:var(--ws-primary);"></div>
                  </div>
                </div>
              </div>

              <!-- Nested Experiments (SciNote Level 2) -->
              <div style="padding:16px 20px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                  <span style="font-size:0.8rem; font-weight:700; color:var(--ws-text-muted); text-transform:uppercase; letter-spacing:0.5px;">
                    <i class="fa-solid fa-flask" style="color:#0284c7;"></i> Experiments (${projExps.length})
                  </span>
                  <a href="#workflows?projectId=${proj.id}" class="btn-ws-ghost btn-ws-sm" style="color:var(--ws-primary);">
                    <i class="fa-solid fa-diagram-project"></i> View Workflow Canvas
                  </a>
                </div>

                ${projExps.length === 0 ? `
                  <div style="padding:16px; background:#f8fafc; border-radius:6px; border:1px dashed var(--ws-border); font-size:0.85rem; color:var(--ws-text-muted); text-align:center;">
                    No experiments created under this project yet.
                  </div>
                ` : `
                  <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(360px, 1fr)); gap:14px;">
                    ${projExps.map(exp => `
                      <div style="padding:14px; background:#ffffff; border:1px solid var(--ws-border); border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.04); display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                            <span class="ws-badge ws-badge-${exp.status === 'in_progress' ? 'in_progress' : 'done'}">${(exp.status || 'in_progress').toUpperCase()}</span>
                            <span style="font-size:0.75rem; color:var(--ws-text-light);"><i class="fa-solid fa-calendar"></i> ${formatDate(exp.created_at)}</span>
                          </div>
                          <h4 style="font-size:0.95rem; font-weight:700; color:var(--ws-dark); margin-bottom:6px;">
                            <i class="fa-solid fa-vial-circle-check" style="color:#0284c7; margin-right:6px;"></i> ${escapeHtml(exp.name)}
                          </h4>
                          <p style="font-size:0.8rem; color:var(--ws-text-muted); line-height:1.4; margin-bottom:12px; min-height:36px;">
                            ${escapeHtml((exp.description || 'Experimental protocol and modeling.').slice(0, 100))}...
                          </p>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; pt:8px; border-top:1px solid #f1f5f9; font-size:0.775rem;">
                          <span style="color:var(--ws-text-muted);"><i class="fa-solid fa-list-check"></i> <strong>${exp.completedTaskCount || 0}/${exp.taskCount || 0}</strong> Tasks Done</span>
                          <a href="#workflows?expId=${exp.id}" class="btn-ws-ghost btn-ws-sm" style="padding:4px 8px; font-size:0.75rem;">Open Protocol &rarr;</a>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    const btnNewProj = container.querySelector('#btnNewProject');
    if (btnNewProj) {
      btnNewProj.addEventListener('click', () => window.openProjectModal());
    }

  } catch (err) {
    console.error('Error rendering experiments:', err);
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
