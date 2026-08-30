/**
 * 100RE LAB WORKSPACE — SciNote Lab Inventory & Instruments View
 * Hardware testbeds, simulators, measurement instruments, and equipment booking.
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { escapeHtml, showToast, renderEmptyState } from '../components.js';

export async function renderInventory(container) {
  container.innerHTML = `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:12px;">Loading Lab Inventory &amp; Equipment...</p>
    </div>
  `;

  try {
    const res = await API.get('/api/instruments');
    const instruments = res.instruments || [];
    const currentUser = Auth.getUser();

    container.innerHTML = `
      <div class="ws-page-header">
        <div class="ws-page-title-group">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="ws-badge ws-badge-in_progress"><i class="fa-solid fa-microchip"></i> 100RE LAB TESTBEDS &amp; INSTRUMENTS</span>
          </div>
          <h1>Lab Equipment &amp; Inventory</h1>
          <p>Real-time availability, technical specifications, and experimental allocation of 100RE laboratory hardware.</p>
        </div>
        <div class="ws-page-actions">
          <button class="btn-ws-ghost" id="btnRefreshInventory"><i class="fa-solid fa-arrows-rotate"></i> Refresh</button>
        </div>
      </div>

      <!-- Equipment Grid -->
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(360px, 1fr)); gap:20px;">
        ${instruments.length === 0 ? renderEmptyState('No Equipment Registered') : instruments.map(inst => {
          const isAvailable = inst.status === 'available';
          const isInUse = inst.status === 'in_use';
          const isMaintenance = inst.status === 'maintenance';

          const statusBadge = isAvailable 
            ? '<span class="ws-badge ws-badge-done"><i class="fa-solid fa-circle-check"></i> AVAILABLE</span>'
            : (isInUse 
              ? '<span class="ws-badge ws-badge-urgent"><i class="fa-solid fa-bolt"></i> IN USE</span>'
              : '<span class="ws-badge ws-badge-low"><i class="fa-solid fa-wrench"></i> MAINTENANCE</span>');

          return `
            <div class="ws-card" style="margin-bottom:0; display:flex; flex-direction:column; justify-content:space-between;">
              <div style="padding:22px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
                  <div>
                    <span style="font-size:0.75rem; font-weight:800; color:var(--ws-primary); font-family:'Fira Code',monospace;">${escapeHtml(inst.code)}</span>
                    <h3 style="font-size:1.1rem; font-weight:700; color:var(--ws-dark); margin-top:2px;">${escapeHtml(inst.name)}</h3>
                  </div>
                  ${statusBadge}
                </div>

                <div style="display:flex; flex-direction:column; gap:6px; font-size:0.85rem; color:var(--ws-text-muted); margin-bottom:16px;">
                  <div><i class="fa-solid fa-location-dot" style="color:#ef4444; width:18px;"></i> <strong>Location:</strong> ${escapeHtml(inst.location)}</div>
                  <div><i class="fa-solid fa-microchip" style="color:#0284c7; width:18px;"></i> <strong>Category:</strong> ${escapeHtml(inst.category.toUpperCase())}</div>
                </div>

                <!-- Technical Specs Box -->
                <div style="background:#f8fafc; border:1px solid var(--ws-border); border-radius:6px; padding:10px 12px; font-size:0.78rem; color:var(--ws-text-muted);">
                  <strong>Technical Specs:</strong><br>
                  ${escapeHtml(inst.specs || 'N/A')}
                </div>
              </div>

              <!-- Action Footer -->
              <div style="padding:12px 22px; background:#fbfcfd; border-top:1px solid var(--ws-border); display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.75rem; color:var(--ws-text-light);">
                  ${isInUse ? `<i class="fa-solid fa-user-lock"></i> Allocated to researcher` : '<i class="fa-solid fa-check"></i> Ready for experiment'}
                </span>
                <button class="btn-ws-sm ${isAvailable ? 'btn-ws-primary' : 'btn-ws-ghost'}" data-action="toggle-status" data-inst-id="${inst.id}" data-current-status="${inst.status}">
                  ${isAvailable ? '<i class="fa-solid fa-hand"></i> Allocate / Book' : '<i class="fa-solid fa-rotate-left"></i> Release'}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Booking Button Handler
    container.querySelectorAll('[data-action="toggle-status"]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-inst-id');
        const current = btn.getAttribute('data-current-status');
        const nextStatus = current === 'available' ? 'in_use' : 'available';

        try {
          await API.patch(`/api/instruments/${id}/status`, { status: nextStatus });
          showToast(nextStatus === 'in_use' ? 'Đã cấp phát thiết bị cho thực nghiệm.' : 'Đã trả thiết bị về trạng thái sẵn sàng.');
          renderInventory(container);
        } catch (e) {
          showToast('Lỗi cập nhật thiết bị: ' + e.message, true);
        }
      });
    });

    const btnRefresh = container.querySelector('#btnRefreshInventory');
    if (btnRefresh) {
      btnRefresh?.addEventListener('click', () => renderInventory(container));
    }

  } catch (err) {
    console.error('Error rendering inventory:', err);
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
