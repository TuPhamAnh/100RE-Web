/**
 * 100RE LABORATORY - Universal In-Place Admin CRUD Engine
 * Enables Add, Edit, Delete for all public website sections (News, Journey, Research Areas, Projects, Publications, Photos)
 */

(function () {
  'use strict';

  // 1. Unified Data Manager
  const DataManager = {
    get(key) {
      try {
        const saved = localStorage.getItem('100re_data_' + key);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.warn('Error reading from localStorage for ' + key, e);
      }
      return (window.LAB_DATA && window.LAB_DATA[key]) ? window.LAB_DATA[key] : [];
    },

    set(key, items) {
      try {
        localStorage.setItem('100re_data_' + key, JSON.stringify(items));
      } catch (e) {
        console.warn('Error saving to localStorage for ' + key, e);
      }
      if (window.LAB_DATA) window.LAB_DATA[key] = items;
      window.dispatchEvent(new CustomEvent('100re_data_updated', { detail: { key, items } }));
    },

    add(key, item) {
      const items = this.get(key);
      item.id = item.id || (key + '-' + Date.now());
      items.unshift(item);
      this.set(key, items);
      return item;
    },

    update(key, id, updatedData) {
      const items = this.get(key);
      const idx = items.findIndex(i => String(i.id) === String(id));
      if (idx !== -1) {
        items[idx] = { ...items[idx], ...updatedData };
        this.set(key, items);
        return items[idx];
      }
      return null;
    },

    remove(key, id) {
      let items = this.get(key);
      items = items.filter(i => String(i.id) !== String(id));
      this.set(key, items);
      return true;
    }
  };

  window.DataManager = DataManager;

  // 2. Collection Schemas & Configuration
  const SCHEMAS = {
    news: {
      name: "News Article",
      plural: "News Articles",
      containerId: "newsContainer",
      fields: [
        { key: "title", label: "Article Title", type: "text", required: true },
        { key: "date", label: "Date (e.g. March 15, 2026)", type: "text", required: true },
        { key: "readTime", label: "Read Time (e.g. 5 min read)", type: "text", defaultValue: "4 min read" },
        { key: "image", label: "Cover Image URL / Upload", type: "image", required: true },
        { key: "excerpt", label: "Short Excerpt", type: "textarea", required: true },
        { key: "content", label: "Full Article Content / Details", type: "textarea" }
      ],
      renderItem(item) {
        return `
          <article class="news-card" data-id="${item.id}">
            <div class="news-img-wrap">
              <img src="${item.image || 'assets/images/logo.jpg'}" alt="${item.title}" class="news-img" onerror="this.src='assets/images/logo.jpg'">
            </div>
            <div class="news-card-body">
              <div class="news-date"><i class="fa-regular fa-calendar"></i> ${item.date} · <i class="fa-regular fa-clock"></i> ${item.readTime || '4 min read'}</div>
              <h3 class="news-title">${item.title}</h3>
              <p class="news-excerpt">${item.excerpt || ''}</p>
              ${getAdminCardButtons('news', item.id)}
            </div>
          </article>
        `;
      }
    },

    journey: {
      name: "Journey Event",
      plural: "Journey Events",
      containerId: "journeyContainer",
      fields: [
        { key: "title", label: "Event Title", type: "text", required: true },
        { key: "date", label: "Date / Period (e.g. Sep 2023 / 2024)", type: "text", required: true },
        { key: "category", label: "Category (e.g. International Conference, Delegation, Workshop)", type: "text", required: true },
        { key: "image", label: "Event Image URL / Upload", type: "image", required: true },
        { key: "description", label: "Event Description & Highlights", type: "textarea", required: true }
      ],
      renderItem(item) {
        return `
          <article class="journey-card" data-id="${item.id}">
            <div class="journey-img-wrap">
              <img src="${item.image || 'assets/images/logo.jpg'}" alt="${item.title}" class="journey-img" onerror="this.src='assets/images/logo.jpg'">
              <span class="journey-badge">${item.category || 'Event'}</span>
            </div>
            <div class="journey-card-body">
              <div class="journey-date"><i class="fa-regular fa-calendar-days"></i> ${item.date}</div>
              <h3 class="journey-title">${item.title}</h3>
              <p class="journey-desc">${item.description || ''}</p>
              ${getAdminCardButtons('journey', item.id)}
            </div>
          </article>
        `;
      }
    },

    researchAreas: {
      name: "Research Area",
      plural: "Research Areas",
      containerId: "researchAreasContainer",
      fields: [
        { key: "title", label: "Area Title (e.g. Solar Energy (PV))", type: "text", required: true },
        { key: "team", label: "Team Name (e.g. PV Team)", type: "text", required: true },
        { key: "leader", label: "Leader Name (e.g. Bui Quang Minh)", type: "text", required: true },
        { key: "icon", label: "FontAwesome Icon (e.g. fa-solar-panel, fa-wind, fa-atom)", type: "text", defaultValue: "fa-atom" },
        { key: "heroImage", label: "Banner Image URL / Upload", type: "image", required: true },
        { key: "summary", label: "Summary & Objectives", type: "textarea", required: true },
        { key: "topics", label: "Core Topics (one per line)", type: "multiline_list", required: true },
        { key: "futureDirections", label: "Future Directions", type: "textarea" }
      ],
      renderItem(item) {
        const topics = Array.isArray(item.topics) ? item.topics : (typeof item.topics === 'string' ? item.topics.split('\n').filter(Boolean) : []);
        return `
          <article class="research-card" data-id="${item.id}">
            <div class="research-card-img-wrap">
              <img src="${item.heroImage || 'assets/images/banner_pv.jpg'}" alt="${item.title}" class="research-card-thumb" onerror="this.src='assets/images/banner_pv.jpg'">
              <div class="research-card-badge"><i class="fa-solid ${item.icon || 'fa-atom'}"></i> ${item.team || item.title}</div>
            </div>
            <div class="research-card-body">
              <h3 class="research-card-title">${item.title}</h3>
              <div class="research-card-leader" style="font-size: 0.85rem; color: #16a34a; font-weight: 600; margin-bottom: 8px;">Leader: ${item.leader || 'Assoc. Prof. Nguyen Duc Tuyen'}</div>
              <p class="research-card-desc" style="font-size: 0.88rem; color: #64748b; line-height: 1.5; margin-bottom: 12px;">${item.summary || ''}</p>
              ${topics.length ? `
                <div style="font-size: 0.82rem; font-weight: 700; color: #0f172a; text-transform: uppercase; margin-bottom: 6px;">Core Topics:</div>
                <ul class="research-topics-list" style="margin-bottom: 14px;">
                  ${topics.slice(0, 4).map(t => `<li><i class="fa-solid fa-check"></i> <span>${t}</span></li>`).join('')}
                </ul>
              ` : ''}
              ${item.futureDirections ? `
                <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #e2e8f0; font-size: 0.82rem; color: #64748b; margin-bottom: 12px;">
                  <strong>Future Direction:</strong> ${item.futureDirections}
                </div>
              ` : ''}
              ${getAdminCardButtons('researchAreas', item.id)}
            </div>
          </article>
        `;
      }
    },

    projects: {
      name: "Research Project",
      plural: "Research Projects",
      containerId: "projectsContainer",
      fields: [
        { key: "title", label: "Project Title", type: "text", required: true },
        { key: "period", label: "Implementation Period (e.g. 2023 - 2025)", type: "text", required: true },
        { key: "org", label: "Client / Funding Organization (e.g. GIZ / MOET / EVN)", type: "text", required: true },
        { key: "desc", label: "Project Summary & Scope", type: "textarea", required: true },
        { key: "tags", label: "Key Tags (comma-separated, e.g. Smart Grid, Microgrid, GIZ)", type: "tags" }
      ],
      renderItem(item) {
        const tags = Array.isArray(item.tags) ? item.tags : (typeof item.tags === 'string' ? item.tags.split(',').map(s => s.trim()).filter(Boolean) : []);
        return `
          <article class="project-card" data-id="${item.id}" style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #16a34a; padding: 24px; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
              <span style="display: inline-block; background: #f0fdf4; color: #16a34a; font-size: 0.78rem; font-weight: 700; padding: 3px 10px; border: 1px solid #bbf7d0;">${item.period}</span>
              <span style="font-size: 0.85rem; font-weight: 600; color: #64748b;">${item.org || item.client || ''}</span>
            </div>
            <h3 style="font-family: 'Oswald', sans-serif; font-size: 1.35rem; color: #0f172a; margin-bottom: 8px;">${item.title}</h3>
            <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; margin-bottom: 16px; flex-grow: 1;">${item.desc || ''}</p>
            ${tags.length ? `
              <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
                ${tags.map(t => `<span style="background: #f1f5f9; color: #334155; font-size: 0.75rem; padding: 2px 8px; font-weight: 600;">#${t}</span>`).join('')}
              </div>
            ` : ''}
            ${getAdminCardButtons('projects', item.id)}
          </article>
        `;
      }
    },

    publications: {
      name: "Publication",
      plural: "Publications",
      containerId: "pubListContainer",
      fields: [
        { key: "title", label: "Paper Title", type: "text", required: true },
        { key: "authors", label: "Authors (e.g. Nguyen Duc Tuyen, Bui Quang Minh, et al.)", type: "text", required: true },
        { key: "venue", label: "Journal / Conference Venue", type: "text", required: true },
        { key: "year", label: "Publication Year (e.g. 2024)", type: "text", required: true },
        { key: "category", label: "Category", type: "select", options: ["international-journal", "domestic-journal", "conference", "book-chapter", "invited-talk"], required: true },
        { key: "quartile", label: "Quartile (optional, e.g. Q1 / Q2)", type: "text" },
        { key: "doi", label: "DOI / Paper Link (e.g. 10.1016/j.renene.2023.123456)", type: "text" }
      ],
      renderItem(item) {
        const catName = item.category === 'international-journal' ? 'International Journal' :
                        item.category === 'domestic-journal' ? 'Domestic Journal' :
                        item.category === 'conference' ? 'Conference' :
                        item.category === 'book-chapter' ? 'Book Chapter' : 'Invited Talk';
        return `
          <article class="pub-item" data-id="${item.id}" data-category="${item.category || 'international-journal'}">
            <div class="pub-meta-top">
              <span class="pub-badge-category">${catName}</span>
              ${item.quartile ? `<span class="pub-badge-quartile">${item.quartile}</span>` : ''}
              <span class="pub-year"><i class="fa-regular fa-calendar"></i> ${item.year || ''}</span>
            </div>
            <h3 class="pub-title">${item.title}</h3>
            <div class="pub-authors"><strong>Authors:</strong> ${item.authors}</div>
            <div class="pub-venue"><strong>Venue:</strong> ${item.venue || item.journal || ''}</div>
            <div class="pub-links">
              ${item.doi ? `<a href="${item.doi.startsWith('http') ? item.doi : 'https://doi.org/' + item.doi}" target="_blank" rel="noopener noreferrer" class="pub-link-btn"><i class="fa-solid fa-link"></i> DOI: ${item.doi}</a>` : ''}
              <button class="pub-link-btn" type="button" onclick="navigator.clipboard.writeText('${(item.authors || '').replace(/'/g, "\\'")} (${item.year}). ${(item.title || '').replace(/'/g, "\\'")}. ${(item.venue || item.journal || '').replace(/'/g, "\\'")}.'); if (typeof showToast === 'function') { showToast('Đã sao chép trích dẫn APA vào clipboard!'); } else { alert('Citation copied to clipboard!'); }">
                <i class="fa-regular fa-copy"></i> Copy Citation
              </button>
            </div>
            ${getAdminCardButtons('publications', item.id)}
          </article>
        `;
      }
    },

    photos: {
      name: "Photo",
      plural: "Photos",
      containerId: "galleryGrid",
      fields: [
        { key: "title", label: "Photo Title", type: "text", required: true },
        { key: "caption", label: "Caption / Description", type: "textarea", required: true },
        { key: "category", label: "Category (e.g. teams, visits, conferences)", type: "select", options: ["teams", "visits", "conferences"], required: true },
        { key: "image", label: "Photo URL / Upload", type: "image", required: true }
      ],
      renderItem(item) {
        return `
          <div class="gallery-item" data-id="${item.id}" data-category="${item.category || 'teams'}" style="position: relative;" onclick="if(typeof openLightbox==='function') openLightbox('${item.image || 'assets/images/logo.jpg'}', '${(item.caption || item.title || '').replace(/'/g, "\\'")}')">
            <img src="${item.image || 'assets/images/logo.jpg'}" alt="${item.title}" class="gallery-img" onerror="this.src='assets/images/logo.jpg'">
            <div class="gallery-caption-overlay">${item.title}</div>
            <div class="universal-admin-card-actions" style="position: absolute; bottom: 8px; right: 8px; z-index: 10;" onclick="event.stopPropagation()">
              <button type="button" class="btn-crud-edit" style="padding: 4px 8px; font-size: 0.725rem;" onclick="window.AdminCRUD.openModal('photos', '${item.id}')">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button type="button" class="btn-crud-delete" style="padding: 4px 8px; font-size: 0.725rem;" onclick="window.AdminCRUD.confirmDelete('photos', '${item.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `;
      }
    }
  };

  function getAdminCardButtons(collectionKey, itemId) {
    return `
      <div class="universal-admin-card-actions">
        <button type="button" class="btn-crud-edit" onclick="window.AdminCRUD.openModal('${collectionKey}', '${itemId}')">
          <i class="fa-solid fa-pen-to-square"></i> Edit
        </button>
        <button type="button" class="btn-crud-delete" onclick="window.AdminCRUD.confirmDelete('${collectionKey}', '${itemId}')">
          <i class="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    `;
  }

  // 3. Admin CRUD Interface Controller
  const AdminCRUD = {
    activeCollection: null,
    editingItemId: null,

    init() {
      this.injectStyles();
      this.injectModal();
      this.renderCurrentPage();

      // Listen for data updates
      window.addEventListener('100re_data_updated', () => {
        this.renderCurrentPage();
      });

      // Observe class changes on body to toggle admin buttons
      const observer = new MutationObserver(() => {
        this.updateAdminBars();
      });
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

      // Run on DOM ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.renderCurrentPage());
      } else {
        this.renderCurrentPage();
      }
    },

    injectStyles() {
      if (document.getElementById('universalCrudStyles')) return;
      const style = document.createElement('style');
      style.id = 'universalCrudStyles';
      style.textContent = `
        /* Universal Admin Action Bar */
        .universal-admin-bar {
          display: none;
          align-items: center;
          justify-content: space-between;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-left: 4px solid #16a34a;
          padding: 12px 20px;
          margin-bottom: 28px;
          box-shadow: var(--shadow-sm);
        }
        body.admin-mode .universal-admin-bar {
          display: flex;
        }
        .btn-universal-add {
          background: #16a34a;
          color: #ffffff !important;
          border: 1px solid #15803d;
          padding: 8px 18px;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 0px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(22, 163, 74, 0.2);
        }
        .btn-universal-add:hover {
          background: #15803d;
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(22, 163, 74, 0.3);
        }

        /* Card Admin Actions */
        .universal-admin-card-actions {
          display: none;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
        }
        body.admin-mode .universal-admin-card-actions {
          display: flex;
        }
        .btn-crud-edit, .btn-crud-delete {
          flex: 1;
          padding: 6px 12px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border: 1px solid transparent;
          transition: all 0.15s ease;
          border-radius: 0px;
        }
        .btn-crud-edit {
          background: #f8fafc;
          color: #1e293b;
          border-color: #cbd5e1;
        }
        .btn-crud-edit:hover {
          background: #e2e8f0;
          color: #0f172a;
        }
        .btn-crud-delete {
          background: #fef2f2;
          color: #dc2626;
          border-color: #fecaca;
        }
        .btn-crud-delete:hover {
          background: #fee2e2;
          color: #b91c1c;
        }

        /* Universal Modal Dialog */
        .universal-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 5000;
          display: none;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeInBackdrop 0.2s ease-out;
        }
        .universal-modal-backdrop.show {
          display: flex;
        }
        .universal-modal-window {
          background: #ffffff;
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid #cbd5e1;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          animation: scaleInModal 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes scaleInModal {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .universal-modal-header {
          padding: 16px 24px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .universal-modal-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.4rem;
          color: #0f172a;
          margin: 0;
        }
        .universal-modal-close {
          background: transparent;
          border: none;
          font-size: 1.4rem;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          line-height: 1;
        }
        .universal-modal-close:hover {
          color: #0f172a;
        }
        .universal-modal-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .crud-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .crud-form-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .crud-form-input, .crud-form-textarea, .crud-form-select {
          width: 100%;
          padding: 9px 12px;
          border: 1px solid #cbd5e1;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          color: #1e293b;
          outline: none;
          transition: border-color 0.15s ease;
        }
        .crud-form-input:focus, .crud-form-textarea:focus, .crud-form-select:focus {
          border-color: #16a34a;
          box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.15);
        }
        .crud-form-textarea {
          min-height: 85px;
          resize: vertical;
        }
        .universal-modal-footer {
          padding: 16px 24px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }
      `;
      document.head.appendChild(style);
    },

    injectModal() {
      if (document.getElementById('universalCrudModal')) return;
      const modal = document.createElement('div');
      modal.id = 'universalCrudModal';
      modal.className = 'universal-modal-backdrop';
      modal.innerHTML = `
        <div class="universal-modal-window">
          <div class="universal-modal-header">
            <h3 class="universal-modal-title" id="crudModalTitle">Edit Item</h3>
            <button type="button" class="universal-modal-close" onclick="window.AdminCRUD.closeModal()">&times;</button>
          </div>
          <form id="crudModalForm" onsubmit="window.AdminCRUD.handleFormSubmit(event)">
            <div class="universal-modal-body" id="crudModalFields">
              <!-- Form fields injected dynamically -->
            </div>
            <div class="universal-modal-footer">
              <button type="button" class="btn-crud-edit" style="flex: initial; padding: 8px 18px;" onclick="window.AdminCRUD.closeModal()">Cancel</button>
              <button type="submit" class="btn-universal-add" style="flex: initial; padding: 8px 22px;">
                <i class="fa-solid fa-floppy-disk"></i> Save Changes
              </button>
            </div>
          </form>
        </div>
      `;
      document.body.appendChild(modal);
    },

    renderCurrentPage() {
      for (const [key, schema] of Object.entries(SCHEMAS)) {
        const container = document.getElementById(schema.containerId);
        if (container) {
          this.activeCollection = key;
          const items = DataManager.get(key);
          container.innerHTML = items.map(item => schema.renderItem(item)).join('');
          this.injectPageAdminBar(key, schema, container);
        }
      }
    },

    injectPageAdminBar(key, schema, container) {
      let bar = document.getElementById('adminBar_' + key);
      if (!bar) {
        bar = document.createElement('div');
        bar.id = 'adminBar_' + key;
        bar.className = 'universal-admin-bar';
        bar.innerHTML = `
          <div>
            <strong style="color:#15803d; font-size: 0.95rem;"><i class="fa-solid fa-shield-halved"></i> Admin Mode Active</strong>
            <div style="font-size: 0.8rem; color:#475569;">You can add, modify or remove ${schema.plural.toLowerCase()} on this page.</div>
          </div>
          <button type="button" class="btn-universal-add" onclick="window.AdminCRUD.openModal('${key}')">
            <i class="fa-solid fa-plus"></i> Add New ${schema.name}
          </button>
        `;
        const parent = container.parentNode;
        const pubBar = parent.querySelector('.pub-control-bar') || parent.querySelector('.filter-pills');
        if (pubBar) {
          parent.insertBefore(bar, pubBar);
        } else {
          parent.insertBefore(bar, container);
        }
      }
    },

    updateAdminBars() {
      const isAdmin = document.body.classList.contains('admin-mode');
      const bars = document.querySelectorAll('.universal-admin-bar');
      bars.forEach(b => {
        b.style.display = isAdmin ? 'flex' : 'none';
      });
      const cardActions = document.querySelectorAll('.universal-admin-card-actions');
      cardActions.forEach(a => {
        a.style.display = isAdmin ? 'flex' : 'none';
      });
    },

    openModal(collectionKey, itemId = null) {
      const schema = SCHEMAS[collectionKey];
      if (!schema) return;
      this.activeCollection = collectionKey;
      this.editingItemId = itemId;

      const items = DataManager.get(collectionKey);
      const existing = itemId ? items.find(i => String(i.id) === String(itemId)) : null;

      const titleEl = document.getElementById('crudModalTitle');
      if (titleEl) {
        titleEl.textContent = itemId ? `Edit ${schema.name}` : `Add New ${schema.name}`;
      }

      const fieldsContainer = document.getElementById('crudModalFields');
      if (fieldsContainer) {
        fieldsContainer.innerHTML = schema.fields.map(f => {
          let val = existing ? (existing[f.key] !== undefined ? existing[f.key] : '') : (f.defaultValue || '');
          if (f.type === 'multiline_list' && Array.isArray(val)) {
            val = val.join('\n');
          } else if (f.type === 'tags' && Array.isArray(val)) {
            val = val.join(', ');
          }

          if (f.type === 'textarea' || f.type === 'multiline_list') {
            return `
              <div class="crud-form-group">
                <label class="crud-form-label">${f.label} ${f.required ? '<span style="color:#ef4444;">*</span>' : ''}</label>
                <textarea class="crud-form-textarea" name="${f.key}" ${f.required ? 'required' : ''}>${val}</textarea>
              </div>
            `;
          } else if (f.type === 'select') {
            return `
              <div class="crud-form-group">
                <label class="crud-form-label">${f.label} ${f.required ? '<span style="color:#ef4444;">*</span>' : ''}</label>
                <select class="crud-form-select" name="${f.key}">
                  ${(f.options || []).map(opt => `<option value="${opt}" ${val === opt ? 'selected' : ''}>${opt}</option>`).join('')}
                </select>
              </div>
            `;
          } else if (f.type === 'image') {
            return `
              <div class="crud-form-group">
                <label class="crud-form-label">${f.label} ${f.required ? '<span style="color:#ef4444;">*</span>' : ''}</label>
                <div style="display: flex; gap: 8px; align-items: center;">
                  <input type="text" class="crud-form-input" name="${f.key}" id="inputImage_${f.key}" value="${val}" placeholder="assets/images/... or https://..." ${f.required ? 'required' : ''}>
                  <label class="btn-crud-edit" style="cursor: pointer; white-space: nowrap; flex: initial; padding: 9px 12px;">
                    <i class="fa-solid fa-upload"></i> Upload
                    <input type="file" accept="image/*" style="display: none;" onchange="window.AdminCRUD.handleImageUpload(event, 'inputImage_${f.key}')">
                  </label>
                </div>
              </div>
            `;
          } else {
            return `
              <div class="crud-form-group">
                <label class="crud-form-label">${f.label} ${f.required ? '<span style="color:#ef4444;">*</span>' : ''}</label>
                <input type="${f.type || 'text'}" class="crud-form-input" name="${f.key}" value="${val}" ${f.required ? 'required' : ''}>
              </div>
            `;
          }
        }).join('');
      }

      const modal = document.getElementById('universalCrudModal');
      if (modal) modal.classList.add('show');
    },

    handleImageUpload(event, targetInputId) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const input = document.getElementById(targetInputId);
        if (input) input.value = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    closeModal() {
      const modal = document.getElementById('universalCrudModal');
      if (modal) modal.classList.remove('show');
      this.editingItemId = null;
    },

    handleFormSubmit(event) {
      event.preventDefault();
      const schema = SCHEMAS[this.activeCollection];
      if (!schema) return;

      const formData = new FormData(event.target);
      const dataObj = {};

      schema.fields.forEach(f => {
        let val = formData.get(f.key) || '';
        if (f.type === 'multiline_list') {
          dataObj[f.key] = val.split('\n').map(s => s.trim()).filter(Boolean);
        } else if (f.type === 'tags') {
          dataObj[f.key] = val.split(',').map(s => s.trim()).filter(Boolean);
        } else {
          dataObj[f.key] = val;
        }
      });

      if (this.editingItemId) {
        DataManager.update(this.activeCollection, this.editingItemId, dataObj);
        this.notify(`Updated ${schema.name} successfully!`);
      } else {
        DataManager.add(this.activeCollection, dataObj);
        this.notify(`Created new ${schema.name} successfully!`);
      }

      this.closeModal();
      this.renderCurrentPage();
    },

    confirmDelete(collectionKey, itemId) {
      const schema = SCHEMAS[collectionKey];
      if (!schema) return;
      if (confirm(`Are you sure you want to permanently delete this ${schema.name.toLowerCase()}?`)) {
        DataManager.remove(collectionKey, itemId);
        this.notify(`Deleted ${schema.name.toLowerCase()} successfully!`);
        this.renderCurrentPage();
      }
    },

    notify(message, isError = false) {
      const toastContainer = document.getElementById('toastContainer');
      if (!toastContainer) {
        alert(message);
        return;
      }
      const toast = document.createElement('div');
      toast.className = `toast ${isError ? 'error' : ''}`;
      toast.innerHTML = `
        <i class="fa-solid ${isError ? 'fa-triangle-exclamation' : 'fa-circle-check'}"></i>
        <span>${message}</span>
      `;
      toastContainer.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }
  };

  window.AdminCRUD = AdminCRUD;

  // Auto initialize Admin CRUD on page load
  AdminCRUD.init();

})();
