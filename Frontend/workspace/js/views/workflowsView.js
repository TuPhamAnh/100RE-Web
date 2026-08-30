/**
 * 100RE LAB WORKSPACE — SciNote Visual Workflows View
 * Interactive connected visual flow of laboratory tasks and experiment protocols.
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { escapeHtml, renderStatusBadge, renderPriorityBadge } from '../components.js';

export async function renderWorkflows(container, filterExpId = null) {
  container.innerHTML = `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:12px;">Loading SciNote Workflow Canvas...</p>
    </div>
  `;

  try {
    const [expRes, taskRes, projRes] = await Promise.all([
      API.get('/api/experiments'),
      API.get('/api/tasks'),
      API.get('/api/projects')
    ]);

    const experiments = expRes.experiments || [];
    const tasks = taskRes.tasks || [];
    const projects = projRes.projects || [];

    const selectedExpId = filterExpId || (experiments.length > 0 ? experiments[0].id : null);
    const activeExp = experiments.find(e => e.id === selectedExpId) || experiments[0] || null;

    const expTasks = activeExp ? tasks.filter(t => t.experiment_id === activeExp.id || t.project_id === activeExp.project_id) : tasks;

    container.innerHTML = `
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="ws-badge ws-badge-done"><i class="fa-solid fa-diagram-project"></i> SCINOTE WORKFLOW CANVAS</span>
          </div>
          <h1>Visual Experiment Workflow</h1>
          <p>End-to-end interactive protocol pipeline from sample calibration to Google Drive dataset publication.</p>
        </div>
        <div class="ws-page-actions">
          <div style="display:flex; align-items:center; gap:10px;">
            <label style="font-size:0.85rem; font-weight:600; color:var(--ws-text-muted);">Experiment:</label>
            <select class="form-control" id="selectWorkflowExp" style="min-width:260px;">
              ${experiments.map(e => `
                <option value="${e.id}" ${e.id === (activeExp?.id) ? 'selected' : ''}>${escapeHtml(e.name)}</option>
              `).join('')}
            </select>
          </div>
        </div>
      </div>

      <!-- SciNote Workflow Canvas Area -->
      <div class="ws-card" style="padding:28px 24px; background:#f8fafc; border:1px solid #e2e8f0; overflow-x:auto;">
        ${!activeExp ? `
          <div class="ws-empty-state">No active experiments found.</div>
        ` : `
          <!-- Canvas Top Summary Banner -->
          <div style="background:#ffffff; padding:16px 20px; border-radius:8px; border:1px solid var(--ws-border); margin-bottom:28px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <span class="ws-badge ws-badge-in_progress" style="margin-bottom:6px;">ACTIVE WORKFLOW</span>
              <h3 style="font-size:1.15rem; font-weight:700; color:var(--ws-dark);">${escapeHtml(activeExp.name)}</h3>
              <p style="font-size:0.85rem; color:var(--ws-text-muted); margin-top:2px;">${escapeHtml(activeExp.description || 'Continuous experimental flow.')}</p>
            </div>
            <button class="btn-ws-primary btn-ws-sm" onclick="window.openNewTaskModal()"><i class="fa-solid fa-plus"></i> Add Protocol Step</button>
          </div>

          <!-- Connected Horizontal Stage Flow Nodes -->
          <div class="scinote-workflow-track" style="display:flex; align-items:flex-start; gap:20px; min-width:900px;">
            ${expTasks.map((t, index) => {
              const isCompleted = t.status === 'done';
              const isInReview = t.status === 'review';
              const isInProgress = t.status === 'in_progress';
              const nodeBg = isCompleted ? '#ecfdf5' : (isInProgress ? '#eff6ff' : (isInReview ? '#fefce8' : '#ffffff'));
              const nodeBorder = isCompleted ? '#10b981' : (isInProgress ? '#3b82f6' : (isInReview ? '#f59e0b' : '#cbd5e1'));

              return `
                <div style="flex:1; min-width:240px; max-width:280px; position:relative;">
                  <!-- Connector Line between nodes -->
                  ${index < expTasks.length - 1 ? `
                    <div style="position:absolute; top:28px; right:-20px; width:20px; height:2px; background:#94a3b8; z-index:1;"></div>
                    <i class="fa-solid fa-chevron-right" style="position:absolute; top:22px; right:-12px; font-size:0.75rem; color:#64748b; z-index:2;"></i>
                  ` : ''}

                  <!-- SciNote Task Protocol Node Card -->
                  <div class="scinote-node-card" data-task-id="${t.id}" style="background:${nodeBg}; border:2px solid ${nodeBorder}; border-radius:10px; padding:16px; box-shadow:0 4px 10px rgba(0,0,0,0.05); cursor:pointer; transition:transform 0.15s ease, box-shadow 0.15s ease;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                      <span style="font-size:0.75rem; font-weight:800; color:var(--ws-text-muted); background:#ffffff; padding:2px 8px; border-radius:12px; border:1px solid var(--ws-border);">STEP ${index + 1}</span>
                      ${renderStatusBadge(t.status)}
                    </div>

                    <h4 style="font-size:0.925rem; font-weight:700; color:var(--ws-dark); margin-bottom:8px; line-height:1.4;">
                      ${escapeHtml(t.title)}
                    </h4>

                    <p style="font-size:0.78rem; color:var(--ws-text-muted); margin-bottom:12px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                      ${escapeHtml(t.description || 'Click to view protocol steps & observations.')}
                    </p>

                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--ws-text-light); pt:8px; border-top:1px dashed #cbd5e1;">
                      <span><i class="fa-solid fa-user"></i> ${escapeHtml(t.assigned_to_name || 'Assigned')}</span>
                      <span style="color:var(--ws-primary); font-weight:700;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Sheet</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    `;

    // Dropdown switcher event
    const selectExp = container.querySelector('#selectWorkflowExp');
    if (selectExp) {
      selectExp.addEventListener('change', (e) => {
        renderWorkflows(container, e.target.value);
      });
    }

    // Node click opens detailed SciNote Lab Sheet
    container.querySelectorAll('.scinote-node-card').forEach(card => {
      card.addEventListener('click', () => {
        const taskId = card.getAttribute('data-task-id');
        if (taskId && window.openTaskDetail) {
          window.openTaskDetail(taskId);
        }
      });
    });

  } catch (err) {
    console.error('Error rendering workflows:', err);
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
