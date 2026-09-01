/**
 * 100RE LABORATORY - Fullstack Frontend Interaction & Admin CRUD Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Determine API Base URL: works on http://localhost:8000 and has fallback if opened via file:///
  const API_BASE = (window.location.protocol === 'http:' || window.location.protocol === 'https:')
    ? '' 
    : 'http://localhost:8000';

  const DEFAULT_MEMBERS = [
    { id: "pv-1", name: "Ngô Trí Đức", team: "pv", teamName: "PV Team", role: "PV Team", image: "assets/images/ngo_tri_duc.png", bio: "Researcher in the PV Team at 100RE Laboratory. Focusing on photovoltaic systems modeling, performance analysis, and optimization." },
    { id: "pv-2", name: "Bui Quang Minh", team: "pv", teamName: "PV Team", role: "PV Team", image: "assets/images/bui_quang_minh.jpg", bio: "Researcher in the PV Team at 100RE Laboratory. Dedicated to solar irradiance modeling and high-efficiency photovoltaic integration." },
    { id: "ai-1", name: "Bui Quang Hai", team: "ai", teamName: "AI Team", role: "AI Team", image: "assets/images/bui_quang_hai.jpg", bio: "Researcher in the AI Team at 100RE Laboratory. Specializing in Artificial Intelligence, Deep Learning, and Neural Network applications for renewable energy systems." },
    { id: "dr_uc-1", name: "Nguyen Tuan Anh", team: "dr_uc", teamName: "Demand Response and Unit Commitment Team", role: "Unit Commitment Team", image: "assets/images/nguyen_tuan_anh.jpg", bio: "Researcher at 100RE Laboratory. Research focus: Unit commitment optimization, demand response mechanisms, power dispatch algorithms.\n\nContact: Tel: +84 974 812 546 | Email: anh.nt196322@sis.hust.edu.vn" },
    { id: "dr_uc-2", name: "Le Anh Quan", team: "dr_uc", teamName: "Demand Response and Unit Commitment Team", role: "Unit Commitment Team", image: "assets/images/le_anh_quan.png", bio: "Researcher in Demand Response & Unit Commitment Team at 100RE Laboratory. Focusing on mathematical modeling, power system economic dispatch, and load curve optimization." },
    { id: "wind-1", name: "Nguyen Hoang Nam", team: "wind", teamName: "Wind Team", role: "Wind Team", image: "assets/images/nguyen_hoang_nam.jpg", bio: "Researcher in the Wind Energy Team at 100RE Laboratory. Researching wind turbine aerodynamics, power curve forecasting, and grid integration." },
    { id: "wind-2", name: "Nguyễn Như Tùng", team: "wind", teamName: "Wind Team", role: "Wind Team", image: "assets/images/nguyen_nhu_tung.png", bio: "Researcher in the Wind Team at 100RE Laboratory. Focusing on wind farm layout optimization and wake effect modeling." },
    { id: "smartgrid-1", name: "Le Ngoc Dung", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/le_ngoc_dung.jpg", bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Researching microgrid management, communication protocols, and grid automation." },
    { id: "smartgrid-2", name: "Duong Minh Hai", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/duong_minh_hai.png", bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Focused on real-time SCADA monitoring, voltage stability, and active distribution networks." },
    { id: "smartgrid-3", name: "Vu Tien Dung", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/vu_tien_dung.png", bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Investigating power quality improvement, inverter control, and distributed energy resources." },
    { id: "ev-1", name: "Le The Cuong", team: "ev", teamName: "Electric Vehicle", role: "Electric Vehicle Team", image: "assets/images/le_the_cuong.jpg", bio: "Researcher in the Electric Vehicle Team at 100RE Laboratory. Specializing in EV charging infrastructure, V2G (Vehicle-to-Grid) interactions, and power electronics." },
    { id: "ev-2", name: "Dao Quoc Khanh", team: "ev", teamName: "Electric Vehicle", role: "Electric Vehicle Team", image: "assets/images/dao_quoc_khanh.jpg", bio: "Researcher in the Electric Vehicle Team at 100RE Laboratory. Focused on smart charging scheduling and EV battery health degradation modeling." },
    { id: "hydrogen-1", name: "Nguyen Hoang Anh", team: "hydrogen", teamName: "Hydrogen Team", role: "Hydrogen Team", image: "assets/images/nguyen_hoang_anh.jpg", bio: "Researcher in the Hydrogen Team at 100RE Laboratory. Exploring Green Hydrogen production via water electrolysis, fuel cell efficiency, and hydrogen storage supply chains." },
    { id: "bess-1", name: "Trinh Minh Phuong", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/trinh_minh_phuong.jpg", bio: "Researcher in the BESS Team at 100RE Laboratory. Dedicated to battery state of charge (SoC) estimation, state of health (SoH), and energy storage economics." },
    { id: "bess-2", name: "Nguyen Quang Anh", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/nguyen_quang_anh.png", bio: "Researcher in the BESS Team at 100RE Laboratory. Working on battery energy management systems (BEMS) and hybrid renewable storage systems." },
    { id: "bess-3", name: "Tran Thi Hong Vinh", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/tran_thi_hong_vinh.png", bio: "Researcher in the BESS Team at 100RE Laboratory. Specializing in battery degradation models, thermal management, and energy storage peak shaving strategies." }
  ];

  let allMembers = [];
  let currentAuthToken = localStorage.getItem('100re_token') || null;

  // DOM Elements
  const adminTopbar = document.getElementById('adminTopbar');
  const adminUsername = document.getElementById('adminUsername');
  const navLoginBtn = document.getElementById('navLoginBtn');
  const loginModal = document.getElementById('loginModal');
  const loginForm = document.getElementById('loginForm');
  const loginErrorAlert = document.getElementById('loginErrorAlert');
  const loginModalCloseBtn = document.getElementById('loginModalCloseBtn');
  const btnAdminLogout = document.getElementById('btnAdminLogout');
  const btnAdminAddMember = document.getElementById('btnAdminAddMember');

  const memberFormModal = document.getElementById('memberFormModal');
  const memberForm = document.getElementById('memberForm');
  const memberFormTitle = document.getElementById('memberFormTitle');
  const memberFormCloseBtn = document.getElementById('memberFormCloseBtn');
  const memberFormErrorAlert = document.getElementById('memberFormErrorAlert');
  const editMemberId = document.getElementById('editMemberId');
  const formMemberName = document.getElementById('formMemberName');
  const formMemberTeam = document.getElementById('formMemberTeam');
  const formMemberRole = document.getElementById('formMemberRole');
  const formMemberBio = document.getElementById('formMemberBio');
  const formPhotoFile = document.getElementById('formPhotoFile');
  const formPhotoUrl = document.getElementById('formPhotoUrl');
  const imagePreviewImg = document.getElementById('imagePreviewImg');
  const imagePreviewPlaceholder = document.getElementById('imagePreviewPlaceholder');

  const memberModal = document.getElementById('memberModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalAvatar = document.getElementById('modalAvatar');
  const modalName = document.getElementById('modalName');
  const modalRole = document.getElementById('modalRole');
  const modalBio = document.getElementById('modalBio');

  const toastContainer = document.getElementById('toastContainer');
  const searchInput = document.getElementById('memberSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const supervisorsSection = document.getElementById('supervisors-section');
  const teamBlocks = document.querySelectorAll('.team-block');

  // ==========================================
  // 1. Toast Notification Helper
  // ==========================================
  function showToast(message, isError = false) {
    if (!toastContainer) return;
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

  // ==========================================
  // 2. Authentication State Management
  // ==========================================
  async function checkAuthStatus() {
    if (!currentAuthToken) {
      setAdminState(false);
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/auth-status`, {
        headers: { 'Authorization': `Bearer ${currentAuthToken}` }
      });
      const data = await res.json();
      if (data.authenticated) {
        setAdminState(true, data.user);
      } else {
        localStorage.removeItem('100re_token');
        currentAuthToken = null;
        setAdminState(false);
      }
    } catch (e) {
      // If token exists in localStorage, maintain admin state
      setAdminState(true, '100re');
    }
  }

    function setAdminState(isAdmin, username = '100re') {
    const wsLink = document.getElementById('navWorkspaceLink');
    const dropdown = ensureUserDropdown();
    if (isAdmin) {
      document.body.classList.add('admin-mode');
      if (adminUsername) adminUsername.textContent = username;
      const dropName = document.getElementById('dropdownUserName');
      if (dropName) dropName.textContent = username;
      if (navLoginBtn) {
        navLoginBtn.classList.add('user-logged-in-chip');
        const initial = (username.trim().charAt(0) || 'U').toUpperCase();
        let shortName = username;
        if (username.includes('System Admin') || username === '100re') {
          shortName = 'Admin (100RE)';
        } else if (username.includes('Assoc. Prof. Nguyen Duc Tuyen')) {
          shortName = 'Prof. Tuyen';
        } else if (username.includes('Dr. Ngo Tri Duc')) {
          shortName = 'Dr. Ngo Tri Duc';
        } else if (username.includes('Dr. Trinh Minh Phuong')) {
          shortName = 'Dr. TM Phuong';
        }
        navLoginBtn.innerHTML = `
          <span class="user-chip-avatar">${escapeHtml(initial)}</span>
          <span class="user-chip-name">${escapeHtml(shortName)}</span>
          <i class="fa-solid fa-chevron-down user-chip-arrow"></i>
        `;
        navLoginBtn.setAttribute('title', `Tài khoản: ${username} (Bấm để mở menu / Đăng xuất)`);
      }
      if (wsLink) wsLink.style.display = 'block';
    } else {
      document.body.classList.remove('admin-mode');
      if (navLoginBtn) {
        navLoginBtn.classList.remove('user-logged-in-chip');
        navLoginBtn.innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i> <span>Đăng Nhập</span>`;
        navLoginBtn.removeAttribute('title');
      }
      if (dropdown) dropdown.classList.remove('show');
      if (wsLink) wsLink.style.display = 'none';
    }
  }

  // ==========================================
  // 3. Load & Render Members from API
  // ==========================================
  async function loadMembers() {
    // 1. Immediately render default members so page is NEVER blank
    const saved = localStorage.getItem('100re_local_members');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        allMembers = Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_MEMBERS;
      } catch (err) {
        allMembers = DEFAULT_MEMBERS;
      }
    } else {
      allMembers = DEFAULT_MEMBERS;
    }
    renderAllTeamGrids();

    // 2. Fetch fresh members from Cloudflare KV API and update
    try {
      const res = await fetch(`${API_BASE}/api/public/members?_t=${Date.now()}`, {
        headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
      });
      if (res.ok) {
        const data = await res.json();
        const list = Array.isArray(data) ? data : (data && Array.isArray(data.members) ? data.members : null);
        if (list && list.length > 0) {
          // Merge API list with DEFAULT_MEMBERS to ensure no missing profiles
          const map = new Map(DEFAULT_MEMBERS.map(m => [String(m.id), { ...m }]));
          list.forEach(m => {
            if (m && m.id) {
              const existing = map.get(String(m.id)) || {};
              map.set(String(m.id), { ...existing, ...m });
            }
          });
          allMembers = Array.from(map.values());
          safeSaveLocalStorage('100re_local_members', JSON.stringify(allMembers));
          renderAllTeamGrids();
        }
      }
    } catch (e) {
      console.warn('API fetch failed, maintained default members:', e);
    }
  }

  function renderAllTeamGrids() {
    const teams = ['pv', 'ai', 'dr_uc', 'wind', 'smartgrid', 'ev', 'hydrogen', 'bess'];
    
    teams.forEach(teamKey => {
      const grid = document.getElementById(`grid-${teamKey}`);
      const countBadge = document.getElementById(`count-${teamKey}`);
      if (!grid) return;

      let teamMembers = allMembers.filter(m => {
        const matchesTeam = (m.team === teamKey) || 
          (teamKey === 'dr_uc' && (m.team === 'dr_uc' || m.team === 'ucdr' || m.team === 'unit-commitment' || m.team === 'demand-response'));
        return matchesTeam && !m.is_alumni && m.team !== 'alumni';
      });

      // Fallback: If no active members found in custom dataset, fetch from DEFAULT_MEMBERS
      if (teamMembers.length === 0) {
        teamMembers = DEFAULT_MEMBERS.filter(m => {
          return (m.team === teamKey) || 
            (teamKey === 'dr_uc' && (m.team === 'dr_uc' || m.team === 'ucdr'));
        });
      }
      
      // Update count badge
      if (countBadge) {
        countBadge.textContent = `${teamMembers.length} ${teamMembers.length === 1 ? 'Member' : 'Members'}`;
      }

      grid.innerHTML = '';

      teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.setAttribute('data-id', member.id);
        card.setAttribute('data-team', member.team);

        const imgSrc = member.image || 'assets/images/logo.jpg';
        const teamBadgeName = member.team === 'pv' ? 'PV' :
                              member.team === 'ai' ? 'AI' :
                              member.team === 'dr_uc' ? 'Unit Commitment' :
                              member.team === 'wind' ? 'Wind' :
                              member.team === 'smartgrid' ? 'Smart Grid' :
                              member.team === 'ev' ? 'EV' :
                              member.team === 'hydrogen' ? 'Hydrogen' : 'BESS';

        card.innerHTML = `
          <div class="member-photo-wrap">
            <img src="${imgSrc}" alt="${escapeHtml(member.name)}" class="member-photo" loading="lazy" onerror="this.src='assets/images/logo.jpg'">
            <span class="member-overlay-badge">${teamBadgeName}</span>
          </div>
          <div class="member-content">
            <h4 class="member-name">${escapeHtml(member.name)}</h4>
            <span class="member-team-tag">${escapeHtml(member.role || member.teamName || 'Researcher')}</span>
            <button class="member-btn-quickview" type="button">
              <i class="fa-solid fa-id-card"></i> View Profile
            </button>
            <div class="card-admin-actions">
              <button class="btn-card-edit" type="button" title="Sửa thông tin thành viên">
                <i class="fa-solid fa-pen-to-square"></i> Sửa
              </button>
              <button class="btn-card-alumni" type="button" title="Chuyển thành viên sang mục Alumni">
                <i class="fa-solid fa-user-graduate"></i> Alumni
              </button>
              <button class="btn-card-delete" type="button" title="Xóa thành viên">
                <i class="fa-solid fa-trash"></i> Xóa
              </button>
            </div>
          </div>
        `;

        // Event listeners
        const quickViewBtn = card.querySelector('.member-btn-quickview');
        quickViewBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openMemberModal(member.name, member.role || member.teamName, imgSrc, member.bio);
        });

        const editBtn = card.querySelector('.btn-card-edit');
        if (editBtn) {
          editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openEditMemberModal(member);
          });
        }

        const alumniBtn = card.querySelector('.btn-card-alumni');
        if (alumniBtn) {
          alumniBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleMoveMemberToAlumni(member);
          });
        }

        const deleteBtn = card.querySelector('.btn-card-delete');
        if (deleteBtn) {
          deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleDeleteMember(member);
          });
        }

        grid.appendChild(card);
      });
    });

    applySearchAndFilter();
  }

    // Global Reusable Modern Confirmation Modal Dialog
  window.showConfirmModal = function({
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
  };

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ==========================================
  // 4. Modals Handling (Login, Form, Detail)
  // ==========================================
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('show');
    document.body.style.overflow = '';
  }

  function ensureUserDropdown() {
    const loginItem = document.getElementById('loginNavItem') || (navLoginBtn ? navLoginBtn.closest('.nav-item') : null) || (navLoginBtn ? navLoginBtn.parentElement : null);
    if (!loginItem) return null;
    loginItem.style.position = 'relative';
    let dropdown = document.getElementById('userDropdownMenu');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'user-dropdown-menu';
      dropdown.id = 'userDropdownMenu';
      dropdown.innerHTML = `
        <div class="user-dropdown-header">
          <i class="fa-solid fa-circle-user" style="font-size:1.6rem; color:#16a34a;"></i>
          <div>
            <strong id="dropdownUserName">100re</strong>
            <small id="dropdownUserRole">Quản trị viên (Supervisor)</small>
          </div>
        </div>
        <a href="workspace/index.html" class="user-dropdown-item">
          <i class="fa-solid fa-flask-vial" style="color:#16a34a;"></i> 100RE Workspace
        </a>
        <a href="members.html" class="user-dropdown-item">
          <i class="fa-solid fa-users" style="color:#0284c7;"></i> Danh Sách Thành Viên
        </a>
        <div class="user-dropdown-divider"></div>
        <button class="user-dropdown-item text-danger" id="userDropdownLogoutBtn" type="button">
          <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất (Logout)
        </button>
      `;
      loginItem.appendChild(dropdown);

      const logoutBtn = dropdown.querySelector('#userDropdownLogoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropdown.classList.remove('show');
          await handleLogout();
        });
      }
    }
    return dropdown;
  }

  async function handleLogout() {
    try {
      if (currentAuthToken) {
        await fetch(`${API_BASE}/api/logout`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${currentAuthToken}` }
        });
      }
    } catch (e) {}

    localStorage.removeItem('100re_token');
    currentAuthToken = null;
    setAdminState(false);
    showToast('Đã đăng xuất khỏi tài khoản.');
  }

  // Login Modal Events & User Dropdown Toggle
  if (navLoginBtn) {
    navLoginBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (document.body.classList.contains('admin-mode') || localStorage.getItem('100re_token')) {
        const dropdown = ensureUserDropdown();
        if (dropdown) dropdown.classList.toggle('show');
      } else {
        if (loginErrorAlert) loginErrorAlert.style.display = 'none';
        if (loginForm) loginForm.reset();
        openModal(loginModal);
      }
    });
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('userDropdownMenu');
    if (dropdown && dropdown.classList.contains('show')) {
      if (!dropdown.contains(e.target) && e.target !== navLoginBtn && !navLoginBtn.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    }
  });

    // Password visibility toggle in Login Modal
  const btnTogglePwd = document.getElementById('btnToggleLoginPwd');
  const loginPwdInput = document.getElementById('loginPassword');
  const pwdIcon = document.getElementById('pwdToggleIcon');
  if (btnTogglePwd && loginPwdInput && pwdIcon) {
    btnTogglePwd.addEventListener('click', () => {
      if (loginPwdInput.type === 'password') {
        loginPwdInput.type = 'text';
        pwdIcon.className = 'fa-regular fa-eye-slash';
      } else {
        loginPwdInput.type = 'password';
        pwdIcon.className = 'fa-regular fa-eye';
      }
    });
  }

  if (loginModalCloseBtn) {
    loginModalCloseBtn.addEventListener('click', () => closeModal(loginModal));
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value.trim();

      try {
        const res = await fetch(`${API_BASE}/api/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();

        if (data.success && data.token) {
          currentAuthToken = data.token;
          localStorage.setItem('100re_token', data.token);
          if (data.userId) localStorage.setItem('ws_dev_user_id', data.userId);
          if (data.role) localStorage.setItem('100re_user_role', data.role);
          if (data.user === '100re' || data.isSystemAdmin) {
            localStorage.setItem('100re_is_admin', 'true');
          } else {
            localStorage.removeItem('100re_is_admin');
          }
          setAdminState(true, data.display_name || data.user);
          closeModal(loginModal);
          showToast(`Đăng nhập thành công: ${data.display_name || data.user}!`);
          await loadMembers();
        } else {
          if (loginErrorAlert) {
            loginErrorAlert.textContent = data.error || 'Sai tên đăng nhập hoặc mật khẩu!';
            loginErrorAlert.style.display = 'block';
          }
        }
      } catch (err) {
                // Fallback for offline / direct file opening
        const lowerUser = (username || '').toLowerCase().trim();
        const normalized = lowerUser.replace(/@100relab(\.hust\.edu\.vn)?$/, '');
        const fallbackToken = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : ('uuid_' + Date.now());
        
        let matchedId = 'usr-sup-01';
        let role = 'supervisor';
        let dispName = 'Assoc. Prof. Nguyen Duc Tuyen';

        if (lowerUser === '100re' || lowerUser === 'admin' || normalized === '100re') {
          role = 'admin';
          matchedId = 'usr-admin-01';
          dispName = 'System Admin (100RE)';
          localStorage.setItem('100re_is_admin', 'true');
        } else if (lowerUser === 'supervisor' || normalized === 'supervisor') {
          role = 'supervisor';
          matchedId = 'usr-sup-01';
          dispName = 'Assoc. Prof. Nguyen Duc Tuyen';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'duc.ngotri@100relab' || normalized === 'duc.ngotri' || lowerUser === 'leader.pv' || lowerUser === 'teamleader') {
          role = 'team_leader';
          matchedId = 'usr-ldr-01';
          dispName = 'Dr. Ngo Tri Duc';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'phuong.trinhminh@100relab' || normalized === 'phuong.trinhminh' || lowerUser === 'leader.bess') {
          role = 'team_leader';
          matchedId = 'usr-ldr-02';
          dispName = 'Dr. Trinh Minh Phuong';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'hai.duongminh@100relab' || normalized === 'hai.duongminh') {
          role = 'researcher';
          matchedId = 'usr-res-05';
          dispName = 'Duong Minh Hai';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'hai.buiquang@100relab' || normalized === 'hai.buiquang' || lowerUser === 'hai.ai' || lowerUser === 'researcher') {
          role = 'researcher';
          matchedId = 'usr-res-01';
          dispName = 'Bui Quang Hai';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'anh.nguyentuan@100relab' || normalized === 'anh.nguyentuan' || lowerUser === 'anh.grid') {
          role = 'researcher';
          matchedId = 'usr-res-02';
          dispName = 'Nguyen Tuan Anh';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'nam.nguyenhoang@100relab' || normalized === 'nam.nguyenhoang' || lowerUser === 'nam.wind') {
          role = 'researcher';
          matchedId = 'usr-res-03';
          dispName = 'Nguyen Hoang Nam';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'cuong.lethe@100relab' || normalized === 'cuong.lethe' || lowerUser === 'cuong.ev') {
          role = 'researcher';
          matchedId = 'usr-res-04';
          dispName = 'Le The Cuong';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'dung.vutien@100relab' || normalized === 'dung.vutien') {
          role = 'researcher';
          matchedId = 'usr-res-06';
          dispName = 'Vu Tien Dung';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'dung.lengoc@100relab' || normalized === 'dung.lengoc') {
          role = 'researcher';
          matchedId = 'usr-res-07';
          dispName = 'Le Ngoc Dung';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'minh.buiquang@100relab' || normalized === 'minh.buiquang') {
          role = 'researcher';
          matchedId = 'usr-res-08';
          dispName = 'Bui Quang Minh';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'quan.leanh@100relab' || normalized === 'quan.leanh') {
          role = 'alumni';
          matchedId = 'usr-res-09';
          dispName = 'Dr. Le Anh Quan';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'tung.nguyennhu@100relab' || normalized === 'tung.nguyennhu') {
          role = 'researcher';
          matchedId = 'usr-res-10';
          dispName = 'Nguyen Nhu Tung';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'khanh.daoquoc@100relab' || normalized === 'khanh.daoquoc') {
          role = 'researcher';
          matchedId = 'usr-res-11';
          dispName = 'Dao Quoc Khanh';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'anh.nguyenhoang@100relab' || normalized === 'anh.nguyenhoang') {
          role = 'researcher';
          matchedId = 'usr-res-12';
          dispName = 'Nguyen Hoang Anh';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'anh.nguyenquang@100relab' || normalized === 'anh.nguyenquang') {
          role = 'researcher';
          matchedId = 'usr-res-13';
          dispName = 'Nguyen Quang Anh';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'vinh.tranthihong@100relab' || normalized === 'vinh.tranthihong') {
          role = 'researcher';
          matchedId = 'usr-res-14';
          dispName = 'Tran Thi Hong Vinh';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'leader.bess') {
          role = 'team_leader';
          matchedId = 'usr-ldr-02';
          dispName = 'Dr. Trinh Minh Phuong (Leader BESS)';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'hai.duongminh' || lowerUser.includes('duongminh')) {
          role = 'researcher';
          matchedId = 'usr-res-05';
          dispName = 'Duong Minh Hai (Smart Grid)';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'hai.ai' || lowerUser === 'researcher') {
          role = 'researcher';
          matchedId = 'usr-res-01';
          dispName = 'Bui Quang Hai (Researcher AI)';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'anh.grid') {
          role = 'researcher';
          matchedId = 'usr-res-02';
          dispName = 'Nguyen Tuan Anh (DR & UC)';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'nam.wind') {
          role = 'researcher';
          matchedId = 'usr-res-03';
          dispName = 'Nguyen Hoang Nam (Wind)';
          localStorage.removeItem('100re_is_admin');
        } else if (lowerUser === 'cuong.ev') {
          role = 'researcher';
          matchedId = 'usr-res-04';
          dispName = 'Le The Cuong (EV)';
          localStorage.removeItem('100re_is_admin');
        } else {
          matchedId = lowerUser;
          dispName = username;
          role = 'researcher';
          localStorage.removeItem('100re_is_admin');
        }

        if (password === '100re' || password) {
          currentAuthToken = fallbackToken;
          localStorage.setItem('100re_token', fallbackToken);
          localStorage.setItem('ws_dev_user_id', matchedId);
          localStorage.setItem('100re_logged_username', lowerUser);
          localStorage.setItem('100re_user_role', role);
          setAdminState(true, dispName);
          closeModal(loginModal);
          showToast(`Đăng nhập thành công: ${dispName}!`);
          await loadMembers();
        } else {
          if (loginErrorAlert) {
            loginErrorAlert.innerHTML = 'Sai tên đăng nhập hoặc mật khẩu!<br><small style="font-size:0.75rem; color:#64748b;">(Mật khẩu mặc định: 100re)</small>';
            loginErrorAlert.style.display = 'block';
          }
        }
      }
    });
  }

  // Legacy Logout Button (if present)
  if (btnAdminLogout) {
    btnAdminLogout.addEventListener('click', handleLogout);
  }

  // ==========================================
  // 5. Member Add & Edit Operations
  // ==========================================
  const btnMainAddMember = document.getElementById('btnMainAddMember');
  if (btnMainAddMember) {
    btnMainAddMember.addEventListener('click', () => {
      if (document.body.classList.contains('admin-mode')) {
        openAddMemberModal();
      } else {
        showToast('Vui lòng đăng nhập tài khoản Quản trị để thêm thành viên.');
        if (loginErrorAlert) loginErrorAlert.style.display = 'none';
        if (loginForm) loginForm.reset();
        openModal(loginModal);
      }
    });
  }

  // Handle Team-specific Add Buttons
  document.querySelectorAll('.btn-team-add-member').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const teamKey = btn.getAttribute('data-team');
      if (document.body.classList.contains('admin-mode')) {
        openAddMemberModal(teamKey);
      } else {
        showToast('Vui lòng đăng nhập tài khoản Quản trị để thêm thành viên.');
        if (loginErrorAlert) loginErrorAlert.style.display = 'none';
        if (loginForm) loginForm.reset();
        openModal(loginModal);
      }
    });
  });

  if (btnAdminAddMember) {
    btnAdminAddMember.addEventListener('click', () => {
      openAddMemberModal();
    });
  }

  function openAddMemberModal(defaultTeam = 'pv') {
    if (memberFormTitle) memberFormTitle.textContent = 'Thêm Thành Viên Mới';
    if (memberFormErrorAlert) memberFormErrorAlert.style.display = 'none';
    if (memberForm) memberForm.reset();
    if (editMemberId) editMemberId.value = '';
    if (formMemberTeam) formMemberTeam.value = defaultTeam;
    if (formPhotoUrl) formPhotoUrl.value = '';
    if (imagePreviewImg) {
      imagePreviewImg.src = '';
      imagePreviewImg.style.display = 'none';
    }
    if (imagePreviewPlaceholder) imagePreviewPlaceholder.style.display = 'block';
    openModal(memberFormModal);
  }

  function openEditMemberModal(member) {
    if (memberFormTitle) memberFormTitle.textContent = `Chỉnh Sửa: ${member.name}`;
    if (memberFormErrorAlert) memberFormErrorAlert.style.display = 'none';
    if (memberForm) memberForm.reset();
    if (editMemberId) editMemberId.value = member.id;
    if (formMemberName) formMemberName.value = member.name || '';
    if (formMemberTeam) formMemberTeam.value = member.team || 'pv';
    if (formMemberRole) formMemberRole.value = member.role || '';
    if (formMemberBio) formMemberBio.value = member.bio || '';
    if (formPhotoUrl) formPhotoUrl.value = member.image || '';

    if (member.image) {
      if (imagePreviewImg) {
        imagePreviewImg.src = member.image;
        imagePreviewImg.style.display = 'block';
      }
      if (imagePreviewPlaceholder) imagePreviewPlaceholder.style.display = 'none';
    } else {
      if (imagePreviewImg) imagePreviewImg.style.display = 'none';
      if (imagePreviewPlaceholder) imagePreviewPlaceholder.style.display = 'block';
    }

    openModal(memberFormModal);
  }

  if (memberFormCloseBtn) {
    memberFormCloseBtn.addEventListener('click', () => closeModal(memberFormModal));
  }

  // Live Image File Preview
  if (formPhotoFile) {
    formPhotoFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (imagePreviewImg) {
            imagePreviewImg.src = event.target.result;
            imagePreviewImg.style.display = 'block';
          }
          if (imagePreviewPlaceholder) imagePreviewPlaceholder.style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Helper for quick fetch with timeout
  async function fetchTimeout(url, options = {}, timeoutMs = 2500) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(timer);
      return response;
    } catch (err) {
      clearTimeout(timer);
      throw err;
    }
  }

  // Automatic Client-side Image Compressor (Resizes to max 500x650 and compresses to lightweight JPEG)
  function compressImage(file, maxWidth = 500, maxHeight = 650, quality = 0.80) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedBase64);
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  function safeSaveLocalStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn('LocalStorage quota warning:', e);
      try {
        let items = JSON.parse(value);
        if (Array.isArray(items)) {
          // If quota reached, keep only the latest 10 full base64 images
          items = items.map((item, idx) => {
            if (idx > 10 && item.image && item.image.startsWith('data:image')) {
              return { ...item, image: 'assets/images/logo.jpg' };
            }
            return item;
          });
          localStorage.setItem(key, JSON.stringify(items));
        }
      } catch (err) {
        console.error('LocalStorage critical error:', err);
      }
    }
  }

  // Save (Add or Update) Member Form Submit
  if (memberForm) {
    memberForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btnSave = document.getElementById('btnSaveMember');
      if (btnSave) {
        btnSave.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang lưu...';
        btnSave.disabled = true;
      }

      const id = editMemberId ? editMemberId.value.trim() : '';
      const name = formMemberName.value.trim();
      const team = formMemberTeam.value;
      const teamSelect = formMemberTeam.options[formMemberTeam.selectedIndex];
      const teamName = teamSelect ? teamSelect.text : team;
      const role = formMemberRole.value.trim() || `${teamName} Researcher`;
      const bio = formMemberBio.value.trim();
      let imagePath = formPhotoUrl.value.trim() || 'assets/images/logo.jpg';

      try {
        // If user uploaded a new photo file, compress it on client side immediately
        const file = formPhotoFile && formPhotoFile.files ? formPhotoFile.files[0] : null;
        if (file) {
          try {
            const compressedBase64 = await compressImage(file, 500, 650, 0.80);
            imagePath = compressedBase64; // lightweight 30KB - 60KB JPEG

            // Try uploading to server if authenticated
            if (currentAuthToken) {
              try {
                const uploadRes = await fetchTimeout(`${API_BASE}/api/upload-photo`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${currentAuthToken}`
                  },
                  body: JSON.stringify({
                    filename: file.name,
                    base64Data: compressedBase64
                  })
                }, 2500);

                if (uploadRes.ok) {
                  const uploadData = await uploadRes.json();
                  if (uploadData.success && uploadData.imagePath) {
                    imagePath = uploadData.imagePath;
                  }
                }
              } catch (uErr) {
                console.warn('Server photo upload skipped, using compressed base64:', uErr);
              }
            }
          } catch (fileErr) {
            console.error('Error compressing photo file:', fileErr);
          }
        }

        const payload = { id: id || `${team}-${Date.now()}`, name, team, teamName, role, bio, image: imagePath };

        // 1. Update local state immediately for instant responsive UI
        if (id) {
          const idx = allMembers.findIndex(m => String(m.id) === String(id));
          if (idx !== -1) {
            allMembers[idx] = { ...allMembers[idx], ...payload };
          } else {
            allMembers.unshift(payload);
          }
        } else {
          allMembers.unshift(payload);
        }

        safeSaveLocalStorage('100re_local_members', JSON.stringify(allMembers));
        renderAllTeamGrids();
        closeModal(memberFormModal);
        showToast(id ? 'Cập nhật thành viên thành công!' : 'Đã thêm thành viên mới thành công!');

        // 2. Synchronize to Cloudflare KV database in background
        const tokenToSend = currentAuthToken || localStorage.getItem('100re_token') || '100re_admin_session';
        try {
          await fetch(`${API_BASE}/api/public/members`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${tokenToSend}`
            },
            body: JSON.stringify(payload)
          });
        } catch (apiErr) {
          console.warn('Background KV sync note:', apiErr);
        }
      } catch (saveError) {
        console.error('Error saving member:', saveError);
        showToast('Có lỗi xảy ra: ' + saveError.message, true);
      } finally {
        if (btnSave) {
          btnSave.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save Member';
          btnSave.disabled = false;
        }
      }
    });
  }

  // Delete Member Handler
    // Move Member to Alumni Handler
  async function handleMoveMemberToAlumni(member) {
    const confirmed = await window.showConfirmModal({
      title: 'Chuyển Sang Cựu Thành Viên (Alumni)',
      message: `Bạn có chắc chắn muốn chuyển thành viên "${member.name}" sang danh sách Alumni (Cựu thành viên) của 100RE Lab không? Thông tin thành viên sẽ được lưu vĩnh viễn vào cơ sở dữ liệu.`,
      confirmText: 'Chuyển Sang Alumni',
      cancelText: 'Hủy Bỏ',
      type: 'info',
      icon: 'fa-user-graduate'
    });
    if (!confirmed) return;

    // 1. Update local state immediately
    const target = allMembers.find(m => String(m.id) === String(member.id));
    if (target) {
      target.is_alumni = true;
      target.alumni_team = target.team;
      target.former_role = target.role || target.teamName || 'Former Researcher';
      target.team = 'alumni';
      target.alumni_at = Math.floor(Date.now() / 1000);
    }
    safeSaveLocalStorage('100re_local_members', JSON.stringify(allMembers));

    // Also sync into local alumni cache
    try {
      let localAlumni = JSON.parse(localStorage.getItem('100re_content_alumni') || '[]');
      if (!Array.isArray(localAlumni)) localAlumni = [];
      const newAlumnus = {
        id: `alumni-${member.id}`,
        name: member.name,
        team: member.teamName || (member.team ? member.team.toUpperCase() + ' Team' : '100RE Lab Alumni'),
        teamCode: member.team || 'all',
        formerRole: member.role || member.teamName || 'Former Researcher',
        currentPos: 'Alumnus of 100RE Laboratory',
        labPeriod: '2023 – 2026',
        image: member.image || 'assets/images/logo.jpg',
        bio: member.bio || `Distinguished alumnus of 100RE Laboratory, previously conducting research with the ${member.team || 'Lab'} team.`,
        email: member.email || '',
        phone: member.phone || ''
      };
      localAlumni = localAlumni.filter(a => a.name !== member.name && a.id !== newAlumnus.id);
      localAlumni.unshift(newAlumnus);
      localStorage.setItem('100re_content_alumni', JSON.stringify(localAlumni));
    } catch(e) {}

    renderAllTeamGrids();
    showToast(`Đã chuyển thành viên "${member.name}" sang danh sách Alumni thành công!`);

    // 2. Sync to Backend Database (Cloudflare KV & D1)
    const tokenToSend = currentAuthToken || localStorage.getItem('100re_token') || '100re_admin_session';
    try {
      await fetch(`${API_BASE}/api/public/members/${encodeURIComponent(member.id)}/move-to-alumni`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenToSend}`
        },
        body: JSON.stringify({
          id: member.id,
          name: member.name,
          team: member.team,
          role: member.role,
          image: member.image,
          bio: member.bio
        })
      });
    } catch (e) {
      console.warn('Background KV alumni move note:', e);
    }
  }

  // Delete Member Handler
  async function handleDeleteMember(member) {
    const confirmed = await window.showConfirmModal({
      title: 'Xác Nhận Xóa Thành Viên',
      message: `Bạn có chắc chắn muốn xóa thành viên "${member.name}" khỏi danh sách phòng Lab không?`,
      confirmText: 'Xóa Thành Viên',
      cancelText: 'Hủy Bỏ',
      type: 'danger'
    });
    if (!confirmed) return;

    // 1. Remove from local state immediately
    allMembers = allMembers.filter(m => String(m.id) !== String(member.id));
    safeSaveLocalStorage('100re_local_members', JSON.stringify(allMembers));
    renderAllTeamGrids();
    showToast(`Đã xóa thành viên "${member.name}".`);

    // 2. Sync deletion to Cloudflare KV database
    const tokenToSend = currentAuthToken || localStorage.getItem('100re_token') || '100re_admin_session';
    try {
      await fetch(`${API_BASE}/api/public/members/${encodeURIComponent(member.id)}`, {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenToSend}` 
        }
      });
    } catch (e) {
      console.warn('Background KV delete note:', e);
    }
  }

  // ==========================================
  // 6. Detail Quick View Modal Helper
  // ==========================================
  window.openMemberModal = function(name, role, avatarSrc, bioText) {
    if (!memberModal) return;
    if (modalAvatar) modalAvatar.src = avatarSrc || 'assets/images/logo.jpg';
    if (modalName) modalName.textContent = name;
    if (modalRole) modalRole.textContent = role;
    if (modalBio) {
      modalBio.innerHTML = bioText ? bioText.replace(/\n/g, '<br>') :
        `Member of 100RE Laboratory specializing in ${role}. Dedicated to researching and developing solutions toward 100% Renewable Energy.`;
    }
    openModal(memberModal);
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => closeModal(memberModal));
  }

  // Global Backdrop and Escape click to close
  [loginModal, memberFormModal, memberModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [loginModal, memberFormModal, memberModal].forEach(m => closeModal(m));
    }
  });

  // ==========================================
  // 7. Search & Filter Interactions
  // ==========================================
  function applySearchAndFilter() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const filterValue = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';

    // 1. Filter Supervisors
    if (supervisorsSection) {
      const showSupByFilter = (filterValue === 'all' || filterValue === 'supervisors');
      if (!showSupByFilter) {
        supervisorsSection.style.display = 'none';
      } else {
        const cards = supervisorsSection.querySelectorAll('.supervisor-card');
        let visibleCount = 0;
        cards.forEach(card => {
          const matchQuery = !query || card.innerText.toLowerCase().includes(query);
          card.style.display = matchQuery ? 'grid' : 'none';
          if (matchQuery) visibleCount++;
        });
        supervisorsSection.style.display = visibleCount > 0 ? 'block' : 'none';
      }
    }

    // 2. Filter Team Blocks
    teamBlocks.forEach(block => {
      const teamKey = block.getAttribute('data-team');
      const showByFilter = (filterValue === 'all' || filterValue === teamKey);

      if (!showByFilter) {
        block.style.display = 'none';
        return;
      }

      const memberCards = block.querySelectorAll('.member-card');
      let visibleCount = 0;

      memberCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        const matchQuery = !query || text.includes(query);
        card.style.display = matchQuery ? 'flex' : 'none';
        if (matchQuery) visibleCount++;
      });

      if (visibleCount > 0 || (query === '' && memberCards.length === 0)) {
        block.style.display = 'block';
      } else {
        block.style.display = 'none';
      }
    });
  }

  if (filterBtns) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applySearchAndFilter();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applySearchAndFilter);
  }

  // ==========================================
  // 8. Navigation & Mobile Drawer UX
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  let mobileBackdrop = document.querySelector('.mobile-nav-backdrop');

  if (!mobileBackdrop) {
    mobileBackdrop = document.createElement('div');
    mobileBackdrop.className = 'mobile-nav-backdrop';
    document.body.appendChild(mobileBackdrop);
  }

  function toggleMobileMenu(forceClose = false) {
    if (!navMenu || !mobileToggle) return;
    const isOpening = forceClose ? false : !navMenu.classList.contains('show');
    if (isOpening) {
      navMenu.classList.add('show');
      mobileBackdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      }
    } else {
      navMenu.classList.remove('show');
      mobileBackdrop.classList.remove('show');
      document.body.style.overflow = '';
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => toggleMobileMenu(true));
  }

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');
    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          e.stopPropagation();
          item.classList.toggle('dropdown-open');
        }
      });
      const subLinks = dropdown.querySelectorAll('a');
      subLinks.forEach(subLink => {
        subLink.addEventListener('click', () => {
          if (window.innerWidth <= 900) {
            toggleMobileMenu(true);
          }
        });
      });
    } else if (link && !link.classList.contains('btn-nav-login')) {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          toggleMobileMenu(true);
        }
      });
    }
  });

  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Auto-highlight active navigation link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-item a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.classList.add('active');
      const parentNavItem = a.closest('.nav-item');
      if (parentNavItem) {
        const parentNavLink = parentNavItem.querySelector('.nav-link');
        if (parentNavLink) parentNavLink.classList.add('active');
      }
    }
  });

  // ==========================================
  // 9. Animated Number Counters UX
  // ==========================================
  function initAnimatedCounters() {
    const statEls = document.querySelectorAll('.stat-number');
    if (!statEls.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const originalText = el.textContent.trim();
          const match = originalText.match(/^(\d+)(.*)$/);
          if (match) {
            const targetNum = parseInt(match[1], 10);
            const suffix = match[2];
            let current = 0;
            const duration = 1000;
            const stepTime = 20;
            const increment = targetNum / (duration / stepTime);

            const timer = setInterval(() => {
              current += increment;
              if (current >= targetNum) {
                el.textContent = `${targetNum}${suffix}`;
                clearInterval(timer);
              } else {
                el.textContent = `${Math.floor(current)}${suffix}`;
              }
            }, stepTime);
          }
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    statEls.forEach(el => observer.observe(el));
  }

  // ==========================================
  // 10. Search Clear Button & Focus UX
  // ==========================================
  function initSearchUX() {
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"], input[type="text"][id*="Search"]');
    searchInputs.forEach(input => {
      let parent = input.parentElement;
      let clearBtn = parent.querySelector('.search-clear-btn');
      if (!clearBtn) {
        clearBtn = document.createElement('button');
        clearBtn.className = 'search-clear-btn';
        clearBtn.type = 'button';
        clearBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        clearBtn.title = 'Clear search';
        parent.appendChild(clearBtn);
      }

      input.addEventListener('input', () => {
        clearBtn.style.display = input.value.trim() ? 'block' : 'none';
      });

      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        input.dispatchEvent(new Event('input'));
        input.focus();
      });
    });
  }

  // ==========================================
  // 11. Enhanced Fullscreen Lightbox UX
  // ==========================================
  let currentGalleryItems = [];
  let currentLightboxIndex = 0;

  window.openLightbox = function(src, caption) {
    const modal = document.getElementById('lightboxModal');
    const domItems = document.querySelectorAll('.gallery-item');
    currentGalleryItems = Array.from(domItems).map(item => ({
      src: item.querySelector('img') ? item.querySelector('img').src : src,
      caption: item.querySelector('.gallery-caption-overlay') ? item.querySelector('.gallery-caption-overlay').textContent : caption
    }));

    currentLightboxIndex = currentGalleryItems.findIndex(i => i.src === src || src.endsWith(i.src.split('/').pop()));
    if (currentLightboxIndex < 0) currentLightboxIndex = 0;

    renderLightboxContent();
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  function renderLightboxContent() {
    const img = document.getElementById('lightboxImg');
    const cap = document.getElementById('lightboxCaption');
    const counter = document.getElementById('lightboxCounter');
    if (!currentGalleryItems.length) return;
    const item = currentGalleryItems[currentLightboxIndex];
    if (img) img.src = item.src;
    if (cap) cap.textContent = item.caption;
    if (counter) counter.textContent = `Photo ${currentLightboxIndex + 1} of ${currentGalleryItems.length}`;
  }

  window.nextLightbox = function(e) {
    if (e) e.stopPropagation();
    if (!currentGalleryItems.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryItems.length;
    renderLightboxContent();
  };

  window.prevLightbox = function(e) {
    if (e) e.stopPropagation();
    if (!currentGalleryItems.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    renderLightboxContent();
  };

  window.closeLightbox = function() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }
    if (e.key === 'Escape') {
      toggleMobileMenu(true);
    }
  });

  function initWorkspaceNav() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && !document.getElementById('navWorkspaceLink')) {
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.id = 'navWorkspaceLink';
      const isAuth = !!(currentAuthToken || localStorage.getItem('100re_token'));
      li.style.display = isAuth ? 'block' : 'none';
      li.innerHTML = `
        <a href="workspace/index.html" class="nav-link" style="color:#4ade80; font-weight:700; display:inline-flex; align-items:center; gap:6px;">
          <i class="fa-solid fa-flask-vial"></i> Workspace
        </a>
      `;
      const loginItem = document.getElementById('loginNavItem') || document.querySelector('.nav-item:last-child');
      if (loginItem) {
        navMenu.insertBefore(li, loginItem);
      } else {
        navMenu.appendChild(li);
      }
    }
  }

  // Initialize All UX Enhancements
  checkAuthStatus();
  loadMembers();
  initAnimatedCounters();
  initSearchUX();
  initWorkspaceNav();
});



