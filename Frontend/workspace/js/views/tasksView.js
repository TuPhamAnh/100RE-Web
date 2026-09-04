/**
 * 100RE LAB WORKSPACE — Notion-Style Team Workspace & Task Database
 * Features:
 * - Dynamic Team Workspace naming (e.g. Smart Grid Tasks, PV Tasks, BESS Tasks)
 * - Full coverage for all 8 Research Teams + General Cross-Team Tasks
 * - Strict Team Isolation for researchers + Global Overview for Supervisor & Admin
 * - Multi-tier persistent storage (D1 + KV + LocalStorage Cache)
 * - Notion Table & Board View with interactive Member Picker and SciNote ELN
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatDate, escapeHtml, renderEmptyState, showToast } from '../components.js';
import { TaskStore } from '../taskStore.js';

export async function renderTasks(container, initialFilter = null) {
  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';
  const currentUser = Auth.getUser();
  const isSuper = (Auth && typeof Auth.isSupervisor === 'function' && Auth.isSupervisor()) || (Auth && typeof Auth.isSystemAdmin === 'function' && Auth.isSystemAdmin());

  // Determine user's primary research team
  let userPrimaryTeam = 'team-smartgrid';
  if (currentUser) {
    if (Array.isArray(currentUser.teams) && currentUser.teams.length > 0) {
      const rawT = currentUser.teams[0];
      userPrimaryTeam = typeof rawT === 'string' ? rawT : (rawT.team_id || rawT.id || 'team-smartgrid');
    } else if (currentUser.team) {
      userPrimaryTeam = currentUser.team;
    }
  }
  if (!userPrimaryTeam.startsWith('team-') && userPrimaryTeam !== 'all') {
    userPrimaryTeam = 'team-' + userPrimaryTeam;
  }

  // Active Tab: 'team' | 'general' | 'me' | 'status'
  let activeTab = initialFilter === 'me' ? 'me' : 'team';
  let supervisorSelectedTeam = isSuper ? 'all' : userPrimaryTeam;

  let tasksData = [];
  let allTeams = [];
  let labMembers = [];

  // Team Metadata Mapping (Icons, Names, Slugs)
    const TEAM_META = {
    'team-smartgrid': { name: 'Smart Grid Team Tasks', icon: '<i class="fa-solid fa-network-wired" style="color:#0284c7;"></i>', slug: 'smartgrid', vi: 'Nhiệm Vụ Nhóm Smart Grid' },
    'team-ai': { name: 'AI Team Tasks', icon: '<i class="fa-solid fa-brain" style="color:#8b5cf6;"></i>', slug: 'ai', vi: 'Nhiệm Vụ Nhóm AI' },
    'team-bess': { name: 'BESS Team Tasks', icon: '<i class="fa-solid fa-car-battery" style="color:#10b981;"></i>', slug: 'bess', vi: 'Nhiệm Vụ Nhóm BESS' },
    'team-pv': { name: 'PV Team Tasks', icon: '<i class="fa-solid fa-solar-panel" style="color:#f59e0b;"></i>', slug: 'pv', vi: 'Nhiệm Vụ Nhóm PV' },
    'team-wind': { name: 'Wind Team Tasks', icon: '<i class="fa-solid fa-wind" style="color:#06b6d4;"></i>', slug: 'wind', vi: 'Nhiệm Vụ Nhóm Wind' },
    'team-ev': { name: 'Electric Vehicle Tasks', icon: '<i class="fa-solid fa-charging-station" style="color:#ec4899;"></i>', slug: 'ev', vi: 'Nhiệm Vụ Nhóm EV' },
    'team-hydrogen': { name: 'Hydrogen Team Tasks', icon: '<i class="fa-solid fa-droplet" style="color:#3b82f6;"></i>', slug: 'hydrogen', vi: 'Nhiệm Vụ Nhóm Hydrogen' },
    'team-ucdr': { name: 'Unit Commitment & Demand Response Tasks', icon: '<i class="fa-solid fa-chart-line" style="color:#6366f1;"></i>', slug: 'ucdr', vi: 'Nhiệm Vụ Nhóm UC & DR' },
    'team-dr_uc': { name: 'Unit Commitment & Demand Response Tasks', icon: '<i class="fa-solid fa-chart-line" style="color:#6366f1;"></i>', slug: 'ucdr', vi: 'Nhiệm Vụ Nhóm UC & DR' },
    'team-uc': { name: 'Unit Commitment & Demand Response Tasks', icon: '<i class="fa-solid fa-chart-line" style="color:#6366f1;"></i>', slug: 'ucdr', vi: 'Nhiệm Vụ Nhóm UC & DR' },
    'team-dr': { name: 'Unit Commitment & Demand Response Tasks', icon: '<i class="fa-solid fa-chart-line" style="color:#6366f1;"></i>', slug: 'ucdr', vi: 'Nhiệm Vụ Nhóm UC & DR' },
    'team-general': { name: 'General & Personal Tasks', icon: '<i class="fa-solid fa-clipboard-list" style="color:#64748b;"></i>', slug: 'general', vi: 'Nhiệm Vụ Chung & Giao Cá Nhân' },
    'all': { name: 'All Lab Research Tasks', icon: '<i class="fa-solid fa-list-check" style="color:#16a34a;"></i>', slug: 'all', vi: 'Toàn Bộ Nhiệm Vụ Phòng Lab' }
  };

  function getWorkspaceTitle() {
    if (activeTab === 'general') {
      return { icon: '<i class="fa-solid fa-clipboard-list" style="color:#64748b;"></i>', title: isVi ? 'Nhiệm Vụ Chung & Giao Cá Nhân' : 'General & Personal Tasks' };
    }
    if (activeTab === 'me') {
      return { icon: '<i class="fa-solid fa-user-tag" style="color:#0284c7;"></i>', title: isVi ? 'Nhiệm Vụ Được Giao Cho Tôi' : 'My Assigned Tasks' };
    }

    if (isSuper) {
      if (supervisorSelectedTeam === 'all') {
        return { icon: '<i class="fa-solid fa-list-check" style="color:#16a34a;"></i>', title: isVi ? 'Toàn Bộ Nhiệm Vụ Phòng Lab' : 'All Lab Research Tasks' };
      }
      const meta = TEAM_META[supervisorSelectedTeam] || { name: 'Team Tasks', icon: '<i class="fa-solid fa-layer-group" style="color:#16a34a;"></i>', vi: 'Nhiệm Vụ Nhóm' };
      return { icon: meta.icon, title: isVi ? meta.vi : meta.name };
    }

    const meta = TEAM_META[userPrimaryTeam] || { name: 'Team Tasks', icon: '<i class="fa-solid fa-layer-group" style="color:#16a34a;"></i>', vi: 'Nhiệm Vụ Nhóm Nghiên Cứu' };
    return { icon: meta.icon, title: isVi ? meta.vi : meta.name };
  }

  const initialTitleMeta = getWorkspaceTitle();

  // Initial Shell HTML
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
              <i class="fa-solid fa-layer-group" style="color:#16a34a; margin-right:4px;"></i> ${isVi ? 'Xem theo nhóm:' : 'Team View:'}
            </span>
            <select id="supervisorTeamSwitcher" class="notion-select-filter" style="border:none; background:transparent; font-weight:600; cursor:pointer; color:#1e293b;">
              <option value="all">${isVi ? 'Tất Cả Các Nhóm (All Lab Teams)' : 'All Lab Teams'}</option>
              <option value="team-smartgrid">Smart Grid Team</option>
              <option value="team-ai">AI Team</option>
              <option value="team-bess">BESS Team</option>
              <option value="team-pv">PV Team</option>
              <option value="team-wind">Wind Team</option>
              <option value="team-ev">Electric Vehicle Team</option>
              <option value="team-hydrogen">Hydrogen Team</option>
              <option value="team-ucdr">Unit Commitment & Demand Response (UCDR)</option>
              <option value="team-general">${isVi ? 'Nhiệm Vụ Chung (General Tasks)' : 'General Tasks'}</option>
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

  // Load Data from API + Local Storage via unified TaskStore
  try {
    try {
      const teamsRes = await API.get('/api/teams');
      allTeams = teamsRes.teams || [];
    } catch (e) {}

    try {
      const membersRes = await API.get('/api/members');
      labMembers = membersRes.members || membersRes.users || [];
    } catch (e) {}

    tasksData = await TaskStore.loadTasks();
  } catch (e) {
    console.warn('Data initialization warning:', e);
    tasksData = TaskStore.getAllTasks();
  }

  // Filtering Logic
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

    let scoped = [];

    if (activeTab === 'general') {
      // General Tasks tab
      scoped = tasksData.filter(t => {
        const isGen = t.team_id === 'team-general' || t.team_id === 'general' || !t.team_id;
        if (!isGen) return false;
        if (isSuper) return true;
        return isUserAssignedToTask(t, currentUser);
      });
    } else if (activeTab === 'me') {
      // My tasks tab
      scoped = tasksData.filter(t => isUserAssignedToTask(t, currentUser));
    } else {
      // Team / Status view
      if (isSuper) {
        if (supervisorSelectedTeam === 'all') {
          scoped = [...tasksData];
        } else {
          scoped = tasksData.filter(t => {
            if (t.team_id === supervisorSelectedTeam) return true;
            const tSlug = (t.team_id || '').replace(/^team-/, '');
            const sSlug = supervisorSelectedTeam.replace(/^team-/, '');
            return tSlug === sSlug;
          });
        }
      } else {
        // Normal member / Leader: isolated to their research team
        scoped = tasksData.filter(t => {
          if (!t.team_id) return true;
          if (t.team_id === userPrimaryTeam) return true;
          if (Array.isArray(currentUser?.teams) && currentUser.teams.includes(t.team_id)) return true;
          const tSlug = (t.team_id || '').replace(/^team-/, '');
          const uSlug = userPrimaryTeam.replace(/^team-/, '');
          return tSlug === uSlug;
        });
      }
    }

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

    // Direct Delete Task Action from Table & Board Views
  window.deleteTaskDirectly = async function(event, taskId, taskTitle) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const confirmed = typeof window.showConfirmModal === 'function' ? await window.showConfirmModal({
      title: 'Xác Nhận Xóa Nhiệm Vụ',
      message: `Bạn có chắc chắn muốn xóa nhiệm vụ "${taskTitle || 'này'}" khỏi phòng Lab không? Thao tác này sẽ xóa vĩnh viễn khỏi cơ sở dữ liệu.`,
      confirmText: 'Xóa Nhiệm Vụ',
      cancelText: 'Hủy Bỏ',
      type: 'danger'
    }) : true;

    if (confirmed) {
      await TaskStore.deleteTask(taskId);
      tasksData = TaskStore.getAllTasks();
      applyFilterAndRender();
      if (typeof showToast === 'function') showToast('Đã xóa nhiệm vụ thành công.');
    }
  };

  function updateHeaderDisplay() {
    const meta = getWorkspaceTitle();
    if (pageTitleEl) pageTitleEl.textContent = meta.title;
    if (pageIconEl) pageIconEl.innerHTML = meta.icon;
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

  // Render Table View (Exact Notion Style)
  function renderTableView(list) {
    updateHeaderDisplay();

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
              <th style="width:140px;"><i class="fa-regular fa-clock" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Đã cập nhật lúc' : 'Last updated'}</th>
              <th style="width:60px; text-align:center;"><i class="fa-solid fa-ellipsis" style="font-size:0.7rem;"></i></th>
            </tr>
          </thead>
          <tbody>
            ${list.length === 0 ? `
              <tr>
                <td colspan="9" style="text-align:center; padding:32px 16px; color:var(--notion-muted);">
                  <i class="fa-regular fa-folder-open" style="font-size:1.5rem; margin-bottom:8px; display:block; opacity:0.6;"></i>
                  <span>${activeTab === 'general' && !isSuper ? (isVi ? '🔒 Bạn không có nhiệm vụ chung cá nhân nào được giao.' : '🔒 You have no assigned general tasks.') : (isVi ? 'Chưa có nhiệm vụ nào trong mục này. Bấm "+ New task" bên dưới để tạo mới.' : 'No tasks in this section yet. Click "+ New task" below to create.')}</span>
                </td>
              </tr>
            ` : list.map(t => `
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
                <td style="text-align:center;">
                  <button type="button" class="notion-btn-delete-task" onclick="window.deleteTaskDirectly(event, '${t.id}', '${escapeHtml((t.title || '').replace(/'/g, "\\'"))}')" title="Xóa nhiệm vụ này">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
            <!-- Inline Quick Add Row -->
            <tr class="notion-row-new" id="rowQuickAdd">
              <td colspan="9" style="padding:10px 14px;">
                <i class="fa-solid fa-plus" style="margin-right:6px; font-size:0.75rem;"></i> ${isVi ? 'New task' : 'New task'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const quickAddRow = viewport.querySelector('#rowQuickAdd');
    if (quickAddRow) {
      quickAddRow.addEventListener('click', () => {
        openNotionCreateTaskModal();
      });
    }
  }

  // Render Board View (Notion Columns)
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
                  <div class="notion-card" onclick="window.openTaskDetail('${t.id}')" style="position:relative;">
                    <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:6px;">
                      <h4 class="notion-card-title" style="flex:1;">${escapeHtml(t.title)}</h4>
                      <button type="button" class="notion-btn-delete-task" style="padding:2px 4px; font-size:0.75rem;" onclick="window.deleteTaskDirectly(event, '${t.id}', '${escapeHtml((t.title || '').replace(/'/g, "\\'"))}')" title="Xóa nhiệm vụ này">
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
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

  // Interactive Notion Member Picker Popover
  window.openNotionMemberPicker = function(event, taskId) {
    event.stopPropagation();
    const task = tasksData.find(t => t.id === taskId);
    if (!task) return;

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

  // Dedicated Notion Task Creation Modal
  function openNotionCreateTaskModal(param1 = 'in_progress', param2 = null) {
    document.querySelectorAll('.notion-modal-backdrop').forEach(m => m.remove());

    let defaultStatus = 'in_progress';
    let defaultTeam = null;

    if (typeof param1 === 'string') {
      const p1Clean = TaskStore.normalizeTeamSlug(param1);
      if (param1.startsWith('team-') || ['pv', 'smartgrid', 'bess', 'ai', 'wind', 'ev', 'hydrogen', 'ucdr', 'general'].includes(p1Clean)) {
        defaultTeam = TaskStore.toFullTeamId(param1);
        if (param2 && typeof param2 === 'string') defaultStatus = param2;
      } else {
        defaultStatus = param1;
        if (param2 && typeof param2 === 'string') defaultTeam = TaskStore.toFullTeamId(param2);
      }
    }

    if (!defaultTeam) {
      defaultTeam = activeTab === 'general' ? 'team-general' : (isSuper && supervisorSelectedTeam !== 'all' ? supervisorSelectedTeam : userPrimaryTeam);
    }

    const defaultTeamForCreate = defaultTeam;

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
                  <option value="team-ucdr" ${defaultTeamForCreate === 'team-ucdr' || defaultTeamForCreate === 'team-dr_uc' ? 'selected' : ''}>📈 Unit Commitment & Demand Response (UCDR)</option>
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
                  const isChecked = mName.toLowerCase().includes('long') || mName.toLowerCase().includes('tu') || (currentUser && (mName.toLowerCase().includes((currentUser.name || '').toLowerCase())));
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

      const newTask = await TaskStore.createTask({
        team_id,
        title,
        description,
        status,
        priority,
        assigned_to: firstId,
        assignee_names: selectedNames.length > 0 ? selectedNames : ['Chưa giao'],
        due_date
      });

      tasksData = TaskStore.getAllTasks();
      renderCurrentView();
      closeModal();
      showToast(`Đã tạo nhiệm vụ "${title}" thành công!`);
    });
  }

  window.openCreateTaskModal = openNotionCreateTaskModal;
  window.openNewTaskModal = openNotionCreateTaskModal;

  // Event Bindings
  const tabTeam = container.querySelector('#tabTeamTasks');
  const tabGeneral = container.querySelector('#tabGeneralTasks');
  const tabMe = container.querySelector('#tabMyTasks');
  const tabStatus = container.querySelector('#tabStatusBoard');

  function switchTab(newTab) {
    activeTab = newTab;
    [tabTeam, tabGeneral, tabMe, tabStatus].forEach(t => t?.classList.remove('active'));
    if (newTab === 'team') tabTeam?.classList.add('active');
    else if (newTab === 'general') tabGeneral?.classList.add('active');
    else if (newTab === 'me') tabMe?.classList.add('active');
    else if (newTab === 'status') tabStatus?.classList.add('active');
    renderCurrentView();
  }

  if (tabTeam) tabTeam.addEventListener('click', () => switchTab('team'));
  if (tabGeneral) tabGeneral.addEventListener('click', () => switchTab('general'));
  if (tabMe) tabMe.addEventListener('click', () => switchTab('me'));
  if (tabStatus) tabStatus.addEventListener('click', () => switchTab('status'));

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
    await TaskStore.updateTask(taskId, { status: newStatus });
    tasksData = TaskStore.getAllTasks();
    showToast(`Đã đổi trạng thái sang: ${newStatus}`);
    renderCurrentView();
  };

  // Listen for realtime cross-view updates
  const onTasksUpdated = () => {
    tasksData = TaskStore.getAllTasks();
    if (container && container.isConnected) {
      applyFilterAndRender();
    }
  };
  window.addEventListener('100re:tasks-updated', onTasksUpdated);

  // Initial render
  renderCurrentView();
}
