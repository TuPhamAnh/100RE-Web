/**
 * 100RE LAB WORKSPACE — Notion-Style Team Workspace & Task Database
 * Features:
 * - Dynamic Team Workspace naming (e.g. Smart Grid Tasks, PV Tasks)
 * - Strict Team Isolation: Members only see their own team's tasks
 * - Supervisor / Admin Team Switcher: Full access to inspect any team or all teams
 * - General Tasks Tab (Nhiệm vụ chung): Only visible to individuals assigned to that task
 * - Notion Table & Board View with SciNote ELN integration
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatDate, escapeHtml, renderEmptyState, showToast } from '../components.js';

export async function renderTasks(container, initialFilter = null) {
  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';
  const currentUser = Auth.getUser();
  const isSuper = Auth.isSupervisor() || Auth.isAdmin();

  // User's primary research team
  let userPrimaryTeam = 'team-smartgrid';
  if (currentUser && Array.isArray(currentUser.teams) && currentUser.teams.length > 0) {
    const rawT = currentUser.teams[0];
    userPrimaryTeam = typeof rawT === 'string' ? rawT : (rawT.team_id || rawT.id || 'team-smartgrid');
  } else if (currentUser && currentUser.team) {
    userPrimaryTeam = currentUser.team;
  }

  // Active Tab state: 'team' | 'general' | 'me' | 'status'
  let activeTab = initialFilter === 'me' ? 'me' : 'team';
  let supervisorSelectedTeam = isSuper ? 'all' : userPrimaryTeam;

  let tasksData = [];
  let allTeams = [];
  let labMembers = [];

  // 1. Team Metadata Mapping (Icons & Formatted Names)
  const TEAM_META = {
    'team-smartgrid': { name: 'Smart Grid Team Tasks', icon: '⚡', slug: 'smartgrid', vi: 'Nhiệm Vụ Nhóm Smart Grid' },
    'team-ai': { name: 'AI Team Tasks', icon: '🤖', slug: 'ai', vi: 'Nhiệm Vụ Nhóm AI' },
    'team-bess': { name: 'BESS Team Tasks', icon: '🔋', slug: 'bess', vi: 'Nhiệm Vụ Nhóm BESS' },
    'team-pv': { name: 'PV Team Tasks', icon: '☀️', slug: 'pv', vi: 'Nhiệm Vụ Nhóm PV' },
    'team-wind': { name: 'Wind Team Tasks', icon: '💨', slug: 'wind', vi: 'Nhiệm Vụ Nhóm Wind' },
    'team-ev': { name: 'Electric Vehicle Tasks', icon: '🚗', slug: 'ev', vi: 'Nhiệm Vụ Nhóm EV' },
    'team-hydrogen': { name: 'Hydrogen Team Tasks', icon: '💧', slug: 'hydrogen', vi: 'Nhiệm Vụ Nhóm Hydrogen' },
    'team-dr_uc': { name: 'Demand Response & UC Tasks', icon: '📈', slug: 'dr_uc', vi: 'Nhiệm Vụ Nhóm DR & UC' },
    'team-general': { name: 'General & Personal Tasks', icon: '📋', slug: 'general', vi: 'Nhiệm Vụ Chung & Giao Cá Nhân' },
    'all': { name: 'All Lab Research Tasks', icon: '🌐', slug: 'all', vi: 'Toàn Bộ Nhiệm Vụ Phòng Lab' }
  };

  function getWorkspaceTitle() {
    if (activeTab === 'general') {
      return { icon: '📋', title: isVi ? 'Nhiệm Vụ Chung & Giao Cá Nhân' : 'General & Personal Tasks' };
    }
    if (activeTab === 'me') {
      return { icon: '👤', title: isVi ? 'Nhiệm Vụ Được Giao Cho Tôi' : 'My Assigned Tasks' };
    }

    if (isSuper) {
      if (supervisorSelectedTeam === 'all') {
        return { icon: '🌐', title: isVi ? 'Toàn Bộ Nhiệm Vụ Phòng Lab' : 'All Lab Research Tasks' };
      }
      const meta = TEAM_META[supervisorSelectedTeam] || { name: 'Team Tasks', icon: '⚡', vi: 'Nhiệm Vụ Nhóm' };
      return { icon: meta.icon, title: isVi ? meta.vi : meta.name };
    }

    const meta = TEAM_META[userPrimaryTeam] || { name: 'Smart Grid Team Tasks', icon: '⚡', vi: 'Nhiệm Vụ Nhóm Smart Grid' };
    return { icon: meta.icon, title: isVi ? meta.vi : meta.name };
  }

  const initialTitleMeta = getWorkspaceTitle();

  // 2. Initial Page Shell HTML
  container.innerHTML = `
    <div class="notion-page-header">
      <div class="notion-title-row" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span class="notion-title-icon" id="notionTitleIcon">${initialTitleMeta.icon}</span>
          <h1 class="notion-title-text" id="notionPageTitle">${initialTitleMeta.title}</h1>
        </div>

        ${isSuper ? `
          <!-- Supervisor / Admin Exclusive Team Workspace Switcher -->
          <div style="display:flex; align-items:center; gap:8px; background:var(--notion-hover); padding:4px 10px; border-radius:6px; border:1px solid var(--notion-border);">
            <span style="font-size:0.75rem; font-weight:700; color:var(--notion-muted); text-transform:uppercase; letter-spacing:0.04em;">
              <i class="fa-solid fa-crown" style="color:#eab308; margin-right:4px;"></i> ${isVi ? 'Xem theo nhóm:' : 'Team View:'}
            </span>
            <select id="supervisorTeamSwitcher" class="notion-select-filter" style="border:none; background:transparent; font-weight:600; cursor:pointer;">
              <option value="all">🌐 ${isVi ? 'Tất Cả Các Nhóm (All Teams)' : 'All Lab Teams'}</option>
              <option value="team-smartgrid">⚡ Smart Grid Team</option>
              <option value="team-ai">🤖 AI Team</option>
              <option value="team-bess">🔋 BESS Team</option>
              <option value="team-pv">☀️ PV Team</option>
              <option value="team-wind">💨 Wind Team</option>
              <option value="team-ev">🚗 Electric Vehicle Team</option>
              <option value="team-hydrogen">💧 Hydrogen Team</option>
              <option value="team-dr_uc">📈 Demand Response & UC</option>
              <option value="team-general">📋 ${isVi ? 'Nhiệm Vụ Chung' : 'General Tasks'}</option>
            </select>
          </div>
        ` : ''}
      </div>
      
      <!-- Notion View Switcher & Actions Toolbar -->
      <div class="notion-toolbar">
        <div class="notion-tabs">
          <button type="button" class="notion-tab-btn ${activeTab === 'team' ? 'active' : ''}" id="tabTeamTasks">
            <i class="fa-regular fa-star"></i> ${isSuper ? (isVi ? 'Tất cả nhiệm vụ' : 'All tasks') : (isVi ? 'Nhiệm vụ nhóm' : 'Team Tasks')}
          </button>
          <button type="button" class="notion-tab-btn ${activeTab === 'general' ? 'active' : ''}" id="tabGeneralTasks">
            <i class="fa-solid fa-clipboard-list"></i> ${isVi ? 'Nhiệm vụ chung' : 'General Tasks'}
            <span id="generalTaskBadge" style="display:none; font-size:0.675rem; background:#3b82f6; color:#fff; padding:1px 5px; border-radius:8px; margin-left:2px;"></span>
          </button>
          <button type="button" class="notion-tab-btn ${activeTab === 'me' ? 'active' : ''}" id="tabMyTasks">
            <i class="fa-regular fa-user"></i> ${isVi ? 'Giao cho tôi' : 'My tasks'}
          </button>
          <button type="button" class="notion-tab-btn ${activeTab === 'status' ? 'active' : ''}" id="tabStatusBoard">
            <i class="fa-solid fa-table-columns"></i> ${isVi ? 'Theo trạng thái' : 'Status Board'}
          </button>
        </div>

        <div class="notion-actions-right">
          <input type="text" id="notionSearchInput" class="notion-search-input" placeholder="${isVi ? 'Tìm kiếm nhiệm vụ...' : 'Search tasks...'}">
          <button type="button" class="notion-btn-icon" id="btnToggleFilters" title="Lọc nhiệm vụ">
            <i class="fa-solid fa-arrow-down-wide-short"></i>
          </button>
          <button type="button" class="notion-btn-new" id="btnNotionNewTask">
            <i class="fa-solid fa-plus"></i> New
          </button>
        </div>
      </div>

      <!-- Expandable Filter Bar -->
      <div class="notion-filter-bar" id="notionFilterPanel" style="display:none; margin-top:10px;">
        <select id="notionFilterStatus" class="notion-select-filter">
          <option value="">${isVi ? '✴️ Tất Cả Trạng Thái' : 'All Statuses'}</option>
          <option value="todo">${isVi ? 'Chưa bắt đầu' : 'To Do'}</option>
          <option value="in_progress">${isVi ? 'Đang thực hiện' : 'In Progress'}</option>
          <option value="review">${isVi ? 'Chờ duyệt' : 'Review'}</option>
          <option value="done">${isVi ? 'Hoàn thành' : 'Done'}</option>
          <option value="cancelled">${isVi ? 'Cancel' : 'Cancelled'}</option>
        </select>
        <select id="notionFilterPriority" class="notion-select-filter">
          <option value="">${isVi ? '🎯 Mức Độ Ưu Tiên' : 'All Priorities'}</option>
          <option value="urgent">${isVi ? 'Khẩn cấp' : 'Urgent'}</option>
          <option value="high">${isVi ? 'Cao' : 'High'}</option>
          <option value="medium">${isVi ? 'Trung bình' : 'Medium'}</option>
          <option value="low">${isVi ? 'Thấp' : 'Low'}</option>
        </select>
      </div>
    </div>

    <!-- Main Viewport Container -->
    <div id="notionViewport" style="position:relative;">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  const viewport = container.querySelector('#notionViewport');
  const searchInput = container.querySelector('#notionSearchInput');
  const filterPanel = container.querySelector('#notionFilterPanel');
  const btnToggleFilters = container.querySelector('#btnToggleFilters');
  const btnNewTask = container.querySelector('#btnNotionNewTask');
  const pageTitleEl = container.querySelector('#notionPageTitle');
  const pageIconEl = container.querySelector('#notionTitleIcon');
  const supervisorSwitcher = container.querySelector('#supervisorTeamSwitcher');

  // 3. Load Data from API
  try {
    try {
      const teamsRes = await API.get('/api/teams');
      allTeams = teamsRes.teams || [];
    } catch (e) {}

    try {
      const membersRes = await API.get('/api/members');
      labMembers = membersRes.members || membersRes.users || [];
    } catch (e) {}

    const tasksRes = await API.get('/api/tasks');
    tasksData = tasksRes.tasks || [];

    // Fallback Seed Data if empty
    if (!tasksData || tasksData.length === 0) {
      tasksData = [
        { id: 'tsk-sg-01', team_id: 'team-smartgrid', title: 'Sửa miniscada', description: 'Tìm hiểu toàn bộ lỗi và lên danh sách thiết bị', status: 'cancelled', priority: 'low', assignee_names: ['Long', 'Hiếu Đỗ', 'Tu Pham Anh'], due_date: '2026-06-24', updated_at: 1720975680 },
        { id: 'tsk-sg-02', team_id: 'team-smartgrid', title: 'Severless Cloud Computing', description: 'Test thử full mạch cứng', status: 'cancelled', priority: 'medium', assignee_names: ['Long', 'Vinh Hồng'], due_date: '2026-07-30', updated_at: 1721588580 },
        { id: 'tsk-sg-03', team_id: 'team-smartgrid', title: 'Project Smartgrid T5-8', description: 'D2', status: 'in_progress', priority: 'high', assignee_names: ['Tu Pham Anh', 'Long'], due_date: '2026-07-22', updated_at: 1720893480 },
        { id: 'tsk-sg-04', team_id: 'team-smartgrid', title: 'Bằng sáng chế - Build Application', description: 'Tìm hiểu: Backend + Frontend, API, Database', status: 'in_progress', priority: 'high', assignee_names: ['Hiếu Đỗ', 'Tu Pham Anh', 'Long'], due_date: '2026-07-30', updated_at: 1723054080 },
        { id: 'tsk-sg-05', team_id: 'team-smartgrid', title: 'Data Center - RL', description: 'First Draft', status: 'in_progress', priority: 'high', assignee_names: ['Long', 'Hiếu Đỗ', 'Tu Pham Anh'], due_date: '2026-08-03', updated_at: 1719684540 },
        { id: 'tsk-sg-06', team_id: 'team-smartgrid', title: 'Sửa review PowerCon', description: 'Hoàn thiện bản sửa đổi bài báo PowerCon gửi ban biên tập', status: 'in_progress', priority: 'low', assignee_names: ['Long', 'Tu Pham Anh', 'Hiếu Đỗ', 'Vinh Hồng'], due_date: '2026-09-01', updated_at: 1720880220 },
        { id: 'tsk-sg-07', team_id: 'team-smartgrid', title: 'Slide PowerCon', description: 'Thiết kế slide thuyết trình báo cáo PowerCon', status: 'in_progress', priority: 'low', assignee_names: ['Hai Duong Minh', 'Hiếu Đỗ', 'Tu Pham Anh'], due_date: '2026-09-20', updated_at: 1721498100 },
        { id: 'tsk-sg-08', team_id: 'team-smartgrid', title: 'Data Center - Review', description: 'Đánh giá cấu trúc mạng và phân tích hiệu năng Data Center', status: 'in_progress', priority: 'low', assignee_names: ['Hiếu Đỗ', 'Vinh Hồng'], due_date: '2026-09-15', updated_at: 1721587020 },
        { id: 'tsk-sg-09', team_id: 'team-bess', title: 'Nafosted BESS', description: 'Nghiên cứu mô hình lưu trữ năng lượng pin BESS đề tài Nafosted', status: 'in_progress', priority: 'high', assignee_names: ['Long', 'Vinh Hồng'], due_date: '2026-07-30', updated_at: 1721500800 },
        { id: 'tsk-sg-10', team_id: 'team-smartgrid', title: 'Distributed Controller - RNN', description: 'Sửa lại ICGEA để Long test HIL bên Đài', status: 'todo', priority: 'medium', assignee_names: ['Long', 'Tu Pham Anh', 'Hiếu Đỗ'], due_date: '2026-09-01', updated_at: 1720893420 },
        { id: 'tsk-gen-01', team_id: 'team-general', title: 'Báo cáo mua sắm thiết bị & kinh phí Quý 3 Lab', description: 'Tổng hợp chi phí linh kiện thí nghiệm và dự trù kinh phí Quý 3 phòng Lab C7', status: 'in_progress', priority: 'high', assignee_names: ['Tu Pham Anh', 'Long'], due_date: '2026-09-30', updated_at: 1721800000 },
        { id: 'tsk-gen-02', team_id: 'team-general', title: 'Chuẩn bị hồ sơ nghiệm thu đề tài cấp Bộ', description: 'Hoàn thiện thuyết minh kỹ thuật và biên bản thử nghiệm HIL phục vụ nghiệm thu', status: 'in_progress', priority: 'urgent', assignee_names: ['Hiếu Đỗ', 'Vinh Hồng'], due_date: '2026-10-15', updated_at: 1721900000 }
      ];
    }
  } catch (e) {
    console.warn('API error loading tasks:', e);
  }

  // 4. Filtering Logic with Team Isolation & Personal Privacy for General Tasks
  function isUserAssignedToTask(task, user) {
    if (!user) return false;
    const uId = user.id || '';
    const uName = (user.display_name || user.name || '').toLowerCase();
    const uEmail = (user.email || user.username || '').toLowerCase();

    if (task.assigned_to && task.assigned_to === uId) return true;
    if (Array.isArray(task.assignees) && task.assignees.includes(uId)) return true;
    if (Array.isArray(task.assignee_names)) {
      return task.assignee_names.some(n => {
        const ln = n.toLowerCase();
        return ln.includes(uName) || uName.includes(ln) || (uEmail && ln.includes(uEmail.split('@')[0]));
      });
    }
    return false;
  }

  function getFilteredList() {
    const q = (searchInput?.value || '').toLowerCase().trim();
    const status = container.querySelector('#notionFilterStatus')?.value || '';
    const prio = container.querySelector('#notionFilterPriority')?.value || '';

    // Step A: Base Scope Filter (Team vs General vs Me)
    let scoped = [];

    if (activeTab === 'general') {
      // General Tasks tab: Contains team-general / cross-team tasks
      scoped = tasksData.filter(t => {
        const isGen = t.team_id === 'team-general' || t.team_id === 'general' || !t.team_id;
        if (!isGen) return false;
        // Privacy rule: Supervisor/Admin can see all general tasks; Researchers only see if their name is in the task!
        if (isSuper) return true;
        return isUserAssignedToTask(t, currentUser);
      });
    } else if (activeTab === 'me') {
      // My tasks tab: All tasks (team + general) assigned to current user
      scoped = tasksData.filter(t => isUserAssignedToTask(t, currentUser));
    } else {
      // 'team' or 'status' view:
      if (isSuper) {
        if (supervisorSelectedTeam === 'all') {
          scoped = [...tasksData];
        } else {
          scoped = tasksData.filter(t => t.team_id === supervisorSelectedTeam);
        }
      } else {
        // Normal member / Leader: STRICTLY isolated to user's primary research team
        scoped = tasksData.filter(t => t.team_id === userPrimaryTeam);
      }
    }

    // Step B: Query & Dropdown Filters
    return scoped.filter(t => {
      if (q) {
        const matchTitle = t.title && t.title.toLowerCase().includes(q);
        const matchDesc = t.description && t.description.toLowerCase().includes(q);
        const matchAssignee = t.assignee_names && t.assignee_names.some(n => n.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchAssignee) return false;
      }

      if (status && t.status !== status) return false;
      if (prio && t.priority !== prio) return false;

      return true;
    });
  }

  function updateHeaderDisplay() {
    const meta = getWorkspaceTitle();
    if (pageTitleEl) pageTitleEl.textContent = meta.title;
    if (pageIconEl) pageIconEl.textContent = meta.icon;
  }

  function renderStatusPill(status, taskId) {
    const st = (status || 'todo').toLowerCase();
    let cls = 'status-todo';

    if (st === 'in_progress' || st === 'dang-thuc-hien') cls = 'status-in_progress';
    else if (st === 'review' || st === 'cho-duyet') cls = 'status-review';
    else if (st === 'done' || st === 'hoan-thanh') cls = 'status-done';
    else if (st === 'cancelled' || st === 'cancel') cls = 'status-cancelled';

    return `
      <select class="notion-pill-status ${cls}" data-task-id="${taskId}" onchange="window.handleNotionStatusChange(this, '${taskId}')">
        <option value="cancelled" ${st === 'cancelled' || st === 'cancel' ? 'selected' : ''}>● Cancel</option>
        <option value="in_progress" ${st === 'in_progress' ? 'selected' : ''}>● Đang thực hiện</option>
        <option value="todo" ${st === 'todo' ? 'selected' : ''}>● Chưa bắt đầu</option>
        <option value="review" ${st === 'review' ? 'selected' : ''}>● Chờ duyệt</option>
        <option value="done" ${st === 'done' ? 'selected' : ''}>● Hoàn thành</option>
      </select>
    `;
  }

  function renderPriorityPill(priority) {
    const p = (priority || 'medium').toLowerCase();
    let label = 'Trung bình';
    let cls = 'prio-medium';

    if (p === 'urgent') { label = 'Khẩn cấp'; cls = 'prio-urgent'; }
    else if (p === 'high' || p === 'cao') { label = 'Cao'; cls = 'prio-high'; }
    else if (p === 'low' || p === 'thap') { label = 'Thấp'; cls = 'prio-low'; }

    return `<span class="notion-pill-prio ${cls}">${label}</span>`;
  }

  function renderAssigneePills(task) {
    let names = task.assignee_names;
    if (!names || names.length === 0) {
      if (task.assignee?.display_name || task.assignee?.name) {
        names = [task.assignee.display_name || task.assignee.name];
      } else {
        names = [];
      }
    }

    return `
      <div class="notion-cell-assignee-clickable" onclick="window.openNotionMemberPicker(event, '${task.id}')" title="Bấm để chọn/thay đổi thành viên Lab được giao">
        <div class="notion-assignees-group">
          ${names.length === 0 ? `
            <span style="color:var(--notion-muted); font-size:0.75rem;"><i class="fa-solid fa-user-plus" style="margin-right:4px;"></i> Chưa giao</span>
          ` : names.map(n => {
            const initial = n.trim().charAt(0) || 'U';
            return `
              <span class="notion-assignee-chip" title="${escapeHtml(n)}">
                <span class="notion-avatar-circle">${escapeHtml(initial)}</span>
                <span>${escapeHtml(n)}</span>
              </span>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function renderPastDue(dueDate, status) {
    if (status === 'done') {
      return `<span class="notion-on-track-badge"><i class="fa-solid fa-check"></i> Xong</span>`;
    }
    if (!dueDate) return `<span style="color:var(--notion-muted); font-size:0.75rem;">-</span>`;

    const due = new Date(dueDate).getTime();
    const now = Date.now();
    if (due < now) {
      return `<span class="notion-past-due-badge"><i class="fa-regular fa-clock"></i> Past Due</span>`;
    }
    return `<span class="notion-on-track-badge"><i class="fa-regular fa-circle-check"></i> On track</span>`;
  }

  function formatNotionDate(dateStr) {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (e) {
      return dateStr;
    }
  }

  function formatUpdatedTime(timestamp) {
    if (!timestamp) return 'Just now';
    try {
      const ms = typeof timestamp === 'number' && timestamp < 2000000000 ? timestamp * 1000 : Number(timestamp);
      const d = new Date(ms);
      if (isNaN(d.getTime())) return 'Recently';
      const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
      return d.toLocaleString('en-US', options);
    } catch (e) {
      return 'Recently';
    }
  }

  // 5. Render Main Table View (Exact Notion Style)
  function renderTableView(list) {
    updateHeaderDisplay();

    if (list.length === 0) {
      let emptyMsg = isVi ? 'Không tìm thấy nhiệm vụ nào trong mục này.' : 'No tasks found in this section.';
      if (activeTab === 'general' && !isSuper) {
        emptyMsg = isVi 
          ? '🔒 Bạn không có nhiệm vụ chung cá nhân nào được giao.' 
          : '🔒 You have no assigned general tasks.';
      }
      viewport.innerHTML = renderEmptyState(emptyMsg);
      return;
    }

    viewport.innerHTML = `
      <div class="notion-table-wrap">
        <table class="notion-table">
          <thead>
            <tr>
              <th style="width:280px;"><i class="fa-solid fa-font" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Tên nhiệm vụ' : 'Task name'}</th>
              <th style="width:140px;"><i class="fa-solid fa-circle-dot" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Trạng thái' : 'Status'}</th>
              <th style="width:240px;"><i class="fa-solid fa-users" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Người được giao' : 'Assignees'}</th>
              <th style="width:110px;"><i class="fa-regular fa-calendar" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Hạn chót' : 'Due date'}</th>
              <th style="width:120px;"><i class="fa-solid fa-bullseye" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Mức độ ưu tiên' : 'Priority'}</th>
              <th><i class="fa-solid fa-bars-staggered" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Mô tả' : 'Description'}</th>
              <th style="width:110px;"><i class="fa-solid fa-triangle-exclamation" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Tình trạng' : 'Status'}</th>
              <th style="width:160px;"><i class="fa-regular fa-clock" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Đã cập nhật lúc' : 'Last updated'}</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(t => `
              <tr data-task-id="${t.id}">
                <td>
                  <div class="notion-cell-title">
                    <span class="notion-task-name" onclick="window.openTaskDetail('${t.id}')">${escapeHtml(t.title)}</span>
                    <button type="button" class="notion-btn-open" onclick="window.openTaskDetail('${t.id}')" title="Mở sổ tay thí nghiệm & chi tiết SciNote">
                      <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem;"></i> OPEN
                    </button>
                  </div>
                </td>
                <td>${renderStatusPill(t.status, t.id)}</td>
                <td>${renderAssigneePills(t)}</td>
                <td>
                  <span style="font-size:0.8rem; font-family:monospace; color:var(--notion-text);">
                    ${formatNotionDate(t.due_date)}
                  </span>
                </td>
                <td>${renderPriorityPill(t.priority)}</td>
                <td>
                  <span style="color:var(--notion-muted); font-size:0.785rem; max-width:280px; display:inline-block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${escapeHtml(t.description || '')}">
                    ${escapeHtml(t.description || '-')}
                  </span>
                </td>
                <td>${renderPastDue(t.due_date, t.status)}</td>
                <td>
                  <span style="font-size:0.75rem; color:var(--notion-muted);">
                    ${formatUpdatedTime(t.updated_at || t.created_at)}
                  </span>
                </td>
              </tr>
            `).join('')}
            <!-- Inline Quick Add Row -->
            <tr class="notion-row-new" id="rowQuickAdd">
              <td colspan="8" style="padding:10px 14px;">
                <i class="fa-solid fa-plus" style="margin-right:6px; font-size:0.75rem;"></i> ${isVi ? 'New task' : 'New task'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    // Row Click Event
    const quickAddRow = viewport.querySelector('#rowQuickAdd');
    if (quickAddRow) {
      quickAddRow.addEventListener('click', () => {
        openNotionCreateTaskModal();
      });
    }
  }

  // 6. Render Board View (Notion Columns)
  function renderBoardView(list) {
    updateHeaderDisplay();

    const columns = [
      { id: 'todo', title: 'Chưa bắt đầu', dotClass: 'status-todo' },
      { id: 'in_progress', title: 'Đang thực hiện', dotClass: 'status-in_progress' },
      { id: 'review', title: 'Chờ duyệt', dotClass: 'status-review' },
      { id: 'done', title: 'Hoàn thành', dotClass: 'status-done' },
      { id: 'cancelled', title: 'Cancel', dotClass: 'status-cancelled' }
    ];

    viewport.innerHTML = `
      <div class="notion-board-grid">
        ${columns.map(col => {
          const colTasks = list.filter(t => (t.status || 'todo').toLowerCase() === col.id || (col.id === 'cancelled' && t.status === 'cancel'));
          return `
            <div class="notion-board-col">
              <div class="notion-board-col-header">
                <div class="notion-col-header-left">
                  <span class="notion-pill-dot" style="background:#3b82f6;"></span>
                  <strong style="font-size:0.85rem; color:var(--notion-text);">${col.title}</strong>
                  <span style="font-size:0.75rem; color:var(--notion-muted); background:var(--notion-hover); padding:1px 6px; border-radius:10px; font-weight:600;">${colTasks.length}</span>
                </div>
                <button type="button" style="background:none; border:none; color:var(--notion-muted); cursor:pointer;" onclick="window.openCreateTaskModal('${col.id}')">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

              <div class="notion-board-cards">
                ${colTasks.map(t => `
                  <div class="notion-card" onclick="window.openTaskDetail('${t.id}')">
                    <h4 class="notion-card-title">${escapeHtml(t.title)}</h4>
                    ${t.description ? `<p class="notion-card-desc">${escapeHtml(t.description)}</p>` : ''}
                    
                    <div style="margin-bottom:8px; display:flex; align-items:center; justify-content:space-between; gap:6px;">
                      ${renderPriorityPill(t.priority)}
                      ${renderPastDue(t.due_date, t.status)}
                    </div>

                    <div class="notion-card-footer">
                      ${renderAssigneePills(t)}
                      <span style="font-size:0.725rem; font-family:monospace; color:var(--notion-muted);">
                        ${formatNotionDate(t.due_date)}
                      </span>
                    </div>
                  </div>
                `).join('')}

                <button type="button" class="notion-btn-add-card" onclick="window.openCreateTaskModal('${col.id}')">
                  <i class="fa-solid fa-plus"></i> ${isVi ? 'Thêm thẻ mới' : 'Add card'}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function renderCurrentView() {
    const list = getFilteredList();
    if (activeTab === 'status') {
      renderBoardView(list);
    } else {
      renderTableView(list);
    }
  }

  // 7. Interactive Notion Member Picker Popover
  window.openNotionMemberPicker = function(event, taskId) {
    event.stopPropagation();
    const task = tasksData.find(t => t.id === taskId);
    if (!task) return;

    // Remove existing popovers
    document.querySelectorAll('.notion-picker-popover').forEach(p => p.remove());

    const popover = document.createElement('div');
    popover.className = 'notion-picker-popover';
    popover.id = `popover-task-${taskId}`;

    let curNames = task.assignee_names || [];
    if (curNames.length === 0 && task.assigned_to) {
      const matched = labMembers.find(m => m.id === task.assigned_to);
      if (matched) curNames = [matched.display_name || matched.name];
    }

    let memberList = [...labMembers];
    if (memberList.length === 0) {
      memberList = [
        { id: 'usr-smartgrid-1788108587815', display_name: 'Pham Anh Tu', name: 'Pham Anh Tu', team: 'Smart Grid' },
        { id: 'usr-smartgrid-1788099630575', display_name: 'Nguyễn Quý Long', name: 'Nguyễn Quý Long', team: 'Smart Grid' },
        { id: 'usr-smartgrid-1788099612925', display_name: 'Đỗ Đắc Hiếu', name: 'Đỗ Đắc Hiếu', team: 'Smart Grid' },
        { id: 'usr-res-14', display_name: 'Tran Thi Hong Vinh', name: 'Tran Thi Hong Vinh', team: 'BESS' },
        { id: 'usr-res-05', display_name: 'Duong Minh Hai', name: 'Duong Minh Hai', team: 'Smart Grid' },
        { id: 'usr-res-01', display_name: 'Bui Quang Hai', name: 'Bui Quang Hai', team: 'AI' },
        { id: 'usr-ldr-01', display_name: 'Dr. Ngo Tri Duc', name: 'Dr. Ngo Tri Duc', team: 'PV' },
        { id: 'usr-ldr-02', display_name: 'Dr. Trinh Minh Phuong', name: 'Dr. Trinh Minh Phuong', team: 'BESS' },
        { id: 'usr-sup-01', display_name: 'Assoc. Prof. Nguyen Duc Tuyen', name: 'Assoc. Prof. Nguyen Duc Tuyen', team: 'Supervisor' }
      ];
    }

    popover.innerHTML = `
      <div class="notion-picker-header">
        <span><i class="fa-solid fa-users"></i> ${isVi ? 'Giao cho thành viên Lab' : 'Assign Lab Members'}</span>
        <i class="fa-solid fa-xmark" style="cursor:pointer;" onclick="this.closest('.notion-picker-popover').remove()"></i>
      </div>
      <input type="text" class="notion-picker-search" placeholder="${isVi ? 'Tìm thành viên...' : 'Search members...'}" id="pickerSearchInput">
      <div class="notion-picker-list" id="pickerMemberList">
        ${memberList.map(m => {
          const mName = m.display_name || m.name || 'Member';
          const isSelected = curNames.some(cn => cn.toLowerCase() === mName.toLowerCase() || mName.toLowerCase().includes(cn.toLowerCase()) || cn.toLowerCase().includes(mName.toLowerCase()));
          const initial = mName.trim().charAt(0);
          const teamName = m.team || (m.teams && m.teams[0]?.team_name) || (m.role ? m.role.toUpperCase() : 'LAB');

          return `
            <div class="notion-picker-item ${isSelected ? 'selected' : ''}" data-member-name="${escapeHtml(mName)}" data-member-id="${m.id}">
              <span class="notion-avatar-circle">${escapeHtml(initial)}</span>
              <span>${escapeHtml(mName)}</span>
              <span class="notion-picker-team-tag">${escapeHtml(teamName)}</span>
              ${isSelected ? '<i class="fa-solid fa-check item-check"></i>' : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    const rect = event.currentTarget.getBoundingClientRect();
    popover.style.top = `${rect.bottom + window.scrollY + 4}px`;
    popover.style.left = `${Math.min(rect.left + window.scrollX, window.innerWidth - 310)}px`;
    document.body.appendChild(popover);

    const pSearch = popover.querySelector('#pickerSearchInput');
    const pList = popover.querySelector('#pickerMemberList');
    if (pSearch && pList) {
      pSearch.focus();
      pSearch.addEventListener('input', () => {
        const sq = pSearch.value.toLowerCase().trim();
        pList.querySelectorAll('.notion-picker-item').forEach(item => {
          const name = (item.getAttribute('data-member-name') || '').toLowerCase();
          item.style.display = (!sq || name.includes(sq)) ? 'flex' : 'none';
        });
      });
    }

    pList.querySelectorAll('.notion-picker-item').forEach(item => {
      item.addEventListener('click', async (e) => {
        e.stopPropagation();
        const mName = item.getAttribute('data-member-name');
        const mId = item.getAttribute('data-member-id');

        let updatedNames = [...(task.assignee_names || [])];
        const existingIdx = updatedNames.findIndex(n => n.toLowerCase() === mName.toLowerCase() || mName.toLowerCase().includes(n.toLowerCase()) || n.toLowerCase().includes(mName.toLowerCase()));

        if (existingIdx >= 0) {
          updatedNames.splice(existingIdx, 1);
        } else {
          updatedNames.push(mName);
        }

        task.assignee_names = updatedNames;
        if (updatedNames.length > 0) {
          task.assigned_to = mId;
        }
        task.updated_at = Math.floor(Date.now() / 1000);

        showToast(`Đã cập nhật người được giao: ${updatedNames.join(', ') || 'Chưa giao'}`);
        renderCurrentView();
        popover.remove();

        try {
          await API.patch(`/api/tasks/${task.id}`, {
            assignee_names: updatedNames,
            assigned_to: task.assigned_to
          });
        } catch (e) {}
      });
    });

    function closePicker(e) {
      if (!popover.contains(e.target) && e.target !== event.currentTarget && !event.currentTarget.contains(e.target)) {
        popover.remove();
        document.removeEventListener('click', closePicker);
      }
    }
    setTimeout(() => document.addEventListener('click', closePicker), 50);
  };

  // 8. Dedicated Notion Task Creation Modal
  function openNotionCreateTaskModal(defaultStatus = 'in_progress') {
    document.querySelectorAll('.notion-modal-backdrop').forEach(m => m.remove());

    let memberList = [...labMembers];
    if (memberList.length === 0) {
      memberList = [
        { id: 'usr-smartgrid-1788108587815', display_name: 'Pham Anh Tu', name: 'Pham Anh Tu', team: 'Smart Grid' },
        { id: 'usr-smartgrid-1788099630575', display_name: 'Nguyễn Quý Long', name: 'Nguyễn Quý Long', team: 'Smart Grid' },
        { id: 'usr-smartgrid-1788099612925', display_name: 'Đỗ Đắc Hiếu', name: 'Đỗ Đắc Hiếu', team: 'Smart Grid' },
        { id: 'usr-res-14', display_name: 'Tran Thi Hong Vinh', name: 'Tran Thi Hong Vinh', team: 'BESS' },
        { id: 'usr-res-05', display_name: 'Duong Minh Hai', name: 'Duong Minh Hai', team: 'Smart Grid' },
        { id: 'usr-res-01', display_name: 'Bui Quang Hai', name: 'Bui Quang Hai', team: 'AI' },
        { id: 'usr-ldr-01', display_name: 'Dr. Ngo Tri Duc', name: 'Dr. Ngo Tri Duc', team: 'PV' },
        { id: 'usr-ldr-02', display_name: 'Dr. Trinh Minh Phuong', name: 'Dr. Trinh Minh Phuong', team: 'BESS' },
        { id: 'usr-sup-01', display_name: 'Assoc. Prof. Nguyen Duc Tuyen', name: 'Assoc. Prof. Nguyen Duc Tuyen', team: 'Supervisor' }
      ];
    }

    const defaultTeamForCreate = activeTab === 'general' ? 'team-general' : (isSuper && supervisorSelectedTeam !== 'all' ? supervisorSelectedTeam : userPrimaryTeam);

    const modal = document.createElement('div');
    modal.className = 'notion-modal-backdrop';
    modal.innerHTML = `
      <div class="notion-modal-dialog">
        <div class="notion-modal-header">
          <h3 class="notion-modal-title">
            <i class="fa-solid fa-square-check" style="color:var(--notion-blue);"></i> ${isVi ? 'Tạo Nhiệm Vụ Mới' : 'Create New Task'}
          </h3>
          <button type="button" class="notion-modal-close" id="btnModalClose">&times;</button>
        </div>

        <form id="notionCreateTaskForm">
          <div class="notion-modal-body">
            <div class="notion-form-group">
              <label class="notion-form-label"><i class="fa-solid fa-font"></i> ${isVi ? 'Tên nhiệm vụ / Đề tài' : 'Task Title'} <span style="color:#ef4444;">*</span></label>
              <input type="text" id="nTaskTitle" class="notion-form-input" placeholder="${isVi ? 'VD: Sửa đổi thuật toán điều khiển microgrid...' : 'e.g. Implement RegD frequency control...'}" required autofocus>
            </div>

            <div class="notion-form-row">
              <div class="notion-form-group">
                <label class="notion-form-label"><i class="fa-solid fa-users-viewfinder"></i> ${isVi ? 'Phạm vi / Nhóm Nghiên Cứu' : 'Research Team'}</label>
                <select id="nTaskTeam" class="notion-form-select">
                  <option value="team-smartgrid" ${defaultTeamForCreate === 'team-smartgrid' ? 'selected' : ''}>⚡ Smart Grid Team</option>
                  <option value="team-ai" ${defaultTeamForCreate === 'team-ai' ? 'selected' : ''}>🤖 AI Team</option>
                  <option value="team-bess" ${defaultTeamForCreate === 'team-bess' ? 'selected' : ''}>🔋 BESS Team</option>
                  <option value="team-pv" ${defaultTeamForCreate === 'team-pv' ? 'selected' : ''}>☀️ PV Team</option>
                  <option value="team-wind" ${defaultTeamForCreate === 'team-wind' ? 'selected' : ''}>💨 Wind Team</option>
                  <option value="team-ev" ${defaultTeamForCreate === 'team-ev' ? 'selected' : ''}>🚗 Electric Vehicle Team</option>
                  <option value="team-hydrogen" ${defaultTeamForCreate === 'team-hydrogen' ? 'selected' : ''}>💧 Hydrogen Team</option>
                  <option value="team-dr_uc" ${defaultTeamForCreate === 'team-dr_uc' ? 'selected' : ''}>📈 Demand Response & UC</option>
                  <option value="team-general" ${defaultTeamForCreate === 'team-general' ? 'selected' : ''}>📋 ${isVi ? 'Nhiệm Vụ Chung (Giao Cá Nhân)' : 'General (Personal Task)'}</option>
                </select>
              </div>

              <div class="notion-form-group">
                <label class="notion-form-label"><i class="fa-regular fa-circle-dot"></i> ${isVi ? 'Trạng thái ban đầu' : 'Status'}</label>
                <select id="nTaskStatus" class="notion-form-select">
                  <option value="in_progress" ${defaultStatus === 'in_progress' ? 'selected' : ''}>● Đang thực hiện (In Progress)</option>
                  <option value="todo" ${defaultStatus === 'todo' ? 'selected' : ''}>● Chưa bắt đầu (To Do)</option>
                  <option value="review" ${defaultStatus === 'review' ? 'selected' : ''}>● Chờ duyệt (Review)</option>
                  <option value="done" ${defaultStatus === 'done' ? 'selected' : ''}>● Hoàn thành (Done)</option>
                  <option value="cancelled" ${defaultStatus === 'cancelled' ? 'selected' : ''}>● Cancel</option>
                </select>
              </div>
            </div>

            <div class="notion-form-row">
              <div class="notion-form-group">
                <label class="notion-form-label"><i class="fa-solid fa-bullseye"></i> ${isVi ? 'Mức độ ưu tiên' : 'Priority'}</label>
                <select id="nTaskPriority" class="notion-form-select">
                  <option value="high">🔴 Cao (High)</option>
                  <option value="medium" selected>🟠 Trung bình (Medium)</option>
                  <option value="low">🟢 Thấp (Low)</option>
                  <option value="urgent">🟣 Khẩn cấp (Urgent)</option>
                </select>
              </div>

              <div class="notion-form-group">
                <label class="notion-form-label"><i class="fa-regular fa-calendar"></i> ${isVi ? 'Hạn chót (Due Date)' : 'Due Date'}</label>
                <input type="date" id="nTaskDueDate" class="notion-form-input" value="${new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]}">
              </div>
            </div>

            <div class="notion-form-group">
              <label class="notion-form-label"><i class="fa-solid fa-user-check"></i> ${isVi ? 'Chọn người được giao (Thành viên Lab)' : 'Assign Lab Members'}</label>
              <div class="notion-member-checklist" id="nTaskMembersChecklist">
                ${memberList.map(m => {
                  const mName = m.display_name || m.name || 'Member';
                  const initial = mName.trim().charAt(0);
                  const isChecked = mName.toLowerCase().includes('long') || mName.toLowerCase().includes('tu');
                  return `
                    <label class="notion-member-check-item">
                      <input type="checkbox" class="n-member-cb" value="${escapeHtml(mName)}" data-id="${m.id}" ${isChecked ? 'checked' : ''}>
                      <span class="notion-avatar-circle">${escapeHtml(initial)}</span>
                      <span>${escapeHtml(mName)}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="notion-form-group">
              <label class="notion-form-label"><i class="fa-solid fa-bars-staggered"></i> ${isVi ? 'Mô tả & Ghi chú nhiệm vụ' : 'Description & Notes'}</label>
              <textarea id="nTaskDesc" class="notion-form-textarea" rows="3" placeholder="${isVi ? 'Ghi chú chi tiết mục tiêu nghiên cứu hoặc yêu cầu kỹ thuật...' : 'Detailed experimental objectives or instructions...'}"></textarea>
            </div>
          </div>

          <div class="notion-modal-footer">
            <button type="button" class="notion-btn-cancel" id="btnModalCancel">${isVi ? 'Hủy' : 'Cancel'}</button>
            <button type="submit" class="notion-btn-submit"><i class="fa-solid fa-plus"></i> ${isVi ? 'Tạo Nhiệm Vụ' : 'Create Task'}</button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#btnModalClose');
    const cancelBtn = modal.querySelector('#btnModalCancel');
    const form = modal.querySelector('#notionCreateTaskForm');

    function closeModal() {
      modal.remove();
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = modal.querySelector('#nTaskTitle').value.trim();
      if (!title) return;

      const team_id = modal.querySelector('#nTaskTeam').value;
      const status = modal.querySelector('#nTaskStatus').value;
      const priority = modal.querySelector('#nTaskPriority').value;
      const due_date = modal.querySelector('#nTaskDueDate').value || null;
      const description = modal.querySelector('#nTaskDesc').value.trim();

      const selectedCbs = Array.from(modal.querySelectorAll('.n-member-cb:checked'));
      const selectedNames = selectedCbs.map(cb => cb.value);
      const firstId = selectedCbs.length > 0 ? selectedCbs[0].getAttribute('data-id') : null;

      const newTask = {
        id: `tsk-custom-${Date.now()}`,
        team_id,
        title,
        description,
        status,
        priority,
        assigned_to: firstId,
        assignee_names: selectedNames.length > 0 ? selectedNames : ['Unassigned'],
        due_date,
        created_at: Math.floor(Date.now() / 1000),
        updated_at: Math.floor(Date.now() / 1000)
      };

      tasksData.unshift(newTask);
      renderCurrentView();
      closeModal();
      showToast(`Đã tạo nhiệm vụ "${title}" thành công!`);

      try {
        await API.post('/api/tasks', newTask);
      } catch (err) {}
    });
  }

  window.openCreateTaskModal = openNotionCreateTaskModal;
  window.openNewTaskModal = openNotionCreateTaskModal;

  // 9. Event Bindings
  const tabTeam = container.querySelector('#tabTeamTasks');
  const tabGeneral = container.querySelector('#tabGeneralTasks');
  const tabMe = container.querySelector('#tabMyTasks');
  const tabStatus = container.querySelector('#tabStatusBoard');

  if (tabTeam) {
    tabTeam.addEventListener('click', () => {
      activeTab = 'team';
      tabTeam.classList.add('active');
      tabGeneral?.classList.remove('active');
      tabMe?.classList.remove('active');
      tabStatus?.classList.remove('active');
      renderCurrentView();
    });
  }

  if (tabGeneral) {
    tabGeneral.addEventListener('click', () => {
      activeTab = 'general';
      tabGeneral.classList.add('active');
      tabTeam?.classList.remove('active');
      tabMe?.classList.remove('active');
      tabStatus?.classList.remove('active');
      renderCurrentView();
    });
  }

  if (tabMe) {
    tabMe.addEventListener('click', () => {
      activeTab = 'me';
      tabMe.classList.add('active');
      tabTeam?.classList.remove('active');
      tabGeneral?.classList.remove('active');
      tabStatus?.classList.remove('active');
      renderCurrentView();
    });
  }

  if (tabStatus) {
    tabStatus.addEventListener('click', () => {
      activeTab = 'status';
      tabStatus.classList.add('active');
      tabTeam?.classList.remove('active');
      tabGeneral?.classList.remove('active');
      tabMe?.classList.remove('active');
      renderCurrentView();
    });
  }

  // Supervisor Team Switcher
  if (supervisorSwitcher) {
    supervisorSwitcher.addEventListener('change', () => {
      supervisorSelectedTeam = supervisorSwitcher.value;
      renderCurrentView();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => renderCurrentView());
  }

  if (btnToggleFilters && filterPanel) {
    btnToggleFilters.addEventListener('click', () => {
      filterPanel.style.display = filterPanel.style.display === 'none' ? 'flex' : 'none';
    });
  }

  const fStatus = container.querySelector('#notionFilterStatus');
  const fPrio = container.querySelector('#notionFilterPriority');
  [fStatus, fPrio].forEach(select => {
    if (select) select.addEventListener('change', () => renderCurrentView());
  });

  if (btnNewTask) {
    btnNewTask.addEventListener('click', () => {
      openNotionCreateTaskModal();
    });
  }

  // Window global status changer
  window.handleNotionStatusChange = async function(selectEl, taskId) {
    const newStatus = selectEl.value;
    const task = tasksData.find(t => t.id === taskId);
    if (task) {
      task.status = newStatus;
      task.updated_at = Math.floor(Date.now() / 1000);
      showToast(`Đã đổi trạng thái sang: ${newStatus}`);
      renderCurrentView();
      try {
        await API.patch(`/api/tasks/${taskId}`, { status: newStatus });
      } catch(e) {}
    }
  };

  // Initial render
  renderCurrentView();
}
