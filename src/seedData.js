/**
 * 100RE LAB WORKSPACE — Seed Data Constant Definitions
 * Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive (File Storage)
 */

export const SEED_USERS = [
  { id: 'usr-sup-01', email: 'supervisor@100relab.hust.edu.vn', display_name: 'Assoc. Prof. Nguyen Duc Tuyen', member_key: null, avatar_url: 'assets/images/logo.jpg', role: 'supervisor', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'usr-ldr-01', email: 'leader.pv@100relab.hust.edu.vn', display_name: 'Dr. Ngo Tri Duc', member_key: 'pv-1', avatar_url: 'assets/images/ngo_tri_duc.png', role: 'team_leader', status: 'active', created_at: 1704153600, updated_at: 1704153600 },
  { id: 'usr-ldr-02', email: 'leader.bess@100relab.hust.edu.vn', display_name: 'Dr. Trinh Minh Phuong', member_key: 'bess-1', avatar_url: 'assets/images/trinh_minh_phuong.jpg', role: 'team_leader', status: 'active', created_at: 1704153600, updated_at: 1704153600 },
  { id: 'usr-res-01', email: 'hai.ai@100relab.hust.edu.vn', display_name: 'Bui Quang Hai', member_key: 'ai-1', avatar_url: 'assets/images/bui_quang_hai.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-02', email: 'anh.grid@100relab.hust.edu.vn', display_name: 'Nguyen Tuan Anh', member_key: 'dr_uc-1', avatar_url: 'assets/images/nguyen_tuan_anh.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-03', email: 'nam.wind@100relab.hust.edu.vn', display_name: 'Nguyen Hoang Nam', member_key: 'wind-1', avatar_url: 'assets/images/nguyen_hoang_nam.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-04', email: 'cuong.ev@100relab.hust.edu.vn', display_name: 'Le The Cuong', member_key: 'ev-1', avatar_url: 'assets/images/le_the_cuong.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-05', email: 'anh.h2@100relab.hust.edu.vn', display_name: 'Nguyen Hoang Anh', member_key: 'hydrogen-1', avatar_url: 'assets/images/nguyen_hoang_anh.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-res-06', email: 'guest.visiting@100relab.hust.edu.vn', display_name: 'Visiting Fellow (Workspace Only)', member_key: null, avatar_url: 'assets/images/logo.jpg', role: 'researcher', status: 'active', created_at: 1704240000, updated_at: 1704240000 },
  { id: 'usr-alm-01', email: 'alumni.quan@100relab.hust.edu.vn', display_name: 'Dr. Le Anh Quan', member_key: 'dr_uc-2', avatar_url: 'assets/images/le_anh_quan.png', role: 'alumni', status: 'active', created_at: 1704326400, updated_at: 1704326400 }
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
  { id: 'tm-05', team_id: 'team-smartgrid', user_id: 'usr-res-02', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-06', team_id: 'team-uc', user_id: 'usr-res-02', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-07', team_id: 'team-wind', user_id: 'usr-res-03', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-08', team_id: 'team-ev', user_id: 'usr-res-04', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-09', team_id: 'team-hydrogen', user_id: 'usr-res-05', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-10', team_id: 'team-bess', user_id: 'usr-res-01', team_role: 'member', joined_at: 1704153600 },
  { id: 'tm-11', team_id: 'team-bess', user_id: 'usr-alm-01', team_role: 'member', joined_at: 1704153600 }
];

export const SEED_PROJECTS = [
  { id: 'proj-bess-01', team_id: 'team-bess', name: 'Data Center BESS Peak Shaving & Frequency Regulation', slug: 'data-center-bess', description: 'Optimal sizing and dynamic control of 5MW/10MWh BESS for hyperscale data center frequency response in PJM market.', status: 'active', progress: 65, start_date: '2026-01-15', end_date: '2026-11-30', drive_folder_id: '1BESS_Folder_DataCenter_01', created_by: 'usr-sup-01', created_at: 1705276800, updated_at: 1708905600 },
  { id: 'proj-pv-01', team_id: 'team-pv', name: 'AI-Driven Solar Irradiance & PV Yield Forecasting', slug: 'ai-pv-forecasting', description: 'Spatio-temporal Transformer models for ultra-short term (15-min ahead) solar irradiance and ramp-rate prediction.', status: 'active', progress: 40, start_date: '2026-02-01', end_date: '2026-09-30', drive_folder_id: '1PV_Folder_AIForecast_02', created_by: 'usr-ldr-01', created_at: 1706745600, updated_at: 1708905600 },
  { id: 'proj-grid-01', team_id: 'team-smartgrid', name: 'Microgrid Real-Time Dispatch with High Renewable Penetration', slug: 'microgrid-rt-dispatch', description: 'Decentralized MPC and frequency-voltage stability control for islanded 100% renewable microgrid pilot at HUST.', status: 'planning', progress: 15, start_date: '2026-03-01', end_date: '2026-12-31', drive_folder_id: '1Grid_Folder_Microgrid_03', created_by: 'usr-sup-01', created_at: 1709251200, updated_at: 1709251200 }
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
  { id: 'tsk-01', team_id: 'team-bess', project_id: 'proj-bess-01', title: 'Implement RegD frequency regulation control algorithm', description: 'Develop MATLAB/Simulink and Python controller for fast 2-second response to PJM RegD automatic generation control signals.', status: 'in_progress', priority: 'urgent', assigned_to: 'usr-res-01', created_by: 'usr-ldr-02', due_date: '2026-09-15', created_at: 1707000000, updated_at: 1708500000, completed_at: null },
  { id: 'tsk-02', team_id: 'team-bess', project_id: 'proj-bess-01', title: 'Validate battery electro-thermal degradation model', description: 'Calibrate Arrhenius-based capacity fade equations with experimental cycling test data at 25C and 45C.', status: 'review', priority: 'high', assigned_to: 'usr-res-01', created_by: 'usr-ldr-02', due_date: '2026-09-10', created_at: 1706000000, updated_at: 1708000000, completed_at: null },
  { id: 'tsk-03', team_id: 'team-bess', project_id: 'proj-bess-01', title: 'Compile comprehensive IEEE Trans. paper draft', description: 'Draft Sections III and IV describing mathematical formulation, MILP optimization, and economic dispatch results.', status: 'todo', priority: 'medium', assigned_to: 'usr-res-02', created_by: 'usr-ldr-02', due_date: '2026-10-01', created_at: 1708000000, updated_at: 1708000000, completed_at: null },
  { id: 'tsk-04', team_id: 'team-bess', project_id: 'proj-bess-01', title: 'Complete baseline economic cost-benefit analysis', description: 'Calculate LCOE and Net Present Value comparing lithium iron phosphate (LFP) vs nickel manganese cobalt (NMC) packs.', status: 'done', priority: 'high', assigned_to: 'usr-ldr-02', created_by: 'usr-sup-01', due_date: '2026-08-20', created_at: 1705500000, updated_at: 1708000000, completed_at: 1708000000 },
  { id: 'tsk-05', team_id: 'team-pv', project_id: 'proj-pv-01', title: 'Collect 1-sec resolution solar pyranometer data from Lab Rooftop', description: 'Extract, clean and synchronize irradiance time-series with Ambient Temperature sensors for training dataset.', status: 'in_progress', priority: 'high', assigned_to: 'usr-res-01', created_by: 'usr-ldr-01', due_date: '2026-09-20', created_at: 1707500000, updated_at: 1708500000, completed_at: null },
  { id: 'tsk-06', team_id: 'team-pv', project_id: 'proj-pv-01', title: 'Train Spatio-temporal Graph Neural Network on GPU node', description: 'Benchmark GNN vs LSTM architectures for 15-min and 60-min horizon ramp-rate prediction error metric (nRMSE).', status: 'todo', priority: 'urgent', assigned_to: 'usr-res-01', created_by: 'usr-ldr-01', due_date: '2026-09-28', created_at: 1708200000, updated_at: 1708200000, completed_at: null },
  { id: 'tsk-07', team_id: 'team-smartgrid', project_id: 'proj-grid-01', title: 'Build hardware-in-the-loop (HIL) testbed topology in OPAL-RT', description: 'Configure real-time simulation model of 33-bus distribution feeder with 3 distributed PV inverters and BESS.', status: 'todo', priority: 'medium', assigned_to: 'usr-res-02', created_by: 'usr-sup-01', due_date: '2026-10-15', created_at: 1709251200, updated_at: 1709251200, completed_at: null }
];

export const SEED_TASK_COMMENTS = [
  { id: 'cm-01', task_id: 'tsk-01', user_id: 'usr-res-01', content: 'Completed the filter step. Response time on step test is currently 1.4 seconds, well below PJM 2.0s limit.', created_at: 1707200000, updated_at: 1707200000 },
  { id: 'cm-02', task_id: 'tsk-01', user_id: 'usr-ldr-02', content: 'Excellent progress. Please make sure the anti-windup integration is tested under severe battery saturation.', created_at: 1707250000, updated_at: 1707250000 },
  { id: 'cm-03', task_id: 'tsk-02', user_id: 'usr-res-01', content: 'Submitted test report with cycle aging figures. Ready for review.', created_at: 1708100000, updated_at: 1708100000 }
];

export const SEED_DOCUMENTS = [
  { id: 'doc-01', team_id: 'team-bess', project_id: 'proj-bess-01', name: 'PJM Manual 12: Frequency Regulation Market Rules', description: 'Official market guidelines and performance score calculation standards for energy storage assets.', file_name: 'PJM_Manual_12_Regulation.pdf', mime_type: 'application/pdf', file_size: 2458000, storage_provider: 'google_drive', drive_file_id: '1PJM_Manual_12_Regulation_DriveFileId_01', drive_folder_id: '1BESS_Docs_Folder', uploaded_by: 'usr-ldr-02', tags: 'PJM,Standard,Regulation', created_at: 1705600000, updated_at: 1705600000 },
  { id: 'doc-02', team_id: 'team-bess', project_id: 'proj-bess-01', name: 'BESS Technical Architecture Specification & Control Schematics', description: 'Internal system engineering document detailing inverter topology and PLC communication mapping.', file_name: 'BESS_Technical_Specification_v2.docx', mime_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', file_size: 1845000, storage_provider: 'google_drive', drive_file_id: '1BESS_Spec_v2_DriveFileId_02', drive_folder_id: '1BESS_Docs_Folder', uploaded_by: 'usr-res-01', tags: 'Architecture,Spec,BESS', created_at: 1706800000, updated_at: 1706800000 },
  { id: 'doc-03', team_id: 'team-pv', project_id: 'proj-pv-01', name: 'Solar Irradiance Forecasting Model Evaluation Report', description: 'Detailed benchmark comparing LSTM, Temporal Convolutional Networks, and Transformers on 2025 HUST dataset.', file_name: 'PV_Yield_Forecasting_Report.pdf', mime_type: 'application/pdf', file_size: 3120000, storage_provider: 'google_drive', drive_file_id: '1PV_Report_DriveFileId_03', drive_folder_id: '1PV_Docs_Folder', uploaded_by: 'usr-res-01', tags: 'PV,AI,Benchmark', created_at: 1707900000, updated_at: 1707900000 }
];

export const SEED_DATASETS = [
  { id: 'ds-01', team_id: 'team-bess', project_id: 'proj-bess-01', name: 'PJM AGC RegD Dynamic Frequency Signal 2025-2026', description: 'High-frequency 2-second timestamped regulation dispatch signals and real-time area control error (ACE) measurements.', source: 'PJM Interconnection Data Portal', data_type: 'time-series', start_date: '2025-01-01', end_date: '2026-01-01', resolution: '2-second', format: 'CSV', file_size: 145000000, storage_provider: 'google_drive', drive_file_id: '1PJM_RegD_2025_CSV_DriveFileId_01', drive_folder_id: '1BESS_Datasets_Folder', uploaded_by: 'usr-ldr-02', tags: 'PJM,AGC,RegD,BESS,Frequency Regulation,2026', created_at: 1705700000, updated_at: 1705700000 },
  { id: 'ds-02', team_id: 'team-bess', project_id: 'proj-bess-01', name: 'LFP 280Ah Battery Cell Cycle Aging & Electrochemical Impedance', description: 'Experimental cycling laboratory measurements including voltage, current, temperature, and periodic EIS impedance spectroscopy.', source: '100RE Battery Testing Lab Bench', data_type: 'experimental', start_date: '2025-06-01', end_date: '2025-12-31', resolution: '10-second', format: 'MAT / HDF5', file_size: 84000000, storage_provider: 'google_drive', drive_file_id: '1LFP_280Ah_EIS_MAT_DriveFileId_02', drive_folder_id: '1BESS_Datasets_Folder', uploaded_by: 'usr-res-01', tags: 'Battery,Degradation,EIS,LFP,Experimental', created_at: 1706900000, updated_at: 1706900000 },
  { id: 'ds-03', team_id: 'team-pv', project_id: 'proj-pv-01', name: 'HUST 100RE Rooftop Solar Irradiance & Weather Station Dataset', description: 'Calibrated GHI, DNI, DHI pyranometer recordings alongside ambient temperature, relative humidity, and wind speed.', source: '100RE On-campus Weather Station', data_type: 'measurement', start_date: '2025-01-01', end_date: '2026-06-30', resolution: '1-second', format: 'Parquet / CSV', file_size: 320000000, storage_provider: 'google_drive', drive_file_id: '1HUST_Solar_Parquet_DriveFileId_03', drive_folder_id: '1PV_Datasets_Folder', uploaded_by: 'usr-res-01', tags: 'PV,Solar,GHI,Pyranometer,Weather,2026', created_at: 1707800000, updated_at: 1707800000 }
];

export const SEED_ACTIVITY_LOGS = [
  { id: 'act-01', user_id: 'usr-sup-01', team_id: 'team-bess', project_id: 'proj-bess-01', entity_type: 'project', entity_id: 'proj-bess-01', action: 'create_project', metadata: '{"name":"Data Center BESS Peak Shaving & Frequency Regulation"}', created_at: 1705276800 },
  { id: 'act-02', user_id: 'usr-ldr-02', team_id: 'team-bess', project_id: 'proj-bess-01', entity_type: 'dataset', entity_id: 'ds-01', action: 'upload_dataset', metadata: '{"name":"PJM AGC RegD Dynamic Frequency Signal 2025-2026","format":"CSV","storage":"google_drive"}', created_at: 1705700000 },
  { id: 'act-03', user_id: 'usr-ldr-02', team_id: 'team-bess', project_id: 'proj-bess-01', entity_type: 'task', entity_id: 'tsk-01', action: 'create_task', metadata: '{"title":"Implement RegD frequency regulation control algorithm","assigned_to":"usr-res-01"}', created_at: 1707000000 },
  { id: 'act-04', user_id: 'usr-res-01', team_id: 'team-bess', project_id: 'proj-bess-01', entity_type: 'task', entity_id: 'tsk-01', action: 'update_task_status', metadata: '{"old_status":"todo","new_status":"in_progress"}', created_at: 1707100000 },
  { id: 'act-05', user_id: 'usr-res-01', team_id: 'team-bess', project_id: 'proj-bess-01', entity_type: 'comment', entity_id: 'cm-01', action: 'add_comment', metadata: '{"task_title":"Implement RegD frequency regulation control algorithm"}', created_at: 1707200000 },
  { id: 'act-06', user_id: 'usr-ldr-01', team_id: 'team-pv', project_id: 'proj-pv-01', entity_type: 'project', entity_id: 'proj-pv-01', action: 'create_project', metadata: '{"name":"AI-Driven Solar Irradiance & PV Yield Forecasting"}', created_at: 1706745600 },
  { id: 'act-07', user_id: 'usr-res-01', team_id: 'team-pv', project_id: 'proj-pv-01', entity_type: 'document', entity_id: 'doc-03', action: 'upload_document', metadata: '{"name":"Solar Irradiance Forecasting Model Evaluation Report","type":"PDF","storage":"google_drive"}', created_at: 1707900000 }
];
