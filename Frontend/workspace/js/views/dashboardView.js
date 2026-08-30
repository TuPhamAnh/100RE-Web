/**
 * 100RE LAB WORKSPACE — SciNote ELN Dashboard View
 * Executive laboratory overview: active experiments, protocol checklists, equipment status, and 100RE Database.
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { renderPriorityBadge, renderStatusBadge, escapeHtml, formatDate, renderEmptyState } from '../components.js';

export async function renderDashboard(container) {
  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';

  container.innerHTML = `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:12px;">${isVi ? 'Đang tải Bảng điều khiển SciNote ELN...' : 'Loading SciNote ELN Dashboard...'}</p>
    </div>
  `;

  try {
    const [dashRes, expRes, instRes] = await Promise.all([
      API.get('/api/workspace/dashboard'),
      API.get('/api/experiments'),
      API.get('/api/instruments')
    ]);

    const stats = dashRes.stats || { teams: 9, projects: 3, myTasks: 0, totalTasks: 7, documents: 3, datasets: 3 };
    const myTasks = dashRes.myTasks || [];
    const recentDatasets = dashRes.recentDatasets || [];
    const experiments = expRes.experiments || [];
    const instruments = instRes.instruments || [];
    const user = Auth.getUser();

    container.innerHTML = `
      <!-- Welcome Header -->
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="ws-badge ws-badge-primary"><i class="fa-solid fa-flask-vial"></i> ${isVi ? 'SỔ TAY THÍ NGHIỆM ĐIỆN TỬ 100RE LAB' : '100RE LAB ELECTRONIC NOTEBOOK'}</span>
          </div>
          <h1>${isVi ? 'Xin chào,' : 'Welcome,'} ${escapeHtml(user?.display_name || 'Researcher')}</h1>
          <p>${isVi ? 'Hệ thống Quản lý Thí nghiệm (ELN) — Điều phối 9 Nhóm Nghiên cứu, Kho lưu trữ 100RE Database và Thiết bị thực nghiệm.' : 'Electronic Lab Notebook (ELN) — Managing 9 Research Teams, 100RE Database Storage, and Lab Testbeds.'}</p>
        </div>
        <div class="ws-page-actions">
          <button class="btn-ws-primary" onclick="window.openNewTaskModal()"><i class="fa-solid fa-plus"></i> ${isVi ? '+ Nhiệm Vụ Mới' : '+ New Task / Step'}</button>
          <a href="#workflows" class="btn-ws-ghost"><i class="fa-solid fa-diagram-project"></i> ${isVi ? 'Sơ Đồ Quy Trình' : 'Workflow Canvas'}</a>
        </div>
      </div>

      <!-- 1. SCINOTE KEY METRICS ROW -->
      <div class="ws-stats-grid">
        <div class="ws-stat-card">
          <div class="ws-stat-icon" style="background:#e0f2fe; color:#0284c7;">
            <i class="fa-solid fa-folder-tree"></i>
          </div>
          <div class="ws-stat-content">
            <div class="ws-stat-number">${experiments.length || 4}</div>
            <div class="ws-stat-label">${isVi ? 'Thí Nghiệm Đang Chạy' : 'Active Experiments'}</div>
          </div>
        </div>

        <div class="ws-stat-card">
          <div class="ws-stat-icon" style="background:#fef3c7; color:#d97706;">
            <i class="fa-solid fa-list-check"></i>
          </div>
          <div class="ws-stat-content">
            <div class="ws-stat-number">${stats.totalTasks || 7}</div>
            <div class="ws-stat-label">${isVi ? 'Nhiệm Vụ & Bước Thí Nghiệm' : 'Protocol Tasks'}</div>
          </div>
        </div>

        <div class="ws-stat-card">
          <div class="ws-stat-icon" style="background:#dcfce7; color:#16a34a;">
            <i class="fa-solid fa-microchip"></i>
          </div>
          <div class="ws-stat-content">
            <div class="ws-stat-number">${instruments.filter(i => i.status === 'in_use').length}/${instruments.length}</div>
            <div class="ws-stat-label">${isVi ? 'Thiết Bị Đang Vận Hành' : 'Instruments Allocated'}</div>
          </div>
        </div>

        <div class="ws-stat-card">
          <div class="ws-stat-icon" style="background:#f3e8ff; color:#9333ea;">
            <i class="fa-solid fa-database"></i>
          </div>
          <div class="ws-stat-content">
            <div class="ws-stat-number">${(stats.datasets || 3) + (stats.documents || 3)}</div>
            <div class="ws-stat-label">${isVi ? 'Tệp Dữ Liệu 100RE Database' : '100RE Database Files'}</div>
          </div>
        </div>
      </div>

      <!-- 2. SCINOTE TWO-COLUMN LAYOUT -->
      <div class="ws-dashboard-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(460px, 1fr)); gap:24px; margin-top:24px;">
        
        <!-- Left: Active Experiments & Protocol Workflows -->
        <div class="ws-card" style="margin-bottom:0;">
          <div class="ws-card-header" style="padding:16px 20px; border-bottom:1px solid var(--ws-border); display:flex; justify-content:space-between; align-items:center;">
            <h3 class="ws-card-title"><i class="fa-solid fa-flask" style="color:#0284c7;"></i> ${isVi ? 'Đề Tài & Thí Nghiệm Đang Thực Hiện' : 'Ongoing Lab Experiments'}</h3>
            <a href="#experiments" class="ws-card-link">${isVi ? 'Xem Tất Cả' : 'View All'} &rarr;</a>
          </div>
          <div style="padding:16px 20px; display:flex; flex-direction:column; gap:12px;">
            ${experiments.length === 0 ? `<p style="color:var(--ws-text-muted);">${isVi ? 'Chưa có thí nghiệm nào.' : 'No active experiments.'}</p>` : experiments.slice(0, 3).map(exp => `
              <div style="padding:12px; background:#f8fafc; border-radius:6px; border:1px solid var(--ws-border); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <h4 style="font-size:0.925rem; font-weight:700; color:var(--ws-dark); margin-bottom:4px;">
                    <a href="#workflows?expId=${exp.id}" style="text-decoration:none; color:inherit;">${escapeHtml(exp.name)}</a>
                  </h4>
                  <div style="font-size:0.775rem; color:var(--ws-text-muted);">
                    <i class="fa-solid fa-diagram-project"></i> ${escapeHtml(exp.project?.name || (isVi ? 'Đề Tài Chung' : 'General Project'))}
                  </div>
                </div>
                <span class="ws-badge ws-badge-${exp.status === 'in_progress' ? 'in_progress' : 'done'}">${(exp.status || 'in_progress').toUpperCase()}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right: Hardware Equipment Utilization -->
        <div class="ws-card" style="margin-bottom:0;">
          <div class="ws-card-header" style="padding:16px 20px; border-bottom:1px solid var(--ws-border); display:flex; justify-content:space-between; align-items:center;">
            <h3 class="ws-card-title"><i class="fa-solid fa-microchip" style="color:var(--ws-primary);"></i> ${isVi ? 'Thiết Bị Phần Cứng & Giàn Thử Nghiệm' : 'Lab Hardware & Testbeds'}</h3>
            <a href="#inventory" class="ws-card-link">${isVi ? 'Quản Lý' : 'Manage'} &rarr;</a>
          </div>
          <div style="padding:16px 20px; display:flex; flex-direction:column; gap:10px;">
            ${instruments.slice(0, 4).map(inst => `
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem; padding:8px 0; border-bottom:1px solid #f1f5f9;">
                <div>
                  <strong style="color:var(--ws-dark);">${escapeHtml(inst.name)}</strong>
                  <div style="font-size:0.75rem; color:var(--ws-text-light);"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(inst.location)}</div>
                </div>
                <span class="ws-badge ws-badge-${inst.status === 'available' ? 'done' : 'urgent'}">${inst.status.toUpperCase()}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Bottom Left: My Assigned Tasks -->
        <div class="ws-card" style="margin-bottom:0;">
          <div class="ws-card-header" style="padding:16px 20px; border-bottom:1px solid var(--ws-border); display:flex; justify-content:space-between; align-items:center;">
            <h3 class="ws-card-title"><i class="fa-solid fa-list-check" style="color:#d97706;"></i> ${isVi ? 'Nhiệm Vụ Được Giao Cho Tôi' : 'My Assigned Protocol Tasks'}</h3>
            <a href="#tasks?filter=me" class="ws-card-link">${isVi ? 'Tất Cả Task Của Tôi' : 'All My Tasks'} &rarr;</a>
          </div>
          <div style="padding:16px 20px;">
            ${myTasks.length === 0 ? `<p style="color:var(--ws-text-muted); font-size:0.875rem;">${isVi ? 'Hiện tại bạn không có nhiệm vụ nào cần xử lý.' : 'No tasks assigned directly to you right now.'}</p>` : `
              <div style="display:flex; flex-direction:column; gap:8px;">
                ${myTasks.slice(0, 4).map(t => `
                  <div style="padding:10px 12px; background:#fff; border:1px solid var(--ws-border); border-radius:6px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="window.openTaskDetail('${t.id}')">
                    <div>
                      <strong style="font-size:0.875rem; color:var(--ws-dark);">${escapeHtml(t.title)}</strong>
                      <div style="font-size:0.75rem; color:var(--ws-text-muted); margin-top:2px;">${isVi ? 'Hạn chót' : 'Due'}: ${formatDate(t.due_date)}</div>
                    </div>
                    ${renderStatusBadge(t.status)}
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>

        <!-- Bottom Right: 100RE Database Datasets -->
        <div class="ws-card" style="margin-bottom:0;">
          <div class="ws-card-header" style="padding:16px 20px; border-bottom:1px solid var(--ws-border); display:flex; justify-content:space-between; align-items:center;">
            <h3 class="ws-card-title"><i class="fa-solid fa-database" style="color:#16a34a;"></i> ${isVi ? 'Bộ Dữ Liệu Thực Nghiệm (100RE Database)' : '100RE Database Datasets'}</h3>
            <a href="#datasets" class="ws-card-link">${isVi ? 'Xem Tất Cả' : 'View All'} &rarr;</a>
          </div>
          <div style="padding:16px 20px;">
            ${recentDatasets.length === 0 ? `<p style="color:var(--ws-text-muted); font-size:0.875rem;">${isVi ? 'Chưa có bộ dữ liệu nào.' : 'No datasets uploaded yet.'}</p>` : `
              <div style="display:flex; flex-direction:column; gap:8px;">
                ${recentDatasets.slice(0, 3).map(ds => `
                  <div style="padding:10px 12px; background:#fff; border:1px solid var(--ws-border); border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                      <strong style="font-size:0.85rem; color:var(--ws-dark);">${escapeHtml(ds.name)}</strong>
                      <div style="font-size:0.75rem; color:var(--ws-text-muted);">${isVi ? 'Định dạng' : 'Format'}: <code>${escapeHtml(ds.format)}</code></div>
                    </div>
                    <a href="/api/files/datasets/${ds.id}/download" target="_blank" class="btn-ws-ghost btn-ws-sm" style="padding:4px 8px; font-size:0.75rem;">
                      <i class="fa-solid fa-download"></i> ${isVi ? 'Tải Về' : 'Get File'}
                    </a>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>

      </div>
    `;

  } catch (err) {
    console.error('Error rendering dashboard:', err);
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
