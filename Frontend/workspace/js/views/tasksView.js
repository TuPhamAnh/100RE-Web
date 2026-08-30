/**
 * 100RE LAB WORKSPACE — Tasks Kanban & List View
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { renderPriorityBadge, renderStatusBadge, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderTasks(container, initialFilter = null) {
  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';
  let viewMode = 'kanban'; // 'kanban' | 'list'

  const titleText = initialFilter === 'me' 
    ? (isVi ? 'Nhiệm Vụ Của Tôi' : 'My Assigned Tasks')
    : (isVi ? 'Quản Lý Nhiệm Vụ & Tiến Độ Đề Tài' : 'Tasks & Research Deliverables');
  const subtitleText = isVi 
    ? 'Theo dõi quy trình thực nghiệm, mốc bài báo, báo cáo tiến độ và nghiệm thu kỹ thuật.'
    : 'Manage workflows, experimental protocols, paper milestones and technical deliverables.';

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>${titleText}</h1>
        <p>${subtitleText}</p>
      </div>
      <div class="ws-page-actions">
        <div style="display:flex; background:#ffffff; border:1px solid var(--ws-border); border-radius:var(--ws-radius-md); overflow:hidden;">
          <button class="btn-ws-ghost btn-ws-sm ${viewMode === 'kanban' ? 'active' : ''}" id="btnViewKanban" style="border:none;"><i class="fa-solid fa-table-columns"></i> Kanban</button>
          <button class="btn-ws-ghost btn-ws-sm ${viewMode === 'list' ? 'active' : ''}" id="btnViewList" style="border:none;"><i class="fa-solid fa-list"></i> ${isVi ? 'Danh Sách' : 'List'}</button>
        </div>
        <button class="btn-ws-primary" id="btnTaskViewNew"><i class="fa-solid fa-plus"></i> ${isVi ? '+ Nhiệm Vụ Mới' : '+ New Task'}</button>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="taskSearchInput" class="ws-search-input" placeholder="${isVi ? 'Tìm kiếm task theo tiêu đề hoặc từ khóa...' : 'Search tasks by title or keyword...'}">
      <select id="taskTeamFilter" class="ws-select-filter">
        <option value="">${isVi ? 'Tất Cả Nhóm' : 'All Teams'}</option>
      </select>
      <select id="taskPriorityFilter" class="ws-select-filter">
        <option value="">${isVi ? 'Tất Cả Mức Ưu Tiên' : 'All Priorities'}</option>
        <option value="urgent">${isVi ? 'Khẩn Cấp' : 'Urgent'}</option>
        <option value="high">${isVi ? 'Cao' : 'High'}</option>
        <option value="medium">${isVi ? 'Trung Bình' : 'Medium'}</option>
        <option value="low">${isVi ? 'Thấp' : 'Low'}</option>
      </select>
      <select id="taskAssigneeFilter" class="ws-select-filter">
        <option value="">${isVi ? 'Tất Cả Người Thực Hiện' : 'All Assignees'}</option>
        <option value="me" ${initialFilter === 'me' ? 'selected' : ''}>${isVi ? 'Giao Cho Tôi' : 'Assigned to Me'}</option>
      </select>
    </div>

    <div id="tasksViewport">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  try {
    const teamsRes = await API.get('/api/teams');
    const teams = teamsRes.teams || [];
    const teamSelect = container.querySelector('#taskTeamFilter');
    if (teamSelect) {
      teams.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        teamSelect.appendChild(opt);
      });
    }

    const tasksRes = await API.get('/api/tasks');
    const allTasks = tasksRes.tasks || [];

    const viewport = container.querySelector('#tasksViewport');

    function applyFilters() {
      const q = container.querySelector('#taskSearchInput').value.toLowerCase().trim();
      const teamId = container.querySelector('#taskTeamFilter').value;
      const prio = container.querySelector('#taskPriorityFilter').value;
      const assignee = container.querySelector('#taskAssigneeFilter').value;
      const user = Auth.getUser();

      return allTasks.filter(t => {
        if (q && !t.title.toLowerCase().includes(q) && !(t.description && t.description.toLowerCase().includes(q))) return false;
        if (teamId && t.team_id !== teamId) return false;
        if (prio && t.priority !== prio) return false;
        if (assignee === 'me' && user && t.assigned_to !== user.id) return false;
        return true;
      });
    }

    function renderKanban(filteredTasks) {
      const statuses = [
        { id: 'todo', title: isVi ? 'CẦN LÀM' : 'TO DO', badgeClass: 'todo' },
        { id: 'in_progress', title: isVi ? 'ĐANG LÀM' : 'IN PROGRESS', badgeClass: 'in_progress' },
        { id: 'review', title: isVi ? 'CHỜ DUYỆT' : 'REVIEW', badgeClass: 'review' },
        { id: 'done', title: isVi ? 'HOÀN THÀNH' : 'DONE', badgeClass: 'done' }
      ];

      viewport.innerHTML = `
        <div class="ws-kanban-board">
          ${statuses.map(s => {
            const colTasks = filteredTasks.filter(t => (t.status || 'todo') === s.id);
            return `
              <div class="ws-kanban-column" data-status="${s.id}">
                <div class="ws-kanban-column-header">
                  <div class="ws-kanban-column-title">
                    <span class="ws-kanban-dot dot-${s.badgeClass}"></span>
                    <span>${s.title}</span>
                    <span class="ws-kanban-count">${colTasks.length}</span>
                  </div>
                </div>
                <div class="ws-kanban-cards">
                  ${colTasks.map(task => `
                    <div class="ws-kanban-card" data-task-id="${task.id}" onclick="window.openTaskDetail('${task.id}')">
                      <div class="ws-kanban-card-meta">
                        <span class="ws-tag-team">${escapeHtml(task.team?.name || task.team_id || (isVi ? 'Nhóm' : 'Team'))}</span>
                        ${renderPriorityBadge(task.priority)}
                      </div>
                      <h4 class="ws-kanban-card-title">${escapeHtml(task.title)}</h4>
                      <div class="ws-kanban-card-footer">
                        <div class="ws-kanban-assignee">
                          <i class="fa-regular fa-user"></i>
                          <span>${escapeHtml(task.assignee?.display_name || task.assignee?.name || (isVi ? 'Chưa giao' : 'Unassigned'))}</span>
                        </div>
                        <div class="ws-kanban-date">
                          <i class="fa-regular fa-calendar"></i>
                          <span>${formatDate(task.due_date)}</span>
                        </div>
                      </div>
                    </div>
                  `).join('')}
                  ${colTasks.length === 0 ? `<div class="ws-kanban-empty">${isVi ? 'Không có task nào' : 'No tasks in this stage'}</div>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    function renderList(filteredTasks) {
      if (filteredTasks.length === 0) {
        viewport.innerHTML = renderEmptyState(isVi ? 'Không tìm thấy nhiệm vụ nào phù hợp' : 'No tasks match the selected filters');
        return;
      }

      viewport.innerHTML = `
        <div class="ws-card">
          <div class="ws-table-container">
            <table class="ws-table">
              <thead>
                <tr>
                  <th>${isVi ? 'Tiêu Đề Nhiệm Vụ' : 'Task Title'}</th>
                  <th>${isVi ? 'Nhóm Nghiên Cứu' : 'Team'}</th>
                  <th>${isVi ? 'Đề Tài' : 'Project'}</th>
                  <th>${isVi ? 'Mức Ưu Tiên' : 'Priority'}</th>
                  <th>${isVi ? 'Trạng Thái' : 'Status'}</th>
                  <th>${isVi ? 'Người Phụ Trách' : 'Assignee'}</th>
                  <th>${isVi ? 'Hạn Chót' : 'Due Date'}</th>
                  <th>${isVi ? 'Thao Tác' : 'Action'}</th>
                </tr>
              </thead>
              <tbody>
                ${filteredTasks.map(t => `
                  <tr>
                    <td>
                      <a href="javascript:void(0)" onclick="window.openTaskDetail('${t.id}')" style="font-weight:600; color:var(--ws-primary); text-decoration:none;">
                        ${escapeHtml(t.title)}
                      </a>
                    </td>
                    <td><span class="ws-badge ws-badge-subtle">${escapeHtml(t.team?.name || t.team_id || '-')}</span></td>
                    <td><small style="color:var(--ws-text-muted);">${escapeHtml(t.project?.name || '-')}</small></td>
                    <td>${renderPriorityBadge(t.priority)}</td>
                    <td>${renderStatusBadge(t.status)}</td>
                    <td><small>${escapeHtml(t.assignee?.display_name || t.assignee?.name || '-')}</small></td>
                    <td><small>${formatDate(t.due_date)}</small></td>
                    <td>
                      <button class="btn-ws-ghost btn-ws-sm" onclick="window.openTaskDetail('${t.id}')" title="${isVi ? 'Xem Chi Tiết' : 'View Details'}">
                        <i class="fa-solid fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    function renderView() {
      const filtered = applyFilters();
      if (viewMode === 'kanban') {
        renderKanban(filtered);
      } else {
        renderList(filtered);
      }
    }

    renderView();

    // Event listeners
    container.querySelector('#taskSearchInput').addEventListener('input', renderView);
    container.querySelector('#taskTeamFilter').addEventListener('change', renderView);
    container.querySelector('#taskPriorityFilter').addEventListener('change', renderView);
    container.querySelector('#taskAssigneeFilter').addEventListener('change', renderView);

    container.querySelector('#btnViewKanban').addEventListener('click', () => {
      viewMode = 'kanban';
      container.querySelector('#btnViewKanban').classList.add('active');
      container.querySelector('#btnViewList').classList.remove('active');
      renderView();
    });

    container.querySelector('#btnViewList').addEventListener('click', () => {
      viewMode = 'list';
      container.querySelector('#btnViewList').classList.add('active');
      container.querySelector('#btnViewKanban').classList.remove('active');
      renderView();
    });

    container.querySelector('#btnTaskViewNew').addEventListener('click', () => {
      window.openNewTaskModal();
    });

  } catch (err) {
    console.error('Error rendering tasks:', err);
    container.querySelector('#tasksViewport').innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
