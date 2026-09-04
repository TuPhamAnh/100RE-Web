/**
 * 100RE LAB WORKSPACE — Research Teams & Dedicated Team Space Hub
 * Modern Craft UI for Multidisciplinary Research Teams
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { renderPriorityBadge, renderStatusBadge, formatDate, escapeHtml, renderEmptyState, showToast } from '../components.js';

export const FA_ICONS = {
  'pv': '<i class="fa-solid fa-solar-panel" style="color:#f59e0b;"></i>',
  'wind': '<i class="fa-solid fa-wind" style="color:#06b6d4;"></i>',
  'hydrogen': '<i class="fa-solid fa-droplet" style="color:#3b82f6;"></i>',
  'smartgrid': '<i class="fa-solid fa-network-wired" style="color:#0284c7;"></i>',
  'ev': '<i class="fa-solid fa-charging-station" style="color:#ec4899;"></i>',
  'ai': '<i class="fa-solid fa-brain" style="color:#8b5cf6;"></i>',
  'bess': '<i class="fa-solid fa-car-battery" style="color:#10b981;"></i>',
  'ucdr': '<i class="fa-solid fa-chart-line" style="color:#6366f1;"></i>'
};


export async function renderTeams(container, teamIdOrSlug = null) {
  if (teamIdOrSlug) {
    return renderTeamDetail(container, teamIdOrSlug);
  }

  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span class="ws-badge ws-badge-done"><i class="fa-solid fa-users"></i> MULTIDISCIPLINARY LAB</span>
        </div>
        <h1>${isVi ? '8 Nhóm Nghiên Cứu Chuyên Sâu' : 'Research Teams'}</h1>
        <p>${isVi ? 'Trung tâm không gian làm việc của các nhóm nghiên cứu khoa học phòng thí nghiệm 100RE.' : '100RE Laboratory multidisciplinary research teams and domains.'}</p>
      </div>
      <div class="ws-page-actions">
        ${Auth.isSupervisor() ? `<button class="btn-ws-primary" id="btnNewTeam"><i class="fa-solid fa-plus"></i> ${isVi ? '+ Tạo Nhóm Mới' : '+ Create Team'}</button>` : ''}
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="ws-filter-bar" style="margin-bottom:20px;">
      <input type="text" id="teamSearchInput" class="ws-search-input" placeholder="${isVi ? 'Tìm kiếm nhóm nghiên cứu (PV, Smart Grid, BESS, AI...)...' : 'Search research teams...'}">
    </div>

    <div id="teamsGridContainer" class="ws-stats-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:18px;">
      <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
    </div>
  `;

  const FALLBACK_TEAMS = [
    { id: 'team-pv', slug: 'pv', name: 'Photovoltaic (PV)', icon: 'solar-panel', leader: 'Dr. Ngo Tri Duc', description: 'High-efficiency solar cells, bifacial modules modeling, solar irradiance forecasting and grid integration.', memberCount: 3, projectCount: 1, openTaskCount: 2, datasetCount: 1, docCount: 1 },
    { id: 'team-wind', slug: 'wind', name: 'Wind Energy', icon: 'wind', leader: 'Nguyen Nhu Tung', description: 'Wind turbine aerodynamics, power curve forecasting, wake effect modeling and offshore wind integration.', memberCount: 2, projectCount: 1, openTaskCount: 1, datasetCount: 1, docCount: 1 },
    { id: 'team-hydrogen', slug: 'hydrogen', name: 'Green Hydrogen', icon: 'droplet', leader: 'Nguyen Hoang Anh', description: 'Water electrolysis, PEM & alkaline fuel cells, hydrogen storage supply chains and H2-to-power systems.', memberCount: 2, projectCount: 1, openTaskCount: 1, datasetCount: 1, docCount: 1 },
    { id: 'team-smartgrid', slug: 'smartgrid', name: 'Smart Grid', icon: 'network-wired', leader: 'Pham Anh Tu', description: 'Microgrid energy management, real-time SCADA, active distribution networks and power quality control.', memberCount: 4, projectCount: 1, openTaskCount: 8, datasetCount: 1, docCount: 2 },
    { id: 'team-ev', slug: 'ev', name: 'Electric Vehicle (EV)', icon: 'charging-station', leader: 'Dao Quoc Khanh', description: 'V2G (Vehicle-to-Grid) bi-directional charging, smart charging scheduling, and battery health degradation.', memberCount: 2, projectCount: 1, openTaskCount: 1, datasetCount: 1, docCount: 1 },
    { id: 'team-ai', slug: 'ai', name: 'Artificial Intelligence (AI)', icon: 'brain', leader: 'Bui Quang Hai', description: 'Deep learning, neural networks, physics-informed AI, and reinforcement learning for energy systems.', memberCount: 2, projectCount: 1, openTaskCount: 1, datasetCount: 1, docCount: 1 },
    { id: 'team-bess', slug: 'bess', name: 'Battery Energy Storage (BESS)', icon: 'car-battery', leader: 'Dr. Trinh Minh Phuong', description: 'Li-ion battery SoC/SoH estimation, battery energy management systems (BEMS), degradation and peak shaving.', memberCount: 4, projectCount: 1, openTaskCount: 2, datasetCount: 1, docCount: 1 },
    { id: 'team-ucdr', slug: 'ucdr', name: 'Unit Commitment & Demand Response (UCDR)', icon: 'chart-line', leader: 'Dr. Le Anh Quan', description: 'Security-constrained unit commitment (SCUC), mixed-integer linear programming, demand response flexibility and market dispatch.', memberCount: 2, projectCount: 1, openTaskCount: 2, datasetCount: 1, docCount: 1 }
  ];

  try {
        let teams = [];
    try {
      const res = await API.get('/api/teams');
      const rawList = res.teams || [];
      const map8 = new Map();
      rawList.forEach(t => {
        if (t.id === 'team-uc' || t.id === 'team-dr' || t.slug === 'uc' || t.slug === 'dr' || t.id === 'team-dr_uc' || t.slug === 'dr_uc') {
          if (!map8.has('team-ucdr')) {
            map8.set('team-ucdr', {
              id: 'team-ucdr',
              slug: 'ucdr',
              name: 'Unit Commitment & Demand Response (UCDR)',
              icon: 'chart-line',
              leader: 'Dr. Le Anh Quan',
              description: 'Security-constrained unit commitment (SCUC), mixed-integer linear programming, demand response flexibility and market dispatch.',
              memberCount: 2,
              projectCount: 1,
              openTaskCount: 2,
              datasetCount: 1,
              docCount: 1
            });
          }
        } else {
          map8.set(t.id, t);
        }
      });
      teams = Array.from(map8.values());
    } catch(e) {}

    if (!teams || teams.length === 0) {
      teams = FALLBACK_TEAMS;
    } else {
      FALLBACK_TEAMS.forEach(fb => {
        if (!teams.some(t => t.id === fb.id || t.slug === fb.slug)) {
          teams.push(fb);
        }
      });
    }

    // Final safety filter: remove any lingering separate team-uc or team-dr
    teams = teams.filter(t => t.id !== 'team-uc' && t.id !== 'team-dr' && t.slug !== 'uc' && t.slug !== 'dr');

    const grid = container.querySelector('#teamsGridContainer');

    function displayTeams(list) {
      if (list.length === 0) {
        grid.innerHTML = renderEmptyState(isVi ? 'Không tìm thấy nhóm phù hợp' : 'No teams match your search');
        return;
      }

      grid.innerHTML = list.map(t => {
        const tSlug = (t.slug || t.id.replace(/^team-/, '')).toLowerCase();
        const iconHtml = FA_ICONS[tSlug] || '<i class="fa-solid fa-layer-group" style="color:#16a34a;"></i>';
        return `
          <div class="ws-card" style="margin-bottom:0; display:flex; flex-direction:column; justify-content:space-between; border-radius:12px; transition:transform 0.2s, box-shadow 0.2s; border:1px solid var(--ws-border); background:var(--ws-bg-surface);">
            <div style="padding:22px 20px 18px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
                <div style="display:flex; align-items:center; gap:12px;">
                  <div style="width:42px; height:42px; background:var(--ws-primary-light); color:var(--ws-primary); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.3rem; box-shadow:0 2px 6px rgba(22,163,74,0.15);">
                    ${iconHtml}
                  </div>
                  <div>
                    <h3 style="font-size:1.1rem; font-weight:700; color:var(--ws-dark); margin:0 0 2px;">${escapeHtml(t.name)}</h3>
                    <span style="font-size:0.75rem; color:var(--ws-text-light); text-transform:uppercase; font-weight:700; letter-spacing:0.04em;">/${escapeHtml(tSlug)}</span>
                  </div>
                </div>
                <span class="ws-badge ws-badge-done"><i class="fa-solid fa-shield"></i> ${isVi ? 'LAB TEAM' : 'MEMBER'}</span>
              </div>

              <p style="font-size:0.85rem; color:var(--ws-text-muted); line-height:1.45; margin-bottom:16px; min-height:42px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                ${escapeHtml(t.description || 'Nghiên cứu mô hình và công nghệ chuyên sâu')}
              </p>

              <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:6px; background:var(--ws-bg-subtle); padding:10px 8px; border-radius:8px; text-align:center; font-size:0.75rem; border:1px solid var(--ws-border);">
                <div>
                  <strong style="display:block; font-size:0.95rem; color:var(--ws-dark);">${t.memberCount || 3}</strong>
                  <span style="color:var(--ws-text-light); font-size:0.7rem;">${isVi ? 'Thành viên' : 'Members'}</span>
                </div>
                <div>
                  <strong style="display:block; font-size:0.95rem; color:#2563eb;">${t.projectCount || 1}</strong>
                  <span style="color:var(--ws-text-light); font-size:0.7rem;">${isVi ? 'Đề tài' : 'Projects'}</span>
                </div>
                <div>
                  <strong style="display:block; font-size:0.95rem; color:#16a34a;">${t.openTaskCount !== undefined ? t.openTaskCount : 2}</strong>
                  <span style="color:var(--ws-text-light); font-size:0.7rem;">${isVi ? 'Nhiệm vụ' : 'Tasks'}</span>
                </div>
                <div>
                  <strong style="display:block; font-size:0.95rem; color:#ca8a04;">${t.datasetCount || 1}</strong>
                  <span style="color:var(--ws-text-light); font-size:0.7rem;">${isVi ? 'Dữ liệu' : 'Data'}</span>
                </div>
              </div>
            </div>

            <div style="padding:14px 20px; border-top:1px solid var(--ws-border); background:var(--ws-bg-subtle); border-radius:0 0 12px 12px; display:flex; justify-content:space-between; align-items:center;">
              <a href="#teams/${tSlug}" class="btn-ws-primary btn-ws-sm" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
                <span>${isVi ? 'Mở Không Gian Nhóm' : 'Open Team Space'}</span>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        `;
      }).join('');
    }

    displayTeams(teams);

    const searchInput = container.querySelector('#teamSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = teams.filter(t => t.name.toLowerCase().includes(val) || (t.description && t.description.toLowerCase().includes(val)));
        displayTeams(filtered);
      });
    }

    const btnNewTeam = container.querySelector('#btnNewTeam');
    if (btnNewTeam) {
      btnNewTeam.addEventListener('click', () => {
        const name = prompt(isVi ? 'Nhập tên Nhóm Nghiên Cứu Mới:' : 'Enter new Research Team name:');
        if (name && name.trim()) {
          API.post('/api/teams', { name: name.trim() })
            .then(() => {
              showToast(isVi ? 'Đã tạo nhóm nghiên cứu mới!' : 'Team created successfully!');
              renderTeams(container);
            })
            .catch(err => alert(err.message));
        }
      });
    }

  } catch (err) {
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

// =========================================================================
// TEAM DETAIL & FULL TEAM SPACE VIEW
// =========================================================================
async function renderTeamDetail(container, teamIdOrSlug) {
  const isVi = (window.i18n ? window.i18n.getLanguage() : 'vi') === 'vi';
  const cleanSlug = String(teamIdOrSlug || '').replace(/^team-/, '').toLowerCase();
  const fullTeamId = `team-${cleanSlug}`;

  container.innerHTML = `<div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>`;

  // Fallback Team Catalog for 100% Reliability
  const TEAM_CATALOG = {
    'pv': {
      name: 'Photovoltaic (PV) Research Team',
      icon: 'solar-panel',
      slug: 'pv',
      id: 'team-pv',
      leader: 'Dr. Ngo Tri Duc',
      description: 'Nghiên cứu tế bào quang điện hiệu suất cao, mô hình hóa tấm pin hai mặt (bifacial), dự báo bức xạ mặt trời cực ngắn (15 phút) và tích hợp lưới điện thông minh.',
      projects: [
        { id: 'proj-pv-01', name: 'AI-Driven Solar Irradiance & PV Yield Forecasting', slug: 'ai-pv-forecasting', description: 'Mô hình Spatio-temporal Transformer dự báo bức xạ mặt trời siêu ngắn hạn phục vụ điều độ microgrid.', status: 'in_progress', progress: 65, drive_folder_id: '1PV_Folder_AIForecast_02', start_date: '2026-02-01', end_date: '2026-09-30' }
      ],
      tasks: [
        { id: 'tsk-pv-01', title: 'Deploy Spatio-temporal Transformer for 15-min Solar Forecasting', priority: 'high', status: 'in_progress', due_date: '2026-09-20', assignee_names: ['Dr. Ngo Tri Duc', 'Bui Quang Minh'] },
        { id: 'tsk-pv-02', title: 'Calibrate Rooftop Pyranometer & Inverter Sensors', priority: 'medium', status: 'todo', due_date: '2026-09-28', assignee_names: ['Bui Quang Minh', 'Dr. Ngo Tri Duc'] }
      ],
      datasets: [
        { id: 'ds-02', name: 'HUST C7 Rooftop 1-Sec Solar GHI, DNI & Weather Log 2025-2026', format: 'CSV', data_type: 'time-series', resolution: '1-second', source: 'Kipp & Zonen CMP11 Pyranometer', size: '52.4 MB' }
      ],
      documents: [
        { id: 'doc-02', name: 'Spatio-Temporal Attention for Solar Forecasting (Paper Draft)', file_name: 'Transformer_Solar_Draft_v2.docx', file_type: 'DOCX', created_at: 1708000000 },
        { id: 'prot-02', name: 'SOP-02: Daily Calibration & Sensor Cleaning for Rooftop Pyranometers', file_name: 'SOP_PV_Calibration_v1.4.pdf', file_type: 'PDF', created_at: 1704600000 }
      ],
      members: [
        { id: 'usr-ldr-01', name: 'Dr. Ngo Tri Duc', email: 'duc.ngotri@100relab', role: 'leader', team_role: 'leader', avatar_url: '../assets/images/ngo_tri_duc.jpg' },
        { id: 'usr-res-08', name: 'Bui Quang Minh', email: 'minh.buiquang@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/bui_quang_minh.jpg' },
        { id: 'usr-sup-01', name: 'Assoc. Prof. Nguyen Duc Tuyen', email: 'tuyen.nguyenduc@hust.edu.vn', role: 'supervisor', team_role: 'advisor', avatar_url: '../assets/images/nguyen_duc_tuyen.jpg' }
      ]
    },
    'smartgrid': {
      name: 'Smart Grid & Microgrid Systems',
      icon: 'network-wired',
      slug: 'smartgrid',
      id: 'team-smartgrid',
      leader: 'Pham Anh Tu',
      description: 'Hệ thống quản lý năng lượng Microgrid (EMS), SCADA thời gian thực, điều khiển điện áp/tần số và tích hợp năng lượng tái tạo phân tán.',
      projects: [
        { id: 'proj-grid-01', name: 'HUST Campus Microgrid Energy Management & Real-time SCADA', slug: 'hust-campus-microgrid', description: 'Triển khai thuật toán điều phối nguồn phân tán và giám sát SCADA tòa nhà C7.', status: 'in_progress', progress: 80, drive_folder_id: '1Grid_SCADA_01', start_date: '2026-01-15', end_date: '2026-10-30' }
      ],
      tasks: [
        { id: 'tsk-sg-03', title: 'Project Smartgrid T5-8 (D2)', priority: 'high', status: 'in_progress', due_date: '2026-07-22', assignee_names: ['Pham Anh Tu', 'Nguyễn Quý Long'] },
        { id: 'tsk-sg-04', title: 'Bằng sáng chế - Build Application', priority: 'high', status: 'in_progress', due_date: '2026-07-30', assignee_names: ['Đỗ Đắc Hiếu', 'Pham Anh Tu', 'Nguyễn Quý Long'] },
        { id: 'tsk-sg-05', title: 'Data Center - RL First Draft', priority: 'high', status: 'in_progress', due_date: '2026-08-03', assignee_names: ['Nguyễn Quý Long', 'Đỗ Đắc Hiếu', 'Pham Anh Tu'] },
        { id: 'tsk-sg-06', title: 'Sửa review PowerCon', priority: 'low', status: 'in_progress', due_date: '2026-09-01', assignee_names: ['Nguyễn Quý Long', 'Pham Anh Tu', 'Đỗ Đắc Hiếu', 'Tran Thi Hong Vinh'] }
      ],
      datasets: [
        { id: 'ds-01', name: '100RE Lab Microgrid 15-Minute Load & Generation Dataset 2026', format: 'CSV', data_type: 'time-series', resolution: '15-minute', source: 'RTU Meter C7-503', size: '12.8 MB' }
      ],
      documents: [
        { id: 'doc-01', name: 'Microgrid Controller Architecture & SCADA Communication Protocol', file_name: 'Microgrid_Architecture_v1.pdf', file_type: 'PDF', created_at: 1707500000 }
      ],
      members: [
        { id: 'usr-smartgrid-1788108587815', name: 'Pham Anh Tu', email: 'tu.phamanh@100relab', role: 'researcher', team_role: 'leader', avatar_url: '../assets/images/logo.jpg' },
        { id: 'usr-smartgrid-1788099630575', name: 'Nguyễn Quý Long', email: 'long.nguyenquy@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/logo.jpg' },
        { id: 'usr-smartgrid-1788099612925', name: 'Đỗ Đắc Hiếu', email: 'hieu.dodac@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/logo.jpg' },
        { id: 'usr-res-05', name: 'Duong Minh Hai', email: 'hai.duongminh@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/duong_minh_hai.png' }
      ]
    },
    'bess': {
      name: 'Battery Energy Storage (BESS)',
      icon: 'car-battery',
      slug: 'bess',
      id: 'team-bess',
      leader: 'Dr. Trinh Minh Phuong',
      description: 'Nghiên cứu thuật toán ước lượng SoC/SoH pin Li-ion, điều chế tần số nhanh PJM RegD và tối ưu hóa suy giảm dung lượng cell pin.',
      projects: [
        { id: 'proj-bess-01', name: 'Fast-Response BESS for Primary Frequency Regulation (RegD)', slug: 'bess-freq-regulation', description: 'Hệ thống lưu trữ pin BESS phản hồi nhanh 2 giây hỗ trợ ổn định tần số lưới điện.', status: 'in_progress', progress: 50, drive_folder_id: '1BESS_Folder_RegD_03', start_date: '2026-02-15', end_date: '2026-11-30' }
      ],
      tasks: [
        { id: 'tsk-bess-01', title: 'Implement RegD frequency regulation control algorithm', priority: 'urgent', status: 'in_progress', due_date: '2026-09-15', assignee_names: ['Dr. Trinh Minh Phuong', 'Tran Thi Hong Vinh'] },
        { id: 'tsk-sg-09', title: 'Nafosted BESS State-of-Charge & Degradation Modeling', priority: 'high', status: 'in_progress', due_date: '2026-07-30', assignee_names: ['Tran Thi Hong Vinh', 'Dr. Trinh Minh Phuong'] }
      ],
      datasets: [
        { id: 'ds-03', name: 'PJM RegD Fast AGC Signal & 1MW/2MWh BESS Response Log 2026', format: 'CSV', data_type: 'time-series', resolution: '2-second', source: 'OPAL-RT HIL Testbench', size: '128.5 MB' }
      ],
      documents: [
        { id: 'doc-03', name: 'PJM Interconnection RegD Fast Frequency Regulation Standard Manual', file_name: 'PJM_RegD_Test_Protocol_2026.pdf', file_type: 'PDF', created_at: 1708500000 }
      ],
      members: [
        { id: 'usr-ldr-02', name: 'Dr. Trinh Minh Phuong', email: 'phuong.trinhminh@100relab', role: 'leader', team_role: 'leader', avatar_url: '../assets/images/trinh_minh_phuong.jpg' },
        { id: 'usr-res-14', name: 'Tran Thi Hong Vinh', email: 'vinh.tranthihong@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/tran_thi_hong_vinh.png' },
        { id: 'usr-res-13', name: 'Nguyen Quang Anh', email: 'anh.nguyenquang@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/nguyen_quang_anh.png' }
      ]
    },
    'ai': {
      name: 'Artificial Intelligence (AI) Team',
      icon: 'brain',
      slug: 'ai',
      id: 'team-ai',
      leader: 'Bui Quang Hai',
      description: 'Mạng Neural sâu, Physics-Informed Neural Networks (PINN), Reinforcement Learning cho tối ưu hóa vận hành hệ thống điện thông minh.',
      projects: [
        { id: 'proj-ai-01', name: 'Deep Reinforcement Learning for Microgrid Real-time Dispatch', slug: 'drl-microgrid-dispatch', description: 'Thuật toán DRL PPO và SAC điều khiển tối ưu hóa đa mục tiêu.', status: 'in_progress', progress: 55, drive_folder_id: '1AI_Folder_DRL_04', start_date: '2026-03-01', end_date: '2026-12-31' }
      ],
      tasks: [
        { id: 'tsk-ai-01', title: 'Huấn luyện mạng Neural dự báo phụ tải đỉnh Microgrid', priority: 'high', status: 'in_progress', due_date: '2026-09-25', assignee_names: ['Bui Quang Hai'] }
      ],
      datasets: [
        { id: 'ds-04', name: 'Microgrid Deep Reinforcement Learning State-Action Environment Dataset', format: 'CSV', data_type: 'time-series', resolution: '5-minute', source: 'Gym Microgrid Env', size: '24.2 MB' }
      ],
      documents: [
        { id: 'doc-04', name: 'Physics-Informed Deep Neural Networks for Power Flow Solutions', file_name: 'PINN_PowerFlow_TechReport.pdf', file_type: 'PDF', created_at: 1709000000 }
      ],
      members: [
        { id: 'usr-res-01', name: 'Bui Quang Hai', email: 'hai.buiquang@100relab', role: 'researcher', team_role: 'leader', avatar_url: '../assets/images/bui_quang_hai.png' }
      ]
    },
    'wind': {
      name: 'Wind Energy Research Team',
      icon: 'wind',
      slug: 'wind',
      id: 'team-wind',
      leader: 'Nguyen Nhu Tung',
      description: 'Khí động học turbine gió, dự báo công suất phát điện gió, điều khiển góc pitch thích nghi và mô hình hóa trang trại gió ngoài khơi.',
      projects: [
        { id: 'proj-wind-01', name: 'Adaptive Pitch Angle Controller for Turbulent Offshore Wind Turbines', slug: 'wind-pitch-control', description: 'Mô phỏng FAST và điều khiển góc bước cánh dưới gió giật.', status: 'in_progress', progress: 45, drive_folder_id: '1Wind_Folder_05', start_date: '2026-02-15', end_date: '2026-10-31' }
      ],
      tasks: [
        { id: 'tsk-wind-01', title: 'Optimal pitch angle controller under turbulent wind gusts', priority: 'medium', status: 'in_progress', due_date: '2026-10-05', assignee_names: ['Nguyen Nhu Tung', 'Nguyen Hoang Nam'] }
      ],
      datasets: [
        { id: 'ds-05', name: 'Binh Thuan Offshore 100m Anemometer Wind Speed & Direction Log 2025', format: 'CSV', data_type: 'time-series', resolution: '10-minute', source: 'Offshore Mast BT-01', size: '38.6 MB' }
      ],
      documents: [
        { id: 'doc-05', name: 'IEC 61400-1 Wind Turbines Design Requirements Technical Standard', file_name: 'IEC_61400_1_WindStandard.pdf', file_type: 'PDF', created_at: 1706000000 }
      ],
      members: [
        { id: 'usr-res-10', name: 'Nguyen Nhu Tung', email: 'tung.nguyennhu@100relab', role: 'researcher', team_role: 'leader', avatar_url: '../assets/images/nguyen_nhu_tung.jpg' },
        { id: 'usr-res-03', name: 'Nguyen Hoang Nam', email: 'nam.nguyenhoang@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/logo.jpg' }
      ]
    },
    'ev': {
      name: 'Electric Vehicle (EV) Integration',
      icon: 'charging-station',
      slug: 'ev',
      id: 'team-ev',
      leader: 'Dao Quoc Khanh',
      description: 'Điều phối sạc thông minh V2G (Vehicle-to-Grid), giảm quá tải máy biến áp phân phối và mô hình hóa hành vi người dùng xe điện.',
      projects: [
        { id: 'proj-ev-01', name: 'V2G Smart Charging Optimization for Campus Microgrid', slug: 'ev-v2g-optimization', description: 'Mô hình tối ưu hóa điều độ 20 trạm sạc xe điện khuôn viên trường Bách Khoa.', status: 'in_progress', progress: 40, drive_folder_id: '1EV_Folder_06', start_date: '2026-03-01', end_date: '2026-11-30' }
      ],
      tasks: [
        { id: 'tsk-ev-01', title: 'V2G smart charging optimization for campus microgrid', priority: 'high', status: 'in_progress', due_date: '2026-10-10', assignee_names: ['Dao Quoc Khanh', 'Le The Cuong'] }
      ],
      datasets: [
        { id: 'ds-06', name: 'HUST Campus EV Charging Station Transaction & Power Log 2026', format: 'CSV', data_type: 'time-series', resolution: '1-minute', source: 'EVSE Controller D9', size: '18.4 MB' }
      ],
      documents: [
        { id: 'doc-06', name: 'ISO 15118 Road Vehicles Vehicle to Grid Communication Interface', file_name: 'ISO_15118_V2G_Guide.pdf', file_type: 'PDF', created_at: 1707000000 }
      ],
      members: [
        { id: 'usr-res-11', name: 'Dao Quoc Khanh', email: 'khanh.daoquoc@100relab', role: 'researcher', team_role: 'leader', avatar_url: '../assets/images/dao_quoc_khanh.jpg' },
        { id: 'usr-res-04', name: 'Le The Cuong', email: 'cuong.lethe@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/logo.jpg' }
      ]
    },
    'hydrogen': {
      name: 'Green Hydrogen Systems',
      icon: 'droplet',
      slug: 'hydrogen',
      id: 'team-hydrogen',
      leader: 'Nguyen Hoang Anh',
      description: 'Điện phân nước PEM & Alkaline sản xuất Hydro xanh từ năng lượng mặt trời dư thừa và pin nhiên liệu phát điện.',
      projects: [
        { id: 'proj-h2-01', name: 'Solar-to-Hydrogen PEM Electrolyzer Dynamic Modeling', slug: 'solar-h2-electrolyzer', description: 'Tối ưu hóa sản xuất Hydro xanh kết hợp hệ thống điện mặt trời mái nhà.', status: 'in_progress', progress: 35, drive_folder_id: '1H2_Folder_07', start_date: '2026-03-15', end_date: '2026-12-15' }
      ],
      tasks: [
        { id: 'tsk-h2-01', title: 'PEM electrolyzer dynamic response & fuel cell scheduling', priority: 'medium', status: 'in_progress', due_date: '2026-10-20', assignee_names: ['Nguyen Hoang Anh'] }
      ],
      datasets: [
        { id: 'ds-07', name: '5kW PEM Electrolyzer Efficiency & Dynamic Polarization Curve Dataset', format: 'CSV', data_type: 'time-series', resolution: '5-second', source: 'Lab C7 Electrolyzer Rig', size: '14.1 MB' }
      ],
      documents: [
        { id: 'doc-07', name: 'Green Hydrogen Production Safety Guidelines & Storage Standards', file_name: 'Hydrogen_Safety_Protocol_2026.pdf', file_type: 'PDF', created_at: 1707500000 }
      ],
      members: [
        { id: 'usr-res-12', name: 'Nguyen Hoang Anh', email: 'anh.nguyenhoang@100relab', role: 'researcher', team_role: 'leader', avatar_url: '../assets/images/nguyen_hoang_anh.jpg' }
      ]
    },
        'ucdr': {
      name: 'Unit Commitment & Demand Response (UCDR)',
      icon: 'chart-line',
      slug: 'ucdr',
      id: 'team-ucdr',
      leader: 'Dr. Le Anh Quan',
      description: 'Mô hình Unit Commitment ràng buộc an ninh (SCUC), tối ưu hóa tổ máy phát điện quy mô lớn, điều khiển phụ tải linh hoạt công nghiệp và biểu giá điện động.',
      projects: [
        { id: 'proj-uc-01', name: 'High-Renewable Security-Constrained Unit Commitment & DR Scheduling', slug: 'scuc-high-re', description: 'Thuật toán MILP giải bài toán SCUC và huy động phụ tải linh hoạt tích hợp 40% năng lượng tái tạo.', status: 'in_progress', progress: 60, drive_folder_id: '1UC_Folder_08', start_date: '2026-01-10', end_date: '2026-11-30' }
      ],
      tasks: [
        { id: 'tsk-dr-01', title: 'Dynamic pricing demand response for industrial loads', priority: 'medium', status: 'in_progress', due_date: '2026-10-25', assignee_names: ['Dr. Le Anh Quan', 'Nguyen Tuan Anh'] },
        { id: 'tsk-uc-01', title: 'Formulate MILP formulation for 118-bus security-constrained unit commitment', priority: 'high', status: 'in_progress', due_date: '2026-11-05', assignee_names: ['Dr. Le Anh Quan'] }
      ],
      datasets: [
        { id: 'ds-08', name: 'IEEE 118-Bus Test System 8760-Hour Dispatch, LMP & DR Response Log', format: 'CSV', data_type: 'time-series', resolution: '1-hour', source: 'Gurobi MILP Engine & RTU Meter', size: '42.0 MB' }
      ],
      documents: [
        { id: 'doc-08', name: 'Security-Constrained Unit Commitment with High Wind-Solar Penetration and DR Flexibility', file_name: 'SCUC_DR_Formulation_Manuscript.pdf', file_type: 'PDF', created_at: 1708000000 }
      ],
      members: [
        { id: 'usr-res-09', name: 'Dr. Le Anh Quan', email: 'quan.leanh@100relab', role: 'leader', team_role: 'leader', avatar_url: '../assets/images/le_anh_quan.jpg' },
        { id: 'usr-res-02', name: 'Nguyen Tuan Anh', email: 'anh.nguyentuan@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/nguyen_tuan_anh.png' }
      ]
    },
    'uc': {
      name: 'Unit Commitment & Market Dispatch',
      icon: 'chart-line',
      slug: 'uc',
      id: 'team-uc',
      leader: 'Dr. Le Anh Quan',
      description: 'Mô hình Unit Commitment ràng buộc an ninh (SCUC), tối ưu hóa tổ máy phát điện quy mô lớn và thị trường điện cạnh tranh.',
      projects: [
        { id: 'proj-uc-01', name: 'High-Renewable Security-Constrained Unit Commitment (SCUC)', slug: 'scuc-high-re', description: 'Thuật toán MILP giải bài toán SCUC cho hệ thống điện Việt Nam tích hợp 40% RE.', status: 'in_progress', progress: 60, drive_folder_id: '1UC_Folder_08', start_date: '2026-01-10', end_date: '2026-11-30' }
      ],
      tasks: [
        { id: 'tsk-dr-01', title: 'Dynamic pricing demand response for industrial loads', priority: 'medium', status: 'in_progress', due_date: '2026-10-25', assignee_names: ['Dr. Le Anh Quan', 'Nguyen Tuan Anh'] }
      ],
      datasets: [
        { id: 'ds-08', name: 'IEEE 118-Bus Test System 8760-Hour Dispatch & Marginal Price Log', format: 'CSV', data_type: 'time-series', resolution: '1-hour', source: 'Gurobi MILP Engine', size: '42.0 MB' }
      ],
      documents: [
        { id: 'doc-08', name: 'Security-Constrained Unit Commitment with High Wind-Solar Penetration', file_name: 'SCUC_Formulation_Manuscript.pdf', file_type: 'PDF', created_at: 1708000000 }
      ],
      members: [
        { id: 'usr-res-09', name: 'Dr. Le Anh Quan', email: 'quan.leanh@100relab', role: 'leader', team_role: 'leader', avatar_url: '../assets/images/le_anh_quan.jpg' },
        { id: 'usr-res-02', name: 'Nguyen Tuan Anh', email: 'anh.nguyentuan@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/nguyen_tuan_anh.png' }
      ]
    },
    'dr': {
      name: 'Demand Response & Flexibility',
      icon: 'network-wired',
      slug: 'dr',
      id: 'team-dr',
      leader: 'Dr. Le Anh Quan',
      description: 'Điều khiển phụ tải linh hoạt công nghiệp và thương mại, biểu giá điện động (dynamic pricing) và thị trường năng lượng trao đổi ngang hàng.',
      projects: [
        { id: 'proj-dr-01', name: 'Industrial Demand Response & Peak Shaving Scheduling', slug: 'industrial-dr', description: 'Thuật toán huy động phụ tải linh hoạt giảm tải đỉnh cho trạm biến áp C7.', status: 'in_progress', progress: 50, drive_folder_id: '1DR_Folder_09', start_date: '2026-02-01', end_date: '2026-10-31' }
      ],
      tasks: [
        { id: 'tsk-dr-01', title: 'Dynamic pricing demand response for industrial loads', priority: 'medium', status: 'in_progress', due_date: '2026-10-25', assignee_names: ['Dr. Le Anh Quan', 'Nguyen Tuan Anh'] }
      ],
      datasets: [
        { id: 'ds-08', name: 'Industrial Load Baseline & Peak Reduction Response Dataset', format: 'CSV', data_type: 'time-series', resolution: '15-minute', source: 'Smart Meter Data', size: '16.5 MB' }
      ],
      documents: [
        { id: 'doc-08', name: 'Demand Response Incentive Mechanisms in Microgrid Markets', file_name: 'DR_Incentive_Mechanism_v1.pdf', file_type: 'PDF', created_at: 1708500000 }
      ],
      members: [
        { id: 'usr-res-09', name: 'Dr. Le Anh Quan', email: 'quan.leanh@100relab', role: 'leader', team_role: 'leader', avatar_url: '../assets/images/le_anh_quan.jpg' },
        { id: 'usr-res-02', name: 'Nguyen Tuan Anh', email: 'anh.nguyentuan@100relab', role: 'researcher', team_role: 'member', avatar_url: '../assets/images/nguyen_tuan_anh.png' }
      ]
    }
  };

  let teamMeta = TEAM_CATALOG[cleanSlug] || (cleanSlug === 'uc' || cleanSlug === 'dr' || cleanSlug === 'dr_uc' ? TEAM_CATALOG['ucdr'] : TEAM_CATALOG['smartgrid']);

  let team = {
    id: fullTeamId,
    slug: cleanSlug,
    name: teamMeta.name,
    icon: teamMeta.icon,
    description: teamMeta.description
  };
  let projects = [...teamMeta.projects];
  let tasks = [...teamMeta.tasks];
  let datasets = [...teamMeta.datasets];
  let documents = [...teamMeta.documents];
  let members = [...teamMeta.members];
  let activity = [];
  let isLeader = true;

  // Attempt to enrich from Backend API
  try {
    const res = await API.get(`/api/teams/${cleanSlug}`);
    if (res && res.team) {
      team = { ...team, ...res.team };
      if (res.projects && res.projects.length > 0) projects = res.projects;
      if (res.tasks && res.tasks.length > 0) tasks = res.tasks;
      if (res.datasets && res.datasets.length > 0) datasets = res.datasets;
      if (res.documents && res.documents.length > 0) documents = res.documents;
      if (res.members && res.members.length > 0) members = res.members;
      if (res.activity) activity = res.activity;
    }
  } catch (e) {
    console.warn('Backend API note for team detail:', e);
  }

  // Also merge any local tasks for this team
  try {
    const localTasks = JSON.parse(localStorage.getItem('100re_custom_tasks') || '[]');
    localTasks.forEach(lt => {
      const ltSlug = (lt.team_id || '').replace(/^team-/, '');
      if (ltSlug === cleanSlug && !tasks.some(t => t.id === lt.id)) {
        tasks.unshift(lt);
      }
    });
  } catch(e) {}

  container.innerHTML = `
    <!-- Team Space Top Header Card -->
    <div class="ws-team-hero-card" style="background:var(--ws-bg-surface); border:1px solid var(--ws-border); border-radius:14px; padding:24px; margin-bottom:24px; box-shadow:0 4px 12px rgba(15,23,42,0.03); display:block;">
      <!-- Top Section: Team Title & Action Buttons -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
        <div style="flex:1; min-width:280px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
            <a href="#teams" class="btn-ws-ghost btn-ws-sm" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; font-weight:600;">
              <i class="fa-solid fa-arrow-left"></i> ${isVi ? 'Tất Cả Nhóm' : 'All Teams'}
            </a>
            <span class="ws-badge ws-badge-in_progress" style="font-weight:700;">TEAM / ${escapeHtml(cleanSlug.toUpperCase())}</span>
            <span class="ws-badge ws-badge-done"><i class="fa-solid fa-shield-check"></i> ${isVi ? 'KHÔNG GIAN NHÓM' : 'ACTIVE TEAM SPACE'}</span>
          </div>

          <div style="display:flex; align-items:center; gap:14px;">
            <span style="font-size:2rem; display:inline-flex; align-items:center; justify-content:center;">${FA_ICONS[cleanSlug] || '<i class="fa-solid fa-layer-group"></i>'}</span>
            <h1 style="font-size:1.75rem; font-weight:800; color:var(--ws-dark); margin:0; line-height:1.2;">${escapeHtml(team.name)}</h1>
          </div>

          <p style="color:var(--ws-text-muted); font-size:0.925rem; margin-top:8px; max-width:850px; line-height:1.5;">
            ${escapeHtml(team.description || teamMeta.description)}
          </p>
        </div>

        <!-- Action Buttons -->
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; align-self:flex-start;">
          <button class="btn-ws-primary btn-ws-sm" id="btnTeamNewTask">
            <i class="fa-solid fa-plus"></i> ${isVi ? 'Tạo Nhiệm Vụ' : 'New Task'}
          </button>
          <button class="btn-ws-ghost btn-ws-sm" id="btnTeamNewProject">
            <i class="fa-solid fa-folder-plus"></i> ${isVi ? 'Tạo Đề Tài' : 'New Project'}
          </button>
          <button class="btn-ws-ghost btn-ws-sm" id="btnTeamUploadDataset">
            <i class="fa-solid fa-database"></i> ${isVi ? 'Tải Dataset' : 'Upload Data'}
          </button>
        </div>
      </div>

      <!-- Quick KPI Counters (Arranged in a Clean Horizontal Row Underneath) -->
      <div class="ws-team-kpi-row" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:12px; margin-top:20px; padding-top:18px; border-top:1px solid var(--ws-border);">
        <div style="background:var(--ws-bg-subtle); padding:12px 14px; border-radius:8px; border:1px solid var(--ws-border); text-align:center;">
          <div style="font-size:0.75rem; color:var(--ws-text-light); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">${isVi ? 'Thành Viên' : 'Members'}</div>
          <div style="font-size:1.5rem; font-weight:800; color:var(--ws-dark); margin-top:4px;">${members.length}</div>
        </div>
        <div style="background:var(--ws-bg-subtle); padding:12px 14px; border-radius:8px; border:1px solid var(--ws-border); text-align:center;">
          <div style="font-size:0.75rem; color:var(--ws-text-light); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">${isVi ? 'Đề Tài' : 'Projects'}</div>
          <div style="font-size:1.5rem; font-weight:800; color:#2563eb; margin-top:4px;">${projects.length}</div>
        </div>
        <div style="background:var(--ws-bg-subtle); padding:12px 14px; border-radius:8px; border:1px solid var(--ws-border); text-align:center;">
          <div style="font-size:0.75rem; color:var(--ws-text-light); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">${isVi ? 'Nhiệm Vụ' : 'Tasks'}</div>
          <div style="font-size:1.5rem; font-weight:800; color:#16a34a; margin-top:4px;">${tasks.length}</div>
        </div>
        <div style="background:var(--ws-bg-subtle); padding:12px 14px; border-radius:8px; border:1px solid var(--ws-border); text-align:center;">
          <div style="font-size:0.75rem; color:var(--ws-text-light); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">${isVi ? 'Dataset' : 'Datasets'}</div>
          <div style="font-size:1.5rem; font-weight:800; color:#ca8a04; margin-top:4px;">${datasets.length}</div>
        </div>
        <div style="background:var(--ws-bg-subtle); padding:12px 14px; border-radius:8px; border:1px solid var(--ws-border); text-align:center;">
          <div style="font-size:0.75rem; color:var(--ws-text-light); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">${isVi ? 'Tài Liệu' : 'Documents'}</div>
          <div style="font-size:1.5rem; font-weight:800; color:#7c3aed; margin-top:4px;">${documents.length}</div>
        </div>
      </div>
    </div>

    <!-- Team Tabs Navigation -->
    <div class="ws-tabs-bar" id="teamDetailTabs" style="margin-bottom:20px;">
      <button class="ws-tab-btn active" data-tab="tabProjects"><i class="fa-solid fa-diagram-project"></i> ${isVi ? 'Đề Tài Nghiên Cứu' : 'Projects'} (${projects.length})</button>
      <button class="ws-tab-btn" data-tab="tabTasks"><i class="fa-solid fa-list-check"></i> ${isVi ? 'Nhiệm Vụ Nhóm' : 'Tasks'} (${tasks.length})</button>
      <button class="ws-tab-btn" data-tab="tabDatasets"><i class="fa-solid fa-database"></i> ${isVi ? 'Dữ Liệu Thí Nghiệm' : 'Datasets'} (${datasets.length})</button>
      <button class="ws-tab-btn" data-tab="tabDocs"><i class="fa-solid fa-file-lines"></i> ${isVi ? 'Tài Liệu & Báo Cáo' : 'Documents'} (${documents.length})</button>
      <button class="ws-tab-btn" data-tab="tabMembers"><i class="fa-solid fa-users"></i> ${isVi ? 'Thành Viên' : 'Members'} (${members.length})</button>
    </div>

    <!-- Tab Panels -->
    <div id="teamTabContent">
      
      <!-- TAB 1: PROJECTS -->
      <div id="tabProjects" class="ws-tab-pane">
        ${projects.length === 0 ? renderEmptyState(isVi ? 'Chưa có đề tài nào trong nhóm này' : 'No projects yet in this team', isVi ? 'Bấm nút "Tạo Đề Tài" ở trên để bắt đầu.' : 'Click "New Project" to start.') : `
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:18px;">
            ${projects.map(p => `
              <div class="ws-card" style="border-radius:12px; border:1px solid #e2e8f0; cursor:pointer; padding:20px; transition:transform 0.2s;" onclick="location.hash='#projects/${p.id}'">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                  <h4 style="font-size:1.05rem; font-weight:700; color:var(--ws-dark); margin:0;">${escapeHtml(p.name)}</h4>
                  ${renderStatusBadge(p.status)}
                </div>
                <p style="font-size:0.85rem; color:var(--ws-text-muted); line-height:1.45; margin-bottom:16px; min-height:40px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                  ${escapeHtml(p.description || 'Đề tài nghiên cứu khoa học chuyên sâu')}
                </p>

                <div style="margin-bottom:14px;">
                  <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--ws-text-light); margin-bottom:6px;">
                    <span>${isVi ? 'Tiến độ hoàn thành' : 'Progress'}</span>
                    <strong style="color:var(--ws-dark);">${p.progress || 50}%</strong>
                  </div>
                  <div style="width:100%; height:7px; background:#f1f5f9; border-radius:4px; overflow:hidden;">
                    <div style="width:${p.progress || 50}%; height:100%; background:linear-gradient(90deg, #16a34a, #22c55e); border-radius:4px;"></div>
                  </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--ws-text-light); border-top:1px solid var(--ws-border); padding-top:10px;">
                  <span><i class="fa-regular fa-calendar" style="margin-right:4px;"></i> ${p.start_date || '2026-02-01'} &rarr; ${p.end_date || '2026-10-30'}</span>
                  <span style="color:#2563eb; font-weight:600;"><i class="fa-brands fa-google-drive"></i> Drive 5TB</span>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- TAB 2: TASKS -->
      <div id="tabTasks" class="ws-tab-pane" style="display:none;">
        ${tasks.length === 0 ? renderEmptyState(isVi ? 'Chưa có nhiệm vụ nào trong nhóm' : 'No tasks in this team') : `
          <div class="ws-card" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0;">
            <div class="ws-table-container">
              <table class="ws-table">
                <thead>
                  <tr>
                    <th>${isVi ? 'Nhiệm Vụ / Đề Tài' : 'Task Title'}</th>
                    <th>${isVi ? 'Mức Độ Ưu Tiên' : 'Priority'}</th>
                    <th>${isVi ? 'Người Được Giao' : 'Assignees'}</th>
                    <th>${isVi ? 'Hạn Chót' : 'Due Date'}</th>
                    <th>${isVi ? 'Trạng Thái' : 'Status'}</th>
                    <th>${isVi ? 'Chi Tiết' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody>
                  ${tasks.map(t => {
                    const assignees = t.assignee_names || (t.assignee ? [t.assignee.display_name || t.assignee.name] : ['Chưa giao']);
                    return `
                      <tr>
                        <td>
                          <strong style="color:var(--ws-dark); cursor:pointer;" onclick="window.openTaskDetail('${t.id}')">${escapeHtml(t.title)}</strong>
                          ${t.description ? `<div style="font-size:0.75rem; color:var(--ws-text-muted); max-width:320px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(t.description)}</div>` : ''}
                        </td>
                        <td>${renderPriorityBadge(t.priority)}</td>
                        <td>
                          <div style="display:flex; align-items:center; gap:4px; flex-wrap:wrap;">
                            ${assignees.map(n => `<span style="font-size:0.75rem; background:#f1f5f9; color:#334155; padding:2px 8px; border-radius:12px; font-weight:600;"><i class="fa-solid fa-user" style="font-size:0.65rem; color:#16a34a; margin-right:3px;"></i>${escapeHtml(n)}</span>`).join('')}
                          </div>
                        </td>
                        <td><span style="font-family:monospace; font-size:0.8rem;">${t.due_date ? formatDate(t.due_date) : '-'}</span></td>
                        <td>${renderStatusBadge(t.status)}</td>
                        <td>
                          <button class="btn-ws-ghost btn-ws-sm" onclick="window.openTaskDetail('${t.id}')" title="Mở sổ tay SciNote">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Open
                          </button>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `}
      </div>

      <!-- TAB 3: DATASETS -->
      <div id="tabDatasets" class="ws-tab-pane" style="display:none;">
        ${datasets.length === 0 ? renderEmptyState(isVi ? 'Chưa có bộ dữ liệu nào được tải lên' : 'No datasets uploaded in this team') : `
          <div class="ws-card" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0;">
            <div class="ws-table-container">
              <table class="ws-table">
                <thead>
                  <tr>
                    <th>${isVi ? 'Bộ Dữ Liệu' : 'Dataset Name'}</th>
                    <th>${isVi ? 'Loại' : 'Type'}</th>
                    <th>${isVi ? 'Định Dạng' : 'Format'}</th>
                    <th>${isVi ? 'Độ Phân Giải' : 'Resolution'}</th>
                    <th>${isVi ? 'Dung Lượng / Nguồn' : 'Source'}</th>
                    <th>${isVi ? 'Thao Tác' : 'Actions'}</th>
                  </tr>
                </thead>
                <tbody>
                  ${datasets.map(ds => `
                    <tr>
                      <td>
                        <strong style="color:var(--ws-dark);">${escapeHtml(ds.name)}</strong>
                        <div style="font-size:0.75rem; color:var(--ws-text-muted);"><i class="fa-brands fa-google-drive" style="color:#16a34a; margin-right:4px;"></i> 100RE Storage Drive</div>
                      </td>
                      <td><span class="ws-badge">${escapeHtml(ds.data_type || 'time-series')}</span></td>
                      <td><span style="font-weight:700; color:#2563eb;">${escapeHtml(ds.format || 'CSV')}</span></td>
                      <td>${escapeHtml(ds.resolution || '1-sec')}</td>
                      <td><span style="font-size:0.8rem; color:var(--ws-text-light);">${escapeHtml(ds.size || ds.source || 'Standard')}</span></td>
                      <td>
                        <button class="btn-ws-ghost btn-ws-sm" onclick="showToast('Đang mở file từ Google Drive 5TB...')">
                          <i class="fa-solid fa-cloud-arrow-down"></i> Tải Về
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `}
      </div>

      <!-- TAB 4: DOCUMENTS -->
      <div id="tabDocs" class="ws-tab-pane" style="display:none;">
        ${documents.length === 0 ? renderEmptyState(isVi ? 'Chưa có tài liệu nào trong nhóm' : 'No documents in this team') : `
          <div class="ws-card" style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0;">
            <div class="ws-table-container">
              <table class="ws-table">
                <thead>
                  <tr>
                    <th>${isVi ? 'Tên Tài Liệu / Bài Báo' : 'Document Title'}</th>
                    <th>${isVi ? 'Định Dạng' : 'Format'}</th>
                    <th>${isVi ? 'Tác Vụ' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody>
                  ${documents.map(doc => `
                    <tr>
                      <td>
                        <strong style="color:var(--ws-dark);">${escapeHtml(doc.name || doc.title)}</strong>
                        <div style="font-size:0.75rem; color:var(--ws-text-light);">${escapeHtml(doc.file_name || '')}</div>
                      </td>
                      <td><span class="ws-badge ws-badge-done">${escapeHtml(doc.file_type || 'PDF')}</span></td>
                      <td>
                        <button class="btn-ws-ghost btn-ws-sm" onclick="showToast('Đang tải tài liệu...')">
                          <i class="fa-solid fa-download"></i> Tải Về
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `}
      </div>

      <!-- TAB 5: MEMBERS -->
      <div id="tabMembers" class="ws-tab-pane" style="display:none;">
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
          ${members.map(m => `
            <div class="ws-card" style="margin-bottom:0; padding:18px; display:flex; align-items:center; gap:14px; border-radius:12px; border:1px solid #e2e8f0;">
              <img src="${m.avatar_url || '../assets/images/logo.jpg'}" style="width:48px; height:48px; border-radius:50%; object-fit:cover; border:2px solid var(--ws-primary-light);" alt="${escapeHtml(m.name)}" onerror="this.src='../assets/images/logo.jpg'">
              <div>
                <strong style="font-size:1rem; display:block; color:var(--ws-dark); margin-bottom:2px;">${escapeHtml(m.name || m.display_name)}</strong>
                <span style="font-size:0.775rem; color:var(--ws-text-muted); display:block; margin-bottom:6px;">${escapeHtml(m.email || '')}</span>
                <span class="ws-badge ${m.team_role === 'leader' || m.role === 'leader' ? 'ws-badge-done' : (m.role === 'supervisor' ? 'ws-badge-urgent' : 'ws-badge-in_progress')}">
                  ${String(m.team_role || m.role || 'member').toUpperCase()}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  // Tab switching logic
  container.querySelectorAll('#teamDetailTabs .ws-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('#teamDetailTabs .ws-tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.ws-tab-pane').forEach(p => p.style.display = 'none');
      btn.classList.add('active');
      const paneId = btn.getAttribute('data-tab');
      const pane = container.querySelector(`#${paneId}`);
      if (pane) pane.style.display = 'block';
    });
  });

  // Action buttons
  const btnNewTask = container.querySelector('#btnTeamNewTask');
  if (btnNewTask) {
    btnNewTask.addEventListener('click', () => {
      if (typeof window.openNewTaskModal === 'function') {
        window.openNewTaskModal(fullTeamId);
      } else if (typeof window.openCreateTaskModal === 'function') {
        window.openCreateTaskModal('in_progress');
      }
    });
  }

  const btnNewProj = container.querySelector('#btnTeamNewProject');
  if (btnNewProj) {
    btnNewProj.addEventListener('click', () => {
      if (typeof window.openProjectModal === 'function') {
        window.openProjectModal(fullTeamId);
      }
    });
  }

  const btnUploadData = container.querySelector('#btnTeamUploadDataset');
  if (btnUploadData) {
    btnUploadData.addEventListener('click', () => {
      if (typeof window.openUploadDatasetModal === 'function') {
        window.openUploadDatasetModal(fullTeamId);
      }
    });
  }
}
