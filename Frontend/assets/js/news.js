/**
 * 100RE LABORATORY - Newsroom & Full Article Reader Engine
 * Powers dual-view catalog/reader, category filtering, search, social sharing, and rich news composer
 */

(function () {
  'use strict';

  let currentCategory = 'all';
  let searchQuery = '';
  let activeArticleId = null;

  // DOM Elements
  const catalogView = document.getElementById('newsCatalogView');
  const articleView = document.getElementById('newsArticleView');
  const featuredContainer = document.getElementById('newsFeaturedContainer');
  const gridContainer = document.getElementById('newsGridContainer');
  const searchInput = document.getElementById('newsSearchInput');
  const filterBtns = document.querySelectorAll('[data-news-filter]');

  // Initialize
  function init() {
    setupEventListeners();
    handleRouting();
    renderNews();

    // Listen for data updates
    window.addEventListener('100re_data_updated', (e) => {
      if (e.detail && e.detail.key === 'news') {
        renderNews();
      }
    });

    // Listen for auth changes
    const observer = new MutationObserver(() => {
      updateAdminControls();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  function getNews() {
    if (window.DataManager) {
      return window.DataManager.get('news');
    }
    return (window.LAB_DATA && window.LAB_DATA.news) ? window.LAB_DATA.news : [];
  }

  function setupEventListeners() {
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderNews();
      });
    }

    if (filterBtns) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentCategory = btn.getAttribute('data-news-filter');
          renderNews();
        });
      });
    }

    window.addEventListener('popstate', (e) => {
      handleRouting();
    });
  }

  function handleRouting() {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id') || params.get('article');
    if (articleId) {
      openArticle(articleId, false);
    } else {
      closeArticle(false);
    }
  }

  // Render Catalog (Featured Hero + 3-Col Grid)
  function renderNews() {
    const allNews = getNews();
    if (!catalogView) return;

    const filtered = allNews.filter(item => {
      const matchCat = (currentCategory === 'all' || item.category === currentCategory || (currentCategory === 'international' && item.category && item.category.toLowerCase().includes('international')) || (currentCategory === 'workshops' && item.category && item.category.toLowerCase().includes('workshop')) || (currentCategory === 'climate' && item.category && item.category.toLowerCase().includes('climate')) || (currentCategory === 'awards' && item.category && item.category.toLowerCase().includes('award')));
      const fullText = `${item.title || ''} ${item.excerpt || ''} ${item.author || ''} ${item.date || ''} ${(item.tags || []).join(' ')}`.toLowerCase();
      const matchSearch = !searchQuery || fullText.includes(searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      if (featuredContainer) featuredContainer.innerHTML = '';
      if (gridContainer) {
        gridContainer.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: #ffffff; border: 1px dashed #cbd5e1;">
            <i class="fa-solid fa-newspaper" style="font-size: 3rem; color: #94a3b8; margin-bottom: 16px;"></i>
            <h3 style="font-family: 'Oswald', sans-serif; font-size: 1.4rem; color: #0f172a;">No News Articles Found</h3>
            <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">No articles match your search query <em>"${searchQuery || currentCategory}"</em>. Try a different keyword or reset filters.</p>
            <button class="btn-crud-edit" style="padding: 8px 18px;" onclick="window.NewsApp.resetFilters()">
              <i class="fa-solid fa-rotate-left"></i> Reset All Filters
            </button>
          </div>
        `;
      }
      return;
    }

    // Featured Hero (Only on first page and when not searching)
    if (!searchQuery && currentCategory === 'all' && filtered.length > 0) {
      const featured = filtered[0];
      const rest = filtered.slice(1);

      if (featuredContainer) {
        featuredContainer.innerHTML = `
          <article class="news-featured-card" onclick="window.NewsApp.openArticle('${featured.id}')">
            <div class="news-featured-img-wrap">
              <img src="${featured.image || 'assets/images/banner_pv.jpg'}" alt="${featured.title}" class="news-featured-img" onerror="this.src='assets/images/banner_pv.jpg'">
              <span class="news-featured-badge">${featured.category || 'Featured Story'}</span>
            </div>
            <div class="news-featured-body">
              <div class="news-featured-meta">
                <span><i class="fa-regular fa-calendar"></i> ${featured.date}</span>
                <span>·</span>
                <span><i class="fa-regular fa-clock"></i> ${featured.readTime || '4 min read'}</span>
                ${featured.views ? `<span>·</span><span><i class="fa-regular fa-eye"></i> ${featured.views}</span>` : ''}
              </div>
              <h2 class="news-featured-title">${featured.title}</h2>
              <p class="news-featured-excerpt">${featured.excerpt || ''}</p>
              <div class="news-featured-footer">
                <div class="news-author-inline">
                  <img src="${featured.authorAvatar || 'assets/images/logo.jpg'}" alt="${featured.author}" class="news-author-avatar" onerror="this.src='assets/images/logo.jpg'">
                  <div>
                    <strong style="font-size: 0.88rem; color: #0f172a; display: block;">${featured.author || '100RE Lab'}</strong>
                    <span style="font-size: 0.75rem; color: #64748b;">${featured.authorRole || 'Editorial Board'}</span>
                  </div>
                </div>
                <span class="news-read-more-btn">Read Full Story <i class="fa-solid fa-arrow-right"></i></span>
              </div>
              <div class="universal-admin-card-actions" onclick="event.stopPropagation()">
                <button type="button" class="btn-crud-edit" onclick="window.NewsApp.openComposer('${featured.id}')">
                  <i class="fa-solid fa-pen-to-square"></i> Edit Article
                </button>
                <button type="button" class="btn-crud-delete" onclick="window.NewsApp.confirmDelete('${featured.id}')">
                  <i class="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </article>
        `;
      }

      if (gridContainer) {
        gridContainer.innerHTML = rest.map(item => renderCardHtml(item)).join('');
      }
    } else {
      if (featuredContainer) featuredContainer.innerHTML = '';
      if (gridContainer) {
        gridContainer.innerHTML = filtered.map(item => renderCardHtml(item)).join('');
      }
    }

    updateAdminControls();
  }

  function renderCardHtml(item) {
    return `
      <article class="news-card" onclick="window.NewsApp.openArticle('${item.id}')">
        <div class="news-img-wrap">
          <img src="${item.image || 'assets/images/logo.jpg'}" alt="${item.title}" class="news-img" onerror="this.src='assets/images/logo.jpg'">
          <span class="news-card-badge">${item.category || 'News'}</span>
        </div>
        <div class="news-card-body">
          <div class="news-date">
            <span><i class="fa-regular fa-calendar"></i> ${item.date}</span>
            <span>·</span>
            <span><i class="fa-regular fa-clock"></i> ${item.readTime || '3 min read'}</span>
          </div>
          <h3 class="news-title">${item.title}</h3>
          <p class="news-excerpt">${item.excerpt || ''}</p>
          <div style="margin-top: auto; padding-top: 12px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.82rem; font-weight: 700; color: #16a34a; display: inline-flex; align-items: center; gap: 4px;">
              Read Article <i class="fa-solid fa-arrow-right" style="font-size: 0.75rem;"></i>
            </span>
            <span style="font-size: 0.78rem; color: #94a3b8;"><i class="fa-solid fa-user-pen"></i> ${item.author ? item.author.split('/')[0].trim() : '100RE'}</span>
          </div>
          <div class="universal-admin-card-actions" onclick="event.stopPropagation()">
            <button type="button" class="btn-crud-edit" onclick="window.NewsApp.openComposer('${item.id}')">
              <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button type="button" class="btn-crud-delete" onclick="window.NewsApp.confirmDelete('${item.id}')">
              <i class="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // Open Full Article View
  function openArticle(articleId, updateHistory = true) {
    const allNews = getNews();
    const article = allNews.find(n => String(n.id) === String(articleId));
    if (!article) return;

    activeArticleId = articleId;

    if (updateHistory) {
      const url = new URL(window.location);
      url.searchParams.set('id', articleId);
      window.history.pushState({ articleId }, '', url);
    }

    if (catalogView) catalogView.style.display = 'none';
    if (articleView) {
      articleView.style.display = 'block';
      renderArticleReader(article, allNews);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderArticleReader(article, allNews) {
    const related = allNews.filter(n => String(n.id) !== String(article.id)).slice(0, 3);
    const tags = Array.isArray(article.tags) ? article.tags : (typeof article.tags === 'string' ? article.tags.split(',').map(s => s.trim()).filter(Boolean) : []);

    articleView.innerHTML = `
      <div class="article-back-nav">
        <button type="button" class="btn-article-back" onclick="window.NewsApp.closeArticle()">
          <i class="fa-solid fa-arrow-left"></i> Quay lại tất cả tin tức (Back to All News)
        </button>
      </div>

      <header class="article-header">
        <span class="article-category-badge"><i class="fa-solid fa-tag"></i> ${article.category || 'Laboratory News'}</span>
        <h1 class="article-headline">${article.title}</h1>
        
        <div class="article-byline-bar">
          <div class="article-author-info">
            <img src="${article.authorAvatar || 'assets/images/logo.jpg'}" alt="${article.author}" class="article-author-avatar" onerror="this.src='assets/images/logo.jpg'">
            <div>
              <div class="article-author-name">${article.author || '100RE Laboratory'}</div>
              <div class="article-author-role">${article.authorRole || 'Editorial Board'}</div>
            </div>
          </div>

          <div class="article-meta-chips">
            <span><i class="fa-regular fa-calendar-days"></i> ${article.date}</span>
            <span>·</span>
            <span><i class="fa-regular fa-clock"></i> ${article.readTime || '4 min read'}</span>
            ${article.views ? `<span>·</span><span><i class="fa-regular fa-eye"></i> ${article.views}</span>` : ''}
          </div>

          <div class="article-share-group">
            <span style="font-size: 0.8rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Share:</span>
            <button type="button" class="btn-share-icon" title="Sao chép liên kết" onclick="window.NewsApp.copyArticleLink()">
              <i class="fa-solid fa-link"></i>
            </button>
            <button type="button" class="btn-share-icon" title="Chia sẻ Facebook" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank')">
              <i class="fa-brands fa-facebook-f"></i>
            </button>
            <button type="button" class="btn-share-icon" title="Chia sẻ Twitter / X" onclick="window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent('${article.title.replace(/'/g, "\\\'")}'), '_blank')">
              <i class="fa-brands fa-x-twitter"></i>
            </button>
            <button type="button" class="btn-share-icon" title="Chia sẻ LinkedIn" onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href), '_blank')">
              <i class="fa-brands fa-linkedin-in"></i>
            </button>
            <button type="button" class="btn-share-icon" title="In bài viết" onclick="window.print()">
              <i class="fa-solid fa-print"></i>
            </button>
          </div>
        </div>
      </header>

      ${article.image ? `
        <figure class="article-featured-media">
          <img src="${article.image}" alt="${article.title}" class="article-featured-img" onerror="this.src='assets/images/banner_pv.jpg'">
          ${article.imageCaption ? `<figcaption class="article-media-caption"><i class="fa-solid fa-camera"></i> ${article.imageCaption}</figcaption>` : ''}
        </figure>
      ` : ''}

      <div class="article-content-body">
        ${article.content || `<p class="article-lead">${article.excerpt || ''}</p>`}
      </div>

      ${tags.length ? `
        <div class="article-tags-wrap">
          <strong style="font-size: 0.85rem; color: #0f172a; text-transform: uppercase; margin-right: 6px;"><i class="fa-solid fa-tags"></i> Keywords:</strong>
          ${tags.map(t => `<span class="article-tag-chip">#${t}</span>`).join('')}
        </div>
      ` : ''}

      <div class="article-author-box">
        <img src="${article.authorAvatar || 'assets/images/logo.jpg'}" alt="${article.author}" class="article-author-box-avatar" onerror="this.src='assets/images/logo.jpg'">
        <div>
          <h4 class="article-author-box-name">${article.author || '100RE Laboratory Editorial'}</h4>
          <p class="article-author-box-bio">Ban Biên tập &amp; Nhóm Truyền thông Khoa học — Phòng Thí nghiệm Nghiên cứu Hướng tới 100% Năng lượng Tái tạo (100RE Lab), Đại học Bách Khoa Hà Nội.</p>
        </div>
      </div>

      ${related.length ? `
        <section class="related-news-section">
          <h3 class="related-news-title"><i class="fa-solid fa-newspaper" style="color: #16a34a;"></i> Bài Viết Khác Cùng Chuyên Mục (Related Articles)</h3>
          <div class="news-grid">
            ${related.map(item => renderCardHtml(item)).join('')}
          </div>
        </section>
      ` : ''}
    `;
  }

  function closeArticle(updateHistory = true) {
    activeArticleId = null;
    if (updateHistory) {
      const url = new URL(window.location);
      url.searchParams.delete('id');
      url.searchParams.delete('article');
      window.history.pushState({}, '', url);
    }
    if (articleView) articleView.style.display = 'none';
    if (catalogView) catalogView.style.display = 'block';
    renderNews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function copyArticleLink() {
    navigator.clipboard.writeText(window.location.href);
    if (typeof showToast === 'function') {
      showToast('Đã sao chép liên kết bài viết vào bộ nhớ tạm!');
    } else {
      alert('Link copied to clipboard!');
    }
  }

  function resetFilters() {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    currentCategory = 'all';
    filterBtns.forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('[data-news-filter="all"]');
    if (allBtn) allBtn.classList.add('active');
    renderNews();
  }

  function updateAdminControls() {
    const isAdmin = document.body.classList.contains('admin-mode');
    const adminBars = document.querySelectorAll('.universal-admin-bar');
    adminBars.forEach(b => b.style.display = isAdmin ? 'flex' : 'none');
    const cardActions = document.querySelectorAll('.universal-admin-card-actions');
    cardActions.forEach(a => a.style.display = isAdmin ? 'flex' : 'none');
  }

  // ==========================================
  // Rich News Article Composer & Editor Modal
  // ==========================================
  let editingId = null;

  function openComposer(id = null) {
    editingId = id;
    const allNews = getNews();
    const existing = id ? allNews.find(n => String(n.id) === String(id)) : null;

    let modal = document.getElementById('newsComposerModal');
    if (!modal) {
      modal = createComposerModal();
      document.body.appendChild(modal);
    }

    const titleEl = document.getElementById('composerModalTitle');
    if (titleEl) {
      titleEl.textContent = id ? 'Chỉnh Sửa Bài Báo / Edit News Article' : 'Soạn Bài Báo Mới / Create News Article';
    }

    document.getElementById('compTitle').value = existing ? (existing.title || '') : '';
    document.getElementById('compCategory').value = existing ? (existing.category || 'International Collaboration') : 'International Collaboration';
    document.getElementById('compAuthor').value = existing ? (existing.author || '100RE Editorial') : '100RE Editorial';
    document.getElementById('compDate').value = existing ? (existing.date || 'March 2026') : 'March 2026';
    document.getElementById('compReadTime').value = existing ? (existing.readTime || '3 min read') : '3 min read';
    document.getElementById('compImage').value = existing ? (existing.image || 'assets/images/banner_pv.jpg') : 'assets/images/banner_pv.jpg';
    document.getElementById('compImageCaption').value = existing ? (existing.imageCaption || '') : '';
    document.getElementById('compExcerpt').value = existing ? (existing.excerpt || '') : '';
    document.getElementById('compContent').value = existing ? (existing.content || '') : '';
    document.getElementById('compTags').value = existing ? (Array.isArray(existing.tags) ? existing.tags.join(', ') : (existing.tags || '')) : 'HUST, Renewable Energy, 100RE';

    // Switch to edit tab
    switchComposerTab('editor');

    modal.classList.add('show');
  }

  function createComposerModal() {
    const modal = document.createElement('div');
    modal.id = 'newsComposerModal';
    modal.className = 'universal-modal-backdrop';
    modal.innerHTML = `
      <div class="universal-modal-window" style="max-width: 840px;">
        <div class="universal-modal-header">
          <h3 class="universal-modal-title" id="composerModalTitle">Soạn Bài Báo Mới / News Composer</h3>
          <button type="button" class="universal-modal-close" onclick="window.NewsApp.closeComposer()">&times;</button>
        </div>

        <div class="composer-tabs" style="padding: 0 24px; background: #f8fafc; margin-bottom: 0;">
          <button type="button" class="composer-tab-btn active" id="tabBtnEditor" onclick="window.NewsApp.switchTab('editor')">
            <i class="fa-solid fa-pen-nib"></i> Soạn Thảo (Editor)
          </button>
          <button type="button" class="composer-tab-btn" id="tabBtnPreview" onclick="window.NewsApp.switchTab('preview')">
            <i class="fa-solid fa-eye"></i> Xem Trước Bài Viết (Live Preview)
          </button>
        </div>

        <form id="newsComposerForm" onsubmit="window.NewsApp.saveArticle(event)">
          <!-- EDITOR TAB -->
          <div class="universal-modal-body" id="composerTabEditor">
            
            <div class="crud-form-group">
              <label class="crud-form-label">Tiêu Đề Bài Báo (Article Headline) <span style="color:#ef4444;">*</span></label>
              <input type="text" class="crud-form-input" id="compTitle" required placeholder="Nhập tiêu đề bài báo..." style="font-size: 1.05rem; font-weight: 700;">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="crud-form-group">
                <label class="crud-form-label">Chuyên Mục (Category) <span style="color:#ef4444;">*</span></label>
                <select class="crud-form-select" id="compCategory">
                  <option value="International Collaboration">International Collaboration (Hợp tác quốc tế)</option>
                  <option value="Scientific Workshops">Scientific Workshops (Hội thảo khoa học)</option>
                  <option value="Youth & Climate Action">Youth & Climate Action (Thanh niên & Khí hậu)</option>
                  <option value="Awards & Recognition">Awards & Recognition (Giải thưởng & Thành tích)</option>
                  <option value="Awards & Scholarships">Awards & Scholarships (Học bổng)</option>
                  <option value="Laboratory Activities">Laboratory Activities (Hoạt động Lab)</option>
                </select>
              </div>

              <div class="crud-form-group">
                <label class="crud-form-label">Tác Giả / Người Đăng (Author) <span style="color:#ef4444;">*</span></label>
                <input type="text" class="crud-form-input" id="compAuthor" required placeholder="Tên tác giả hoặc Ban biên tập...">
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="crud-form-group">
                <label class="crud-form-label">Ngày Đăng (Publication Date) <span style="color:#ef4444;">*</span></label>
                <input type="text" class="crud-form-input" id="compDate" required placeholder="e.g. Dec 12, 2025 hoặc 15/03/2026">
              </div>

              <div class="crud-form-group">
                <label class="crud-form-label">Thời Lượng Đọc (Read Time)</label>
                <input type="text" class="crud-form-input" id="compReadTime" placeholder="e.g. 4 min read">
              </div>
            </div>

            <div class="crud-form-group">
              <label class="crud-form-label">Ảnh Bìa Bài Viết (Featured Cover Image) <span style="color:#ef4444;">*</span></label>
              <div style="display: flex; gap: 8px; align-items: center;">
                <input type="text" class="crud-form-input" id="compImage" required placeholder="assets/images/... hoặc URL ảnh https://...">
                <label class="btn-crud-edit" style="cursor: pointer; white-space: nowrap; flex: initial; padding: 9px 14px;">
                  <i class="fa-solid fa-upload"></i> Tải Ảnh Lên
                  <input type="file" accept="image/*" style="display: none;" onchange="window.NewsApp.handleImageUpload(event)">
                </label>
              </div>
            </div>

            <div class="crud-form-group">
              <label class="crud-form-label">Chú Thích Ảnh Bìa (Cover Image Caption)</label>
              <input type="text" class="crud-form-input" id="compImageCaption" placeholder="Ghi chú ảnh (hiển thị dưới ảnh bài báo)...">
            </div>

            <div class="crud-form-group">
              <label class="crud-form-label">Đoạn Tóm Tắt Ngắn / Sapo (Excerpt / Lead Summary) <span style="color:#ef4444;">*</span></label>
              <textarea class="crud-form-textarea" id="compExcerpt" required style="min-height: 70px;" placeholder="Tóm tắt ngắn 1-2 câu về nội dung chính của bài báo..."></textarea>
            </div>

            <div class="crud-form-group">
              <label class="crud-form-label">Toàn Văn Nội Dung Bài Báo (Full Rich Article Body)</label>
              
              <!-- Quick Format Bar -->
              <div class="composer-format-toolbar">
                <button type="button" class="btn-format" onclick="window.NewsApp.insertTag('<h3>', '</h3>')"><strong>H3 Tiêu Đề</strong></button>
                <button type="button" class="btn-format" onclick="window.NewsApp.insertTag('<strong>', '</strong>')"><strong>B Đậm</strong></button>
                <button type="button" class="btn-format" onclick="window.NewsApp.insertTag('<em>', '</em>')"><em>I Nghiêng</em></button>
                <button type="button" class="btn-format" onclick="window.NewsApp.insertTag('<blockquote>', '</blockquote>')"><i class="fa-solid fa-quote-left"></i> Trích Dẫn</button>
                <button type="button" class="btn-format" onclick="window.NewsApp.insertTag('<ul>\n  <li>', '</li>\n</ul>')"><i class="fa-solid fa-list-ul"></i> Danh Sách</button>
                <button type="button" class="btn-format" onclick="window.NewsApp.insertImageTag()"><i class="fa-solid fa-image"></i> + Chèn Ảnh</button>
                <button type="button" class="btn-format" onclick="window.NewsApp.insertTag('<p>', '</p>')">Đoạn &lt;p&gt;</button>
              </div>
              
              <textarea class="crud-form-textarea" id="compContent" style="min-height: 220px; font-family: monospace; font-size: 0.9rem;" placeholder="Nhập các đoạn văn của bài báo, có thể sử dụng các nút định dạng phía trên hoặc gõ văn bản tự do..."></textarea>
            </div>

            <div class="crud-form-group">
              <label class="crud-form-label">Từ Khóa / Thẻ Tag (Tags - cách nhau bằng dấu phẩy)</label>
              <input type="text" class="crud-form-input" id="compTags" placeholder="HUST, Renewable Energy, 100RE Lab, AI...">
            </div>

          </div>

          <!-- LIVE PREVIEW TAB -->
          <div class="universal-modal-body" id="composerTabPreview" style="display: none; background: #ffffff; padding: 30px;">
            <div id="composerPreviewContent">
              <!-- Live preview rendered here -->
            </div>
          </div>

          <div class="universal-modal-footer">
            <button type="button" class="btn-crud-edit" style="flex: initial; padding: 8px 18px;" onclick="window.NewsApp.closeComposer()">Hủy Bỏ</button>
            <button type="submit" class="btn-universal-add" style="flex: initial; padding: 8px 24px;">
              <i class="fa-solid fa-paper-plane"></i> Đăng / Lưu Bài Viết
            </button>
          </div>
        </form>
      </div>
    `;
    return modal;
  }

  function switchComposerTab(tab) {
    const tabEditor = document.getElementById('composerTabEditor');
    const tabPreview = document.getElementById('composerTabPreview');
    const btnEditor = document.getElementById('tabBtnEditor');
    const btnPreview = document.getElementById('tabBtnPreview');

    if (tab === 'editor') {
      if (tabEditor) tabEditor.style.display = 'flex';
      if (tabPreview) tabPreview.style.display = 'none';
      if (btnEditor) btnEditor.classList.add('active');
      if (btnPreview) btnPreview.classList.remove('active');
    } else {
      if (tabEditor) tabEditor.style.display = 'none';
      if (tabPreview) tabPreview.style.display = 'block';
      if (btnEditor) btnEditor.classList.remove('active');
      if (btnPreview) btnPreview.classList.add('active');

      renderLivePreview();
    }
  }

  function renderLivePreview() {
    const previewContainer = document.getElementById('composerPreviewContent');
    if (!previewContainer) return;

    const title = document.getElementById('compTitle').value || 'Tiêu Đề Bài Báo';
    const category = document.getElementById('compCategory').value;
    const author = document.getElementById('compAuthor').value || '100RE Editorial';
    const date = document.getElementById('compDate').value || 'Hôm nay';
    const readTime = document.getElementById('compReadTime').value || '3 min read';
    const image = document.getElementById('compImage').value || 'assets/images/banner_pv.jpg';
    const caption = document.getElementById('compImageCaption').value;
    const excerpt = document.getElementById('compExcerpt').value;
    const content = document.getElementById('compContent').value;
    const tags = document.getElementById('compTags').value.split(',').map(s => s.trim()).filter(Boolean);

    previewContainer.innerHTML = `
      <div class="article-category-badge">${category}</div>
      <h1 class="article-headline" style="font-size: 2rem;">${title}</h1>
      <div class="article-byline-bar" style="margin-bottom: 20px;">
        <div class="article-author-info">
          <img src="assets/images/logo.jpg" alt="${author}" class="article-author-avatar">
          <div>
            <div class="article-author-name">${author}</div>
            <div class="article-author-role">100RE Lab Contributor</div>
          </div>
        </div>
        <div class="article-meta-chips">
          <span><i class="fa-regular fa-calendar-days"></i> ${date}</span>
          <span>·</span>
          <span><i class="fa-regular fa-clock"></i> ${readTime}</span>
        </div>
      </div>
      <figure class="article-featured-media">
        <img src="${image}" alt="${title}" class="article-featured-img">
        ${caption ? `<figcaption class="article-media-caption">${caption}</figcaption>` : ''}
      </figure>
      <div class="article-content-body">
        ${content ? content : `<p class="article-lead">${excerpt}</p>`}
      </div>
      ${tags.length ? `
        <div class="article-tags-wrap">
          ${tags.map(t => `<span class="article-tag-chip">#${t}</span>`).join('')}
        </div>
      ` : ''}
    `;
  }

  function insertTag(openTag, closeTag) {
    const textarea = document.getElementById('compContent');
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end) || 'Nội dung...';
    textarea.value = text.substring(0, start) + openTag + selected + closeTag + text.substring(end);
    textarea.focus();
    textarea.selectionStart = start + openTag.length;
    textarea.selectionEnd = start + openTag.length + selected.length;
  }

  function insertImageTag() {
    const url = prompt('Nhập đường dẫn URL ảnh (Image URL):', 'assets/images/banner_pv.jpg');
    if (!url) return;
    const caption = prompt('Nhập chú thích ảnh (Caption):', 'Hình ảnh minh họa');
    const html = `\n<figure class="article-featured-media">\n  <img src="${url}" alt="${caption}" class="article-featured-img">\n  <figcaption class="article-media-caption">${caption}</figcaption>\n</figure>\n`;
    const textarea = document.getElementById('compContent');
    if (!textarea) return;
    const start = textarea.selectionStart;
    textarea.value = textarea.value.substring(0, start) + html + textarea.value.substring(start);
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const input = document.getElementById('compImage');
      if (input) input.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function closeComposer() {
    const modal = document.getElementById('newsComposerModal');
    if (modal) modal.classList.remove('show');
    editingId = null;
  }

  function saveArticle(event) {
    event.preventDefault();
    const title = document.getElementById('compTitle').value.trim();
    const category = document.getElementById('compCategory').value;
    const author = document.getElementById('compAuthor').value.trim();
    const date = document.getElementById('compDate').value.trim();
    const readTime = document.getElementById('compReadTime').value.trim();
    const image = document.getElementById('compImage').value.trim();
    const imageCaption = document.getElementById('compImageCaption').value.trim();
    const excerpt = document.getElementById('compExcerpt').value.trim();
    const content = document.getElementById('compContent').value.trim();
    const tags = document.getElementById('compTags').value.split(',').map(s => s.trim()).filter(Boolean);

    const articleData = {
      title,
      category,
      author,
      authorRole: '100RE Editorial',
      authorAvatar: 'assets/images/logo.jpg',
      date,
      readTime,
      image,
      imageCaption,
      excerpt,
      content,
      tags
    };

    if (editingId) {
      window.DataManager.update('news', editingId, articleData);
      if (typeof showToast === 'function') showToast('Cập nhật bài báo thành công!');
    } else {
      window.DataManager.add('news', articleData);
      if (typeof showToast === 'function') showToast('Đăng bài báo mới thành công!');
    }

    closeComposer();
    renderNews();

    if (activeArticleId && editingId === activeArticleId) {
      openArticle(activeArticleId, false);
    }
  }

  async function confirmDelete(id) {
    const confirmed = typeof window.showConfirmModal === 'function' ? await window.showConfirmModal({
      title: 'Xác Nhận Xóa Bài Viết',
      message: 'Bạn có chắc chắn muốn xóa bài báo / sự kiện này không? Thao tác này không thể hoàn tác.',
      confirmText: 'Xóa Bài Viết',
      cancelText: 'Hủy Bỏ',
      type: 'danger'
    }) : confirm('Bạn có chắc chắn muốn xóa bài báo này không?');
    if (confirmed) {
      window.DataManager.remove('news', id);
      if (typeof showToast === 'function') showToast('Đã xóa bài báo thành công!');
      if (activeArticleId === id) {
        closeArticle();
      } else {
        renderNews();
      }
    }
  }

  // Export to window
  window.NewsApp = {
    init,
    openArticle,
    closeArticle,
    copyArticleLink,
    resetFilters,
    openComposer,
    closeComposer,
    switchTab: switchComposerTab,
    insertTag,
    insertImageTag,
    handleImageUpload,
    saveArticle,
    confirmDelete
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
