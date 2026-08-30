/**
 * 100RE LAB WORKSPACE — SciNote Protocols & SOPs Library View
 * Centralized repository for experimental procedures, safety guidelines, and calibration standards.
 */

import { API } from '../api.js';
import { escapeHtml, renderEmptyState } from '../components.js';

export async function renderProtocols(container) {
  container.innerHTML = `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:12px;">Loading Protocols &amp; Standard Operating Procedures...</p>
    </div>
  `;

  try {
    const res = await API.get('/api/protocols');
    const protocols = res.protocols || [];

    container.innerHTML = `
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="ws-badge ws-badge-primary"><i class="fa-solid fa-book-medical"></i> SCINOTE PROTOCOLS &amp; SOPS</span>
          </div>
          <h1>Standard Operating Procedures</h1>
          <p>Standardized laboratory methods, measurement procedures, and testing guidelines for all 9 Research Teams.</p>
        </div>
        <div class="ws-page-actions">
          <button class="btn-ws-primary" onclick="alert('Thêm SOP mới đang mở. Bạn có thể soạn thảo thêm quy trình chuẩn!')"><i class="fa-solid fa-plus"></i> New Protocol / SOP</button>
        </div>
      </div>

      <!-- Protocols Grid -->
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(420px, 1fr)); gap:20px;">
        ${protocols.length === 0 ? renderEmptyState('No Protocols Defined', 'Create reusable laboratory protocols for your team.') : protocols.map(proto => {
          let steps = [];
          try {
            steps = JSON.parse(proto.steps_json || '[]');
          } catch (e) {}

          return `
            <div class="ws-card" style="margin-bottom:0; display:flex; flex-direction:column; justify-content:space-between; border-top:3px solid var(--ws-primary);">
              <div style="padding:22px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                  <span class="ws-badge ws-badge-done" style="font-family:'Fira Code',monospace;">${escapeHtml(proto.code)}</span>
                  <span class="ws-badge ws-badge-low">${escapeHtml(proto.category)}</span>
                </div>

                <h3 style="font-size:1.05rem; font-weight:700; color:var(--ws-dark); margin-bottom:8px; line-height:1.4;">
                  ${escapeHtml(proto.title)}
                </h3>
                <p style="font-size:0.85rem; color:var(--ws-text-muted); line-height:1.5; margin-bottom:16px;">
                  ${escapeHtml(proto.description || 'Standard experimental protocol.')}
                </p>

                <!-- Step-by-Step Preview -->
                <div style="background:#f8fafc; border:1px solid var(--ws-border); border-radius:6px; padding:12px; margin-bottom:14px;">
                  <strong style="font-size:0.775rem; color:var(--ws-text-muted); text-transform:uppercase; display:block; margin-bottom:8px;">
                    <i class="fa-solid fa-list-ol" style="color:var(--ws-primary);"></i> Execution Steps (${steps.length})
                  </strong>
                  <div style="display:flex; flex-direction:column; gap:6px;">
                    ${steps.map((step, idx) => `
                      <div style="display:flex; align-items:flex-start; gap:8px; font-size:0.8rem; color:var(--ws-dark);">
                        <span style="font-weight:700; color:var(--ws-primary); min-width:18px;">${idx + 1}.</span>
                        <span>${escapeHtml(step)}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <div style="padding:12px 22px; background:#fbfcfd; border-top:1px solid var(--ws-border); display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.75rem; color:var(--ws-text-light);"><i class="fa-solid fa-building-columns"></i> 100RE Lab Standard</span>
                <button class="btn-ws-ghost btn-ws-sm" onclick="window.openNewTaskModal()"><i class="fa-solid fa-copy"></i> Use in Task</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

  } catch (err) {
    console.error('Error rendering protocols:', err);
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
