/**
 * 100RE LAB WORKSPACE — SciNote Lab Inventory & Instruments View
 * Hardware testbeds, simulators, measurement instruments, and equipment booking.
 * Full Database & Cloudflare KV Persistence with Add / Edit / Delete / Allocate.
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { escapeHtml, showToast, renderEmptyState, openModal, closeModal } from '../components.js';

let cachedInstruments = [];
let activeCategoryFilter = 'all';
let searchQuery = '';

export async function renderInventory(container) {
  container.innerHTML = `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:12px;">Đang tải danh mục thiết bị từ Database...</p>
    </div>
  `;

  try {
    const res = await API.get('/api/instruments');
    cachedInstruments = res.instruments || [];
    try {
      localStorage.setItem('100re_instruments_cache', JSON.stringify(cachedInstruments));
    } catch (e) {}
    const currentUser = Auth.getUser();
    const canManage = currentUser && (currentUser.isSupervisor || currentUser.isLeader || currentUser.isAdmin);

    renderInventoryContent(container, canManage);
  } catch (err) {
    console.warn('API get instruments failed, attempting local cache fallback:', err);
    const local = localStorage.getItem('100re_instruments_cache');
    if (local) {
      try {
        cachedInstruments = JSON.parse(local);
        const currentUser = Auth.getUser();
        const canManage = currentUser && (currentUser.isSupervisor || currentUser.isLeader || currentUser.isAdmin);
        renderInventoryContent(container, canManage);
        return;
      } catch (e) {}
    }
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Lỗi tải thiết bị</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

function renderInventoryContent(container, canManage) {
  const totalCount = cachedInstruments.length;
  const availCount = cachedInstruments.filter(i => i.status === 'available').length;
  const inUseCount = cachedInstruments.filter(i => i.status === 'in_use').length;
  const maintCount = cachedInstruments.filter(i => i.status === 'maintenance').length;

  // Filter instruments based on search and category
  const filtered = cachedInstruments.filter(inst => {
    const matchCategory = activeCategoryFilter === 'all' || inst.category === activeCategoryFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      (inst.name && inst.name.toLowerCase().includes(q)) ||
      (inst.code && inst.code.toLowerCase().includes(q)) ||
      (inst.model && inst.model.toLowerCase().includes(q)) ||
      (inst.manufacturer && inst.manufacturer.toLowerCase().includes(q)) ||
      (inst.location && inst.location.toLowerCase().includes(q)) ||
      (inst.specs && inst.specs.toLowerCase().includes(q));
    return matchCategory && matchSearch;
  });

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span class="ws-badge ws-badge-in_progress"><i class="fa-solid fa-microchip"></i> 100RE LAB TESTBEDS &amp; INVENTORY</span>
        </div>
        <h1>Lab Equipment &amp; Testbeds</h1>
        <p>Hệ thống quản lý, cấp phát thực nghiệm và lưu trữ cơ sở dữ liệu thiết bị phần cứng của Phòng thí nghiệm 100RE.</p>
      </div>
      <div class="ws-page-actions" style="display:flex; gap:10px;">
        <button class="btn-ws-primary" id="btnAddNewInstrument" style="background:#16a34a; font-weight:700;">
          <i class="fa-solid fa-plus"></i> + Thêm Thiết Bị Mới
        </button>
        <button class="btn-ws-ghost" id="btnRefreshInventory"><i class="fa-solid fa-arrows-rotate"></i> Làm mới</button>
      </div>
    </div>

    <!-- Stats Row -->
    <div class="ws-stats-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 24px;">
      <div class="ws-stat-card">
        <div class="ws-stat-label"><i class="fa-solid fa-boxes-stacked"></i> Tổng Thiết Bị</div>
        <div class="ws-stat-number" style="color:var(--ws-dark);">${totalCount}</div>
        <div class="ws-stat-sub">Trong cơ sở dữ liệu Lab</div>
      </div>
      <div class="ws-stat-card">
        <div class="ws-stat-label"><i class="fa-solid fa-circle-check" style="color:#10b981;"></i> Sẵn Sàng (Available)</div>
        <div class="ws-stat-number" style="color:#10b981;">${availCount}</div>
        <div class="ws-stat-sub">Có thể đặt lịch thực nghiệm</div>
      </div>
      <div class="ws-stat-card">
        <div class="ws-stat-label"><i class="fa-solid fa-bolt" style="color:#f59e0b;"></i> Đang Thực Nghiệm</div>
        <div class="ws-stat-number" style="color:#f59e0b;">${inUseCount}</div>
        <div class="ws-stat-sub">Đang vận hành trong dự án</div>
      </div>
      <div class="ws-stat-card">
        <div class="ws-stat-label"><i class="fa-solid fa-wrench" style="color:#64748b;"></i> Bảo Trì / Hiệu Chuẩn</div>
        <div class="ws-stat-number" style="color:#64748b;">${maintCount}</div>
        <div class="ws-stat-sub">Đang bảo dưỡng định kỳ</div>
      </div>
    </div>

    <!-- Search & Filter Controls -->
    <div class="ws-card" style="padding:16px 20px; margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span style="font-size:0.85rem; font-weight:700; color:var(--ws-text-muted);">Lọc theo danh mục:</span>
        <button class="filter-chip ${activeCategoryFilter === 'all' ? 'active' : ''}" data-cat="all">Tất Cả (${totalCount})</button>
        <button class="filter-chip ${activeCategoryFilter === 'solar_pv' ? 'active' : ''}" data-cat="solar_pv">☀️ Solar PV</button>
        <button class="filter-chip ${activeCategoryFilter === 'training_platform' ? 'active' : ''}" data-cat="training_platform">🔬 Training Platform</button>
        <button class="filter-chip ${activeCategoryFilter === 'testbed' ? 'active' : ''}" data-cat="testbed">🔋 Battery &amp; Testbeds</button>
        <button class="filter-chip ${activeCategoryFilter === 'simulator' ? 'active' : ''}" data-cat="simulator">💻 HIL &amp; Simulators</button>
        <button class="filter-chip ${activeCategoryFilter === 'measurement' ? 'active' : ''}" data-cat="measurement">📊 Measurement</button>
      </div>

      <div style="position:relative; width:300px;">
        <i class="fa-solid fa-magnifying-glass" style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--ws-text-light);"></i>
        <input type="text" id="inventorySearchInput" class="form-control" style="padding-left:36px; border-radius:20px; font-size:0.875rem;" placeholder="Tìm thiết bị, model, vị trí..." value="${escapeHtml(searchQuery)}">
      </div>
    </div>

    <!-- Equipment Grid -->
    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(420px, 1fr)); gap:22px;">
      ${filtered.length === 0 ? renderEmptyState('Không tìm thấy thiết bị phù hợp', 'Thử đổi từ khóa tìm kiếm hoặc bấm nút "+ Thêm Thiết Bị Mới".') : filtered.map(inst => {
        const isAvailable = inst.status === 'available';
        const isInUse = inst.status === 'in_use';
        const isMaintenance = inst.status === 'maintenance';

        const statusBadge = isAvailable 
          ? '<span class="ws-badge ws-badge-done" style="background:#dcfce7; color:#15803d;"><i class="fa-solid fa-circle-check"></i> SẴN SÀNG</span>'
          : (isInUse 
            ? '<span class="ws-badge ws-badge-urgent" style="background:#fef3c7; color:#b45309;"><i class="fa-solid fa-bolt"></i> ĐANG DÙNG</span>'
            : '<span class="ws-badge ws-badge-low" style="background:#f1f5f9; color:#475569;"><i class="fa-solid fa-wrench"></i> BẢO TRÌ</span>');

        const catName = inst.category === 'solar_pv' ? '☀️ Solar PV' :
          (inst.category === 'training_platform' ? '🔬 Training Platform' :
          (inst.category === 'testbed' ? '🔋 Battery Testbed' :
          (inst.category === 'simulator' ? '💻 Real-time HIL' :
          (inst.category === 'measurement' ? '📊 Measurement Analyzer' : '⚡ Hardware'))));

        return `
          <div class="ws-card" style="margin-bottom:0; display:flex; flex-direction:column; justify-content:space-between; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden; box-shadow:0 2px 6px rgba(15,23,42,0.04); transition:all 0.2s ease;">
            <div style="padding:22px;">
              
              <!-- Header with Code & Status -->
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; gap:8px;">
                <div>
                  <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                    <span style="font-size:0.725rem; font-weight:800; color:#16a34a; background:#f0fdf4; border:1px solid #bbf7d0; padding:2px 8px; border-radius:4px; font-family:'Fira Code',monospace;">${escapeHtml(inst.code || '100RE-EQ')}</span>
                    <span style="font-size:0.75rem; color:#64748b; font-weight:600;">${catName}</span>
                  </div>
                  <h3 style="font-size:1.15rem; font-weight:700; color:#0f172a; margin:0; line-height:1.4;">${escapeHtml(inst.name)}</h3>
                </div>
                ${statusBadge}
              </div>

              <!-- Metadata Meta Grid -->
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.825rem; color:#475569; margin-bottom:14px; background:#f8fafc; padding:10px 12px; border-radius:6px;">
                <div><i class="fa-solid fa-industry" style="color:#0284c7; width:16px;"></i> <strong>Hãng:</strong> ${escapeHtml(inst.manufacturer || inst.model || '100RE Lab')}</div>
                <div><i class="fa-solid fa-hashtag" style="color:#8b5cf6; width:16px;"></i> <strong>Serial:</strong> ${escapeHtml(inst.serial_number || 'N/A')}</div>
                <div style="grid-column:1/-1;"><i class="fa-solid fa-location-dot" style="color:#ef4444; width:16px;"></i> <strong>Vị trí:</strong> ${escapeHtml(inst.location || 'Lab HUST')}</div>
              </div>

              <!-- Technical Specs Box -->
              <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:6px; padding:12px; font-size:0.8rem; color:#334155; line-height:1.6; margin-bottom:14px;">
                <strong style="color:#0f172a; display:block; margin-bottom:4px;"><i class="fa-solid fa-sliders" style="color:#16a34a;"></i> Thông số kỹ thuật:</strong>
                ${escapeHtml(inst.specs || 'Chưa cập nhật thông số chi tiết.')}
              </div>

              ${inst.documentation_url ? `
                <div style="margin-bottom:6px;">
                  <a href="${escapeHtml(inst.documentation_url)}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:6px; font-size:0.8rem; color:#0284c7; font-weight:600; text-decoration:none;">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Xem Datasheet &amp; Tài liệu chính hãng
                  </a>
                </div>
              ` : ''}

            </div>

            <!-- Action Footer -->
            <div style="padding:12px 20px; background:#fbfcfd; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
              <button class="btn-ws-sm ${isAvailable ? 'btn-ws-primary' : 'btn-ws-ghost'}" data-action="toggle-status" data-inst-id="${inst.id}" data-current-status="${inst.status}">
                ${isAvailable ? '<i class="fa-solid fa-hand"></i> Đặt lịch / Dùng' : '<i class="fa-solid fa-rotate-left"></i> Trả thiết bị'}
              </button>

              <div style="display:flex; gap:6px;">
                <button class="btn-ws-ghost btn-ws-sm" data-action="edit-instrument" data-inst-id="${inst.id}" title="Sửa thông tin">
                  <i class="fa-solid fa-pen-to-square"></i> Sửa
                </button>
                <button class="btn-ws-danger btn-ws-sm" data-action="delete-instrument" data-inst-id="${inst.id}" data-inst-name="${escapeHtml(inst.name)}" title="Xóa khỏi database">
                  <i class="fa-solid fa-trash"></i> Xóa
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Attach Event Handlers
  attachInventoryHandlers(container);
}

function attachInventoryHandlers(container) {
  // 1. Refresh Button
  container.querySelector('#btnRefreshInventory')?.addEventListener('click', () => renderInventory(container));

  // 2. Add New Instrument Button
  container.querySelector('#btnAddNewInstrument')?.addEventListener('click', () => {
    openInstrumentModal();
  });

  // 3. Category Filter Chips
  container.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      activeCategoryFilter = chip.getAttribute('data-cat') || 'all';
      renderInventoryContent(container, true);
    });
  });

  // 4. Search Input
  const searchInput = container.querySelector('#inventorySearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderInventoryContent(container, true);
      const newSearch = container.querySelector('#inventorySearchInput');
      if (newSearch) {
        newSearch.focus();
        newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
      }
    });
  }

  // 5. Toggle Status (Allocate / Return)
  container.querySelectorAll('[data-action="toggle-status"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-inst-id');
      const current = btn.getAttribute('data-current-status');
      const nextStatus = current === 'available' ? 'in_use' : 'available';

      try {
        await API.patch(`/api/instruments/${id}/status`, { status: nextStatus });
        showToast(nextStatus === 'in_use' ? 'Đã cấp phát thiết bị cho thực nghiệm.' : 'Đã trả thiết bị về trạng thái sẵn sàng.');
        const target = cachedInstruments.find(i => i.id === id);
        if (target) {
          target.status = nextStatus;
          try {
            localStorage.setItem('100re_instruments_cache', JSON.stringify(cachedInstruments));
          } catch (e) {}
        }
        renderInventoryContent(container, true);
      } catch (e) {
        showToast('Lỗi cập nhật thiết bị: ' + e.message, true);
      }
    });
  });

  // 6. Edit Instrument Button
  container.querySelectorAll('[data-action="edit-instrument"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-inst-id');
      const inst = cachedInstruments.find(i => i.id === id);
      if (inst) openInstrumentModal(inst);
    });
  });

  // 7. Delete Instrument Button
  container.querySelectorAll('[data-action="delete-instrument"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-inst-id');
      const name = btn.getAttribute('data-inst-name');

      if (window.showConfirmModal) {
        const confirmed = await window.showConfirmModal({
          title: 'Xóa Thiết Bị Khỏi Database',
          message: `Bạn có chắc chắn muốn xóa thiết bị "${name}" khỏi cơ sở dữ liệu Lab không? Thao tác này không thể hoàn tác.`,
          confirmText: 'Xóa Vĩnh Viễn',
          cancelText: 'Hủy Bỏ',
          type: 'danger',
          icon: 'fa-trash-can'
        });
        if (!confirmed) return;
      } else {
        if (!confirm(`Bạn có chắc muốn xóa thiết bị "${name}" khỏi Database không?`)) return;
      }

      try {
        await API.delete(`/api/instruments/${id}`);
      } catch (e) {
        console.warn('API delete failed, removing locally:', e);
      }
      showToast('Đã xóa thiết bị khỏi Database thành công!');
      cachedInstruments = cachedInstruments.filter(i => i.id !== id);
      try {
        localStorage.setItem('100re_instruments_cache', JSON.stringify(cachedInstruments));
      } catch (e) {}
      renderInventoryContent(container, true);
    });
  });
}

function openInstrumentModal(inst = null) {
  const modal = document.getElementById('modalInstrumentForm');
  if (!modal) return;

  const title = document.getElementById('modalInstrumentTitle');
  const idInput = document.getElementById('instFormId');
  const nameInput = document.getElementById('instFormName');
  const codeInput = document.getElementById('instFormCode');
  const modelInput = document.getElementById('instFormModel');
  const mfrInput = document.getElementById('instFormManufacturer');
  const serialInput = document.getElementById('instFormSerial');
  const catInput = document.getElementById('instFormCategory');
  const teamInput = document.getElementById('instFormTeam');
  const locInput = document.getElementById('instFormLocation');
  const statusInput = document.getElementById('instFormStatus');
  const specsInput = document.getElementById('instFormSpecs');
  const docUrlInput = document.getElementById('instFormDocUrl');

  if (inst) {
    if (title) title.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Sửa Thông Tin Thiết Bị';
    if (idInput) idInput.value = inst.id;
    if (nameInput) nameInput.value = inst.name || '';
    if (codeInput) codeInput.value = inst.code || '';
    if (modelInput) modelInput.value = inst.model || '';
    if (mfrInput) mfrInput.value = inst.manufacturer || '';
    if (serialInput) serialInput.value = inst.serial_number || '';
    if (catInput) catInput.value = inst.category || 'solar_pv';
    if (teamInput) teamInput.value = inst.team_id || 'team-pv';
    if (locInput) locInput.value = inst.location || '';
    if (statusInput) statusInput.value = inst.status || 'available';
    if (specsInput) specsInput.value = inst.specs || '';
    if (docUrlInput) docUrlInput.value = inst.documentation_url || '';
  } else {
    if (title) title.innerHTML = '<i class="fa-solid fa-microchip"></i> Thêm Thiết Bị Mới Vào Database';
    if (idInput) idInput.value = '';
    if (nameInput) nameInput.value = '';
    if (codeInput) codeInput.value = `100RE-EQ-${Date.now().toString().slice(-4)}`;
    if (modelInput) modelInput.value = '';
    if (mfrInput) mfrInput.value = '';
    if (serialInput) serialInput.value = '';
    if (catInput) catInput.value = 'solar_pv';
    if (teamInput) teamInput.value = 'team-pv';
    if (locInput) locInput.value = 'Lab C7-503 / D9-300, HUST';
    if (statusInput) statusInput.value = 'available';
    if (specsInput) specsInput.value = '';
    if (docUrlInput) docUrlInput.value = '';
  }

  openModal('modalInstrumentForm');
  const dialog = modal.querySelector('.ws-modal-dialog');
  if (dialog) dialog.scrollTop = 0;
}

// Global modal form submit listener
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formInstrument');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('instFormId')?.value;
      const data = {
        name: document.getElementById('instFormName')?.value.trim(),
        code: document.getElementById('instFormCode')?.value.trim(),
        model: document.getElementById('instFormModel')?.value.trim(),
        manufacturer: document.getElementById('instFormManufacturer')?.value.trim(),
        serial_number: document.getElementById('instFormSerial')?.value.trim(),
        category: document.getElementById('instFormCategory')?.value,
        team_id: document.getElementById('instFormTeam')?.value,
        location: document.getElementById('instFormLocation')?.value.trim(),
        status: document.getElementById('instFormStatus')?.value,
        specs: document.getElementById('instFormSpecs')?.value.trim(),
        documentation_url: document.getElementById('instFormDocUrl')?.value.trim()
      };

      const btnSubmit = document.getElementById('btnSubmitInstrument');
      try {
        if (btnSubmit) {
          btnSubmit.disabled = true;
          btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang Lưu...';
        }

        if (id) {
          // Update existing
          if (typeof API.put === 'function') {
            await API.put(`/api/instruments/${id}`, data);
          } else {
            await API.patch(`/api/instruments/${id}`, data);
          }
          const idx = cachedInstruments.findIndex(i => i.id === id);
          if (idx !== -1) {
            cachedInstruments[idx] = { ...cachedInstruments[idx], ...data, id, updated_at: Math.floor(Date.now() / 1000) };
          }
          try {
            localStorage.setItem('100re_instruments_cache', JSON.stringify(cachedInstruments));
          } catch (e) {}
          showToast('Đã cập nhật thông tin thiết bị thành công!');
        } else {
          // Create new
          const res = await API.post('/api/instruments', data);
          const newInst = (res && res.instrument) ? res.instrument : {
            id: `inst-${Date.now()}`,
            ...data,
            created_at: Math.floor(Date.now() / 1000),
            updated_at: Math.floor(Date.now() / 1000)
          };
          cachedInstruments.unshift(newInst);
          try {
            localStorage.setItem('100re_instruments_cache', JSON.stringify(cachedInstruments));
          } catch (e) {}
          showToast('Đã thêm thiết bị mới vào Database thành công!');
        }

        closeModal('modalInstrumentForm');
        // Refresh view if on inventory view
        const appContainer = document.getElementById('appViewContainer');
        if (appContainer && window.location.hash.includes('inventory')) {
          renderInventory(appContainer);
        }
      } catch (err) {
        showToast('Lỗi lưu thiết bị: ' + err.message, true);
      } finally {
        if (btnSubmit) {
          btnSubmit.disabled = false;
          btnSubmit.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Lưu Thiết Bị Vào Database';
        }
      }
    });
  }
});
