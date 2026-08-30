/**
 * 100RE LAB WORKSPACE — Single Page Application (SPA) Main Orchestrator
 * Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive 5TB (File Storage)
 */

import { API } from './api.js';
import { Auth } from './auth.js';
import { openModal, closeModal, showToast, formatDate, formatBytes, renderPriorityBadge, renderStatusBadge, escapeHtml } from './components.js';

import { renderDashboard } from './views/dashboardView.js';
import { renderTeams } from './views/teamsView.js';
import { renderProjects } from './views/projectsView.js';
import { renderTasks } from './views/tasksView.js';
import { renderDatasets } from './views/datasetsView.js';
import { renderDocuments } from './views/documentsView.js';
import { renderMembers } from './views/membersView.js';
import { renderActivity } from './views/activityView.js';
import { renderAdmin } from './views/adminView.js';

// Application State
let activeTaskId = null;
let currentTeamsCache = [];
let currentProjectsCache = [];
let currentUsersCache = [];

document.addEventListener('DOMContentLoaded', async () => {
  await initApp();
});

async function initApp() {
  // 1. Initialize Auth
  await Auth.init();

  // 2. Cache Teams & Users for dropdowns
  try {
    const tData = await API.get('/api/teams');
    currentTeamsCache = tData.teams || [];
    const uData = await API.get('/api/members');
    currentUsersCache = uData.users || uData.members || [];
  } catch (e) {
    console.warn('Initial cache fetch warning:', e);
  }

  // 3. Bind Global Navigation & Routing
  window.addEventListener('hashchange', handleRouting);
  bindGlobalEvents();
  populateDevSwitcher();

  // 4. Initial Route
  handleRouting();
}

function handleRouting() {
  const hash = window.location.hash.slice(1) || 'dashboard';
  const [routePath, queryString] = hash.split('?');
  const pathParts = routePath.split('/').filter(Boolean); // ['teams', 'pv']
  const rootRoute = pathParts[0] || 'dashboard';
  const paramId = pathParts[1] || null;

  const queryParams = new URLSearchParams(queryString || '');
  const filterParam = queryParams.get('filter');

  // Update Breadcrumb & Active Nav
  updateNav(rootRoute, paramId);

  const container = document.getElementById('workspaceContent');
  if (!container) return;

  // Close mobile sidebar if open
  closeMobileSidebar();

  // Authentication barrier
  if (!Auth.getUser()) {
    container.innerHTML = `
      <div class="ws-empty-state" style="max-width:480px; margin:60px auto; text-align:center; padding:40px 24px; background:#fff; border-radius:12px; border:1px solid var(--ws-border); box-shadow:var(--ws-shadow-md);">
        <i class="fa-solid fa-lock" style="font-size:3rem; color:#f59e0b; margin-bottom:16px;"></i>
        <h2 style="font-size:1.3rem; color:var(--ws-dark); margin-bottom:8px; font-weight:700;">Yêu cầu Đăng nhập</h2>
        <p style="color:var(--ws-text-muted); font-size:0.875rem; line-height:1.5; margin-bottom:24px;">
          Khu vực 100RE Lab Workspace chỉ dành cho thành viên nội bộ phòng nghiên cứu. Vui lòng đăng nhập từ trang chủ để tiếp tục.
        </p>
        <div style="display:flex; gap:12px; justify-content:center;">
          <a href="../index.html" class="btn-ws-primary" style="display:inline-flex; align-items:center; gap:6px;">
            <i class="fa-solid fa-right-to-bracket"></i> Đăng nhập tại Trang chủ
          </a>
        </div>
      </div>
    `;
    return;
  }

  switch (rootRoute) {
    case 'dashboard':
      renderDashboard(container);
      break;
    case 'teams':
      renderTeams(container, paramId);
      break;
    case 'projects':
      renderProjects(container, paramId);
      break;
    case 'tasks':
      renderTasks(container, filterParam);
      break;
    case 'datasets':
      renderDatasets(container);
      break;
    case 'documents':
      renderDocuments(container);
      break;
    case 'members':
      renderMembers(container);
      break;
    case 'activity':
      renderActivity(container);
      break;
    case 'admin':
      renderAdmin(container);
      break;
    default:
      renderDashboard(container);
      break;
  }
}

function updateNav(rootRoute, paramId) {
  // Update sidebar active link
  document.querySelectorAll('.ws-nav-link').forEach(link => {
    const linkRoute = link.getAttribute('data-route');
    if (linkRoute === rootRoute || (rootRoute === 'tasks' && linkRoute === 'my-tasks' && window.location.hash.includes('filter=me'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update breadcrumb
  const crumb = document.getElementById('wsCrumbCurrent');
  if (crumb) {
    let title = rootRoute.toUpperCase();
    if (rootRoute === 'dashboard') title = 'Dashboard';
    if (rootRoute === 'teams') title = paramId ? `Team: ${paramId.toUpperCase()}` : 'Research Teams';
    if (rootRoute === 'projects') title = paramId ? `Project Details` : 'Projects';
    if (rootRoute === 'tasks') title = window.location.hash.includes('filter=me') ? 'My Tasks' : 'All Tasks / Kanban';
    if (rootRoute === 'datasets') title = 'Research Data (Google Drive)';
    if (rootRoute === 'documents') title = 'Documents (Google Drive)';
    if (rootRoute === 'members') title = 'Workspace Users & Profiles';
    if (rootRoute === 'activity') title = 'Activity Log';
    if (rootRoute === 'admin') title = 'Administration';

    crumb.textContent = title;
  }
}

function bindGlobalEvents() {
  // Sidebar Mobile Toggle
  const toggleBtn = document.getElementById('wsMobileToggle');
  const closeBtn = document.getElementById('wsSidebarCloseBtn');
  const overlay = document.getElementById('wsSidebarOverlay');
  const sidebar = document.getElementById('wsSidebar');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar?.classList.add('open');
      overlay?.classList.add('show');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileSidebar);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMobileSidebar);
  }

  // Quick Action New Task Button
  const btnQuickTask = document.getElementById('btnQuickNewTask');
  if (btnQuickTask) {
    btnQuickTask.addEventListener('click', () => window.openNewTaskModal());
  }

  // Close modal buttons
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.ws-modal-backdrop.show').forEach(m => m.classList.remove('show'));
      document.body.style.overflow = '';
    }
  });

  // Dev Role Switcher
  const devSelect = document.getElementById('devRoleSelect');
  if (devSelect) {
    devSelect.addEventListener('change', async (e) => {
      const newUserId = e.target.value;
      localStorage.setItem('ws_dev_user_id', newUserId);
      await Auth.init();
      showToast(`Switched identity to: ${Auth.getUser()?.display_name || Auth.getUser()?.name}`);
      handleRouting();
    });
  }

  // Task Form Submit
  const formTask = document.getElementById('formTask');
  if (formTask) {
    formTask.addEventListener('submit', handleTaskSubmit);
  }

  // Project Form Submit
  const formProj = document.getElementById('formProject');
  if (formProj) {
    formProj.addEventListener('submit', handleProjectSubmit);
  }

  // Document Form Submit
  const formDoc = document.getElementById('formDocument');
  if (formDoc) {
    formDoc.addEventListener('submit', handleDocumentSubmit);
  }

  // Dataset Form Submit
  const formDs = document.getElementById('formDataset');
  if (formDs) {
    formDs.addEventListener('submit', handleDatasetSubmit);
  }

  // Add Comment Form Submit
  const formComment = document.getElementById('formAddComment');
  if (formComment) {
    formComment.addEventListener('submit', handleCommentSubmit);
  }

  // Task Detail Status Buttons
  document.querySelectorAll('.btn-status-action').forEach(btn => {
    btn.addEventListener('click', async () => {
      const newStatus = btn.getAttribute('data-status');
      if (activeTaskId && newStatus) {
        try {
          await API.patch(`/api/tasks/${activeTaskId}`, { status: newStatus });
          showToast(`Task status updated to: ${newStatus.toUpperCase()}`);
          window.openTaskDetailModal(activeTaskId);
          handleRouting();
        } catch (err) {
          showToast(err.message, true);
        }
      }
    });
  });

  // Task Detail Delete Button
  const btnDeleteTask = document.getElementById('btnDeleteTaskFromDetail');
  if (btnDeleteTask) {
    btnDeleteTask.addEventListener('click', async () => {
      if (activeTaskId && confirm('Are you sure you want to delete this task?')) {
        try {
          await API.delete(`/api/tasks/${activeTaskId}`);
          showToast('Task deleted.');
          closeModal('modalTaskDetail');
          handleRouting();
        } catch (err) {
          showToast(err.message, true);
        }
      }
    });
  }

  // Task Detail Edit Button
  const btnEditTask = document.getElementById('btnEditTaskFromDetail');
  if (btnEditTask) {
    btnEditTask.addEventListener('click', async () => {
      if (activeTaskId) {
        closeModal('modalTaskDetail');
        window.openEditTaskModal(activeTaskId);
      }
    });
  }
}

function closeMobileSidebar() {
  document.getElementById('wsSidebar')?.classList.remove('open');
  document.getElementById('wsSidebarOverlay')?.classList.remove('show');
}

function populateDevSwitcher() {
  const devSelect = document.getElementById('devRoleSelect');
  const stored = localStorage.getItem('ws_dev_user_id');
  if (devSelect && stored) {
    devSelect.value = stored;
  }
}

// ==========================================================
// GLOBAL MODAL ACTIONS (Exported to window)
// ==========================================================

window.openNewTaskModal = async function(preselectedTeamId = null, preselectedProjectId = null) {
  const modalTitle = document.getElementById('modalTaskTitle');
  const form = document.getElementById('formTask');
  const idInput = document.getElementById('taskFormId');
  const teamSelect = document.getElementById('taskFormTeam');
  const projSelect = document.getElementById('taskFormProject');
  const assigneeSelect = document.getElementById('taskFormAssignee');
  const statusGroup = document.getElementById('taskStatusGroup');

  if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-list-check"></i> Create New Task';
  if (form) form.reset();
  if (idInput) idInput.value = '';
  if (statusGroup) statusGroup.style.display = 'none';

  populateSelect(teamSelect, currentTeamsCache, preselectedTeamId);
  populateUserSelect(assigneeSelect, currentUsersCache);
  await updateProjectDropdown(preselectedTeamId || teamSelect.value, preselectedProjectId);

  teamSelect.onchange = async () => {
    await updateProjectDropdown(teamSelect.value);
  };

  openModal('modalTask');
};

window.openEditTaskModal = async function(taskId) {
  try {
    const res = await API.get(`/api/tasks/${taskId}`);
    const task = res.task;

    const modalTitle = document.getElementById('modalTaskTitle');
    const idInput = document.getElementById('taskFormId');
    const titleInput = document.getElementById('taskFormTitle');
    const prioSelect = document.getElementById('taskFormPriority');
    const teamSelect = document.getElementById('taskFormTeam');
    const projSelect = document.getElementById('taskFormProject');
    const assigneeSelect = document.getElementById('taskFormAssignee');
    const dueInput = document.getElementById('taskFormDueDate');
    const statusSelect = document.getElementById('taskFormStatus');
    const statusGroup = document.getElementById('taskStatusGroup');
    const descInput = document.getElementById('taskFormDescription');

    if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-pen"></i> Edit Task';
    if (idInput) idInput.value = task.id;
    if (titleInput) titleInput.value = task.title;
    if (prioSelect) prioSelect.value = task.priority;
    if (dueInput) dueInput.value = task.due_date || '';
    if (descInput) descInput.value = task.description || '';
    if (statusSelect) statusSelect.value = task.status;
    if (statusGroup) statusGroup.style.display = 'block';

    populateSelect(teamSelect, currentTeamsCache, task.team_id);
    populateUserSelect(assigneeSelect, currentUsersCache, task.assigned_to);
    await updateProjectDropdown(task.team_id, task.project_id);

    openModal('modalTask');
  } catch (err) {
    showToast(err.message, true);
  }
};

window.openTaskDetailModal = async function(taskId) {
  activeTaskId = taskId;
  const modal = document.getElementById('modalTaskDetail');
  if (!modal) return;

  try {
    const res = await API.get(`/api/tasks/${taskId}`);
    const { task, comments } = res;

    // Header badges
    const statusBadge = document.getElementById('taskDetailStatusBadge');
    const priorityBadge = document.getElementById('taskDetailPriorityBadge');
    if (statusBadge) {
      statusBadge.className = `ws-badge ws-badge-${task.status}`;
      statusBadge.textContent = task.status === 'in_progress' ? 'IN PROGRESS' : task.status.toUpperCase();
    }
    if (priorityBadge) {
      priorityBadge.className = `ws-badge ws-badge-${task.priority}`;
      priorityBadge.textContent = task.priority.toUpperCase();
    }

    // Title & Meta
    document.getElementById('taskDetailTitle').textContent = task.title;
    document.getElementById('taskDetailTeam').textContent = task.team?.name || 'General';
    document.getElementById('taskDetailProject').textContent = task.project?.name || 'No Project';
    document.getElementById('taskDetailDueDate').textContent = task.due_date ? formatDate(task.due_date) : 'No deadline';
    document.getElementById('taskDetailDesc').textContent = task.description || 'No description provided for this research task.';

    // Assignee
    const avatarEl = document.getElementById('taskDetailAssigneeAvatar');
    const nameEl = document.getElementById('taskDetailAssigneeName');
    if (avatarEl) avatarEl.src = task.assignee?.avatar_url || 'assets/images/logo.jpg';
    if (nameEl) nameEl.textContent = task.assignee?.display_name || task.assignee?.name || 'Unassigned';

    // Admin / Edit buttons visibility
    const actionsBlock = document.getElementById('taskDetailAdminActions');
    if (actionsBlock) {
      actionsBlock.style.display = task.canEdit ? 'block' : 'none';
    }

    // Comments thread
    const commentCountEl = document.getElementById('taskDetailCommentCount');
    const threadEl = document.getElementById('taskCommentThread');
    if (commentCountEl) commentCountEl.textContent = comments.length;

    if (threadEl) {
      if (comments.length === 0) {
        threadEl.innerHTML = '<p style="font-size:0.85rem; color:var(--ws-text-light); padding:10px 0;">No comments or research updates posted yet.</p>';
      } else {
        threadEl.innerHTML = comments.map(c => `
          <div class="ws-comment-item">
            <img src="${c.user?.avatar_url || 'assets/images/logo.jpg'}" class="ws-avatar-sm" alt="Avatar">
            <div class="ws-comment-content">
              <div class="ws-comment-header">
                <span class="ws-comment-author">${escapeHtml(c.user?.display_name || c.user?.name || 'Member')}</span>
                <span class="ws-comment-time">${formatDate(c.created_at)}</span>
              </div>
              <div class="ws-comment-text">${escapeHtml(c.content)}</div>
            </div>
          </div>
        `).join('');
      }
    }

    openModal('modalTaskDetail');
  } catch (err) {
    showToast(err.message, true);
  }
};

window.openNewProjectModal = function(preselectedTeamId = null) {
  const form = document.getElementById('formProject');
  const teamSelect = document.getElementById('projectFormTeam');
  if (form) form.reset();
  populateSelect(teamSelect, currentTeamsCache, preselectedTeamId);
  openModal('modalProject');
};

window.openUploadDocumentModal = function(preselectedTeamId = null, preselectedProjectId = null) {
  const form = document.getElementById('formDocument');
  const teamSelect = document.getElementById('docFormTeam');
  const projSelect = document.getElementById('docFormProject');
  if (form) form.reset();

  populateSelect(teamSelect, currentTeamsCache, preselectedTeamId);
  updateProjectDropdown(preselectedTeamId || teamSelect.value, preselectedProjectId, projSelect);

  teamSelect.onchange = () => {
    updateProjectDropdown(teamSelect.value, null, projSelect);
  };

  openModal('modalDocument');
};

window.openUploadDatasetModal = function(preselectedTeamId = null, preselectedProjectId = null) {
  const form = document.getElementById('formDataset');
  const teamSelect = document.getElementById('dsFormTeam');
  const projSelect = document.getElementById('dsFormProject');
  if (form) form.reset();

  populateSelect(teamSelect, currentTeamsCache, preselectedTeamId);
  updateProjectDropdown(preselectedTeamId || teamSelect.value, preselectedProjectId, projSelect);

  teamSelect.onchange = () => {
    updateProjectDropdown(teamSelect.value, null, projSelect);
  };

  openModal('modalDataset');
};

window.downloadResource = function(entityType, id, filename) {
  API.downloadFile(entityType, id, filename);
};

window.openDriveFile = async function(entityType, id) {
  try {
    const devUserId = localStorage.getItem('ws_dev_user_id') || 'usr-sup-01';
    const res = await fetch(`/api/files/${entityType}/${id}/open`, {
      headers: {
        'X-Workspace-Client': 'true',
        'X-Dev-User-Id': devUserId
      }
    });
    if (!res.ok) throw new Error('Cannot open file: Permission denied.');
    const data = await res.json();
    if (data.web_view_link) {
      window.open(data.web_view_link, '_blank');
    }
  } catch (err) {
    showToast(err.message, true);
  }
};

// ==========================================================
// FORM SUBMISSION HANDLERS
// ==========================================================

async function handleTaskSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('taskFormId').value;
  const title = document.getElementById('taskFormTitle').value.trim();
  const priority = document.getElementById('taskFormPriority').value;
  const team_id = document.getElementById('taskFormTeam').value;
  const project_id = document.getElementById('taskFormProject').value || null;
  const assigned_to = document.getElementById('taskFormAssignee').value || null;
  const due_date = document.getElementById('taskFormDueDate').value || null;
  const description = document.getElementById('taskFormDescription').value.trim();
  const status = document.getElementById('taskFormStatus').value || 'todo';

  try {
    if (id) {
      await API.patch(`/api/tasks/${id}`, {
        title, priority, team_id, project_id, assigned_to, due_date, description, status
      });
      showToast('Task updated successfully!');
    } else {
      await API.post('/api/tasks', {
        title, priority, team_id, project_id, assigned_to, due_date, description
      });
      showToast('New task created successfully!');
    }

    closeModal('modalTask');
    handleRouting();
  } catch (err) {
    showToast(err.message, true);
  }
}

async function handleProjectSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('projectFormName').value.trim();
  const team_id = document.getElementById('projectFormTeam').value;
  const status = document.getElementById('projectFormStatus').value;
  const start_date = document.getElementById('projectFormStartDate').value || null;
  const end_date = document.getElementById('projectFormEndDate').value || null;
  const progress = Number(document.getElementById('projectFormProgress').value) || 0;
  const description = document.getElementById('projectFormDesc').value.trim();

  try {
    await API.post('/api/projects', {
      name, team_id, status, start_date, end_date, progress, description
    });
    showToast('New research project created on Google Drive!');
    closeModal('modalProject');
    handleRouting();
  } catch (err) {
    showToast(err.message, true);
  }
}

async function handleDocumentSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('docFormName').value.trim();
  const team_id = document.getElementById('docFormTeam').value;
  const project_id = document.getElementById('docFormProject').value || null;
  const fileInput = document.getElementById('docFormFile');
  const tags = document.getElementById('docFormTags').value.trim();
  const description = document.getElementById('docFormDesc').value.trim();

  if (!fileInput.files || fileInput.files.length === 0) {
    showToast('Please select a file to upload.', true);
    return;
  }

  const file = fileInput.files[0];
  const saveBtn = document.getElementById('btnSaveDocument');
  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading to Google Drive...';
  }

  try {
    // 1. Upload to Google Drive API
    const uploadRes = await API.uploadFile(file, { teamId: team_id, projectId: project_id || 'general' });
    
    // 2. Save metadata to D1
    await API.post('/api/documents', {
      name,
      team_id,
      project_id,
      file_name: file.name,
      mime_type: file.type || 'application/pdf',
      file_size: file.size,
      storage_provider: 'google_drive',
      drive_file_id: uploadRes.drive_file_id,
      drive_folder_id: uploadRes.drive_folder_id,
      tags,
      description
    });

    showToast('Document uploaded to Google Drive successfully!');
    closeModal('modalDocument');
    handleRouting();
  } catch (err) {
    showToast(err.message, true);
  } finally {
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Upload Document';
    }
  }
}

async function handleDatasetSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('dsFormName').value.trim();
  const team_id = document.getElementById('dsFormTeam').value;
  const project_id = document.getElementById('dsFormProject').value || null;
  const source = document.getElementById('dsFormSource').value.trim();
  const data_type = document.getElementById('dsFormType').value;
  const resolution = document.getElementById('dsFormResolution').value.trim();
  const format = document.getElementById('dsFormFormat').value;
  const fileInput = document.getElementById('dsFormFile');
  const tags = document.getElementById('dsFormTags').value.trim();
  const description = document.getElementById('dsFormDesc').value.trim();

  if (!fileInput.files || fileInput.files.length === 0) {
    showToast('Please select a dataset file to upload.', true);
    return;
  }

  const file = fileInput.files[0];
  const saveBtn = document.getElementById('btnSaveDataset');
  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading to Google Drive...';
  }

  try {
    // 1. Upload to Google Drive API
    const uploadRes = await API.uploadFile(file, { teamId: team_id, projectId: project_id || 'general' });

    // 2. Save dataset metadata to D1
    await API.post('/api/datasets', {
      name,
      team_id,
      project_id,
      source,
      data_type,
      resolution,
      format,
      file_size: file.size,
      storage_provider: 'google_drive',
      drive_file_id: uploadRes.drive_file_id,
      drive_folder_id: uploadRes.drive_folder_id,
      tags,
      description
    });

    showToast('Research dataset uploaded to Google Drive successfully!');
    closeModal('modalDataset');
    handleRouting();
  } catch (err) {
    showToast(err.message, true);
  } finally {
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Upload Dataset';
    }
  }
}

async function handleCommentSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('commentInput');
  const content = input.value.trim();
  if (!content || !activeTaskId) return;

  try {
    await API.post(`/api/tasks/${activeTaskId}/comments`, { content });
    input.value = '';
    window.openTaskDetailModal(activeTaskId);
  } catch (err) {
    showToast(err.message, true);
  }
}

// Helpers
function populateSelect(selectEl, items, selectedVal = null) {
  if (!selectEl) return;
  selectEl.innerHTML = '';
  items.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = item.name;
    if (selectedVal && item.id === selectedVal) opt.selected = true;
    selectEl.appendChild(opt);
  });
}

function populateUserSelect(selectEl, users, selectedVal = null) {
  if (!selectEl) return;
  selectEl.innerHTML = '<option value="">-- Unassigned --</option>';
  users.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.id;
    opt.textContent = `${u.display_name || u.name} (${u.role.replace('_', ' ')})`;
    if (selectedVal && u.id === selectedVal) opt.selected = true;
    selectEl.appendChild(opt);
  });
}

async function updateProjectDropdown(teamId, selectedProjectId = null, targetSelect = null) {
  const select = targetSelect || document.getElementById('taskFormProject');
  if (!select) return;

  select.innerHTML = '<option value="">-- General Team Resource --</option>';
  if (!teamId) return;

  try {
    const res = await API.get('/api/projects', { team: teamId });
    const projs = res.projects || [];
    projs.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.name;
      if (selectedProjectId && p.id === selectedProjectId) opt.selected = true;
      select.appendChild(opt);
    });
  } catch (e) {
    console.warn('Projects dropdown update error:', e);
  }
}
