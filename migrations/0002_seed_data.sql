-- ==========================================================
-- 100RE LABORATORY INTERNAL WORKSPACE — SEED DATA (DEVELOPMENT)
-- Migration: 0002_seed_data.sql
-- Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive (File Storage)
-- ==========================================================

-- 1. WORKSPACE USERS (D1 is Source of Truth for Workspace Authentication & RBAC)
-- Note: 'member_key' optionally links to the public member profile in Cloudflare KV
INSERT OR IGNORE INTO users (id, email, display_name, member_key, avatar_url, role, status, created_at, updated_at) VALUES
('usr-sup-01', 'supervisor@100relab.hust.edu.vn', 'Prof. Nguyen Duc Tuan', NULL, 'assets/images/logo.jpg', 'supervisor', 'active', 1704067200, 1704067200),
('usr-ldr-01', 'leader.pv@100relab.hust.edu.vn', 'Dr. Ngo Tri Duc', 'pv-1', 'assets/images/ngo_tri_duc.png', 'team_leader', 'active', 1704153600, 1704153600),
('usr-ldr-02', 'leader.bess@100relab.hust.edu.vn', 'Dr. Trinh Minh Phuong', 'bess-1', 'assets/images/trinh_minh_phuong.jpg', 'team_leader', 'active', 1704153600, 1704153600),
('usr-res-01', 'hai.ai@100relab.hust.edu.vn', 'Bui Quang Hai', 'ai-1', 'assets/images/bui_quang_hai.jpg', 'researcher', 'active', 1704240000, 1704240000),
('usr-res-02', 'anh.grid@100relab.hust.edu.vn', 'Nguyen Tuan Anh', 'dr_uc-1', 'assets/images/nguyen_tuan_anh.jpg', 'researcher', 'active', 1704240000, 1704240000),
('usr-res-03', 'nam.wind@100relab.hust.edu.vn', 'Nguyen Hoang Nam', 'wind-1', 'assets/images/nguyen_hoang_nam.jpg', 'researcher', 'active', 1704240000, 1704240000),
('usr-res-04', 'cuong.ev@100relab.hust.edu.vn', 'Le The Cuong', 'ev-1', 'assets/images/le_the_cuong.jpg', 'researcher', 'active', 1704240000, 1704240000),
('usr-res-05', 'anh.h2@100relab.hust.edu.vn', 'Nguyen Hoang Anh', 'hydrogen-1', 'assets/images/nguyen_hoang_anh.jpg', 'researcher', 'active', 1704240000, 1704240000),
('usr-res-06', 'guest.visiting@100relab.hust.edu.vn', 'Visiting Fellow (No Public Profile)', NULL, 'assets/images/logo.jpg', 'researcher', 'active', 1704240000, 1704240000),
('usr-alm-01', 'alumni.quan@100relab.hust.edu.vn', 'Dr. Le Anh Quan', 'dr_uc-2', 'assets/images/le_anh_quan.png', 'alumni', 'active', 1704326400, 1704326400);

-- 2. TEAMS (9 Initial Research Domains)
INSERT OR IGNORE INTO teams (id, name, slug, description, status, created_at, updated_at) VALUES
('team-pv', 'Photovoltaic (PV)', 'pv', 'High-efficiency solar cells, bifacial modules modeling, solar irradiance forecasting and grid integration.', 'active', 1704067200, 1704067200),
('team-wind', 'Wind Energy', 'wind', 'Wind turbine aerodynamics, power curve forecasting, wake effect modeling and offshore wind integration.', 'active', 1704067200, 1704067200),
('team-hydrogen', 'Green Hydrogen', 'hydrogen', 'Water electrolysis, PEM & alkaline fuel cells, hydrogen storage supply chains and H2-to-power systems.', 'active', 1704067200, 1704067200),
('team-smartgrid', 'Smart Grid', 'smartgrid', 'Microgrid energy management, real-time SCADA, active distribution networks and power quality control.', 'active', 1704067200, 1704067200),
('team-ev', 'Electric Vehicle (EV)', 'ev', 'V2G (Vehicle-to-Grid) bi-directional charging, smart charging scheduling, and battery health degradation.', 'active', 1704067200, 1704067200),
('team-ai', 'Artificial Intelligence (AI)', 'ai', 'Deep learning, neural networks, physics-informed AI, and reinforcement learning for energy systems.', 'active', 1704067200, 1704067200),
('team-uc', 'Unit Commitment', 'uc', 'Security-constrained unit commitment, mixed-integer linear programming, power market clearing and dispatch.', 'active', 1704067200, 1704067200),
('team-bess', 'Battery Energy Storage (BESS)', 'bess', 'Li-ion battery SoC/SoH estimation, battery energy management systems (BEMS), degradation and peak shaving.', 'active', 1704067200, 1704067200),
('team-dr', 'Demand Response', 'dr', 'Incentive-based demand response, commercial/industrial flexibility aggregation, and transactive energy.', 'active', 1704067200, 1704067200);

-- 3. TEAM MEMBERSHIPS (Many-to-Many User <-> Team)
INSERT OR IGNORE INTO team_members (id, team_id, user_id, team_role, joined_at) VALUES
('tm-01', 'team-pv', 'usr-ldr-01', 'leader', 1704067200),
('tm-02', 'team-bess', 'usr-ldr-02', 'leader', 1704067200),
('tm-03', 'team-ai', 'usr-res-01', 'member', 1704153600),
('tm-04', 'team-pv', 'usr-res-01', 'member', 1704153600),
('tm-05', 'team-smartgrid', 'usr-res-02', 'member', 1704153600),
('tm-06', 'team-uc', 'usr-res-02', 'member', 1704153600),
('tm-07', 'team-wind', 'usr-res-03', 'member', 1704153600),
('tm-08', 'team-ev', 'usr-res-04', 'member', 1704153600),
('tm-09', 'team-hydrogen', 'usr-res-05', 'member', 1704153600),
('tm-10', 'team-bess', 'usr-res-01', 'member', 1704153600),
('tm-11', 'team-bess', 'usr-alm-01', 'member', 1704153600);

-- 4. PROJECTS
INSERT OR IGNORE INTO projects (id, team_id, name, slug, description, status, progress, start_date, end_date, drive_folder_id, created_by, created_at, updated_at) VALUES
('proj-bess-01', 'team-bess', 'Data Center BESS Peak Shaving & Frequency Regulation', 'data-center-bess', 'Optimal sizing and dynamic control of 5MW/10MWh BESS for hyperscale data center frequency response in PJM market.', 'active', 65, '2026-01-15', '2026-11-30', '1BESS_Folder_DataCenter_01', 'usr-sup-01', 1705276800, 1708905600),
('proj-pv-01', 'team-pv', 'AI-Driven Solar Irradiance & PV Yield Forecasting', 'ai-pv-forecasting', 'Spatio-temporal Transformer models for ultra-short term (15-min ahead) solar irradiance and ramp-rate prediction.', 'active', 40, '2026-02-01', '2026-09-30', '1PV_Folder_AIForecast_02', 'usr-ldr-01', 1706745600, 1708905600),
('proj-grid-01', 'team-smartgrid', 'Microgrid Real-Time Dispatch with High Renewable Penetration', 'microgrid-rt-dispatch', 'Decentralized MPC and frequency-voltage stability control for islanded 100% renewable microgrid pilot at HUST.', 'planning', 15, '2026-03-01', '2026-12-31', '1Grid_Folder_Microgrid_03', 'usr-sup-01', 1709251200, 1709251200);

-- 5. PROJECT MEMBERS
INSERT OR IGNORE INTO project_members (id, project_id, user_id, project_role, joined_at) VALUES
('pm-01', 'proj-bess-01', 'usr-ldr-02', 'leader', 1705276800),
('pm-02', 'proj-bess-01', 'usr-res-01', 'contributor', 1705276800),
('pm-03', 'proj-bess-01', 'usr-res-02', 'member', 1705276800),
('pm-04', 'proj-pv-01', 'usr-ldr-01', 'leader', 1706745600),
('pm-05', 'proj-pv-01', 'usr-res-01', 'member', 1706745600),
('pm-06', 'proj-grid-01', 'usr-res-02', 'leader', 1709251200),
('pm-07', 'proj-grid-01', 'usr-res-04', 'member', 1709251200);

-- 6. TASKS
INSERT OR IGNORE INTO tasks (id, team_id, project_id, title, description, status, priority, assigned_to, created_by, due_date, created_at, updated_at, completed_at) VALUES
('tsk-01', 'team-bess', 'proj-bess-01', 'Implement RegD frequency regulation control algorithm', 'Develop MATLAB/Simulink and Python controller for fast 2-second response to PJM RegD automatic generation control signals.', 'in_progress', 'urgent', 'usr-res-01', 'usr-ldr-02', '2026-09-15', 1707000000, 1708500000, NULL),
('tsk-02', 'team-bess', 'proj-bess-01', 'Validate battery electro-thermal degradation model', 'Calibrate Arrhenius-based capacity fade equations with experimental cycling test data at 25C and 45C.', 'review', 'high', 'usr-res-01', 'usr-ldr-02', '2026-09-10', 1706000000, 1708000000, NULL),
('tsk-03', 'team-bess', 'proj-bess-01', 'Compile comprehensive IEEE Trans. paper draft', 'Draft Sections III and IV describing mathematical formulation, MILP optimization, and economic dispatch results.', 'todo', 'medium', 'usr-res-02', 'usr-ldr-02', '2026-10-01', 1708000000, 1708000000, NULL),
('tsk-04', 'team-bess', 'proj-bess-01', 'Complete baseline economic cost-benefit analysis', 'Calculate LCOE and Net Present Value comparing lithium iron phosphate (LFP) vs nickel manganese cobalt (NMC) packs.', 'done', 'high', 'usr-ldr-02', 'usr-sup-01', '2026-08-20', 1705500000, 1708000000, 1708000000),
('tsk-05', 'team-pv', 'proj-pv-01', 'Collect 1-sec resolution solar pyranometer data from Lab Rooftop', 'Extract, clean and synchronize irradiance time-series with Ambient Temperature sensors for training dataset.', 'in_progress', 'high', 'usr-res-01', 'usr-ldr-01', '2026-09-20', 1707500000, 1708500000, NULL),
('tsk-06', 'team-pv', 'proj-pv-01', 'Train Spatio-temporal Graph Neural Network on GPU node', 'Benchmark GNN vs LSTM architectures for 15-min and 60-min horizon ramp-rate prediction error metric (nRMSE).', 'todo', 'urgent', 'usr-res-01', 'usr-ldr-01', '2026-09-28', 1708200000, 1708200000, NULL),
('tsk-07', 'team-smartgrid', 'proj-grid-01', 'Build hardware-in-the-loop (HIL) testbed topology in OPAL-RT', 'Configure real-time simulation model of 33-bus distribution feeder with 3 distributed PV inverters and BESS.', 'todo', 'medium', 'usr-res-02', 'usr-sup-01', '2026-10-15', 1709251200, 1709251200, NULL);

-- 7. TASK COMMENTS
INSERT OR IGNORE INTO task_comments (id, task_id, user_id, content, created_at, updated_at) VALUES
('cm-01', 'tsk-01', 'usr-res-01', 'Completed the filter step. Response time on step test is currently 1.4 seconds, well below PJM 2.0s limit.', 1707200000, 1707200000),
('cm-02', 'tsk-01', 'usr-ldr-02', 'Excellent progress. Please make sure the anti-windup integration is tested under severe battery saturation.', 1707250000, 1707250000),
('cm-03', 'tsk-02', 'usr-res-01', 'Submitted test report with cycle aging figures. Ready for review.', 1708100000, 1708100000);

-- 8. DOCUMENTS (Metadata stored in D1, files hosted in Google Drive 5TB)
INSERT OR IGNORE INTO documents (id, team_id, project_id, name, description, file_name, mime_type, file_size, storage_provider, drive_file_id, drive_folder_id, uploaded_by, tags, created_at, updated_at) VALUES
('doc-01', 'team-bess', 'proj-bess-01', 'PJM Manual 12: Frequency Regulation Market Rules', 'Official market guidelines and performance score calculation standards for energy storage assets.', 'PJM_Manual_12_Regulation.pdf', 'application/pdf', 2458000, 'google_drive', '1PJM_Manual_12_Regulation_DriveFileId_01', '1BESS_Docs_Folder', 'usr-ldr-02', 'PJM,Standard,Regulation', 1705600000, 1705600000),
('doc-02', 'team-bess', 'proj-bess-01', 'BESS Technical Architecture Specification & Control Schematics', 'Internal system engineering document detailing inverter topology and PLC communication mapping.', 'BESS_Technical_Specification_v2.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 1845000, 'google_drive', '1BESS_Spec_v2_DriveFileId_02', '1BESS_Docs_Folder', 'usr-res-01', 'Architecture,Spec,BESS', 1706800000, 1706800000),
('doc-03', 'team-pv', 'proj-pv-01', 'Solar Irradiance Forecasting Model Evaluation Report', 'Detailed benchmark comparing LSTM, Temporal Convolutional Networks, and Transformers on 2025 HUST dataset.', 'PV_Yield_Forecasting_Report.pdf', 'application/pdf', 3120000, 'google_drive', '1PV_Report_DriveFileId_03', '1PV_Docs_Folder', 'usr-res-01', 'PV,AI,Benchmark', 1707900000, 1707900000);

-- 9. DATASETS (Metadata stored in D1, datasets hosted in Google Drive 5TB)
INSERT OR IGNORE INTO datasets (id, team_id, project_id, name, description, source, data_type, start_date, end_date, resolution, format, file_size, storage_provider, drive_file_id, drive_folder_id, uploaded_by, tags, created_at, updated_at) VALUES
('ds-01', 'team-bess', 'proj-bess-01', 'PJM AGC RegD Dynamic Frequency Signal 2025-2026', 'High-frequency 2-second timestamped regulation dispatch signals and real-time area control error (ACE) measurements.', 'PJM Interconnection Data Portal', 'time-series', '2025-01-01', '2026-01-01', '2-second', 'CSV', 145000000, 'google_drive', '1PJM_RegD_2025_CSV_DriveFileId_01', '1BESS_Datasets_Folder', 'usr-ldr-02', 'PJM,AGC,RegD,BESS,Frequency Regulation,2026', 1705700000, 1705700000),
('ds-02', 'team-bess', 'proj-bess-01', 'LFP 280Ah Battery Cell Cycle Aging & Electrochemical Impedance', 'Experimental cycling laboratory measurements including voltage, current, temperature, and periodic EIS impedance spectroscopy.', '100RE Battery Testing Lab Bench', 'experimental', '2025-06-01', '2025-12-31', '10-second', 'MAT / HDF5', 84000000, 'google_drive', '1LFP_280Ah_EIS_MAT_DriveFileId_02', '1BESS_Datasets_Folder', 'usr-res-01', 'Battery,Degradation,EIS,LFP,Experimental', 1706900000, 1706900000),
('ds-03', 'team-pv', 'proj-pv-01', 'HUST 100RE Rooftop Solar Irradiance & Weather Station Dataset', 'Calibrated GHI, DNI, DHI pyranometer recordings alongside ambient temperature, relative humidity, and wind speed.', '100RE On-campus Weather Station', 'measurement', '2025-01-01', '2026-06-30', '1-second', 'Parquet / CSV', 320000000, 'google_drive', '1HUST_Solar_Parquet_DriveFileId_03', '1PV_Datasets_Folder', 'usr-res-01', 'PV,Solar,GHI,Pyranometer,Weather,2026', 1707800000, 1707800000);

-- 10. ACTIVITY LOGS
INSERT OR IGNORE INTO activity_logs (id, user_id, team_id, project_id, entity_type, entity_id, action, metadata, created_at) VALUES
('act-01', 'usr-sup-01', 'team-bess', 'proj-bess-01', 'project', 'proj-bess-01', 'create_project', '{"name":"Data Center BESS Peak Shaving & Frequency Regulation"}', 1705276800),
('act-02', 'usr-ldr-02', 'team-bess', 'proj-bess-01', 'dataset', 'ds-01', 'upload_dataset', '{"name":"PJM AGC RegD Dynamic Frequency Signal 2025-2026","format":"CSV","storage":"google_drive"}', 1705700000),
('act-03', 'usr-ldr-02', 'team-bess', 'proj-bess-01', 'task', 'tsk-01', 'create_task', '{"title":"Implement RegD frequency regulation control algorithm","assigned_to":"usr-res-01"}', 1707000000),
('act-04', 'usr-res-01', 'team-bess', 'proj-bess-01', 'task', 'tsk-01', 'update_task_status', '{"old_status":"todo","new_status":"in_progress"}', 1707100000),
('act-05', 'usr-res-01', 'team-bess', 'proj-bess-01', 'comment', 'cm-01', 'add_comment', '{"task_title":"Implement RegD frequency regulation control algorithm"}', 1707200000),
('act-06', 'usr-ldr-01', 'team-pv', 'proj-pv-01', 'project', 'proj-pv-01', 'create_project', '{"name":"AI-Driven Solar Irradiance & PV Yield Forecasting"}', 1706745600),
('act-07', 'usr-res-01', 'team-pv', 'proj-pv-01', 'document', 'doc-03', 'upload_document', '{"name":"Solar Irradiance Forecasting Model Evaluation Report","type":"PDF","storage":"google_drive"}', 1707900000);
