/**
 * 100RE LAB WORKSPACE — Reusable UI Components & Helpers
 */

export function showToast(message, isError = false) {
  const toast = document.getElementById('wsToast');
  const msgEl = document.getElementById('wsToastMsg');
  const icon = document.getElementById('wsToastIcon');

  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (isError) {
    icon.className = 'fa-solid fa-circle-exclamation';
    icon.style.color = '#ef4444';
  } else {
    icon.className = 'fa-solid fa-circle-check';
    icon.style.color = '#4ade80';
  }

  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

export function formatDate(timestampOrStr) {
  if (!timestampOrStr) return 'N/A';
  let date;
  if (typeof timestampOrStr === 'number') {
    date = new Date(timestampOrStr * 1000);
  } else {
    date = new Date(timestampOrStr);
  }
  if (isNaN(date.getTime())) return timestampOrStr;
  return date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function formatBytes(bytes, decimals = 1) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function renderPriorityBadge(priority) {
  const p = String(priority || 'medium').toLowerCase();
  return `<span class="ws-badge ws-badge-${p}">${p.toUpperCase()}</span>`;
}

export function renderStatusBadge(status) {
  const s = String(status || 'todo').toLowerCase();
  const label = s === 'in_progress' ? 'IN PROGRESS' : s.toUpperCase();
  return `<span class="ws-badge ws-badge-${s}">${label}</span>`;
}

export function renderLoadingState(text = 'Loading data...') {
  return `
    <div class="ws-loader-center">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p style="margin-top:10px;">${escapeHtml(text)}</p>
    </div>
  `;
}

export function renderEmptyState(title, desc = '', actionBtnHtml = '') {
  return `
    <div class="ws-empty-state">
      <i class="fa-regular fa-folder-open"></i>
      <h3>${escapeHtml(title)}</h3>
      ${desc ? `<p>${escapeHtml(desc)}</p>` : ''}
      ${actionBtnHtml ? `<div style="margin-top:14px;">${actionBtnHtml}</div>` : ''}
    </div>
  `;
}

export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function showConfirmModal({
  title = 'Xác Nhận Xóa',
  message = 'Bạn có chắc chắn muốn thực hiện hành động này không?',
  confirmText = 'Xóa Vĩnh Viễn',
  cancelText = 'Hủy Bỏ',
  type = 'danger',
  icon = 'fa-trash-can'
} = {}) {
  return new Promise((resolve) => {
    document.querySelectorAll('.app-confirm-backdrop').forEach(m => m.remove());

    const backdrop = document.createElement('div');
    backdrop.className = 'app-confirm-backdrop';
    backdrop.innerHTML = `
      <div class="app-confirm-card">
        <div class="app-confirm-icon-box ${type}">
          <i class="fa-solid ${type === 'danger' ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i>
        </div>
        <div class="app-confirm-content">
          <h4 class="app-confirm-title">${escapeHtml(title)}</h4>
          <p class="app-confirm-msg">${escapeHtml(message)}</p>
        </div>
        <div class="app-confirm-actions">
          <button type="button" class="app-confirm-btn-cancel" id="btnConfirmCancel">
            ${escapeHtml(cancelText)}
          </button>
          <button type="button" class="app-confirm-btn-submit ${type}" id="btnConfirmOk">
            <i class="fa-solid ${icon}"></i>
            <span>${escapeHtml(confirmText)}</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);
    setTimeout(() => backdrop.classList.add('show'), 10);

    function cleanup(result) {
      backdrop.classList.remove('show');
      setTimeout(() => backdrop.remove(), 200);
      resolve(result);
    }

    backdrop.querySelector('#btnConfirmCancel').addEventListener('click', () => cleanup(false));
    backdrop.querySelector('#btnConfirmOk').addEventListener('click', () => cleanup(true));
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) cleanup(false);
    });
  });
}

window.showConfirmModal = showConfirmModal;
