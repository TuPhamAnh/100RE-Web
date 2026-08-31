/**
 * 100RE LAB WORKSPACE — Seed Data Constant Definitions (SciNote ELN Compatible)
 * Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive (File Storage)
 */

export const SEED_USERS = [
  { id: 'usr-sup-01', email: 'supervisor@100relab.hust.edu.vn', username: 'supervisor', display_name: 'Assoc. Prof. Nguyen Duc Tuyen', member_key: null, avatar_url: 'assets/images/tuyen_nguyen_duc.jpg', role: 'supervisor', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'usr-ldr-01', email: 'duc.ngotri@100relab', username: 'duc.ngotri@100relab', display_name: 'Dr. Ngo Tri Duc', member_key: 'pv-1', avatar_url: 'assets/images/ngo_tri_duc.png', role: 'team_leader', status: 'active', created_at: 1704153600, updated_at: 1704153600 },
  { id: 'usr-ldr-02', email: 'phuong.trinhminh@100relab', username: 'phuong.trinhminh@100relab', display_name: 'Dr. Trinh Minh Phuong', member_key: 'bess-1', avatar_url: 'assets/images/trinh_minh_phuong.jpg', role: 'team_leader', status: 'active', created_at: 1704153600, updated_at: 1704153600 },
  { id: 'usr-res-01', email: 'hai.buiquang@100relab', username: 'hai.buiquang@100relab', display_name: 'Bui Quang Hai', member_key: 'ai-1', avatar_url: 'assets/images/bui_quang_hai.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-02', email: 'anh.nguyentuan@100relab', username: 'anh.nguyentuan@100relab', display_name: 'Nguyen Tuan Anh', member_key: 'dr_uc-1', avatar_url: 'assets/images/nguyen_tuan_anh.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-03', email: 'nam.nguyenhoang@100relab', username: 'nam.nguyenhoang@100relab', display_name: 'Nguyen Hoang Nam', member_key: 'wind-1', avatar_url: 'assets/images/nguyen_hoang_nam.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-04', email: 'cuong.lethe@100relab', username: 'cuong.lethe@100relab', display_name: 'Le The Cuong', member_key: 'ev-1', avatar_url: 'assets/images/le_the_cuong.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-05', email: 'hai.duongminh@100relab', username: 'hai.duongminh@100relab', display_name: 'Duong Minh Hai', member_key: 'smartgrid-2', avatar_url: 'assets/images/duong_minh_hai.png', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-06', email: 'dung.vutien@100relab', username: 'dung.vutien@100relab', display_name: 'Vu Tien Dung', member_key: 'smartgrid-3', avatar_url: 'assets/images/vu_tien_dung.png', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-07', email: 'dung.lengoc@100relab', username: 'dung.lengoc@100relab', display_name: 'Le Ngoc Dung', member_key: 'smartgrid-1', avatar_url: 'assets/images/le_ngoc_dung.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-08', email: 'minh.buiquang@100relab', username: 'minh.buiquang@100relab', display_name: 'Bui Quang Minh', member_key: 'pv-2', avatar_url: 'assets/images/bui_quang_minh.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-09', email: 'quan.leanh@100relab', username: 'quan.leanh@100relab', display_name: 'Dr. Le Anh Quan', member_key: 'dr_uc-2', avatar_url: 'assets/images/le_anh_quan.png', role: 'alumni', status: 'active', created_at: 1704326400, updated_at: 1704326400 },
  { id: 'usr-res-10', email: 'tung.nguyennhu@100relab', username: 'tung.nguyennhu@100relab', display_name: 'Nguyen Nhu Tung', member_key: 'wind-2', avatar_url: 'assets/images/nguyen_nhu_tung.png', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-11', email: 'khanh.daoquoc@100relab', username: 'khanh.daoquoc@100relab', display_name: 'Dao Quoc Khanh', member_key: 'ev-2', avatar_url: 'assets/images/dao_quoc_khanh.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-12', email: 'anh.nguyenhoang@100relab', username: 'anh.nguyenhoang@100relab', display_name: 'Nguyen Hoang Anh', member_key: 'hydrogen-1', avatar_url: 'assets/images/nguyen_hoang_anh.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-13', email: 'anh.nguyenquang@100relab', username: 'anh.nguyenquang@100relab', display_name: 'Nguyen Quang Anh', member_key: 'bess-2', avatar_url: 'assets/images/nguyen_quang_anh.png', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-14', email: 'vinh.tranthihong@100relab', username: 'vinh.tranthihong@100relab', display_name: 'Tran Thi Hong Vinh', member_key: 'bess-3', avatar_url: 'assets/images/tran_thi_hong_vinh.png', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-guest-01', email: 'guest.visiting@100relab', username: 'guest.visiting@100relab', display_name: 'Visiting Fellow', member_key: null, avatar_url: 'assets/images/logo.jpg', role: 'alumni', status: 'active', created_at: 1704240000, updated_at: 1704240000 }
];

export const SEED_TEAMS = [
  { id: 'team-pv', name: 'Photovoltaic (PV)', slug: 'pv', description: 'High-efficiency solar cells, bifacial modules modeling, solar irradiance forecasting and grid integration.', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'team-wind', name: 'Wind Energy', slug: 'wind', description: 'Wind turbine aerodynamics, power curve forecasting, wake effect modeling and offshore wind integration.', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'team-hydrogen', name: 'Green Hydrogen', slug: 'hydrogen', description: 'Water electrolysis, PEM & alkaline fuel cells, hydrogen storage supply chains and H2-to-power systems.', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'team-smartgrid', name: 'Smart Grid', slug: 'smartgrid', description: 'Microgrid energy management, real-time SCADA, active distribution networks and power quality control.', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'team-ev', name: 'Electric Vehicle (EV)', slug: 'ev', description: 'V2G (Vehicle-to-Grid) bi-directional charging, smart charging scheduling, and battery health degradation.', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'team-ai', name: 'Artificial Intelligence (AI)', slug: 'ai', description: 'Deep learning, neural networks, physics-informed AI, and reinforcement learning for energy systems.', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'team-uc', name: 'Unit Commitment', slug: 'uc', description: 'Security-constrained unit commitment, mixed-integer linear programming, power market clearing and dispatch.', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'team-bess', name: 'Battery Energy Storage (BESS)', slug: 'bess', description: 'Li-ion battery SoC/SoH estimation, battery energy management systems (BEMS), degradation and peak shaving.', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'team-dr', name: 'Demand Response', slug: 'dr', description: 'Incentive-based demand response, commercial/industrial flexibility aggregation, and transactive energy.', status: 'active', created_at: 1704067200, updated_at: 1704067200 }
];

export const SEED_TEAM_MEMBERS = [
  { id: 'tm-01', team_id: 'team-pv', user_id: 'usr-ldr-01', team_role: 'leader', joined_at: 1704067200 },
  { id: 'tm-02', team_id: 'team-bess', user_id: 'usr-ldr-02', team_role: 'leader', joined_at: 1704067200 },
  { id: 'tm-03', team_id: 'team-ai', user_id: 'usr-res-01', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-04', team_id: 'team-pv', user_id: 'usr-res-01', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-05', team_id: 'team-bess', user_id: 'usr-res-01', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-06', team_id: 'team-smartgrid', user_id: 'usr-res-02', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-07', team_id: 'team-uc', user_id: 'usr-res-02', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-08', team_id: 'team-dr', user_id: 'usr-res-02', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-09', team_id: 'team-wind', user_id: 'usr-res-03', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-10', team_id: 'team-ev', user_id: 'usr-res-04', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-11', team_id: 'team-smartgrid', user_id: 'usr-res-05', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-12', team_id: 'team-smartgrid', user_id: 'usr-res-06', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-13', team_id: 'team-smartgrid', user_id: 'usr-res-07', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-14', team_id: 'team-pv', user_id: 'usr-res-08', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-15', team_id: 'team-dr', user_id: 'usr-res-09', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-16', team_id: 'team-uc', user_id: 'usr-res-09', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-17', team_id: 'team-wind', user_id: 'usr-res-10', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-18', team_id: 'team-ev', user_id: 'usr-res-11', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-19', team_id: 'team-hydrogen', user_id: 'usr-res-12', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-20', team_id: 'team-bess', user_id: 'usr-res-13', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-21', team_id: 'team-bess', user_id: 'usr-res-14', team_role: 'member', joined_at: 1704153600 }
];

export const SEED_PROJECTS = [
  { id: 'proj-bess-01', team_id: 'team-bess', name: 'Data Center BESS Peak Shaving & Frequency Regulation', slug: 'data-center-bess', description: 'Optimal sizing and dynamic control of 5MW/10MWh BESS for hyperscale data center frequency response in PJM market.', status: 'active', progress: 65, start_date: '2026-01-15', end_date: '2026-11-30', drive_folder_id: '1BESS_Folder_DataCenter_01', created_by: 'usr-sup-01', created_at: 1705276800, updated_at: 1708905600 },
  { id: 'proj-pv-01', team_id: 'team-pv', name: 'AI-Driven Solar Irradiance & PV Yield Forecasting', slug: 'ai-pv-forecasting', description: 'Spatio-temporal Transformer models for ultra-short term (15-min ahead) solar irradiance and ramp-rate prediction.', status: 'active', progress: 40, start_date: '2026-02-01', end_date: '2026-09-30', drive_folder_id: '1PV_Folder_AIForecast_02', created_by: 'usr-ldr-01', created_at: 1706745600, updated_at: 1708905600 },
  { id: 'proj-grid-01', team_id: 'team-smartgrid', name: 'Microgrid Real-Time Dispatch with High Renewable Penetration', slug: 'microgrid-rt-dispatch', description: 'Decentralized MPC and frequency-voltage stability control for islanded 100% renewable microgrid pilot at HUST.', status: 'planning', progress: 15, start_date: '2026-03-01', end_date: '2026-12-31', drive_folder_id: '1Grid_Folder_Microgrid_03', created_by: 'usr-sup-01', created_at: 1709251200, updated_at: 1709251200 }
];

export const SEED_EXPERIMENTS = [
  { id: 'exp-bess-01', project_id: 'proj-bess-01', team_id: 'team-bess', name: 'Experiment 1: Step Response & AGC PJM Tracking Test', slug: 'agc-tracking-test', description: 'Benchmarking 2-second dynamic response with Chroma Cycler and Hardware-in-the-Loop simulation.', status: 'in_progress', start_date: '2026-02-01', end_date: '2026-04-15', created_by: 'usr-ldr-02', created_at: 1706800000, updated_at: 1708500000 },
  { id: 'exp-bess-02', project_id: 'proj-bess-01', team_id: 'team-bess', name: 'Experiment 2: Accelerated Cycle Aging at 45°C', slug: 'cycle-aging-test', description: 'Thermal chamber 1C/1C cycling test to measure capacity fade and solid electrolyte interphase (SEI) growth.', status: 'review', start_date: '2026-02-15', end_date: '2026-05-30', created_by: 'usr-ldr-02', created_at: 1707500000, updated_at: 1708800000 },
  { id: 'exp-pv-01', project_id: 'proj-pv-01', team_id: 'team-pv', name: 'Experiment 1: Solar Irradiance 1-Sec Sampling & Sky Imager Setup', slug: 'solar-sampling-setup', description: 'Synchronized calibration between Kipp & Zonen pyranometers and total sky imager on C7 rooftop.', status: 'in_progress', start_date: '2026-02-10', end_date: '2026-06-01', created_by: 'usr-ldr-01', created_at: 1707200000, updated_at: 1708500000 },
  { id: 'exp-grid-01', project_id: 'proj-grid-01', team_id: 'team-smartgrid', name: 'Experiment 1: OPAL-RT Hardware-In-The-Loop Interface Calibration', slug: 'hil-calibration', description: 'Validating real-time FPGA execution time-step under 50 microseconds on 33-bus feeder model.', status: 'planning', start_date: '2026-03-15', end_date: '2026-07-01', created_by: 'usr-sup-01', created_at: 1709251200, updated_at: 1709251200 }
];

export const SEED_PROJECT_MEMBERS = [
  { id: 'pm-01', project_id: 'proj-bess-01', user_id: 'usr-ldr-02', project_role: 'leader', joined_at: 1705276800 },
  { id: 'pm-02', project_id: 'proj-bess-01', user_id: 'usr-res-01', project_role: 'contributor', joined_at: 1705276800 },
  { id: 'pm-03', project_id: 'proj-bess-01', user_id: 'usr-res-02', project_role: 'member', joined_at: 1705276800 },
  { id: 'pm-04', project_id: 'proj-pv-01', user_id: 'usr-ldr-01', project_role: 'leader', joined_at: 1706745600 },
  { id: 'pm-05', project_id: 'proj-pv-01', user_id: 'usr-res-01', project_role: 'member', joined_at: 1706745600 },
  { id: 'pm-06', project_id: 'proj-grid-01', user_id: 'usr-res-02', project_role: 'leader', joined_at: 1709251200 },
  { id: 'pm-07', project_id: 'proj-grid-01', user_id: 'usr-res-04', project_role: 'member', joined_at: 1709251200 }
];

export const SEED_TASKS = [
  { 
    id: 'tsk-sg-01', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Sửa miniscada', 
    description: 'Tìm hiểu toàn bộ lỗi và lên danh sách thiết bị', 
    status: 'cancelled', 
    priority: 'low', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignees: ['usr-smartgrid-1788099630575', 'usr-smartgrid-1788099612925', 'usr-smartgrid-1788108587815'],
    assignee_names: ['Long', 'Hiếu Đỗ', 'Tu Pham Anh'],
    due_date: '2026-06-24', 
    created_at: 1718300000, 
    updated_at: 1720975680 
  },
  { 
    id: 'tsk-sg-02', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Severless Cloud Computing', 
    description: 'Test thử full mạch cứng', 
    status: 'cancelled', 
    priority: 'medium', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignees: ['usr-smartgrid-1788099630575', 'usr-res-14'],
    assignee_names: ['Long', 'Vinh Hồng'],
    due_date: '2026-07-30', 
    created_at: 1718500000, 
    updated_at: 1721588580 
  },
  { 
    id: 'tsk-sg-03', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Project Smartgrid T5-8', 
    description: 'D2', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-smartgrid-1788108587815', 
    assignees: ['usr-smartgrid-1788108587815', 'usr-smartgrid-1788099630575'],
    assignee_names: ['Tu Pham Anh', 'Long'],
    due_date: '2026-07-22', 
    created_at: 1718600000, 
    updated_at: 1720893480 
  },
  { 
    id: 'tsk-sg-04', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Bằng sáng chế - Build Application', 
    description: 'Tìm hiểu: Backend + Frontend, API, Database', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-smartgrid-1788099612925', 
    assignees: ['usr-smartgrid-1788099612925', 'usr-smartgrid-1788108587815', 'usr-smartgrid-1788099630575'],
    assignee_names: ['Hiếu Đỗ', 'Tu Pham Anh', 'Long'],
    due_date: '2026-07-30', 
    created_at: 1719000000, 
    updated_at: 1723054080 
  },
  { 
    id: 'tsk-sg-05', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Data Center - RL', 
    description: 'First Draft', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignees: ['usr-smartgrid-1788099630575', 'usr-smartgrid-1788099612925', 'usr-smartgrid-1788108587815'],
    assignee_names: ['Long', 'Hiếu Đỗ', 'Tu Pham Anh'],
    due_date: '2026-08-03', 
    created_at: 1718000000, 
    updated_at: 1719684540 
  },
  { 
    id: 'tsk-sg-06', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Sửa review PowerCon', 
    description: 'Hoàn thiện bản sửa đổi bài báo PowerCon gửi ban biên tập', 
    status: 'in_progress', 
    priority: 'low', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignees: ['usr-smartgrid-1788099630575', 'usr-smartgrid-1788108587815', 'usr-smartgrid-1788099612925', 'usr-res-14'],
    assignee_names: ['Long', 'Tu Pham Anh', 'Hiếu Đỗ', 'Vinh Hồng'],
    due_date: '2026-09-01', 
    created_at: 1719500000, 
    updated_at: 1720880220 
  },
  { 
    id: 'tsk-sg-07', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Slide PowerCon', 
    description: 'Thiết kế slide thuyết trình báo cáo PowerCon', 
    status: 'in_progress', 
    priority: 'low', 
    assigned_to: 'usr-res-05', 
    assignees: ['usr-res-05', 'usr-smartgrid-1788099612925', 'usr-smartgrid-1788108587815'],
    assignee_names: ['Hai Duong Minh', 'Hiếu Đỗ', 'Tu Pham Anh'],
    due_date: '2026-09-20', 
    created_at: 1720000000, 
    updated_at: 1721498100 
  },
  { 
    id: 'tsk-sg-08', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Data Center - Review', 
    description: 'Đánh giá cấu trúc mạng và phân tích hiệu năng Data Center', 
    status: 'in_progress', 
    priority: 'low', 
    assigned_to: 'usr-smartgrid-1788099612925', 
    assignees: ['usr-smartgrid-1788099612925', 'usr-res-14'],
    assignee_names: ['Hiếu Đỗ', 'Vinh Hồng'],
    due_date: '2026-09-15', 
    created_at: 1720500000, 
    updated_at: 1721587020 
  },
  { 
    id: 'tsk-sg-09', 
    team_id: 'team-bess', 
    project_id: 'proj-bess-01', 
    title: 'Nafosted BESS', 
    description: 'Nghiên cứu mô hình lưu trữ năng lượng pin BESS đề tài Nafosted', 
    status: 'in_progress', 
    priority: 'high', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignees: ['usr-smartgrid-1788099630575', 'usr-res-14'],
    assignee_names: ['Long', 'Vinh Hồng'],
    due_date: '2026-07-30', 
    created_at: 1719200000, 
    updated_at: 1721500800 
  },
  { 
    id: 'tsk-sg-10', 
    team_id: 'team-smartgrid', 
    project_id: 'proj-grid-01', 
    title: 'Distributed Controller - RNN', 
    description: 'Sửa lại ICGEA để Long test HIL bên Đài', 
    status: 'todo', 
    priority: 'medium', 
    assigned_to: 'usr-smartgrid-1788099630575', 
    assignees: ['usr-smartgrid-1788099630575', 'usr-smartgrid-1788108587815', 'usr-smartgrid-1788099612925'],
    assignee_names: ['Long', 'Tu Pham Anh', 'Hiếu Đỗ'],
    due_date: '2026-09-01', 
    created_at: 1720000000, 
    updated_at: 1720893420 
  },
  { 
    id: 'tsk-01', 
    team_id: 'team-bess', 
    project_id: 'proj-bess-01', 
    title: 'Implement RegD frequency regulation control algorithm', 
    description: 'Develop MATLAB/Simulink and Python controller for fast 2-second response to PJM RegD automatic generation control signals.', 
    status: 'in_progress', 
    priority: 'urgent', 
    assigned_to: 'usr-res-01', 
    assignee_names: ['Bui Quang Hai'],
    due_date: '2026-09-15', 
    created_at: 1707000000, 
    updated_at: 1708500000 
  }
];

export const SEED_TASK_COMMENTS = [
  { id: 'tc-01', task_id: 'tsk-01', user_id: 'usr-ldr-02', content: 'Make sure the SOC limiter prevents charging above 90% during high price spikes.', created_at: 1707100000 },
  { id: 'tc-02', task_id: 'tsk-01', user_id: 'usr-res-01', content: 'Understood. Tested in Simulink, PID + Feedforward tracks RegD with <1.5s delay.', created_at: 1707200000 }
];

export const SEED_DOCUMENTS = [
  { id: 'doc-01', team_id: 'team-bess', project_id: 'proj-bess-01', title: 'IEEE 1547-2018 Interconnection Standard Notes', file_name: 'IEEE_1547_Standard_Summary.pdf', file_size: 1542000, format: 'PDF', category: 'Standards', drive_file_id: '1GoogleDrive_Doc_IEEE1547_01', uploaded_by: 'usr-ldr-02', created_at: 1705500000, updated_at: 1705500000 },
  { id: 'doc-02', team_id: 'team-pv', project_id: 'proj-pv-01', title: 'Spatio-Temporal Attention for Solar Forecasting (Paper Draft)', file_name: 'Transformer_Solar_Draft_v2.docx', file_size: 840000, format: 'DOCX', category: 'Publications', drive_file_id: '1GoogleDrive_Doc_PVTransformer_02', uploaded_by: 'usr-res-01', created_at: 1708000000, updated_at: 1708500000 }
];

export const SEED_DATASETS = [
  { id: 'ds-01', team_id: 'team-bess', project_id: 'proj-bess-01', name: '5MW BESS 1-Second PJM Regulation & Thermal Telemetry', file_name: 'BESS_Telemetry_1Sec_PJM.parquet', file_size: 104857600, format: 'PARQUET', data_type: 'time-series', resolution: '1-second', source: 'Chroma Hardware Rig', storage_provider: 'google_drive', drive_file_id: '1GoogleDrive_DS_BESS_01', uploaded_by: 'usr-ldr-02', tags: 'BESS,PJM,Degradation,Thermal', description: 'Raw voltage, current, cell temperatures and state-of-charge time series.', created_at: 1706000000, updated_at: 1706000000 },
  { id: 'ds-02', team_id: 'team-pv', project_id: 'proj-pv-01', name: 'HUST C7 Rooftop 1-Sec Solar GHI, DNI & Weather Log 2025-2026', file_name: 'HUST_C7_Solar_Weather_1s.csv', file_size: 52428800, format: 'CSV', data_type: 'time-series', resolution: '1-second', source: 'Kipp & Zonen Pyranometer', storage_provider: 'google_drive', drive_file_id: '1GoogleDrive_DS_PV_02', uploaded_by: 'usr-res-01', tags: 'PV,Solar,GHI,DNI,Weather', description: 'High precision 1-second global horizontal and direct normal irradiance.', created_at: 1707000000, updated_at: 1707000000 }
];

export const SEED_INSTRUMENTS = [
  { id: 'inst-01', name: 'Chroma 17020 Regenerative Battery Pack Test System', model: 'Chroma 17020 (60V/300A/10kW)', serial_number: 'CHR-2024-VN-089', team_id: 'team-bess', location: 'Lab C7-201 Hardware Bench 1', status: 'in_use', specs: 'Multi-channel energy regenerative test system, 1ms sampling, simulated driving profiles.', created_at: 1704067200 },
  { id: 'inst-02', name: 'OPAL-RT OP5707 Real-Time Digital Simulator', model: 'OP5707 FPGA Virtex-7', serial_number: 'OPAL-5707-HUST-01', team_id: 'team-smartgrid', location: 'Lab C7-204 HIL Rack 2', status: 'available', specs: 'Real-time eMEGAsim & RT-LAB, 32 analog out, 64 digital I/O, sub-10us timestep.', created_at: 1704067200 },
  { id: 'inst-03', name: 'Kipp & Zonen CMP11 Pyranometer & Total Sky Imager', model: 'CMP11 Class A + TSI-440', serial_number: 'KZ-CMP11-9921', team_id: 'team-pv', location: 'C7 Building Rooftop Mast A', status: 'in_use', specs: 'Secondary standard ISO 9060 pyranometer with automated hemispherical fish-eye cloud camera.', created_at: 1704067200 },
  { id: 'inst-04', name: 'Yokogawa WT5000 Precision Power Analyzer', model: 'WT5000 7-Channel Input', serial_number: 'YOKO-WT-44120', team_id: 'team-smartgrid', location: 'Lab C7-202 Grid Bench', status: 'available', specs: '0.03% power measurement accuracy, 10MS/s 18-bit ADC, harmonic analysis up to 500th order.', created_at: 1704067200 }
];

export const SEED_PROTOCOLS = [
  { id: 'prot-01', team_id: 'team-bess', title: 'SOP-01: Li-ion Battery 1C/1C Constant Current Cycling & Capacity Test', version: 'v2.1', category: 'Testing SOP', created_by: 'usr-ldr-02', created_at: 1704500000 },
  { id: 'prot-02', team_id: 'team-pv', title: 'SOP-02: Daily Calibration & Sensor Cleaning for Rooftop Pyranometers', version: 'v1.4', category: 'Calibration SOP', created_by: 'usr-ldr-01', created_at: 1704600000 }
];

export const SEED_PROTOCOL_STEPS = [
  { id: 'ps-01', task_id: 'tsk-01', step_order: 1, title: 'Step 1: Check Chroma 17020 thermal emergency stop & cooling fluid', instruction: 'Ensure coolant pressure is > 1.5 bar and safety interlock circuit is closed before powering up.', status: 'completed', completed_by: 'usr-res-01', completed_at: 1707050000 },
  { id: 'ps-02', task_id: 'tsk-01', step_order: 2, title: 'Step 2: Connect CAN bus interface and verify telemetry stream', instruction: 'Initialize Vector CANoe logger and verify cell voltage frame 0x18FF50E5 is receiving 100Hz packets.', status: 'completed', completed_by: 'usr-res-01', completed_at: 1707150000 },
  { id: 'ps-03', task_id: 'tsk-01', step_order: 3, title: 'Step 3: Run 2-hour PJM RegD dynamic power profile tracking test', instruction: 'Execute dynamic script `pjm_regd_test.py` with 2-second setpoint commands and record terminal response.', status: 'in_progress', completed_by: null, completed_at: null },
  { id: 'ps-04', task_id: 'tsk-01', step_order: 4, title: 'Step 4: Calculate Root-Mean-Square Tracking Error & Efficiency', instruction: 'Compute tracking delay, energy throughput, and round-trip efficiency (RTE) from Parquet export.', status: 'pending', completed_by: null, completed_at: null }
];

export const SEED_LAB_NOTES = [
  { id: 'ln-01', task_id: 'tsk-01', user_id: 'usr-res-01', note_type: 'observation', content: 'Observed 1.2s delay during rapid ramp-up from 0kW to +500kW. Response time fully satisfies PJM 2.0s rule.', created_at: 1707180000 },
  { id: 'ln-02', task_id: 'tsk-01', user_id: 'usr-ldr-02', note_type: 'supervisor_review', content: 'Excellent response speed. Please repeat test under 35°C elevated ambient temperature.', created_at: 1707250000 }
];

export const SEED_SIGNOFFS = [
  { id: 'so-01', task_id: 'tsk-05', supervisor_id: 'usr-sup-01', status: 'approved', comments: 'Calibration results verified and aligned with national meteorological standards.', signed_at: 1708400000 }
];

export const SEED_ACTIVITY_LOGS = [
  { id: 'act-01', user_id: 'usr-ldr-02', team_id: 'team-bess', project_id: 'proj-bess-01', entity_type: 'task', entity_id: 'tsk-01', action: 'create_task', metadata: JSON.stringify({ title: 'Implement RegD frequency regulation control algorithm' }), created_at: 1707000000 },
  { id: 'act-02', user_id: 'usr-res-01', team_id: 'team-bess', project_id: 'proj-bess-01', entity_type: 'step', entity_id: 'ps-01', action: 'complete_step', metadata: JSON.stringify({ step: 'Step 1: Check Chroma 17020 thermal emergency stop' }), created_at: 1707050000 },
  { id: 'act-03', user_id: 'usr-sup-01', team_id: 'team-pv', project_id: 'proj-pv-01', entity_type: 'signoff', entity_id: 'so-01', action: 'approve_task', metadata: JSON.stringify({ task: 'tsk-05', status: 'approved' }), created_at: 1708400000 }
];
