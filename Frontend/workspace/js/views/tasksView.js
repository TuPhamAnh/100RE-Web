/**
 * 100RE LAB WORKSPACE — Notion-Style Team Workspace & Task Database
 * Faithful recreation of Notion Table & Status Board with SciNote integration.
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatDate, escapeHtml, renderEmptyState, showToast } from '../components.js';

export async function renderTasks(container, initialFilter = null) {
  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';
  let activeTab = initialFilter === 'me' ? 'me' : 'all'; // 'all' (Table) | 'status' (Board) | 'me' (My tasks)
  let tasksData = [];
  let allTeams = [];

  // 1. Initial Shell Markup
  container.innerHTML = `
    <div class="notion-page-header">
      <div class="notion-title-row">
        <span class="notion-title-icon">✅</span>
        <h1 class="notion-title-text" id="notionPageTitle">Smartgrid Missions: Impossible</h1>
      </div>
      
      <!-- Notion View Switcher & Actions Toolbar -->
      <div class="notion-toolbar">
        <div class="notion-tabs">
          <button type="button" class="notion-tab-btn ${activeTab === 'all' ? 'active' : ''}" id="tabAllTasks">
            <i class="fa-regular fa-star"></i> ${isVi ? 'Tất cả nhiệm vụ' : 'All tasks'}
          </button>
          <button type="button" class="notion-tab-btn ${activeTab === 'status' ? 'active' : ''}" id="tabStatusBoard">
            <i class="fa-solid fa-table-columns"></i> ${isVi ? 'Theo trạng thái' : 'Status Board'}
          </button>
          <button type="button" class="notion-tab-btn ${activeTab === 'me' ? 'active' : ''}" id="tabMyTasks">
            <i class="fa-regular fa-user"></i> ${isVi ? 'Nhiệm vụ của tôi' : 'My tasks'}
          </button>
        </div>

        <div class="notion-actions-right">
          <input type="text" id="notionSearchInput" class="notion-search-input" placeholder="${isVi ? 'Tìm kiếm nhiệm vụ...' : 'Search tasks...'}">
          <select id="notionTeamFilter" class="notion-select-filter" style="display:none;">
            <option value="">${isVi ? 'Tất Cả Nhóm' : 'All Teams'}</option>
          </select>
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
        <select id="notionFilterTeam" class="notion-select-filter">
          <option value="">${isVi ? '📌 Tất Cả Nhóm (Team)' : 'All Teams'}</option>
        </select>
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
          <option value="high">${isVi ? 'Cao' : 'High'}</option>
          <option value="medium">${isVi ? 'Trung bình' : 'Medium'}</option>
          <option value="low">${isVi ? 'Thấp' : 'Low'}</option>
        </select>
      </div>
    </div>

    <!-- Main Viewport Container -->
    <div id="notionViewport">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  const viewport = container.querySelector('#notionViewport');
  const searchInput = container.querySelector('#notionSearchInput');
  const filterPanel = container.querySelector('#notionFilterPanel');
  const btnToggleFilters = container.querySelector('#btnToggleFilters');
  const btnNewTask = container.querySelector('#btnNotionNewTask');
  const pageTitleEl = container.querySelector('#notionPageTitle');

  // 2. Fetch Data from API
  try {
    try {
      const teamsRes = await API.get('/api/teams');
      allTeams = teamsRes.teams || [];
      const teamFilterSelect = container.querySelector('#notionFilterTeam');
      if (teamFilterSelect) {
        allTeams.forEach(t => {
          const opt = document.createElement('option');
          opt.value = t.id;
          opt.textContent = t.name;
          teamFilterSelect.appendChild(opt);
        });
      }
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
        { id: 'tsk-sg-10', team_id: 'team-smartgrid', title: 'Distributed Controller - RNN', description: 'Sửa lại ICGEA để Long test HIL bên Đài', status: 'todo', priority: 'medium', assignee_names: ['Long', 'Tu Pham Anh', 'Hiếu Đỗ'], due_date: '2026-09-01', updated_at: 1720893420 }
      ];
    }
  } catch (e) {
    console.warn('API error loading tasks:', e);
  }

  // 3. Helper Functions
  function getFilteredList() {
    const q = (searchInput?.value || '').toLowerCase().trim();
    const team = container.querySelector('#notionFilterTeam')?.value || '';
    const status = container.querySelector('#notionFilterStatus')?.value || '';
    const prio = container.querySelector('#notionFilterPriority')?.value || '';
    const currentUser = Auth.getUser();

    return tasksData.filter(t => {
      // Tab filter
      if (activeTab === 'me') {
        const uId = currentUser?.id || '';
        const uName = (currentUser?.display_name || currentUser?.name || '').toLowerCase();
        const isAssigned = (t.assigned_to && t.assigned_to === uId) || 
                           (t.assignees && t.assignees.includes(uId)) ||
                           (t.assignee_names && t.assignee_names.some(n => uName.includes(n.toLowerCase()) || n.toLowerCase().includes(uName)));
        if (!isAssigned) return false;
      }

      // Keyword search
      if (q) {
        const matchTitle = t.title && t.title.toLowerCase().includes(q);
        const matchDesc = t.description && t.description.toLowerCase().includes(q);
        const matchAssignee = t.assignee_names && t.assignee_names.some(n => n.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchAssignee) return false;
      }

      // Dropdown filters
      if (team && t.team_id !== team) return false;
      if (status && t.status !== status) return false;
      if (prio && t.priority !== prio) return false;

      return true;
    });
  }

  function renderStatusPill(status, taskId) {
    const st = (status || 'todo').toLowerCase();
    let label = 'Chưa bắt đầu';
    let cls = 'status-todo';

    if (st === 'in_progress' || st === 'dang-thuc-hien') {
      label = 'Đang thực hiện';
      cls = 'status-in_progress';
    } else if (st === 'review' || st === 'cho-duyet') {
      label = 'Chờ duyệt';
      cls = 'status-review';
    } else if (st === 'done' || st === 'hoan-thanh') {
      label = 'Hoàn thành';
      cls = 'status-done';
    } else if (st === 'cancelled' || st === 'cancel') {
      label = 'Cancel';
      cls = 'status-cancelled';
    }

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
        names = ['Unassigned'];
      }
    }

    return `
      <div class="notion-assignees-group">
        ${names.map(n => {
          const initial = n.trim().charAt(0) || 'U';
          return `
            <span class="notion-assignee-chip" title="${escapeHtml(n)}">
              <span class="notion-avatar-circle">${escapeHtml(initial)}</span>
              <span>${escapeHtml(n)}</span>
            </span>
          `;
        }).join('')}
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

  // 4. Render Main Table View (Exact Notion Style)
  function renderTableView(list) {
    if (list.length === 0) {
      viewport.innerHTML = renderEmptyState(isVi ? 'Không tìm thấy nhiệm vụ nào.' : 'No tasks found.');
      return;
    }

    viewport.innerHTML = `
      <div class="notion-table-wrap">
        <table class="notion-table">
          <thead>
            <tr>
              <th style="width:280px;"><i class="fa-solid fa-font" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Tên nhiệm vụ' : 'Task name'}</th>
              <th style="width:140px;"><i class="fa-solid fa-circle-dot" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Trạng thái' : 'Status'}</th>
              <th style="width:220px;"><i class="fa-solid fa-users" style="font-size:0.7rem; margin-right:4px;"></i> ${isVi ? 'Người được giao' : 'Assignees'}</th>
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
        if (typeof window.openCreateTaskModal === 'function') {
          window.openCreateTaskModal();
        } else {
          showQuickCreatePrompt();
        }
      });
    }
  }

  // 5. Render Board View (Notion Columns)
  function renderBoardView(list) {
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

  function showQuickCreatePrompt() {
    const title = prompt('Nhập tiêu đề nhiệm vụ mới:');
    if (!title || !title.trim()) return;
    const newTask = {
      id: `tsk-custom-${Date.now()}`,
      team_id: 'team-smartgrid',
      title: title.trim(),
      description: '',
      status: 'in_progress',
      priority: 'medium',
      assignee_names: ['Tu Pham Anh', 'Long'],
      due_date: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
      updated_at: Math.floor(Date.now() / 1000)
    };
    tasksData.unshift(newTask);
    renderCurrentView();
    showToast('Đã tạo nhiệm vụ mới thành công!');
    try {
      API.post('/api/tasks', newTask);
    } catch(e) {}
  }

  // 6. Event Bindings
  const tabAll = container.querySelector('#tabAllTasks');
  const tabStatus = container.querySelector('#tabStatusBoard');
  const tabMe = container.querySelector('#tabMyTasks');

  if (tabAll) {
    tabAll.addEventListener('click', () => {
      activeTab = 'all';
      tabAll.classList.add('active');
      tabStatus?.classList.remove('active');
      tabMe?.classList.remove('active');
      renderCurrentView();
    });
  }

  if (tabStatus) {
    tabStatus.addEventListener('click', () => {
      activeTab = 'status';
      tabStatus.classList.add('active');
      tabAll?.classList.remove('active');
      tabMe?.classList.remove('active');
      renderCurrentView();
    });
  }

  if (tabMe) {
    tabMe.addEventListener('click', () => {
      activeTab = 'me';
      tabMe.classList.add('active');
      tabAll?.classList.remove('active');
      tabStatus?.classList.remove('active');
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

  const fTeam = container.querySelector('#notionFilterTeam');
  const fStatus = container.querySelector('#notionFilterStatus');
  const fPrio = container.querySelector('#notionFilterPriority');
  [fTeam, fStatus, fPrio].forEach(select => {
    if (select) select.addEventListener('change', () => renderCurrentView());
  });

  if (btnNewTask) {
    btnNewTask.addEventListener('click', () => {
      if (typeof window.openCreateTaskModal === 'function') {
        window.openCreateTaskModal();
      } else {
        showQuickCreatePrompt();
      }
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
