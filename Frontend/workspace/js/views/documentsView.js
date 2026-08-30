/**
 * 100RE LAB WORKSPACE — Documents Catalog View
 * Storage: Google Drive 5TB Cloud Storage (Files) + Cloudflare D1 (Metadata)
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatBytes, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderDocuments(container) {
  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>Research Documents &amp; Standards (Google Drive 5TB)</h1>
        <p>Scientific papers, technical manuals, IEEE standards, architecture reports and simulation codes stored securely on Google Drive.</p>
      </div>
      <div class="ws-page-actions">
        ${!Auth.isAlumni() ? '<button class="btn-ws-primary" id="btnUploadDoc"><i class="fa-solid fa-file-arrow-up"></i> Upload Document</button>' : ''}
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="docSearchInput" class="ws-search-input" placeholder="Search documents by title, file name, tags...">
      <select id="docTypeFilter" class="ws-select-filter">
        <option value="">All Formats</option>
        <option value="pdf">PDF Documents</option>
        <option value="word">Word Documents</option>
        <option value="presentation">Presentations</option>
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
        listContainer.innerHTML = renderEmptyState('No documents match your search');
        return;
      }

      listContainer.innerHTML = `
        <div class="ws-card">
          <div class="ws-table-container">
            <table class="ws-table">
              <thead>
                <tr>
                  <th>Document Title</th>
                  <th>Team / Project</th>
                  <th>File Name &amp; Size</th>
                  <th>Storage</th>
                  <th>Uploaded By</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${list.map(doc => {
                  const isPdf = doc.file_name.toLowerCase().endsWith('.pdf') || (doc.mime_type && doc.mime_type.includes('pdf'));
                  const iconClass = isPdf ? 'fa-file-pdf' : 'fa-file-lines';
                  const iconColor = isPdf ? '#ef4444' : '#0284c7';

                  return `
                    <tr>
                      <td style="max-width:300px;">
                        <div style="display:flex; align-items:flex-start; gap:10px;">
                          <i class="fa-solid ${iconClass}" style="color:${iconColor}; font-size:1.4rem; margin-top:2px;"></i>
                          <div>
                            <strong style="color:var(--ws-dark); font-size:0.95rem; display:block; margin-bottom:2px;">
                              ${escapeHtml(doc.name)}
                            </strong>
                            ${doc.description ? `<p style="font-size:0.775rem; color:var(--ws-text-muted);">${escapeHtml(doc.description)}</p>` : ''}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="ws-badge ws-badge-in_progress">${doc.team ? escapeHtml(doc.team.name) : 'General'}</span>
                        ${doc.project ? `<div style="font-size:0.75rem; color:var(--ws-text-muted); margin-top:4px;">${escapeHtml(doc.project.name)}</div>` : ''}
                      </td>
                      <td>
                        <span style="font-size:0.825rem; font-weight:600; display:block;">${escapeHtml(doc.file_name)}</span>
                        <span style="font-size:0.725rem; color:var(--ws-text-light);">${formatBytes(doc.file_size)}</span>
                      </td>
                      <td>
                        <span class="ws-badge" style="background:#e0f2fe; color:#0369a1;">
                          <i class="fa-brands fa-google-drive"></i> Google Drive
                        </span>
                      </td>
                      <td>
                        <div style="display:flex; align-items:center; gap:6px;">
                          <img src="${doc.uploader?.avatar_url || 'assets/images/logo.jpg'}" style="width:22px; height:22px; border-radius:50%; object-fit:cover;" alt="Avatar">
                          <span style="font-size:0.8rem;">${escapeHtml(doc.uploader?.name || doc.uploader?.display_name || 'Member')}</span>
                        </div>
                      </td>
                      <td>
                        <span style="font-size:0.8rem; color:var(--ws-text-muted);">${formatDate(doc.created_at)}</span>
                      </td>
                      <td>
                        <div style="display:flex; gap:6px;">
                          <button class="btn-ws-primary btn-ws-sm" onclick="window.downloadResource('documents', '${doc.id}', '${escapeHtml(doc.file_name)}')">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button class="btn-ws-ghost btn-ws-sm" onclick="window.openDriveFile('documents', '${doc.id}')" title="Open in Google Drive">
                            <i class="fa-brands fa-google-drive"></i>
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

    displayDocs(docs);

    const searchInput = container.querySelector('#docSearchInput');
    const typeFilter = container.querySelector('#docTypeFilter');

    function applyFilter() {
      const q = searchInput.value.toLowerCase();
      const t = typeFilter.value;
      const filtered = docs.filter(d => {
        const matchesQuery = d.name.toLowerCase().includes(q) || d.file_name.toLowerCase().includes(q) || (d.tags && d.tags.toLowerCase().includes(q));
        let matchesType = true;
        if (t === 'pdf') matchesType = d.file_name.toLowerCase().endsWith('.pdf');
        if (t === 'word') matchesType = d.file_name.toLowerCase().endsWith('.doc') || d.file_name.toLowerCase().endsWith('.docx');
        return matchesQuery && matchesType;
      });
      displayDocs(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilter);
    if (typeFilter) typeFilter.addEventListener('change', applyFilter);

    const btnUpload = container.querySelector('#btnUploadDoc');
    if (btnUpload) {
      btnUpload.addEventListener('click', () => window.openUploadDocumentModal());
    }

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
