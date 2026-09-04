/**
 * 100RE LAB WORKSPACE — Unified Task Management Store (TaskStore)
 * 
 * Provides a shared Single Source of Truth for tasks across:
 * 1. "All Tasks" View (#tasks) - Table & Notion Board
 * 2. "Research Teams" Overview (#teams) - Team cards with live task counters
 * 3. "Team Space Detail" (#teams/:slug) - Hero KPI row and Tab "Nhiệm Vụ Nhóm"
 * 4. SciNote ELN Task Detail modal & Quick Edit actions
 */

import { API } from './api.js';

export const MASTER_SEED_TASKS = [
  // 1. Smart Grid & Microgrid Systems (9 Tasks)
  { 
    id: 'tsk-sg-01', 
    team_id: 'team-smartgrid', 
    title: 'Sửa miniscada', 
    description: 'Tìm hiểu toàn bộ lỗi và lên danh sách thiết bị', 
    status: 'cancelled', 
    priority: 'low', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignee_names: ['Long', 'Hiếu Đỗ', 'Tu Pham Anh'], 
    due_date: '2026-06-24', 
    created_at: 1718300000, 
    updated_at: 1720975680 
  },
  { 
    id: 'tsk-sg-02', 
    team_id: 'team-smartgrid', 
    title: 'Severless Cloud Computing', 
    description: 'Test thử full mạch cứng', 
    status: 'cancelled', 
    priority: 'medium', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignee_names: ['Long', 'Vinh Hồng'], 
    due_date: '2026-07-30', 
    created_at: 1718500000, 
    updated_at: 1721588580 
  },
  { 
    id: 'tsk-sg-03', 
    team_id: 'team-smartgrid', 
    title: 'Project Smartgrid T5-8', 
    description: 'D2', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-smartgrid-1788108587815', 
    assignee_names: ['Tu Pham Anh', 'Long'], 
    due_date: '2026-07-22', 
    created_at: 1718600000, 
    updated_at: 1720893480 
  },
  { 
    id: 'tsk-sg-04', 
    team_id: 'team-smartgrid', 
    title: 'Bằng sáng chế - Build Application', 
    description: 'Tìm hiểu: Backend + Frontend, API, Database', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-smartgrid-1788099612925', 
    assignee_names: ['Hiếu Đỗ', 'Tu Pham Anh', 'Long'], 
    due_date: '2026-07-30', 
    created_at: 1719000000, 
    updated_at: 1723054080 
  },
  { 
    id: 'tsk-sg-05', 
    team_id: 'team-smartgrid', 
    title: 'Data Center - RL', 
    description: 'First Draft', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignee_names: ['Long', 'Hiếu Đỗ', 'Tu Pham Anh'], 
    due_date: '2026-08-03', 
    created_at: 1718000000, 
    updated_at: 1719684540 
  },
  { 
    id: 'tsk-sg-06', 
    team_id: 'team-smartgrid', 
    title: 'Sửa review PowerCon', 
    description: 'Hoàn thiện bản sửa đổi bài báo PowerCon gửi ban biên tập', 
    status: 'in_progress', 
    priority: 'low', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignee_names: ['Long', 'Tu Pham Anh', 'Hiếu Đỗ', 'Vinh Hồng'], 
    due_date: '2026-09-01', 
    created_at: 1719500000, 
    updated_at: 1720880220 
  },
  { 
    id: 'tsk-sg-07', 
    team_id: 'team-smartgrid', 
    title: 'Slide PowerCon', 
    description: 'Thiết kế slide thuyết trình báo cáo PowerCon', 
    status: 'in_progress', 
    priority: 'low', 
    assigned_to: 'usr-res-05', 
    assignee_names: ['Hai Duong Minh', 'Hiếu Đỗ', 'Tu Pham Anh'], 
    due_date: '2026-09-20', 
    created_at: 1720000000, 
    updated_at: 1721498100 
  },
  { 
    id: 'tsk-sg-08', 
    team_id: 'team-smartgrid', 
    title: 'Data Center - Review', 
    description: 'Đánh giá cấu trúc mạng và phân tích hiệu năng Data Center', 
    status: 'in_progress', 
    priority: 'low', 
    assigned_to: 'usr-smartgrid-1788099612925', 
    assignee_names: ['Hiếu Đỗ', 'Vinh Hồng'], 
    due_date: '2026-09-15', 
    created_at: 1720500000, 
    updated_at: 1721587020 
  },
  { 
    id: 'tsk-sg-10', 
    team_id: 'team-smartgrid', 
    title: 'Distributed Controller - RNN', 
    description: 'Sửa lại ICGEA để Long test HIL bên Đài', 
    status: 'todo', 
    priority: 'medium', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignee_names: ['Long', 'Tu Pham Anh', 'Hiếu Đỗ'], 
    due_date: '2026-09-01', 
    created_at: 1720000000, 
    updated_at: 1720893420 
  },

  // 2. Photovoltaic (PV) Research Team (2 Tasks)
  { 
    id: 'tsk-pv-01', 
    team_id: 'team-pv', 
    title: 'Deploy Spatio-temporal Transformer for 15-min Solar Forecasting', 
    description: 'Train Vision Transformer with Sky Imager footage and Pyranometer irradiance log.', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-ldr-01', 
    assignee_names: ['Dr. Ngo Tri Duc', 'Bui Quang Minh'], 
    due_date: '2026-09-20', 
    created_at: 1707300000, 
    updated_at: 1721600000 
  },
  { 
    id: 'tsk-pv-02', 
    team_id: 'team-pv', 
    title: 'Calibrate Rooftop Pyranometer & Inverter Sensors', 
    description: 'Clean sensor optics and perform 24-hour baseline irradiance calibration on C7 rooftop.', 
    status: 'todo', 
    priority: 'medium', 
    assigned_to: 'usr-res-08', 
    assignee_names: ['Bui Quang Minh', 'Dr. Ngo Tri Duc'], 
    due_date: '2026-09-28', 
    created_at: 1721700000, 
    updated_at: 1721700000 
  },

  // 3. Battery Energy Storage Systems (BESS) (2 Tasks)
  { 
    id: 'tsk-bess-01', 
    team_id: 'team-bess', 
    title: 'Implement RegD frequency regulation control algorithm', 
    description: 'Develop MATLAB/Simulink and Python controller for fast 2-second response to PJM RegD automatic generation control signals.', 
    status: 'in_progress', 
    priority: 'urgent', 
    assigned_to: 'usr-ldr-02', 
    assignee_names: ['Dr. Trinh Minh Phuong', 'Tran Thi Hong Vinh'], 
    due_date: '2026-09-15', 
    created_at: 1707000000, 
    updated_at: 1721500000 
  },
  { 
    id: 'tsk-sg-09', 
    team_id: 'team-bess', 
    title: 'Nafosted BESS State-of-Charge & Degradation Modeling', 
    description: 'Nghiên cứu mô hình lưu trữ năng lượng pin BESS đề tài Nafosted', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-res-14', 
    assignee_names: ['Tran Thi Hong Vinh', 'Dr. Trinh Minh Phuong'], 
    due_date: '2026-07-30', 
    created_at: 1719200000, 
    updated_at: 1721500800 
  },

  // 4. Artificial Intelligence (AI) Team (1 Task)
  { 
    id: 'tsk-ai-01', 
    team_id: 'team-ai', 
    title: 'Huấn luyện mạng Neural dự báo phụ tải đỉnh Microgrid', 
    description: 'Tối ưu hóa siêu tham số mô hình LSTM và Transformer dự báo công suất đỉnh', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-res-01', 
    assignee_names: ['Bui Quang Hai'], 
    due_date: '2026-09-25', 
    created_at: 1708000000, 
    updated_at: 1721800000 
  },

  // 5. Wind Energy Research Team (1 Task)
  { 
    id: 'tsk-wind-01', 
    team_id: 'team-wind', 
    title: 'Optimal pitch angle controller under turbulent wind gusts', 
    description: 'Simulate FAST aerodynamic turbine model and test fuzzy pitch angle controller in Simulink.', 
    status: 'in_progress', 
    priority: 'medium', 
    assigned_to: 'usr-res-10', 
    assignee_names: ['Nguyen Nhu Tung', 'Nguyen Hoang Nam'], 
    due_date: '2026-10-05', 
    created_at: 1721850000, 
    updated_at: 1721850000 
  },

  // 6. Electric Vehicle (EV) Integration (1 Task)
  { 
    id: 'tsk-ev-01', 
    team_id: 'team-ev', 
    title: 'V2G smart charging optimization for campus microgrid', 
    description: 'Formulate mixed-integer linear programming (MILP) scheduler for 20 EV charging stations.', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-res-11', 
    assignee_names: ['Dao Quoc Khanh', 'Le The Cuong'], 
    due_date: '2026-10-10', 
    created_at: 1721900000, 
    updated_at: 1721900000 
  },

  // 7. Green Hydrogen Systems (1 Task)
  { 
    id: 'tsk-h2-01', 
    team_id: 'team-hydrogen', 
    title: 'PEM electrolyzer dynamic response & fuel cell scheduling', 
    description: 'Model green hydrogen production from surplus solar energy with dynamic power curtailment.', 
    status: 'in_progress', 
    priority: 'medium', 
    assigned_to: 'usr-res-12', 
    assignee_names: ['Nguyen Hoang Anh'], 
    due_date: '2026-10-20', 
    created_at: 1721950000, 
    updated_at: 1721950000 
  },

  // 8. Unit Commitment & Demand Response (UCDR) (2 Tasks)
  { 
    id: 'tsk-dr-01', 
    team_id: 'team-ucdr', 
    title: 'Dynamic pricing demand response for industrial loads', 
    description: 'Design incentive-based demand response algorithm for industrial microgrid consumers.', 
    status: 'in_progress', 
    priority: 'medium', 
    assigned_to: 'usr-res-09', 
    assignee_names: ['Dr. Le Anh Quan', 'Nguyen Tuan Anh'], 
    due_date: '2026-10-25', 
    created_at: 1722000000, 
    updated_at: 1722000000 
  },
  { 
    id: 'tsk-uc-01', 
    team_id: 'team-ucdr', 
    title: 'Formulate MILP formulation for 118-bus security-constrained unit commitment', 
    description: 'Develop security-constrained unit commitment with high renewable penetration and demand response flexibility.', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-res-09', 
    assignee_names: ['Dr. Le Anh Quan'], 
    due_date: '2026-11-05', 
    created_at: 1722100000, 
    updated_at: 1722100000 
  },

  // Cross-Team / General Tasks (2 Tasks)
  { 
    id: 'tsk-gen-01', 
    team_id: 'team-general', 
    title: 'Báo cáo mua sắm thiết bị & kinh phí Quý 3 Lab', 
    description: 'Tổng hợp chi phí linh kiện thí nghiệm và dự trù kinh phí Quý 3 phòng Lab C7', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-smartgrid-1788108587815', 
    assignee_names: ['Tu Pham Anh', 'Long'], 
    due_date: '2026-09-30', 
    created_at: 1721000000, 
    updated_at: 1721800000 
  },
  { 
    id: 'tsk-gen-02', 
    team_id: 'team-general', 
    title: 'Chuẩn bị hồ sơ nghiệm thu đề tài cấp Bộ', 
    description: 'Hoàn thiện thuyết minh kỹ thuật và biên bản thử nghiệm HIL phục vụ nghiệm thu', 
    status: 'in_progress', 
    priority: 'urgent', 
    assigned_to: 'usr-smartgrid-1788099612925', 
    assignee_names: ['Hiếu Đỗ', 'Vinh Hồng'], 
    due_date: '2026-10-15', 
    created_at: 1721500000, 
    updated_at: 1721900000 
  }
];

class TaskStoreService {
  constructor() {
    this._tasksCache = null;
    this._isLoading = false;
  }

  /**
   * Normalizes any team slug or ID to canonical slug (e.g. 'smartgrid', 'ucdr')
   */
  normalizeTeamSlug(teamIdOrSlug) {
    if (!teamIdOrSlug) return '';
    let s = String(teamIdOrSlug).toLowerCase().replace(/^team-/, '').trim();
    if (['uc', 'dr', 'dr_uc', 'ucdr'].includes(s)) return 'ucdr';
    return s;
  }

  /**
   * Normalizes team slug to standard full ID (e.g. 'team-smartgrid')
   */
  toFullTeamId(teamIdOrSlug) {
    const slug = this.normalizeTeamSlug(teamIdOrSlug);
    if (!slug) return 'team-general';
    return 'team-' + slug;
  }

  /**
   * Load and sync tasks from API + Seed + LocalStorage
   */
  async loadTasks(forceRefresh = false) {
    if (this._tasksCache && !forceRefresh) {
      return this._tasksCache;
    }

    let apiTasks = [];
    try {
      const res = await API.get('/api/tasks');
      if (res && Array.isArray(res.tasks)) {
        apiTasks = res.tasks;
      }
    } catch (e) {
      // Offline / client-side demo fallback
    }

    // 1. Deleted tasks blacklist
    let deletedIds = [];
    try {
      deletedIds = JSON.parse(localStorage.getItem('100re_deleted_task_ids') || '[]');
      if (!Array.isArray(deletedIds)) deletedIds = [];
    } catch (e) {}

    // 2. Custom created tasks
    let customTasks = [];
    try {
      customTasks = JSON.parse(localStorage.getItem('100re_custom_tasks') || '[]');
      if (!Array.isArray(customTasks)) customTasks = [];
    } catch (e) {}

    // 3. Status & Field overrides
    let overrides = {};
    try {
      overrides = JSON.parse(localStorage.getItem('100re_tasks_overrides') || '{}');
      if (typeof overrides !== 'object' || overrides === null) overrides = {};
    } catch (e) {}

    // Combine: API tasks + Custom tasks + Master seed tasks
    const map = new Map();

    // Start with Master Seed Tasks as base
    MASTER_SEED_TASKS.forEach(st => {
      if (!deletedIds.includes(st.id)) {
        map.set(st.id, { ...st });
      }
    });

    // Merge API tasks
    apiTasks.forEach(at => {
      if (!deletedIds.includes(at.id)) {
        const existing = map.get(at.id) || {};
        map.set(at.id, { ...existing, ...at });
      }
    });

    // Merge Custom Local tasks (highest priority for new user tasks)
    customTasks.forEach(ct => {
      if (!deletedIds.includes(ct.id)) {
        const existing = map.get(ct.id) || {};
        map.set(ct.id, { ...existing, ...ct });
      }
    });

    // Apply Overrides (e.g. status changes done via UI)
    Object.entries(overrides).forEach(([taskId, delta]) => {
      if (map.has(taskId)) {
        map.set(taskId, { ...map.get(taskId), ...delta });
      }
    });

    // Convert map back to list
    let finalTasks = Array.from(map.values());

    // Sort: updated_at / created_at descending
    finalTasks.sort((a, b) => {
      const timeA = a.updated_at || a.created_at || 0;
      const timeB = b.updated_at || b.created_at || 0;
      return timeB - timeA;
    });

    this._tasksCache = finalTasks;
    return this._tasksCache;
  }

  /**
   * Get all tasks (synchronous or cached)
   */
  getAllTasks() {
    if (!this._tasksCache) {
      // Synchronous initialization with seed + custom if not loaded yet
      let deletedIds = [];
      try { deletedIds = JSON.parse(localStorage.getItem('100re_deleted_task_ids') || '[]'); } catch (e) {}
      let customTasks = [];
      try { customTasks = JSON.parse(localStorage.getItem('100re_custom_tasks') || '[]'); } catch (e) {}
      let overrides = {};
      try { overrides = JSON.parse(localStorage.getItem('100re_tasks_overrides') || '{}'); } catch (e) {}

      const map = new Map();
      MASTER_SEED_TASKS.forEach(st => {
        if (!deletedIds.includes(st.id)) map.set(st.id, { ...st });
      });
      customTasks.forEach(ct => {
        if (!deletedIds.includes(ct.id)) map.set(ct.id, { ...(map.get(ct.id) || {}), ...ct });
      });
      Object.entries(overrides).forEach(([id, delta]) => {
        if (map.has(id)) map.set(id, { ...map.get(id), ...delta });
      });
      this._tasksCache = Array.from(map.values());
    }
    return this._tasksCache;
  }

  /**
   * Get all tasks for a specific research team
   */
  getTasksForTeam(teamSlugOrId) {
    const targetSlug = this.normalizeTeamSlug(teamSlugOrId);
    const all = this.getAllTasks();
    return all.filter(t => {
      const taskSlug = this.normalizeTeamSlug(t.team_id);
      return taskSlug === targetSlug;
    });
  }

  /**
   * Get task counts for all 8 canonical teams + general
   * Returns: { [slug]: { total, open, in_progress, done, todo, cancelled } }
   */
  getTaskCountsByTeam() {
    const all = this.getAllTasks();
    const CANONICAL_SLUGS = ['pv', 'smartgrid', 'bess', 'ai', 'wind', 'ev', 'hydrogen', 'ucdr', 'general'];
    const counts = {};

    CANONICAL_SLUGS.forEach(slug => {
      counts[slug] = { total: 0, open: 0, in_progress: 0, done: 0, todo: 0, cancelled: 0 };
    });

    all.forEach(t => {
      const s = this.normalizeTeamSlug(t.team_id);
      if (!counts[s]) {
        counts[s] = { total: 0, open: 0, in_progress: 0, done: 0, todo: 0, cancelled: 0 };
      }
      counts[s].total++;

      const st = (t.status || 'todo').toLowerCase();
      if (st === 'done' || st === 'hoan-thanh') {
        counts[s].done++;
      } else if (st === 'cancelled' || st === 'cancel') {
        counts[s].cancelled++;
      } else {
        counts[s].open++;
        if (st === 'in_progress' || st === 'dang-thuc-hien') {
          counts[s].in_progress++;
        } else if (st === 'todo' || st === 'chua-bat-dau') {
          counts[s].todo++;
        }
      }
    });

    return counts;
  }

  /**
   * Get single task by ID
   */
  getTaskById(taskId) {
    const all = this.getAllTasks();
    return all.find(t => t.id === taskId) || null;
  }

  /**
   * Create a new task (saved to memory, localStorage, and API)
   */
  async createTask(taskData) {
    const now = Math.floor(Date.now() / 1000);
    const taskId = taskData.id || `tsk-custom-${Date.now()}`;
    const fullTeamId = this.toFullTeamId(taskData.team_id);

    const newTask = {
      id: taskId,
      title: taskData.title || 'Nhiệm vụ mới',
      team_id: fullTeamId,
      project_id: taskData.project_id || null,
      description: taskData.description || '',
      status: taskData.status || 'in_progress',
      priority: taskData.priority || 'medium',
      assigned_to: taskData.assigned_to || null,
      assignee_names: Array.isArray(taskData.assignee_names) && taskData.assignee_names.length > 0 
        ? taskData.assignee_names 
        : ['Chưa giao'],
      due_date: taskData.due_date || new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
      created_at: now,
      updated_at: now
    };

    // 1. In-memory update
    if (!this._tasksCache) this.getAllTasks();
    this._tasksCache.unshift(newTask);

    // 2. Persist to localStorage
    try {
      const customTasks = JSON.parse(localStorage.getItem('100re_custom_tasks') || '[]');
      customTasks.unshift(newTask);
      localStorage.setItem('100re_custom_tasks', JSON.stringify(customTasks));
    } catch (e) {}

    // 3. Emit event for UI synchronization
    this._dispatchUpdate('create', newTask);

    // 4. Send to Backend API
    try {
      await API.post('/api/tasks', newTask);
    } catch (e) {
      console.warn('Backend task create sync note:', e);
    }

    return newTask;
  }

  /**
   * Update task fields (e.g. status, priority, title, due_date)
   */
  async updateTask(taskId, delta) {
    const now = Math.floor(Date.now() / 1000);
    const task = this.getTaskById(taskId);
    if (!task) return null;

    Object.assign(task, delta, { updated_at: now });

    // 1. Persist override to localStorage
    try {
      const overrides = JSON.parse(localStorage.getItem('100re_tasks_overrides') || '{}');
      overrides[taskId] = { ...(overrides[taskId] || {}), ...delta, updated_at: now };
      localStorage.setItem('100re_tasks_overrides', JSON.stringify(overrides));

      // Also update custom tasks if it was a custom one
      const customTasks = JSON.parse(localStorage.getItem('100re_custom_tasks') || '[]');
      const cIdx = customTasks.findIndex(t => t.id === taskId);
      if (cIdx >= 0) {
        customTasks[cIdx] = { ...customTasks[cIdx], ...delta, updated_at: now };
        localStorage.setItem('100re_custom_tasks', JSON.stringify(customTasks));
      }
    } catch (e) {}

    // 2. Emit event
    this._dispatchUpdate('update', { taskId, delta, task });

    // 3. Send to API
    try {
      await API.patch(`/api/tasks/${taskId}`, delta);
    } catch (e) {
      try {
        await API.put(`/api/tasks/${taskId}`, task);
      } catch (err) {}
    }

    return task;
  }

  /**
   * Delete a task
   */
  async deleteTask(taskId) {
    // 1. Remove from memory
    if (this._tasksCache) {
      this._tasksCache = this._tasksCache.filter(t => t.id !== taskId);
    }

    // 2. Blacklist in localStorage
    try {
      let deletedIds = JSON.parse(localStorage.getItem('100re_deleted_task_ids') || '[]');
      if (!Array.isArray(deletedIds)) deletedIds = [];
      if (!deletedIds.includes(taskId)) deletedIds.push(taskId);
      localStorage.setItem('100re_deleted_task_ids', JSON.stringify(deletedIds));

      // Remove from custom tasks
      let customTasks = JSON.parse(localStorage.getItem('100re_custom_tasks') || '[]');
      customTasks = customTasks.filter(t => t.id !== taskId);
      localStorage.setItem('100re_custom_tasks', JSON.stringify(customTasks));

      // Remove from overrides
      let overrides = JSON.parse(localStorage.getItem('100re_tasks_overrides') || '{}');
      delete overrides[taskId];
      localStorage.setItem('100re_tasks_overrides', JSON.stringify(overrides));
    } catch (e) {}

    // 3. Emit update
    this._dispatchUpdate('delete', { taskId });

    // 4. API Delete
    try {
      await API.delete(`/api/tasks/${taskId}`);
    } catch (e) {
      console.warn('Backend task delete sync note:', e);
    }

    return true;
  }

  _dispatchUpdate(action, detail) {
    try {
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('100re:tasks-updated', { detail: { action, ...detail } }));
      }
    } catch (e) {}
  }
}

export const TaskStore = new TaskStoreService();
if (typeof window !== 'undefined') {
  window.TaskStore = TaskStore;
}
