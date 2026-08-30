/**
 * 100RE LAB WORKSPACE — Research Datasets Catalog View
 * Storage: Google Drive 5TB Cloud Storage (Files) + Cloudflare D1 (Metadata)
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatBytes, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderDatasets(container) {
  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>Research Datasets (Google Drive 5TB)</h1>
        <p>High-resolution time-series, experimental battery logs, PV pyranometer data, and simulation results stored securely on Google Drive.</p>
      </div>
      <div class="ws-page-actions">
        ${!Auth.isAlumni() ? '<button class="btn-ws-primary" id="btnUploadDataset"><i class="fa-solid fa-cloud-arrow-up"></i> Upload Dataset</button>' : ''}
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="datasetSearchInput" class="ws-search-input" placeholder="Search datasets by keyword, tags, source...">
      <select id="datasetFormatFilter" class="ws-select-filter">
        <option value="">All Formats</option>
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
        listContainer.innerHTML = renderEmptyState('No datasets found matching your filter');
        return;
      }

      listContainer.innerHTML = `
        <div class="ws-card">
          <div class="ws-table-container">
            <table class="ws-table">
              <thead>
                <tr>
                  <th>Dataset / Source</th>
                  <th>Team / Project</th>
                  <th>Format &amp; Size</th>
                  <th>Storage</th>
                  <th>Tags</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${list.map(ds => {
                  const tagList = (ds.tags || '').split(',').map(t => t.trim()).filter(Boolean);
                  const fileSize = ds.file_size || ds.size || 0;

                  return `
                    <tr>
                      <td style="max-width:320px;">
                        <strong style="color:var(--ws-dark); font-size:0.95rem; display:block; margin-bottom:2px;">
                          ${escapeHtml(ds.name)}
                        </strong>
                        <span style="font-size:0.775rem; color:var(--ws-text-muted);">
                          <i class="fa-solid fa-building-columns"></i> ${escapeHtml(ds.source || '100RE Laboratory Bench')}
                        </span>
                        ${ds.description ? `<p style="font-size:0.75rem; color:var(--ws-text-light); margin-top:4px;">${escapeHtml(ds.description)}</p>` : ''}
                      </td>
                      <td>
                        <span class="ws-badge ws-badge-in_progress">${ds.team ? escapeHtml(ds.team.name) : 'General'}</span>
                        ${ds.project ? `<div style="font-size:0.75rem; color:var(--ws-text-muted); margin-top:4px;">${escapeHtml(ds.project.name)}</div>` : ''}
                      </td>
                      <td>
                        <strong style="display:block; color:var(--ws-dark);">${escapeHtml(ds.format)}</strong>
                        <span style="font-size:0.75rem; color:var(--ws-text-light);">${formatBytes(fileSize)}</span>
                        <div style="font-size:0.7rem; color:var(--ws-text-muted);">${escapeHtml(ds.resolution || '')}</div>
                      </td>
                      <td>
                        <span class="ws-badge" style="background:#e0f2fe; color:#0369a1;">
                          <i class="fa-brands fa-google-drive"></i> Google Drive
                        </span>
                      </td>
                      <td style="max-width:180px;">
                        ${tagList.slice(0, 3).map(t => `<span class="ws-tag-pill">${escapeHtml(t)}</span>`).join('')}
                        ${tagList.length > 3 ? `<span style="font-size:0.7rem; color:var(--ws-text-light);">+${tagList.length - 3}</span>` : ''}
                      </td>
                      <td>
                        <div style="display:flex; gap:6px;">
                          <button class="btn-ws-primary btn-ws-sm" onclick="window.downloadResource('datasets', '${ds.id}', '${escapeHtml(ds.name)}.${ds.format.toLowerCase()}')" title="Download via Workspace API">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button class="btn-ws-ghost btn-ws-sm" onclick="window.openDriveFile('datasets', '${ds.id}')" title="Open in Google Drive">
                            <i class="fa-brands fa-google-drive"></i> Drive
                          </button>
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

    const searchInput = container.querySelector('#datasetSearchInput');
    const formatFilter = container.querySelector('#datasetFormatFilter');

    function applyFilter() {
      const q = searchInput.value.toLowerCase();
      const f = formatFilter.value;
      const filtered = datasets.filter(ds => {
        const matchesQuery = ds.name.toLowerCase().includes(q) || (ds.source && ds.source.toLowerCase().includes(q)) || (ds.tags && ds.tags.toLowerCase().includes(q));
        const matchesFormat = !f || ds.format.toUpperCase() === f.toUpperCase();
        return matchesQuery && matchesFormat;
      });
      displayDatasets(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilter);
    if (formatFilter) formatFilter.addEventListener('change', applyFilter);

    const btnUpload = container.querySelector('#btnUploadDataset');
    if (btnUpload) {
      btnUpload.addEventListener('click', () => window.openUploadDatasetModal());
    }

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
