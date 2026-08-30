/**
 * 100RE LAB WORKSPACE — Research Datasets Catalog View
 * Storage: 100RE Database Cloud Storage (Files) + Cloudflare D1 (Metadata)
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatBytes, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderDatasets(container) {
  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>${isVi ? 'Kho Dữ Liệu Nghiên Cứu (100RE Database)' : 'Research Datasets (100RE Database)'}</h1>
        <p>${isVi ? 'Dữ liệu đo đạc thực nghiệm chuỗi thời gian, nhật ký suy thoái pin BESS, bức xạ mặt trời và mô phỏng lưới điện lưu trữ an toàn trên 100RE Database.' : 'High-resolution time-series, experimental battery logs, PV pyranometer data, and simulation results stored securely on 100RE Database.'}</p>
      </div>
      <div class="ws-page-actions">
        ${!Auth.isAlumni() ? `<button class="btn-ws-primary" id="btnUploadDataset"><i class="fa-solid fa-cloud-arrow-up"></i> ${isVi ? 'Tải Lên Dataset' : 'Upload Dataset'}</button>` : ''}
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="datasetSearchInput" class="ws-search-input" placeholder="${isVi ? 'Tìm kiếm dataset theo từ khóa, nguồn, tags...' : 'Search datasets by keyword, tags, source...'}">
      <select id="datasetFormatFilter" class="ws-select-filter">
        <option value="">${isVi ? 'Tất Cả Định Dạng' : 'All Formats'}</option>
        <option value="CSV">CSV</option>
        <option value="Parquet">Parquet</option>
        <option value="MAT / HDF5">MAT / HDF5</option>
        <option value="JSON">JSON</option>
      </select>
    </div>

    <div id="datasetsListContainer">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  try {
    const res = await API.get('/api/datasets');
    const datasets = res.datasets || [];
    const listContainer = container.querySelector('#datasetsListContainer');

    function displayDatasets(list) {
      if (list.length === 0) {
        listContainer.innerHTML = renderEmptyState(isVi ? 'Không tìm thấy bộ dữ liệu nào phù hợp' : 'No datasets found matching your filter');
        return;
      }

      listContainer.innerHTML = `
        <div class="ws-card">
          <div class="ws-table-container">
            <table class="ws-table">
              <thead>
                <tr>
                  <th>${isVi ? 'Bộ Dữ Liệu / Nguồn' : 'Dataset / Source'}</th>
                  <th>${isVi ? 'Nhóm / Đề Tài' : 'Team / Project'}</th>
                  <th>${isVi ? 'Định Dạng & Dung Lượng' : 'Format & Size'}</th>
                  <th>${isVi ? 'Lưu Trữ' : 'Storage'}</th>
                  <th>Tags</th>
                  <th>${isVi ? 'Ngày Tải Lên' : 'Uploaded Date'}</th>
                  <th>${isVi ? 'Thao Tác' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                ${list.map(ds => {
                  const tagsArr = ds.tags ? ds.tags.split(',').map(t => t.trim()).filter(Boolean) : [];
                  return `
                    <tr>
                      <td>
                        <div style="font-weight:600; color:var(--ws-dark);">${escapeHtml(ds.name)}</div>
                        <div style="font-size:0.775rem; color:var(--ws-text-muted);">
                          <i class="fa-solid fa-satellite-dish"></i> ${escapeHtml(ds.source || (isVi ? 'Thiết bị đo' : 'Sensor / Testbed'))}
                        </div>
                      </td>
                      <td>
                        <span class="ws-badge ws-badge-subtle">${escapeHtml(ds.team?.name || ds.team_id || '-')}</span>
                        ${ds.project ? `<div style="font-size:0.75rem; color:var(--ws-text-muted); margin-top:2px;">${escapeHtml(ds.project.name)}</div>` : ''}
                      </td>
                      <td>
                        <code>${escapeHtml(ds.format || 'CSV')}</code>
                        <div style="font-size:0.75rem; color:var(--ws-text-muted);">${formatBytes(ds.size_bytes)}</div>
                      </td>
                      <td>
                        <span class="ws-badge" style="background:#e0f2fe; color:#0369a1; font-weight:700; font-size:0.7rem;">
                          <i class="fa-solid fa-database"></i> 100RE DATABASE
                        </span>
                      </td>
                      <td>
                        <div style="display:flex; gap:4px; flex-wrap:wrap;">
                          ${tagsArr.map(tg => `<span class="ws-badge ws-badge-subtle" style="font-size:0.7rem;">${escapeHtml(tg)}</span>`).join('')}
                        </div>
                      </td>
                      <td><small>${formatDate(ds.created_at)}</small></td>
                      <td>
                        <div style="display:flex; gap:6px;">
                          <a href="/api/files/datasets/${ds.id}/download" target="_blank" class="btn-ws-ghost btn-ws-sm" title="${isVi ? 'Tải tệp về máy' : 'Download file'}">
                            <i class="fa-solid fa-download" style="color:var(--ws-primary);"></i>
                          </a>
                          ${ds.drive_file_id ? `
                            <a href="/api/files/datasets/${ds.id}/open" target="_blank" class="btn-ws-ghost btn-ws-sm" title="${isVi ? 'Mở trong 100RE Database' : 'Open in 100RE Database'}">
                              <i class="fa-solid fa-up-right-from-square" style="color:#0284c7;"></i>
                            </a>
                          ` : ''}
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    displayDatasets(datasets);

    // Search and filter listeners
    const searchInput = container.querySelector('#datasetSearchInput');
    const formatFilter = container.querySelector('#datasetFormatFilter');

    function filterData() {
      const q = searchInput.value.toLowerCase().trim();
      const fmt = formatFilter.value;
      const filtered = datasets.filter(d => {
        if (q && !d.name.toLowerCase().includes(q) && !(d.description && d.description.toLowerCase().includes(q)) && !(d.tags && d.tags.toLowerCase().includes(q))) return false;
        if (fmt && d.format !== fmt) return false;
        return true;
      });
      displayDatasets(filtered);
    }

    searchInput?.addEventListener('input', filterData);
    formatFilter?.addEventListener('change', filterData);

    const btnUpload = container.querySelector('#btnUploadDataset');
    if (btnUpload) {
      btnUpload?.addEventListener('click', () => {
        window.openUploadDatasetModal();
      });
    }

  } catch (err) {
    console.error('Error rendering datasets:', err);
    container.querySelector('#datasetsListContainer').innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
