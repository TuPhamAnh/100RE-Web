/**
 * 100RE LAB WORKSPACE — Single Page Application (SPA) Main Orchestrator (SciNote ELN Compatible)
 * Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive 5TB (File Storage)
 */

import { API } from './api.js';
import { Auth } from './auth.js';
import { openModal, closeModal, showToast, formatDate, formatBytes, renderPriorityBadge, renderStatusBadge, escapeHtml } from './components.js';

import { renderDashboard } from './views/dashboardView.js';
import { renderExperiments } from './views/experimentsView.js';
import { renderWorkflows } from './views/workflowsView.js';
import { renderProtocols } from './views/protocolsView.js';
import { renderInventory } from './views/inventoryView.js';
import { renderSignoffs } from './views/signoffView.js';
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
    const uData = await API.get('/api/workspace/users');
    currentUsersCache = uData.users || [];
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
  const pathParts = routePath.split('/').filter(Boolean);
  const rootRoute = pathParts[0] || 'dashboard';
  const paramId = pathParts[1] || null;

  const queryParams = new URLSearchParams(queryString || '');
  const filterParam = queryParams.get('filter');
  const expParam = queryParams.get('expId') || queryParams.get('projectId');

  // Update Breadcrumb & Active Nav
  updateNav(rootRoute, paramId);

  const container = document.getElementById('workspaceContent');
  if (!container) return;

  closeMobileSidebar();

  switch (rootRoute) {
    case 'dashboard':
      renderDashboard(container);
      break;
    case 'experiments':
      renderExperiments(container);
      break;
    case 'workflows':
      renderWorkflows(container, expParam);
      break;
    case 'protocols':
      renderProtocols(container);
      break;
    case 'inventory':
      renderInventory(container);
      break;
    case 'signoffs':
      renderSignoffs(container);
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

function updateNav(route, paramId) {
  const crumb = document.getElementById('wsCrumbCurrent');
  if (crumb) {
    const titles = {
      'dashboard': 'Dashboard',
      'experiments': 'Projects & Experiments',
      'workflows': 'Visual Workflows',
      'protocols': 'Protocols & SOPs',
      'inventory': 'Lab Inventory & Instruments',
      'signoffs': 'Sign-offs & Approvals',
      'teams': paramId ? `Team: ${paramId.toUpperCase()}` : 'Research Teams',
      'projects': paramId ? `Project: ${paramId}` : 'Projects',
      'tasks': 'Tasks & Protocols',
      'datasets': 'Google Drive Datasets',
      'documents': 'Google Drive Documents',
      'members': 'Members & Users',
      'activity': 'Audit Trail',
      'admin': 'Administration'
    };
    crumb.textContent = titles[route] || 'Workspace';
  }

  document.querySelectorAll('.ws-nav-link').forEach(link => {
    const linkRoute = link.getAttribute('data-route');
    if (linkRoute === route || (route === 'tasks' && linkRoute === 'my-tasks' && window.location.hash.includes('filter=me'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function bindGlobalEvents() {
  // Mobile sidebar toggle
  document.getElementById('wsMobileToggle')?.addEventListener('click', () => {
    document.getElementById('wsSidebar')?.classList.toggle('open');
    document.getElementById('wsSidebarOverlay')?.classList.toggle('show');
  });

  document.getElementById('wsSidebarCloseBtn')?.addEventListener('click', closeMobileSidebar);
  document.getElementById('wsSidebarOverlay')?.addEventListener('click', closeMobileSidebar);

  // Quick Action New Task
  document.getElementById('btnQuickNewTask')?.addEventListener('click', () => {
    window.openNewTaskModal();
  });

  // Modal Close buttons
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  // Dev switcher
  const devSelect = document.getElementById('devRoleSelect');
  if (devSelect) {
    devSelect.addEventListener('change', async (e) => {
      const selectedUserId = e.target.value;
      localStorage.setItem('ws_dev_user_id', selectedUserId);
      await Auth.switchDevUser(selectedUserId);
      showToast('Đã chuyển sang vai trò: ' + devSelect.options[devSelect.selectedIndex].text);
      handleRouting();
    });
  }

  // SciNote Tab buttons inside Task Detail Modal
  document.querySelectorAll('.ws-tab-btn').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      document.querySelectorAll('.ws-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.ws-tab-pane').forEach(p => p.style.display = 'none');

      tabBtn.classList.add('active');
      const targetPaneId = tabBtn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetPaneId);
      if (targetPane) targetPane.style.display = 'block';
    });
  });

  // Submit comment inside modal
  const formComment = document.getElementById('formAddComment');
  if (formComment) {
    formComment.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('inputCommentText');
      if (!input || !input.value.trim() || !activeTaskId) return;

      try {
        await API.post(`/api/tasks/${activeTaskId}/comments`, { content: input.value.trim() });
        input.value = '';
        showToast('Đã thêm thảo luận thành công.');
        window.openTaskDetail(activeTaskId);
      } catch (err) {
        showToast(err.message, true);
      }
    });
  }

  // Create/Edit Task Form
  const formTask = document.getElementById('formTask');
  if (formTask) {
    formTask.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('taskFormId').value;
      const title = document.getElementById('taskFormTitle').value.trim();
      const team_id = document.getElementById('taskFormTeam').value;
      const project_id = document.getElementById('taskFormProject').value || null;
      const assigned_to = document.getElementById('taskFormAssignee').value || null;
      const priority = document.getElementById('taskFormPriority').value;
      const status = document.getElementById('taskFormStatus').value;
      const due_date = document.getElementById('taskFormDueDate').value || null;
      const description = document.getElementById('taskFormDesc').value.trim();

      try {
        if (id) {
          await API.put(`/api/tasks/${id}`, { title, team_id, project_id, assigned_to, priority, status, due_date, description });
          showToast('Cập nhật nhiệm vụ thành công!');
        } else {
          await API.post('/api/tasks', { title, team_id, project_id, assigned_to, priority, status, due_date, description });
          showToast('Tạo nhiệm vụ thành công!');
        }
        closeModal('modalTask');
        handleRouting();
      } catch (err) {
        showToast(err.message, true);
      }
    });
  }

  // Create Project Form
  const formProj = document.getElementById('formProject');
  if (formProj) {
    formProj.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('projectFormName').value.trim();
      const team_id = document.getElementById('projectFormTeam').value;
      const status = document.getElementById('projectFormStatus').value;
      const start_date = document.getElementById('projectFormStartDate').value || null;
      const end_date = document.getElementById('projectFormEndDate').value || null;
      const progress = parseInt(document.getElementById('projectFormProgress').value, 10) || 0;
      const description = document.getElementById('projectFormDesc').value.trim();

      try {
        await API.post('/api/projects', { name, team_id, status, start_date, end_date, progress, description });
        showToast('Tạo đề tài nghiên cứu thành công (Thư mục Google Drive đã tạo)!');
        closeModal('modalProject');
        handleRouting();
      } catch (err) {
        showToast(err.message, true);
      }
    });
  }

  // Upload Document Form
  const formDoc = document.getElementById('formDocument');
  if (formDoc) {
    formDoc.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fileInput = document.getElementById('docFormFile');
      if (!fileInput.files || fileInput.files.length === 0) {
        showToast('Vui lòng chọn file.', true);
        return;
      }
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
      formData.append('type', 'document');
      formData.append('name', document.getElementById('docFormName').value.trim());
      formData.append('team_id', document.getElementById('docFormTeam').value);
      formData.append('project_id', document.getElementById('docFormProject').value || '');
      formData.append('tags', document.getElementById('docFormTags').value || '');
      formData.append('description', document.getElementById('docFormDesc').value || '');

      try {
        showToast('Đang tải lên Google Drive 5TB...');
        await API.upload(formData);
        showToast('Tải tài liệu lên Google Drive thành công!');
        closeModal('modalDocument');
        handleRouting();
      } catch (err) {
        showToast(err.message, true);
      }
    });
  }

  // Upload Dataset Form
  const formDs = document.getElementById('formDataset');
  if (formDs) {
    formDs.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fileInput = document.getElementById('dsFormFile');
      if (!fileInput.files || fileInput.files.length === 0) {
        showToast('Vui lòng chọn file dataset.', true);
        return;
      }
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
      formData.append('type', 'dataset');
      formData.append('name', document.getElementById('dsFormName').value.trim());
      formData.append('team_id', document.getElementById('dsFormTeam').value);
      formData.append('project_id', document.getElementById('dsFormProject').value || '');
      formData.append('source', document.getElementById('dsFormSource').value || '');
      formData.append('data_type', document.getElementById('dsFormType').value || 'time-series');
      formData.append('resolution', document.getElementById('dsFormResolution').value || '');
      formData.append('format', document.getElementById('dsFormFormat').value || 'CSV');
      formData.append('tags', document.getElementById('dsFormTags').value || '');
      formData.append('description', document.getElementById('dsFormDesc').value || '');

      try {
        showToast('Đang tải dataset lên Google Drive 5TB...');
        await API.upload(formData);
        showToast('Tải dataset lên Google Drive thành công!');
        closeModal('modalDataset');
        handleRouting();
      } catch (err) {
        showToast(err.message, true);
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
// SCINOTE ELECTRONIC LAB SHEET (Task Details & Protocols)
// ==========================================================
window.openTaskDetail = async function(taskId) {
  activeTaskId = taskId;
  const modal = document.getElementById('modalTaskDetail');
  if (!modal) return;

  try {
    const res = await API.get(`/api/tasks/${taskId}/scinote`);
    const { task, steps, notes, signOffs, comments, documents, datasets } = res;

    // Header badges
    document.getElementById('taskDetailTeam').textContent = task.team_id || 'Lab';
    const statusBadge = document.getElementById('taskDetailStatusBadge');
    if (statusBadge) {
      statusBadge.className = `ws-badge ws-badge-${task.status}`;
      statusBadge.textContent = (task.status || 'todo').toUpperCase();
    }
    const prioBadge = document.getElementById('taskDetailPriorityBadge');
    if (prioBadge) {
      prioBadge.className = `ws-badge ws-badge-${task.priority || 'medium'}`;
      prioBadge.textContent = (task.priority || 'medium').toUpperCase();
    }
    document.getElementById('taskDetailTitle').textContent = task.title;

    // Reset to tab 1
    document.querySelectorAll('.ws-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.ws-tab-pane').forEach(p => p.style.display = 'none');
    document.querySelector('[data-tab="tabTaskProtocol"]')?.classList.add('active');
    const tabProt = document.getElementById('tabTaskProtocol');
    if (tabProt) tabProt.style.display = 'block';

    // Tab 1: Protocol Steps Checklist
    const stepsListEl = document.getElementById('taskProtocolStepsList');
    if (stepsListEl) {
      if (steps.length === 0) {
        stepsListEl.innerHTML = `
          <div style="padding:16px; background:#f8fafc; border:1px dashed var(--ws-border); border-radius:6px; font-size:0.85rem; color:var(--ws-text-muted); text-align:center;">
            No protocol checklist steps added yet. Click "+ Add Step" to add experimental instructions.
          </div>
        `;
      } else {
        stepsListEl.innerHTML = steps.map((s, idx) => `
          <div style="display:flex; align-items:flex-start; gap:12px; padding:12px; background:${s.is_completed ? '#f0fdf4' : '#ffffff'}; border:1px solid ${s.is_completed ? '#86efac' : 'var(--ws-border)'}; border-radius:6px;">
            <input type="checkbox" ${s.is_completed ? 'checked' : ''} style="margin-top:4px; width:18px; height:18px; cursor:pointer;" data-step-id="${s.id}" class="protocol-step-checkbox">
            <div style="flex:1;">
              <strong style="font-size:0.9rem; color:${s.is_completed ? '#166534' : 'var(--ws-dark)'}; text-decoration:${s.is_completed ? 'line-through' : 'none'};">
                ${idx + 1}. ${escapeHtml(s.title)}
              </strong>
              ${s.instruction ? `<p style="font-size:0.8rem; color:var(--ws-text-muted); margin-top:2px;">${escapeHtml(s.instruction)}</p>` : ''}
            </div>
            ${s.is_completed ? '<span class="ws-badge ws-badge-done" style="font-size:0.7rem;"><i class="fa-solid fa-check"></i> Done</span>' : '<span class="ws-badge ws-badge-low" style="font-size:0.7rem;">Pending</span>'}
          </div>
        `).join('');

        // Step checkbox toggle
        stepsListEl.querySelectorAll('.protocol-step-checkbox').forEach(cb => {
          cb.addEventListener('change', async () => {
            const stepId = cb.getAttribute('data-step-id');
            const isCompleted = cb.checked;
            try {
              await API.patch(`/api/tasks/steps/${stepId}`, { is_completed: isCompleted });
              showToast(isCompleted ? 'Đã hoàn thành bước quy trình!' : 'Đã chuyển bước về chưa hoàn thành.');
              window.openTaskDetail(taskId);
            } catch (e) {
              showToast('Lỗi cập nhật: ' + e.message, true);
            }
          });
        });
      }
    }

    // Add Step button handler
    const btnAddStep = document.getElementById('btnAddStepBtn');
    if (btnAddStep) {
      btnAddStep.onclick = async () => {
        const title = prompt('Nhập tên bước thực nghiệm mới (Step Title):');
        if (!title) return;
        const instruction = prompt('Hướng dẫn thao tác kỹ thuật (Tùy chọn):') || '';
        try {
          await API.post(`/api/tasks/${taskId}/steps`, { title, instruction, step_order: steps.length + 1 });
          showToast('Đã thêm bước quy trình mới!');
          window.openTaskDetail(taskId);
        } catch (e) {
          showToast(e.message, true);
        }
      };
    }

    // Tab 2: Lab Observation Notes
    const notesListEl = document.getElementById('taskLabNotesList');
    if (notesListEl) {
      if (notes.length === 0) {
        notesListEl.innerHTML = `
          <div style="padding:16px; background:#f8fafc; border:1px dashed var(--ws-border); border-radius:6px; font-size:0.85rem; color:var(--ws-text-muted); text-align:center;">
            No experimental observations recorded. Click "+ New Observation Note" to document test results.
          </div>
        `;
      } else {
        notesListEl.innerHTML = notes.map(n => {
          let params = {};
          try { params = JSON.parse(n.parameters_json || '{}'); } catch(e) {}
          return `
            <div style="background:#ffffff; border:1px solid var(--ws-border); border-radius:6px; padding:14px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong style="font-size:0.925rem; color:var(--ws-dark);">${escapeHtml(n.title)}</strong>
                <span style="font-size:0.75rem; color:var(--ws-text-light);">${formatDate(n.created_at)}</span>
              </div>
              <p style="font-size:0.85rem; color:var(--ws-text-muted); line-height:1.5; margin-bottom:8px;">${escapeHtml(n.content)}</p>
              ${Object.keys(params).length > 0 ? `
                <div style="display:flex; flex-wrap:wrap; gap:8px; background:#f8fafc; padding:8px; border-radius:4px; font-size:0.775rem;">
                  ${Object.entries(params).map(([k, v]) => `
                    <span style="background:#fff; border:1px solid var(--ws-border); padding:2px 8px; border-radius:4px;">
                      <strong>${escapeHtml(k)}:</strong> ${escapeHtml(String(v))}
                    </span>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `;
        }).join('');
      }
    }

    // Add Note button handler
    const btnAddNote = document.getElementById('btnAddNoteBtn');
    if (btnAddNote) {
      btnAddNote.onclick = async () => {
        const title = prompt('Tiêu đề ghi chú quan sát:', 'Nhật ký đo đạc thực nghiệm');
        if (!title) return;
        const content = prompt('Nội dung ghi chú & hiện tượng quan sát:') || '';
        try {
          await API.post(`/api/tasks/${taskId}/notes`, { title, content, parameters: { "Recorded At": new Date().toLocaleTimeString() } });
          showToast('Đã ghi nhận nhật ký thí nghiệm!');
          window.openTaskDetail(taskId);
        } catch (e) {
          showToast(e.message, true);
        }
      };
    }

    // Tab 3: Google Drive Files
    const driveListEl = document.getElementById('taskDriveFilesList');
    if (driveListEl) {
      const allFiles = [...(datasets || []), ...(documents || [])];
      if (allFiles.length === 0) {
        driveListEl.innerHTML = '<p style="color:var(--ws-text-muted); font-size:0.85rem;">No files uploaded under this project in Google Drive 5TB yet.</p>';
      } else {
        driveListEl.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${allFiles.map(f => `
              <div style="padding:10px 14px; background:#f8fafc; border:1px solid var(--ws-border); border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:0.875rem; color:var(--ws-dark);">${escapeHtml(f.name)}</strong>
                  <div style="font-size:0.75rem; color:var(--ws-text-muted);"><i class="fa-brands fa-google-drive" style="color:#16a34a;"></i> Drive ID: <code>${escapeHtml(f.drive_file_id || 'Drive')}</code></div>
                </div>
                <a href="/api/files/${f.format ? 'datasets' : 'documents'}/${f.id}/download" target="_blank" class="btn-ws-ghost btn-ws-sm">
                  <i class="fa-solid fa-download"></i> Download
                </a>
              </div>
            `).join('')}
          </div>
        `;
      }
    }

    // Tab 4: Sign-off Section
    const signoffSection = document.getElementById('taskSignoffSection');
    if (signoffSection) {
      const user = Auth.getUser();
      const canSign = user && (user.isSupervisor || user.isLeader);
      const isDone = task.status === 'done';

      signoffSection.innerHTML = `
        <div style="background:#ffffff; border:1px solid var(--ws-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h4 style="font-size:1.05rem; font-weight:700; color:var(--ws-dark);"><i class="fa-solid fa-stamp" style="color:var(--ws-primary);"></i> Supervisor Electronic Sign-Off</h4>
            <span class="ws-badge ${isDone ? 'ws-badge-done' : 'ws-badge-alert'}">${isDone ? 'APPROVED & CERTIFIED' : 'PENDING REVIEW'}</span>
          </div>
          <p style="font-size:0.85rem; color:var(--ws-text-muted); line-height:1.5; margin-bottom:16px;">
            Formal approval certifying that all experimental protocol steps, data measurements, and mathematical validations meet 100RE Laboratory scientific standards.
          </p>

          ${signOffs.length > 0 ? `
            <div style="background:#f0fdf4; border:1px solid #86efac; border-radius:6px; padding:12px; margin-bottom:16px;">
              <strong style="font-size:0.85rem; color:#166534;"><i class="fa-solid fa-certificate"></i> Signed off by Assoc. Prof. Nguyen Duc Tuyen</strong>
              <p style="font-size:0.8rem; color:#166534; margin-top:4px;">"${escapeHtml(signOffs[0].comments || 'Verified and approved.')}"</p>
            </div>
          ` : ''}

          ${!isDone && canSign ? `
            <button class="btn-ws-primary" id="btnExecuteSignoff"><i class="fa-solid fa-signature"></i> Sign &amp; Approve Experiment Task</button>
          ` : ''}
        </div>
      `;

      const btnSign = signoffSection.querySelector('#btnExecuteSignoff');
      if (btnSign) {
        btnSign.onclick = async () => {
          const comments = prompt('Nhận xét phê duyệt của Thầy / Trưởng nhóm:', 'Kết quả thực nghiệm đã được kiểm tra đạt chuẩn.');
          if (comments === null) return;
          try {
            await API.post(`/api/tasks/${taskId}/sign-off`, { status: 'approved', comments });
            showToast('Đã ký duyệt thành công!');
            window.openTaskDetail(taskId);
          } catch (e) {
            showToast(e.message, true);
          }
        };
      }
    }

    // Tab 5: Comments thread
    const commentsListEl = document.getElementById('taskDetailCommentsList');
    if (commentsListEl) {
      if (comments.length === 0) {
        commentsListEl.innerHTML = '<p style="color:var(--ws-text-muted); font-size:0.85rem;">No comments yet.</p>';
      } else {
        commentsListEl.innerHTML = comments.map(c => `
          <div style="padding:10px 0; border-bottom:1px solid #f1f5f9;">
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
              <strong>${escapeHtml(c.user?.display_name || 'Member')}</strong>
              <span style="color:var(--ws-text-light);">${formatDate(c.created_at)}</span>
            </div>
            <div style="font-size:0.85rem; color:var(--ws-dark);">${escapeHtml(c.content)}</div>
          </div>
        `).join('');
      }
    }

    // Delete Task button handler
    const btnDelete = document.getElementById('btnDeleteTaskFromDetail');
    if (btnDelete) {
      btnDelete.onclick = async () => {
        if (confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này không?')) {
          try {
            await API.delete(`/api/tasks/${taskId}`);
            showToast('Đã xóa nhiệm vụ.');
            closeModal('modalTaskDetail');
            handleRouting();
          } catch (e) {
            showToast(e.message, true);
          }
        }
      };
    }

    // Edit Task button handler
    const btnEdit = document.getElementById('btnEditTaskFromDetail');
    if (btnEdit) {
      btnEdit.onclick = () => {
        closeModal('modalTaskDetail');
        window.openEditTaskModal(taskId);
      };
    }

    openModal('modalTaskDetail');
  } catch (err) {
    showToast(err.message, true);
  }
};

window.openNewTaskModal = function(preselectedTeamId = null, preselectedProjectId = null) {
  const form = document.getElementById('formTask');
  if (form) form.reset();
  const idInput = document.getElementById('taskFormId');
  if (idInput) idInput.value = '';

  const teamSelect = document.getElementById('taskFormTeam');
  const projSelect = document.getElementById('taskFormProject');
  const assigneeSelect = document.getElementById('taskFormAssignee');

  populateSelect(teamSelect, currentTeamsCache, preselectedTeamId);
  populateSelect(assigneeSelect, currentUsersCache.map(u => ({ id: u.id, name: u.display_name || u.name })));
  updateProjectDropdown(preselectedTeamId || teamSelect.value, preselectedProjectId, projSelect);

  teamSelect.onchange = () => {
    updateProjectDropdown(teamSelect.value, null, projSelect);
  };

  openModal('modalTask');
};

window.openEditTaskModal = async function(taskId) {
  try {
    const res = await API.get(`/api/tasks/${taskId}`);
    const task = res.task;

    document.getElementById('taskFormId').value = task.id;
    document.getElementById('taskFormTitle').value = task.title;
    document.getElementById('taskFormPriority').value = task.priority || 'medium';
    document.getElementById('taskFormStatus').value = task.status || 'todo';
    document.getElementById('taskFormDueDate').value = task.due_date || '';
    document.getElementById('taskFormDesc').value = task.description || '';

    const teamSelect = document.getElementById('taskFormTeam');
    const projSelect = document.getElementById('taskFormProject');
    const assigneeSelect = document.getElementById('taskFormAssignee');

    populateSelect(teamSelect, currentTeamsCache, task.team_id);
    populateSelect(assigneeSelect, currentUsersCache.map(u => ({ id: u.id, name: u.display_name || u.name })), task.assigned_to);
    updateProjectDropdown(task.team_id, task.project_id, projSelect);

    openModal('modalTask');
  } catch (e) {
    showToast(e.message, true);
  }
};

window.openProjectModal = function(preselectedTeamId = null) {
  const form = document.getElementById('formProject');
  if (form) form.reset();
  const teamSelect = document.getElementById('projectFormTeam');
  populateSelect(teamSelect, currentTeamsCache, preselectedTeamId);
  openModal('modalProject');
};

window.openUploadDocumentModal = function(preselectedTeamId = null, preselectedProjectId = null) {
  const form = document.getElementById('formDocument');
  if (form) form.reset();
  const teamSelect = document.getElementById('docFormTeam');
  const projSelect = document.getElementById('docFormProject');
  populateSelect(teamSelect, currentTeamsCache, preselectedTeamId);
  updateProjectDropdown(preselectedTeamId || teamSelect.value, preselectedProjectId, projSelect);
  teamSelect.onchange = () => updateProjectDropdown(teamSelect.value, null, projSelect);
  openModal('modalDocument');
};

window.openUploadDatasetModal = function(preselectedTeamId = null, preselectedProjectId = null) {
  const form = document.getElementById('formDataset');
  if (form) form.reset();
  const teamSelect = document.getElementById('dsFormTeam');
  const projSelect = document.getElementById('dsFormProject');
  populateSelect(teamSelect, currentTeamsCache, preselectedTeamId);
  updateProjectDropdown(preselectedTeamId || teamSelect.value, preselectedProjectId, projSelect);
  teamSelect.onchange = () => updateProjectDropdown(teamSelect.value, null, projSelect);
  openModal('modalDataset');
};

function populateSelect(selectEl, items, selectedValue = null) {
  if (!selectEl) return;
  selectEl.innerHTML = items.map(item => `
    <option value="${item.id}" ${item.id === selectedValue ? 'selected' : ''}>${escapeHtml(item.name || item.title || item.id)}</option>
  `).join('');
}

async function updateProjectDropdown(teamId, selectedProjId = null, selectEl = null) {
  const dropdown = selectEl || document.getElementById('taskFormProject');
  if (!dropdown) return;
  try {
    const res = await API.get('/api/projects');
    const projects = res.projects || [];
    const filtered = teamId ? projects.filter(p => p.team_id === teamId) : projects;
    dropdown.innerHTML = '<option value="">-- None / General Task --</option>' + filtered.map(p => `
      <option value="${p.id}" ${p.id === selectedProjId ? 'selected' : ''}>${escapeHtml(p.name)}</option>
    `).join('');
  } catch (e) {
    dropdown.innerHTML = '<option value="">-- General Task --</option>';
  }
}
