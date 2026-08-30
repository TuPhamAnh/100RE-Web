/**
 * 100RE LAB WORKSPACE — SciNote Sign-offs & Electronic Approval Console
 * Protocol reviews, experimental sign-offs, and quality assurance by Lab Supervisor.
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { escapeHtml, formatDate, showToast, renderEmptyState } from '../components.js';

export async function renderSignoffs(container) {
  container.innerHTML = `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:12px;">Loading Sign-offs &amp; Review Console...</p>
    </div>
  `;

  try {
    const [taskRes, projRes] = await Promise.all([
      API.get('/api/tasks'),
      API.get('/api/projects')
    ]);

    const tasks = taskRes.tasks || [];
    const projects = projRes.projects || [];
    const currentUser = Auth.getUser();
    const canSign = currentUser && (currentUser.isSupervisor || currentUser.isLeader);

    const reviewTasks = tasks.filter(t => t.status === 'review');
    const approvedTasks = tasks.filter(t => t.status === 'done');

    container.innerHTML = `
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="ws-badge ws-badge-done"><i class="fa-solid fa-file-signature"></i> SCINOTE QUALITY ASSURANCE</span>
          </div>
          <h1>Sign-offs &amp; Protocol Approvals</h1>
          <p>Formal electronic approval console for experimental results, datasets, and IEEE publication manuscripts.</p>
        </div>
        <div class="ws-page-actions">
          <span class="ws-badge ${canSign ? 'ws-badge-done' : 'ws-badge-low'}">
            ${canSign ? '<i class="fa-solid fa-shield-check"></i> Sign-off Authority Active' : '<i class="fa-solid fa-eye"></i> View Only Mode'}
          </span>
        </div>
      </div>

      <!-- Pending Reviews Section -->
      <div style="margin-bottom:32px;">
        <h3 style="font-size:1.1rem; font-weight:700; color:var(--ws-dark); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
          <i class="fa-solid fa-clock-rotate-left" style="color:#f59e0b;"></i> Pending Review &amp; Approval (${reviewTasks.length})
        </h3>

        ${reviewTasks.length === 0 ? `
          <div style="padding:24px; background:#fff; border-radius:8px; border:1px solid var(--ws-border); text-align:center; color:var(--ws-text-muted);">
            <i class="fa-solid fa-circle-check" style="font-size:2rem; color:#10b981; margin-bottom:8px; display:block;"></i>
            All submitted research experiments and protocol tasks are reviewed.
          </div>
        ` : `
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(420px, 1fr)); gap:18px;">
            ${reviewTasks.map(t => `
              <div class="ws-card" style="margin-bottom:0; border-left:4px solid #f59e0b;">
                <div style="padding:20px;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                    <span class="ws-badge ws-badge-in_progress">${escapeHtml(t.team?.name || 'Research Team')}</span>
                    <span class="ws-badge ws-badge-alert">AWAITING SIGN-OFF</span>
                  </div>

                  <h4 style="font-size:1.05rem; font-weight:700; color:var(--ws-dark); margin-bottom:6px;">
                    ${escapeHtml(t.title)}
                  </h4>

                  <p style="font-size:0.85rem; color:var(--ws-text-muted); line-height:1.5; margin-bottom:14px;">
                    ${escapeHtml(t.description || 'Experimental report submitted for review.')}
                  </p>

                  <div style="font-size:0.775rem; color:var(--ws-text-light); margin-bottom:14px;">
                    <div><i class="fa-solid fa-user"></i> Submitted by: <strong>${escapeHtml(t.assigned_to_name || 'Researcher')}</strong></div>
                    <div><i class="fa-solid fa-calendar"></i> Target Date: ${formatDate(t.due_date)}</div>
                  </div>

                  <!-- Sign-off Action Bar -->
                  <div style="display:flex; gap:10px; pt:12px; border-top:1px solid #f1f5f9;">
                    <button class="btn-ws-primary btn-ws-sm" style="flex:1;" data-action="approve-task" data-task-id="${t.id}" ${canSign ? '' : 'disabled'}>
                      <i class="fa-solid fa-signature"></i> Sign &amp; Approve
                    </button>
                    <button class="btn-ws-ghost btn-ws-sm" onclick="window.openTaskDetail('${t.id}')">
                      <i class="fa-solid fa-eye"></i> View Lab Sheet
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- Approved History Section -->
      <div>
        <h3 style="font-size:1.1rem; font-weight:700; color:var(--ws-dark); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
          <i class="fa-solid fa-circle-check" style="color:#10b981;"></i> Approved &amp; Certified Experiments (${approvedTasks.length})
        </h3>

        <div class="ws-card">
          <div class="ws-table-responsive">
            <table class="ws-table">
              <thead>
                <tr>
                  <th>Task / Protocol</th>
                  <th>Team</th>
                  <th>Lead Researcher</th>
                  <th>Signed Off By</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${approvedTasks.length === 0 ? '<tr><td colspan="6" style="text-align:center;">No signed-off tasks yet.</td></tr>' : approvedTasks.map(t => `
                  <tr>
                    <td><strong>${escapeHtml(t.title)}</strong></td>
                    <td><span class="ws-badge ws-badge-in_progress">${escapeHtml(t.team?.name || 'Lab')}</span></td>
                    <td>${escapeHtml(t.assigned_to_name || 'Researcher')}</td>
                    <td><strong style="color:var(--ws-primary);"><i class="fa-solid fa-certificate"></i> Assoc. Prof. Nguyen Duc Tuyen</strong></td>
                    <td><span class="ws-badge ws-badge-done">APPROVED &amp; SIGNED</span></td>
                    <td>
                      <button class="btn-ws-ghost btn-ws-sm" onclick="window.openTaskDetail('${t.id}')">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Sheet
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    // Sign & Approve Button Handler
    container.querySelectorAll('[data-action="approve-task"]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const taskId = btn.getAttribute('data-task-id');
        const comments = prompt('Nhập nhận xét / phê duyệt của Thầy / Trưởng nhóm:', 'Kết quả thực nghiệm và số liệu đo đạc đạt yêu cầu chất lượng của Lab.');
        if (comments === null) return;

        try {
          await API.post(`/api/tasks/${taskId}/sign-off`, {
            status: 'approved',
            comments: comments
          });
          showToast('Đã ký duyệt kết quả thực nghiệm thành công!');
          renderSignoffs(container);
        } catch (e) {
          showToast('Lỗi phê duyệt: ' + e.message, true);
        }
      });
    });

  } catch (err) {
    console.error('Error rendering sign-offs:', err);
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
