/**
 * 100RE LAB WORKSPACE — Seed Data Constant Definitions (SciNote ELN Compatible)
 * Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive (File Storage)
 */

export const SEED_USERS = [
  { id: 'usr-sup-01', email: 'supervisor@100relab.hust.edu.vn', display_name: 'Assoc. Prof. Nguyen Duc Tuyen', member_key: null, avatar_url: 'assets/images/tuyen_nguyen_duc.jpg', role: 'supervisor', status: 'active', created_at: 1704067200, updated_at: 1704067200 },
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
  { id: 'tsk-01', team_id: 'team-bess', project_id: 'proj-bess-01', experiment_id: 'exp-bess-01', title: 'Implement RegD frequency regulation control algorithm', description: 'Develop MATLAB/Simulink and Python controller for fast 2-second response to PJM RegD automatic generation control signals.', status: 'in_progress', priority: 'urgent', assigned_to: 'usr-res-01', created_by: 'usr-ldr-02', due_date: '2026-09-15', created_at: 1707000000, updated_at: 1708500000, completed_at: null },
  { id: 'tsk-02', team_id: 'team-bess', project_id: 'proj-bess-01', experiment_id: 'exp-bess-02', title: 'Validate battery electro-thermal degradation model', description: 'Calibrate Arrhenius-based capacity fade equations with experimental cycling test data at 25C and 45C.', status: 'review', priority: 'high', assigned_to: 'usr-res-01', created_by: 'usr-ldr-02', due_date: '2026-09-10', created_at: 1706000000, updated_at: 1708000000, completed_at: null },
  { id: 'tsk-03', team_id: 'team-bess', project_id: 'proj-bess-01', experiment_id: 'exp-bess-01', title: 'Compile comprehensive IEEE Trans. paper draft', description: 'Draft Sections III and IV describing mathematical formulation, MILP optimization, and economic dispatch results.', status: 'todo', priority: 'medium', assigned_to: 'usr-res-02', created_by: 'usr-ldr-02', due_date: '2026-10-01', created_at: 1708000000, updated_at: 1708000000, completed_at: null },
  { id: 'tsk-04', team_id: 'team-bess', project_id: 'proj-bess-01', experiment_id: 'exp-bess-01', title: 'Complete baseline economic cost-benefit analysis', description: 'Calculate LCOE and Net Present Value comparing lithium iron phosphate (LFP) vs nickel manganese cobalt (NMC) packs.', status: 'done', priority: 'high', assigned_to: 'usr-ldr-02', created_by: 'usr-sup-01', due_date: '2026-08-20', created_at: 1705500000, updated_at: 1708000000, completed_at: 1708000000 },
  { id: 'tsk-05', team_id: 'team-pv', project_id: 'proj-pv-01', experiment_id: 'exp-pv-01', title: 'Collect 1-sec resolution solar pyranometer data from Lab Rooftop', description: 'Extract, clean and synchronize irradiance time-series with Ambient Temperature sensors for training dataset.', status: 'in_progress', priority: 'high', assigned_to: 'usr-res-01', created_by: 'usr-ldr-01', due_date: '2026-09-20', created_at: 1707500000, updated_at: 1708500000, completed_at: null },
  { id: 'tsk-06', team_id: 'team-pv', project_id: 'proj-pv-01', experiment_id: 'exp-pv-01', title: 'Train Spatio-temporal Graph Neural Network on GPU node', description: 'Benchmark GNN vs LSTM architectures for 15-min and 60-min horizon ramp-rate prediction error metric (nRMSE).', status: 'todo', priority: 'urgent', assigned_to: 'usr-res-01', created_by: 'usr-ldr-01', due_date: '2026-09-28', created_at: 1708200000, updated_at: 1708200000, completed_at: null },
  { id: 'tsk-07', team_id: 'team-smartgrid', project_id: 'proj-grid-01', experiment_id: 'exp-grid-01', title: 'Build hardware-in-the-loop (HIL) testbed topology in OPAL-RT', description: 'Configure real-time simulation model of 33-bus distribution feeder with 3 distributed PV inverters and BESS.', status: 'todo', priority: 'medium', assigned_to: 'usr-res-02', created_by: 'usr-sup-01', due_date: '2026-10-15', created_at: 1709251200, updated_at: 1709251200, completed_at: null }
];

export const SEED_INSTRUMENTS = [
  { id: 'inst-01', name: 'Mini-SCADA Lab Testbed (Tòa D9)', code: 'HUST-SCADA-01', category: 'testbed', location: 'Lab D9 - Room 302', status: 'in_use', specs: 'Real-time Modbus/TCP, IEC 61850, 48V DC Bus, 10kW Inverter', current_user_id: 'usr-res-02', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'inst-02', name: 'OPAL-RT OP5707 Real-Time Simulator', code: 'HUST-RTDS-01', category: 'simulator', location: 'C7 - Room 505', status: 'available', specs: 'Xilinx Virtex-7 FPGA, 16 Cores, eMEGAsim & RT-LAB 2025', current_user_id: null, created_at: 1704067200, updated_at: 1704067200 },
  { id: 'inst-03', name: 'Chroma 17011 Battery Cycler & Thermal Chamber', code: 'HUST-BATT-01', category: 'measurement', location: 'Lab D9 - Room 104', status: 'in_use', specs: 'Channels: 16 (0-5V, 100A), Temp range: -20°C to +80°C', current_user_id: 'usr-res-01', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'inst-04', name: 'Chroma 62150H-1000S Solar Array Simulator', code: 'HUST-SAS-01', category: 'power_source', location: 'Lab D9 - Room 302', status: 'available', specs: '1000V, 25A, 15kW, Dynamic I-V Curve Emulation', current_user_id: null, created_at: 1704067200, updated_at: 1704067200 },
  { id: 'inst-05', name: 'Kipp & Zonen CMP11 Secondary Standard Pyranometer', code: 'HUST-PYRA-01', category: 'measurement', location: 'C7 Rooftop Station', status: 'in_use', specs: 'Spectral range: 285 to 2800 nm, Sensitivity: 7 to 14 µV/W/m²', current_user_id: 'usr-res-01', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'inst-06', name: 'Enapter AEM Electrolyzer 2.1 & Fuel Cell Station', code: 'HUST-H2-01', category: 'testbed', location: 'Lab C7 - Room 102', status: 'available', specs: '500 NL/hr H2 production, 35 bar, 99.999% purity', current_user_id: null, created_at: 1704067200, updated_at: 1704067200 }
];

export const SEED_PROTOCOLS = [
  { id: 'proto-01', team_id: 'team-bess', title: 'SOP-BESS-01: Li-ion Battery EIS & Hybrid Pulse Power Characterization (HPPC)', code: 'SOP-BESS-01', description: 'Standard procedure for electrochemical impedance spectroscopy testing, internal resistance calculation, and pulse power characterization.', category: 'Battery Testing', steps_json: JSON.stringify(['Verify thermal chamber temperature stabilization at target temperature', 'Connect 4-wire Kelvin sensing probes to cell terminals', 'Execute 10C discharge pulse for 10 seconds and log terminal voltage', 'Perform AC impedance sweep from 10mHz to 10kHz', 'Export Nyquist plot and upload raw MAT file to Google Drive']), created_by: 'usr-ldr-02', created_at: 1704067200, updated_at: 1704067200 },
  { id: 'proto-02', team_id: 'team-pv', title: 'SOP-PV-01: Solar Pyranometer Calibration & High-Frequency Data Extraction', code: 'SOP-PV-01', description: 'Quality assurance protocol for cleaning optical dome, zero-offset verification, and 1-Hz irradiance streaming to cloud database.', category: 'Solar Measurement', steps_json: JSON.stringify(['Inspect pyranometer glass dome for dust and clean with ethanol', 'Verify levelling bubble alignment on mounting arm', 'Check zero-point voltage in dark enclosure (<0.5 µV)', 'Start SCADA Modbus datalogger and synchronize UTC timestamp', 'Verify streaming records to Google Drive Parquet folder']), created_by: 'usr-ldr-01', created_at: 1704067200, updated_at: 1704067200 }
];

export const SEED_PROTOCOL_STEPS = [
  { id: 'step-01', task_id: 'tsk-01', step_order: 1, title: 'Initialize PJM AGC RegD signal connection in MATLAB', instruction: 'Load 2-second timestamped PJM regulation feed and configure low-pass filter.', is_completed: 1, completed_by: 'usr-res-01', completed_at: 1707100000 },
  { id: 'step-02', task_id: 'tsk-01', step_order: 2, title: 'Calibrate battery SoC state estimator with Extended Kalman Filter', instruction: 'Fit Coulomb counting error with OCV-SoC lookup table across 10% - 90% range.', is_completed: 1, completed_by: 'usr-res-01', completed_at: 1707150000 },
  { id: 'step-03', task_id: 'tsk-01', step_order: 3, title: 'Run 24-hour continuous frequency response step-test', instruction: 'Execute closed-loop dynamic power dispatch on Chroma 17011 cycler.', is_completed: 1, completed_by: 'usr-res-01', completed_at: 1707200000 },
  { id: 'step-04', task_id: 'tsk-01', step_order: 4, title: 'Verify dynamic response time <= 1.5 seconds', instruction: 'Check rise-time and settling-time within PJM performance threshold.', is_completed: 1, completed_by: 'usr-res-01', completed_at: 1707250000 },
  { id: 'step-05', task_id: 'tsk-01', step_order: 5, title: 'Export CSV dataset and log thermal temperature on Google Drive', instruction: 'Upload raw measurement CSV into Google Drive 5TB BESS dataset folder.', is_completed: 0, completed_by: null, completed_at: null },

  { id: 'step-06', task_id: 'tsk-02', step_order: 1, title: 'Place 280Ah LFP cells into Chroma Thermal Chamber at 45°C', instruction: 'Ensure cell surface thermocouples are firmly affixed.', is_completed: 1, completed_by: 'usr-res-01', completed_at: 1706100000 },
  { id: 'step-07', task_id: 'tsk-02', step_order: 2, title: 'Execute 1C charge / 1C discharge cycle for 500 loops', instruction: 'Continuously log voltage, current, and capacity retention.', is_completed: 1, completed_by: 'usr-res-01', completed_at: 1707800000 },
  { id: 'step-08', task_id: 'tsk-02', step_order: 3, title: 'Measure EIS impedance spectroscopy at 100%, 50%, and 10% SoC', instruction: 'Perform frequency sweep to measure charge transfer resistance Rct.', is_completed: 1, completed_by: 'usr-res-01', completed_at: 1707950000 },
  { id: 'step-09', task_id: 'tsk-02', step_order: 4, title: 'Submit degradation curves for Supervisor approval', instruction: 'Prepare summary report and trigger electronic sign-off.', is_completed: 0, completed_by: null, completed_at: null }
];

export const SEED_LAB_NOTES = [
  { id: 'note-01', task_id: 'tsk-01', user_id: 'usr-res-01', title: 'RegD Inverter Switching Observation', content: 'Observed negligible voltage ripple (<0.8%) during fast ramp-up from 0 to 5MW in 1.4s. Thermal rise on IGBT heat-sink stabilized at 54°C.', parameters_json: JSON.stringify({ "Response Time": "1.4s", "DC Bus Voltage": "750V", "Max Temp": "54°C", "SoC Range": "35-85%" }), created_at: 1707220000, updated_at: 1707220000 },
  { id: 'note-02', task_id: 'tsk-02', user_id: 'usr-res-01', title: 'Capacity Retention at 500th Cycle', content: 'Cell #3 maintained 96.4% of rated capacity after 500 full cycles at 45°C. Arrhenius aging coefficient fits within 2.1% residual error.', parameters_json: JSON.stringify({ "Cycles": "500", "Capacity": "269.9 Ah", "SOH": "96.4%", "Chamber Temp": "45°C" }), created_at: 1707980000, updated_at: 1707980000 }
];

export const SEED_SIGNOFFS = [
  { id: 'sign-01', task_id: 'tsk-04', user_id: 'usr-sup-01', status: 'approved', comments: 'Economic model verified with current electricity tariff and LFP battery market prices. Excellent work.', signed_at: 1708000000, created_at: 1708000000 },
  { id: 'sign-02', task_id: 'tsk-02', user_id: 'usr-sup-01', status: 'pending', comments: 'Awaiting final EIS Nyquist curves before signing off.', signed_at: null, created_at: 1708100000 }
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
