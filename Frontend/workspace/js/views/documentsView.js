/**
 * 100RE LAB WORKSPACE — Documents Catalog View
 * Storage: 100RE Database Cloud Storage (Files) + Cloudflare D1 (Metadata)
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatBytes, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderDocuments(container) {
  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>${isVi ? 'Tài Liệu Kỹ Thuật & Báo Cáo Nghiên Cứu (100RE Database)' : 'Research Documents & Standards (100RE Database)'}</h1>
        <p>${isVi ? 'Báo cáo bài báo khoa học, hướng dẫn kỹ thuật, tiêu chuẩn IEEE/IEC và slide thuyết trình lưu trữ an toàn trên 100RE Database.' : 'Scientific papers, technical manuals, IEEE standards, architecture reports and simulation codes stored securely on 100RE Database.'}</p>
      </div>
      <div class="ws-page-actions">
        ${!Auth.isAlumni() ? `<button class="btn-ws-primary" id="btnUploadDoc"><i class="fa-solid fa-file-arrow-up"></i> ${isVi ? 'Tải Lên Tài Liệu' : 'Upload Document'}</button>` : ''}
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="docSearchInput" class="ws-search-input" placeholder="${isVi ? 'Tìm tài liệu theo tiêu đề, tên tệp, tags...' : 'Search documents by title, file name, tags...'}">
      <select id="docTypeFilter" class="ws-select-filter">
        <option value="">${isVi ? 'Tất Cả Định Dạng' : 'All Formats'}</option>
        <option value="pdf">${isVi ? 'Tài Liệu PDF' : 'PDF Documents'}</option>
        <option value="word">${isVi ? 'Văn Bản Word' : 'Word Documents'}</option>
        <option value="presentation">${isVi ? 'Slide Thuyết Trình' : 'Presentations'}</option>
      </select>
    </div>

    <div id="docsListContainer">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  try {
    const res = await API.get('/api/documents');
    const docs = res.documents || [];
    const listContainer = container.querySelector('#docsListContainer');

    function displayDocs(list) {
      if (list.length === 0) {
        listContainer.innerHTML = renderEmptyState(isVi ? 'Không tìm thấy tài liệu nào phù hợp' : 'No documents match your search');
        return;
      }

      listContainer.innerHTML = `
        <div class="ws-card">
          <div class="ws-table-container">
            <table class="ws-table">
              <thead>
                <tr>
                  <th>${isVi ? 'Tên Tài Liệu' : 'Document Title'}</th>
                  <th>${isVi ? 'Nhóm / Đề Tài' : 'Team / Project'}</th>
                  <th>${isVi ? 'Tên Tệp & Dung Lượng' : 'File Name & Size'}</th>
                  <th>${isVi ? 'Lưu Trữ' : 'Storage'}</th>
                  <th>${isVi ? 'Người Đăng' : 'Uploaded By'}</th>
                  <th>${isVi ? 'Ngày Đăng' : 'Date'}</th>
                  <th>${isVi ? 'Thao Tác' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                ${list.map(doc => `
                  <tr>
                    <td>
                      <div style="font-weight:600; color:var(--ws-dark);">${escapeHtml(doc.title || doc.name)}</div>
                      <div style="font-size:0.775rem; color:var(--ws-text-muted); margin-top:2px;">
                        ${doc.tags ? doc.tags.split(',').map(t => `<span class="ws-badge ws-badge-subtle" style="font-size:0.7rem; margin-right:4px;">${escapeHtml(t.trim())}</span>`).join('') : ''}
                      </div>
                    </td>
                    <td>
                      <span class="ws-badge ws-badge-subtle">${escapeHtml(doc.team?.name || doc.team_id || '-')}</span>
                      ${doc.project ? `<div style="font-size:0.75rem; color:var(--ws-text-muted); margin-top:2px;">${escapeHtml(doc.project.name)}</div>` : ''}
                    </td>
                    <td>
                      <div style="font-size:0.825rem; font-weight:500;">${escapeHtml(doc.file_name || 'document.pdf')}</div>
                      <small style="color:var(--ws-text-muted);">${formatBytes(doc.file_size_bytes)} &bull; ${escapeHtml(doc.file_format || 'PDF')}</small>
                    </td>
                    <td>
                      <span class="ws-badge" style="background:#e0f2fe; color:#0369a1; font-weight:700; font-size:0.7rem;">
                        <i class="fa-solid fa-database"></i> 100RE DATABASE
                      </span>
                    </td>
                    <td>
                      <div style="display:flex; align-items:center; gap:6px; font-size:0.825rem;">
                        <img src="/assets/images/logo.jpg" style="width:20px; height:20px; border-radius:50%; object-fit:cover;" onerror="this.src='/assets/images/logo.jpg';">
                        <span>${escapeHtml(doc.uploader?.display_name || doc.uploader?.name || (isVi ? 'Thành viên' : 'Member'))}</span>
                      </div>
                    </td>
                    <td><small>${formatDate(doc.created_at)}</small></td>
                    <td>
                      <div style="display:flex; gap:6px;">
                        <a href="/api/files/documents/${doc.id}/download" target="_blank" class="btn-ws-ghost btn-ws-sm" title="${isVi ? 'Tải tệp' : 'Download file'}">
                          <i class="fa-solid fa-download" style="color:var(--ws-primary);"></i>
                        </a>
                        ${doc.drive_file_id ? `
                          <a href="/api/files/documents/${doc.id}/open" target="_blank" class="btn-ws-ghost btn-ws-sm" title="${isVi ? 'Mở trong 100RE Database' : 'Open in 100RE Database'}">
                            <i class="fa-solid fa-up-right-from-square" style="color:#0284c7;"></i>
                          </a>
                        ` : ''}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    displayDocs(docs);

    const searchInput = container.querySelector('#docSearchInput');
    const typeFilter = container.querySelector('#docTypeFilter');

    function filterDocs() {
      const q = searchInput.value.toLowerCase().trim();
      const t = typeFilter.value;
      const filtered = docs.filter(d => {
        if (q && !d.title.toLowerCase().includes(q) && !d.file_name.toLowerCase().includes(q) && !(d.tags && d.tags.toLowerCase().includes(q))) return false;
        if (t === 'pdf' && !d.file_name.toLowerCase().endsWith('.pdf')) return false;
        if (t === 'word' && !d.file_name.toLowerCase().match(/\.(docx?|doc)$/)) return false;
        if (t === 'presentation' && !d.file_name.toLowerCase().match(/\.(pptx?|ppt)$/)) return false;
        return true;
      });
      displayDocs(filtered);
    }

    searchInput?.addEventListener('input', filterDocs);
    typeFilter?.addEventListener('change', filterDocs);

    const btnUpload = container.querySelector('#btnUploadDoc');
    if (btnUpload) {
      btnUpload?.addEventListener('click', () => {
        window.openUploadDocModal();
      });
    }

  } catch (err) {
    console.error('Error rendering documents:', err);
    container.querySelector('#docsListContainer').innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
