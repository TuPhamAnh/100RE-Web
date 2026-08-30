/**
 * 100RE LAB WORKSPACE — Tasks Kanban & List View
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { renderPriorityBadge, renderStatusBadge, formatDate, escapeHtml, renderEmptyState } from '../components.js';

export async function renderTasks(container, initialFilter = null) {
  let viewMode = 'kanban'; // 'kanban' | 'list'

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>${initialFilter === 'me' ? 'My Assigned Tasks' : 'Tasks &amp; Research Deliverables'}</h1>
        <p>Manage workflows, experimental protocols, paper milestones and technical deliverables.</p>
      </div>
      <div class="ws-page-actions">
        <div style="display:flex; background:#ffffff; border:1px solid var(--ws-border); border-radius:var(--ws-radius-md); overflow:hidden;">
          <button class="btn-ws-ghost btn-ws-sm ${viewMode === 'kanban' ? 'active' : ''}" id="btnViewKanban" style="border:none;"><i class="fa-solid fa-table-columns"></i> Kanban</button>
          <button class="btn-ws-ghost btn-ws-sm ${viewMode === 'list' ? 'active' : ''}" id="btnViewList" style="border:none;"><i class="fa-solid fa-list"></i> List</button>
        </div>
        <button class="btn-ws-primary" id="btnTaskViewNew"><i class="fa-solid fa-plus"></i> New Task</button>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar">
      <input type="text" id="taskSearchInput" class="ws-search-input" placeholder="Search tasks by title or keyword...">
      <select id="taskTeamFilter" class="ws-select-filter">
        <option value="">All Teams</option>
      </select>
      <select id="taskPriorityFilter" class="ws-select-filter">
        <option value="">All Priorities</option>
        <option value="urgent">Urgent</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <select id="taskAssigneeFilter" class="ws-select-filter">
        <option value="">All Assignees</option>
        <option value="me" ${initialFilter === 'me' ? 'selected' : ''}>Assigned to Me</option>
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
    let allTasks = tasksRes.tasks || [];
    const viewport = container.querySelector('#tasksViewport');

    function applyFilterAndRender() {
      const q = container.querySelector('#taskSearchInput').value.toLowerCase();
      const tFilter = container.querySelector('#taskTeamFilter').value;
      const pFilter = container.querySelector('#taskPriorityFilter').value;
      const aFilter = container.querySelector('#taskAssigneeFilter').value;
      const user = Auth.getUser();

      let filtered = allTasks.filter(t => {
        const matchesQuery = t.title.toLowerCase().includes(q) || (t.description && t.description.toLowerCase().includes(q));
        const matchesTeam = !tFilter || t.team_id === tFilter;
        const matchesPriority = !pFilter || t.priority === pFilter;
        const matchesAssignee = !aFilter || (aFilter === 'me' ? (user && t.assigned_to === user.id) : t.assigned_to === aFilter);
        return matchesQuery && matchesTeam && matchesPriority && matchesAssignee;
      });

      if (viewMode === 'kanban') {
        renderKanban(viewport, filtered);
      } else {
        renderList(viewport, filtered);
      }
    }

    applyFilterAndRender();

    container.querySelector('#taskSearchInput').addEventListener('input', applyFilterAndRender);
    container.querySelector('#taskTeamFilter').addEventListener('change', applyFilterAndRender);
    container.querySelector('#taskPriorityFilter').addEventListener('change', applyFilterAndRender);
    container.querySelector('#taskAssigneeFilter').addEventListener('change', applyFilterAndRender);

    const btnKanban = container.querySelector('#btnViewKanban');
    const btnList = container.querySelector('#btnViewList');

    btnKanban.addEventListener('click', () => {
      viewMode = 'kanban';
      btnKanban.style.background = 'var(--ws-bg-subtle)';
      btnList.style.background = 'transparent';
      applyFilterAndRender();
    });

    btnList.addEventListener('click', () => {
      viewMode = 'list';
      btnList.style.background = 'var(--ws-bg-subtle)';
      btnKanban.style.background = 'transparent';
      applyFilterAndRender();
    });

    container.querySelector('#btnTaskViewNew').addEventListener('click', () => window.openNewTaskModal());

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

function renderKanban(viewport, tasks) {
  const columns = [
    { id: 'todo', title: 'To Do', accent: 'col-accent-todo' },
    { id: 'in_progress', title: 'In Progress', accent: 'col-accent-in_progress' },
    { id: 'review', title: 'Review', accent: 'col-accent-review' },
    { id: 'done', title: 'Done', accent: 'col-accent-done' }
  ];

  viewport.innerHTML = `
    <div class="ws-kanban-board">
      ${columns.map(col => {
        const colTasks = tasks.filter(t => t.status === col.id);
        return `
          <div class="ws-kanban-col ${col.accent}">
            <div class="ws-kanban-col-header">
              <span class="ws-kanban-title">${col.title}</span>
              <span class="ws-kanban-count">${colTasks.length}</span>
            </div>
            <div class="ws-kanban-list" data-status="${col.id}">
              ${colTasks.length === 0 ? '<div style="text-align:center; padding:20px; color:var(--ws-text-light); font-size:0.8rem;">No tasks</div>' : colTasks.map(t => {
                const isOverdue = t.due_date && new Date(t.due_date) < new Date() && t.status !== 'done';
                return `
                  <div class="ws-kanban-card" onclick="window.openTaskDetailModal('${t.id}')">
                    <div class="ws-kanban-card-top">
                      <span style="font-size:0.7rem; font-weight:700; color:var(--ws-primary); text-transform:uppercase;">
                        ${t.team ? escapeHtml(t.team.slug) : 'GEN'}
                      </span>
                      ${renderPriorityBadge(t.priority)}
                    </div>
                    <div class="ws-kanban-card-title">${escapeHtml(t.title)}</div>
                    ${t.description ? `<div class="ws-kanban-card-desc">${escapeHtml(t.description)}</div>` : ''}
                    <div class="ws-kanban-card-footer">
                      <div class="ws-kanban-due ${isOverdue ? 'overdue' : ''}">
                        <i class="fa-regular fa-calendar"></i>
                        <span>${t.due_date ? formatDate(t.due_date) : 'No date'}</span>
                      </div>
                      <img src="${t.assignee?.avatar_url || '../assets/images/logo.jpg'}" class="ws-kanban-assignee" title="${escapeHtml(t.assignee?.name || 'Unassigned')}" alt="Avatar">
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderList(viewport, tasks) {
  if (tasks.length === 0) {
    viewport.innerHTML = renderEmptyState('No tasks match your filter');
    return;
  }

  viewport.innerHTML = `
    <div class="ws-card">
      <div class="ws-table-container">
        <table class="ws-table">
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Team / Project</th>
              <th>Assignee</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${tasks.map(t => {
              const isOverdue = t.due_date && new Date(t.due_date) < new Date() && t.status !== 'done';
              return `
                <tr class="clickable-task-row" data-task-id="${t.id}" style="cursor:pointer;" onclick="window.openTaskDetailModal('${t.id}')">
                  <td><strong>${escapeHtml(t.title)}</strong></td>
                  <td><span style="font-size:0.8rem; color:var(--ws-text-muted);">${t.team ? escapeHtml(t.team.name) : 'General'}</span></td>
                  <td>
                    <div style="display:flex; align-items:center; gap:6px;">
                      <img src="${t.assignee?.avatar_url || '../assets/images/logo.jpg'}" style="width:22px; height:22px; border-radius:50%; object-fit:cover;" alt="Avatar">
                      <span style="font-size:0.825rem;">${escapeHtml(t.assignee?.name || 'Unassigned')}</span>
                    </div>
                  </td>
                  <td>${renderPriorityBadge(t.priority)}</td>
                  <td><span style="${isOverdue ? 'color:#dc2626; font-weight:700;' : ''}">${t.due_date ? formatDate(t.due_date) : 'N/A'}</span></td>
                  <td>${renderStatusBadge(t.status)}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
