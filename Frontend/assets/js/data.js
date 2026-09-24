/**
 * 100RE LABORATORY - Centralized Academic & Research Dataset
 * Extracted from 100RE_Lab_Website_Rebuild_Spec_Antigravity.md
 */

window.LAB_DATA = {
  // 1. Research Areas Dataset (9 Areas)
  researchAreas: [
    {
      id: "solar",
      slug: "solar",
      title: "Solar Energy (PV)",
      team: "PV Team",
      leader: "Bui Quang Minh",
      icon: "fa-solar-panel",
      heroImage: "assets/images/banner_pv.jpg",
      summary: "Advanced modeling, irradiance forecasting, PV array reconfiguration, and rooftop SCADA optimization.",
      vision: "Developing highly effective, flexible, and adaptive PV systems moving toward 100% renewable energy integration.",
      topics: [
        "Photovoltaic systems mathematical modeling",
        "Solar irradiance & power output forecasting",
        "PV SCADA & real-time monitoring system",
        "PV array dynamic reconfiguration to mitigate partial shading",
        "Hosting capacity assessment for distribution networks"
      ],
      conducted: "Experimental PV SCADA setup at HUST D9 building, dynamic matrix switching system, and rooftop solar hosting capacity evaluation in Ha Tinh.",
      futureDirections: "Large-scale community solar sharing, multi-terminal hybrid inverter integration with BESS and EV charging stations."
    },
    {
      id: "wind",
      slug: "wind",
      title: "Wind Energy",
      team: "Wind Team",
      leader: "Nguyen Hoang Nam",
      icon: "fa-wind",
      heroImage: "assets/images/banner_wind.jpg",
      summary: "Wind turbine aerodynamics, Low Voltage Ride Through (LVRT), output smoothing, and hybrid wind-storage systems.",
      vision: "Maximizing wind energy harvest with superior fault ride-through and ultra-smooth grid injection.",
      topics: [
        "Wind turbine power curve forecasting and wake effect modeling",
        "Low Voltage Ride Through (LVRT) capability enhancement",
        "Output power smoothing using integrated hybrid BESS",
        "Grid-connected simulation under turbulent wind conditions"
      ],
      conducted: "Tokyo University of Science & NEDO small wind turbine PCS testing; MATLAB/Simulink wind farm grid integration models.",
      futureDirections: "Offshore floating wind turbine wake optimization and hybrid deep-sea wind-hydrogen platforms."
    },
    {
      id: "unit-commitment-demand-response",
      slug: "unit-commitment-demand-response",
      title: "Unit Commitment & Demand Response (UCDR)",
      team: "Unit Commitment & Demand Response Team",
      leader: "Nguyen Tuan Anh",
      icon: "fa-sliders",
      heroImage: "assets/images/banner_dr_uc.jpg",
      summary: "Mathematical optimization, generator scheduling, economic dispatch, dynamic pricing, and microgrid demand-side flexibility.",
      vision: "Achieving optimal multi-period generation scheduling and demand-side elasticity that minimizes cost while guaranteeing 100% reliability.",
      topics: [
        "Microgrid Unit Commitment with high renewable penetration",
        "Mixed-Integer Linear Programming (MILP) vs Genetic Algorithm (GA)",
        "Stochastic UC considering wind/PV probabilistic uncertainty",
        "Joint optimization of Unit Commitment with BESS and Demand Response",
        "Incentive-based and dynamic pricing Demand Response programs",
        "Consumer satisfaction modeling and social welfare maximization"
      ],
      conducted: "Stochastic UC algorithms incorporating dynamic demand response and energy storage constraints; HUST campus microgrid dispatch models.",
      futureDirections: "Quantum-inspired optimization algorithms, automated IoT-enabled demand response, and rolling-horizon dispatching for 100% renewable power systems."
    },
    {
      id: "smart-grid",
      slug: "smart-grid",
      title: "Smart Grid & Microgrid",
      team: "Smart Grid Team",
      leader: "Le Ngoc Dung",
      icon: "fa-tower-broadcast",
      heroImage: "assets/images/banner_smartgrid.jpg",
      summary: "Two-way communication, intelligent monitoring, microgrid management, and active distribution networks.",
      vision: "Building self-healing, transparent, secure, and economically optimized smart power grids.",
      topics: [
        "Intelligent monitoring, protection, and automatic control",
        "Cybersecurity and ICT integration in SCADA/EMS networks",
        "Virtual Power Plants (VPP) and decentralized energy trading",
        "Active distribution network voltage & frequency regulation"
      ],
      conducted: "GIZ Smart Grid Roadmap for Vietnam, SCADA/DCS assessment for National Load Dispatch Center (A0), Microgrid testbed.",
      futureDirections: "Zero-inertia grid control algorithms, digital twins of national power transmission networks."
    },
    {
      id: "electric-vehicle",
      slug: "electric-vehicle",
      title: "Electric Vehicle (EV)",
      team: "Electric Vehicle Team",
      leader: "Dao Quoc Khanh",
      icon: "fa-car-battery",
      heroImage: "assets/images/banner_ev.jpg",
      summary: "EV charging infrastructure, Vehicle-to-Grid (V2G) interaction, smart charging scheduling, and distribution impact.",
      vision: "Transforming the transportation sector into a dynamic, flexible grid-balancing asset through bidirectional charging.",
      topics: [
        "EV charging station impact on distribution voltage and power quality",
        "Smart charging scheduling algorithms to minimize peak demand",
        "Vehicle-to-Grid (V2G) and Vehicle-to-Home (V2H) bidirectional power flow",
        "Electricity market incentives and charging pricing mechanisms"
      ],
      conducted: "EV development implications and incentive policy framework for GreenID; charging load forecasting for Hanoi city.",
      futureDirections: "Autonomous coordinated V2G aggregators participating in national ancillary services."
    },
    {
      id: "hydrogen",
      slug: "hydrogen",
      title: "Green Hydrogen",
      team: "Hydrogen Team",
      leader: "Nguyen Hoang Anh",
      icon: "fa-atom",
      heroImage: "assets/images/banner_hydrogen.jpg",
      summary: "Renewable-powered water electrolysis, fuel cell systems, seasonal storage, and green hydrogen supply chains.",
      vision: "Decarbonizing heavy industry, maritime transport, and seasonal energy storage with 100% green hydrogen.",
      topics: [
        "Transition from fossil-based hydrogen to renewable-powered Green Hydrogen",
        "Water electrolyzers efficiency & MPPT coupling optimization",
        "Power-to-Gas and long-term seasonal energy storage",
        "Hydrogen applications in transport, DRI steel, ammonia, and chemical industries"
      ],
      conducted: "AIST Japan 20 kW solar water electrolyzer system; SEATUC2023 presentation; Washington DC policy roundtable paper.",
      futureDirections: "Offshore wind-to-hydrogen integrated clusters in Central Vietnam and fuel-cell micro-CHP systems."
    },
    {
      id: "bess",
      slug: "bess",
      title: "Battery Energy Storage (BESS)",
      team: "BESS Team",
      leader: "Nguyen Quang Anh",
      icon: "fa-battery-three-quarters",
      heroImage: "assets/images/banner_bess.jpg",
      summary: "Grid-scale battery systems, state of charge/health estimation, frequency regulation, and peak shaving.",
      vision: "Empowering high-penetration renewable grids with high-density, durable, and economically viable storage solutions.",
      topics: [
        "Grid-scale BESS for transmission and distribution networks",
        "Primary & secondary frequency regulation and voltage support",
        "Battery degradation modeling, thermal management & lifecycle optimization",
        "Ancillary services market modeling and renewable curtailment reduction"
      ],
      conducted: "National BESS Deployment in Vietnam Power System study for VIETSE; hybrid BESS + PV dynamic simulation models.",
      futureDirections: "Second-life EV battery repurposing for grid storage and sodium-ion battery grid-scale trials."
    },
    {
      id: "ai",
      slug: "ai",
      title: "Artificial Intelligence",
      team: "AI Team",
      leader: "Nguyen Trong Thanh",
      icon: "fa-brain",
      heroImage: "assets/images/banner_ai.jpg",
      summary: "Deep Learning, Neural Networks, and AI algorithms applied to renewable energy forecasting and system stability.",
      vision: "Pioneering intelligent data-driven intelligence for clean energy grids, predictive maintenance, and energy markets.",
      topics: [
        "Solar irradiance and wind speed/power forecasting",
        "Deep Learning architectures: ANN, RNN, LSTM, CNN-LSTM, SAM-LSTM, EDSACL",
        "PV fault detection and life-expectancy prediction",
        "Blockchain and AI for decentralized peer-to-peer energy trading",
        "Real-time grid stability assessment via neural networks"
      ],
      conducted: "Solar radiation forecasting software winning 2nd prize in MOET National Scientific Research Contest 2021; SVNCKH2022 3rd place.",
      futureDirections: "Edge-AI embedded micro-controllers for sub-second inverter protection and autonomous microgrid dispatching."
    }
  ],

  // 2. Timeline / Research Experiences (2005 - 2018)
  experiencesTimeline: [
    {
      year: "2017 – 2018",
      title: "AIST (National Institute of Advanced Industrial Science and Technology, Japan)",
      role: "Senior Researcher",
      desc: "Developed a 20 kW solar PV system integrated with water electrolyzer, MPPT tracking, Li-ion capacitor, and current smoothing control for green hydrogen production."
    },
    {
      year: "2015 – 2017",
      title: "Tokyo University of Science & NEDO",
      role: "Project Researcher",
      desc: "NEDO project on small wind turbine Power Conditioning Systems (PCS), comprehensive power quality measurements, Fault Ride Through (FRT), and anemometer data logging."
    },
    {
      year: "2012 – 2015",
      title: "Shibaura Institute of Technology, Japan",
      role: "Postdoctoral Research Fellow",
      desc: "Researched PV integrated Active Power Filter (APF), Adaptive Notch Filter algorithms, distributed generation optimization, and remote island frequency stabilization."
    },
    {
      year: "2009 – 2012",
      title: "Doctor of Philosophy (PhD) in Electrical Engineering",
      role: "Shibaura Institute of Technology",
      desc: "Doctoral dissertation on Islanding Detection methods, negative-sequence active injection, Adaptive Notch Filter, Solid-State Transfer Switch (SSTS), and droop control."
    },
    {
      year: "2011",
      title: "Waseda University – TEPCO Joint Research",
      role: "Research Collaborator",
      desc: "Developed equivalent induction motor models using MidFielder and PSCAD for Tokyo Electric Power Company (TEPCO) power grid stability analysis."
    },
    {
      year: "2008 – 2009",
      title: "Master of Science (M.S.) Thesis",
      role: "Shibaura Institute of Technology",
      desc: "Dynamic model simulation of Solid Oxide Fuel Cell (SOFC), internal methane reforming, heat exchanger balance, and feedback temperature control."
    },
    {
      year: "2007 – 2008",
      title: "Hanoi University of Science and Technology (HUST)",
      role: "Power System Researcher",
      desc: "Power system design, transient stability, power quality analysis, lightning protection, and digital relay protection coordination."
    },
    {
      year: "2006 – 2007",
      title: "Northern Region Load Dispatch Center (A1, EVN)",
      role: "Dispatcher Intern / Trainee",
      desc: "Dispatch operations training, load curve monitoring across major hydro/thermal power plants and 220kV/500kV substations in Northern Vietnam."
    },
    {
      year: "2006",
      title: "Demand Side Management (DSM) Project",
      role: "Project Engineer",
      desc: "Energy efficiency and DSM project at National Political Institute; technical, economic, and behavioral approaches to loss reduction."
    },
    {
      year: "2005 – 2006",
      title: "Bachelor of Science (B.S.) Thesis",
      role: "HUST Electrical Engineering",
      desc: "Cau Giay district distribution grid renovation: loss reduction, distribution line redesign, capacitor placement, and optimal power flow."
    }
  ],

  // 3. Publications Dataset
  publications: [
    {
        "id": "pub-1",
        "title": "Developing localized net-zero pathways for Vietnam's energy sector: A case study of two provinces",
        "authors": "ND Tuyen, VQ Anh, ND Duong, NL Dan, DH Toan",
        "venue": "Utilities Policy 98, 102098",
        "year": 2026,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:L8Ckcad2t8MC",
        "citations": 1
    },
    {
        "id": "pub-2",
        "title": "Assessing cross-dataset transferability in lithium-ion battery health diagnosis from partial charging data",
        "authors": "ST Le, T Nguyen-Duc, P Le Nguyen, AM Amani, ASM Nawazish",
        "venue": "Journal of Energy Storage 182, 124669",
        "year": 2026,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:VL0QpB8kHFEC",
        "citations": 0
    },
    {
        "id": "pub-3",
        "title": "Hybrid energy electric vehicle charging station optimal sizing considering BESS degradation",
        "authors": "PL Nguyen, H Ta-Xuan, K Dao-Quoc, C Le-The, C Do-Danh, L El Ghaoui, ...",
        "venue": "Journal of Energy Storage 168, 122475",
        "year": 2026,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:WA5NYHcadZ8C",
        "citations": 0
    },
    {
        "id": "pub-4",
        "title": "Multi-objective Strategic Behavioural Optimization via Consensus and Game",
        "authors": "K Dao-Quoc¹, C Le-The¹, T Nguyen-Duc, PL Nguyen, DC Do, K Takeyoshi",
        "venue": "Proceedings of The 12th International Conference on Power and Energy Systems …",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:JoZmwDi-zQgC",
        "citations": 0
    },
    {
        "id": "pub-5",
        "title": "Adaptive Renewable Energy Curtailment for Low Inertia Microgrids",
        "authors": "LO Shobayo, CD Dao, R Abd-Alhameed, SA Michael, ND Tuyen",
        "venue": "2026 10th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:LjlpjdlvIbIC",
        "citations": 0
    },
    {
        "id": "pub-6",
        "title": "Multiobjective Optimal Load Shifting for Demand Response in Active Distribution Networks",
        "authors": "TD Nguyen-Thi, H Ta-Xuan, A Nguyen-Tuan, T Nguyen-Duc, K Takeyoshi",
        "venue": "2026 10th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:WqliGbK-hY8C",
        "citations": 0
    },
    {
        "id": "pub-7",
        "title": "RNN-Based Virtual Communication Network for Distributed Control of DC Microgrids",
        "authors": "TN Duc, VTT Hong, HD Minh, LN Quy, TP Anh, HA Dang",
        "venue": "2026 10th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:5awf1xo2G04C",
        "citations": 0
    },
    {
        "id": "pub-8",
        "title": "Assessing Transmission Congestion and Curtailment with Virtual Power Line",
        "authors": "A Nguyen-Quang, A Vu-Quoc, T Nguyen-Duc, K Takeyoshi, C D-Dao",
        "venue": "2026 10th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:eq2jaN3J8jMC",
        "citations": 0
    },
    {
        "id": "pub-9",
        "title": "Risk-Constrained Multi-Period Capacity Expansion Planning for Isolated Hybrid Renewable Energy Systems with Dynamic Technology Costs",
        "authors": "D Ngo-Tri, M Bui-Quang, T Nguyen-Duc, G Fujita",
        "venue": "2026 10th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:SdhP9T11ey4C",
        "citations": 0
    },
    {
        "id": "pub-10",
        "title": "A Decentralized MILP-ADMM Framework for P2P Energy Trading in Interconnected Microgrids",
        "authors": "TT Xuan, AN Tuan, HT Xuan, TN Duc, ST Thanh, G Fujita",
        "venue": "2026 10th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:9vf0nzSNQJEC",
        "citations": 0
    },
    {
        "id": "pub-11",
        "title": "Energy-Aware Distributed Data-Center GPU Scheduling via Constrained Hybrid SAC with Adaptive Frequency",
        "authors": "MV Duc, ND Duong, ND Huy, ND Tuyen, NT Hung, NH Thanh",
        "venue": "2026 40th International Conference on Information Networking (ICOIN), 370-375",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:HE397vMXCloC",
        "citations": 0
    },
    {
        "id": "pub-12",
        "title": "Microgrid Optimization with MILP-based Demand Side Management",
        "authors": "Q Le Anh, TT Xuan, AN Tuan, VP Thanh, HT Xuan, TN Duc, ST Thanh",
        "venue": "Smart Systems and Devices 36",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:ye4kPcJQO24C",
        "citations": 0
    },
    {
        "id": "pub-13",
        "title": "Decentralized peer-to-peer energy trading: The impact of power loss and transaction fee for optimal market design",
        "authors": "TT Son, NT Anh, TX Hung, LA Quan, PT Vinh, ND Tuyen, H Takano, ...",
        "venue": "E3S Web of Conferences 733, 02005",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:dTyEYWd-f8wC",
        "citations": 0
    },
    {
        "id": "pub-14",
        "title": "Using the Ethereum Blockchain Platform for Data Storage and Protection in Model Predictive Frequency Control System of Microgrid",
        "authors": "HD Minh, D Le Ngoc, TN Duc",
        "venue": "Smart Systems and Devices 36",
        "year": 2026,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:AXPGKjj_ei8C",
        "citations": 0
    },
    {
        "id": "pub-15",
        "title": "A Hybrid Spatio‐Temporal Deep Learning Framework for Short‐Term Solar Power Forecasting Using Satellite Imagery Data: A Case Study in Hanoi, Vietnam",
        "authors": "T Nguyen‐Duc, N Nguyen‐Vu‐Nhat, H Do‐Dinh, S Tran‐Thanh, G Fujita",
        "venue": "IET Renewable Power Generation 20 (1), e70250",
        "year": 2026,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:t6usbXjVLHcC",
        "citations": 0
    },
    {
        "id": "pub-16",
        "title": "A novel approach to optimize and allocate battery energy storage system in distributed grid considering impact of demand response program",
        "authors": "A Nguyen-Tuan, B Ta-Duy, T Nguyen-Duc, G Fujita",
        "venue": "Sustainable Energy, Grids and Networks 43, 101738",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:QIV2ME_5wuYC",
        "citations": 13
    },
    {
        "id": "pub-17",
        "title": "Preparation and synergistic effect of aluminum hydroxide nanoplates on the fire resistance and thermal stability of the intumescent flame retardant epoxy composite",
        "authors": "TC Doanh, NH Thi, HT Nguyen, HT Oanh, TD Doan, ND Tuyen, MT Vu, ...",
        "venue": "RSC advances 15 (21), 16814-16825",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:d1gkVwhDpl0C",
        "citations": 12
    },
    {
        "id": "pub-18",
        "title": "Strategic EV Charging Optimization Using Stackelberg and Non-Cooperative Game Models for Cost Efficiency and Profit Maximization with Renewable Energy and Battery Storage",
        "authors": "PL Nguyen, C Le-The, H Ta Xuan, K Dao Quoc, DC Do, L El Ghaoui, ...",
        "venue": "Smart Grids and Sustainable Energy 10 (1), 26",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:xtRiw3GOFMkC",
        "citations": 7
    },
    {
        "id": "pub-19",
        "title": "Two-level frequency regulation with a combination of DMPC and PR-HC controller for inverter-based AC microgrid considering virtual inertia support of BESS",
        "authors": "L Nguyen Quy, K Tran Minh, D Vu Tien, T Nguyen Duc",
        "venue": "Smart Grids and Sustainable Energy 10 (2), 33",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:eQOLeE2rZwMC",
        "citations": 4
    },
    {
        "id": "pub-20",
        "title": "Unit commitment in microgrid considering customer satisfaction in incentives-based demand response program: a fuzzy logic model",
        "authors": "HT Xuan, TN Duc",
        "venue": "Smart Grids and Sustainable Energy 10 (1), 10",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:WbkHhVStYXYC",
        "citations": 2
    },
    {
        "id": "pub-21",
        "title": "Kalman Filter with Long Short-Term Memory for State of Charge Estimation of Lithium-Ion Battery",
        "authors": "GNH Minh, TN Trong, TNT Hoai, H Takano, TN Duc",
        "venue": "Smart Systems and Devices 35 (3), 025-033",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:geHnlv5EZngC",
        "citations": 1
    },
    {
        "id": "pub-22",
        "title": "Decentralized Microgrid Energy Management: A Cooperative Game Approach for Peer-to-Peer Energy Trading",
        "authors": "ST Thanh, A Nguyen-Tuan, H Ta-Xuan, TN Duc, H Takano",
        "venue": "2025 9th International Conference on Green Energy and Applications (ICGEA), 1-6",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:eflP2zaiRacC",
        "citations": 1
    },
    {
        "id": "pub-23",
        "title": "Enhancing Day-ahead PV Power Forecast Accuracy with an Improved Informer Model Using AdaBelief Optimization",
        "authors": "TN Duc, H Do Dinh, HVX Son, ST Thanh",
        "venue": "2025 9th International Conference on Green Energy and Applications (ICGEA), 1-6",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:sSrBHYA8nusC",
        "citations": 1
    },
    {
        "id": "pub-24",
        "title": "Optimization of Flexible Leasing Models for Mobile PV-BESS Electric Vehicle Charging Stations",
        "authors": "H Ta-Xuan, A Nguyen-Tuan, K Dao-Quoc, T Nguyen-Duc, C Do Danh, ...",
        "venue": "2025 Asia Meeting on Environment and Electrical Engineering (EEE-AM), 1-6",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:olpn-zPbct0C",
        "citations": 0
    },
    {
        "id": "pub-25",
        "title": "CNN-iTransformer-KAN: A Hybrid Model for Accurate Short-Term PV Forecasting",
        "authors": "TN Duc, H Do Dinh, HVX Son, ST Thanh, K Takeyoshi, G Fujita",
        "venue": "2025 Asia Meeting on Environment and Electrical Engineering (EEE-AM), 1-6",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:XiVPGOgt02cC",
        "citations": 0
    },
    {
        "id": "pub-26",
        "title": "Quantile-Aware DCCN–BiLSTM for Robust Short-Term Load Forecasting in Hanoi",
        "authors": "H Truong-Thanh, N Hoang, L Ong-Ngoc, A Nong-Ngoc, T Cao-Xuan, ...",
        "venue": "2025 Asia Meeting on Environment and Electrical Engineering (EEE-AM), 1-5",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:bnK-pcrLprsC",
        "citations": 0
    },
    {
        "id": "pub-27",
        "title": "Real-time Machine Learning-Based Physical Model for Estimating Photovoltaic Output Power Using Meteorological Data",
        "authors": "BQ Minh, ND Duong, ND Tuyen, G Fujita",
        "venue": "IEEE Access",
        "year": 2025,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:_Qo2XoVZTnwC",
        "citations": 0
    },
    {
        "id": "pub-28",
        "title": "Formulation of Optimal Planning for Isolated Hybrid Energy Systems as a Multi-period Techno-Economic Optimization Problem",
        "authors": "D Ngo-Tri, D Nguyen-Dang, T Nguyen-Duc, T Kato, G Fujita",
        "venue": "International Conference on Power and Energy Systems Engineering, 340-351",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:PELIpwtuRlgC",
        "citations": 0
    },
    {
        "id": "pub-29",
        "title": "Enhancing EV Charging Efficiency with Distributed ADMM-Based Approach for Minimizing Costs in EV Charging Stations",
        "authors": "C Le-The, N Hoang, T Nguyen-Duc, PL Nguyen, H Takano, G Fujita",
        "venue": "International Conference on Power and Energy Systems Engineering, 291-304",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:_B80troHkn4C",
        "citations": 0
    },
    {
        "id": "pub-30",
        "title": "Hybrid Control Converter Based on FCS-MPC for Frequency Response and Voltage Profile Improvement Considering Effect of Distribution Line in Microgrid",
        "authors": "D Vu-Tien, L Nguyen-Quy, H Duong-Minh, T Nguyen-Duc, T Kato",
        "venue": "International Conference on Power and Energy Systems Engineering, 98-111",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:tkaPQYYpVKoC",
        "citations": 0
    },
    {
        "id": "pub-31",
        "title": "A Nash Bargaining-Based Cooperative Peer-to-Peer Energy Trading Model for Multi-microgrid Systems",
        "authors": "TD Nguyen-Thi, H Ta-Xuan, A Nguyen-Tuan, Q Le-Anh, S Tran-Thanh, ...",
        "venue": "International Conference on Power and Energy Systems Engineering, 305-317",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:Y5dfb0dijaUC",
        "citations": 0
    },
    {
        "id": "pub-32",
        "title": "Power Curtailment Tracking in Load-Connected PV Systems Using a MP and O-PID Algorithm",
        "authors": "TD Quang, MB Quang, G Fujita, TN Duc",
        "venue": "International Conference on Power and Electrical Engineering, 283-293",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:4fKUyHm3Qg0C",
        "citations": 0
    },
    {
        "id": "pub-33",
        "title": "A Method for Determining Optimal Parameters in Aggregation of Distributed Energy Resources",
        "authors": "H Takano, T Fukuda, H Asano, ND Tuyen, T Oyama, H Kato, K Matsuura, ...",
        "venue": "2025 1st International Conference on Consumer Technology (ICCT-Pacific), 1-4",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:3fE2CSJIrl8C",
        "citations": 0
    },
    {
        "id": "pub-34",
        "title": "Impact of BESS Prices on Renewable Energy Integrated Public EV Charging Stations: Feasibility Analysis",
        "authors": "KD Quoc, HT Xuan, C Le The, TN Duc, H Takano",
        "venue": "2025 9th International Conference on Green Energy and Applications (ICGEA), 1-6",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:q3oQSFYPqjQC",
        "citations": 0
    },
    {
        "id": "pub-35",
        "title": "Examining Rooftop Solar Power with Integrated Storage Systems under Current Vietnam Pricing Mechanism",
        "authors": "P Trinh-Minh, T Nguyen-Duc, H Tran-Quoc, D Nguyen-Linh, H Takano",
        "venue": "2025 9th International Conference on Green Energy and Applications (ICGEA), 1-5",
        "year": 2025,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:0EnyYjriUFMC",
        "citations": 0
    },
    {
        "id": "pub-36",
        "title": "Sustainable tourism governance: A study of the impact of culture",
        "authors": "HN Thi, TN Thi, TV Trong, TN Duc, TN Nghi",
        "venue": "J. Gov. Regul 13 (2), 474-485",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:J-pR_7NvFogC",
        "citations": 49
    },
    {
        "id": "pub-37",
        "title": "Advanced frequency control schemes and technical analysis for large-scale PEM and Alkaline electrolyzer plants in renewable-based power systems",
        "authors": "L Van Phan, NP Nguyen-Dinh, KM Nguyen, T Nguyen-Duc",
        "venue": "International Journal of Hydrogen Energy 89, 1354-1367",
        "year": 2024,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:8k81kl-MbHgC",
        "citations": 32
    },
    {
        "id": "pub-38",
        "title": "Prediction of state-of-health and remaining-useful-life of battery based on hybrid neural network model",
        "authors": "VQ Anh, ND Tuyen, G Fujita",
        "venue": "IEEE Access 12, 129022-129039",
        "year": 2024,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:3s1wT3WcHBgC",
        "citations": 28
    },
    {
        "id": "pub-39",
        "title": "Energy management of hybrid AC/DC microgrid considering incentive‐based demand response program",
        "authors": "TT Duc, AN Tuan, TN Duc, H Takano",
        "venue": "IET Generation, Transmission & Distribution 18 (21), 3289-3302",
        "year": 2024,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:dshw04ExmUIC",
        "citations": 27
    },
    {
        "id": "pub-40",
        "title": "Multi 2D-CNN-based model for short-term PV power forecast embedded with Laplacian Attention",
        "authors": "T Nguyen-Duc, H Do-Dinh, G Fujita, S Tran-Thanh",
        "venue": "Energy Reports 12, 2086-2096",
        "year": 2024,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:a0OBvERweLwC",
        "citations": 25
    },
    {
        "id": "pub-41",
        "title": "Spectral-temporal convolutional approach for PV systems output power forecasting: Case studies in single-site and multi-site",
        "authors": "T Nguyen-Duc, T Nguyen-Trong, G Nguyen-Hoang-Minh, G Fujita, ...",
        "venue": "Sustainable Energy, Grids and Networks 38, 101357",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:JV2RwH3_ST0C",
        "citations": 10
    },
    {
        "id": "pub-42",
        "title": "Spatial-temporal graph hybrid neural network for PV power forecast",
        "authors": "ST Thanh, H Do Dinh, GNH Minh, TN Trong, TN Duc",
        "venue": "2024 8th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:l7t_Zn2s7bgC",
        "citations": 9
    },
    {
        "id": "pub-43",
        "title": "Theoretical study on demand-side management to reduce imbalance between electricity supply and demand",
        "authors": "T Yamazaki, H Takano, H Asano, T Nguyen-Duc",
        "venue": "Discover Applied Sciences 6 (10), 506",
        "year": 2024,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:qjMakFHDy7sC",
        "citations": 8
    },
    {
        "id": "pub-44",
        "title": "Optimal sizing and placement of bess in distribution grid with high pv penetration considering bess optimal operation",
        "authors": "B Ta-Duy, A Nguyen-Tuan, T Nguyen-Duc, G Fujita",
        "venue": "2024 11th International Conference on Power and Energy Systems Engineering …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:O3NaXMp0MMsC",
        "citations": 7
    },
    {
        "id": "pub-45",
        "title": "An adaptive method for real‐time photovoltaic power forecasting utilizing mathematics and statistics: Case studies in Australia and Vietnam",
        "authors": "T Nguyen‐Duc, H Vu‐Xuan‐Son, H Do‐Dinh, N Nguyen‐Vu‐Nhat, ...",
        "venue": "IET Renewable Power Generation 18 (14), 2589-2604",
        "year": 2024,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:ZeXyd9-uunAC",
        "citations": 6
    },
    {
        "id": "pub-46",
        "title": "Preparation of expandable flake-graphites with different particle sizes and their flame-retardant application for polypropylene",
        "authors": "NH Thi, TTH Nguyen, TC Doanh, DTM Huong, TD Doan, HT Oanh, ...",
        "venue": "Vietnam Journal of Science and Technology 62 (1), 78-91",
        "year": 2024,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:2osOgNQ5qMEC",
        "citations": 5
    },
    {
        "id": "pub-47",
        "title": "Grid Forming-based Hydrogen System for High-penetration Renewable Energy Microgrid",
        "authors": "K Do-Chi, A Nguyen-Hoang, L Hoang-Hieu, L Van Phan, H Takano, ...",
        "venue": "2024 11th International Conference on Power and Energy Systems Engineering …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:KlAtU1dfN6UC",
        "citations": 4
    },
    {
        "id": "pub-48",
        "title": "Optimal sizing of energy storage systems considering their economical operations in a microgrid",
        "authors": "H Takano, K Harada, WM Nyabuto, H Asano, S Kambara, ND Tuyen",
        "venue": "2024 International Technical Conference on Circuits/Systems, Computers, and …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:e5wmG9Sq2KIC",
        "citations": 4
    },
    {
        "id": "pub-49",
        "title": "Lessons from Hydrogen Strategy in Vietnam and the United States",
        "authors": "ND Tuyen",
        "venue": "The National Bureau of Asian Research. May 8",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:fQNAKQ3IYiAC",
        "citations": 4
    },
    {
        "id": "pub-50",
        "title": "Online Data Acquisition and Storage for Rooftop Solar System Utilizing Time Series Databases and Cloud-based Visualization Platforms",
        "authors": "S Tran-Thanh, D Nguyen-Dang, A Nguyen-Hoang, T Nguyen-Duc",
        "venue": "2024 8th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:J_g5lzvAfSwC",
        "citations": 2
    },
    {
        "id": "pub-51",
        "title": "Utilizing IOTA Distributed Ledger Platform for Security in Model Predictive Frequency Control System of Microgrid",
        "authors": "NS Quan, HT Linh, TT Son, G Fujita, ND Tuyen",
        "venue": "2024 11th International Conference on Power and Energy Systems Engineering …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:M3ejUd6NZC8C",
        "citations": 1
    },
    {
        "id": "pub-52",
        "title": "EV Scheduling Optimization by Utilizing Excess Photovoltaic Energy with Forward Dynamic Programming",
        "authors": "C Le-The, N Hoang, T Nguyen-Duc, H Takano",
        "venue": "2024 8th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:r0BpntZqJG4C",
        "citations": 1
    },
    {
        "id": "pub-53",
        "title": "Optimizing Photovoltaic Power Distribution for EV Charging in EV Charging Station",
        "authors": "C Le-The, N Hoang, K Dao-Quoc, T Nguyen-Duc, H Takano, G Fujita, ...",
        "venue": "2024 11th International Conference on Power and Energy Systems Engineering …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:2P1L_qKh6hAC",
        "citations": 0
    },
    {
        "id": "pub-54",
        "title": "Improved Low Voltage Ride-Through Capability of Permanent Magnet Synchronous Generator Wind Turbine based on Model Predictive Control",
        "authors": "NN Hoang, HN Trung, H Takano, ST Thanh, ND Tuyen",
        "venue": "2024 11th International Conference on Power and Energy Systems Engineering …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:GnPB-g6toBAC",
        "citations": 0
    },
    {
        "id": "pub-55",
        "title": "PREPARATION OF ASTAXANTHIN/PYCNOGENOL NANOPARTICLES: A DELIVERY SYSTEM WITH IMPROVED ASTAXANTHIN STABILITY AND BIOAVAILABILITY",
        "authors": "ND Tuyen, HT Nhung, HM Ha, DT Dat, NY Thanh, NH Tham, NT Sang, ...",
        "venue": "Trường Đại học Công nghiệp Hà Nội",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:4OULZ7Gr8RgC",
        "citations": 0
    },
    {
        "id": "pub-56",
        "title": "Hierarchical Electricity Market and Incentive-based Demand Response Management: A Stackelberg Game-based Approach",
        "authors": "T Trieu-Duc, A Nguyen-Tuan, T Nguyen-Duc, H Takano",
        "venue": "2024 8th International Conference on Green Energy and Applications (ICGEA …",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:UebtZRa9Y70C",
        "citations": 0
    },
    {
        "id": "pub-57",
        "title": "ASSESSING THE IMPACT OF CAREER COMPETENCE ON LEARNING OUTCOMES OF ACCOUNTING–AUDITING STUDENTS IN HANOI, VIETNAM",
        "authors": "HTHO PHAN, TN DUC, TT THI, VI KHANH, HAN MINH, NH QUYNH",
        "venue": "INTERNATIONAL JOURNAL OF SCIENTIFIC RESEARCH AND MANAGEMENT 12 (12), 8150-8164",
        "year": 2024,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:V3AGJWp-ZtQC",
        "citations": 0
    },
    {
        "id": "pub-58",
        "title": "Discover Applied Sciences",
        "authors": "T Yamazaki, H Takano, H Asano, T Nguyen‑Duc",
        "venue": "Academic Research Publication",
        "year": 2024,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:ufrVoPGSRksC",
        "citations": 0
    },
    {
        "id": "pub-59",
        "title": "Review of hydrogen technologies based microgrid: Energy management systems, challenges and future recommendations",
        "authors": "LP Van, K Do Chi, TN Duc",
        "venue": "International Journal of Hydrogen Energy 48 (38), 14127-14148",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:XiSMed-E-HIC",
        "citations": 220
    },
    {
        "id": "pub-60",
        "title": "A comprehensive review of direct coupled photovoltaic-electrolyser system: Sizing techniques, operating strategies, research progress, current challenges, and future …",
        "authors": "LP Van, LH Hoang, TN Duc",
        "venue": "International Journal of Hydrogen Energy 48 (65), 25231-25249",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:5Ul4iDaHHb8C",
        "citations": 83
    },
    {
        "id": "pub-61",
        "title": "Short-term PV power forecast using hybrid deep learning model and Variational Mode Decomposition",
        "authors": "TN Trong, HVX Son, H Do Dinh, H Takano, TN Duc",
        "venue": "Energy Reports 9, 712-717",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:u9iWguZQMMsC",
        "citations": 55
    },
    {
        "id": "pub-62",
        "title": "An improved state machine-based energy management strategy for renewable energy microgrid with hydrogen storage system",
        "authors": "LP Van, LH Hieu, K Do Chi, H Takano, TN Duc",
        "venue": "Energy reports 9, 194-201",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:tS2w5q8j5-wC",
        "citations": 44
    },
    {
        "id": "pub-63",
        "title": "New models for feasibility assessment and electrolyser optimal sizing of hydrogen production from dedicated wind farms and solar photovoltaic farms, and case studies for …",
        "authors": "L Phan-Van, R Felici, TN Duc",
        "venue": "Energy Conversion and Management 295, 117597",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:VOx2b1Wkg3QC",
        "citations": 43
    },
    {
        "id": "pub-64",
        "title": "A comparison of different metaheuristic optimization algorithms on hydrogen storage-based microgrid sizing",
        "authors": "L Phan-Van, H Takano, TN Duc",
        "venue": "Energy Reports 9, 542-549",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:08ZZubdj9fEC",
        "citations": 32
    },
    {
        "id": "pub-65",
        "title": "Bilevel optimization model for sizing of battery energy storage systems in a microgrid considering their economical operation",
        "authors": "R Hayashi, H Takano, WM Nyabuto, H Asano, T Nguyen-Duc",
        "venue": "Energy Reports 9, 728-737",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:zA6iFVUQeVQC",
        "citations": 27
    },
    {
        "id": "pub-66",
        "title": "A combination of novel hybrid deep learning model and quantile regression for short‐term deterministic and probabilistic PV maximum power forecasting",
        "authors": "ND Tuyen, NT Thanh, VXS Huu, G Fujita",
        "venue": "IET Renewable Power Generation 17 (4), 794-813",
        "year": 2023,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:dfsIfKJdRG4C",
        "citations": 25
    },
    {
        "id": "pub-67",
        "title": "Study on the impact of rooftop solar power systems on the low voltage distribution power grid: A case study in Ha Tinh province, Vietnam",
        "authors": "TS Tran, MP Vu, MH Pham, PH Nguyen, DT Nguyen, DQ Nguyen, ...",
        "venue": "Energy reports 10, 1151-1160",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:bEWYMUwI8FkC",
        "citations": 23
    },
    {
        "id": "pub-68",
        "title": "Estimating parameters of photovoltaic modules based on current–voltage characteristics at operating conditions",
        "authors": "DN Dang, T Le Viet, H Takano, TN Duc",
        "venue": "Energy Reports 9, 18-26",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:8AbLer7MMksC",
        "citations": 18
    },
    {
        "id": "pub-69",
        "title": "Rooftop solar policies feasibility assessment model: Vietnam case study",
        "authors": "S Qureshi, L Phan-Van, LD Nguyen, T Nguyen-Duc",
        "venue": "Energy Policy 177, 113577",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:YOwf2qJgpHMC",
        "citations": 15
    },
    {
        "id": "pub-70",
        "title": "Cooperative LVRT control for protecting PMSG-based WTGs using battery energy storage system",
        "authors": "TN Huy, D Le Hanh, H Takano, TN Duc",
        "venue": "Energy Reports 9, 590-598",
        "year": 2023,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:B3FOqHPlNUQC",
        "citations": 13
    },
    {
        "id": "pub-71",
        "title": "Two-level distributed fully-predictive frequency control scheme for inverter-based AC Microgrid considering communication delay",
        "authors": "DT Nguyen, SQ Nguyen, BL Vo, ND Le, MK Tran",
        "venue": "Electric Power Systems Research 222, 109471",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:5nxA0vEk-isC",
        "citations": 12
    },
    {
        "id": "pub-72",
        "title": "Universal modelling and analysis of grid-scale electrolysers frequency response in wind-dominated power systems",
        "authors": "L Phan-Van, V Nguyen Dinh, T Nguyen-Duc",
        "venue": "IET Conference Proceedings CP857 2023 (29), 8-14",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:NaGl4SEjCO4C",
        "citations": 11
    },
    {
        "id": "pub-73",
        "title": "Circular economy and renewable energy: A global policy overview",
        "authors": "LQ Dung, TT Khanh, ND Tuyen, NH Luong, NM Tu, LBN Minh, NH Quan, ...",
        "venue": "Renewable Energy in Circular Economy, 35-50",
        "year": 2023,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:SeFeTyx0c_EC",
        "citations": 7
    },
    {
        "id": "pub-74",
        "title": "Forecasting state-of-health of battery based on combined EMD-CNN-BiLSTM-SM method",
        "authors": "LLT Minh, AV Quoc, TN Duc, G Fujita",
        "venue": "2023 Asia Meeting on Environment and Electrical Engineering (EEE-AM), 01-05",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:738O_yMBCRsC",
        "citations": 6
    },
    {
        "id": "pub-75",
        "title": "Deep Learning-Based Real-Time Solar Irradiation Monitoring and Forecasting Application for PV System",
        "authors": "V. X. Son Huu, D. D. Hieu, N. H. Minh Giang, H. Takano and N. D. Tuyen",
        "venue": "2023 7th International Conference on Green Energy and Applications (ICGEA), Singapore, Singapore, 2023",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:Tyk-4Ss8FVUC",
        "citations": 4
    },
    {
        "id": "pub-76",
        "title": "Calculation Framework of Parameters in Management of Distributed Energy Resources Considering Balance of Power Supply and Demand",
        "authors": "T Yamazaki, H Takano, H Asano, ND Tuyen",
        "venue": "2023 10th International Conference on Power and Energy Systems Engineering …",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:pqnbT2bcN3wC",
        "citations": 4
    },
    {
        "id": "pub-77",
        "title": "Optimization of EV Scheduling in a Microgrid Integrated with a Rooftop Solar System Using Forward Dynamic Programming",
        "authors": "L. T. Cuong, H. Nhat, T. N. Duc and H. Takano",
        "venue": "2023 10th International Conference on Power and Energy Systems Engineering (CPESE), Nagoya, Japan, 2023",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:uWQEDVKXjbEC",
        "citations": 3
    },
    {
        "id": "pub-78",
        "title": "Study on Voltage Profile and Power Losses of Distributed Photovoltaics Systems Integrated into a Local Distribution Grid in Vietnam",
        "authors": "HT Nguyen, MH Pham, DT Nguyen",
        "venue": "Smart Systems and Devices 33 (1), 54-63",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:tOudhMTPpwUC",
        "citations": 3
    },
    {
        "id": "pub-79",
        "title": "Study on IoT based SCADA system for rooftop solar power systems in Vietnam",
        "authors": "TS Tran, MP Vu, MH Pham, HA Dang, DT Nguyen, DQ Nguyen, AT Tran, ...",
        "venue": "Int J Renew Energy Res 13 (3), 1212-1222",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:zYLM7Y9cAGgC",
        "citations": 3
    },
    {
        "id": "pub-80",
        "title": "Photovoltaic Hosting Capacity for Distribution Network Using Statistical Approach",
        "authors": "D. N. Dang, N. Cong Hieu, T. N. Duc and G. Fujita",
        "venue": "2023 10th International Conference on Power and Energy Systems Engineering (CPESE), Nagoya, Japan, 2023",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:vRqMK49ujn8C",
        "citations": 2
    },
    {
        "id": "pub-81",
        "title": "Optimized fuzzy management strategy for hybrid energy storage-based microgrid",
        "authors": "CK Do, P Van Long, LH Hoang, TN Duc",
        "venue": "SEATUC journal of science and engineering 4 (1), 29-37",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:UxriW0iASnsC",
        "citations": 2
    },
    {
        "id": "pub-82",
        "title": "Photovoltaic system fault detection and classification based on K-nearest neighbor",
        "authors": "DQ Tung, ND Tuyen",
        "venue": "Journal of Science and Technology 59 (2A), 42-46",
        "year": 2023,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:j3f4tGmQtD8C",
        "citations": 1
    },
    {
        "id": "pub-83",
        "title": "L. P",
        "authors": "Van",
        "venue": "Hieu, L. H., Do Chi, K., Takano, H., & Duc, T. N. (2023). An improved state machine-based energy management strategy for renewable energy microgrid with hydrogen storage system. Energy Reports, 9, 194-201",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-84",
        "title": "D. N",
        "authors": "Dang",
        "venue": "Le Viet, T., Takano, H., & Duc, T. N. (2023). Estimating parameters of photovoltaic modules based on current–voltage characteristics at operating conditions. Energy Reports, 9, 18-26",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-85",
        "title": "L. P",
        "authors": "Van",
        "venue": "Takano, H., & Duc, T. N. (2023). A comparison of different metaheuristic optimization algorithms on hydrogen storage-based microgrid sizing. Energy Reports",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-86",
        "title": "N. T",
        "authors": "Thanh",
        "venue": "Huu, V. X. S., Hieu, D. D., Takano, H., & Duc, T. N. (2023). Short-Term PV power forecast using hybrid deep learning model and variational mode decomposition. Energy Reports",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-87",
        "title": "N. H",
        "authors": "Tien",
        "venue": "Duc, L. H., Takano, H., & Duc, T. N. (2023). Cooperative LVRT control for protecting PMSG-based WTGs using battery energy storage system. Energy Reports",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-88",
        "title": "An Efficient Scalogram Generator for Partial Shading Analysis of Photovoltaic Array",
        "authors": "T. N. Duc, D. N. Dang, T. L. Viet and H. Takano",
        "venue": "2023 7th International Conference on Green Energy and Applications (ICGEA), Singapore, Singapore, 2023",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:LPZeul_q3PIC",
        "citations": 0
    },
    {
        "id": "pub-89",
        "title": "Comprehensive assessment of Viet Nam’s Smart Grid Roadmap",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Revision of Smart Grid Roadmap, GIZ, 15 March 2022. (Online) Supervisor Nguyen Duc Tuyen, Assoc. Prof Tel: +84 986 509 059 Mail 1: tuyen.nguyenduc@hust.edu.vn Mail 2: i029999@shibaura-it.ac.jp Contact for more information Nguyen Tuan Anh, B.Eng Tel: +84 974 812 546 Mail: anh.nt196322@sis.hust.edu.vn Laboratory Offices D9-300 & C7-503, Hanoi University of Science and Technology, 1 Dai Co Viet bottom of page window.__pageRevealPromise && window.__pageRevealPromise.then(function() { requestAnimationFrame(function() { try { var stored = sessionStorage.getItem('wix-motion-played-animations'); if (stored) { var played = JSON.parse(stored); for (var compId in played) { if (played[compId]) { var el = document.getElementById(compId); if (el) { el.dataset.motionEnter = 'done'; } } } } } catch (e) {} }); }); {\"data\":{\"site\":{\"metaSiteId\":\"29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\", \"userId\":\"58745a76-e0c5-4f2f-9bde-555a9724b21d\", \"siteId\":\"672029d0-83a2-4790-8e8e-262a1369465f\", \"externalBaseUrl\":\"https:\\/\\/www.100relab.com\", \"siteRevision\":607, \"siteType\":\"UGC\", \"dc\":\"virginia-pub\", \"isResponsive\":false, \"editorName\":\"Unknown\", \"sessionId\":\"2113be44-7f68-469c-8162-1129134fb7ca\", \"isSEO\":false, \"appNameForBiEvents\":\"thunderbolt\"}, \"rollout\":{\"siteAssetsVersionsRollout\":false, \"isDACRollout\":0, \"isTBRollout\":false}, \"fleetConfig\":{\"fleetName\":\"thunderbolt-renderer\", \"type\":\"GA\", \"code\":0}, \"requestUrl\":\"https:\\/\\/www.100relab.com\\/publications\", \"isInSEO\":false, \"platformOnSite\":true}} window.fedops = JSON.parse(document.getElementById('wix-fedops').textContent) (()=>{\"use strict\";var e={}, r={};function t(i){var n=r[i];if(void 0!==n)return n.exports;var o=r[i]={exports:{}};return e[i](o, o.exports, t), o.exports}t.rv=()=>\"1.6.8\", t.ruid=\"bundler=rspack@1.6.8\";let i=\"unknown\", n=e=>{let r, t, n=(r=e.cache, t=e.varnish, `${r||i}, ${t||i}`);return{caching:n, isCached:n.includes(\"hit\"), ...e.microPop?{microPop:e.microPop}:{}}};function o(){return\"undefined\"!=typeof crypto&&\"function\"==typeof crypto.randomUUID?crypto.randomUUID():\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g, e=>{let r=16*Math.random()|0;return(\"x\"===e?r:3&r|8).toString(16)})}let a=/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i, s=/iPhone|iPad|iPod/i, c=e=>!!e&&s.test(e);!function(){var e;let r, {site:t, rollout:s, fleetConfig:d, requestUrl:l, isInSEO:p, shouldReportErrorOnlyInPanorama:u}=window.fedops.data, m=(e=>{let{userAgent:r}=e.navigator;return/instagram.+google\\/google/i.test(r)?\"\":/bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\\/4\\.0$|^\\s*$/i.test(r)?\"ua\":\"\"})(window)||(()=>{try{if(window.self===window.top)return\"\"}catch{}return\"iframe\"})()||(()=>{if(!Function.prototype.bind)return\"bind\";let{document:e, navigator:r}=window;if(!e||!r)return\"document\";let{webdriver:t, userAgent:i, plugins:n, languages:o}=r;if(t)return\"webdriver\";if(!n||Array.isArray(n))return\"plugins\";if(Object.getOwnPropertyDescriptor(n, \"0\")?.writable)return\"plugins-extra\";if(!i)return\"userAgent\";if(i.indexOf(\"Snapchat\")>0&&e.hidden)return\"Snapchat\";if(!o||0===o.length||!Object.isFrozen(o))return\"languages\";try{throw Error()}catch(e){if(e instanceof Error){let{stack:r}=e;if(r&&/ (\\(internal\\/)|(\\(?file:\\/)/.test(r))return\"stack\"}}return\"\"})()||(p?\"seo\":\"\"), w=!!m, {isCached:h, caching:f, microPop:g}=((e, r)=>{let t, o=(e=>{let r;try{r=e()}catch{r=[]}let t=r.reduce((e, r)=>(e[r.name]=r.description, e), {});return{cache:t.cache, varnish:t.varnish, microPop:t.dc}})(r);if(o.cache||o.varnish)return n({cache:o.cache||i, varnish:o.varnish||i, microPop:o.microPop});let a=(t=e.match(/ssr-caching=\"?cache[, #]\\s*desc=([\\w-]+)(?:[, #]\\s*varnish=(\\w+))?(?:[, #]\\s*dc[, #]\\s*desc=([\\w-]+))?(?:\"|;|$)/))&&t.length?{cache:t[1], varnish:t[2]||i, microPop:t[3]}:null;return a?n(a):{caching:i, isCached:!1}})(document.cookie, ()=>performance.getEntriesByType(\"navigation\")[0].serverTiming||[]), v={WixSite:1, UGC:2, Template:3}[t.siteType]||0, x=t.appNameForBiEvents, {isDACRollout:y, siteAssetsVersionsRollout:S}=s, I=+!!y, $=+!!S, b=0===d.code||1===d.code?d.code:null, _=2===d.code, P=Date.now()-window.initialTimestamps.initialTimestamp, O=Math.round(performance.now()-(()=>{try{let e=performance.getEntriesByType(\"navigation\")[0];if(e&&e.responseStart>0&&e.responseStart {let t=e?.reason||e?.message;t?(u||N(26, `&errorInfo=${t}&errorType=${r}`), E({error:{name:r, message:t, stack:e?.stack}})):e.preventDefault()}, k(\"error\", R.reportError), k(\"unhandledrejection\", R.reportError);let M=!1;function N(e, r=\"\"){if(l.includes(\"suppressbi=true\"))return;var i=\"//frog.wix.com/bolt-performance?src=72&evid=\"+e+\"&appName=\"+x+\"&is_rollout=\"+b+\"&is_company_network=\"+_+\"&is_sav_rollout=\"+$+\"&is_dac_rollout=\"+I+\"&dc=\"+t.dc+(g?\"µPop=\"+g:\"\")+\"&is_cached=\"+h+\"&msid=\"+t.metaSiteId+\"&session_id=\"+window.fedops.sessionId+\"&ish=\"+w+\"&isb=\"+w+(w?\"&isbr=\"+m:\"\")+\"&vsi=\"+window.fedops.vsi+\"&caching=\"+f+(M?\", browser_cache\":\"\")+\"&pv=\"+T+\"&pn=1&v=\"+A+\"&url=\"+encodeURIComponent(l)+\"&client_url=\"+encodeURIComponent(window.location.href)+\"&st=\"+v+`&ts=${P}&tsn=${O}`+r;let n=!1;if(!/\\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent))try{n=navigator.sendBeacon(i)}catch{}n||(new Image().src=i)}function E({transaction:e, error:r}){let i=[{fullArtifactId:\"com.wixpress.html-client.wix-thunderbolt\", componentId:`${\"Studio\"===window.fedops.data.site.editorName?\"wix-studio\":`thunderbolt${window.fedops.data.site.isResponsive?\"-responsive\":\"\"}`}`, platform:\"viewer\", msid:window.fedops.data.site.metaSiteId, sessionId:window.fedops.vsi, sessionTime:Date.now()-window.initialTimestamps.initialTimestamp, logLevel:r?\"ERROR\":\"INFO\", message:r?.message??(e?.name&&`${e.name} START`), errorName:r?.name, errorStack:r?.stack, transactionName:e?.name, transactionAction:e&&\"START\", isSsr:!1, dataCenter:t.dc, isCached:!!h, isRollout:!!b, isHeadless:!!w, isDacRollout:!!I, isSavRollout:!!$, isCompanyNetwork:!!_}];try{let e=JSON.stringify({messages:i});return navigator.sendBeacon(\"https://panorama.wixapps.net/api/v1/bulklog\", e)}catch(e){console.error(e)}}function C(e){return(r, t)=>{let i=Date.now()-P, n=`&name=${r}&duration=${i}`, o=t&&t.paramsOverrides?Object.keys(t.paramsOverrides).map(e=>e+\"=\"+t.paramsOverrides[e]).join(\"&\"):\"\";N(e, o?`${n}&${o}`:n)}}if(k(\"pageshow\", ({persisted:e})=>{e&&!M&&(M=!0, R.is_cached=!0)}, !0), window.__browser_deprecation__)return;let D=document.referrer?`&document_referrer=${document.referrer}`:\"\", U=window.sessionStorage.getItem(\"isMpa\"), B=U?`&isMpa=${U}`:\"\";U&&window.sessionStorage.removeItem(\"isMpa\");let W=window.sessionStorage.getItem(\"mpaSessionId\");W||(W=o(), window.sessionStorage.setItem(\"mpaSessionId\", W)), window.fedops.mpaSessionId=W;let j=((e, r=!1)=>{if(!e)return 1;let t=e.navigator?.userAgent||\"\", i=e.devicePixelRatio||1;if(c(t))return e.visualViewport?.scale||1;if((e=>!!e&&!!e&&a.test(e)&&!c(e))(t)){let e, t;if(!r)return 1;let n=(()=>{try{let e=localStorage.getItem(\"wix_dpr_baseline\");if(!e)return null;let r=Number(e);return r>0?{dpr:r}:null}catch{return null}})();return n?(e=i, t=n.dpr, !e||!t||t {if(!e||!r||!t)return 1;let i=e&&r&&t?Math.trunc(e*r) 1, F=(e=window, r=e.visualViewport?.scale, {devicePixelRatio:e.devicePixelRatio||1, innerWidth:e.innerWidth, outerWidth:e.outerWidth, ...null!=r?{visualViewportScale:r}:{}});N(21, `&platformOnSite=${window.fedops.data.platformOnSite}&hasInitialZoom=${j}&infoInitialZoom=${encodeURIComponent(JSON.stringify(F))}&mpaSessionId=${W}${D}${B}`), E({transaction:{name:\"PANORAMA_COMPONENT_LOAD\"}})}()})(); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/sendFedopsLoadStarted.inline.ed1ed98a.bundle.min.js.map if ( typeof Promise === 'undefined' || typeof Set === 'undefined' || typeof Object.assign === 'undefined' || typeof Array.from === 'undefined' || typeof Symbol === 'undefined' ) { // send bi in order to detect the browsers in which polyfills are not working window.fedops.phaseStarted('missing_polyfills') } (()=>{\"use strict\";var e, r, a, o, t, i, c, n={}, d={};function f(e){var r=d[e];if(void 0!==r)return r.exports;var a=d[e]={id:e, loaded:!1, exports:{}};return n[e].call(a.exports, a, a.exports, f), a.loaded=!0, a.exports}if(f.m=n, f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r, {a:r}), r}, r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__, f.t=function(a, o){if(1&o&&(a=this(a)), 8&o||\"object\"==typeof a&&a&&(4&o&&a.__esModule||16&o&&\"function\"==typeof a.then))return a;var t=Object.create(null);f.r(t);var i={};e=e||[null, r({}), r([]), r(r)];for(var c=2&o&&a;(\"object\"==typeof c||\"function\"==typeof c)&&!~e.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach(e=>{i[e]=()=>a[e]});return i.default=()=>a, f.d(t, i), t}, f.d=(e, r)=>{for(var a in r)f.o(r, a)&&!f.o(e, a)&&Object.defineProperty(e, a, {enumerable:!0, get:r[a]})}, f.f={}, f.e=e=>Promise.all(Object.keys(f.f).reduce((r, a)=>(f.f[a](e, r), r), [])), f.u=e=>\"6948\"===e?\"thunderbolt-commons.ad3bdc38.bundle.min.js\":\"3033\"===e?\"fastdom.inline.48a8bd4b.bundle.min.js\":\"1619\"===e?\"custom-element-utils.inline.43befd9d.bundle.min.js\":\"5205\"===e?\"render-indicator.inline.df41a0e9.bundle.min.js\":\"7151\"===e?\"version-indicator.inline.704acef2.bundle.min.js\":\"6008\"===e?\"bi-common.inline.17f83560.bundle.min.js\":\"\"+(({1059:\"santa-platform-utils\", 1090:\"speculationRules\", 1116:\"passwordProtectedPage\", 1122:\"group_19\", 1211:\"siteUrlService\", 1278:\"group_24\", 1308:\"global-css-engine\", 131:\"siteThemeService\", 1353:\"pageContextService\", 1374:\"editorWixCodeSdk\", 1438:\"sdkStateService\", 1522:\"builderContextProviders\", 1533:\"merge-mappers\", 1538:\"businessLogger\", 1611:\"group_44\", 1638:\"quickActionBar\", 1788:\"qaApi\", 1791:\"businessLoggerService\", 1799:\"BackgroundLayer\", 180:\"urlService\", 1802:\"provideCssService\", 1818:\"Repeater_FixedColumns\", 182:\"consentPolicy\", 1869:\"windowScroll\", 1899:\"platformSiteBusinessLoggerService\", 1932:\"customCss\", 1951:\"group_45\", 1969:\"wixEcomFrontendWixCodeSdk\", 2017:\"debug\", 2031:\"platformInteractionsService\", 2089:\"group_47\", 2122:\"siteDynamicRouteService\", 2130:\"ForwardRef\", 2198:\"platformDynamicRouteService\", 2214:\"siteConfigurationService\", 2220:\"group_31\", 2221:\"anchorsService\", 2226:\"translationsService\", 2242:\"builderModuleLoader\", 2303:\"externalServices\", 2304:\"TPAModal\", 2442:\"group_37\", 2463:\"siteTopologyService\", 2570:\"thunderbolt-components-registry\", 2609:\"imagePlaceholder\", 2616:\"linkUtilsService\", 2624:\"group_2\", 2689:\"TPABaseComponent\", 2735:\"TPAPreloaderOverlay\", 2771:\"publicApiCallerService\", 28:\"thunderbolt-components-registry-builder\", 2859:\"platformEnvironmentService\", 2867:\"namedSignalsService\", 2870:\"platformNamedSignalsService\", 2880:\"environmentService\", 294:\"stores\", 2996:\"seoService\", 3026:\"lightboxService\", 3187:\"businessManager\", 3220:\"platformPublicApiCallerService\", 3221:\"multilingual\", 325:\"servicesManager\", 3336:\"platformExperimentsService\", 3370:\"domSelectors\", 338:\"platformSiteTopologyService\", 3399:\"platformSiteDynamicRouteService\", 3407:\"clientSdk\", 3531:\"panorama\", 3556:\"warmupData\", 3607:\"UnauthorizedComponent\", 3654:\"ssrCache\", 3714:\"seo-api-converters\", 3801:\"wixDomSanitizer\", 3872:\"siteMembers\", 3884:\"tpaModuleProvider\", 3894:\"protectedPages\", 3937:\"siteRendererConfigurationService\", 3968:\"platformEditorContextService\", 3979:\"dynamicPages\", 399:\"searchBox\", 3992:\"componentsqaapi\", 3996:\"environmentWixCodeSdk\", 4134:\"group_4\", 4183:\"svgLoader\", 419:\"TPAPopup\", 4217:\"group_21\", 4218:\"group_0\", 4310:\"becky-css\", 4331:\"platform\", 4345:\"dashboardWixCodeSdk\", 4354:\"editorElementsDynamicTheme\", 4443:\"pagesService\", 4444:\"siteExperimentsService\", 4456:\"sitePagesService\", 4499:\"siteScrollBlockerService\", 4675:\"stickyToComponent\", 470:\"rendererConfigurationService\", 4708:\"reporter-api\", 477:\"group_32\", 4803:\"dynamicRouteService\", 4819:\"group_35\", 4990:\"accessibility\", 5002:\"group_28\", 5067:\"accessibilityBrowserZoom\", 5154:\"servicesManagerReact\", 5183:\"renderIndicator\", 5187:\"group_7\", 5213:\"scrollToAnchor\", 5217:\"siteRenderingContextService\", 5221:\"containerSliderService\", 5238:\"triggersAndReactions\", 5289:\"SiteStyles\", 5296:\"platformPubsub\", 5298:\"assetsLoader\", 5363:\"environment\", 5391:\"widgetWixCodeSdk\", 5474:\"platformPageContextService\", 5581:\"platformRenderingContextService\", 5675:\"group_41\", 569:\"siteMembersService\", 572:\"animationsWixCodeSdk\", 5735:\"platformSiteSiteThemeService\", 5745:\"ByocStyles\", 5750:\"platformSiteMembersService\", 5761:\"group_10\", 5794:\"seo-api\", 5837:\"group_14\", 5850:\"siteBusinessLoggerService\", 5863:\"appMonitoring\", 5874:\"navigation\", 5901:\"group_5\", 5976:\"AppPart\", 6070:\"platformSiteInteractionsService\", 6095:\"styleUtilsService\", 6103:\"usedPlatformApis\", 6134:\"routerService\", 6135:\"customUrlMapper\", 6155:\"imagePlaceholderService\", 6182:\"motion\", 620:\"globalCss\", 6218:\"group_11\", 6258:\"group_20\", 6285:\"versionIndicator\", 6336:\"siteSiteThemeService\", 6428:\"ContentReflowBanner\", 6453:\"platformRendererConfigurationService\", 6526:\"siteDeviceInfoService\", 6647:\"mobileFullScreen\", 6715:\"feedback\", 6732:\"siteProvideCssService\", 6749:\"router\", 6839:\"platformFedopsLoggerService\", 6891:\"group_38\", 6979:\"consentPolicyService\", 6992:\"platformTranslationsService\", 700:\"module-executor\", 7016:\"externalComponent\", 7109:\"group_43\", 7141:\"group_50\", 7146:\"serviceRegistrar\", 7200:\"canvas\", 7233:\"FontRulersContainer\", 7284:\"widget\", 7291:\"platformMultilingualService\", 7356:\"group_48\", 7360:\"AppPart2\", 7482:\"vsm-css\", 7502:\"group_42\", 7538:\"group_8\", 7554:\"headAppenderService\", 7575:\"renderer\", 7644:\"group_6\", 7716:\"group_40\", 7726:\"TPAUnavailableMessageOverlay\", 7729:\"tpa\", 7796:\"Repeater_FluidColumns\", 7801:\"testApi\", 7859:\"siteMembersWixCodeSdk\", 7862:\"platformLocaleService\", 7896:\"platformSiteUrlService\", 7921:\"interactions\", 7981:\"domStore\", 8051:\"animations\", 8207:\"FontFaces\", 821:\"group_25\", 8211:\"cyclicTabbingService\", 8255:\"platformRouterService\", 8277:\"pageAnchors\", 8319:\"platformSitePagesService\", 8332:\"platformSiteThemeService\", 8339:\"platformLinkUtilsService\", 8402:\"platformConfigurationService\", 8428:\"containerSlider\", 8547:\"group_49\", 8559:\"TPAWorker\", 8574:\"builderComponent\", 858:\"fedopsLoggerService\", 8634:\"platformDeviceInfoService\", 8656:\"RemoteRefDeadComp\", 8662:\"GhostComp\", 8678:\"cyclicTabbing\", 87:\"ooi\", 8729:\"group_9\", 8742:\"topologyService\", 8770:\"platformStyleUtilsService\", 8897:\"siteAboveTheFoldService\", 8919:\"group_3\", 8932:\"group_39\", 897:\"group_29\", 8970:\"contentReflow\", 898:\"group_46\", 906:\"onloadCompsBehaviors\", 9081:\"group_18\", 9091:\"platformTopologyService\", 9111:\"BuilderComponentDeadComp\", 9132:\"siteEditorContextService\", 9134:\"group_36\", 9182:\"group_51\", 9214:\"multilingualService\", 9270:\"siteScrollBlocker\", 9316:\"platformPagesService\", 9387:\"group_27\", 9395:\"popups\", 9421:\"provideComponentService\", 9467:\"platformSdkStateService\", 95:\"componentsLoader\", 959:\"group_23\", 9740:\"wix-seo-SEO_DEFAULT\", 9763:\"group_30\", 9764:\"platformConsentPolicyService\", 9768:\"group_22\", 9779:\"tslib.inline\", 9794:\"siteLocaleService\", 9845:\"routerFetch\", 9863:\"tpaWidgetNativeDeadComp\", 9899:\"siteInteractionsService\", 9980:\"mpaNavigation\"})[e]||e)+\".\"+({1059:\"97687ea7\", 1090:\"851746fd\", 1116:\"3816de9b\", 1122:\"a617ed77\", 1171:\"2a59485b\", 1193:\"2569022a\", 1211:\"85ca6cb1\", 1239:\"13b3236c\", 1244:\"ae66ca9f\", 1278:\"72c38df6\", 1308:\"1da1d9ff\", 131:\"cfa0ee23\", 1353:\"8e408c09\", 1374:\"038d9db5\", 1438:\"e883b66a\", 1463:\"ce95caaa\", 1522:\"e7b8a787\", 1533:\"8bcae311\", 1538:\"b3c0de71\", 1546:\"633fdeb7\", 1567:\"8a2ed6ac\", 1593:\"185974ae\", 1611:\"32da439a\", 1638:\"e48f9c16\", 1788:\"54c48f6e\", 1791:\"2d664784\", 1799:\"c6051cdc\", 180:\"646756e1\", 1802:\"3df59c19\", 1818:\"82eb4dab\", 182:\"a987db6a\", 1869:\"94e57fc8\", 1899:\"1b2057a6\", 1932:\"92545dcf\", 1951:\"c1314395\", 196:\"baa4a8cb\", 1962:\"e93dd1da\", 1969:\"62ed7f20\", 1997:\"219fdc2a\", 2017:\"4c8a2e51\", 203:\"93b8a21e\", 2031:\"0972aa94\", 2046:\"c3b0bdb6\", 2089:\"84e4b439\", 2122:\"cf9d7361\", 2130:\"972f1da6\", 2198:\"dcdf55cd\", 2214:\"b3407eb8\", 2220:\"820e7611\", 2221:\"2b2254e2\", 2226:\"b3d79fd0\", 2242:\"3e32cadd\", 2303:\"a9aa058b\", 2304:\"1c4e2cd1\", 2355:\"dff147c9\", 2442:\"434eca54\", 2463:\"0391096e\", 2538:\"bed4d851\", 2559:\"35044fa3\", 2570:\"d1d3cd39\", 2609:\"3c11dd4b\", 2616:\"89b26de8\", 2624:\"af5924c5\", 2639:\"7853b464\", 2689:\"fa382800\", 2725:\"6b13159c\", 2735:\"4bd510e1\", 2771:\"da04ce9a\", 2777:\"337d02e4\", 28:\"25280406\", 2859:\"2b9317db\", 2867:\"413074b3\", 2870:\"4e4d5f25\", 2880:\"676d132e\", 294:\"271cca5b\", 2996:\"c651b2c6\", 3026:\"b35591f5\", 3187:\"6bd030ea\", 3220:\"4716e932\", 3221:\"9d540a42\", 325:\"97378610\", 330:\"6686e7ed\", 3336:\"da9f5032\", 3370:\"1772351a\", 338:\"7eda8ac1\", 3399:\"ab0972b9\", 3407:\"f155b667\", 3415:\"27e0927d\", 3456:\"4a19a8fa\", 3480:\"987f1496\", 3531:\"a27650b3\", 3556:\"780ab490\", 3560:\"1762fb1e\", 3583:\"f8ed7ce7\", 3600:\"83d984c4\", 3607:\"8e13c2dd\", 3634:\"94e30248\", 3654:\"f7fb72e6\", 3714:\"2cc9a061\", 3723:\"af439be2\", 3801:\"34d4abc7\", 3872:\"e6468e98\", 3884:\"51ac9350\", 3894:\"f0b86b2d\", 3937:\"c52abcc5\", 3968:\"416cce38\", 3979:\"4ff4e6f5\", 399:\"d8cb3866\", 3992:\"c87cc4ab\", 3996:\"566c4d0f\", 4134:\"98b3bffd\", 4183:\"eaac3f9d\", 419:\"a13a7947\", 4217:\"cb838eb5\", 4218:\"b58e75e0\", 4310:\"8f278139\", 4331:\"1e4742a6\", 4345:\"c24c800d\", 4354:\"89ba8f0a\", 437:\"748f01d1\", 4443:\"cdab3cff\", 4444:\"37fe7050\", 4456:\"d8cb8478\", 4499:\"0ab63d57\", 4675:\"c717eba9\", 470:\"ef2ebe53\", 4708:\"71a5ef2b\", 477:\"71b56717\", 4803:\"824ca8f9\", 4819:\"35cb204d\", 4980:\"cbd2ff42\", 4990:\"e4888b8e\", 5002:\"517aa7aa\", 5028:\"dcbabd4f\", 5067:\"f43a588a\", 5154:\"2187b4f5\", 5183:\"c95e75a9\", 5187:\"0a21109c\", 5192:\"cc825f45\", 5213:\"bd63e157\", 5217:\"63721a41\", 5221:\"fec3cd3a\", 5238:\"2c5caf8e\", 5267:\"a4e6564b\", 5289:\"a8b3f792\", 5296:\"d41c28b7\", 5298:\"8157cf54\", 5363:\"7ac3f543\", 5391:\"e8dff2f9\", 5474:\"55cfd378\", 5539:\"4aa2904e\", 5581:\"256b7c35\", 5675:\"8cc46024\", 569:\"85ce470b\", 572:\"9f05a568\", 5735:\"5a3cfec9\", 5745:\"4ac8a223\", 5750:\"581e7d12\", 5761:\"538fbf88\", 5794:\"6372734f\", 5837:\"a7e0cdf0\", 5850:\"333eb10e\", 5863:\"a1c8acba\", 5874:\"eba89c08\", 5901:\"a9552603\", 5976:\"6a8402a6\", 6070:\"dc31d553\", 6086:\"61c45f4e\", 6095:\"98a18ef2\", 6103:\"2fac58dc\", 6134:\"664e9f31\", 6135:\"64f7515a\", 6155:\"c6a1d133\", 6182:\"b080ca8f\", 6198:\"ce015fff\", 620:\"172c0fd8\", 6218:\"eeaeabf5\", 6223:\"f63c905f\", 6258:\"d976ca4c\", 6285:\"a8fe3456\", 6336:\"6721363c\", 6428:\"dffb6c1d\", 6453:\"de2228ec\", 6474:\"a86b17b7\", 6526:\"0362d8ae\", 6647:\"26016b15\", 6715:\"9279907e\", 6732:\"a3d18858\", 6749:\"32a795c0\", 6753:\"ee1863b3\", 6839:\"67cdc1b8\", 6891:\"2fb20b49\", 6979:\"2e4502a1\", 6992:\"b199b90f\", 700:\"81334661\", 7016:\"2e78f1f7\", 7109:\"fe23d399\", 7114:\"73336236\", 7127:\"130b4e34\", 7141:\"f473d1ca\", 7146:\"3376f5cc\", 7186:\"3bc830d5\", 7200:\"bfd00c3f\", 7233:\"f9341c8b\", 7257:\"7236aab7\", 7284:\"1aaf65be\", 7291:\"396b917f\", 7356:\"8aafa69d\", 7360:\"327ec15d\", 7482:\"59238708\", 7502:\"16d2d210\", 7538:\"3b81e656\", 754:\"9c52b3e5\", 7554:\"86d2abc6\", 7575:\"320eeef1\", 7644:\"fdce0ad2\", 7716:\"b48b66d9\", 7726:\"8e304d9b\", 7729:\"6edeff75\", 7796:\"120ac45d\", 7801:\"6a858867\", 7859:\"6a6c6afd\", 7862:\"1a0ce6ce\", 7896:\"e2133554\", 7921:\"570181db\", 7981:\"ece10f59\", 8051:\"d94f0463\", 8052:\"29e79fff\", 81:\"54fe0482\", 8155:\"5a0141ee\", 8167:\"d0b9d59c\", 8207:\"6c3c8de5\", 821:\"724dfd3a\", 8211:\"b9cd99de\", 8255:\"40d16460\", 8277:\"5ac241c2\", 8319:\"9851d9fb\", 8332:\"a711845b\", 8339:\"2ccc441f\", 8402:\"b66f7f7f\", 8428:\"8d71c775\", 8487:\"a7db3a46\", 8547:\"4392f91f\", 8559:\"6b34ddad\", 8574:\"01674c17\", 858:\"84374dc7\", 8634:\"4b8ddea3\", 8656:\"afc9c6e5\", 8662:\"56f311d7\", 8678:\"a0ad2cb2\", 87:\"35dd0965\", 8729:\"51e774fe\", 8742:\"1abeb981\", 8770:\"04ec9910\", 8863:\"d3d9107f\", 8897:\"c87fc374\", 8919:\"267d3a50\", 8932:\"dca0f811\", 897:\"5e0152fc\", 8970:\"3a7544b6\", 898:\"1fd93beb\", 9022:\"7216c82e\", 906:\"b457547d\", 9071:\"a9e0d43e\", 9081:\"dacb1809\", 9091:\"8368e3eb\", 9111:\"ec7da82f\", 9132:\"ffc79f2e\", 9134:\"4b0f738f\", 9182:\"49f9c6e7\", 9214:\"26dd12a6\", 9269:\"712ee971\", 9270:\"d7ac0282\", 9316:\"81af62d8\", 9387:\"c4c38b3c\", 9395:\"2b704839\", 9421:\"5886298e\", 9467:\"1b10e3bd\", 95:\"037bc6b5\", 959:\"5877541f\", 9655:\"6601ab41\", 9740:\"6c1af586\", 9763:\"3f1bd6a0\", 9764:\"58cf53ee\", 9768:\"e636f159\", 9779:\"cdbfecc7\", 9794:\"56234440\", 9845:\"c9420889\", 9863:\"91e76dd4\", 9899:\"c3600bc3\", 9954:\"07a4e2f0\", 9980:\"bd7e02b4\"})[e]+\".chunk.min.js\", f.miniCssF=e=>\"5205\"===e?\"render-indicator.inline.d4591556.min.css\":\"7151\"===e?\"version-indicator.inline.7046c9c0.min.css\":\"\"+({1799:\"BackgroundLayer\", 1818:\"Repeater_FixedColumns\", 2304:\"TPAModal\", 2689:\"TPABaseComponent\", 2735:\"TPAPreloaderOverlay\", 419:\"TPAPopup\", 5187:\"group_7\", 5976:\"AppPart\", 6428:\"ContentReflowBanner\", 7233:\"FontRulersContainer\", 7360:\"AppPart2\", 7726:\"TPAUnavailableMessageOverlay\", 7796:\"Repeater_FluidColumns\", 9863:\"tpaWidgetNativeDeadComp\"})[e]+\".\"+({1799:\"0748fc04\", 1818:\"17a84fdd\", 2304:\"e96a6f61\", 2689:\"88cd9698\", 2735:\"44f745b9\", 419:\"82254d4c\", 5187:\"c472a333\", 5976:\"a5efb1fa\", 6428:\"91e2605c\", 7233:\"3c707054\", 7360:\"e5b1bfd5\", 7726:\"2ffa98e3\", 7796:\"564dd9aa\", 9863:\"6f11f5af\"})[e]+\".chunk.min.css\", f.g=(()=>{if(\"object\"==typeof globalThis)return globalThis;try{return this||Function(\"return this\")()}catch(e){if(\"object\"==typeof window)return window}})(), f.o=(e, r)=>Object.prototype.hasOwnProperty.call(e, r), a={}, f.l=function(e, r, o, t){if(a[e])return void a[e].push(r);if(void 0!==o)for(var i, c, n=document.getElementsByTagName(\"script\"), d=0;d {\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e, Symbol.toStringTag, {value:\"Module\"}), Object.defineProperty(e, \"__esModule\", {value:!0})}, f.nmd=e=>(e.paths=[], e.children||(e.children=[]), e), o=[], f.O=(e, r, a, t)=>{if(r){t=t||0;for(var i=o.length;i>0&&o[i-1][2]>t;i--)o[i]=o[i-1];o[i]=[r, a, t];return}for(var c=1/0, i=0;i =t)&&Object.keys(f.O).every(e=>f.O[e](r[d]))?r.splice(d--, 1):(n=!1, t \"1.6.8\", \"undefined\"!=typeof document){var l=function(e, r, a, o, t){var i=document.createElement(\"link\");return i.rel=\"stylesheet\", i.type=\"text/css\", f.nc&&(i.nonce=f.nc), i.href=r, i.onerror=i.onload=function(a){if(i.onerror=i.onload=null, \"load\"===a.type)o();else{var c=a&&(\"load\"===a.type?\"missing\":a.type), n=a&&a.target&&a.target.href||r, d=Error(\"Loading CSS chunk \"+e+\" failed.\\\\n(\"+n+\")\");d.code=\"CSS_CHUNK_LOAD_FAILED\", d.type=c, d.request=n, i.parentNode&&i.parentNode.removeChild(i), t(d)}}, a?a.parentNode.insertBefore(i, a.nextSibling):document.head.appendChild(i), i}, s=function(e, r){for(var a=document.getElementsByTagName(\"link\"), o=0;o a=t[e]=[r, o]);r.push(a[2]=o);var i=f.p+f.u(e), c=Error();f.l(i, function(r){if(f.o(t, e)&&(0!==(a=t[e])&&(t[e]=void 0), a)){var o=r&&(\"load\"===r.type?\"missing\":r.type), i=r&&r.target&&r.target.src;c.message=\"Loading chunk \"+e+\" failed.\\n(\"+o+\": \"+i+\")\", c.name=\"ChunkLoadError\", c.type=o, c.request=i, a[1](c)}}, \"chunk-\"+e, e)}else t[e]=0}, f.O.j=e=>0===t[e], i=(e, r)=>{var a, o, [i, c, n]=r, d=0;if(i.some(e=>0!==t[e])){for(a in c)f.o(c, a)&&(f.m[a]=c[a]);if(n)var l=n(f)}for(e&&e(r);d (self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"3033\"], {17709(t){!function(e){\"use strict\";var i=function(){}, n=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(t){return setTimeout(t, 16)};function s(){this.reads=[], this.writes=[], this.raf=n.bind(e), i(\"initialized\", this)}function r(t){t.scheduled||(t.scheduled=!0, t.raf(a.bind(null, t)), i(\"flush scheduled\"))}function a(t){i(\"flush\");var e, n=t.writes, s=t.reads;try{i(\"flushing reads\", s.length), t.runTasks(s), i(\"flushing writes\", n.length), t.runTasks(n)}catch(t){e=t}if(t.scheduled=!1, (s.length||n.length)&&r(t), e)if(i(\"task errored\", e.message), t.catch)t.catch(e);else throw e}function u(t, e){var i=t.indexOf(e);return!!~i&&!!t.splice(i, 1)}s.prototype={constructor:s, runTasks:function(t){var e;for(i(\"run tasks\");e=t.shift();)e()}, measure:function(t, e){i(\"measure\");var n=e?t.bind(e):t;return this.reads.push(n), r(this), n}, mutate:function(t, e){i(\"mutate\");var n=e?t.bind(e):t;return this.writes.push(n), r(this), n}, clear:function(t){return i(\"clear\", t), u(this.reads, t)||u(this.writes, t)}, extend:function(t){if(i(\"extend\", t), \"object\"!=typeof t)throw Error(\"expected object\");var e=Object.create(this);return function(t, e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}(e, t), e.fastdom=this, e.initialize&&e.initialize(), e}, catch:null}, t.exports=e.fastdom=e.fastdom||new s}(\"undefined\"!=typeof window?window:void 0!==this?this:globalThis)}}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/fastdom.inline.48a8bd4b.bundle.min.js.map \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"1619\"], {26350(e, t, i){i.r(t), i.d(t, {STATIC_MEDIA_URL:()=>eH, fileType:()=>v, fittingTypes:()=>r, getData:()=>eR, MEDIA_ROOT_URL:()=>ez, sdk:()=>eB, isWEBP:()=>x, alignTypes:()=>c, htmlTag:()=>u, getPlaceholder:()=>eC, getResponsiveImageProps:()=>e$, upscaleMethods:()=>m, getFileExtension:()=>k, populateGlobalFeatureSupport:()=>q});let r={SCALE_TO_FILL:\"fill\", SCALE_TO_FIT:\"fit\", STRETCH:\"stretch\", ORIGINAL_SIZE:\"original_size\", TILE:\"tile\", TILE_HORIZONTAL:\"tile_horizontal\", TILE_VERTICAL:\"tile_vertical\", FIT_AND_TILE:\"fit_and_tile\", LEGACY_STRIP_TILE:\"legacy_strip_tile\", LEGACY_STRIP_TILE_HORIZONTAL:\"legacy_strip_tile_horizontal\", LEGACY_STRIP_TILE_VERTICAL:\"legacy_strip_tile_vertical\", LEGACY_STRIP_SCALE_TO_FILL:\"legacy_strip_fill\", LEGACY_STRIP_SCALE_TO_FIT:\"legacy_strip_fit\", LEGACY_STRIP_FIT_AND_TILE:\"legacy_strip_fit_and_tile\", LEGACY_STRIP_ORIGINAL_SIZE:\"legacy_strip_original_size\", LEGACY_ORIGINAL_SIZE:\"actual_size\", LEGACY_FIT_WIDTH:\"fitWidth\", LEGACY_FIT_HEIGHT:\"fitHeight\", LEGACY_FULL:\"full\", LEGACY_BG_FIT_AND_TILE:\"legacy_tile\", LEGACY_BG_FIT_AND_TILE_HORIZONTAL:\"legacy_tile_horizontal\", LEGACY_BG_FIT_AND_TILE_VERTICAL:\"legacy_tile_vertical\", LEGACY_BG_NORMAL:\"legacy_normal\"}, n=\"fill\", a=\"fill_focal\", o=\"crop\", s=\"legacy_crop\", l=\"legacy_fill\", c={CENTER:\"center\", TOP:\"top\", TOP_LEFT:\"top_left\", TOP_RIGHT:\"top_right\", BOTTOM:\"bottom\", BOTTOM_LEFT:\"bottom_left\", BOTTOM_RIGHT:\"bottom_right\", LEFT:\"left\", RIGHT:\"right\"}, h={[c.CENTER]:{x:.5, y:.5}, [c.TOP_LEFT]:{x:0, y:0}, [c.TOP_RIGHT]:{x:1, y:0}, [c.TOP]:{x:.5, y:0}, [c.BOTTOM_LEFT]:{x:0, y:1}, [c.BOTTOM_RIGHT]:{x:1, y:1}, [c.BOTTOM]:{x:.5, y:1}, [c.RIGHT]:{x:1, y:.5}, [c.LEFT]:{x:0, y:.5}}, d={center:\"c\", top:\"t\", top_left:\"tl\", top_right:\"tr\", bottom:\"b\", bottom_left:\"bl\", bottom_right:\"br\", left:\"l\", right:\"r\"}, u={BG:\"bg\", IMG:\"img\", SVG:\"svg\"}, m={AUTO:\"auto\", CLASSIC:\"classic\", SUPER:\"super\"}, g={radius:\"0.66\", amount:\"1.00\", threshold:\"0.01\"}, p={uri:\"\", css:{img:{}, container:{}}, attr:{img:{}, container:{}}, transformed:!1}, f=[1.5, 2, 4], _={HIGH:{size:196e4, quality:90, maxUpscale:1}, MEDIUM:{size:36e4, quality:85, maxUpscale:1}, LOW:{size:16e4, quality:80, maxUpscale:1.2}, TINY:{size:0, quality:80, maxUpscale:1.4}}, b=\"HIGH\", T=\"MEDIUM\", I=\"contrast\", E=\"brightness\", w=\"saturation\", L=\"blur\", v={JPG:\"jpg\", JPEG:\"jpeg\", JPE:\"jpe\", PNG:\"png\", WEBP:\"webp\", WIX_ICO_MP:\"wix_ico_mp\", WIX_MP:\"wix_mp\", GIF:\"gif\", SVG:\"svg\", AVIF:\"avif\", UNRECOGNIZED:\"unrecognized\"};function A(e, ...t){return function(...i){let r=i[i.length-1]||{}, n=[e[0]];return t.forEach(function(t, a){let o=Number.isInteger(t)?i[t]:r[t];n.push(o, e[a+1])}), n.join(\"\")}}function y(e){return e[e.length-1]}v.JPG, v.JPEG, v.JPE, v.PNG, v.GIF, v.WEBP;let O=[v.PNG, v.JPEG, v.JPG, v.JPE, v.WIX_ICO_MP, v.WIX_MP, v.WEBP, v.AVIF], C=[v.JPEG, v.JPG, v.JPE];function R(e, t, i){var n;return i&&t&&!(!(n=t.id)||!n.trim()||\"none\"===n.toLowerCase())&&Object.values(r).includes(e)}function M(e, t, i, r){var n;if(n=e, /(^https?)|(^data)|(^\\/\\/)/.test(n)||(x(e)||P(e))&&t&&!i)return!1;let a=O.includes(k(e)), o=!!G(e)&&!!(i||r);return a||o}function S(e){return k(e)===v.PNG}function x(e){return k(e)===v.WEBP}function G(e){return k(e)===v.GIF}function P(e){return k(e)===v.AVIF}let N=[\"/\", \"\\\\\", \"?\", \" \", \"|\", \"\\u201C\", \":\", '\"'].map(encodeURIComponent), F=[\"\\\\.\", \"\\\\*\"];function k(e){return(/[.]([^.]+)$/.exec(e)&&/[.]([^.]+)$/.exec(e)[1]||\"\").toLowerCase()}function $(e, t, i, r, a){let o;return o=a===n?Math.max(i/e, r/t):\"fit\"===a?Math.min(i/e, r/t):1}function B(e, t, i, r, a, o){let{scaleFactor:s, width:l, height:c}=function(e, t, i, r, n){let a, o=i, s=r;if(a=$(e, t, i, r, n), \"fit\"===n&&(o=e*a, s=t*a), o&&s&&o*s>25e6){let i=Math.sqrt(25e6/(o*s));o*=i, s*=i, a=$(e, t, o, s, n)}return{scaleFactor:a, width:o, height:s}}(e=e||r.width, t=t||r.height, r.width*a, r.height*a, i);return function(e, t, i, r, a, o, s){let{optimizedScaleFactor:l, upscaleMethodValue:c, forceUSM:h}=function(e, t, i, r){if(\"auto\"===r)return{optimizedScaleFactor:_[U(e, t)].maxUpscale, upscaleMethodValue:1, forceUSM:!1};if(\"super\"===r)return{optimizedScaleFactor:y(f), upscaleMethodValue:2, forceUSM:!(f.includes(i)||i>y(f))};return{optimizedScaleFactor:_[U(e, t)].maxUpscale, upscaleMethodValue:1, forceUSM:!1}}(e, t, o, a), d=i, u=r;if(o _[b].size?b:i>_[T].size?T:i>_.LOW.size?\"LOW\":\"TINY\"}function W(e, t){let i=Math.pow(10, t||0);return(e*i/i).toFixed(t)}let Y={isMobile:!1}, D=function(e, t){Y[e]=t};function q(){if(\"undefined\"!=typeof window&&\"undefined\"!=typeof navigator){let e=window.matchMedia&&window.matchMedia(\"(max-width: 767px)\").matches, t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);D(\"isMobile\", e&&t)}}function j(e, t){let i={css:{container:{}}}, {css:n}=i, {fittingType:a}=e;switch(a){case r.ORIGINAL_SIZE:case r.LEGACY_ORIGINAL_SIZE:case r.LEGACY_STRIP_ORIGINAL_SIZE:n.container.backgroundSize=\"auto\", n.container.backgroundRepeat=\"no-repeat\";break;case r.SCALE_TO_FIT:case r.LEGACY_STRIP_SCALE_TO_FIT:n.container.backgroundSize=\"contain\", n.container.backgroundRepeat=\"no-repeat\";break;case r.STRETCH:n.container.backgroundSize=\"100% 100%\", n.container.backgroundRepeat=\"no-repeat\";break;case r.SCALE_TO_FILL:case r.LEGACY_STRIP_SCALE_TO_FILL:n.container.backgroundSize=\"cover\", n.container.backgroundRepeat=\"no-repeat\";break;case r.TILE_HORIZONTAL:case r.LEGACY_STRIP_TILE_HORIZONTAL:n.container.backgroundSize=\"auto\", n.container.backgroundRepeat=\"repeat-x\";break;case r.TILE_VERTICAL:case r.LEGACY_STRIP_TILE_VERTICAL:n.container.backgroundSize=\"auto\", n.container.backgroundRepeat=\"repeat-y\";break;case r.TILE:case r.LEGACY_STRIP_TILE:n.container.backgroundSize=\"auto\", n.container.backgroundRepeat=\"repeat\";break;case r.LEGACY_STRIP_FIT_AND_TILE:n.container.backgroundSize=\"contain\", n.container.backgroundRepeat=\"repeat\";break;case r.FIT_AND_TILE:case r.LEGACY_BG_FIT_AND_TILE:n.container.backgroundSize=\"auto\", n.container.backgroundRepeat=\"repeat\";break;case r.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:n.container.backgroundSize=\"auto\", n.container.backgroundRepeat=\"repeat-x\";break;case r.LEGACY_BG_FIT_AND_TILE_VERTICAL:n.container.backgroundSize=\"auto\", n.container.backgroundRepeat=\"repeat-y\";break;case r.LEGACY_BG_NORMAL:n.container.backgroundSize=\"auto\", n.container.backgroundRepeat=\"no-repeat\"}switch(t.alignment){case c.CENTER:n.container.backgroundPosition=\"center center\";break;case c.LEFT:n.container.backgroundPosition=\"left center\";break;case c.RIGHT:n.container.backgroundPosition=\"right center\";break;case c.TOP:n.container.backgroundPosition=\"center top\";break;case c.BOTTOM:n.container.backgroundPosition=\"center bottom\";break;case c.TOP_RIGHT:n.container.backgroundPosition=\"right top\";break;case c.TOP_LEFT:n.container.backgroundPosition=\"left top\";break;case c.BOTTOM_RIGHT:n.container.backgroundPosition=\"right bottom\";break;case c.BOTTOM_LEFT:n.container.backgroundPosition=\"left bottom\"}return i}let V={[c.CENTER]:\"center\", [c.TOP]:\"top\", [c.TOP_LEFT]:\"top left\", [c.TOP_RIGHT]:\"top right\", [c.BOTTOM]:\"bottom\", [c.BOTTOM_LEFT]:\"bottom left\", [c.BOTTOM_RIGHT]:\"bottom right\", [c.LEFT]:\"left\", [c.RIGHT]:\"right\"}, Z={position:\"absolute\", top:\"auto\", right:\"auto\", bottom:\"auto\", left:\"auto\"};function J(e, t){let i={css:{container:{}, img:{}}}, {css:n}=i, {fittingType:a}=e, o=t.alignment;switch(n.container.position=\"relative\", a){case r.ORIGINAL_SIZE:case r.LEGACY_ORIGINAL_SIZE:e.parts&&e.parts.length?(n.img.width=e.parts[0].width, n.img.height=e.parts[0].height):(n.img.width=e.src.width, n.img.height=e.src.height);break;case r.SCALE_TO_FIT:case r.LEGACY_FIT_WIDTH:case r.LEGACY_FIT_HEIGHT:case r.LEGACY_FULL:n.img.width=t.width, n.img.height=t.height, n.img.objectFit=\"contain\", n.img.objectPosition=V[o]||\"unset\";break;case r.LEGACY_BG_NORMAL:n.img.width=\"100%\", n.img.height=\"100%\", n.img.objectFit=\"none\", n.img.objectPosition=V[o]||\"unset\";break;case r.STRETCH:n.img.width=t.width, n.img.height=t.height, n.img.objectFit=\"fill\";break;case r.SCALE_TO_FILL:n.img.width=t.width, n.img.height=t.height, n.img.objectFit=\"cover\"}if(\"number\"==typeof n.img.width&&\"number\"==typeof n.img.height&&(n.img.width!==t.width||n.img.height!==t.height)){let e=Math.round((t.height-n.img.height)/2), i=Math.round((t.width-n.img.width)/2);Object.assign(n.img, Z, {[c.TOP_LEFT]:{top:0, left:0}, [c.TOP_RIGHT]:{top:0, right:0}, [c.TOP]:{top:0, left:i}, [c.BOTTOM_LEFT]:{bottom:0, left:0}, [c.BOTTOM_RIGHT]:{bottom:0, right:0}, [c.BOTTOM]:{bottom:0, left:i}, [c.RIGHT]:{top:e, right:0}, [c.LEFT]:{top:e, left:0}, [c.CENTER]:{width:t.width, height:t.height, objectFit:\"none\"}}[o])}return i}function X(e, t){let i, a={css:{container:{}}, attr:{container:{}, img:{}}}, {css:o, attr:s}=a, {fittingType:l}=e, h=t.alignment, {width:d, height:u}=e.src;switch(o.container.position=\"relative\", l){case r.ORIGINAL_SIZE:case r.LEGACY_ORIGINAL_SIZE:case r.TILE:e.parts&&e.parts.length?(s.img.width=e.parts[0].width, s.img.height=e.parts[0].height):(s.img.width=d, s.img.height=u), s.img.preserveAspectRatio=\"xMidYMid slice\";break;case r.SCALE_TO_FIT:case r.LEGACY_FIT_WIDTH:case r.LEGACY_FIT_HEIGHT:case r.LEGACY_FULL:s.img.width=\"100%\", s.img.height=\"100%\", s.img.transform=\"\", s.img.preserveAspectRatio=\"\";break;case r.STRETCH:s.img.width=t.width, s.img.height=t.height, s.img.x=0, s.img.y=0, s.img.transform=\"\", s.img.preserveAspectRatio=\"none\";break;case r.SCALE_TO_FILL:if(M(e.src.id))s.img.width=t.width, s.img.height=t.height;else{var m;let e;m=t.width, e=$(d, u, m, t.height, n), i={width:Math.round(d*e), height:Math.round(u*e)}, s.img.width=i.width, s.img.height=i.height}s.img.x=0, s.img.y=0, s.img.transform=\"\", s.img.preserveAspectRatio=\"xMidYMid slice\"}if(\"number\"==typeof s.img.width&&\"number\"==typeof s.img.height&&(s.img.width!==t.width||s.img.height!==t.height)){let e, i, n=0, a=0;l===r.TILE?(e=t.width%s.img.width, i=t.height%s.img.height):(e=t.width-s.img.width, i=t.height-s.img.height);let o=Math.round(e/2), d=Math.round(i/2);switch(h){case c.TOP_LEFT:n=0, a=0;break;case c.TOP:n=o, a=0;break;case c.TOP_RIGHT:n=e, a=0;break;case c.LEFT:n=0, a=d;break;case c.CENTER:n=o, a=d;break;case c.RIGHT:n=e, a=d;break;case c.BOTTOM_LEFT:n=0, a=i;break;case c.BOTTOM:n=o, a=i;break;case c.BOTTOM_RIGHT:n=e, a=i}s.img.x=n, s.img.y=a}return s.container.width=t.width, s.container.height=t.height, s.container.viewBox=[\"0 0\", t.width, t.height].join(\" \"), a}function K(e, t){let i=B(e.src.width, e.src.height, \"fit\", t, e.devicePixelRatio, e.upscaleMethod);return{transformType:e.src.width&&e.src.height?n:\"fit\", width:Math.round(i.width), height:Math.round(i.height), alignment:d.center, upscale:i.scaleFactor>1, forceUSM:i.forceUSM, scaleFactor:i.scaleFactor, cssUpscaleNeeded:i.cssUpscaleNeeded, upscaleMethodValue:i.upscaleMethodValue}}function Q(e){return{transformType:o, x:Math.round(e.x), y:Math.round(e.y), width:Math.round(e.width), height:Math.round(e.height), upscale:!1, forceUSM:!1, scaleFactor:1, cssUpscaleNeeded:!1}}function ee(e, t, i){return\"number\"==typeof e&&!isNaN(e)&&0!==e&&e>=t&&e 1, forceUSM:w.forceUSM, scaleFactor:w.scaleFactor, cssUpscaleNeeded:w.cssUpscaleNeeded, upscaleMethodValue:w.upscaleMethodValue}));break;case r.STRETCH:e.parts.push((f=e, _=i, v=$(f.src.width, f.src.height, _.width, _.height, n), (A={..._}).width=f.src.width*v, A.height=f.src.height*v, K(f, A)));break;case r.TILE_HORIZONTAL:case r.TILE_VERTICAL:case r.TILE:case r.LEGACY_ORIGINAL_SIZE:case r.ORIGINAL_SIZE:d=e.src, u=e.focalPoint, m=i.alignment, y=z(u)||function(e=c.CENTER){return h[e]}(m), E={x:Math.max(0, Math.min(d.width-i.width, y.x*d.width-i.width/2)), y:Math.max(0, Math.min(d.height-i.height, y.y*d.height-i.height/2)), width:Math.min(d.width, i.width), height:Math.min(d.height, i.height)}, e.src.isCropped?(Object.assign(e.parts[0], E), e.src.width=E.width, e.src.height=E.height):e.parts.push(Q(E));break;case r.LEGACY_STRIP_TILE_HORIZONTAL:case r.LEGACY_STRIP_TILE_VERTICAL:case r.LEGACY_STRIP_TILE:case r.LEGACY_STRIP_ORIGINAL_SIZE:e.parts.push({transformType:s, width:Math.round((b=i).width), height:Math.round(b.height), alignment:H(b), upscale:!1, forceUSM:!1, scaleFactor:1, cssUpscaleNeeded:!1});break;case r.LEGACY_STRIP_SCALE_TO_FIT:case r.LEGACY_STRIP_FIT_AND_TILE:e.parts.push({transformType:\"fit\", width:Math.round((T=i).width), height:Math.round(T.height), upscale:!1, forceUSM:!0, scaleFactor:1, cssUpscaleNeeded:!1});break;case r.LEGACY_STRIP_SCALE_TO_FILL:e.parts.push({transformType:l, width:Math.round((I=i).width), height:Math.round(I.height), alignment:H(I), upscale:!1, forceUSM:!0, scaleFactor:1, cssUpscaleNeeded:!1})}}(J, t, i), J.quality=function(e, t){let i=e.fileType===v.PNG, r=e.fileType===v.JPG, n=e.fileType===v.WEBP, a=e.fileType===v.AVIF;if(r||i||n||a){let r=y(e.parts), n=_[U(r.width, r.height)].quality, a=t.quality&&t.quality>=5&&t.quality =.1&&T.radius =0&&T.amount =0&&T.threshold =1&&!m.forceUSM&&\"fit\"!==m.transformType?void 0:g, O=p.filters||{}, C={}, ee(O[I], -100, 100)&&(C[I]=O[I]), ee(O[E], -100, 100)&&(C[E]=O[E]), ee(O[w], -100, 100)&&(C[w]=O[w]), ee(O.hue, -180, 180)&&(C.hue=O.hue), ee(O[L], 0, 100)&&(C[L]=O[L]), J.filters=C}return J}function ei(e, t, i){let n={...i}, a=Y.isMobile;switch(e){case r.LEGACY_BG_FIT_AND_TILE:case r.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case r.LEGACY_BG_FIT_AND_TILE_VERTICAL:case r.LEGACY_BG_NORMAL:n.width=Math.min(a?1e3:1920, t.width), n.height=Math.min(a?1e3:1920, Math.round(n.width/(t.width/t.height))), n.pixelAspectRatio=1}return n}let er=A`fit/w_${\"width\"}, h_${\"height\"}`, en=A`fill/w_${\"width\"}, h_${\"height\"}, al_${\"alignment\"}`, ea=A`fill/w_${\"width\"}, h_${\"height\"}, fp_${\"focalPointX\"}_${\"focalPointY\"}`, eo=A`crop/x_${\"x\"}, y_${\"y\"}, w_${\"width\"}, h_${\"height\"}`, es=A`crop/w_${\"width\"}, h_${\"height\"}, al_${\"alignment\"}`, el=A`fill/w_${\"width\"}, h_${\"height\"}, al_${\"alignment\"}`, ec=A`, lg_${\"upscaleMethodValue\"}`, eh=A`, q_${\"quality\"}`, ed=A`, quality_auto`, eu=A`, usm_${\"radius\"}_${\"amount\"}_${\"threshold\"}`, em=A`, bl`, eg=A`, wm_${\"watermark\"}`, ep={[I]:A`, con_${\"contrast\"}`, [E]:A`, br_${\"brightness\"}`, [w]:A`, sat_${\"saturation\"}`, hue:A`, hue_${\"hue\"}`, [L]:A`, blur_${\"blur\"}`}, ef=A`, enc_auto`, e_=A`, enc_avif`, eb=A`, enc_pavif`, eT=A`, pstr`, eI=A`, anm_all`;function eE(e, t, i, r={}, c){if(M(t.id, r?.hasAnimation, r?.allowAnimatedTransform, r?.allowFullGIFTransformation)){if((x(t.id)||P(t.id))&&!r.allowWebpAvifTransforms){let{alignment:n, ...a}=i;t.focalPoint={x:void 0, y:void 0}, delete t?.crop, c=et(e, t, a, r)}else c=c||et(e, t, i, r);return function(e){let t=[];e.parts.forEach(e=>{switch(e.transformType){case o:t.push(eo(e));break;case s:t.push(es(e));break;case l:let i=el(e);e.upscale&&(i+=ec(e)), t.push(i);break;case\"fit\":let r=er(e);e.upscale&&(r+=ec(e)), t.push(r);break;case n:let c=en(e);e.upscale&&(c+=ec(e)), t.push(c);break;case a:let h=ea(e);e.upscale&&(h+=ec(e)), t.push(h)}});let i=t.join(\"/\");if(e.quality&&(i+=eh(e)), e.unsharpMask&&(i+=eu(e.unsharpMask)), e.progressive||(i+=em(e)), e.watermark&&(i+=eg(e)), e.filters&&(i+=Object.keys(e.filters).map(t=>ep[t](e.filters)).join(\"\")), e.fileType!==v.GIF&&(\"AVIF\"===e.encoding?(i+=e_(e), i+=ed(e)):\"PAVIF\"===e.encoding?(i+=eb(e), i+=ed(e)):e.autoEncode&&(i+=ef(e))), e.src?.isAnimated&&e.transformed){let t=G(e.src.id), r=!0===e.isPlaceholderFlow, n=!0===e.allowFullGIFTransformation;r?i+=eT(e):t&&n&&(i+=eI(e))}return`${e.src.id}/v1/${i}/${e.fileName}.${e.preferredExtension}`}(c)}return t.id}let ew={[c.CENTER]:\"50% 50%\", [c.TOP_LEFT]:\"0% 0%\", [c.TOP_RIGHT]:\"100% 0%\", [c.TOP]:\"50% 0%\", [c.BOTTOM_LEFT]:\"0% 100%\", [c.BOTTOM_RIGHT]:\"100% 100%\", [c.BOTTOM]:\"50% 100%\", [c.RIGHT]:\"100% 50%\", [c.LEFT]:\"0% 50%\"}, eL=Object.entries(ew).reduce((e, [t, i])=>(e[i]=t, e), {}), ev=[r.TILE, r.TILE_HORIZONTAL, r.TILE_VERTICAL, r.LEGACY_BG_FIT_AND_TILE, r.LEGACY_BG_FIT_AND_TILE_HORIZONTAL, r.LEGACY_BG_FIT_AND_TILE_VERTICAL], eA=[r.LEGACY_ORIGINAL_SIZE, r.ORIGINAL_SIZE, r.LEGACY_BG_NORMAL];function ey(e, t, {width:i, height:n}){return e===r.TILE&&t.width>i&&t.height>n}let eO={width:\"100%\", height:\"100%\"};function eC(e, t, i, n={}){var a;let o, {autoEncode:s=!0, isSEOBot:l, shouldLoadHQImage:c, hasAnimation:h, allowAnimatedTransform:d, encoding:u}=n;if(!R(e, t, i))return p;let m=d??!0, g=M(t.id, h, m);if(!g||c)return eR(e, t, i, {...n, autoEncode:s, useSrcset:g});let f={...i, ...function(e, {width:t, height:i}){if(!t||!i){let r=t||Math.min(980, e.width), n=r/e.width;return{width:r, height:i||e.height*n}}return{width:t, height:i}}(t, i)}, {alignment:_, htmlTag:b}=f, T=ey(e, t, f), I=function(e, t, {width:i, height:r}, n=!1){var a, o;if(n)return{width:i, height:r};let s=!eA.includes(e), l=ey(e, t, {width:i, height:r}), c=!l&&ev.includes(e), h=c?t.width:i, d=c?t.height:r, u=s?(a=h, o=S(t.id), a>900?o?.05:.15:a>500?o?.1:.18:a>200?.25:1):1;return{width:l?1920:h*u, height:d*u}}(e, t, f, l), E=(a=f.width, l?0:ev.includes(e)?1:a>200?2:3), w=(o=ev.includes(e)&&!T, e===r.SCALE_TO_FILL||o?r.SCALE_TO_FIT:e), L=function(e, t, i, n=\"center\"){let a={img:{}, container:{}};if(e===r.SCALE_TO_FILL){var o;let e=t.focalPoint&&(o=t.focalPoint, eL[`${o.x}% ${o.y}%`]||\"\");t.focalPoint&&!e?a.img={objectPosition:function(e, t, i){let{width:r, height:n}=e, {width:a, height:o}=t, {x:s, y:l}=i;if(!a||!o)return`${s}% ${l}%`;let c=Math.max(a/r, o/n), h=r*c, d=n*c, u=Math.max(0, Math.min(h-a, s/100*h-a/2)), m=Math.max(0, Math.min(d-o, l/100*d-o/2)), g=u&&Math.floor(u/(h-a)*100), p=m&&Math.floor(m/(d-o)*100);return`${g}% ${p}%`}(t, i, t.focalPoint)}:a.img={objectPosition:ew[e||n]}}else[r.LEGACY_ORIGINAL_SIZE, r.ORIGINAL_SIZE].includes(e)?a.img={objectFit:\"none\", top:\"auto\", left:\"auto\", right:\"auto\", bottom:\"auto\"}:ev.includes(e)&&(a.container={backgroundSize:`${t.width}px ${t.height}px`});return a}(e, t, i, _), {uri:v}=eR(w, t, {...I, alignment:_, htmlTag:b}, {autoEncode:s, filters:E?{blur:E}:{}, hasAnimation:h, allowAnimatedTransform:m, encoding:u, isPlaceholderFlow:!0}), {attr:A={}, css:y}=eR(e, t, {...f, alignment:_, htmlTag:b}, {});return y.img=y.img||{}, y.container=y.container||{}, Object.assign(y.img, L.img, eO), Object.assign(y.container, L.container), {uri:v, css:y, attr:A, transformed:!0}}function eR(e, t, i, r){let n={};if(R(e, t, i)){var a;let o, s=ei(e, t, i), l=et(e, t, s, r);n.uri=eE(e, t, s, r, l), r?.useSrcset&&(n.srcset=(a=n, o=s.pixelAspectRatio||1, {dpr:[`${1===o?a.uri:eE(e, t, {...s, pixelAspectRatio:1}, r)} 1x`, `${2===o?a.uri:eE(e, t, {...s, pixelAspectRatio:2}, r)} 2x`]})), Object.assign(n, (s.htmlTag===u.BG?j:s.htmlTag===u.SVG?X:J)(l, s), {transformed:l.transformed})}else n=p;return n}function eM(e, t, i, r){if(R(e, t, i)){let n=ei(e, t, i), a=et(e, t, n, r);return{uri:eE(e, t, n, r||{}, a)}}return{uri:\"\"}}let eS=\"https://static.wixstatic.com/\", ex=\"https://static.wixstatic.com/media/\", eG=/^media\\//i, eP=\"undefined\"!=typeof window?window.devicePixelRatio:1, eN=(e, t)=>{let i=t&&t.baseHostURL;return i?`${i}${e}`:eG.test(e)?`${eS}${e}`:`${ex}${e}`};q();let eF=\"center\", ek=[1920, 1536, 1366, 1280, 980], e$=(e, t, i)=>{let{displayMode:r, uri:n, width:a, height:o, name:s, crop:l, focalPoint:c, alignType:h, quality:d, upscaleMethod:u, hasAnimation:m, allowAnimatedTransform:g, encoding:p, siteMargin:f, widthProportion:_, allowFullGIFTransformation:b, baseHostURL:T}=e;if(_){let e, g, I=(e=\"original_size\"===r, g=a/o, ek.map((r, I)=>{let E=980===r, w=e=>E?t:_/100*(e-2*(f||0)), L=w(ek[I+1]), v=w(r), A=L/i, y=!(e||E)&&((e, t, i, r, n, a, o, s=eF)=>{if(e>t){let e=Math.round(r/(a/n)), t=Math.round(i/2-e/2);return s.includes(\"top\")?t=0:s.includes(\"bottom\")&&(t=i-e), {width:r, height:e, x:0, y:t}}{let e=Math.round(i/(n/o)), t=Math.round(r/2-e/2);return s.includes(\"left\")?t=0:s.includes(\"right\")&&(t=r-e), {width:e, height:i, x:t, y:0}}})(A, g, o, a, i, L, v, h), {srcset:O, fallbackSrc:C, css:R}=e$({displayMode:e?\"original_size\":E?\"fill\":\"fit\", uri:n, width:a, height:o, crop:l||y, name:s, focalPoint:c, alignType:h, quality:d, upscaleMethod:u, hasAnimation:m, encoding:p, allowFullGIFTransformation:b, baseHostURL:T}, v, i);return e&&R&&(R.img.objectFit=\"cover\"), {srcset:O||\"\", sizes:E?`${_}vw`:`${v}px`, media:`(max-width: ${r}px)`, fallbackSrc:C, imgStyle:R?.img}})).filter(Boolean).reverse();return{fallbackSrc:I[0].fallbackSrc, sources:I, css:I[0].imgStyle}}{let{srcset:e, css:f, uri:_}=eR(r, {id:n, width:a, height:o, name:s, crop:l, focalPoint:c}, {width:t, height:i, alignment:h}, {focalPoint:c, name:s, quality:d?.quality, upscaleMethod:u, hasAnimation:m, allowAnimatedTransform:g, useSrcset:!0, encoding:p, allowFullGIFTransformation:b}), I=T||eH, E=e?.dpr?.map(e=>/^[a-z]+:/.test(e)?e:`${I}${e}`);return{fallbackSrc:`${I}${_}`, srcset:E?.join(\", \")||\"\", css:f}}};q();let eB={getScaleToFitImageURL:function(e, t, i, n, a, o){return eN(eM(r.SCALE_TO_FIT, {id:e, width:t, height:i, name:o&&o.name}, {width:n, height:a, htmlTag:u.IMG, alignment:c.CENTER, pixelAspectRatio:o?.devicePixelRatio??eP}, o).uri, o)}, getScaleToFillImageURL:function(e, t, i, n, a, o){return eN(eM(r.SCALE_TO_FILL, {id:e, width:t, height:i, name:o&&o.name, focalPoint:{x:o&&o.focalPoint&&o.focalPoint.x, y:o&&o.focalPoint&&o.focalPoint.y}}, {width:n, height:a, htmlTag:u.IMG, alignment:c.CENTER, pixelAspectRatio:o?.devicePixelRatio??eP}, o).uri, o)}, getCropImageURL:function(e, t, i, n, a, o, s, l, h, d){return eN(eM(r.SCALE_TO_FILL, {id:e, width:t, height:i, name:d&&d.name, crop:{x:n, y:a, width:o, height:s}}, {width:l, height:h, htmlTag:u.IMG, alignment:c.CENTER, pixelAspectRatio:d?.devicePixelRatio??eP}, d).uri, d)}}, eH=ex, ez=eS}, 55901(e, t, i){(0, i(16858).Rr)()}, 19787(e, t, i){var r=i(16858), n=i(99090);((e=window)=>{let{mediaServices:t, environmentConsts:i, requestUrl:a, staticVideoUrl:o}=e.customElementNamespace;(0, r.EH)(e, t, {...i, prefersReducedMotion:(0, n.O)(window, a), staticVideoUrl:o}), (0, r.jh)(e), (0, r.p7)(e, t, i)})(), window.resolveExternalsRegistryModule(\"imageClientApi\")}, 16858(e, t, i){i.d(t, {_o:()=>s, NL:()=>y, yO:()=>w, vk:()=>h, EH:()=>k, KU:()=>l, Rr:()=>S, jh:()=>G, p7:()=>A, Aq:()=>c});var r=i(17709), n=i.n(r);let a=(e, t, i)=>{let r=1, n=0;for(let a=0;a t||(n+=o)>t&&(r++, n=o, r>i))return!1}return!0};function o(e, t, i){return t in e?Object.defineProperty(e, t, {value:i, enumerable:!0, configurable:!0, writable:!0}):e[t]=i, e}function s(){class e extends HTMLElement{setContainerHeight(e){this.style.setProperty(\"--flex-columns-height\", `${e}px`)}removeContainerHeight(){this.style.removeProperty(\"--flex-columns-height\")}getColumnCount(e){return parseInt(e.getPropertyValue(\"--flex-column-count\"), 10)}getRowGap(e){return parseInt(e.getPropertyValue(\"row-gap\")||\"0\", 10)}activate(){this.isActive=!0, this.attachObservers(), this.recalcHeight()}deactivate(){this.isActive=!1, this.detachHeightCalcObservers(), this.removeContainerHeight()}calcActive(){return\"multi-column-layout\"===getComputedStyle(this).getPropertyValue(\"--container-layout-type\")}get itemsHeights(){return Array.from(this.children).map(e=>{let t=getComputedStyle(e), i=parseFloat(t.height||\"0\");return i+=parseFloat(t.marginTop||\"0\"), {height:i+=parseFloat(t.marginBottom||\"0\")}})}setIsActive(){let e=this.calcActive();this.isActive!==e&&(e?this.activate():this.deactivate())}connectedCallback(){this.cleanUp(), this.createObservers(), this.setIsActive(), window.document.body&&this.isActiveObserver?.observe(window.document.body)}disconnectedCallback(){this.cleanUp()}constructor(...e){super(...e), o(this, \"containerWidthObserver\", void 0), o(this, \"mutationObserver\", void 0), o(this, \"isActiveObserver\", void 0), o(this, \"childResizeObserver\", void 0), o(this, \"containerWidth\", 0), o(this, \"isActive\", !1), o(this, \"isDuringCalc\", !1), o(this, \"attachObservers\", ()=>{this.mutationObserver?.observe(this, {childList:!0, subtree:!0}), this.containerWidthObserver?.observe(this), Array.from(this.children).forEach(e=>{this.handleItemAdded(e)})}), o(this, \"detachHeightCalcObservers\", ()=>{this.mutationObserver?.disconnect(), this.containerWidthObserver?.disconnect(), this.childResizeObserver?.disconnect()}), o(this, \"recalcHeight\", ()=>{this.isActive&&n().measure(()=>{if(!this.isActive||this.isDuringCalc)return;this.isDuringCalc=!0;let e=getComputedStyle(this), t=((e, t, i)=>{let r=-1/0, n=e.map(e=>(e.height+t>r&&(r=e.height+t), e.height+t)), o=r, s=r*e.length, l=r;for(;o {this.setContainerHeight(t), this.style.setProperty(\"visibility\", null)})})}), o(this, \"cleanUp\", ()=>{this.detachHeightCalcObservers(), this.removeContainerHeight(), this.isActiveObserver?.disconnect()}), o(this, \"handleItemAdded\", e=>{e instanceof window.HTMLElement&&this.childResizeObserver?.observe(e)}), o(this, \"handleItemRemoved\", e=>{e instanceof window.HTMLElement&&this.childResizeObserver?.unobserve(e)}), o(this, \"createObservers\", ()=>{this.containerWidthObserver=new ResizeObserver(e=>{let t=e[0];if(t.contentRect.width!==this.containerWidth){if(0===this.containerWidth){this.containerWidth=t.contentRect.width;return}this.containerWidth=t.contentRect.width, this.recalcHeight()}}), this.mutationObserver=new MutationObserver(e=>{e.forEach(e=>{Array.from(e.removedNodes).forEach(this.handleItemRemoved), Array.from(e.addedNodes).forEach(this.handleItemAdded)}), this.recalcHeight()}), this.childResizeObserver=new ResizeObserver(()=>{this.recalcHeight()}), this.isActiveObserver=new ResizeObserver(()=>{this.setIsActive()})})}}return e}let l=\"multi-column-layouter\", c=()=>{let e={observedElementToRelayoutTarget:new Map, getLayoutTargets(t){let i=new Set;return t.forEach(t=>i.add(e.observedElementToRelayoutTarget.get(t))), i}, observe:i=>{e.observedElementToRelayoutTarget.set(i, i), t.observe(i)}, unobserve:i=>{e.observedElementToRelayoutTarget.delete(i), t.unobserve(i)}, observeChild:(i, r)=>{e.observedElementToRelayoutTarget.set(i, r), t.observe(i)}, unobserveChild:i=>{e.observedElementToRelayoutTarget.delete(i), t.unobserve(i)}}, t=new window.ResizeObserver(t=>{e.getLayoutTargets(t.map(e=>e.target)).forEach(e=>e.reLayout())});return e}, h=(e, t=window)=>{let i=!1;return(...r)=>{i||(i=!0, t.requestAnimationFrame(()=>{i=!1, e(...r)}))}};function d(...e){let t=e[0];for(let i=1;i e&&t&&Object.keys(t).forEach(i=>e.setAttribute(i, t[i])), p=(e, t)=>e&&t&&Object.keys(t).forEach(i=>{let r=t[i];if(void 0!==r)e.style[i]=\"number\"!=typeof r||m[i]?r:`${r}px`;else e.style.removeProperty(i)}), f=(e, t, i=!0)=>{var r;return e&&i?(r=e.dataset[t])?\"true\"===r||\"false\"!==r&&(\"null\"===r?null:`${+r}`===r?+r:r):r:e.dataset[t]}, _=(e, t)=>e&&t&&Object.assign(e.dataset, t), b=e=>e||document.documentElement.clientHeight||window.innerHeight||0, T={fit:\"contain\", fill:\"cover\"};var I=i(69654);let E=(e, t, i)=>{void 0===e.customElements.get(t)&&e.customElements.define(t, i)};function w(e, t=window){class i extends t.HTMLElement{reLayout(){}connectedCallback(){this.observeResize(), this.reLayout()}disconnectedCallback(){this.unobserveResize(), this.unobserveChildren()}observeResize(){e.resizeService.observe(this)}unobserveResize(){e.resizeService.unobserve(this)}observeChildren(e){this.childListObserver||(this.childListObserver=new t.MutationObserver(()=>this.reLayout())), this.childListObserver.observe(e, {childList:!0})}observeChildAttributes(e, i=[]){this.childrenAttributesObservers||(this.childrenAttributesObservers=[]);let r=new t.MutationObserver(()=>this.reLayout());r.observe(e, {attributeFilter:i}), this.childrenAttributesObservers.push(r)}observeChildResize(t){this.childrenResizeObservers||(this.childrenResizeObservers=[]), e.resizeService.observeChild(t, this), this.childrenResizeObservers.push(t)}unobserveChildrenResize(){this.childrenResizeObservers&&(this.childrenResizeObservers.forEach(t=>{e.resizeService.unobserveChild(t)}), this.childrenResizeObservers=null)}unobserveChildren(){if(this.childListObserver&&(this.childListObserver.disconnect(), this.childListObserver=null), this.childrenAttributesObservers){for(let e of this.childrenAttributesObservers)e.disconnect(), e=null;this.childrenAttributesObservers=null}this.unobserveChildrenResize()}constructor(){super()}}return i}let L=e=>{if(e.customElementNamespace||(e.customElementNamespace={}), void 0===e.customElementNamespace.WixElement){let t=w({resizeService:c()}, e);return e.customElementNamespace.WixElement=t, t}return e.customElementNamespace.WixElement}, v=\"wix-bg-image\", A=(e=globalThis.window, t={}, i={experiments:{}})=>{if(e&&void 0===e.customElements.get(v)){let r=function(e, t, i, r=window){let n=((e=window)=>({measure:function(e, t, i, {containerId:r, bgEffectName:n}, a){let o=i[e], s=i[r], {width:l, height:c}=a.getMediaDimensionsByEffect(n, s.offsetWidth, s.offsetHeight, b(a.getScreenHeightOverride?.()));t.width=l, t.height=c, t.currentSrc=o.style.backgroundImage, t.bgEffectName=o.dataset.bgEffectName}, patch:function(t, i, r, n, a){let o=r[t];n.targetWidth=i.width, n.targetHeight=i.height;let s=((e, t, i)=>{var r;let n, {targetWidth:a, targetHeight:o, imageData:s, filters:l, displayMode:c=u.fittingTypes.SCALE_TO_FILL}=e;if(!a||!o||!s.uri)return{uri:\"\", css:{}};let{width:h, height:d, crop:m, name:g, focalPoint:p, upscaleMethod:f, quality:_, devicePixelRatio:b=t.devicePixelRatio}=s, T={filters:l, upscaleMethod:f, ..._, hasAnimation:e?.hasAnimation||s?.hasAnimation}, I=(r=b, ((n=window.location.search.split(\"&\").map(e=>e.split(\"=\")).find(e=>e[0].toLowerCase().includes(\"devicepixelratio\")))?Number(n[1]):null)||r||1), E={id:s.uri, width:h, height:d, ...m&&{crop:m}, ...p&&{focalPoint:p}, ...g&&{name:g}}, w={width:a, height:o, htmlTag:\"bg\", pixelAspectRatio:I, alignment:e.alignType||u.alignTypes.CENTER}, L=(0, u.getData)(c, E, w, T), v=s.baseHostURL||t.staticMediaUrl;return L.uri=((e, t, i)=>{if(/(^https?)|(^data)|(^blob)|(^\\/\\/)/.test(e))return e;let r=`${t}/`;return e&&(/^micons\\//.test(e)?r=i:\"ico\"===/[^.]+$/.exec(e)[0]&&(r=r.replace(\"media\", \"ficons\"))), r+e})(L.uri, v, t.mediaRootUrl), L})(n, a, 0);if(function(e=\"\", t){return!e.includes(t)||!!e!=!!t}(i.currentSrc, s.uri)){let t, i;t={backgroundImage:`url(\"${s.uri}\")`, ...s.css.container}, (i=new e.Image).onload=p.bind(null, o, t), i.src=s.uri}else p(o, s.css.container)}}))(r);return class extends e{reLayout(){if(t.isExperimentOpen(\"specs.thunderbolt.tb_stop_client_images\")||t.isExperimentOpen(\"specs.thunderbolt.final_force_webp\")||t.isExperimentOpen(\"specs.thunderbolt.final_force_no_webp\"))return;let e={}, a={}, o=(0, I.ZH)(this, {experiments:i.experiments, logger:i.logger, document:r.document}), s=JSON.parse(this.dataset.tiledImageInfo), {bgEffectName:l}=this.dataset, {containerId:c}=s, h=(0, I.qc)(c, {experiments:i.experiments, logger:i.logger, document:r.document});e[o]=this, e[c]=h, s.displayMode=s.imageData.displayMode, t.mutationService.measure(()=>{n.measure(o, a, e, {containerId:c, bgEffectName:l}, t)}), t.mutationService.mutate(()=>{n.patch(o, a, e, s, i, t)})}attributeChangedCallback(e, t){t&&this.reLayout()}disconnectedCallback(){super.disconnectedCallback()}static get observedAttributes(){return[\"data-tiled-image-info\"]}constructor(){super()}}}(L(e), t, i, e);E(e, v, r)}};function y(e, t, i, r=window){let n={width:void 0, height:void 0, left:void 0};return class extends e{reLayout(){let{containerId:e, pageId:a, useCssVars:o, bgEffectName:s}=this.dataset, l=(0, I.hW)(this, e)||(0, I.qc)(`${e}`, {experiments:i.experiments, logger:i.logger, document:r.document}), c=(0, I.hW)(this, a)||(0, I.qc)(`${a}`, {experiments:i.experiments, logger:i.logger, document:r.document}), h={};t.mutationService.measure(()=>{let e=\"fixed\"===r.getComputedStyle(this).position, i=b(t.getScreenHeightOverride?.()), n=l.getBoundingClientRect(), a=t.getMediaDimensionsByEffect(s, n.width, n.height, i), {hasParallax:d}=a, u=c&&(r.getComputedStyle(c).transition||\"\").includes(\"transform\"), {width:m, height:g}=a, p=`${m}px`, f=`${g}px`, _=`${(n.width-m)/2}px`;if(e){let e=r.document.documentElement.clientLeft;_=u?`${l.offsetLeft-e}px`:`${n.left-e}px`}let T=e||d?0:`${(n.height-g)/2}px`;Object.assign(h, o?{\"--containerW\":p, \"--containerH\":f, \"--containerL\":_, \"--screenH_val\":`${i}`}:{width:p, height:f, left:_, top:T})}), t.mutationService.mutate(()=>{if(o){let e;p(this, n), e=this, e&&h&&Object.keys(h).forEach(t=>{e.style.setProperty(t, h[t])})}else p(this, h)})}connectedCallback(){super.connectedCallback(), t.windowResizeService.observe(this)}disconnectedCallback(){super.disconnectedCallback(), t.windowResizeService.unobserve(this)}attributeChangedCallback(e, t){t&&this.reLayout()}static get observedAttributes(){return[\"data-is-full-height\", \"data-container-size\"]}constructor(){super()}}}let O=\"__more__\", C=\"moreContainer\";function R(e, t, i){return t in e?Object.defineProperty(e, t, {value:i, enumerable:!0, configurable:!0, writable:!0}):e[t]=i, e}let M=\"wix-dropdown-menu\", S=(e=globalThis.window)=>{if(e&&void 0===e.customElements.get(M)){let t=c(), i=function(e, t, i=window){let r=((e=window)=>{let t=(e, t, i, r, n, a, o, s)=>{if(e-=n*(o?r.length:r.length-1), e-=s.left+s.right, t&&(r=r.map(()=>a)), r.some(e=>0===e))return null;let l=0, c=r.reduce((e, t)=>e+t, 0);if(c>e)return null;if(t){if(i){let t=Math.floor(e/r.length), i=r.map(()=>t);if((l=t*r.length) {r (l+=e+t, e+t));if(l {r {let t=parseFloat(e);return isFinite(t)?t:0}, r=e=>!isNaN(parseFloat(e))&&isFinite(e);return{measure:(r, n)=>{var a;let o, s, l, c, h, d, u, m, g, p, _={}, b={};b[r]=n;let T=1, I=n.getRootNode().querySelector(\"[id^=site-root]\");I&&(T=I.getBoundingClientRect().width/I.offsetWidth);let E=(o=+f(b[r], \"numItems\")) Number.MAX_SAFE_INTEGER?[]:Array(o).fill(0).map((e, t)=>String(t)), w=[\"moreContainer\", \"itemsContainer\", \"dropWrapper\"].concat(E, [O]);w.forEach(e=>{let t=`${r}${e}`;b[t]=n.getRootNode().getElementById(`${t}`)}), a=T, s={}, w.forEach(e=>{let t=`${r}${e}`, i=b[t];i&&(s[t]={width:i.offsetWidth, boundingClientRectWidth:Math.round(i.getBoundingClientRect().width/a), height:i.offsetHeight})}), _.children=s;let L=b[r], v=b[`${r}itemsContainer`], A=v.childNodes, y=b[`${r}moreContainer`], C=y.childNodes, R=f(L, \"stretchButtonsToMenuWidth\"), M=f(L, \"sameWidthButtons\");_.absoluteLeft=L.getBoundingClientRect().left, _.bodyClientWidth=e.document.body.clientWidth, _.alignButtons=f(L, \"dropalign\"), _.hoverListPosition=f(L, \"drophposition\"), _.menuBorderY=parseInt(f(L, \"menuborderY\"), 10), _.ribbonExtra=parseInt(f(L, \"ribbonExtra\"), 10), _.ribbonEls=parseInt(f(L, \"ribbonEls\"), 10), _.labelPad=parseInt(f(L, \"labelPad\"), 10), _.menuButtonBorder=parseInt(f(L, \"menubtnBorder\"), 10), l=v.lastChild, _.menuItemContainerMargins=(parseInt((c=e.getComputedStyle(l)).marginLeft, 10)||0)+(parseInt(c.marginRight, 10)||0), d=i((h=e.getComputedStyle(v)).borderTopWidth)+i(h.paddingTop), u=i(h.borderBottomWidth)+i(h.paddingBottom), m=i(h.borderLeftWidth)+i(h.paddingLeft), g=i(h.borderRightWidth)+i(h.paddingRight), d+=i(h.marginTop), u+=i(h.marginBottom), m+=i(h.marginLeft), g+=i(h.marginRight), _.menuItemContainerExtraPixels={top:d, bottom:u, left:m, right:g, height:d+u, width:m+g}, _.needToOpenMenuUp=L.getBoundingClientRect().top>e.innerHeight/2, _.menuItemMarginForAllChildren=!R||\"false\"!==v.getAttribute(\"data-marginAllChildren\"), _.moreSubItem=[], _.labelWidths={}, _.linkIds={}, _.parentId={}, _.menuItems={}, _.labels={}, C.forEach((t, i)=>{_.parentId[t.id]=f(t, \"parentId\");let r=f(t, \"dataId\");_.menuItems[r]={dataId:r, parentId:f(t, \"parentId\"), moreDOMid:t.id, moreIndex:i}, b[t.id]=t;let n=t.querySelector(\"p\");b[n.id]=n, _.labels[n.id]={width:n.offsetWidth, height:n.offsetHeight, left:n.offsetLeft, lineHeight:parseInt(e.getComputedStyle(n).fontSize, 10)}, _.moreSubItem.push(t.id)}), A.forEach((e, t)=>{let i, r, n=f(e, \"dataId\");_.menuItems[n]=_.menuItems[n]||{}, _.menuItems[n].menuIndex=t, _.menuItems[n].menuDOMid=e.id, _.children[e.id].left=e.offsetLeft;let a=e.querySelector(\"p\");b[a.id]=a, _.labelWidths[a.id]=(i=a, r=T, Math.round(i.getBoundingClientRect().width/r));let o=e.querySelector(\"p\");b[o.id]=o, _.linkIds[e.id]=o.id});let S=L.offsetHeight;_.height=S, _.width=L.offsetWidth, p=S-_.menuBorderY-_.labelPad-_.ribbonEls-_.menuButtonBorder-_.ribbonExtra, _.lineHeight=`${p}px`;let x=((e, i, r, n, a)=>{let o=i.width;i.hasOriginalGapData={}, i.originalGapBetweenTextAndBtn={};let s=a.map(t=>{let r, a=f(n[e+t], \"originalGapBetweenTextAndBtn\");return(void 0===a?(i.hasOriginalGapData[t]=!1, r=i.children[e+t].boundingClientRectWidth-i.labelWidths[`${e+t}label`], i.originalGapBetweenTextAndBtn[e+t]=r):(i.hasOriginalGapData[t]=!0, r=parseFloat(a)), i.children[e+t].width>0)?Math.floor(i.labelWidths[`${e+t}label`]+r):0}), l=s.pop(), c=r.sameWidthButtons, h=r.stretchButtonsToMenuWidth, d=!1, u=i.menuItemContainerMargins, m=i.menuItemMarginForAllChildren, g=i.menuItemContainerExtraPixels, p=s.reduce((e, t)=>e>t?e:t, -1/0), _=t(o, c, h, s, u, p, m, g);if(!_){for(let e=1;e {let n=i[e];p(n, {overflowX:\"visible\"});let{menuItemIds:a, needToOpenMenuUp:o}=t, s=a.concat(O);_(n, {dropmode:o?\"dropUp\":\"dropDown\"});let l=0;if(t.hoverState===O){let e, r, n=t.realWidths.indexOf(0), o=t.menuItems[e=t.menuItems, r=e=>e.menuIndex===n, Object.keys(e).find(t=>r(e[t], t))], s=o.moreIndex, c=s===a.length-1;o.moreDOMid&&g(i[o.moreDOMid], {\"data-listposition\":c?\"dropLonely\":\"top\"}), Object.values(t.menuItems).filter(e=>!!e.moreDOMid).forEach(e=>{if(e.moreIndex {let n=`${e+C+r}label`;l=Math.max(t.labels[n].width, l)});((e, t, i, n)=>{let{hoverState:a}=t;if(\"-1\"!==a){let{menuItemIds:o}=t, s=o.indexOf(a);if(r(t.hoverState)||a===O){if(!t.realWidths)return;let a=Math.max(n, t.children[-1!==s?e+s:e+O].width), o=Math.max(n, t.children[`${e}dropWrapper`].width), l=(0!==t.moreSubItem.length?t.labels[`${t.moreSubItem[0]}label`].lineHeight:0)+15+t.menuBorderY+t.labelPad+t.menuButtonBorder;t.moreSubItem.forEach(e=>{p(i[e], {minWidth:`${a}px`}), p(i[`${e}label`], {minWidth:\"0px\", lineHeight:`${l}px`})});let c=r(t.hoverState)?t.hoverState:\"__more__\", h={width:t.children[e+c].width, left:t.children[e+c].left}, d=((e, t, i, r, n)=>{let{width:a, height:o, alignButtons:s, hoverListPosition:l, menuItemContainerExtraPixels:c}=t, h=t.absoluteLeft, d=((e, t, i, r, n, a, o, s, l, c)=>{let h=\"0px\", d=\"auto\", u=a.left, m=a.width;if(\"left\"===t?h=\"left\"===n?0:`${u+e.left}px`:\"right\"===t?(d=\"right\"===n?0:`${r-u-m-e.right}px`, h=\"auto\"):\"left\"===n?h=`${u+(m+e.left-i)/2}px`:\"right\"===n?(h=\"auto\", d=`${(m+e.right-(i+e.width))/2}px`):h=`${e.left+u+(m-(i+e.width))/2}px`, \"auto\"!==h){let e=o+parseInt(h, 10);e+c>l?(h=\"auto\", d=0):h=e l?0:d), {moreContainerLeft:h, moreContainerRight:d}})(c, s, r, a, l, i, h, h+a, t.bodyClientWidth, n);return{left:d.moreContainerLeft, right:d.moreContainerRight, top:t.needToOpenMenuUp?\"auto\":`${o}px`, bottom:t.needToOpenMenuUp?`${o}px`:\"auto\"}})(0, t, h, a, o);p(i[`${e}${C}`], {left:d.left, right:d.right}), p(i[`${e}dropWrapper`], {left:d.left, right:d.right, top:d.top, bottom:d.bottom})}}})(e, t, i, l), t.originalGapBetweenTextAndBtn&&s.forEach(r=>{t.hasOriginalGapData[r]||_(i[`${e}${r}`], {originalGapBetweenTextAndBtn:t.originalGapBetweenTextAndBtn[`${e}${r}`]})}), ((e, t, i, r)=>{let{realWidths:n, height:a, menuItemContainerExtraPixels:o}=i, s=0, l=null, c=null, h=i.lineHeight, d=a-o.height;for(let a=0;a 0, m=e+r[a];c=i.linkIds[m], u?(s++, l=m, p(t[m], {width:`${o}px`, height:`${d}px`, position:\"relative\", \"box-sizing\":\"border-box\", overflow:\"visible\", visibility:\"inherit\"}), p(t[`${m}label`], {\"line-height\":h}), g(t[m], {\"aria-hidden\":!1})):(p(t[m], {height:\"0px\", overflow:\"hidden\", position:\"absolute\", visibility:\"hidden\"}), g(t[m], {\"aria-hidden\":!0}), g(t[c], {tabIndex:-1}))}1===s&&(_(t[`${e}moreContainer`], {listposition:\"lonely\"}), _(t[l], {listposition:\"lonely\"}))})(e, i, t, s)}}})(i);return class extends e{static get observedAttributes(){return[\"data-hovered-item\"]}attributeChangedCallback(){this._isVisible()&&this.reLayout()}connectedCallback(){this._id=this.getAttribute(\"id\"), this._hideElement(), this._waitForDomLoad().then(()=>{super.observeResize(), this._observeChildrenResize(), this.reLayout()})}disconnectedCallback(){t.mutationService.clear(this._mutationIds.read), t.mutationService.clear(this._mutationIds.write), super.disconnectedCallback()}_waitForDomLoad(){let e, t=new Promise(t=>{e=t});return this._isDomReady()?e():(this._waitForDomReadyObserver=new i.MutationObserver(()=>this._onRootMutate(e)), this._waitForDomReadyObserver.observe(this, {childList:!0, subtree:!0})), t}_isDomReady(){return this._itemsContainer=this.getRootNode().getElementById(`${this._id}itemsContainer`), this._dropContainer=this.getRootNode().getElementById(`${this._id}dropWrapper`), this._itemsContainer&&this._dropContainer}_onRootMutate(e){this._isDomReady()&&(this._waitForDomReadyObserver.disconnect(), e())}_observeChildrenResize(){let e=Array.from(this._itemsContainer.childNodes);this._labelItems=e.map(e=>this.getRootNode().getElementById(`${e.getAttribute(\"id\")}label`)), this._labelItems.forEach(e=>super.observeChildResize(e))}_setVisibility(e){this._visible=e, this.style.visibility=e?\"inherit\":\"hidden\"}_isVisible(){return this._visible}_hideElement(){this._setVisibility(!1)}_showElement(){this._setVisibility(!0)}reLayout(){let e, i;t.mutationService.clear(this._mutationIds.read), t.mutationService.clear(this._mutationIds.write), this._mutationIds.read=t.mutationService.measure(()=>{let t=r.measure(this._id, this);e=t.measures, i=t.domNodes}), this._mutationIds.write=t.mutationService.mutate(()=>{r.patch(this._id, e, i), this._showElement()})}constructor(...e){super(...e), R(this, \"_visible\", !1), R(this, \"_mutationIds\", {read:null, write:null}), R(this, \"_itemsContainer\", null), R(this, \"_dropContainer\", null), R(this, \"_labelItems\", [])}}}(L(e), {resizeService:t, mutationService:n()}, e);e.customElements.define(M, i)}}, x=\"wix-iframe\", G=(e=globalThis.window)=>{if(e&&void 0===e.customElements.get(x)){var t;let i=(t=L(e), class extends t{reLayout(){let e=this.querySelector(\"iframe\");if(e){let t=e.dataset.src;t&&e.src!==t&&(e.src=t, e.dataset.src=\"\", this.dataset.src=\"\")}}attributeChangedCallback(e, t, i){i&&this.reLayout()}static get observedAttributes(){return[\"data-src\"]}constructor(){super()}});E(e, x, i)}}, P={measure(e, t, {hasBgScrollEffect:i, videoWidth:r, videoHeight:n, fittingType:a, alignType:o=\"center\", qualities:s, staticVideoUrl:l, videoId:c, videoFormat:h, focalPoint:m}){var g, p, f, _, b, I, E, w, L, v;let A, y, O, C=i?t.offsetWidth:e.parentElement.offsetWidth, R=e.parentElement.offsetHeight, M=parseInt(r, 10), S=parseInt(n, 10), x=(g=a, p={wScale:C/M, hScale:R/S}, f=M, _=S, {width:Math.round(f*(A=g===u.fittingTypes.SCALE_TO_FIT?Math.min(p.wScale, p.hScale):Math.max(p.wScale, p.hScale))), height:Math.round(_*A)}), G=(b=function(e, {width:t, height:i}){var r;return(r=e=>e.size, Object.values(e.reduce((e, t)=>(e[r(t)]=t, e), {}))).find(e=>e.size>t*i)||e[e.length-1]}(s, x), I=l, E=c, \"mp4\"===(w=h)?b.url?d(I, b.url):d(I, E, b.quality, w, \"file.mp4\"):\"\"), P=(L=e, v=G, y=L.networkState===L.NETWORK_NO_SOURCE, O=!L.currentSrc.endsWith(v), v&&(O||y)), N=T[a]||\"cover\", F=m?function(e, t, i){let{width:r, height:n}=e, {width:a, height:o}=t, {x:s, y:l}=i;if(!a||!o)return`${s}% ${l}%`;let c=Math.max(a/r, o/n), h=r*c, d=n*c, u=Math.max(0, Math.min(h-a, s/100*h-a/2)), m=Math.max(0, Math.min(d-o, l/100*d-o/2)), g=u&&Math.floor(u/(h-a)*100), p=m&&Math.floor(m/(d-o)*100);return`${g}% ${p}%`}(x, {width:C, height:R}, m):\"\", k=o.replace(\"_\", \" \");return{videoSourceUrl:G, needsSrcUpdate:P, videoStyle:{height:\"100%\", width:\"100%\", objectFit:N, objectPosition:F||k}}}, mutate(e, t, i, r, n, a, o, s, l, c, h){var d, u, m;if(n?i.setAttribute(\"autoplay\", \"\"):i.removeAttribute(\"autoplay\"), t){let{width:e, height:i, ...n}=r;p(t, n)}else(function(e, t, i, r, n, a){a&&t.paused&&(i.style.opacity=\"1\", t.style.opacity=\"0\");let o=t.paused||\"\"===t.currentSrc;if((e||a)&&o)if(t.ontimeupdate=null, t.onseeked=null, t.onplay=null, !a&&n){let e=t.muted;t.muted=!0, t.ontimeupdate=()=>{t.currentTime>0&&(t.ontimeupdate=null, t.onseeked=()=>{t.onseeked=null, t.muted=e, N(t, i, r)}, t.currentTime=0)}}else t.onplay=()=>{a||(t.onplay=null), N(t, i, r)}})(o, i, e, s, n, h), p(i, r);d=o, u=i, m=a, d&&(u.src=m, u.load()), i.playbackRate=c}};function N(e, t, i){\"fade\"===i&&(t.style.transition=\"opacity 1.6s ease-out\"), t.style.opacity=\"0\", e.style.opacity=\"1\"}let F=\"wix-video\", k=(e=globalThis.window, t, i={experiments:{}})=>{if(e&&void 0===e.customElements.get(F)){var r, n;let a=L(e), o=new IntersectionObserver(e=>e.map(e=>{if(e.isIntersecting){let t=e.target;t.unobserveIntersect(), t.observeResize()}return e}), {rootMargin:\"50% 100%\"});E(e, F, (r=a, n={...t, intersectionObserver:o}, class extends r{connectedCallback(){i.disableImagesLazyLoading?this.reLayout():n.intersectionObserver.observe(this)}disconnectedCallback(){this.unobserveResize(), this.unobserveIntersect(), this.unobserveChildren()}unobserveIntersect(){n.intersectionObserver?.unobserve(this)}reLayout(){let{isVideoDataExists:e, videoWidth:t, videoHeight:r, qualities:a, videoId:o, videoFormat:s, alignType:l, fittingType:c, focalPoint:h, hasBgScrollEffect:d, autoPlay:u, animatePoster:m, containerId:g, isEditorMode:p, playbackRate:f, hasAlpha:_}=JSON.parse(this.dataset.videoInfo);if(!e)return;let b=!i.prefersReducedMotion&&u, T=this.querySelector(`video[id^=\"${g}\"]`), E=this.querySelector(`.bgVideoposter[id^=\"${g}\"]`);if(this.unobserveChildren(), !(T&&E))return void this.observeChildren(this);let w=(0, I.qc)(g, {document:this.getRootNode(), experiments:i.experiments, logger:i.logger}), L=w.querySelector(`.webglcanvas[id^=\"${g}\"]`);(_||\"true\"===w.dataset.hasAlpha)&&!L?requestAnimationFrame(()=>this.reLayout()):n.mutationService.measure(()=>{let{videoSourceUrl:e, needsSrcUpdate:u, videoStyle:g}=P.measure(T, w, {hasBgScrollEffect:d, videoWidth:t, videoHeight:r, fittingType:c, alignType:l, qualities:a, staticVideoUrl:i.staticVideoUrl, videoId:o, videoFormat:s, focalPoint:h});n.mutationService.mutate(()=>{P.mutate(E, L, T, g, b, e, u, m, s, f, p)})})}attributeChangedCallback(e, t){t&&this.reLayout()}static get observedAttributes(){return[\"data-video-info\"]}constructor(){super()}}))}}}, 46418(e, t, i){var r=i(17709), n=i.n(r), a=i(33842), o=i(26350), s=i(16858);let l=o, c=function(e, t=window){!function(e){if(void 0===e.Reflect||void 0===e.customElements||e.customElements.hasOwnProperty(\"polyfillWrapFlushCallback\"))return;let t=e.HTMLElement;e.HTMLElement=function(){return e.Reflect.construct(t, [], this.constructor)}, e.HTMLElement.prototype=t.prototype, e.HTMLElement.prototype.constructor=e.HTMLElement, e.Object.setPrototypeOf(e.HTMLElement, t), e.Object.defineProperty(e.HTMLElement, \"name\", {value:t.name})}(t);let i={registry:new Set, observe(e){i.registry.add(e)}, unobserve(e){i.registry.delete(e)}};e.windowResizeService.init((0, s.vk)(()=>i.registry.forEach(e=>e.reLayout())), t);let r=(0, s.Aq)(), n=(e, i)=>{void 0===t.customElements.get(e)&&t.customElements.define(e, i)}, a=(0, s.yO)({resizeService:r}, t);return t.customElementNamespace={WixElement:a}, n(\"wix-element\", a), {contextWindow:t, defineWixBgMedia:e=>{n(\"wix-bg-media\", (0, s.NL)(a, {windowResizeService:i, ...e}, t))}, defineMultiColumnRepeaterElement:()=>{let e=(0, s._o)();n(s.KU, e)}}};var h=i(91534), d=i(76526);let u=()=>({getSiteScale:()=>{let e=document.querySelector(\"#site-root\");return e?e.getBoundingClientRect().width/e.offsetWidth:1}}), m=(e, t, i, r)=>{let{getMediaDimensions:n, ...o}=a[e]||{};return n?{...n(t, i, r), ...o}:{width:t, height:i, ...o}}, {experiments:g, media:p, requestUrl:f, site:_}=window.viewerModel, b=(0, d.isExperimentOpen)(g, \"specs.thunderbolt.customImageDomain\");((e, t, i, r)=>{var a, o, s;let g, p, f, _, b, T, {environmentConsts:I, wixCustomElements:E, media:w, requestUrl:L, mediaServices:v}=(a=void 0, o=void 0, s=void 0, p={\"specs.thunderbolt.useClassSelectorsForLookup\":(g=t=>(0, d.isExperimentOpen)(e.experiments, t))(\"specs.thunderbolt.useClassSelectorsForLookup\"), \"specs.thunderbolt.addIdAsClassName\":g(\"specs.thunderbolt.addIdAsClassName\")}, f={staticMediaUrl:e.media.staticMediaUrl, mediaRootUrl:e.media.mediaRootUrl, externalBaseUrl:e.externalBaseUrl??\"\", userDomainMediaPrefixes:e.userDomainMediaPrefixes??[], experiments:p, isViewerMode:!0, devicePixelRatio:/iemobile/i.test(navigator.userAgent)?Math.round(window.screen.availWidth/(window.screen.width||window.document.documentElement.clientWidth)):window.devicePixelRatio, ...s}, b={getMediaDimensionsByEffect:m, ..._={mutationService:n(), isExperimentOpen:g, siteService:u()}, ...o}, {...e, wixCustomElements:a||(T=u(), c({resizeService:{init:e=>new ResizeObserver(e)}, windowResizeService:{init:e=>window.addEventListener(\"resize\", e)}, siteService:T})), services:_, environmentConsts:f, mediaServices:b}), A=E?.contextWindow||window;A.wixCustomElements=E, Object.assign(A.customElementNamespace, {mediaServices:v, environmentConsts:I, requestUrl:L, staticVideoUrl:w.staticVideoUrl}), (0, h.g)({...v}, E.contextWindow, I), E.defineWixBgMedia(v), E.defineMultiColumnRepeaterElement(), window.__imageClientApi__=l})({experiments:g, media:p, requestUrl:f, externalBaseUrl:_?.externalBaseUrl, userDomainMediaPrefixes:b?p?.userDomainMediaPrefixes:void 0})}, 13176(e, t, i){i.d(t, {z:()=>r});let r=[\"MENU_AS_CONTAINER_TOGGLE\", \"MENU_AS_CONTAINER_EXPANDABLE_MENU\", \"BACK_TO_TOP_BUTTON\", \"SCROLL_TO_\", \"TPAMultiSection_\", \"TPASection_\", \"comp-\", \"TINY_MENU\", \"MENU_AS_CONTAINER\", \"SITE_HEADER\", \"SITE_FOOTER\", \"SITE_PAGES\", \"PAGES_CONTAINER\", \"BACKGROUND_GROUP\", \"POPUPS_ROOT\"]}, 69654(e, t, i){i.d(t, {C5:()=>d, Xx:()=>u, ZH:()=>h, hW:()=>p, iT:()=>m, kp:()=>f, qc:()=>c, vP:()=>g});var r=i(13176);function n(e, t){return!![].includes(t)||[\"true\", \"new\", \"b\", \"enabled\"].includes(`${e?.[t]}`.toLowerCase())}function a(e={}){let t=e?.experiments;if(!t&&\"undefined\"!=typeof window)try{let e=window;t=e.viewerModel?.experiments}catch{}if(!t)return!1;let i=n(t, \"specs.thunderbolt.useClassSelectorsForLookup\"), r=n(t, \"specs.thunderbolt.addIdAsClassName\");return!!(i&&r)}function o(e={}){return e.document||(\"undefined\"!=typeof document?document:null)}function s(e, t, i){e&&\"function\"==typeof e.meter&&e.meter(\"dom_selector_id_fallback\", {customParams:{compId:t, selectorType:i}}), \"undefined\"!=typeof console&&console.warn&&console.warn(`[DOM Selectors] Fallback to ID for '${t}' (${i}).`)}function l(e){return\"undefined\"!=typeof CSS&&\"function\"==typeof CSS.escape?CSS.escape(e):\"-\"===e?\"\\\\-\":e.replace(/[^a-zA-Z0-9_-]|\\d/g, (t, i)=>/\\d/.test(t)?0===i||1===i&&\"-\"===e[0]?`\\\\3${t} `:t:`\\\\${t}`)}function c(e, t={}){let i=o(t);if(!i||!e||\"string\"!=typeof e)return null;let r=a(t);if(r){let t=i.querySelector(`.${l(e)}`);if(t)return t}let n=i.getElementById(e);return n&&r&&s(t?.logger, e, \"getElementById\"), n}function h(e, t={}){if(!e)return\"\";if(!a(t))return e.id;let i=Array.from(e.classList||[]), o=n(t.experiments, \"specs.thunderbolt.preserveWixSelectClass\"), l=\"undefined\"!=typeof document&&e.ownerDocument!==document;if(t.isEditor&&o&&!l&&!i.includes(\"wix-select\"))return\"\";if(t.componentIds?.size){for(let e of i.filter(e=>e.includes(\"__\"))){let i=e.indexOf(\"__\"), r=e.substring(0, i);if(t.componentIds.has(r))return e}for(let e of i)if(t.componentIds.has(e))return e}let c=t.prefixes??r.z, d=null;for(let e of i)if(c.some(t=>e.startsWith(t))){if(e.includes(\"__\"))return e;(!d||e.length 0)return r}let n=Array.from(i.querySelectorAll(e));return n.length>0&&r&&s(t.logger, e, \"querySelectorAll\"), n}function p(e, t, i={}){if(!t||\"string\"!=typeof t)return null;let r=a(i);if(r){let i=e.closest(`.${l(t)}`);if(i)return i}let n=e.closest(`#${l(t)}`);return n&&r&&s(i.logger, t, \"getClosestByCompId\"), n}function f(e, t, i={}){if(!t||\"string\"!=typeof t)return null;let r=a(i);if(r){let i=d(t), r=e.closest(i);if(r)return r}let n=e.closest(t);return n&&r&&s(i.logger, t, \"closest\"), n}}}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/custom-element-utils.inline.43befd9d.bundle.min.js.map \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"6901\"], {33842(e, t, i){i.r(t), i.d(t, {BackgroundParallax:()=>n, BackgroundParallaxZoom:()=>o, BackgroundReveal:()=>l, BgCloseUp:()=>d, BgExpand:()=>c, BgFabeBack:()=>h, BgFadeIn:()=>u, BgFadeOut:()=>g, BgFake3D:()=>m, BgPanLeft:()=>f, BgPanRight:()=>b, BgParallax:()=>p, BgPullBack:()=>v, BgReveal:()=>w, BgRotate:()=>M, BgShrink:()=>y, BgSkew:()=>I, BgUnwind:()=>x, BgZoomIn:()=>L, BgZoomOut:()=>D, ImageParallax:()=>O, ImageReveal:()=>P});var r=i(16956);let a=(e, t)=>({width:e, height:t}), s=(e, t, i)=>({width:e, height:Math.max(t, i)}), n={hasParallax:!0, getMediaDimensions:s}, o={hasParallax:!0, getMediaDimensions:s}, l={hasParallax:!0, getMediaDimensions:s}, d={getMediaDimensions:a}, c={getMediaDimensions:a}, h={getMediaDimensions:a}, u={getMediaDimensions:a}, g={getMediaDimensions:a}, m={hasParallax:!0, getMediaDimensions:s}, f={getMediaDimensions:(e, t)=>({width:1.2*e, height:t})}, b={getMediaDimensions:(e, t)=>({width:1.2*e, height:t})}, p={hasParallax:!0, getMediaDimensions:s}, v={getMediaDimensions:a}, w={hasParallax:!0, getMediaDimensions:s}, M={getMediaDimensions:(e, t)=>{let i, a, s, n, o;return i=(0, r.kU)(22), a=Math.hypot(e, t)/2, s=Math.acos(e/2/a), n=e*Math.abs(Math.cos(i))+t*Math.abs(Math.sin(i)), o=e*Math.abs(Math.sin(i))+t*Math.abs(Math.cos(i)), {width:Math.ceil(i ({width:e, height:e*Math.tan((0, r.kU)(20))+t})}, x={getMediaDimensions:a}, L={hasParallax:!0, getMediaDimensions:s}, D={getMediaDimensions:(e, t)=>({width:1.15*e, height:1.15*t})}, O={getMediaDimensions:(e, t)=>({width:e, height:1.5*t})}, P={getMediaDimensions:(e, t, i)=>({width:e, height:i})}}, 16956(e, t, i){function r(e, t, i, r, a){return(a-e)*(r-i)/(t-e)+i}function a(e, t){let[i, r]=e, [a, s]=t;return Math.sqrt((a-i)**2+(s-r)**2)}function s(e){return e*Math.PI/180}function n(e, t, i){return void 0===e&&(e=[0, 0]), void 0===t&&(t=[0, 0]), void 0===i&&(i=0), (360+i+180*Math.atan2(t[1]-e[1], t[0]-e[0])/Math.PI)%360}i.d(t, {Io:()=>a, Rb:()=>n, _b:()=>r, kU:()=>s})}, 91534(e, t, i){i.d(t, {g:()=>b});var r=i(26350);let a={columnCount:1, columns:1, fontWeight:1, lineHeight:1, opacity:1, zIndex:1, zoom:1}, s=(e, t)=>(Array.isArray(t)?t:[t]).reduce((t, i)=>{let r=e[i];return void 0!==r?Object.assign(t, {[i]:r}):t}, {}), n=(e, t)=>e&&t&&Object.keys(t).forEach(i=>{let r=t[i];if(void 0!==r)e.style[i]=\"number\"!=typeof r||a[i]?r.toString():`${r}px`;else e.style.removeProperty(i)}), o=e=>e.endsWith(\"/\")?e:`${e}/`, l=(e, t, i)=>{if(!e.targetWidth||!e.targetHeight||!e.imageData.uri)return{uri:\"\", css:{}, transformed:!1};let{imageData:a}=e, n=e.displayMode||r.fittingTypes.SCALE_TO_FILL, l=Object.assign(s(a, [\"upscaleMethod\"]), s(e, [\"filters\", \"encoding\", \"allowFullGIFTransformation\", \"allowWebpAvifTransforms\"]), e.quality||a.quality, {hasAnimation:e?.hasAnimation||a?.hasAnimation}), h=c(e.imageData.devicePixelRatio||t.devicePixelRatio), u=Object.assign(s(a, [\"width\", \"height\", \"crop\", \"name\", \"focalPoint\"]), {id:a.uri}), g={width:e.targetWidth, height:e.targetHeight, htmlTag:i||\"img\", pixelAspectRatio:h, alignment:e.alignType||r.alignTypes.CENTER}, m=(0, r.getData)(n, u, g, l), f=a.userDomainMediaURL?a.userDomainMediaURL:(({uri:e, envConsts:t})=>{let{externalBaseUrl:i, userDomainMediaPrefixes:r=[], staticMediaUrl:a}=t;return r.some(t=>e.startsWith(`${t}_`))&&i?`${o(i)}_media/`:o(a)})({uri:a.uri, envConsts:t});return m.uri=d(m.uri, f, t.mediaRootUrl), m}, d=(e, t, i)=>{if(/(^https?)|(^data)|(^blob)|(^\\/\\/)/.test(e))return e;let r=o(t);return e&&(/^micons\\//.test(e)?r=o(i):/[^.]+$/.exec(e)?.[0]===\"ico\"&&(r=r.replace(\"media\", \"ficons\"))), r+e}, c=e=>{let t=window.location.search.split(\"&\").map(e=>e.split(\"=\")).find(e=>e[0]?.toLowerCase().includes(\"devicepixelratio\"));return(t?.[1]?Number(t[1]):null)||e||1}, h=function(e, t, i, {containerElm:r, bgEffect:a=\"none\", sourceSets:s}, n){var o, l;let d, c=i.image, h=i[e], u=n.getScreenHeightOverride?.()||document.documentElement.clientHeight||window.innerHeight||0, g=r?.dataset.mediaHeightOverrideType, m=a&&\"none\"!==a||s&&s.some(e=>e.scrollEffect), f=r&&m?r:h, b=window.getComputedStyle(h).getPropertyValue(\"--bg-scrub-effect\"), {width:p, height:v}=n.getMediaDimensionsByEffect?.(b||a, f.offsetWidth, f.offsetHeight, u)||{width:h.offsetWidth, height:h.offsetHeight};if(s&&(o=f.offsetWidth, l=f.offsetHeight, d={}, s.forEach(({mediaQuery:e, scrollEffect:t})=>{d[e]=n.getMediaDimensionsByEffect?.(t, o, l, u).height||l}), t.sourceSetsTargetHeights=d), !c)return;let w=c.getAttribute(\"src\");b&&(t.top=.5*(h.offsetHeight-v), t.left=.5*(h.offsetWidth-p)), t.width=p, t.height=\"fixed\"===g||\"viewport\"===g?document.documentElement.clientHeight+80:v, t.screenHeight=u, t.imgSrc=w, t.boundingRect=h.getBoundingClientRect(), t.mediaHeightOverrideType=g, t.srcset=c.srcset}, u=function(e, t, i, a, s, o, d, c, h, u){if(!Object.keys(t).length)return;let{imageData:g}=a, m=i[e], f=i.image;h&&(g.devicePixelRatio=1);let b=a.targetScale||1, p=s.isExperimentOpen?.(\"specs.thunderbolt.allowFullGIFTransformation\"), v=s.isExperimentOpen?.(\"specs.thunderbolt.allowWebpAvifTransforms\"), w={...a, ...!a.skipMeasure&&{targetWidth:(t.width||0)*b, targetHeight:(t.height||0)*b}, displayMode:g.displayMode, allowFullGIFTransformation:p, allowWebpAvifTransforms:v}, M=l(w, o, \"img\"), y=M?.css?.img||{};n(f, function(e, t, i, r, a){let s=function(e, t=1){return 1!==t?{...e, width:\"100%\", height:\"100%\"}:e}(t, r);if(a&&(delete s.height, s.width=\"100%\"), !e)return s;let n={...s};return\"fill\"===i?(n.position=\"absolute\", n.top=\"0\"):\"fit\"===i&&(n.height=\"100%\"), \"fixed\"===e&&(n[\"will-change\"]=\"transform\"), n.objectPosition&&(n.objectPosition=t.objectPosition.replace(/(center|bottom)$/, \"top\")), n}(t.mediaHeightOverrideType, y, g.displayMode, b, c)), (t.top||t.left)&&n(m, {top:`${t.top}px`, left:`${t.left}px`});let I=M?.uri||\"\", x=g?.hasAnimation||a?.hasAnimation, L=function(e, t, i){let{sourceSets:r}=t;if(!r||!r.length)return;let a={};return r.forEach(({mediaQuery:r, crop:s, focalPoint:n})=>{let o=l({...t, targetHeight:(e.sourceSetsTargetHeights||{})[r]||0, imageData:{...t.imageData, crop:s, focalPoint:n}}, i, \"img\");a[r]=o.uri||\"\"}), a}(t, w, o);if(u&&(f.dataset.ssrSrcDone=\"true\"), !a.isLQIP||!a.lqipTransition||\"transitioned\"in m.dataset||(m.dataset.transitioned=\"\", f.complete?f.onload=function(){f.dataset.loadDone=\"\"}:f.onload=function(){f.complete?f.dataset.loadDone=\"\":f.onload=function(){f.dataset.loadDone=\"\"}}), d){let e;(e=g.uri, (0, r.getFileExtension)(e)===r.fileType.GIF||(0, r.getFileExtension)(e)===r.fileType.WEBP&&x)?(f.setAttribute(\"fetchpriority\", \"low\"), f.setAttribute(\"loading\", \"lazy\"), f.setAttribute(\"decoding\", \"async\")):f.setAttribute(\"fetchpriority\", \"high\"), f.currentSrc!==I&&f.setAttribute(\"src\", I), t.srcset&&!t.srcset.split(\", \").some(e=>e.split(\" \")[0]===I)&&f.setAttribute(\"srcset\", I), i.picture&&w.sourceSets&&Array.from(i.picture.querySelectorAll(\"source\")).forEach(e=>{let t=e.media||\"\", i=L?.[t];e.srcset!==i&&e.setAttribute(\"srcset\", i||\"\")})}}, g={parallax:\"ImageParallax\", fixed:\"ImageReveal\"};var m=i(17709), f=i.n(m);function b(e={}, t=null, i={}){if(\"undefined\"==typeof window)return;let a={staticMediaUrl:r.STATIC_MEDIA_URL, mediaRootUrl:r.MEDIA_ROOT_URL, experiments:{}, devicePixelRatio:/iemobile/i.test(navigator.userAgent)?Math.round(window.screen.availWidth/(window.screen.width||window.document.documentElement.clientWidth)):window.devicePixelRatio, disableImagesLazyLoading:(()=>{try{return\"true\"===new URL(window.location.href).searchParams.get(\"disableLazyLoading\")}catch{return!1}})(), ...i}, s=function(e, t){let i=\"wow-image\";if(void 0===(e=e||window).customElements.get(i)){let r, a;return e.ResizeObserver&&(r=new e.ResizeObserver(e=>e.map(e=>e.target.reLayout()))), e.IntersectionObserver&&(a=new IntersectionObserver(e=>e.map(e=>{if(e.isIntersecting){let t=e.target;t.unobserveIntersect(), t.observeResize()}return e}), {rootMargin:\"150% 100%\"})), function(s){var n, o;let l=(n={resizeService:r, intersectionService:a, mutationService:f(), ...t}, o=e, class extends o.HTMLElement{constructor(){super(), this.childListObserver=null, this.timeoutId=null}attributeChangedCallback(e, t){t&&this.reLayout()}connectedCallback(){s.disableImagesLazyLoading?this.reLayout():this.observeIntersect()}disconnectedCallback(){this.unobserveResize(), this.unobserveIntersect(), this.unobserveChildren()}static get observedAttributes(){return[\"data-image-info\"]}reLayout(){let e={}, t={}, i=this.getAttribute(\"id\"), r=JSON.parse(this.dataset.imageInfo||\"\"), a=\"true\"===this.dataset.isResponsive, {bgEffectName:l}=this.dataset, {scrollEffect:d}=r.imageData, {sourceSets:c}=r, m=l||d&&g[d];c&&c.length&&c.forEach(e=>{e.scrollEffect&&(e.scrollEffect=g[e.scrollEffect])}), e[i]=this, r.containerId&&(e[r.containerId]=o.document.getElementById(`${r.containerId}`));let f=r.containerId?e[r.containerId]:void 0;if(e.image=this.querySelector(\"img\"), e.picture=this.querySelector(\"picture\"), !e.image)return void this.observeChildren(this);this.unobserveChildren(), this.observeChildren(this), n.mutationService.measure(()=>{h(i, t, e, {containerElm:f, bgEffect:m, sourceSets:c}, n)});let b=(o, l)=>{n.mutationService.mutate(()=>{u(i, t, e, r, n, s, o, a, m, l)})}, p=e.image, v=this.dataset.hasSsrSrc&&!p.dataset.ssrSrcDone;!p.getAttribute(\"src\")||v?b(!0, !0):this.debounceImageLoad(b)}debounceImageLoad(e){clearTimeout(this.timeoutId), this.timeoutId=o.setTimeout(()=>{e(!0)}, 250), e(!1)}observeResize(){n.resizeService?.observe(this)}unobserveResize(){n.resizeService?.unobserve(this)}observeIntersect(){n.intersectionService?.observe(this)}unobserveIntersect(){n.intersectionService?.unobserve(this)}observeChildren(e){this.childListObserver||(this.childListObserver=new o.MutationObserver(()=>{this.reLayout()})), this.childListObserver.observe(e, {childList:!0})}unobserveChildren(){this.childListObserver&&(this.childListObserver.disconnect(), this.childListObserver=null)}});e.customElements.define(i, l)}}}(t, e);s&&s(a)}}, 76526(e, t, i){i.d(t, {isExperimentOpen:()=>s});var r=i(7073);let a=[], s=(e, t)=>a.includes(t)||(0, r.kg)(e, t)}, 7073(e, t, i){i.d(t, {kg:()=>a});var r=[\"true\", \"b\", \"c\", \"new\", \"enabled\"];function a(e, t){let i=e[t];return!0===i||\"string\"==typeof i&&r.includes(i.toLowerCase())}}}, function(e){e.O(0, [\"1619\", \"3033\"], function(){return e(e.s=46418)}), e.O()}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/initCustomElements.inline.51cbd1b6.bundle.min.js.map function _extends(){_extends=Object.assign||function(target){for(var i=1;i !function(n, e, r, t, o, i, a, c, s){for(var u=s, f=0;f -1){u&&\"no\"===document.scripts[f].getAttribute(\"data-lazy\")&&(u=!1);break}var p=[];function l(n){return\"e\"in n}function d(n){return\"p\"in n}function _(n){return\"f\"in n}var v=[];function y(n){u&&(l(n)||d(n)||_(n)&&n.f.indexOf(\"capture\")>-1||_(n)&&n.f.indexOf(\"showReportDialog\")>-1)&&L(), v.push(n)}function h(){y({e:[].slice.call(arguments)})}function g(n){y({p:n})}function E(){try{n.SENTRY_SDK_SOURCE=\"loader\";var e=n[o], i=e.init;e.init=function(o){n.removeEventListener(r, h), n.removeEventListener(t, g);var a=c;for(var s in o)Object.prototype.hasOwnProperty.call(o, s)&&(a[s]=o[s]);!function(n, e){var r=n.integrations||[];if(!Array.isArray(r))return;var t=r.map((function(n){return n.name}));n.tracesSampleRate&&-1===t.indexOf(\"BrowserTracing\")&&(e.browserTracingIntegration?r.push(e.browserTracingIntegration({enableInp:!0})):e.BrowserTracing&&r.push(new e.BrowserTracing));(n.replaysSessionSampleRate||n.replaysOnErrorSampleRate)&&-1===t.indexOf(\"Replay\")&&(e.replayIntegration?r.push(e.replayIntegration()):e.Replay&&r.push(new e.Replay));n.integrations=r}(a, e), i(a)}, setTimeout((function(){return function(e){try{\"function\"==typeof n.sentryOnLoad&&(n.sentryOnLoad(), n.sentryOnLoad=void 0)}catch(n){console.error(\"Error while calling `sentryOnLoad` handler:\"), console.error(n)}try{for(var r=0;r !function(n){var r={}, t=function(){return t=Object.assign||function(n){for(var r, t=1, e=arguments.length;t 0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1] =n.length&&(n=void 0), {value:n&&n[e++], done:!n}}};throw new TypeError(r?\"Object is not iterable.\":\"Symbol.iterator is not defined.\")}function u(n, r){var t=\"function\"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e, o, i=t.call(n), u=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(n){o={error:n}}finally{try{e&&!e.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u}function c(n){return n&&n.Math==Math?n:void 0}var f=\"object\"==typeof globalThis&&c(globalThis)||\"object\"==typeof window&&c(window)||\"object\"==typeof self&&c(self)||\"object\"==typeof global&&c(global)||function(){return this}()||{}, a={};var s=/^(?:(\\w+):)\\/\\/(?:(\\w+)(?::(\\w+)?)?@)([\\w.-]+)(?::(\\d+))?\\/(.+)/;function v(n){var r=s.exec(n);if(r){var t, e=u(r.slice(1), 6), o=e[0], i=e[1], c=e[2], v=void 0===c?\"\":c, l=e[3], y=e[4], d=void 0===y?\"\":y, p=\"\", h=e[5], b=h.split(\"/\");if(b.length>1&&(p=b.slice(0, -1).join(\"/\"), h=b.pop()), h){var w=h.match(/^\\d+/);w&&(h=w[0])}return{protocol:(t={host:l, pass:v, path:p, projectId:h, port:d, protocol:o, publicKey:i}).protocol, publicKey:t.publicKey||\"\", pass:t.pass||\"\", host:t.host, port:t.port||\"\", path:t.path||\"\", projectId:t.projectId}}!function(n){if(!(\"console\"in f))return n();var r=f.console, t={}, e=Object.keys(a);e.forEach((function(n){var e=a[n];t[n]=r[n], r[n]=e}));try{n()}finally{e.forEach((function(n){r[n]=t[n]}))}}((function(){console.error(\"Invalid Sentry Dsn: \".concat(n))}))}function l(n, r){return e=t({sentry_key:n.publicKey, sentry_version:\"7\"}, r&&{sentry_client:\"\".concat(r.name, \"/\").concat(r.version)}), Object.keys(e).map((function(n){return\"\".concat(encodeURIComponent(n), \"=\").concat(encodeURIComponent(e[n]))})).join(\"&\");var e}function y(n, r){var t;return function(n, r){var t, e, o=n[1];try{for(var u=i(o), c=u.next();!c.done;c=u.next()){var f=c.value;if(r(f, f[0].type))return!0}}catch(n){t={error:n}}finally{try{c&&!c.done&&(e=u.return)&&e.call(u)}finally{if(t)throw t.error}}}(n, (function(n, e){return r.includes(e)&&(t=Array.isArray(n)?n[1]:void 0), !!t})), t}for(var d in r.makeMultiplexedTransport=function(n, r){return function(c){var f=n(c), a=new Map;function s(r, i){var u=i?\"\".concat(r, \":\").concat(i):r, f=a.get(u);if(!f){var s=v(r);if(!s)return;var d=function(n, r){void 0===r&&(r={});var t=\"string\"==typeof r?r:r.tunnel, e=\"string\"!=typeof r&&r.t?r.t.sdk:void 0;return t||\"\".concat(function(n){return\"\".concat(function(n){var r=n.protocol?\"\".concat(n.protocol, \":\"):\"\", t=n.port?\":\".concat(n.port):\"\";return\"\".concat(r, \"//\").concat(n.host).concat(t).concat(n.path?\"/\".concat(n.path):\"\", \"/api/\")}(n)).concat(n.projectId, \"/envelope/\")}(n), \"?\").concat(l(n, e))}(s, c.tunnel);f=i?function(n, r){var i=this;return function(u){var c=n(u);return t(t({}, c), {send:function(n){return e(i, void 0, void 0, (function(){var t;return o(this, (function(e){return(t=y(n, [\"event\", \"transaction\", \"profile\", \"replay_event\"]))&&(t.release=r), [2, c.send(n)]}))}))}})}}(n, i)(t(t({}, c), {url:d})):n(t(t({}, c), {url:d})), a.set(u, f)}return[r, f]}return{send:function(n){return e(this, void 0, void 0, (function(){function e(r){var t=r&&r.length?r:[\"event\"];return y(n, t)}var i;return o(this, (function(o){switch(o.label){case 0:return 0===(i=r({envelope:n, getEvent:e}).map((function(n){return\"string\"==typeof n?s(n, void 0):s(n.dsn, n.release)})).filter((function(n){return!!n}))).length&&i.push([\"\", f]), [4, Promise.all(i.map((function(r){var e=u(r, 2), o=e[0];return e[1].send(function(n, r){return e=r?t(t({}, n[0]), {dsn:r}):n[0], void 0===(o=n[1])&&(o=[]), [e, o];var e, o}(n, o))})))];case 1:return[2, o.sent()[0]]}}))}))}, flush:function(n){return e(this, void 0, void 0, (function(){var r, t, e, c, s, v, l, y, d, p;return o(this, (function(o){switch(o.label){case 0:return[4, f.flush(n)];case 1:r=[o.sent()], o.label=2;case 2:o.trys.push([2, 7, 8, 9]), t=i(a), e=t.next(), o.label=3;case 3:return e.done?[3, 6]:(c=u(e.value, 2), s=c[1], l=(v=r).push, [4, s.flush(n)]);case 4:l.apply(v, [o.sent()]), o.label=5;case 5:return e=t.next(), [3, 3];case 6:return[3, 9];case 7:return y=o.sent(), d={error:y}, [3, 9];case 8:try{e&&!e.done&&(p=t.return)&&p.call(t)}finally{if(d)throw d.error}return[7];case 9:return[2, r.every((function(n){return n}))]}}))}))}}}}, n.Sentry=n.Sentry||{}, n.Sentry.Integrations=n.Sentry.Integrations||{}, r)Object.prototype.hasOwnProperty.call(r, d)&&(n.Sentry.Integrations[d]=r[d], n.Sentry[d]=r[d])}(window); window.resolveExternalsRegistryPromise = null const externalRegistryPromise = new Promise((r) => window.resolveExternalsRegistryPromise = r) window.resolveExternalsRegistryModule = (name) => externalRegistryPromise.then(() => window.externalsRegistry[name].onload()) (self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"7101\"], {78635(){window.__imageClientApi__=window.__imageClientApi__||{sdk:{}};let{lodash:e, react:o, reactDOM:n, imageClientApi:d, clientSdk:a}=window.externalsRegistry={lodash:{}, react:{}, reactDOM:{}, imageClientApi:{}, clientSdk:{}};d.loaded=new Promise(e=>{d.onload=e}), e.loaded=new Promise(o=>{e.onload=o}), a.loaded=new Promise(e=>{a.onload=e}), window.ReactDOM||(window.reactDOMReference=window.ReactDOM={loading:!0}), n.loaded=new Promise(e=>{n.onload=()=>{Object.assign(window.reactDOMReference||{}, window.ReactDOM, {loading:!1}), e()}}), window.React||(window.reactReference=window.React={loading:!0}), o.loaded=new Promise(e=>{o.onload=()=>{Object.assign(window.reactReference||{}, window.React, {loading:!1}), e()}}), window.reactAndReactDOMLoaded=Promise.all([o.loaded, n.loaded]), window.resolveExternalsRegistryPromise()}}, function(e){e(e.s=78635)}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/externals-registry.inline.c335b0f1.bundle.min.js.map {\"siteFeaturesConfigs\":{\"accessibilityBrowserZoom\":{\"isBuilder\":false, \"isStudio\":false}, \"appMonitoring\":{\"appsWithMonitoring\":[{\"appId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"monitoringComponent\":{\"monitoring\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"blog-builder\", \"fingerprint\":\"d996f0a979f716ea0183196e836ad4ab64247fa4f725ee3bcf6507ee\"}}}}, \"panoramaConfigByArtifactId\":{\"blog-builder\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"blog-builder\", \"fingerprint\":\"d996f0a979f716ea0183196e836ad4ab64247fa4f725ee3bcf6507ee\"}}}}, \"externalIdByComponentId\":{\"2aaff717-a69c-4967-b59c-d181bf02ec8d\":\"blog-builder\", \"66b4159e-4d31-44b8-a769-82de85b8017c\":\"blog-builder\", \"cfe0d874-88a8-4466-ba78-1e3050ea6640\":\"blog-builder\", \"2e0ac7c1-e22c-4c8a-a67f-9c56fa3128ba\":\"blog-builder\", \"50886b2a-2f47-42d4-a203-f8d783c4d87b\":\"blog-builder\", \"e4dc216a-a280-4031-8356-cc251eefe1c9\":\"blog-builder\"}}, {\"appId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"monitoringComponent\":{\"monitoring\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"ecom-bm-subscriptions-draft\", \"fingerprint\":\"4f38b07a29450bfd300b2e9ae491c10355cc05a69541b03d0fdee2ab\"}}}}, \"panoramaConfigByArtifactId\":{\"ecom-bm-subscriptions-draft\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"ecom-bm-subscriptions-draft\", \"fingerprint\":\"4f38b07a29450bfd300b2e9ae491c10355cc05a69541b03d0fdee2ab\"}}}, \"abandoned-carts-bm\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"abandoned-carts-bm\", \"fingerprint\":\"13d15bc7d44af4c2920916fd32d054add9c5a8454fbd28fa89f8f19d\"}}}}, \"externalIdByComponentId\":{}}, {\"appId\":\"14ce1214-b278-a7e4-1373-00cebd1bef7c\", \"isWixTPA\":true, \"monitoringComponent\":{\"monitoring\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"form-element\", \"fingerprint\":\"dev\"}}}}, \"panoramaConfigByArtifactId\":{\"form-element\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"form-element\", \"fingerprint\":\"dev\"}}}}, \"externalIdByComponentId\":{\"e6f4e3a3-8582-4fa2-8d1d-01440eb33fc4\":\"form-element\"}}, {\"appId\":\"1484cb44-49cd-5b39-9681-75188ab429de\", \"isWixTPA\":true, \"monitoringComponent\":{\"monitoring\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"site-search-builder\", \"fingerprint\":\"54c27bc95c64b4cd10c8c9c684b2f008546faa5186ba7413bf89fb79\"}}}}, \"panoramaConfigByArtifactId\":{\"site-search-builder\":{\"type\":\"PANORAMA\", \"panoramaOptions\":{\"project\":{\"groupId\":\"com.wixpress\", \"artifactId\":\"site-search-builder\", \"fingerprint\":\"54c27bc95c64b4cd10c8c9c684b2f008546faa5186ba7413bf89fb79\"}}}}, \"externalIdByComponentId\":{\"8244af1e-c249-4dd6-9308-e59e9d03556d\":\"site-search-builder\"}}]}, \"assetsLoader\":{\"isStylableComponentInStructure\":true, \"hasBuilderComponents\":false}, \"businessLoggerService\":{}, \"businessLogger\":{\"isBuilderComponentModel\":false}, \"componentsRegistry\":{\"librariesTopology\":[{\"artifactId\":\"editor-elements\", \"namespace\":\"wixui\", \"url\":\"https:\\/\\/static.parastorage.com\\/services\\/editor-elements\\/1.15523.0\"}, {\"artifactId\":\"editor-elements\", \"namespace\":\"dsgnsys\", \"url\":\"https:\\/\\/static.parastorage.com\\/services\\/editor-elements\\/1.15523.0\"}]}, \"consentPolicy\":{\"isWixSite\":false, \"isBuilderComponentModel\":false}, \"cyclicTabbing\":{\"isBuilderComponentModel\":false}, \"dataWixCodeSdk\":{\"gridAppId\":\"ce23b3aa-abec-4be7-bcae-70f59a7d73bb\", \"environment\":\"LIVE\", \"cloudDataUrlWithExternalBase\":\"https:\\/\\/www.100relab.com\\/_api\\/cloud-data\"}, \"dynamicPages\":{\"prefixToRouterFetchData\":{\"account\":{\"urlData\":{\"basePath\":\"https:\\/\\/www.100relab.com\\/_api\\/members\\/v1\\/santa-members\", \"queryParams\":\"viewMode=site\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"fetchUsingGet\":false, \"compressPayload\":false, \"encodeURI\":true}, \"optionsData\":{\"bodyData\":{\"pageRoles\":{\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\":{\"id\":\"bw36u\", \"title\":\"Góiđăng ký của tôi\", \"pageUriSEO\":\"my-subscriptions\"}, \"5063ee74-6323-4b5c-b612-70ec4a0d075f\":{\"id\":\"v36av\", \"title\":\"Notifications\", \"pageUriSEO\":\"notifications\"}, \"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\":{\"id\":\"k9gzs\", \"title\":\"My Account\", \"pageUriSEO\":\"my-account\"}, \"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\":{\"id\":\"bwvbz\", \"title\":\"Settings\", \"pageUriSEO\":\"settings\"}}, \"routerPrefix\":\"\\/account\", \"config\":{\"type\":\"private\", \"patterns\":{\"\\/my-account\":{\"socialHome\":false, \"appData\":{\"appDefinitionId\":\"14cffd81-5215-0a7f-22f8-074b0e2401fb\", \"appPageId\":\"member_info\", \"menuOrder\":3, \"visibleForRoles\":[]}, \"page\":\"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\", \"seoData\":{\"title\":\"My Account\", \"description\":\"\", \"keywords\":\"\", \"noIndex\":\"true\"}, \"title\":\"My Account\"}, \"\\/settings\":{\"socialHome\":false, \"appData\":{\"numbers\":{}, \"appDefinitionId\":\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\", \"appPageId\":\"settings\", \"menuOrder\":4, \"visibleForRoles\":[]}, \"page\":\"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\", \"seoData\":{\"title\":\"Settings\", \"description\":\"\", \"keywords\":\"\", \"noIndex\":\"true\"}, \"title\":\"Settings\"}, \"\\/notifications\":{\"socialHome\":false, \"appData\":{\"numbers\":{\"key\":\"notificationsCount\", \"default\":0}, \"appDefinitionId\":\"14f25924-5664-31b2-9568-f9c5ed98c9b1\", \"appPageId\":\"notifications_app\", \"menuOrder\":4, \"visibleForRoles\":[]}, \"page\":\"5063ee74-6323-4b5c-b612-70ec4a0d075f\", \"seoData\":{\"title\":\"Notifications\", \"description\":\"\", \"keywords\":\"\", \"noIndex\":\"true\"}, \"title\":\"Notifications\"}, \"\\/my-subscriptions\":{\"socialHome\":false, \"appData\":{\"numbers\":{}, \"appDefinitionId\":\"2bef2abe-7abe-43da-889c-53c1500a328c\", \"appPageId\":\"My Subscriptions\", \"menuOrder\":2, \"visibleForRoles\":[]}, \"page\":\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\", \"seoData\":{\"title\":\"Góiđăng ký của tôi\", \"description\":\"\", \"keywords\":\"\", \"noIndex\":\"true\"}, \"title\":\"Góiđăng ký của tôi\"}}}, \"roleVariations\":{}}, \"headers\":{\"Content-Type\":\"application\\/json\", \"X-XSRF-TOKEN\":\"\"}}, \"wixCodeAppDefinitionId\":\"675bbcef-18d8-41f5-800e-131ec9e08762\"}, \"trangmi-ebt\":{\"urlData\":{\"basePath\":\"https:\\/\\/www.100relab.com\\/_api\\/dynamic-pages-router\\/v1\", \"queryParams\":\"gridAppId=ce23b3aa-abec-4be7-bcae-70f59a7d73bb&viewMode=site\", \"fetchUsingGet\":true, \"compressPayload\":true, \"appDefinitionId\":\"e593b0bd-b783-45b8-97c2-873d42aacaf4\", \"encodeURI\":false}, \"optionsData\":{\"bodyData\":{\"pageRoles\":{\"395b5dbb-d497-4231-896e-d14504393fc9\":{\"id\":\"qyyn5\", \"title\":\"Trang mới (All)\", \"pageUriSEO\":\"blank-3\"}}, \"routerPrefix\":\"\\/trangmi-ebt\", \"config\":{\"patterns\":{\"\\/\":{\"pageRole\":\"395b5dbb-d497-4231-896e-d14504393fc9\", \"title\":\"Trangmi-ebt\", \"config\":{\"collection\":\"Trangmi-ebt\", \"pageSize\":12, \"sort\":[{\"title\":\"asc\"}], \"lowercase\":true, \"seoV2\":true}, \"seoMetaTags\":{\"robots\":\"index\"}}}}, \"roleVariations\":{}}, \"headers\":{\"Content-Type\":\"application\\/json\", \"X-XSRF-TOKEN\":\"\", \"x-wix-grid-app-id\":\"ce23b3aa-abec-4be7-bcae-70f59a7d73bb\"}}, \"wixCodeAppDefinitionId\":\"675bbcef-18d8-41f5-800e-131ec9e08762\"}, \"mc-8bt\":{\"urlData\":{\"basePath\":\"https:\\/\\/www.100relab.com\\/_api\\/dynamic-pages-router\\/v1\", \"queryParams\":\"gridAppId=ce23b3aa-abec-4be7-bcae-70f59a7d73bb&viewMode=site\", \"fetchUsingGet\":true, \"compressPayload\":true, \"appDefinitionId\":\"e593b0bd-b783-45b8-97c2-873d42aacaf4\", \"encodeURI\":false}, \"optionsData\":{\"bodyData\":{\"pageRoles\":{\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\":{\"id\":\"ldw8n\", \"title\":\"Mục (All)\", \"pageUriSEO\":\"blank-1\"}, \"afaf43a4-944f-40c5-a9e3-b914e5596344\":{\"id\":\"h483u\", \"title\":\"Mục (Title)\", \"pageUriSEO\":\"blank\"}}, \"routerPrefix\":\"\\/mc-8bt\", \"config\":{\"patterns\":{\"\\/{title}\":{\"pageRole\":\"afaf43a4-944f-40c5-a9e3-b914e5596344\", \"title\":\"{title}\", \"config\":{\"collection\":\"Mc-8bt\", \"pageSize\":1, \"lowercase\":true, \"sort\":[{\"title\":\"asc\"}], \"seoV2\":true}, \"seoMetaTags\":{\"description\":\"{subtitle}\", \"og:image\":\"{image}\", \"keywords\":\"\", \"robots\":\"index\"}}, \"\\/\":{\"pageRole\":\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\", \"title\":\"Mc-8bt\", \"config\":{\"collection\":\"Mc-8bt\", \"pageSize\":19, \"sort\":[{\"title\":\"asc\"}], \"lowercase\":true, \"seoV2\":true}, \"seoMetaTags\":{\"robots\":\"index\"}}}}, \"roleVariations\":{}}, \"headers\":{\"Content-Type\":\"application\\/json\", \"X-XSRF-TOKEN\":\"\", \"x-wix-grid-app-id\":\"ce23b3aa-abec-4be7-bcae-70f59a7d73bb\"}}, \"wixCodeAppDefinitionId\":\"675bbcef-18d8-41f5-800e-131ec9e08762\"}, \"profile\":{\"urlData\":{\"basePath\":\"https:\\/\\/www.100relab.com\\/_api\\/members\\/v1\\/santa-members\", \"queryParams\":\"viewMode=site\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"fetchUsingGet\":false, \"compressPayload\":false, \"encodeURI\":true}, \"optionsData\":{\"bodyData\":{\"pageRoles\":{\"3213643b-49aa-4081-829d-e69fac6adc5f\":{\"id\":\"u3h11\", \"title\":\"Profile\", \"pageUriSEO\":\"profile-1\"}}, \"routerPrefix\":\"\\/profile\", \"config\":{\"type\":\"public\", \"patterns\":{\"\\/{userName}\\/profile\":{\"socialHome\":true, \"appData\":{\"numbers\":{}, \"appDefinitionId\":\"14dbef06-cc42-5583-32a7-3abd44da4908\", \"appPageId\":\"about\", \"menuOrder\":1, \"visibleForRoles\":[]}, \"page\":\"3213643b-49aa-4081-829d-e69fac6adc5f\", \"seoData\":{\"title\":\"{userName} | Profile\", \"description\":\"\", \"keywords\":\"\", \"noIndex\":\"true\"}, \"title\":\"Profile\"}}}, \"roleVariations\":{}}, \"headers\":{\"Content-Type\":\"application\\/json\", \"X-XSRF-TOKEN\":\"\"}}, \"wixCodeAppDefinitionId\":\"675bbcef-18d8-41f5-800e-131ec9e08762\"}}, \"routerPagesSeoToIdMap\":{\"my-subscriptions\":\"bw36u\", \"notifications\":\"v36av\", \"my-account\":\"k9gzs\", \"settings\":\"bwvbz\", \"blank-3\":\"qyyn5\", \"blank-1\":\"ldw8n\", \"blank\":\"h483u\", \"profile-1\":\"u3h11\"}, \"externalBaseUrl\":\"https:\\/\\/www.100relab.com\", \"staticRoutedPageId\":\"\"}, \"editorWixCodeSdk\":{\"isBuilderComponentModel\":false}, \"elementorySupportWixCodeSdk\":{\"baseUrl\":\"https:\\/\\/www.100relab.com\\/_api\\/wix-code-public-dispatcher-ng\\/siteview\", \"relativePath\":\"\\/\\/_api\\/wix-code-public-dispatcher-ng\\/siteview\", \"gridAppId\":\"ce23b3aa-abec-4be7-bcae-70f59a7d73bb\", \"viewMode\":\"site\", \"siteRevision\":607}, \"environmentWixCodeSdk\":{}, \"environment\":{\"editorType\":\"\", \"domain\":\"100relab.com\", \"previewMode\":false, \"isBuilderComponentModel\":false}, \"fedopsWixCodeSdk\":{\"isWixSite\":false, \"shouldReportFedops\":false}, \"locationWixCodeSdk\":{\"routersConfigMap\":{\"routers-kyr2fk4p\":{\"prefix\":\"account\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"config\":\"{\\\"type\\\":\\\"private\\\", \\\"patterns\\\":{\\\"\\/my-account\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"appDefinitionId\\\":\\\"14cffd81-5215-0a7f-22f8-074b0e2401fb\\\", \\\"appPageId\\\":\\\"member_info\\\", \\\"menuOrder\\\":3, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\\\", \\\"seoData\\\":{\\\"title\\\":\\\"My Account\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"My Account\\\"}, \\\"\\/settings\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\\\", \\\"appPageId\\\":\\\"settings\\\", \\\"menuOrder\\\":4, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Settings\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Settings\\\"}, \\\"\\/notifications\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{\\\"key\\\":\\\"notificationsCount\\\", \\\"default\\\":0}, \\\"appDefinitionId\\\":\\\"14f25924-5664-31b2-9568-f9c5ed98c9b1\\\", \\\"appPageId\\\":\\\"notifications_app\\\", \\\"menuOrder\\\":4, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"5063ee74-6323-4b5c-b612-70ec4a0d075f\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Notifications\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Notifications\\\"}, \\\"\\/my-subscriptions\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"2bef2abe-7abe-43da-889c-53c1500a328c\\\", \\\"appPageId\\\":\\\"My Subscriptions\\\", \\\"menuOrder\\\":2, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Góiđăng ký của tôi\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Góiđăng ký của tôi\\\"}}}\", \"group\":\"members\", \"pages\":{\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\":\"bw36u\", \"5063ee74-6323-4b5c-b612-70ec4a0d075f\":\"v36av\", \"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\":\"k9gzs\", \"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\":\"bwvbz\"}, \"roleVariations\":{}}, \"routers-l3eg5akf\":{\"prefix\":\"trangmi-ebt\", \"appDefinitionId\":\"dataBinding\", \"config\":\"{\\\"patterns\\\":{\\\"\\/\\\":{\\\"pageRole\\\":\\\"395b5dbb-d497-4231-896e-d14504393fc9\\\", \\\"title\\\":\\\"Trangmi-ebt\\\", \\\"config\\\":{\\\"collection\\\":\\\"Trangmi-ebt\\\", \\\"pageSize\\\":12, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"lowercase\\\":true, \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"robots\\\":\\\"index\\\"}}}}\", \"group\":\"\", \"pages\":{\"395b5dbb-d497-4231-896e-d14504393fc9\":\"qyyn5\"}, \"roleVariations\":{}}, \"routers-l3eh1hty\":{\"prefix\":\"mc-8bt\", \"appDefinitionId\":\"dataBinding\", \"config\":\"{\\\"patterns\\\":{\\\"\\/{title}\\\":{\\\"pageRole\\\":\\\"afaf43a4-944f-40c5-a9e3-b914e5596344\\\", \\\"title\\\":\\\"{title}\\\", \\\"config\\\":{\\\"collection\\\":\\\"Mc-8bt\\\", \\\"pageSize\\\":1, \\\"lowercase\\\":true, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"description\\\":\\\"{subtitle}\\\", \\\"og:image\\\":\\\"{image}\\\", \\\"keywords\\\":\\\"\\\", \\\"robots\\\":\\\"index\\\"}}, \\\"\\/\\\":{\\\"pageRole\\\":\\\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\\\", \\\"title\\\":\\\"Mc-8bt\\\", \\\"config\\\":{\\\"collection\\\":\\\"Mc-8bt\\\", \\\"pageSize\\\":19, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"lowercase\\\":true, \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"robots\\\":\\\"index\\\"}}}}\", \"group\":\"\", \"pages\":{\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\":\"ldw8n\", \"afaf43a4-944f-40c5-a9e3-b914e5596344\":\"h483u\"}, \"roleVariations\":{}}, \"routers-kyr2fk4p1\":{\"prefix\":\"profile\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"config\":\"{\\\"type\\\":\\\"public\\\", \\\"patterns\\\":{\\\"\\/{userName}\\/profile\\\":{\\\"socialHome\\\":true, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"14dbef06-cc42-5583-32a7-3abd44da4908\\\", \\\"appPageId\\\":\\\"about\\\", \\\"menuOrder\\\":1, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"3213643b-49aa-4081-829d-e69fac6adc5f\\\", \\\"seoData\\\":{\\\"title\\\":\\\"{userName} | Profile\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Profile\\\"}}}\", \"group\":\"members\", \"pages\":{\"3213643b-49aa-4081-829d-e69fac6adc5f\":\"u3h11\"}, \"roleVariations\":{}}}, \"urlMappings\":null}, \"mpaNavigation\":{\"forceMpaNavigation\":false, \"isRunningInDifferentSiteContext\":false}, \"ooiTpaSharedConfig\":{\"imageSpriteUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/santa-resources\\/resources\\/viewer\\/editorUI\\/fonts.v19.png\", \"wixStaticFontsLinks\":[\"https:\\/\\/static.parastorage.com\\/services\\/fonts-data\\/dist\\/fonts.hz267ac7fkkfb3a18o8z.css\", \"https:\\/\\/static.parastorage.com\\/services\\/fonts-data\\/dist\\/wixMadefor.j95mkaziqjnrn77aekr8.css\", \"https:\\/\\/static.parastorage.com\\/services\\/fonts-data\\/dist\\/google.i6q038anl30o3b4lfbu6.css\"]}, \"ooi\":{\"ooiComponentsData\":{\"47a7e7bb-f412-4093-9155-1ff5adbc4dae\":{\"sentryDsn\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/SideBySideViewerWidget.bundle.min.js\", \"widgetId\":\"47a7e7bb-f412-4093-9155-1ff5adbc4dae\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"0a9f687f-7e00-4576-a8e1-9415844b8f44\":{\"sentryDsn\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsListWidgetViewerWidget.bundle.min.js\", \"widgetId\":\"0a9f687f-7e00-4576-a8e1-9415844b8f44\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"8cce2b9e-8549-46c7-8ad2-f75bf28534ac\":{\"sentryDsn\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/FeedWidgetViewerWidget.bundle.min.js\", \"widgetId\":\"8cce2b9e-8549-46c7-8ad2-f75bf28534ac\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"a7dcdfcb-8abd-4008-af19-fed5fcd12b40\":{\"sentryDsn\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsViewerWidget.bundle.min.js\", \"widgetId\":\"a7dcdfcb-8abd-4008-af19-fed5fcd12b40\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"83b2af08-c021-40c8-a3a5-b329a959ec2b\":{\"sentryDsn\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsListWidgetViewerWidget.bundle.min.js\", \"widgetId\":\"83b2af08-c021-40c8-a3a5-b329a959ec2b\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"e018cc55-7b1c-4500-a2e5-969f22c8a33a\":{\"sentryDsn\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/MembersAreaGroupsViewerWidget.bundle.min.js\", \"widgetId\":\"e018cc55-7b1c-4500-a2e5-969f22c8a33a\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"513a5d84-3ebb-4ca6-a5aa-83effd2123b9\":{\"sentryDsn\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupViewerWidget.bundle.min.js\", \"widgetId\":\"513a5d84-3ebb-4ca6-a5aa-83effd2123b9\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"144097ea-fea0-498e-ade7-e6de40127106\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-vod-widget\\/1.4650.0\\/WixVideoViewerWidget.bundle.min.js\", \"widgetId\":\"144097ea-fea0-498e-ade7-e6de40127106\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/vod-server.wix.com\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"13a94f09-2766-3c40-4a32-8edb5acdd8bc\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-page\\/1.4416.0\\/ProductPageViewerWidget.bundle.min.js\", \"widgetId\":\"13a94f09-2766-3c40-4a32-8edb5acdd8bc\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"49dbb2d9-d9e5-4605-a147-e926605bf164\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/SideCartViewerWidget.bundle.min.js\", \"widgetId\":\"49dbb2d9-d9e5-4605-a147-e926605bf164\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"5cd9f867-307e-4f6d-b572-bf262f062e55\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-edit-subscription\\/1.11.0\\/EditSubscriptionViewerWidget.bundle.min.js\", \"widgetId\":\"5cd9f867-307e-4f6d-b572-bf262f062e55\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"14666402-0bc7-b763-e875-e99840d131bd\":{\"sentryDsn\":\"https:\\/\\/8c4075d5481d476e945486754f783364@sentry.io\\/1865790\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-add-to-cart\\/1.1500.0\\/addToCart.bundle.min.js\", \"widgetId\":\"14666402-0bc7-b763-e875-e99840d131bd\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"a63a5215-8aa6-42af-96b1-583bfd74cff5\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/WishlistViewerWidget.bundle.min.js\", \"widgetId\":\"a63a5215-8aa6-42af-96b1-583bfd74cff5\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"13afb094-84f9-739f-44fd-78d036adb028\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/GridGalleryViewerWidget.bundle.min.js\", \"widgetId\":\"13afb094-84f9-739f-44fd-78d036adb028\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"bb5ba6e9-272d-4a4d-a8dd-5e349744b539\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/SuccessPopupViewerWidget.bundle.min.js\", \"widgetId\":\"bb5ba6e9-272d-4a4d-a8dd-5e349744b539\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"1380bbab-4da3-36b0-efb4-2e0599971d14\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/cartViewerWidget.bundle.min.js\", \"widgetId\":\"1380bbab-4da3-36b0-efb4-2e0599971d14\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"139a41fd-0b1d-975f-6f67-e8cbdf8ccc82\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SliderGalleryViewerWidget.bundle.min.js\", \"widgetId\":\"139a41fd-0b1d-975f-6f67-e8cbdf8ccc82\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"1380bbb4-8df0-fd38-a235-88821cf3f8a4\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-thank-you-page-ooi\\/1.3520.0\\/thankYouPageViewerWidget.bundle.min.js\", \"widgetId\":\"1380bbb4-8df0-fd38-a235-88821cf3f8a4\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"1380bba0-253e-a800-a235-88821cf3f8a4\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/GridGalleryViewerWidget.bundle.min.js\", \"widgetId\":\"1380bba0-253e-a800-a235-88821cf3f8a4\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"1380bbc4-1485-9d44-4616-92e36b1ead6b\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-cart-icon\\/1.2405.0\\/CartIconViewerWidget.bundle.min.js\", \"widgetId\":\"1380bbc4-1485-9d44-4616-92e36b1ead6b\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"244576c9-d856-49b9-af14-216071924e3b\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchModalGalleryViewerWidget.bundle.min.js\", \"widgetId\":\"244576c9-d856-49b9-af14-216071924e3b\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"abcd87fe-c51f-4538-848d-2902a2f50d2d\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchResultsPageGalleryViewerWidget.bundle.min.js\", \"widgetId\":\"abcd87fe-c51f-4538-848d-2902a2f50d2d\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchResultsPageGalleryViewerWidgetNoCss.bundle.min.js\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"4425f8e8-51fb-457b-9123-fdb7b1cef94a\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/PaymentRequestViewerWidget.bundle.min.js\", \"widgetId\":\"4425f8e8-51fb-457b-9123-fdb7b1cef94a\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"bda15dc1-816d-4ff3-8dcb-1172d5343cce\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/CategoryPageViewerWidget.bundle.min.js\", \"widgetId\":\"bda15dc1-816d-4ff3-8dcb-1172d5343cce\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"14fd5970-8072-c276-1246-058b79e70c1a\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/CheckoutViewerWidget.bundle.min.js\", \"widgetId\":\"14fd5970-8072-c276-1246-058b79e70c1a\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"13ec3e79-e668-cc0c-2d48-e99d53a213dd\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-widget\\/1.2058.0\\/productWidget.bundle.min.js\", \"widgetId\":\"13ec3e79-e668-cc0c-2d48-e99d53a213dd\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"deaaaab0-f5bd-4b7a-a652-3845efcb546a\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/BundleBundleViewerWidget.bundle.min.js\", \"widgetId\":\"deaaaab0-f5bd-4b7a-a652-3845efcb546a\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"b29db04a-a8f2-4bfe-bbad-21c99c1054b5\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/MySubscriptionsViewerWidget.bundle.min.js\", \"widgetId\":\"b29db04a-a8f2-4bfe-bbad-21c99c1054b5\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf\":{\"sentryDsn\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/widgetViewerWidget.bundle.min.js\", \"widgetId\":\"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"14d2abc2-5350-6322-487d-8c16ff833c8a\":{\"sentryDsn\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\\/details-pageViewerWidget.bundle.min.js\", \"widgetId\":\"14d2abc2-5350-6322-487d-8c16ff833c8a\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"1440e92d-47d8-69be-ade7-e6de40127106\":{\"sentryDsn\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/widgetViewerWidget.bundle.min.js\", \"widgetId\":\"1440e92d-47d8-69be-ade7-e6de40127106\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"405eb115-a694-4e2b-abaa-e4762808bb93\":{\"sentryDsn\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/members-pageViewerWidget.bundle.min.js\", \"widgetId\":\"405eb115-a694-4e2b-abaa-e4762808bb93\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"29ad290c-8529-4204-8fcf-41ef46e0d3b0\":{\"sentryDsn\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/scheduleViewerWidget.bundle.min.js\", \"widgetId\":\"29ad290c-8529-4204-8fcf-41ef46e0d3b0\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"14cefc05-d163-dbb7-e4ec-cd4f2c4d6ddd\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/ProfileCardViewerWidget.bundle.min.js\", \"widgetId\":\"14cefc05-d163-dbb7-e4ec-cd4f2c4d6ddd\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/ProfileCardViewerWidgetNoCss.bundle.min.js\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"14dd1af6-3e02-63db-0ef2-72fbc7cc3136\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/MyAccountViewerWidget.bundle.min.js\", \"widgetId\":\"14dd1af6-3e02-63db-0ef2-72fbc7cc3136\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/MyAccountViewerWidgetNoCss.bundle.min.js\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"14dbefb9-3b7b-c4e9-53e8-766defd30587\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/ProfileViewerWidget.bundle.min.js\", \"widgetId\":\"14dbefb9-3b7b-c4e9-53e8-766defd30587\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/ProfileViewerWidgetNoCss.bundle.min.js\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"6467c15e-af3c-4e8d-b167-41bfb8efc32a\":{\"sentryDsn\":\"https:\\/\\/9a65e97ebe8141fca0c4fd686f70996b@sentry.wixpress.com\\/5894\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/MyWalletViewerWidget.bundle.min.js\", \"widgetId\":\"6467c15e-af3c-4e8d-b167-41bfb8efc32a\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"44c66af6-4d25-485a-ad9d-385f5460deef\":{\"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/SearchResultsViewerWidget.bundle.min.js\", \"widgetId\":\"44c66af6-4d25-485a-ad9d-385f5460deef\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/SearchResultsViewerWidgetNoCss.bundle.min.js\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"04462ba4-2137-41bd-9460-0814554aae07\":{\"sentryDsn\":\"https:\\/\\/ed436f5053144538958ad06a5005e99a@sentry.wixpress.com\\/6142\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.63.0\\/PreferencesOoiViewerWidget.bundle.min.js\", \"widgetId\":\"04462ba4-2137-41bd-9460-0814554aae07\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"14f25dd2-f9b0-edc2-f38e-eded5da094aa\":{\"sentryDsn\":\"https:\\/\\/ed436f5053144538958ad06a5005e99a@sentry.wixpress.com\\/6142\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\\/PreferencesOoiViewerWidget.bundle.min.js\", \"widgetId\":\"14f25dd2-f9b0-edc2-f38e-eded5da094aa\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"14f2595a-a352-3ff1-9b3c-4d21861fe58f\":{\"sentryDsn\":\"https:\\/\\/460ff4620fa44cba8df530afde949785@sentry.wixpress.com\\/5803\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/OoiNotificationsViewerWidget.bundle.min.js\", \"widgetId\":\"14f2595a-a352-3ff1-9b3c-4d21861fe58f\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"6ca9273a-a775-407c-87e1-9685588c9aa7\":{\"sentryDsn\":\"https:\\/\\/460ff4620fa44cba8df530afde949785@sentry.wixpress.com\\/5803\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/NotificationsViewerWidget.bundle.min.js\", \"widgetId\":\"6ca9273a-a775-407c-87e1-9685588c9aa7\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"14c1462a-97f2-9f6a-7bb7-f5541f23caa6\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/BlogViewerWidget.bundle.min.js\", \"widgetId\":\"14c1462a-97f2-9f6a-7bb7-f5541f23caa6\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/BlogViewerWidgetNoCss.bundle.min.js\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"46a9e991-c1cc-47c9-b19a-e99d3be1e2c9\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/RelatedPostsViewerWidget.bundle.min.js\", \"widgetId\":\"46a9e991-c1cc-47c9-b19a-e99d3be1e2c9\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"a0d7808c-0d7d-4a40-8cf0-911a9f0de96f\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/CategoryMenuViewerWidget.bundle.min.js\", \"widgetId\":\"a0d7808c-0d7d-4a40-8cf0-911a9f0de96f\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"c0a125b8-2311-451e-99c5-89b6bba02b22\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/TagCloudViewerWidget.bundle.min.js\", \"widgetId\":\"c0a125b8-2311-451e-99c5-89b6bba02b22\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"1515a9e7-b579-fbbb-43fc-0e3051c14803\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/RssButtonViewerWidget.bundle.min.js\", \"widgetId\":\"1515a9e7-b579-fbbb-43fc-0e3051c14803\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"2f3d2c69-2bc4-4519-bd72-0a63dd92577f\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/ArchiveViewerWidget.bundle.min.js\", \"widgetId\":\"2f3d2c69-2bc4-4519-bd72-0a63dd92577f\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"211b5287-14e2-4690-bb71-525908938c81\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostViewerWidget.bundle.min.js\", \"widgetId\":\"211b5287-14e2-4690-bb71-525908938c81\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostViewerWidgetNoCss.bundle.min.js\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":true, \"isModuleFederated\":false}, \"478911c3-de0c-469e-90e3-304f2f8cd6a7\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostTitleViewerWidget.bundle.min.js\", \"widgetId\":\"478911c3-de0c-469e-90e3-304f2f8cd6a7\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"813eb645-c6bd-4870-906d-694f30869fd9\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostListViewerWidget.bundle.min.js\", \"widgetId\":\"813eb645-c6bd-4870-906d-694f30869fd9\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"e5a2773b-0e6b-4cbb-a012-3b4a69e92046\":{\"sentryDsn\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/MyPostsViewerWidget.bundle.min.js\", \"widgetId\":\"e5a2773b-0e6b-4cbb-a012-3b4a69e92046\", \"noCssComponentUrl\":\"\", \"staticBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"isLoadable\":false, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}, \"142bb34d-3439-576a-7118-683e690a1e0d\":{\"sentryDsn\":\"https:\\/\\/8eb368c655b84e029ed79ad7a5c1718e@sentry.wixpress.com\\/3427\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/pro-gallery-tpa\\/1.1532.0\\/WixProGalleryViewerWidget.bundle.min.js\", \"widgetId\":\"142bb34d-3439-576a-7118-683e690a1e0d\", \"noCssComponentUrl\":\"\", \"isLoadable\":true, \"isServerBundled\":false, \"loadStaticCssWithLink\":false, \"isModuleFederated\":false}}, \"viewMode\":\"Site\", \"formFactor\":\"Desktop\", \"blogMobileComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/feed-page-mobile-viewer.bundle.min.js\", \"userDomainMedia\":{\"baseUrl\":\"\", \"prefixes\":[]}}, \"pagesService\":{\"pages\":{}, \"currentPageId\":\"\", \"mainPageId\":\"c1dmp\"}, \"protectedPages\":{\"passwordProtected\":{}, \"publicPageIds\":[\"v5gfm\", \"imy4p\", \"wbh7l\", \"syls5\", \"gg1rk\", \"ymezx\", \"thals\", \"kshql\", \"x1mpe\", \"e9jsz\", \"efy2o\", \"cfu3y\", \"whq86\", \"hwkr6\", \"gjatk\", \"um7z3\", \"yzozj\", \"asf6j\", \"qyyn5\", \"gvoyx\", \"crthr\", \"j3h1v\", \"w4sku\", \"whufm\", \"u5ncv\", \"hi9qs\", \"o3a3z\", \"b29ye\", \"x3vpv\", \"h483u\", \"ldw8n\", \"todeu\", \"utkvs\", \"ul3zo\", \"id3v5\", \"c1dmp\", \"s9v9x\", \"hqe3r\", \"u3h11\", \"hzskl\", \"hi6bq\", \"khq88\", \"itycd\", \"fmrkz\", \"vwems\", \"jd2ix\"], \"pageUriSeoToRouterPrefix\":{\"my-subscriptions\":\"account\", \"notifications\":\"account\", \"my-account\":\"account\", \"settings\":\"account\", \"blank-3\":\"trangmi-ebt\", \"blank-1\":\"mc-8bt\", \"blank\":\"mc-8bt\", \"profile-1\":\"profile\"}}, \"renderer\":{\"disabledComponents\":{}, \"isBuilderComponentModel\":false}, \"reporter\":{\"userId\":\"58745a76-e0c5-4f2f-9bde-555a9724b21d\", \"metaSiteId\":\"29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\", \"isPremium\":true, \"isFBServerEventsAppProvisioned\":false, \"dynamicPagesIds\":[\"bw36u\", \"v36av\", \"k9gzs\", \"bwvbz\", \"qyyn5\", \"ldw8n\", \"h483u\", \"u3h11\"]}, \"routerFetch\":{\"externalBaseUrl\":\"https:\\/\\/www.100relab.com\", \"viewMode\":\"desktop\"}, \"router\":{\"baseUrl\":\"https:\\/\\/www.100relab.com\", \"mainPageId\":\"c1dmp\", \"pagesMap\":{\"v5gfm\":{\"pageId\":\"v5gfm\", \"title\":\"SEATUC2023\", \"pageUriSEO\":\"seatuc2023\", \"pageJsonFileName\":\"58745a_b227d45f9c0078d4558ebcc5be8e0d93_605\"}, \"imy4p\":{\"pageId\":\"imy4p\", \"title\":\"100RE Lab General Meeting (2024)\", \"pageUriSEO\":\"bản-sao-của-hội-nghị-quốc-tế-gmsarn-l\", \"pageJsonFileName\":\"58745a_ca1ed3b7566f754954b5faa5bf84082c_605\"}, \"wbh7l\":{\"pageId\":\"wbh7l\", \"title\":\"Wind\", \"pageUriSEO\":\"wind\", \"pageJsonFileName\":\"58745a_0b374e1e6bc2ccfadfc2dca7238ec015_605\"}, \"syls5\":{\"pageId\":\"syls5\", \"title\":\"Japan, Sep 2023\", \"pageUriSEO\":\"japan-sep-2023\", \"pageJsonFileName\":\"58745a_336ba7ff7590be313edd61fe3862fbbc_605\"}, \"gg1rk\":{\"pageId\":\"gg1rk\", \"title\":\"Fund Raise\", \"pageUriSEO\":\"fund-raise\", \"pageJsonFileName\":\"58745a_bd0d691e23857e1d522055ae8649353a_605\"}, \"ymezx\":{\"pageId\":\"ymezx\", \"title\":\"Search Results\", \"pageUriSEO\":\"search\", \"pageJsonFileName\":\"58745a_d1d82e74d3b39399f0518e0381a257b6_606\"}, \"thals\":{\"pageId\":\"thals\", \"title\":\"Denmark, Aug 2023\", \"pageUriSEO\":\"denmark2023\", \"pageJsonFileName\":\"58745a_03505133afc2a751bdaa8708b5ebee15_605\"}, \"kshql\":{\"pageId\":\"kshql\", \"title\":\"UC\", \"pageUriSEO\":\"uc\", \"pageJsonFileName\":\"58745a_811ec7f41313679e88785e8dcf862cf3_605\"}, \"x1mpe\":{\"pageId\":\"x1mpe\", \"title\":\"Member\", \"pageUriSEO\":\"member\", \"pageJsonFileName\":\"58745a_595d6f3fd42925920ec8570c68c59a5e_605\"}, \"e9jsz\":{\"pageId\":\"e9jsz\", \"title\":\"Research Areas\", \"pageUriSEO\":\"research-areas\", \"pageJsonFileName\":\"58745a_45cb478756184da9782a5859a95364d9_605\"}, \"efy2o\":{\"pageId\":\"efy2o\", \"title\":\"How to be one of us?\", \"pageUriSEO\":\"general-5\", \"pageJsonFileName\":\"58745a_64eb95658be0025a1a132699487713a4_605\"}, \"cfu3y\":{\"pageId\":\"cfu3y\", \"title\":\"PV\", \"pageUriSEO\":\"photonvoltaic\", \"pageJsonFileName\":\"58745a_1647d6926311393b8cdc892e0467aad9_605\"}, \"whq86\":{\"pageId\":\"whq86\", \"title\":\"News\", \"pageUriSEO\":\"blog\", \"pageJsonFileName\":\"58745a_84f5ffbfeeb992284ff886c6143de50c_605\"}, \"hwkr6\":{\"pageId\":\"hwkr6\", \"title\":\"Publications\", \"pageUriSEO\":\"publications\", \"pageJsonFileName\":\"58745a_79e8b9cf96904955d6269e033322e103_605\"}, \"gjatk\":{\"pageId\":\"gjatk\", \"title\":\"Useful Links\", \"pageUriSEO\":\"useful-links\", \"pageJsonFileName\":\"58745a_a0f46a85dcb9ec34827a60d2aa013a82_605\"}, \"um7z3\":{\"pageId\":\"um7z3\", \"title\":\"Project\", \"pageUriSEO\":\"copy-of-publications\", \"pageJsonFileName\":\"58745a_0f83f5b6cbf049f106a1f82be8bf3a36_605\"}, \"k9gzs\":{\"pageId\":\"k9gzs\", \"title\":\"My Account\", \"pageUriSEO\":\"my-account\"}, \"yzozj\":{\"pageId\":\"yzozj\", \"title\":\"AI\", \"pageUriSEO\":\"ai\", \"pageJsonFileName\":\"58745a_31b43dedf235f0b7e0fd1438ccfb31d2_605\"}, \"asf6j\":{\"pageId\":\"asf6j\", \"title\":\"DR\", \"pageUriSEO\":\"dr\", \"pageJsonFileName\":\"58745a_27fc1e8d5c427d323599bc3b952b15b9_605\"}, \"v36av\":{\"pageId\":\"v36av\", \"title\":\"Notifications\", \"pageUriSEO\":\"notifications\"}, \"qyyn5\":{\"pageId\":\"qyyn5\", \"title\":\"Trang mới (All)\", \"pageUriSEO\":\"blank-3\", \"pageJsonFileName\":\"58745a_6a2e1d67eba75fff9c99826b77ceae9e_605\"}, \"gvoyx\":{\"pageId\":\"gvoyx\", \"title\":\"ABB Scholarship 2022\", \"pageUriSEO\":\"abb-scholarship-2022\", \"pageJsonFileName\":\"58745a_e2b240bb40c30553741036d12c959b20_605\"}, \"crthr\":{\"pageId\":\"crthr\", \"title\":\"Tập huấn về năng lượng bền vững (SE4Y)\", \"pageUriSEO\":\"tập-huấn-về-năng-lượng-bền-vững-se4y\", \"pageJsonFileName\":\"58745a_24de1e3c04590fcea869781be982c048_605\"}, \"j3h1v\":{\"pageId\":\"j3h1v\", \"title\":\"Collaborations\", \"pageUriSEO\":\"collaborations\", \"pageJsonFileName\":\"58745a_69b450a9f2ecc27ee1abb62f17d4faf6_605\"}, \"w4sku\":{\"pageId\":\"w4sku\", \"title\":\"Research Areas\", \"pageUriSEO\":\"news\", \"pageJsonFileName\":\"58745a_0c93adb6da75d77a60be2b917368cc9f_605\"}, \"whufm\":{\"pageId\":\"whufm\", \"title\":\"SG\", \"pageUriSEO\":\"sg\", \"pageJsonFileName\":\"58745a_fbee08389c1a592495ea399182b70019_605\"}, \"u5ncv\":{\"pageId\":\"u5ncv\", \"title\":\"Mini Scada\", \"pageUriSEO\":\"bản-sao-của-fund-raise\", \"pageJsonFileName\":\"58745a_a3db13db150c81576713550158042740_605\"}, \"hi9qs\":{\"pageId\":\"hi9qs\", \"title\":\"Tọađàm 29.08.2023\", \"pageUriSEO\":\"toadam29082023\", \"pageJsonFileName\":\"58745a_1422b70e6f206a1a1099c642c5b81fc8_605\"}, \"o3a3z\":{\"pageId\":\"o3a3z\", \"title\":\"News\", \"pageUriSEO\":\"news-1\", \"pageJsonFileName\":\"58745a_1748690c92aff913292bfe9076e53c2f_605\"}, \"b29ye\":{\"pageId\":\"b29ye\", \"title\":\"Washington DC, July 2023\", \"pageUriSEO\":\"washingtondc-2023\", \"pageJsonFileName\":\"58745a_3db69168b91bc36c6d4b1a7b6a36e1d3_605\"}, \"x3vpv\":{\"pageId\":\"x3vpv\", \"title\":\"SVNCKH2022\", \"pageUriSEO\":\"svnckh2022\", \"pageJsonFileName\":\"58745a_f7dbfed9af9932ddddef2ec0f3f98614_605\"}, \"h483u\":{\"pageId\":\"h483u\", \"title\":\"Mục (Title)\", \"pageUriSEO\":\"blank\", \"pageJsonFileName\":\"58745a_d92a99916a8b34e262caed461de3bb41_605\"}, \"ldw8n\":{\"pageId\":\"ldw8n\", \"title\":\"Mục (All)\", \"pageUriSEO\":\"blank-1\", \"pageJsonFileName\":\"58745a_d804fa94607251e8bf63ccdd103659b0_605\"}, \"todeu\":{\"pageId\":\"todeu\", \"title\":\"2nd Regional CSO Energy Workshop & Train\", \"pageUriSEO\":\"copy-of-seatuc2023\", \"pageJsonFileName\":\"58745a_65cf1982cdec0027eca51e2c83eff772_605\"}, \"utkvs\":{\"pageId\":\"utkvs\", \"title\":\"SAKURA SCHOLARSHIP PROGRAM 2023\", \"pageUriSEO\":\"sakura\", \"pageJsonFileName\":\"58745a_67338fd0a32a3477db44c49e95e42f35_605\"}, \"ul3zo\":{\"pageId\":\"ul3zo\", \"title\":\"Hội nghị quốc tế GMSARN lần thứ 18\", \"pageUriSEO\":\"dhbkhn-gmsarn18\", \"pageJsonFileName\":\"58745a_385fb09d9dbd4c38c7f81ba4b33133b5_605\"}, \"id3v5\":{\"pageId\":\"id3v5\", \"title\":\"Achievement\", \"pageUriSEO\":\"achievement\", \"pageJsonFileName\":\"58745a_b156227495fcdb072e6aaed1de53ff67_605\"}, \"c1dmp\":{\"pageId\":\"c1dmp\", \"title\":\"About\", \"pageUriSEO\":\"about\", \"pageJsonFileName\":\"58745a_c429fd03774b3ff6234a2b522e72ae21_607\"}, \"s9v9x\":{\"pageId\":\"s9v9x\", \"title\":\"ĐÓNĐẦU LÀN SÓNG CHUYỂNĐỔI XANH \", \"pageUriSEO\":\"dondauchuyendoixanhnganhdien\", \"pageJsonFileName\":\"58745a_32e62091855684e5d138a511529c0fe7_605\"}, \"bw36u\":{\"pageId\":\"bw36u\", \"title\":\"Góiđăng ký của tôi\", \"pageUriSEO\":\"my-subscriptions\"}, \"hqe3r\":{\"pageId\":\"hqe3r\", \"title\":\"EV & BESS\", \"pageUriSEO\":\"bess\", \"pageJsonFileName\":\"58745a_8bb16d54c8fabba6d0bdfba2e8ab9836_605\"}, \"u3h11\":{\"pageId\":\"u3h11\", \"title\":\"Profile\", \"pageUriSEO\":\"profile-1\", \"pageJsonFileName\":\"58745a_0377c5812e5455a688d0011aef5d96e4_605\"}, \"hzskl\":{\"pageId\":\"hzskl\", \"title\":\"Fullscreen Page\", \"pageUriSEO\":\"fullscreen-page\", \"pageJsonFileName\":\"58745a_55a357008ea7538c205c04e8e7332c70_606\"}, \"hi6bq\":{\"pageId\":\"hi6bq\", \"title\":\"H2\", \"pageUriSEO\":\"h2\", \"pageJsonFileName\":\"58745a_70f2889eb6537f553dd7eb7c9cade391_605\"}, \"khq88\":{\"pageId\":\"khq88\", \"title\":\"Research Experiences\", \"pageUriSEO\":\"research-experiences\", \"pageJsonFileName\":\"58745a_b58403f2183d9bf52921dc9f9fb41ce6_605\"}, \"bwvbz\":{\"pageId\":\"bwvbz\", \"title\":\"Settings\", \"pageUriSEO\":\"settings\"}, \"itycd\":{\"pageId\":\"itycd\", \"title\":\"100RE Lab Trip 2023\", \"pageUriSEO\":\"100relab-trip-2023\", \"pageJsonFileName\":\"58745a_3a0db373ff7e76914d6e13b1c1d3e869_605\"}, \"fmrkz\":{\"pageId\":\"fmrkz\", \"title\":\"Alumni\", \"pageUriSEO\":\"100relabalumni\", \"pageJsonFileName\":\"58745a_35b004ac0f05d0b8d5bdbeb4849e0a7f_605\"}, \"vwems\":{\"pageId\":\"vwems\", \"title\":\"Bàiđăng\", \"pageUriSEO\":\"post\", \"pageJsonFileName\":\"58745a_861071725dc54d68e41b3fb9c8a3b891_605\"}, \"jd2ix\":{\"pageId\":\"jd2ix\", \"title\":\"Photos\", \"pageUriSEO\":\"photo\", \"pageJsonFileName\":\"58745a_943327c89aa44dd068b12aa675c4bced_605\"}}, \"disableStaticPagesUrlHierarchy\":false, \"routes\":{\".\\/seatuc2023\":{\"type\":\"Static\", \"pageId\":\"v5gfm\"}, \".\\/bản-sao-của-hội-nghị-quốc-tế-gmsarn-l\":{\"type\":\"Static\", \"pageId\":\"imy4p\"}, \".\\/wind\":{\"type\":\"Static\", \"pageId\":\"wbh7l\"}, \".\\/japan-sep-2023\":{\"type\":\"Static\", \"pageId\":\"syls5\"}, \".\\/fund-raise\":{\"type\":\"Static\", \"pageId\":\"gg1rk\"}, \".\\/search\":{\"type\":\"Static\", \"pageId\":\"ymezx\"}, \".\\/denmark2023\":{\"type\":\"Static\", \"pageId\":\"thals\"}, \".\\/uc\":{\"type\":\"Static\", \"pageId\":\"kshql\"}, \".\\/member\":{\"type\":\"Static\", \"pageId\":\"x1mpe\"}, \".\\/research-areas\":{\"type\":\"Static\", \"pageId\":\"e9jsz\"}, \".\\/general-5\":{\"type\":\"Static\", \"pageId\":\"efy2o\"}, \".\\/photonvoltaic\":{\"type\":\"Static\", \"pageId\":\"cfu3y\"}, \".\\/blog\":{\"type\":\"Static\", \"pageId\":\"whq86\"}, \".\\/publications\":{\"type\":\"Static\", \"pageId\":\"hwkr6\"}, \".\\/useful-links\":{\"type\":\"Static\", \"pageId\":\"gjatk\"}, \".\\/copy-of-publications\":{\"type\":\"Static\", \"pageId\":\"um7z3\"}, \".\\/ai\":{\"type\":\"Static\", \"pageId\":\"yzozj\"}, \".\\/dr\":{\"type\":\"Static\", \"pageId\":\"asf6j\"}, \".\\/abb-scholarship-2022\":{\"type\":\"Static\", \"pageId\":\"gvoyx\"}, \".\\/tập-huấn-về-năng-lượng-bền-vững-se4y\":{\"type\":\"Static\", \"pageId\":\"crthr\"}, \".\\/collaborations\":{\"type\":\"Static\", \"pageId\":\"j3h1v\"}, \".\\/news\":{\"type\":\"Static\", \"pageId\":\"w4sku\"}, \".\\/sg\":{\"type\":\"Static\", \"pageId\":\"whufm\"}, \".\\/bản-sao-của-fund-raise\":{\"type\":\"Static\", \"pageId\":\"u5ncv\"}, \".\\/toadam29082023\":{\"type\":\"Static\", \"pageId\":\"hi9qs\"}, \".\\/news-1\":{\"type\":\"Static\", \"pageId\":\"o3a3z\"}, \".\\/washingtondc-2023\":{\"type\":\"Static\", \"pageId\":\"b29ye\"}, \".\\/svnckh2022\":{\"type\":\"Static\", \"pageId\":\"x3vpv\"}, \".\\/copy-of-seatuc2023\":{\"type\":\"Static\", \"pageId\":\"todeu\"}, \".\\/sakura\":{\"type\":\"Static\", \"pageId\":\"utkvs\"}, \".\\/dhbkhn-gmsarn18\":{\"type\":\"Static\", \"pageId\":\"ul3zo\"}, \".\\/achievement\":{\"type\":\"Static\", \"pageId\":\"id3v5\"}, \".\\/about\":{\"type\":\"Static\", \"pageId\":\"c1dmp\"}, \".\\/dondauchuyendoixanhnganhdien\":{\"type\":\"Static\", \"pageId\":\"s9v9x\"}, \".\\/bess\":{\"type\":\"Static\", \"pageId\":\"hqe3r\"}, \".\\/fullscreen-page\":{\"type\":\"Static\", \"pageId\":\"hzskl\"}, \".\\/h2\":{\"type\":\"Static\", \"pageId\":\"hi6bq\"}, \".\\/research-experiences\":{\"type\":\"Static\", \"pageId\":\"khq88\"}, \".\\/100relab-trip-2023\":{\"type\":\"Static\", \"pageId\":\"itycd\"}, \".\\/100relabalumni\":{\"type\":\"Static\", \"pageId\":\"fmrkz\"}, \".\\/post\":{\"type\":\"Static\", \"pageId\":\"vwems\"}, \".\\/photo\":{\"type\":\"Static\", \"pageId\":\"jd2ix\"}, \".\\/account\":{\"type\":\"Dynamic\", \"pageIds\":[\"bw36u\", \"v36av\", \"k9gzs\", \"bwvbz\"]}, \".\\/trangmi-ebt\":{\"type\":\"Dynamic\", \"pageIds\":[\"qyyn5\"]}, \".\\/mc-8bt\":{\"type\":\"Dynamic\", \"pageIds\":[\"ldw8n\", \"h483u\"]}, \".\\/profile\":{\"type\":\"Dynamic\", \"pageIds\":[\"u3h11\"]}, \".\\/\":{\"type\":\"Static\", \"pageId\":\"c1dmp\"}}, \"pageIdToPrefix\":{\"bw36u\":\"account\", \"v36av\":\"account\", \"k9gzs\":\"account\", \"bwvbz\":\"account\", \"qyyn5\":\"trangmi-ebt\", \"ldw8n\":\"mc-8bt\", \"h483u\":\"mc-8bt\", \"u3h11\":\"profile\"}, \"isWixSite\":false, \"isBuilderComponentModel\":false, \"partialRouteMatchingAllowed\":true}, \"searchWixCodeSdk\":{\"language\":\"en\"}, \"seo\":{\"context\":{\"siteName\":\"100RE LABORATORY\", \"siteUrl\":\"https:\\/\\/www.100relab.com\", \"domain\":\"100relab.com\", \"indexSite\":true, \"defaultUrl\":\"https:\\/\\/www.100relab.com\\/publications\", \"currLangIsOriginal\":true, \"homePageTitle\":\"About\", \"businessName\":\"100RE\", \"businesLocale\":\"vi-vn\", \"businesLogo\":\"https:\\/\\/static.wixstatic.com\\/media\\/a048e8_ee59ad940cf341e2b553a3bc12832fb9~mv2.png\", \"businessLocationCountry\":\"VN\", \"businessLocationFormatted\":\"Hanoi University of Science and Technology, ĐườngĐại Cồ Việt, Bach Mai, Ha Noi, Vietnam\", \"businesLocationsState\":\"HN\", \"businessLocationCity\":\"TP. Hà Nội\", \"businessPostalCode\":\"100000\", \"businessLocationCoordinates\":{\"latitude\":21.0061832, \"longitude\":105.8431307}, \"currency\":\"VND\", \"experiments\":{\"specs.seo.EnableFaqSD\":\"false\", \"specs.seo.enableLangCheck\":\"true\", \"specs.seo.useChunkedSiteStructureForMembersArea\":\"true\"}, \"platformAppsExperiments\":{\"14f25924-5664-31b2-9568-f9c5ed98c9b1\":{\"specs.ping.membersAreaNotifications.useIntlInsteadOfMoment\":\"true\", \"specs.ping.MANotifications.useMAWidgetPluginService\":\"true\"}, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":{\"specs.pro-gallery.displayPreset14\":\"true\", \"specs.pro-gallery.removeUseOfCounterApi\":\"true\", \"specs.pro-gallery.horizontalScrollAnimations\":\"true\", \"specs.pro-gallery.useImageAvifFormat\":\"true\", \"specs.pro-gallery.EnableAlbumsStorePremiumValidation\":\"true\", \"specs.pro-gallery.removePgStoreTab\":\"true\", \"specs.pro-gallery.backgroundDesignFullscreen\":\"true\", \"specs.pro-gallery.useMotherSiteAppInstance\":\"true\", \"specs.pro-gallery.addSEOVideoMetaTags\":\"false\", \"specs.pro-gallery.enableMainLightroomSettingsButton\":\"true\", \"specs.pro-gallery.displayPreset17\":\"false\", \"specs.pro-gallery.slideTransition\":\"true\", \"specs.proGallery.shouldShowNewPanels\":\"false\", \"specs.pro-gallery.displayProGalleryPresets\":\"true\", \"specs.pro-gallery.navigationArrowsDrawer\":\"true\", \"specs.pro-gallery.horizontalTitlePlacementOptions\":\"true\", \"specs.pro-gallery.artstoreShowDeprecationMessageInSettings\":\"false\", \"useProGalleryNewServices\":\"A\", \"specs.pro-gallery.navArrowsVericalPositionController\":\"true\", \"specs.pro-gallery.enablePGRenderIndicator\":\"false\", \"specs.pro-gallery.excludeFromWarmupData\":\"false\", \"specs.pro-gallery.customNavigationArrows\":\"true\", \"specs.pro-gallery.fixedGalleryRatio\":\"true\", \"specs.pro-gallery.displayProGalleryNewPreset\":\"true\", \"specs.pro-gallery.useReactionService\":\"true\", \"specs.pro-gallery.textBoxWidthControllers\":\"true\", \"specs.pro-gallery.allowOverlayGradient\":\"true\", \"specs.pro-gallery.excludeFromLayoutFixer\":\"false\", \"specs.pro-gallery.useIsInFirstFold\":\"false\", \"specs.pro-gallery.dontRenderGalleryBelowFoldOnLoad\":\"false\", \"specs.pro-gallery.enableLightroomSettingsButton\":\"true\", \"specs.pro-gallery.displayPreset16\":\"true\", \"specs.pro-gallery.displayProGallerySEOSettings\":\"false\", \"specs.pro-gallery.imageEditing\":\"b\", \"specs.pro-gallery.useWowImageRenderer\":\"false\", \"specs.pro-gallery.useWarmupData\":\"true\", \"specs.pro-gallery.enableFullResFeature\":\"true\", \"specs.pro-gallery.slideAnimationDeck\":\"true\", \"specs.pro-gallery.useReactPortalInArtStore\":\"true\", \"specs.pro-gallery.blockOAP\":\"false\", \"specs.pro-gallery.useServerBlueprints-viewer\":\"false\", \"specs.pro-gallery.excludeFromThinLinesFix\":\"false\", \"specs.pro-gallery.excludeFromHlsVideosOnIphone\":\"true\", \"excludeFromHlsVideosNew\":\"A\", \"specs.pro-gallery.removeRoleApplication\":\"true\", \"specs.pro-gallery.tryCentralizedConduction\":\"false\", \"specs.pro-gallery.organizeMediaMultiTypes\":\"true\", \"specs.pro-gallery.useServerBlueprints-preview\":\"false\", \"specs.pro-gallery.displayPreset15\":\"true\", \"specs.pro-gallery.enableVideoPlaceholder\":\"true\", \"specs.pro-gallery.organizeMediaAltText\":\"b\", \"specs.pro-gallery.overlayDesign\":\"true\", \"specs.pro-gallery.shouldUseVirtualization\":\"true\", \"specs.pro-gallery.disableImagePreload\":\"true\", \"specs.pro-gallery.excludeFromPrerenderPerformance\":\"false\", \"specs.pro-gallery.appSettings\":\"true\"}, \"2bef2abe-7abe-43da-889c-53c1500a328c\":{\"specs.subscriptionsTpa.ShowLastNextCharge\":\"true\", \"specs.premium.subscriptions-tpa.VerifyGracePeriodBeforePayNow\":\"true\", \"specs.subscriptions-tpa.showBenefitsScheduler\":\"true\", \"specs.subscriptions-tpa.showNewBenefitPrograms\":\"true\", \"specs.premium.subscriptions-tpa.enablePagnination\":\"true\", \"specs.premium.subscriptions-tpa.UseInitiatePaymentMethodSetup\":\"true\", \"specs.premium.subscriptions-tpa.fixSessionsOnEcom\":\"true\", \"specs.EnableAllowedActionsIsAllowedIndicator\":\"true\", \"specs.subscriptionsTpa.SkipSubscriptionsMembersArea\":\"false\", \"specs.premium.subscriptions-tpa.advancedPauseResume\":\"false\", \"specs.subscriptionsTpa.UseBassAPI\":\"true\"}, \"14409595-f076-4753-8303-9a86f9f71469\":{\"vodMigrateToEntitlements\":\"A\", \"specs.vod.iosHlsJsOverrideNative\":\"true\", \"specs.vod.VodWidgetNewSettingsResponsive\":\"true\", \"vodMigrateThumbnailsWDS\":\"A\", \"vodMigrateThumbnailsToWDS\":\"A\", \"specs.vod.OoiEditorFlow\":\"true\"}, \"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":{\"loginSocialBarBuyAgain\":\"B\", \"specs.ping.membersAreaUseNotificationsV2Api\":\"true\", \"specs.membersArea.addStandalonePageRoutesToPublicAppData\":\"true\", \"specs.membersArea.useScalableDimensionsForLoginBarOnE3\":\"true\", \"specs.membersArea.addNavigationIntentParams\":\"true\", \"specs.membersArea.EnableDependencyInstallationCheck\":\"true\", \"specs.membersArea.enableAppData\":\"true\", \"specs.membersArea.normalizeMenuItemsLinkMetaData\":\"true\", \"specs.membersArea.APIRaceConditionHandling\":\"true\"}, \"14dbef06-cc42-5583-32a7-3abd44da4908\":{\"specs.UouSubscriptionServiceUseApiGatewayClient\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppStudio2\":\"true\", \"specs.membersArea.DoNotWaitInstallNavigation\":\"true\", \"specs.membersArea.UseMembersNgApiUpdate\":\"false\", \"specs.members.FollowersAudienceProvider\":\"false\", \"specs.media.MediaManager3\":\"true\", \"specs.ricos.newFormattingToolbar\":\"true\", \"specs.membersArea.showCascadingIndicators\":\"true\", \"specs.membersArea.HideMemberSortField\":\"true\", \"specs.membersArea.DisableLivePreviewRefreshes\":\"true\", \"specs.membersArea.CheckUserContributorPermissions\":\"true\", \"specs.membersArea.CheckIsAppActiveBeforeInstallV1\":\"true\", \"specs.membersArea.UseGetMyMemberInMemberHandler\":\"true\", \"specs.membersArea.EnableMembersAreaContextCheck\":\"true\", \"specs.membersArea.AddSuspendedFilter\":\"true\", \"specs.membersfollow.ActivityCounters\":\"true\", \"specs.membersArea.ShowPageRedirectNote\":\"true\", \"specs.membersArea.ExtendedUninstallMASubApps\":\"true\", \"specs.membersArea.UseViewedMemberBlocked\":\"true\", \"specs.membersArea.UseFollowersV3\":\"true\", \"specs.members.enableMuteMembersSkill\":\"true\", \"specs.myAccount.ShowBlockedMembersModalEmptyState\":\"true\", \"specs.membersArea.enableTimeoutLogs\":\"false\", \"specs.membersArea.GetRoutesUseGlobal\":\"true\", \"specs.membersArea.ShouldOpenPropertyInDevCenter\":\"false\", \"specs.membersApi.UseProfilesApiForTitleAndCoverWrites\":\"true\", \"specs.membersArea.EnableLoginBarComponentExtension\":\"true\", \"specs.members.enableUpdateCustomFieldSkill\":\"true\", \"specs.membersArea.ShowNewFFBorderSettings\":\"true\", \"specs.membersArea.AddNotificationsIconOnV2\":\"true\", \"specs.membersAbout.EnableWDSPanels\":\"true\", \"specs.membersArea.AllowInstallingProfileE3\":\"true\", \"specs.members.enableHideCustomFieldSkill\":\"true\", \"specs.members.LogUpdateMemberRequest\":\"false\", \"specs.membersArea.installationSourceOfTruth\":\"true\", \"specs.membersAreaV2.HidePermissionsPanelOnPrivateMA\":\"false\", \"specs.wixRicos.withWixStyles\":\"true\", \"specs.responsive-editor.NoMeasureInstall\":\"true\", \"specs.members.enableDeleteCustomFieldSkill\":\"true\", \"specs.membersArea.SkipTemplateHandlerForSettings\":\"false\", \"specs.membersArea.UsePopoverDynamicPositioning\":\"true\", \"specs.membersArea.MemberHandlerUseMembersNgApi\":\"true\", \"specs.membersArea.EnableMyAccountParallelInstall\":\"true\", \"specs.membersArea.UseMembersNgApi\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppEditor3\":\"true\", \"specs.membersArea.DoNotCreateTeamMember\":\"false\", \"specs.membersArea.NotificationsIconFixerOnV2\":\"true\", \"specs.ricos-server.resolveParentPagePath\":\"true\", \"specs.membersArea.ConsumeMembersPiiExchangeDomainEvents\":\"true\", \"specs.membersAbout.UseResponsivePostsCover\":\"true\", \"specs.membersAbout.UseNewPostsCoverDefaults\":\"true\", \"specs.membersArea.ShowMoreMembersWithBadge\":\"false\", \"specs.membersAbout.EnableAboutContainerStyles\":\"true\", \"specs.membersAboutOOI.DisableButtonOnPublish\":\"true\", \"specs.ricos.enablePages\":\"true\", \"specs.membersArea.AddRevisionField\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV2MenuItems\":\"true\", \"specs.membersArea.AddManageMemberAccessAction\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV3MenuItems\":\"true\", \"specs.membersArea.EnableDependencyInstallationCheck\":\"true\", \"specs.ident.SiteMembersSocialDisclaimer\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV3\":\"true\", \"migrateDisconnectedLoginBars\":\"B\", \"specs.membersArea.UseQueryMembersTextSearch\":\"true\", \"specs.membersAreaV2.EnablePageInfoPanelCustomPage\":\"false\", \"specs.membersArea.SkipRolesSyncOnMemberCreated\":\"true\", \"specs.myAccount.showBlockedMembersModalRedesign\":\"true\", \"specs.membersArea.MetaSiteSpecialConsumerV2\":\"true\", \"specs.members.enableUnmuteMembersSkill\":\"true\", \"specs.membersArea.UseMembersAboutV2\":\"true\", \"specs.members.enableCreateBadgeSkill\":\"true\", \"specs.ricos.enableSmartBlock\":\"true\", \"specs.profileCard.HideMessageButtonForNonSocialChatUsers\":\"false\", \"specs.membersArea.HideSuspendedLabelForNonOwners\":\"true\", \"enableNewThumbnailSkinsForMembersAreaPanels\":\"A\", \"specs.membersArea.UseApplyChangeToAllLanguagesForMaV2\":\"true\", \"specs.membersArea.SortByNumbersInElastic\":\"true\", \"specs.myAccount.ShowPrivacySettingsMessageForSiteOwners\":\"true\", \"specs.membersArea.UninstallMASubApps\":\"true\", \"specs.membersArea.UseAppDataForRoutes\":\"true\", \"specs.membersArea.CreateMissingMember\":\"true\", \"specs.membersArea.EnableMenusDataFixer\":\"true\", \"specs.members.usePlatformizedServicesForUpdate\":\"true\", \"specs.badges.shouldUseBadgesV3InEdm\":\"true\", \"specs.membersArea.HideSuspendedLabelForNonOwnersFFBox\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV2\":\"true\", \"specs.membersArea.EnableMemberPagePermissions\":\"false\", \"specs.membersArea.UseIsPermittedOnMediaCredentials\":\"true\", \"specs.membersArea.fixLoginBarResponsiveLayout\":\"true\", \"specs.membersAbout.EnableAccessibleRCE\":\"true\", \"specs.membersArea.EnableV2SilentInstall\":\"true\", \"specs.membersArea.EnableInstallationTimeout\":\"false\", \"specs.membersAbout.EnableAboutMiddleware\":\"true\", \"specs.members.enableManageMemberPrivacySkill\":\"true\", \"specs.membersAreaV3.ReAddPageWorkaround\":\"true\", \"specs.membersArea.OptimizeVerticalDeletion\":\"true\", \"specs.membersAbout.EnableCSSIndicators\":\"true\", \"specs.membersArea.EnableFollowersAsLightbox\":\"true\", \"specs.membersArea.UseGetOrCreateMemberV2\":\"true\", \"specs.members.enableCreateCustomFieldSkill\":\"true\", \"specs.membersArea.migrateToV2\":\"false\", \"specs.membersArea.ClearSettings\":\"true\", \"specs.membersAbout.EnableHtmlTagSettings\":\"true\", \"specs.membersArea.ShowHeadingLevelSettings\":\"true\"}, \"dataBinding\":{\"specs.wixDataViewer.NewCoreImageStaticBinding\":\"false\", \"specs.wixDataViewer.useGetForSchemaBulk\":\"false\", \"specs.wixDataViewer.fetchOnlyConnectedFields\":\"true\", \"specs.wixDataViewer.deferredIsDead\":\"true\", \"specs.wixDataViewer.NewCoreFormatters\":\"false\", \"cmsViewerSyncTextInputValuesBeforeSave\":\"A\"}, \"14cffd81-5215-0a7f-22f8-074b0e2401fb\":{\"specs.UouSubscriptionServiceUseApiGatewayClient\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppStudio2\":\"true\", \"specs.membersArea.DoNotWaitInstallNavigation\":\"true\", \"specs.membersArea.UseMembersNgApiUpdate\":\"false\", \"specs.members.FollowersAudienceProvider\":\"false\", \"specs.media.MediaManager3\":\"true\", \"specs.membersArea.showCascadingIndicators\":\"true\", \"specs.membersArea.HideMemberSortField\":\"true\", \"specs.membersArea.DisableLivePreviewRefreshes\":\"true\", \"specs.membersArea.CheckUserContributorPermissions\":\"true\", \"specs.membersArea.CheckIsAppActiveBeforeInstallV1\":\"true\", \"specs.membersArea.UseGetMyMemberInMemberHandler\":\"true\", \"specs.membersArea.EnableMembersAreaContextCheck\":\"true\", \"specs.membersArea.AddSuspendedFilter\":\"true\", \"specs.membersfollow.ActivityCounters\":\"true\", \"specs.membersArea.ShowPageRedirectNote\":\"true\", \"specs.membersArea.ExtendedUninstallMASubApps\":\"true\", \"specs.membersArea.ChangeLoginInfo\":\"true\", \"specs.membersArea.UseViewedMemberBlocked\":\"true\", \"specs.membersArea.UseFollowersV3\":\"true\", \"specs.members.enableMuteMembersSkill\":\"true\", \"specs.myAccount.ShowBlockedMembersModalEmptyState\":\"true\", \"specs.membersArea.enableTimeoutLogs\":\"false\", \"specs.membersArea.GetRoutesUseGlobal\":\"true\", \"specs.membersArea.ShouldOpenPropertyInDevCenter\":\"false\", \"specs.myAccount.EnablePhoneNumberValidation\":\"true\", \"specs.membersApi.UseProfilesApiForTitleAndCoverWrites\":\"true\", \"specs.membersArea.EnableLoginBarComponentExtension\":\"true\", \"specs.members.enableUpdateCustomFieldSkill\":\"true\", \"specs.membersArea.ShowNewFFBorderSettings\":\"true\", \"specs.membersArea.AddNotificationsIconOnV2\":\"true\", \"specs.membersArea.AllowInstallingProfileE3\":\"true\", \"specs.members.enableHideCustomFieldSkill\":\"true\", \"specs.members.LogUpdateMemberRequest\":\"false\", \"specs.myAccount.EnableCSSIndicators\":\"true\", \"specs.membersArea.installationSourceOfTruth\":\"true\", \"specs.membersAreaV2.HidePermissionsPanelOnPrivateMA\":\"false\", \"specs.myAccount.EnableDatePickerStyling\":\"true\", \"specs.responsive-editor.NoMeasureInstall\":\"true\", \"specs.members.enableDeleteCustomFieldSkill\":\"true\", \"specs.membersArea.SkipTemplateHandlerForSettings\":\"false\", \"specs.membersArea.UsePopoverDynamicPositioning\":\"true\", \"specs.membersArea.MemberHandlerUseMembersNgApi\":\"true\", \"specs.membersArea.EnableMyAccountParallelInstall\":\"true\", \"specs.membersArea.UseMembersNgApi\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppEditor3\":\"true\", \"specs.membersArea.DoNotCreateTeamMember\":\"false\", \"specs.membersArea.NotificationsIconFixerOnV2\":\"true\", \"specs.myAccount.EnableHtmlTagSettings\":\"true\", \"specs.membersArea.ConsumeMembersPiiExchangeDomainEvents\":\"true\", \"specs.membersArea.ShowMoreMembersWithBadge\":\"false\", \"specs.membersArea.AddRevisionField\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV2MenuItems\":\"true\", \"specs.membersArea.AddManageMemberAccessAction\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV3MenuItems\":\"true\", \"specs.membersArea.EnableDependencyInstallationCheck\":\"true\", \"specs.ident.SiteMembersSocialDisclaimer\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV3\":\"true\", \"migrateDisconnectedLoginBars\":\"B\", \"specs.membersArea.UseQueryMembersTextSearch\":\"true\", \"specs.membersAreaV2.EnablePageInfoPanelCustomPage\":\"false\", \"specs.membersArea.SkipRolesSyncOnMemberCreated\":\"true\", \"specs.myAccount.showBlockedMembersModalRedesign\":\"true\", \"specs.membersArea.MetaSiteSpecialConsumerV2\":\"true\", \"specs.myAccount.EnableMyAccountMiddleware\":\"true\", \"specs.members.enableUnmuteMembersSkill\":\"true\", \"specs.membersArea.UseMembersAboutV2\":\"true\", \"specs.members.enableCreateBadgeSkill\":\"true\", \"specs.profileCard.HideMessageButtonForNonSocialChatUsers\":\"false\", \"specs.myAccount.EnableUrlEditNote\":\"true\", \"specs.membersArea.HideSuspendedLabelForNonOwners\":\"true\", \"enableNewThumbnailSkinsForMembersAreaPanels\":\"A\", \"specs.membersArea.UseApplyChangeToAllLanguagesForMaV2\":\"true\", \"specs.myAccount.ShowButtonTextSetting\":\"true\", \"specs.membersArea.SortByNumbersInElastic\":\"true\", \"specs.myAccount.ShowPrivacySettingsMessageForSiteOwners\":\"true\", \"specs.membersArea.UninstallMASubApps\":\"true\", \"specs.membersArea.UseAppDataForRoutes\":\"true\", \"specs.membersArea.CreateMissingMember\":\"true\", \"specs.membersArea.EnableMenusDataFixer\":\"true\", \"specs.members.usePlatformizedServicesForUpdate\":\"true\", \"specs.badges.shouldUseBadgesV3InEdm\":\"true\", \"specs.membersArea.HideSuspendedLabelForNonOwnersFFBox\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV2\":\"true\", \"specs.membersArea.EnableMemberPagePermissions\":\"false\", \"specs.membersArea.UseIsPermittedOnMediaCredentials\":\"true\", \"specs.membersArea.fixLoginBarResponsiveLayout\":\"true\", \"specs.membersArea.EnableV2SilentInstall\":\"true\", \"specs.membersArea.EnableInstallationTimeout\":\"false\", \"specs.members.enableManageMemberPrivacySkill\":\"true\", \"specs.membersAreaV3.ReAddPageWorkaround\":\"true\", \"specs.membersArea.OptimizeVerticalDeletion\":\"true\", \"specs.myAccount.EnableDesignTabResetButtonPerPage\":\"true\", \"specs.myAccount.EnableLoginAndAddressInTextsTab\":\"true\", \"specs.membersArea.EnableFollowersAsLightbox\":\"true\", \"specs.membersArea.UseGetOrCreateMemberV2\":\"true\", \"specs.members.enableCreateCustomFieldSkill\":\"true\", \"specs.myAccount.EnableWDSPanels\":\"true\", \"specs.membersArea.migrateToV2\":\"false\", \"specs.membersArea.ClearSettings\":\"true\", \"specs.myAccount.EnableAllSubdivisionsInAddressForm\":\"true\", \"specs.membersArea.ShowHeadingLevelSettings\":\"true\"}, \"148c2287-c669-d849-d153-463c7486a694\":{\"specs.groups.CustomTabContentType\":\"RICH_CONTENT\", \"specs.groups.UpdateSidebarLayout\":\"true\", \"specs.ricos.newFormattingToolbar\":\"true\", \"specs.groups.PublicGroupRestriction\":\"true\", \"specs.groups.UpdatedMemberPermissions\":\"true\", \"specs.groups.cssPBI\":\"true\", \"specs.groups.TopicsLayoutRedesign\":\"true\", \"specs.groups.SEO-subtitle\":\"true\", \"specs.groups.ResizeTopics\":\"true\", \"specs.wixRicos.withWixStyles\":\"true\", \"specs.groups.OOIPrivateProfileJoinPP\":\"true\", \"specs.groups.events-by-uou\":\"true\", \"specs.ricos-server.resolveParentPagePath\":\"true\", \"specs.groups.EnableMembersAreaFeedItemComments\":\"true\", \"specs.groups.newNotificationsScreens\":\"true\", \"spec.groups.TitlesAddOns\":\"true\", \"specs.groups.PP3migrationOOI\":\"true\", \"specs.ricos.enablePages\":\"true\", \"specs.groups.CentralFeedContentType\":\"RICH_CONTENT\", \"specs.groups.FeedItemViews\":\"true\", \"specs.groups.GroupFeedContentType\":\"RICH_CONTENT\", \"specs.groups.AllowToAddImageAltText\":\"false\", \"enableThumbnailSkinMigrationForGroups\":\"A\", \"specs.groups.GroupPrivacyLabel\":\"true\", \"specs.groups.MemberOnboarding\":\"true\", \"specs.ricos.enableSmartBlock\":\"true\", \"specs.groups.BuiToWds\":\"true\", \"specs.groups.SiteMembersSsrCaching\":\"false\", \"specs.groups.SupportRicosCollapsibleList\":\"true\", \"specs.groups.GroupDescriptionContentType\":\"RICH_CONTENT\", \"specs.groups.OOIOptimization\":\"true\", \"specs.groups.GroupSearch\":\"true\"}, \"140603ad-af8d-84a5-2c80-a0f60cb47351\":{\"specs.events.ui.DelayedCancelReservation\":\"true\", \"specs.events.ui.SplitEventsViewer\":\"false\", \"specs.events.ui.SettingsWDSMigration\":\"true\", \"specs.events.ui.UpdatePaymentMethodEnabled\":\"true\", \"specs.events.ui.ScheduleWdsPanels\":\"true\", \"specs.events.ui.FixCancelReservation\":\"true\", \"specs.events.ui.EventDetailsSlotsViewer\":\"true\", \"specs.events.ui.RicosViewer\":\"true\", \"specs.events.ui.useWixForms\":\"false\", \"specs.events.ui.CheckoutSummaryFromReservation\":\"true\", \"floatingUIMultilineAddressDropdowns\":\"A\", \"specs.events.ui.UseWarmupState\":\"true\", \"specs.events.ui.MembersPageWdsPanels\":\"true\", \"specs.events.ui.EventDetailsImageToggle\":\"true\", \"specs.events.ui.ConsentPolicy\":\"true\", \"refreshAvailableTickets\":\"B\", \"specs.events.ui.FixDetailsPageInitialNavigation\":\"true\", \"specs.events.ui.ExpressCheckout\":\"true\", \"specs.events.ui.FixDetailsPageNavigation\":\"true\", \"specs.events.ui.FixLoadMembers\":\"true\", \"specs.events.ui.NewDetailsPageVisibilityNavigation\":\"true\", \"specs.events.ui.RegistrationStatusInfo\":\"true\", \"specs.events.ui.DetailsPageWdsPanels\":\"true\", \"specs.events.ui.ListWidgetWdsPanels\":\"true\", \"specs.events.ui.ExtendMembersV2\":\"true\", \"specs.events.ui.UpcomingOccurrencesSuggestions\":\"true\", \"specs.events.ui.AboutSectionSettings\":\"true\", \"specs.events.ui.UseRichContentFromEvent\":\"true\", \"navigationToBuilderEventDetailsPage\":\"A\", \"specs.events.ui.RenameTicketPolicy\":\"true\", \"specs.events.ui.WixFormsEventSettings\":\"true\", \"specs.events.ui.UseEventsViewerReduxToolkit\":\"true\", \"specs.events.ui.FixSeatingModalPosition\":\"true\", \"specs.events.ui.SausageIntegration\":\"true\", \"specs.events.ui.DisabledButtonsViewer\":\"true\", \"specs.events.ui.RelocatedPagesModal\":\"true\", \"specs.events.ui.CategoryMenuSettings\":\"true\", \"specs.events.ui.FeaturedEventWidget\":\"false\", \"specs.events.ui.PaymentsStyleApi\":\"true\", \"specs.events.ui.MultidayEventsCalendar\":\"true\", \"specs.events.ui.PlanTicketsDesign\":\"true\", \"specs.events.ui.NavigateToEcomCheckout\":\"false\", \"specs.events.ui.HideWidgetTypeSelect\":\"false\", \"specs.events.ui.StudioCompatibility\":\"true\", \"specs.events.ui.saveADITextsInDs\":\"true\", \"specs.events.ui.RelocatedUpgradeModal\":\"true\", \"specs.events.ui.PricingPlansV3\":\"true\", \"specs.events.ui.PersistSingleChoiceMandatoryViewer\":\"true\", \"floatingUICountryDropdown\":\"B\", \"specs.events.ui.NavigateToCheckoutWithReservationId\":\"true\", \"specs.events.ui.SeatingTicketsSection\":\"true\", \"specs.events.ui.UseDetailsPageReduxToolkit\":\"true\", \"specs.events.ui.UpdateRichContentTruncate\":\"false\", \"specs.events.ui.WidgetRsvpButtonHoverColor\":\"true\", \"specs.events.ui.SeatingTicketUnavailableModal\":\"false\", \"specs.events.ui.UpdatedClassicAddPanel\":\"false\", \"se_eventsCategoryNewContentInAddPanel\":\"true\", \"specs.events.ui.PromotionalBadges\":\"true\", \"specs.events.ui.ServerlessWidgetData\":\"false\", \"specs.events.ui.AccessibilityLocalization\":\"true\", \"specs.events.ui.UseGuestsService\":\"true\", \"specs.events.ui.EventDetailsSlots\":\"true\", \"specs.events.ui.CalendarRevamp\":\"true\", \"specs.events.ui.AvoidCrossDCCalls\":\"true\", \"specs.events.ui.UseOrderPageUrl\":\"true\", \"specs.events.ui.ResponsiveCards\":\"true\", \"specs.events.ui.UpdatedEmptyState\":\"true\", \"specs.events.ui.EventsListSeoPanel\":\"true\", \"specs.events.ui.CategoryTabsUoU\":\"false\", \"specs.events.ui.MobileCalendarRewire\":\"true\", \"specs.events.ui.ButtonLayoutEmptyState\":\"false\", \"enableNewThumbnailSkinsForEvents\":\"A\"}, \"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\":{\"specs.ping.errorHandlerInUou\":\"true\", \"specs.ping.MAPreferences.useMAWidgetPluginService\":\"true\"}, \"14ce1214-b278-a7e4-1373-00cebd1bef7c\":{\"specs.forms.EnableFormsInBlog\":\"true\"}, \"14bcded7-0066-7c35-14d7-466cb3f09103\":{\"specs.wixBlog.ImportFromWordPressInsideMenu\":\"false\", \"specs.wixBlog.FixMultipleColors\":\"true\", \"specs.media.MediaManager3\":\"true\", \"specs.wixBlog.CollectMetrics\":\"false\", \"specs.ricos.newFormattingToolbar\":\"true\", \"specs.wixBlog.RemoveBlocksPostPage\":\"false\", \"specs.wixBlog.UseWarmupStateInOldPostPage\":\"false\", \"specs.wixBlog.PreInstalledAuthorChanged\":\"true\", \"specs.wixBlog.UseBlogSettingsAllPostsFeedLabels\":\"true\", \"newBlogMonetizationExperience\":\"A\", \"specs.wixBlog.BlogSausageMenu\":\"false\", \"specs.wixBlog.SausageMenuFeed\":\"false\", \"specs.wixBlog.BMMergePendingReviewTab\":\"false\", \"specs.wixBlog.ImportUseDraftPostApiProxy\":\"true\", \"specs.wixBlog.NewBlogPostComment\":\"false\", \"specs.wixBlog.DontCallDbOnBadSlug\":\"false\", \"specs.wixRicos.withWixStyles\":\"true\", \"specs.wixBlog.UseWarmupStateInPostList\":\"true\", \"specs.wixBlog.UseWarmupStateInNewPostPage\":\"true\", \"specs.wixBlog.BlockViewCountUpdates\":\"false\", \"specs.wixBlog.ReturnRichContentInsteadOfDraftJs\":\"true\", \"draftPostProxyNileRoutingExperiment\":\"A\", \"specs.ricos-server.resolveParentPagePath\":\"true\", \"specs.wixBlog.HashtagPageUseFeedPage\":\"true\", \"specs.wixBlog.PostRatings\":\"true\", \"specs.wixBlog.DisplayPostComposerError\":\"false\", \"specs.wixBlog.PreInstalledPostSubmittedForReview\":\"true\", \"specs.ricos.enablePages\":\"true\", \"specs.wixBlog.UseBlogPermissionCacheService\":\"true\", \"formsInPosts\":\"A\", \"specs.blogImporter.EnableRollbackOfMigrationsBM\":\"false\", \"specs.wixBlog.UseWarmupStateInFeed\":\"true\", \"specs.wixBlog.UseLayoutFixer\":\"true\", \"specs.forms.EnableFormsInBlog\":\"true\", \"specs.wixBlog.DisableBlogInjectGenie\":\"false\", \"liveSiteEditorDeprecation\":\"B\", \"specs.wixBlog.UseTranslationCreditsApi\":\"true\", \"specs.membersArea.BlogCommentsFromCommentsSerivice\":\"true\", \"specs.wixBlog.LiveSiteEditorDeprication\":\"true\", \"specs.ricos.enableSmartBlock\":\"true\", \"specs.wixBlog.UseFilesusrDomain\":\"false\", \"specs.wixBlog.UsePromptHubForImageGeneration\":\"true\", \"specs.wixBlog.SettingsFromParastorage\":\"false\", \"specs.wixBlog.NewBlogPostPublishedAutomation\":\"true\", \"specs.wixBlog.UseBlogLikeNinjaService\":\"true\", \"specs.wixBlog.BMManagePendingReviews\":\"true\", \"specs.wixBlog.PreInstalledPostSubmissionStatus\":\"true\", \"specs.wixBlog.EnableDiscoveryIngestion\":\"true\", \"specs.wixBlog.UseAiServiceCreateDraftPost\":\"true\", \"specs.wixBlog.UseVisitorPrimaryLocale\":\"true\", \"specs.wixBlog.PreInstalledScheduledPostPublished\":\"true\", \"ooiCategoryHeaderBlog\":\"A\"}, \"1484cb44-49cd-5b39-9681-75188ab429de\":{\"specs.siteSearch.ChangeSelectedTabInEditorOnEdit\":\"true\", \"specs.siteSearch.UseWarmupData\":\"true\", \"specs.siteSearch.NewSearchOnClassicEditor\":\"true\", \"specs.siteSearch.CSSPerBreakpointIndications\":\"true\", \"specs.siteSearch.ResponsiveSearchBoxSkin\":\"true\", \"specs.siteSearch.ShowStudioUpdateFlow\":\"true\"}, \"1380b703-ce81-ff05-f115-39571d94dfcd\":{\"ecomShowSubdivisionSelectorWithSelectedMethod\":\"B\", \"specs.stores.MoveCustomUrlApiToSiteStoreConstructor\":\"true\", \"specs.ecom.SupportManualPaymentsOnPaymentRequest\":\"false\", \"specs.stores.FixQuickViewNavigationToProductPage\":\"true\", \"specs.stores.GalleryMigrateRowsToProductsCountViewer\":\"true\", \"specs.ecom.ShowAdditionalFeesInSideCart\":\"true\", \"specs.stores.FixVariantIdCalculationInGalleryAddToCartFlow\":\"true\", \"specs.ecom.ShowMultipleLineItemActions\":\"true\", \"specs.stores.AddMobileClassesToSliderGalleryRoot\":\"true\", \"ecomNormalizeExpressBillingSubdivision\":\"B\", \"specs.stores.FixPriceElementsPanelMultilingual\":\"true\", \"specs.stores.AllowAddToCartButtonOnImageInViewer\":\"true\", \"ecomCheckoutPreloadFlow\":\"A\", \"fixOosTextLiveUpdateOnStage\":\"B\", \"specs.ecom.DisplayCheckoutErrorModalsForExpressButtons\":\"true\", \"specs.stores.FixWishlistControllerConfigType\":\"true\", \"specs.forms.JapanAutocompleteEnabled\":\"true\", \"specs.stores.RemoveLoadConfigInProductWidget\":\"true\", \"ecomCheckoutComposerCartSettingsPanelEntry\":\"B\", \"specs.stores.ReturnCartIdNullInsteadOfDeprecatedForExpressService\":\"true\", \"specs.stores.ShowFromTextOnFullSelectedVariant\":\"true\", \"specs.stores.EnableDynamicSizeDefaultImage\":\"true\", \"typUseOrderCurrency\":\"B\", \"specs.stores.SendSubcategoriesSeoDataSF\":\"true\", \"specs.stores.FixNavigationDotsPosition\":\"true\", \"enablePreOrderAddToCartInProductWidget\":\"B\", \"specs.stores.GalleryFilterChoicesGrouping\":\"true\", \"specs.stores.ProductPageNewWixCodeApi\":\"true\", \"specs.stores.ProductPageFixReflowSausageNavigation\":\"true\", \"specs.stores.ShowAutomaticDiscountDataOnGallery\":\"true\", \"specs.stores.HideBillingFormForPayPalAndManualNotBrazil\":\"true\", \"specs.stores.GalleryProductOptionsAndQuantityWidth\":\"true\", \"specs.stores.ProductPageUpliftProductOptionsViewer\":\"true\", \"specs.ecom.violationBasedOnDeliveryOption\":\"true\", \"floatingUIMultilineAddressDropdowns\":\"A\", \"specs.ecom.FullNameLeafOverrides\":\"true\", \"specs.ecom.deliveryOptionsSetFirstAsDefault\":\"true\", \"specs.stores.ShowUserWishlistStateInProductPage\":\"true\", \"specs.stores.InfoSectionTabsTPAComponent\":\"true\", \"specs.stores.CombinedListingFetchGroupInfo\":\"true\", \"specs.stores.ProductPageBreadcrumbsAfterHydration\":\"true\", \"specs.ecom.OrdersHideSubscriptionBillingPeriodWhenProductPeriodNotAligned\":\"true\", \"specs.stores.ZoomableMainMedia\":\"true\", \"specs.stores.FixQuickViewNavigationToProductPageInPreviewMode\":\"true\", \"specs.stores.GalleryColorPickerA11yReflowKeyboardFix\":\"true\", \"ecomIgnoreCartButtonsTextOpacity\":\"B\", \"fixPPThumbnailSliderNavigation\":\"B\", \"separateDeliveryComboBox\":\"B\", \"storesAllowExpandFirstInfoSectionsStorefront\":\"B\", \"ecomHideNonRequiredPrefillBillingFields\":\"B\", \"fixGalleryVerticalFiltersRoundCorners\":\"B\", \"specs.ecom.AddSlotToThankYouPage\":\"true\", \"specs.stores.allowProductPageButtonsOption\":\"true\", \"specs.stores.TYPUpdateOrderModelWithSubscriptionInfo\":\"true\", \"specs.stores.FixWishlistPageLiveTextEditing\":\"true\", \"specs.ecom.separateAdditionalFee\":\"true\", \"specs.stores.ProductPageMainMediaNavigationArrows\":\"true\", \"specs.stores.SliderGalleryInfiniteLoopToggleViewer\":\"true\", \"addProductOptionsToQueryParams\":\"B\", \"specs.stores.FixProductPageDescriptionReadMore\":\"true\", \"specs.stores.GalleryEditableGridTemplateRepeatOption\":\"true\", \"specs.stores.FetchLocaleFromWixCodeApi\":\"true\", \"specs.ecom.EnableBuilderContextProvider\":\"true\", \"storesFixPricingPrefixLayout\":\"B\", \"ecomShowEstimateDeliveryOnSubdivisionError\":\"B\", \"specs.stores.ProductPageRemovePagination\":\"true\", \"ecomShowTotalSavings\":\"B\", \"specs.stores.AddHasDiscountToVariantsItemsQueries\":\"true\", \"specs.ecom.SupportMultipleGCInCheckout\":\"false\", \"specs.stores.FixVerticalThumbnailsPosition\":\"true\", \"usePickupFormattedAddress\":\"B\", \"specs.stores.FixCheckoutAddressTemplateMandatoryZipCode\":\"true\", \"ecomSyncSelectedPaymentMethodToCart\":\"A\", \"storesFixNavigationToBuilderProductPage\":\"A\", \"specs.stores.FixVariantIdCalculationInBuyNowFlow\":\"true\", \"specs.stores.OnlineStoresSessionStorageWithTTL\":\"true\", \"specs.forms.MultilineAddressInTemplates\":\"true\", \"specs.stores.FixCartIconOnEditor\":\"true\", \"storesGalleryEmptyStateForDeletedCollection\":\"B\", \"specs.stores.ResponsiveGalleryMigration\":\"true\", \"specs.ecom.ShowCrossedOutPriceOnLineItemLevel\":\"true\", \"specs.stores.GalleryAllowLinkToProductPageInSSR\":\"true\", \"specs.ecom.MergeExpressDeliveryRateWithHandlingFee\":\"false\", \"specs.stores.ProductPageSlotsAddMoreProps\":\"true\", \"specs.stores.AddDiscountsToVariantsItemsQueries\":\"true\", \"storesFixClassicMobileNavigationVisibility\":\"B\", \"ecomMemberDetailsContactAwareSignificance\":\"B\", \"specs.stores.GalleryFixWarmUpDataCacheKeyWithQueryParams\":\"true\", \"specs.stores.ShowMultiRibbonsInProductPage\":\"true\", \"specs.ecom.useLocaleForDeliveryTimeSlot\":\"true\", \"specs.stores.FixAnnounceNotDefinedBug\":\"true\", \"ecomClearHiddenFieldsBeforeValidation\":\"B\", \"specs.stores.ShowErrorHandlingToastsGallery\":\"true\", \"specs.ecom.ShowAllSubscriptionItemNames\":\"true\", \"optionalModifiersProductPage\":\"B\", \"specs.ecom.useSelectedDeliveryOptionFallbackInSlotAPI\":\"true\", \"specs.stores.RefactorFormServiceToCalcExtendedFields\":\"true\", \"specs.stores.FixQuickViewForSubscriptionsInWishlist\":\"true\", \"storesProductPageRemoveOptionPreselection\":\"B\", \"specs.stores.ShowGiftCardAddToCartSettings\":\"true\", \"specs.stores.PPAlignFontSizeToModernLayout\":\"true\", \"ecomSplitSubscriptionCheckboxInCheckout\":\"B\", \"specs.stores.SideCartElementsVisibilityInCss\":\"true\", \"specs.stores.ProductPageVideoPosterOptimization\":\"true\", \"ecomChargeOrderPaymentRequestApi\":\"A\", \"specs.ecom.fixGroupedDeliveryOptionSelection\":\"false\", \"specs.stores.MainMediaWrapperAsAnchorElement\":\"true\", \"specs.stores.AllowGalleryProductRoundCornersInViewer\":\"false\", \"specs.stores.productPageMobileSettings\":\"true\", \"specs.stores.ResponsiveEditorBreadcrumbsToggle\":\"true\", \"specs.stores.GalleryFixSideFiltersShrink\":\"true\", \"specs.stores.SupportFreeTrialTYP\":\"true\", \"usingStoresViewerScriptAddToCart\":\"A\", \"ecomPurchaseRecommendationsSettingsField\":\"B\", \"ecomCheckoutCrossSell\":\"A\", \"specs.stores.FixFilterKeySpecialCharacter\":\"true\", \"specs.stores.StorefrontLegacyEnablePanoramaIntegration\":\"true\", \"specs.ecom.RevampDiscountsInCartAndCheckout\":\"true\", \"specs.stores.ProductNameHtmlTag\":\"true\", \"specs.stores.UseUndefinedAsDefaultBillingAddressInCheckout\":\"true\", \"specs.stores.GalleryA11yReflowFilterModalFix\":\"true\", \"specs.stores.EnableDiscountAndRegularPriceSwapViewer\":\"true\", \"specs.ecom.CartItemQuantityBadge\":\"true\", \"specs.stores.ShowWishlistInGallery\":\"true\", \"ecomShowReducedDiscountAmount\":\"B\", \"specs.stores.ProductPageDescriptionToggle\":\"true\", \"specs.ecom.ShowVoidedErrorMessage\":\"true\", \"ecomUseMembershipOverSelectedMembership\":\"B\", \"specs.stores.UseOpenSideCartApi\":\"true\", \"specs.stores.ShowAutomaticDiscountDataOnProductPage\":\"true\", \"specs.stores.ProductPageWaitForWarmupData\":\"true\", \"specs.stores.ProductMediaNavigationDots\":\"false\", \"specs.stores.UseNewSubscriptionView\":\"true\", \"ecomCheckoutComposerCartIconSettingsPanelEntry\":\"B\", \"specs.forms.FixControllerActions\":\"true\", \"specs.stores.UseCartV2ForDirectPurchase\":\"true\", \"specs.ecom.ImprovePerformanceByParallelPromises\":\"true\", \"specs.stores.GalleryAddMissingAddProductImpressionEvent\":\"true\", \"specs.stores.ProductPageUplift\":\"true\", \"specs.stores.ProductPageUpliftNewFeaturesSF\":\"true\", \"specs.stores.ProductPageBlocksCtaTrackEvents\":\"true\", \"specs.stores.ProductPageUpliftProductOptions\":\"true\", \"ecomClearHiddenBillingFieldsBeforeValidation\":\"B\", \"specs.stores.SubscriptionPlanNewDesign\":\"false\", \"ecomCartCssVars\":\"B\", \"specs.stores.AllowGalleryIntervalNavigation\":\"true\", \"specs.stores.navigateToRelativeUrlWithCustomizedUrl\":\"true\", \"specs.stores.enableUnitedStatesMilitaryAddresses\":\"true\", \"optionalModifiersGallery\":\"B\", \"specs.stores.StickyAddToCartMobile\":\"false\", \"updateDisableContinueButtonSlotAPI\":\"A\", \"specs.stores.FixProductPageDropdownMobileSsr\":\"true\", \"specs.ecom.showPriceWithFreeShippingCoupon\":\"true\", \"ecomPlanAndBookInPurchaseFlow\":\"B\", \"specs.stores.GalleryStoreExtractSEO\":\"true\", \"specs.stores.ProductPageWishlistTrackEvent\":\"true\", \"specs.stores.ProductPageSsrInvalidationTags\":\"true\", \"streetlessLocalityFallback\":\"B\", \"specs.ecom.HandleMembershipCalculationError\":\"true\", \"specs.stores.StorefrontSwatchImages\":\"true\", \"specs.ecom.CheckoutComposerSideCartSettingsPanelEntry\":\"true\", \"specs.stores.ConfigureGalleryViewStates\":\"true\", \"storesShowHiddenVariants\":\"A\", \"specs.stores.GalleryProductItemCarouselHover\":\"true\", \"specs.ecom.UpdateCartOnBillingFieldsChange\":\"true\", \"specs.ecom.FixCartNavigationOnPreview\":\"false\", \"specs.stores.GalleryWaitForWarmupData\":\"true\", \"specs.stores.FixMigratedAllProductsInManualCategoryList\":\"true\", \"specs.stores.FixMultilingualTextInSF\":\"true\", \"ecomCartValidationsInPurchaseFlow\":\"B\", \"specs.stores.ShowPromotionsInGallery\":\"true\", \"specs.stores.Set404ForSeoWhenPageHasNoProducts\":\"true\", \"specs.stores.SliderGalleryFixSwiperIndex\":\"true\", \"specs.stores.SupportMitEnabledFieldInCheckoutPage\":\"true\", \"specs.ecom.CouponAlignmentInCartAndCheckout\":\"true\", \"specs.stores.ConfigureSlotsInEditorSDK\":\"true\", \"specs.stores.FixPPAddToCartButtonTextKeyPriority\":\"true\", \"specs.ecom.useFallbackInPreviewLoader\":\"true\", \"specs.stores.GalleryProductOptionsLimit\":\"true\", \"specs.stores.ProductPageSlots\":\"true\", \"specs.ecom.CheckoutNewPhoneAndFullNameFields\":\"true\", \"specs.stores.newClearFiltersHoverState\":\"true\", \"specs.stores.UseGalleryNewApplyFilterQueryParams\":\"false\", \"specs.ecom.CheckoutComposerSuccessPopupSettingsPanelEntry\":\"true\", \"specs.stores.tpaRouterShouldQueryProductsV3\":\"true\", \"ecomCartCrossSell\":\"A\", \"ecomShowFreeShippingCouponPlacementInCart\":\"B\", \"specs.ecom.showDeliveryOptionPreviewError\":\"true\", \"specs.ecom.AddDiscountDataToTYPOrderQuery\":\"true\", \"specs.stores.ProductPageConsumePublicDataFromBothScopes\":\"true\", \"specs.stores.ShowMultiRibbonsInGallery\":\"true\", \"floatingUICountryDropdown\":\"B\", \"specs.ecom.OrderPlatformFeesUoU\":\"true\", \"storesFTGalleryEnableLoadMoreHoverUnderline\":\"A\", \"specs.forms.EnableNewPhoneFieldValidation\":\"true\", \"specs.stores.GallerySeoTags\":\"true\", \"fixPPUrlDoubleDecoding\":\"B\", \"storesPreselectSubscriptions\":\"B\", \"specs.stores.ProductPageBlocksFixAddToCartOnSecondaryLang\":\"true\", \"specs.stores.AllowStickySidebarInViewer\":\"true\", \"specs.stores.ProductPageLocationOnChangePathChangeForEditorSausage\":\"true\", \"specs.stores.SubscriptionPlansNewDesignViewer\":\"true\", \"specs.stores.AllowAddToCartButtonContentTypesInViewer\":\"true\", \"specs.ecom.OrdersModifiers\":\"true\", \"specs.ecom.loadDeliverySectionsDataOnReadOnly\":\"true\", \"specs.stores.PPNavigationSectionPerBreakpoint\":\"true\", \"ecomCheckoutBrandStyling\":\"B\", \"ecomSupportTestOrderOnCheckoutPage\":\"A\", \"specs.stores.UseStoreLanguageForTranslations\":\"false\", \"ecomShowCodeSectionWhenApplied\":\"B\", \"specs.stores.EnableOutOfStockAlignment\":\"true\", \"specs.stores.GalleryStoreExtractBI\":\"true\", \"specs.forms.EnablePhoneField\":\"true\", \"specs.stores.UseNewQueriesOnWishlistWithDiscount\":\"true\", \"specs.stores.UseExperimentsFromPlatformFlowApiLegacyProjects\":\"true\", \"specs.ecom.ShowMultipleSubscriptions\":\"true\", \"typDisableOfflineInstructionFetch\":\"B\", \"ecomPlaceOrderFallbackToContinueShoppingUrl\":\"B\", \"specs.stores.FixBackInStockButtonValidation\":\"true\", \"ecomInlineAddressSelectionInCart\":\"B\", \"specs.stores.FixGalleryNotToShowQueryPageFor1\":\"true\", \"specs.stores.DeprecateLineItemEnricherOnOrderUoU\":\"true\", \"ecomCheckoutComposerSettingsPanelEntry\":\"A\", \"specs.ecom.hideShippingOptionAvailibilityBadgeOnMobile\":\"true\", \"specs.ecom.OpenSuccessPopup\":\"true\", \"ecomRemovePmNameErrorModal\":\"B\", \"specs.ecom.HideMissingLineItemImagesInPaymentRequest\":\"true\", \"ecomFallbackForMissingEcommerceSettings\":\"B\", \"specs.stores.FixProductPageMediaCentering\":\"true\", \"specs.stores.GalleryProductOptionsAndQuantityRoundCornersInViewer\":\"true\", \"specs.stores.GalleryFixOutOfBoundsPageParam\":\"true\", \"specs.stores.RenderSlotsInGallery\":\"true\", \"specs.stores.SwitchLocalStorageToSessionStorageInGalleryNavigationToPP\":\"true\", \"specs.stores.PriceFilterClientTicksCalculation\":\"false\", \"chooseSourceCategoryGalleryAction\":\"B\", \"specs.stores.UseNewQueriesWithProductDiscount\":\"true\", \"specs.ecom.DontHandleCheckoutNotAllowedInCart\":\"true\", \"galleryParallelFiltersAndProductsFetch\":\"B\", \"specs.ecom.TaxExemptionOnTYP\":\"true\", \"gridGalleryReorderGfpp\":\"A\", \"specs.stores.ResponsiveTYPCss\":\"true\", \"specs.stores.UseGetClientConfigFromPublicApi\":\"true\", \"ecomCheckoutComposerBM\":\"B\", \"specs.stores.ShouldSplitBillingInfoPrefill\":\"true\", \"storesGraphQlSubscriptionDiscount\":\"B\", \"specs.stores.UseExperimentsFromPlatformFlowApi\":\"true\", \"specs.ecom.UsePaymentRequestTitleInThankYou\":\"true\", \"specs.stores.FixPreviewCustomProductUrlSlug\":\"true\", \"specs.stores.ShouldShowFirstProductOptionInGallery\":\"true\", \"specs.stores.FixProductPageHydrationError\":\"true\", \"specs.stores.GalleryColorOptionAlignment\":\"true\", \"specs.stores.AllowGalleryFreeModeNavigationInViewer\":\"true\", \"specs.stores.EnableQualityOptionsStylingChanges\":\"false\", \"specs.stores.AddingOverflowHiddenToFilterTitleMobile\":\"true\", \"specs.stores.ProductPageSupportGridLayout\":\"true\", \"specs.stores.UseProductLineItemFromTYP\":\"true\", \"ecomCartLineItemUpsells\":\"B\", \"specs.stores.AddSliderGalleryTitleToGlobalPropsContext\":\"true\", \"specs.stores.AdditionalRibbonsFieldGraphQL\":\"true\", \"specs.stores.FixProductPageHistoricalBreadcrumbsStyleParams\":\"true\", \"specs.ecom.FixCartCountOverlap\":\"true\", \"ecomExpressCheckoutFromViewerScript\":\"B\", \"specs.stores.EnableWarmUpDataCaching\":\"true\", \"storesMobileGalleryFiltersDesignSettings\":\"A\", \"galleryHideEmptyOptionFilters\":\"B\", \"specs.stores.FixGalleryRenderingWhenUrlChanges\":\"false\", \"specs.ecom.SupportMultipleGCInTYP\":\"true\", \"specs.stores.CombinedListing\":\"true\", \"specs.stores.ExtendPlaceOrderDeadline\":\"true\", \"specs.stores.CheckoutPagePreviewEnabled\":\"true\", \"specs.stores.RemoveLoadConfigInAddToCart\":\"false\", \"specs.ecom.useLocaleForDatePicker\":\"true\", \"specs.ecom.paymentErrorNoCountryHandling\":\"true\", \"specs.stores.OnlineStoresCurrencyClientFormatting\":\"true\", \"storesStickyAddToCart\":\"B\", \"specs.stores.ProductPageRicoDescription\":\"true\", \"ecomFixCartIconTextMeasurement\":\"B\", \"specs.stores.CategoryPageFooterDescriptionSF\":\"true\"}, \"675bbcef-18d8-41f5-800e-131ec9e08762\":{\"specs.wixCode.LoadWithImportAMDModule\":\"true\", \"specs.wixCode.LoadNamespacesPerPage\":\"false\", \"specs.wixcode.ViewerExperimentOwnerScopeTest\":\"true\", \"specs.wixCode.resolveMissingPlatformNamespaces\":\"false\", \"specs.wixcode.ViewerExperimentTest\":\"false\"}, \"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":{\"specs.UouSubscriptionServiceUseApiGatewayClient\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppStudio2\":\"true\", \"specs.membersArea.DoNotWaitInstallNavigation\":\"true\", \"specs.membersArea.UseMembersNgApiUpdate\":\"false\", \"specs.members.FollowersAudienceProvider\":\"false\", \"specs.media.MediaManager3\":\"true\", \"specs.membersArea.showCascadingIndicators\":\"true\", \"specs.membersArea.HideMemberSortField\":\"true\", \"specs.profileCardOOI.MakeProfileCardRemovableInNewMA\":\"true\", \"specs.membersArea.DisableLivePreviewRefreshes\":\"true\", \"specs.membersArea.CheckUserContributorPermissions\":\"true\", \"specs.profileCard.EnableHtmlTagSettings\":\"true\", \"specs.membersArea.CheckIsAppActiveBeforeInstallV1\":\"true\", \"specs.membersArea.UseGetMyMemberInMemberHandler\":\"true\", \"specs.membersArea.EnableMembersAreaContextCheck\":\"true\", \"specs.profileCardOOI.NewResetSettings\":\"true\", \"specs.membersArea.AddSuspendedFilter\":\"true\", \"specs.membersfollow.ActivityCounters\":\"true\", \"specs.membersArea.ShowPageRedirectNote\":\"true\", \"specs.membersArea.ExtendedUninstallMASubApps\":\"true\", \"specs.membersArea.UseViewedMemberBlocked\":\"true\", \"specs.membersArea.UseFollowersV3\":\"true\", \"specs.members.enableMuteMembersSkill\":\"true\", \"specs.myAccount.ShowBlockedMembersModalEmptyState\":\"true\", \"specs.membersArea.enableTimeoutLogs\":\"false\", \"specs.membersArea.GetRoutesUseGlobal\":\"true\", \"specs.membersArea.ShouldOpenPropertyInDevCenter\":\"false\", \"specs.membersApi.UseProfilesApiForTitleAndCoverWrites\":\"true\", \"specs.profileCardOOI.UseMiddlewareForGlobalSettingsGetter\":\"true\", \"specs.membersArea.EnableLoginBarComponentExtension\":\"true\", \"specs.members.enableUpdateCustomFieldSkill\":\"true\", \"specs.membersArea.ShowNewFFBorderSettings\":\"true\", \"specs.membersArea.AddNotificationsIconOnV2\":\"true\", \"specs.membersArea.AllowInstallingProfileE3\":\"true\", \"specs.members.enableHideCustomFieldSkill\":\"true\", \"specs.members.LogUpdateMemberRequest\":\"false\", \"checkEmailMistype\":\"B\", \"specs.membersArea.installationSourceOfTruth\":\"true\", \"specs.membersAreaV2.HidePermissionsPanelOnPrivateMA\":\"false\", \"specs.responsive-editor.NoMeasureInstall\":\"true\", \"specs.members.enableDeleteCustomFieldSkill\":\"true\", \"specs.membersArea.SkipTemplateHandlerForSettings\":\"false\", \"specs.membersArea.UsePopoverDynamicPositioning\":\"true\", \"specs.membersArea.MemberHandlerUseMembersNgApi\":\"true\", \"specs.membersArea.EnableMyAccountParallelInstall\":\"true\", \"specs.profileCardOOI.UseMiddlewareForMemberGetter\":\"true\", \"specs.membersArea.UseMembersNgApi\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppEditor3\":\"true\", \"specs.membersArea.DoNotCreateTeamMember\":\"false\", \"specs.membersArea.NotificationsIconFixerOnV2\":\"true\", \"specs.profileCardOOI.EnableAvifEncoding\":\"true\", \"specs.membersArea.ConsumeMembersPiiExchangeDomainEvents\":\"true\", \"specs.membersArea.ShowMoreMembersWithBadge\":\"false\", \"specs.membersArea.AddRevisionField\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV2MenuItems\":\"true\", \"specs.membersArea.AddManageMemberAccessAction\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV3MenuItems\":\"true\", \"specs.membersArea.EnableDependencyInstallationCheck\":\"true\", \"specs.ident.SiteMembersSocialDisclaimer\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV3\":\"true\", \"migrateDisconnectedLoginBars\":\"B\", \"specs.profileCardOOI.EnableProfileAlignmentCssVars\":\"true\", \"specs.membersArea.UseQueryMembersTextSearch\":\"true\", \"specs.membersAreaV2.EnablePageInfoPanelCustomPage\":\"false\", \"specs.profileCardOOI.usePlaceholderLoaders\":\"true\", \"specs.membersArea.SkipRolesSyncOnMemberCreated\":\"true\", \"specs.profileCardOOI.UseBlockedCheckFollowButton\":\"true\", \"specs.myAccount.showBlockedMembersModalRedesign\":\"true\", \"specs.membersArea.MetaSiteSpecialConsumerV2\":\"true\", \"specs.members.enableUnmuteMembersSkill\":\"true\", \"specs.membersArea.UseMembersAboutV2\":\"true\", \"specs.members.enableCreateBadgeSkill\":\"true\", \"specs.profileCard.HideMessageButtonForNonSocialChatUsers\":\"false\", \"specs.membersArea.HideSuspendedLabelForNonOwners\":\"true\", \"enableNewThumbnailSkinsForMembersAreaPanels\":\"A\", \"specs.membersArea.UseApplyChangeToAllLanguagesForMaV2\":\"true\", \"specs.membersArea.SortByNumbersInElastic\":\"true\", \"specs.myAccount.ShowPrivacySettingsMessageForSiteOwners\":\"true\", \"specs.profileCardOOI.showNewNotificationsContent\":\"true\", \"specs.membersArea.UninstallMASubApps\":\"true\", \"specs.membersArea.UseAppDataForRoutes\":\"true\", \"specs.membersArea.CreateMissingMember\":\"true\", \"specs.membersArea.EnableMenusDataFixer\":\"true\", \"specs.members.usePlatformizedServicesForUpdate\":\"true\", \"specs.badges.shouldUseBadgesV3InEdm\":\"true\", \"specs.membersArea.HideSuspendedLabelForNonOwnersFFBox\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV2\":\"true\", \"specs.profileCardOOI.EnableCSSIndicators\":\"true\", \"specs.membersArea.EnableMemberPagePermissions\":\"false\", \"specs.membersArea.UseIsPermittedOnMediaCredentials\":\"true\", \"specs.profileCardOOI.UseMiddlewareForRolesMapGetter\":\"true\", \"specs.membersArea.fixLoginBarResponsiveLayout\":\"true\", \"specs.membersArea.EnableV2SilentInstall\":\"true\", \"specs.profileCard.UseMigratedEditor3StylesParams\":\"true\", \"specs.membersArea.EnableInstallationTimeout\":\"false\", \"specs.members.enableManageMemberPrivacySkill\":\"true\", \"specs.membersAreaV3.ReAddPageWorkaround\":\"true\", \"specs.membersArea.OptimizeVerticalDeletion\":\"true\", \"specs.membersArea.EnableFollowersAsLightbox\":\"true\", \"specs.membersArea.UseGetOrCreateMemberV2\":\"true\", \"specs.members.enableCreateCustomFieldSkill\":\"true\", \"specs.membersArea.migrateToV2\":\"false\", \"specs.membersArea.ClearSettings\":\"true\", \"specs.membersArea.ShowHeadingLevelSettings\":\"true\"}}}, \"userPatterns\":[{\"patternType\":\"BLOG_POST\", \"content\":\"{\\\"tags\\\":[{\\\"type\\\":\\\"meta\\\", \\\"props\\\":{\\\"name\\\":\\\"ai-generation-disabled\\\"}}]}\"}, {\"patternType\":\"WIX_DATA_PAGE_ITEM-h483u\", \"content\":\"{\\\"tags\\\":[{\\\"type\\\":\\\"meta\\\", \\\"props\\\":{\\\"name\\\":\\\"description\\\", \\\"content\\\":\\\"{{wix-data-page-item.Mc-8bt.subtitle}}\\\"}}, {\\\"type\\\":\\\"meta\\\", \\\"props\\\":{\\\"name\\\":\\\"robots\\\", \\\"content\\\":\\\"index\\\"}}, {\\\"type\\\":\\\"meta\\\", \\\"props\\\":{\\\"content\\\":\\\"{{wix-data-page-item.Mc-8bt.image}}\\\", \\\"property\\\":\\\"og:image\\\"}}, {\\\"type\\\":\\\"title\\\", \\\"children\\\":\\\"{{wix-data-page-item.Mc-8bt.title}}\\\"}]}\"}], \"metaTags\":[{\"name\":\"fb_admins_meta_tag\", \"value\":\"\", \"property\":false}], \"customHeadTags\":\"\", \"isInSEO\":false, \"hasBlogAmp\":false, \"mainPageId\":\"c1dmp\", \"listPageIds\":[\"qyyn5\", \"ldw8n\"]}, \"serviceRegistrar\":{}, \"sessionManager\":{\"isRunningInDifferentSiteContext\":false, \"expiryTimeoutOverride\":0, \"appsInstances\":{}, \"sessionModel\":{}}, \"siteMembersWixCodeSdk\":{\"isPreviewMode\":false, \"isEditMode\":false, \"smToken\":\"\", \"smcollectionId\":\"64bdb204-8986-412b-ad51-ea619df63228\"}, \"siteMembers\":{\"collectionExposure\":\"Public\", \"smcollectionId\":\"64bdb204-8986-412b-ad51-ea619df63228\", \"smToken\":\"\", \"protectedHomepage\":false, \"isTemplate\":false, \"loginSocialBarOnSite\":false, \"routerPrefix\":\"\", \"isCommunityInstalled\":true, \"baseUrl\":\"https:\\/\\/www.100relab.com\", \"memberInfoAppId\":7856}, \"siteScrollBlocker\":{\"isBuilderComponentModel\":false}, \"siteWixCodeSdk\":{\"fontFaceServerUrl\":\"https:\\/\\/serverless.parastorage.com\\/_serverless\\/site-sdk-server\\/v1\\/style\", \"siteDisplayName\":\"100RE LABORATORY\", \"siteRevision\":607, \"regionalSettings\":\"vi-vn\", \"language\":\"en\", \"currency\":\"VND\", \"mainPageId\":\"c1dmp\", \"pageIdToPrefix\":{\"bw36u\":\"account\", \"v36av\":\"account\", \"k9gzs\":\"account\", \"bwvbz\":\"account\", \"qyyn5\":\"trangmi-ebt\", \"ldw8n\":\"mc-8bt\", \"h483u\":\"mc-8bt\", \"u3h11\":\"profile\"}, \"routerPrefixes\":{\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\":{\"name\":\"account\", \"prefix\":\"\\/account\", \"type\":\"dynamicPages\"}, \"5063ee74-6323-4b5c-b612-70ec4a0d075f\":{\"name\":\"account\", \"prefix\":\"\\/account\", \"type\":\"dynamicPages\"}, \"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\":{\"name\":\"account\", \"prefix\":\"\\/account\", \"type\":\"dynamicPages\"}, \"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\":{\"name\":\"account\", \"prefix\":\"\\/account\", \"type\":\"dynamicPages\"}, \"395b5dbb-d497-4231-896e-d14504393fc9\":{\"name\":\"trangmi-ebt\", \"prefix\":\"\\/trangmi-ebt\", \"type\":\"dynamicPages\"}, \"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\":{\"name\":\"mc-8bt\", \"prefix\":\"\\/mc-8bt\", \"type\":\"dynamicPages\"}, \"afaf43a4-944f-40c5-a9e3-b914e5596344\":{\"name\":\"mc-8bt\", \"prefix\":\"\\/mc-8bt\", \"type\":\"dynamicPages\"}, \"3213643b-49aa-4081-829d-e69fac6adc5f\":{\"name\":\"profile\", \"prefix\":\"\\/profile\", \"type\":\"dynamicPages\"}}, \"timezone\":\"Asia\\/Bangkok\", \"pageIdToTitle\":{\"v5gfm\":\"SEATUC2023\", \"imy4p\":\"100RE Lab General Meeting (2024)\", \"wbh7l\":\"Wind\", \"syls5\":\"Japan, Sep 2023\", \"gg1rk\":\"Fund Raise\", \"ymezx\":\"Search Results\", \"thals\":\"Denmark, Aug 2023\", \"kshql\":\"UC\", \"x1mpe\":\"Member\", \"e9jsz\":\"Research Areas\", \"efy2o\":\"How to be one of us?\", \"cfu3y\":\"PV\", \"whq86\":\"News\", \"hwkr6\":\"Publications\", \"gjatk\":\"Useful Links\", \"um7z3\":\"Project\", \"k9gzs\":\"My Account\", \"yzozj\":\"AI\", \"asf6j\":\"DR\", \"v36av\":\"Notifications\", \"qyyn5\":\"Trang mới (All)\", \"gvoyx\":\"ABB Scholarship 2022\", \"crthr\":\"Tập huấn về năng lượng bền vững (SE4Y)\", \"j3h1v\":\"Collaborations\", \"w4sku\":\"Research Areas\", \"whufm\":\"SG\", \"u5ncv\":\"Mini Scada\", \"hi9qs\":\"Tọađàm 29.08.2023\", \"o3a3z\":\"News\", \"b29ye\":\"Washington DC, July 2023\", \"x3vpv\":\"SVNCKH2022\", \"h483u\":\"Mục (Title)\", \"ldw8n\":\"Mục (All)\", \"todeu\":\"2nd Regional CSO Energy Workshop & Train\", \"utkvs\":\"SAKURA SCHOLARSHIP PROGRAM 2023\", \"ul3zo\":\"Hội nghị quốc tế GMSARN lần thứ 18\", \"id3v5\":\"Achievement\", \"c1dmp\":\"About\", \"s9v9x\":\"ĐÓNĐẦU LÀN SÓNG CHUYỂNĐỔI XANH \", \"bw36u\":\"Góiđăng ký của tôi\", \"hqe3r\":\"EV & BESS\", \"u3h11\":\"Profile\", \"hzskl\":\"Fullscreen Page\", \"hi6bq\":\"H2\", \"khq88\":\"Research Experiences\", \"bwvbz\":\"Settings\", \"itycd\":\"100RE Lab Trip 2023\", \"fmrkz\":\"Alumni\", \"vwems\":\"Bàiđăng\", \"jd2ix\":\"Photos\"}, \"urlMappings\":null, \"viewMode\":\"Site\"}, \"speculationRules\":{\"currentPagePath\":\"\\/publications\"}, \"ssrCache\":{}, \"tpaCommons\":{\"widgetsClientSpecMapData\":{\"47a7e7bb-f412-4093-9155-1ff5adbc4dae\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/SideBySide\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/SideBySide\", \"tpaWidgetId\":\"47a7e7bb-f412-4093-9155-1ff5adbc4dae\", \"appPage\":{}, \"applicationId\":8, \"appDefinitionName\":\"Wix Groups\", \"appDefinitionId\":\"148c2287-c669-d849-d153-463c7486a694\", \"isWixTPA\":true, \"allowScrolling\":false}, \"0a9f687f-7e00-4576-a8e1-9415844b8f44\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/GroupsListWidget\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/GroupsListWidget\", \"tpaWidgetId\":\"0a9f687f-7e00-4576-a8e1-9415844b8f44\", \"appPage\":{}, \"applicationId\":8, \"appDefinitionName\":\"Wix Groups\", \"appDefinitionId\":\"148c2287-c669-d849-d153-463c7486a694\", \"isWixTPA\":true, \"allowScrolling\":false}, \"8cce2b9e-8549-46c7-8ad2-f75bf28534ac\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/FeedWidget\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/FeedWidget\", \"tpaWidgetId\":\"8cce2b9e-8549-46c7-8ad2-f75bf28534ac\", \"appPage\":{}, \"applicationId\":8, \"appDefinitionName\":\"Wix Groups\", \"appDefinitionId\":\"148c2287-c669-d849-d153-463c7486a694\", \"isWixTPA\":true, \"allowScrolling\":false}, \"a7dcdfcb-8abd-4008-af19-fed5fcd12b40\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/Groups\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/Groups\", \"appPage\":{\"id\":\"groups\", \"name\":\"Groups\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":8, \"appDefinitionName\":\"Wix Groups\", \"appDefinitionId\":\"148c2287-c669-d849-d153-463c7486a694\", \"isWixTPA\":true, \"allowScrolling\":false}, \"83b2af08-c021-40c8-a3a5-b329a959ec2b\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/GroupsListWidget\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/GroupsListWidget\", \"tpaWidgetId\":\"83b2af08-c021-40c8-a3a5-b329a959ec2b\", \"appPage\":{}, \"applicationId\":8, \"appDefinitionName\":\"Wix Groups\", \"appDefinitionId\":\"148c2287-c669-d849-d153-463c7486a694\", \"isWixTPA\":true, \"allowScrolling\":false}, \"e018cc55-7b1c-4500-a2e5-969f22c8a33a\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/MembersAreaGroups\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/MembersAreaGroups\", \"tpaWidgetId\":\"e018cc55-7b1c-4500-a2e5-969f22c8a33a\", \"appPage\":{\"id\":\"My Groups\", \"name\":\"My Groups\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":8, \"appDefinitionName\":\"Wix Groups\", \"appDefinitionId\":\"148c2287-c669-d849-d153-463c7486a694\", \"isWixTPA\":true, \"allowScrolling\":false}, \"513a5d84-3ebb-4ca6-a5aa-83effd2123b9\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/Group\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/social-groups-ooi\\/5.871.0\\/Group\", \"appPage\":{\"id\":\"group\", \"name\":\"Group\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":2, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":8, \"appDefinitionName\":\"Wix Groups\", \"appDefinitionId\":\"148c2287-c669-d849-d153-463c7486a694\", \"isWixTPA\":true, \"allowScrolling\":false}, \"144097ea-fea0-498e-ade7-e6de40127106\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wix-vod-widget\\/1.4650.0\\/WixVideo\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wix-vod-widget\\/1.4650.0\\/WixVideo\", \"tpaWidgetId\":\"wix_vod_develop\", \"appPage\":{}, \"applicationId\":9, \"appDefinitionName\":\"Wix Video\", \"appDefinitionId\":\"14409595-f076-4753-8303-9a86f9f71469\", \"isWixTPA\":true, \"allowScrolling\":false}, \"ea40bb32-ddfc-4f68-a163-477bd0e97c8e\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14f260f9-c2eb-50e8-9b3c-4d21861fe58f\":{\"widgetUrl\":\"https:\\/\\/social-blog.wix.com\\/member-comments-page\", \"mobileUrl\":\"https:\\/\\/social-blog.wix.com\\/member-comments-page\", \"appPage\":{\"id\":\"member-comments-page\", \"name\":\"Blog Comments \", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":3, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":true}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"6e2b3a80-dc83-4ce3-adc2-82ce48ff2ed6\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14e5b36b-e545-88a0-1475-2487df7e9206\":{\"widgetUrl\":\"https:\\/\\/social-blog.wix.com\\/recent-posts-widget\", \"mobileUrl\":\"https:\\/\\/social-blog.wix.com\\/recent-posts-widget\", \"tpaWidgetId\":\"recent-posts-widget\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14c1462a-97f2-9f6a-7bb7-f5541f23caa6\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/Blog\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/Blog\", \"appPage\":{\"id\":\"blog\", \"name\":\"Blog\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"5fdc6c03-080d-4872-b567-24146c82fae5\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"7183995a-bf0b-4a2f-a9b4-a1b7ef96b6fa\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"ff5bffc0-5d09-4b31-b140-be6d8ffa2c03\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"2d4ed2d3-75f8-4942-9787-71e3d182e256\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"46a9e991-c1cc-47c9-b19a-e99d3be1e2c9\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/RelatedPosts\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/RelatedPosts\", \"tpaWidgetId\":\"46a9e991-c1cc-47c9-b19a-e99d3be1e2c9\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"a0d7808c-0d7d-4a40-8cf0-911a9f0de96f\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/CategoryMenu\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/CategoryMenu\", \"tpaWidgetId\":\"a0d7808c-0d7d-4a40-8cf0-911a9f0de96f\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"5940091f-797c-4e86-9c57-73fcfd87425f\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"e5520a99-1725-4b88-a85f-c439916890c8\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"1b5b448c-a39f-4515-9445-c6b4ceace1c2\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"68a2d745-328b-475d-9e36-661f678daa31\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"5e123a45-f3aa-4157-a47a-e58d8cb246eb\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"c0a125b8-2311-451e-99c5-89b6bba02b22\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/TagCloud\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/TagCloud\", \"tpaWidgetId\":\"c0a125b8-2311-451e-99c5-89b6bba02b22\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"b27ea74b-1c6f-4bdb-bda7-8242323ba20b\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"25ab36f9-f8bd-4799-a887-f10b6822fc2e\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14f26109-514f-f9a8-9b3c-4d21861fe58f\":{\"widgetUrl\":\"https:\\/\\/social-blog.wix.com\\/member-likes-page\", \"mobileUrl\":\"https:\\/\\/social-blog.wix.com\\/member-likes-page\", \"appPage\":{\"id\":\"member-likes-page\", \"name\":\"Blog Likes\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":4, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":true}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"e80c482c-f0df-4901-beba-fd1668395f88\":{\"widgetUrl\":\"\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"76359954-edd4-4c46-ad14-a7c5e65cc30c\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14e5b39b-6d47-99c3-3ee5-cee1c2574c89\":{\"widgetUrl\":\"https:\\/\\/social-blog.wix.com\\/custom-feed-widget\", \"mobileUrl\":\"https:\\/\\/social-blog.wix.com\\/custom-feed-widget\", \"tpaWidgetId\":\"custom-feed-widget\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"26858b64-aad8-42ab-8c63-f19009198c7b\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"129259f6-06e4-42a3-9877-81a1fa9de95c\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"d134b0c9-8085-415a-9479-b555374ba958\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"1515a9e7-b579-fbbb-43fc-0e3051c14803\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/RssButton\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/RssButton\", \"tpaWidgetId\":\"rss-feed-widget\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"2f3d2c69-2bc4-4519-bd72-0a63dd92577f\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/Archive\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/Archive\", \"tpaWidgetId\":\"2f3d2c69-2bc4-4519-bd72-0a63dd92577f\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"75eefde7-6159-4e4c-aafd-2aaf5a27ebbd\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"211b5287-14e2-4690-bb71-525908938c81\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/Post\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/Post\", \"appPage\":{\"id\":\"post\", \"name\":\"Post\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":6, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"478911c3-de0c-469e-90e3-304f2f8cd6a7\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/PostTitle\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/PostTitle\", \"tpaWidgetId\":\"478911c3-de0c-469e-90e3-304f2f8cd6a7\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"f43a5e97-d70d-4906-a56e-45fdfc0f5bb7\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"ce8e832b-c34f-4b80-b2a6-6cfd6d573751\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"0cc51cdc-4a4f-4054-9284-6cfb0dc5a22a\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"813eb645-c6bd-4870-906d-694f30869fd9\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/PostList\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/PostList\", \"tpaWidgetId\":\"813eb645-c6bd-4870-906d-694f30869fd9\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"bc7fa914-015b-4c32-a323-e5472563a798\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"7466726a-84cf-41c8-be6b-1694445dc539\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14f260e4-ea13-f861-b0ba-4577df99b961\":{\"widgetUrl\":\"https:\\/\\/social-blog.wix.com\\/member-drafts-page\", \"mobileUrl\":\"https:\\/\\/social-blog.wix.com\\/member-drafts-page\", \"appPage\":{\"id\":\"member-drafts-page\", \"name\":\"My Drafts\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":2, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":true}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"091d05b7-f44d-4a76-9163-0c7ed5312769\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"763aa9a8-0531-426f-a4b1-61a7291ce292\":{\"widgetUrl\":\"https:\\/\\/editor.wix.com\\/\", \"appPage\":{}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"e5a2773b-0e6b-4cbb-a012-3b4a69e92046\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/MyPosts\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/communities-blog-ooi\\/1.3335.0\\/MyPosts\", \"tpaWidgetId\":\"e5a2773b-0e6b-4cbb-a012-3b4a69e92046\", \"appPage\":{\"id\":\"My Posts\", \"name\":\"My Posts\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14f26118-b65b-b1c1-b6db-34d5da9dd623\":{\"widgetUrl\":\"https:\\/\\/social-blog.wix.com\\/member-posts-page\", \"mobileUrl\":\"https:\\/\\/social-blog.wix.com\\/member-posts-page\", \"appPage\":{\"id\":\"member-posts-page\", \"name\":\"Blog Posts\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":5, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":true}, \"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"isWixTPA\":true, \"allowScrolling\":false}, \"141995eb-c700-8487-6366-a482f7432e2b\":{\"widgetUrl\":\"https:\\/\\/so-feed.codev.wixapps.net\\/widget\", \"mobileUrl\":\"https:\\/\\/so-feed.codev.wixapps.net\\/widget\", \"tpaWidgetId\":\"shoutout_feed\", \"appPage\":{}, \"applicationId\":26, \"appDefinitionName\":\"ShoutOut (Legacy)\", \"appDefinitionId\":\"135c3d92-0fea-1f9d-2ba5-2a1dfb04297e\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14dbefdd-0f55-0dfe-70a2-79a8fe7ee7b9\":{\"widgetUrl\":\"https:\\/\\/members.wixapps.net\\/_api\\/members-area\\/app\\/members\", \"mobileUrl\":\"https:\\/\\/members.wixapps.net\\/_api\\/members-area\\/app\\/members\", \"appPage\":{\"id\":\"all_members\", \"name\":\"Members\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":34, \"appDefinitionName\":\"Members\", \"appDefinitionId\":\"14dbefd2-01b4-fb61-32a7-3abd44da4908\", \"isWixTPA\":true, \"allowScrolling\":false}, \"13a94f09-2766-3c40-4a32-8edb5acdd8bc\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-product-page\\/1.4416.0\\/ProductPage\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-product-page\\/1.4416.0\\/ProductPage\", \"appPage\":{\"id\":\"product_page\", \"name\":\"product_page\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":true, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"49dbb2d9-d9e5-4605-a147-e926605bf164\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-cart-ooi\\/1.6407.0\\/SideCart\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-cart-ooi\\/1.6407.0\\/SideCart\", \"tpaWidgetId\":\"49dbb2d9-d9e5-4605-a147-e926605bf164\", \"appPage\":{\"id\":\"Side Cart\", \"name\":\"Side Cart\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"5cd9f867-307e-4f6d-b572-bf262f062e55\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-edit-subscription\\/1.9.0\\/EditSubscription\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-edit-subscription\\/1.9.0\\/EditSubscription\", \"tpaWidgetId\":\"5cd9f867-307e-4f6d-b572-bf262f062e55\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14666402-0bc7-b763-e875-e99840d131bd\":{\"widgetUrl\":\"https:\\/\\/ecom.wix.com\\/storefront\\/add-to-cart\", \"mobileUrl\":\"https:\\/\\/ecom.wix.com\\/storefront\\/add-to-cart\", \"tpaWidgetId\":\"add_to_cart_button\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"a63a5215-8aa6-42af-96b1-583bfd74cff5\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/Wishlist\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/Wishlist\", \"appPage\":{\"id\":\"wishlist\", \"name\":\"My Wishlist\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":7, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"13afb094-84f9-739f-44fd-78d036adb028\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/GridGallery\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/GridGallery\", \"tpaWidgetId\":\"grid_gallery\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"bb5ba6e9-272d-4a4d-a8dd-5e349744b539\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-cart-ooi\\/1.6407.0\\/SuccessPopup\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-cart-ooi\\/1.6407.0\\/SuccessPopup\", \"tpaWidgetId\":\"\", \"appPage\":{\"id\":\"Success Popup\", \"name\":\"Success Popup\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"1380bbab-4da3-36b0-efb4-2e0599971d14\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-cart-ooi\\/1.6407.0\\/cart\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-cart-ooi\\/1.6407.0\\/cart\", \"appPage\":{\"id\":\"shopping_cart\", \"name\":\"Cart Page\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":3, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"a787aa6f-f8f7-4de6-bfab-c105920dfa11\":{\"widgetUrl\":\"\\/\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"139a41fd-0b1d-975f-6f67-e8cbdf8ccc82\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/SliderGallery\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/SliderGallery\", \"tpaWidgetId\":\"slider_gallery\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"1380bbb4-8df0-fd38-a235-88821cf3f8a4\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-thank-you-page-ooi\\/1.3520.0\\/thankYouPage\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-thank-you-page-ooi\\/1.3520.0\\/thankYouPage\", \"appPage\":{\"id\":\"thank_you_page\", \"name\":\"Thank You Page\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":4, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14e121c8-00a3-f7cc-6156-2c82a2ba8fcb\":{\"widgetUrl\":\"https:\\/\\/ecom.wix.com\\/storefront\\/order-history\", \"mobileUrl\":\"https:\\/\\/ecom.wix.com\\/storefront\\/order-history\", \"appPage\":{\"id\":\"order_history\", \"name\":\"My Orders\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":5, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"1380bba0-253e-a800-a235-88821cf3f8a4\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/GridGallery\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/GridGallery\", \"appPage\":{\"id\":\"product_gallery\", \"name\":\"Shop\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":true, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"1380bbc4-1485-9d44-4616-92e36b1ead6b\":{\"widgetUrl\":\"https:\\/\\/ecom.wix.com\\/storefront\\/cartwidget\", \"mobileUrl\":\"https:\\/\\/ecom.wix.com\\/storefront\\/cartwidget\", \"tpaWidgetId\":\"shopping_cart_icon\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"244576c9-d856-49b9-af14-216071924e3b\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.4501.0\\/SearchModalGallery\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.4501.0\\/SearchModalGallery\", \"tpaWidgetId\":\"244576c9-d856-49b9-af14-216071924e3b\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"abcd87fe-c51f-4538-848d-2902a2f50d2d\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.4501.0\\/SearchResultsPageGallery\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.4501.0\\/SearchResultsPageGallery\", \"tpaWidgetId\":\"abcd87fe-c51f-4538-848d-2902a2f50d2d\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"4425f8e8-51fb-457b-9123-fdb7b1cef94a\":{\"widgetUrl\":\"\\/\", \"tpaWidgetId\":\"4425f8e8-51fb-457b-9123-fdb7b1cef94a\", \"appPage\":{\"id\":\"Payment Request Page\", \"name\":\"Payment Request Page\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":true, \"hideFromMenu\":true}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":true}, \"bda15dc1-816d-4ff3-8dcb-1172d5343cce\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/CategoryPage\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/wixstores-client-gallery\\/1.6042.0\\/CategoryPage\", \"tpaWidgetId\":\"bda15dc1-816d-4ff3-8dcb-1172d5343cce\", \"appPage\":{\"id\":\"Category Page\", \"name\":\"Category Page\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":true, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14fd5970-8072-c276-1246-058b79e70c1a\":{\"widgetUrl\":\"https:\\/\\/ecom.wixapps.net\\/storefront\\/checkout\", \"mobileUrl\":\"https:\\/\\/ecom.wixapps.net\\/storefront\\/checkout\", \"appPage\":{\"id\":\"checkout\", \"name\":\"Checkout\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":6, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":true, \"hideFromMenu\":true}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":true}, \"13ec3e79-e668-cc0c-2d48-e99d53a213dd\":{\"widgetUrl\":\"https:\\/\\/ecom.wix.com\\/storefront\\/product-widget-view\", \"mobileUrl\":\"https:\\/\\/ecom.wix.com\\/storefront\\/product-widget-view\", \"tpaWidgetId\":\"product_widget\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"deaaaab0-f5bd-4b7a-a652-3845efcb546a\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/ecom-platform-checkout\\/1.0.0\\/BundleBundle\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/ecom-platform-checkout\\/1.0.0\\/BundleBundle\", \"tpaWidgetId\":\"deaaaab0-f5bd-4b7a-a652-3845efcb546a\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"215f8ab7-97c3-4838-a6d0-ad4a61747158\":{\"widgetUrl\":\"\\/\", \"appPage\":{}, \"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"isWixTPA\":true, \"allowScrolling\":false}, \"b29db04a-a8f2-4bfe-bbad-21c99c1054b5\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/subscriptions-tpa\\/1.1242.0\\/MySubscriptions\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/subscriptions-tpa\\/1.1242.0\\/MySubscriptions\", \"tpaWidgetId\":\"\", \"appPage\":{\"id\":\"My Subscriptions\", \"name\":\"My Subscriptions\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":49, \"appDefinitionName\":\"My Subscriptions\", \"appDefinitionId\":\"2bef2abe-7abe-43da-889c-53c1500a328c\", \"isWixTPA\":true, \"allowScrolling\":false}, \"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-viewer\\/1.4332.0\\/widget\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-viewer\\/1.4332.0\\/widget\", \"tpaWidgetId\":\"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf\", \"appPage\":{\"id\":\"Event List\", \"name\":\"Event List\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":1281, \"appDefinitionName\":\"Wix Events & Tickets\", \"appDefinitionId\":\"140603ad-af8d-84a5-2c80-a0f60cb47351\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14d2abc2-5350-6322-487d-8c16ff833c8a\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-details-page\\/1.993.0\\/details-page\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-details-page\\/1.993.0\\/details-page\", \"appPage\":{\"id\":\"events\", \"name\":\"Event Details\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":1281, \"appDefinitionName\":\"Wix Events & Tickets\", \"appDefinitionId\":\"140603ad-af8d-84a5-2c80-a0f60cb47351\", \"isWixTPA\":true, \"allowScrolling\":false}, \"1440e92d-47d8-69be-ade7-e6de40127106\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-viewer\\/1.4332.0\\/widget\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-viewer\\/1.4332.0\\/widget\", \"tpaWidgetId\":\"wix_events\", \"appPage\":{}, \"applicationId\":1281, \"appDefinitionName\":\"Wix Events & Tickets\", \"appDefinitionId\":\"140603ad-af8d-84a5-2c80-a0f60cb47351\", \"isWixTPA\":true, \"allowScrolling\":false}, \"405eb115-a694-4e2b-abaa-e4762808bb93\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-viewer\\/1.4332.0\\/members-page\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-viewer\\/1.4332.0\\/members-page\", \"appPage\":{\"id\":\"events_members_page\", \"name\":\"Events\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":2, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":1281, \"appDefinitionName\":\"Wix Events & Tickets\", \"appDefinitionId\":\"140603ad-af8d-84a5-2c80-a0f60cb47351\", \"isWixTPA\":true, \"allowScrolling\":false}, \"29ad290c-8529-4204-8fcf-41ef46e0d3b0\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-viewer\\/1.4332.0\\/schedule\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/events-viewer\\/1.4332.0\\/schedule\", \"tpaWidgetId\":\"agenda-page\", \"appPage\":{\"id\":\"Schedule\", \"name\":\"Schedule\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":1281, \"appDefinitionName\":\"Wix Events & Tickets\", \"appDefinitionId\":\"140603ad-af8d-84a5-2c80-a0f60cb47351\", \"isWixTPA\":true, \"allowScrolling\":false}, \"142bb34d-3439-576a-7118-683e690a1e0d\":{\"widgetUrl\":\"https:\\/\\/progallery.wixapps.net\\/gallery.html\", \"mobileUrl\":\"https:\\/\\/progallery.wixapps.net\\/gallery.html\", \"tpaWidgetId\":\"pro-gallery\", \"appPage\":{}, \"applicationId\":1797, \"appDefinitionName\":\"Wix Pro Gallery\", \"appDefinitionId\":\"14271d6f-ba62-d045-549b-ab972ae1f70e\", \"isWixTPA\":true, \"allowScrolling\":false}, \"144f04b9-aab4-fde7-179b-780c11da4f46\":{\"widgetUrl\":\"https:\\/\\/progallery.wixapps.net\\/fullscreen\", \"mobileUrl\":\"https:\\/\\/progallery.wixapps.net\\/fullscreen\", \"appPage\":{\"id\":\"fullscreen_page\", \"name\":\"Fullscreen Page\", \"defaultPage\":\"\", \"hidden\":true, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":true, \"landingPageInMobile\":false, \"hideFromMenu\":true}, \"applicationId\":1797, \"appDefinitionName\":\"Wix Pro Gallery\", \"appDefinitionId\":\"14271d6f-ba62-d045-549b-ab972ae1f70e\", \"isWixTPA\":true, \"allowScrolling\":true}, \"3e986f2b-6126-4ba0-8415-b375e9d61c52\":{\"widgetUrl\":\"\\/\", \"appPage\":{}, \"applicationId\":2722, \"appDefinitionName\":\"Old Wix Forms and Payments\", \"appDefinitionId\":\"14ce1214-b278-a7e4-1373-00cebd1bef7c\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14cefc05-d163-dbb7-e4ec-cd4f2c4d6ddd\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/profile-card-tpa-ooi\\/1.2966.0\\/ProfileCard\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/profile-card-tpa-ooi\\/1.2966.0\\/ProfileCard\", \"tpaWidgetId\":\"profile\", \"appPage\":{}, \"applicationId\":7611, \"appDefinitionName\":\"Profile Card\", \"appDefinitionId\":\"14ce28f7-7eb0-3745-22f8-074b0e2401fb\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14dd1af6-3e02-63db-0ef2-72fbc7cc3136\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/my-account-ooi\\/1.2859.0\\/MyAccount\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/my-account-ooi\\/1.2859.0\\/MyAccount\", \"appPage\":{\"id\":\"member_info\", \"name\":\"My Account\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":7856, \"appDefinitionName\":\"Member Account Info\", \"appDefinitionId\":\"14cffd81-5215-0a7f-22f8-074b0e2401fb\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14dbefb9-3b7b-c4e9-53e8-766defd30587\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-about-ooi\\/1.2711.0\\/Profile\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-about-ooi\\/1.2711.0\\/Profile\", \"appPage\":{\"id\":\"about\", \"name\":\"Profile\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":8091, \"appDefinitionName\":\"Members About\", \"appDefinitionId\":\"14dbef06-cc42-5583-32a7-3abd44da4908\", \"isWixTPA\":true, \"allowScrolling\":false}, \"6467c15e-af3c-4e8d-b167-41bfb8efc32a\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/payments-my-wallet\\/1.1357.0\\/MyWallet\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/payments-my-wallet\\/1.1357.0\\/MyWallet\", \"appPage\":{\"id\":\"my_wallet\", \"name\":\"My Wallet\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":8151, \"appDefinitionName\":\"My Wallet\", \"appDefinitionId\":\"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14c7a0b4-7a26-1564-3e6e-784b7d1cabca\":{\"widgetUrl\":\"https:\\/\\/wix.shareiiit.com\\/feed\\/app\", \"mobileUrl\":\"https:\\/\\/wix.shareiiit.com\\/feed\\/app\", \"tpaWidgetId\":\"feed\", \"appPage\":{}, \"applicationId\":10219, \"appDefinitionName\":\"News Ticker\", \"appDefinitionId\":\"14c7a093-ff13-126a-2672-6adefebf5c02\", \"isWixTPA\":false, \"allowScrolling\":false}, \"4a60a434-d08a-4bd4-a323-4c2479db87ea\":{\"widgetUrl\":\"\\/\", \"appPage\":{}, \"applicationId\":11709, \"appDefinitionName\":\"Wix Site Search\", \"appDefinitionId\":\"1484cb44-49cd-5b39-9681-75188ab429de\", \"isWixTPA\":true, \"allowScrolling\":false}, \"44c66af6-4d25-485a-ad9d-385f5460deef\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/search-app\\/1.3998.0\\/SearchResults\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/search-app\\/1.3998.0\\/SearchResults\", \"appPage\":{\"id\":\"search_results\", \"name\":\"Search Results\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":11709, \"appDefinitionName\":\"Wix Site Search\", \"appDefinitionId\":\"1484cb44-49cd-5b39-9681-75188ab429de\", \"isWixTPA\":true, \"allowScrolling\":false}, \"04462ba4-2137-41bd-9460-0814554aae07\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-area-notifications-preferences\\/1.63.0\\/PreferencesOoi\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-area-notifications-preferences\\/1.63.0\\/PreferencesOoi\", \"tpaWidgetId\":\"04462ba4-2137-41bd-9460-0814554aae07\", \"appPage\":{\"id\":\"Settings\", \"name\":\"Settings\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":12284, \"appDefinitionName\":\"Members Notifications Settings\", \"appDefinitionId\":\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14f25dd2-f9b0-edc2-f38e-eded5da094aa\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-area-notifications-preferences\\/1.68.0\\/PreferencesOoi\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-area-notifications-preferences\\/1.68.0\\/PreferencesOoi\", \"appPage\":{\"id\":\"settings\", \"name\":\"Settings\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":12284, \"appDefinitionName\":\"Members Notifications Settings\", \"appDefinitionId\":\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\", \"isWixTPA\":true, \"allowScrolling\":false}, \"14f2595a-a352-3ff1-9b3c-4d21861fe58f\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-area-notifications\\/1.7.0\\/OoiNotifications\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-area-notifications\\/1.7.0\\/OoiNotifications\", \"appPage\":{\"id\":\"notifications_app\", \"name\":\"Notifications\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":false, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":12701, \"appDefinitionName\":\"Wix Members Area Notifications\", \"appDefinitionId\":\"14f25924-5664-31b2-9568-f9c5ed98c9b1\", \"isWixTPA\":true, \"allowScrolling\":false}, \"6ca9273a-a775-407c-87e1-9685588c9aa7\":{\"widgetUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-area-notifications\\/1.7.0\\/Notifications\", \"mobileUrl\":\"https:\\/\\/editor.wixapps.net\\/render\\/prod\\/editor\\/members-area-notifications\\/1.7.0\\/Notifications\", \"tpaWidgetId\":\"6ca9273a-a775-407c-87e1-9685588c9aa7\", \"appPage\":{\"id\":\"Notifications\", \"name\":\"Notifications\", \"defaultPage\":\"\", \"hidden\":false, \"multiInstanceEnabled\":false, \"order\":1, \"indexable\":true, \"fullPage\":false, \"landingPageInMobile\":false, \"hideFromMenu\":false}, \"applicationId\":12701, \"appDefinitionName\":\"Wix Members Area Notifications\", \"appDefinitionId\":\"14f25924-5664-31b2-9568-f9c5ed98c9b1\", \"isWixTPA\":true, \"allowScrolling\":false}, \"13413a43-5f07-2918-9924-bc7506a64d36\":{\"widgetUrl\":\"https:\\/\\/wix-visual-data.appspot.com\\/index\", \"mobileUrl\":\"https:\\/\\/wix-visual-data.appspot.com\\/mobile\", \"tpaWidgetId\":\"visual_data\", \"appPage\":{}, \"applicationId\":15272, \"appDefinitionName\":\"Table Master\", \"appDefinitionId\":\"134139f3-f2a0-2c2c-693c-ed22165cfd84\", \"isWixTPA\":true, \"allowScrolling\":false}, \"12e2298e-de9c-b8a1-14a2-1d6059bc7998\":{\"widgetUrl\":\"https:\\/\\/app.visitorsmap.app\\/wixMaps.pl\", \"mobileUrl\":\"https:\\/\\/app.visitorsmap.app\\/wixMaps.pl\", \"tpaWidgetId\":\"visitor_maps\", \"appPage\":{}, \"applicationId\":16393, \"appDefinitionName\":\"Visitors Map\", \"appDefinitionId\":\"12dc0a44-f144-07d7-c8ea-1ac31b327b9e\", \"isWixTPA\":false, \"allowScrolling\":false}}, \"appsClientSpecMapData\":{\"148c2287-c669-d849-d153-463c7486a694\":{\"applicationId\":8, \"appDefinitionName\":\"Wix Groups\", \"appFields\":{\"platform\":{\"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/viewerScript.bundle.min.js\", \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/editorScript.bundle.min.js\", \"baseUrls\":{\"staticsGroupBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\"}, \"baseUrlsTemplate\":{\"staticsGroupBaseUrl\":\" \"}, \"margins\":{\"desktop\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}, \"tablet\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}, \"mobile\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"isStretched\":{\"desktop\":true, \"tablet\":true, \"mobile\":true}, \"docking\":{\"desktop\":{\"vertical\":\"TOP_DOCKING\"}, \"tablet\":{}, \"mobile\":{}}, \"errorReporting\":{\"url\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\"}, \"width\":{\"desktop\":{\"type\":\"PERCENTAGE\", \"value\":100}, \"tablet\":{\"type\":\"PERCENTAGE\", \"value\":100}, \"mobile\":{\"type\":\"PERCENTAGE\", \"value\":100}}, \"viewer\":{\"errorReporting\":{\"url\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\"}}}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.2873.0\", \"appConfig\":{\"siteConfig\":{\"siteStructureApi\":\"wixArtifactId:com.wixpress.groups.social-groups-web\"}, \"namespace\":\"wix.groups\"}}, \"isWixTPA\":true}, \"14409595-f076-4753-8303-9a86f9f71469\":{\"applicationId\":9, \"appDefinitionName\":\"Wix Video\", \"appFields\":{\"platform\":{\"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/vod-server.wix.com\\/\"}, \"margins\":{\"desktop\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-vod-widget\\/1.4650.0\\/editorScript.bundle.min.js\", \"isStretched\":{\"desktop\":false, \"tablet\":false, \"mobile\":false}, \"docking\":{\"desktop\":{\"horizontal\":\"HCENTER\", \"vertical\":\"TOP_DOCKING\"}}, \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-vod-widget\\/1.4650.0\\/viewerScript.bundle.min.js\"}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.398.0\", \"hipaaCompliant\":true}, \"isWixTPA\":true}, \"14bcded7-0066-7c35-14d7-466cb3f09103\":{\"applicationId\":10, \"appDefinitionName\":\"Wix Blog\", \"appFields\":{\"platform\":{\"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/viewerScript.bundle.min.js\", \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/editorScript.bundle.min.js\", \"baseUrls\":{\"mediaImageHost\":\"static.wixstatic.com\", \"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"duplexerUrl\":\"duplexer.wix.com\", \"apiBaseUrlClient\":\"\\/_api\\/communities-blog-node-api\", \"translationsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-translations\\/1.4450.0\\/\", \"siteAssets\":\"{urlTemplate: {siteAssets}?siteId=f2343010-d1f3-4080-a98e-3d82976a671d&metaSiteId=2b9fa616-1dde-46d3-a1a3-d715ebc1d57d&siteRevision=1335\", \"apiPlatformizedBaseUrl\":\"https:\\/\\/www.wix.com\\/_api\\/communities-blog-api-web\", \"mediaVideoHost\":\"video.wixstatic.com\", \"apiPlatformizedBaseUrlClient\":\"\\/_api\\/communities-blog-api-web\", \"apiBaseUrl\":\"https:\\/\\/apps.wix.com\\/_api\\/communities-blog-node-api\", \"apiExperimentsBaseUrlClient\":\"\\/_api\\/wix-laboratory-server\", \"blocks_devSiteUrl\":\"https:\\/\\/zanass1.editorx.io\\/2w5loeiwuf2frneevn6m\", \"blocks_widgetManifestsUrl\":\"\\/manifests\\/14bcded7-0066-7c35-14d7-466cb3f09103\\/1335\\/manifests.json\", \"useArchiveWidgetAdapter\":\"false\", \"disableDuplexerForInstanceIds\":\"671e6bcb-a0a9-4ae0-98f2-f81a607bf167\", \"provisioningModalUrl\":\"https:\\/\\/www.wix.com\\/_partials\\/communities-blog-provisioning-modal\\/1.1107.0\\/modal.html\", \"apiAggregatorBaseUrl\":\"\\/blog-frontend-adapter-public\", \"apiPaywallBaseUrl\":\"\\/_api\\/paywall-server\", \"categoryLabel\":\"false\"}, \"margins\":{\"desktop\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"migratedToNewPlatformApi\":true, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"editorTranslationUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.2252.0\\/assets\\/locales\\/messages_%7B%7Blng%7D%7D.json\", \"docking\":{\"desktop\":{\"horizontal\":\"HCENTER\", \"vertical\":\"TOP_DOCKING\"}, \"tablet\":{}, \"mobile\":{}}, \"errorReporting\":{\"url\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\"}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{\"url\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\"}}, \"studio\":{\"siteHeaderUrl\":\"ae7beb322e32912fccc688a488a3de89_r3.json\", \"wixCodeGridId\":\"21056c2c-144a-488f-912d-5fb0e1262beb\", \"wixCodeInstanceId\":\"c520f32b-7cd2-44bd-a087-e5c72fd7af4c\"}}, \"excludeFromAutoRevoke\":true, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.5666.0\", \"hipaaCompliant\":true, \"appConfig\":{\"siteConfig\":{\"siteStructureApi\":\"wixArtifactId:com.wixpress.npm.communities-blog-node-api\"}}}, \"isWixTPA\":true}, \"135c3d92-0fea-1f9d-2ba5-2a1dfb04297e\":{\"applicationId\":26, \"appDefinitionName\":\"ShoutOut (Legacy)\", \"appFields\":{\"premiumBundle\":{\"parentAppSlug\":\"ee21fe60-48c5-45e9-95f4-6ca8f9b1c9d9\", \"parentAppId\":\"ee21fe60-48c5-45e9-95f4-6ca8f9b1c9d9\"}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.4104.0\", \"hipaaCompliant\":true}, \"isWixTPA\":true}, \"14dbefd2-01b4-fb61-32a7-3abd44da4908\":{\"applicationId\":34, \"appDefinitionName\":\"Members\", \"appFields\":{\"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.25.0\", \"hipaaCompliant\":true, \"platform\":{\"margins\":{\"desktop\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-app-editor-script\\/1.602.0\\/editorScript.bundle.min.js\", \"viewerScriptUrlTemplate\":\"\", \"docking\":{\"desktop\":{\"horizontal\":\"HCENTER\", \"vertical\":\"TOP_DOCKING\"}, \"tablet\":{}, \"mobile\":{}}, \"errorReporting\":{}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{}}}}, \"isWixTPA\":true}, \"1380b703-ce81-ff05-f115-39571d94dfcd\":{\"applicationId\":38, \"appDefinitionName\":\"Checkout & Orders\", \"appFields\":{\"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.6975.0\", \"hipaaCompliant\":true, \"platform\":{\"routerHttpMethod\":\"GET\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"addToCartBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-add-to-cart\\/1.1500.0\\/\", \"cartIconBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-icon\\/1.2290.0\\/\", \"productWidgetBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-widget\\/1.2058.0\\/\", \"galleryBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/\", \"wishlistBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-wishlist\\/1.2322.0\\/\", \"productPageBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-page\\/1.4416.0\\/\"}, \"margins\":{\"desktop\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-worker\\/1.4832.0\\/editor.bundle.min.js\", \"routerServiceUrl\":\"\\/_api\\/wixstores-tpa-router\", \"docking\":{\"desktop\":{\"horizontal\":\"HCENTER\", \"vertical\":\"TOP_DOCKING\"}, \"tablet\":{}, \"mobile\":{}}, \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-viewer-script\\/1.155.0\\/webworker\\/ecom-platform-viewer-script.umd.min.js\", \"errorReporting\":{}, \"platformOnly\":true, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{}}}, \"appConfig\":{\"siteConfig\":{\"siteStructureApi\":\"wixArtifactId:serverless.wixstores-tpa-site-structure-service\"}}}, \"isWixTPA\":true}, \"2bef2abe-7abe-43da-889c-53c1500a328c\":{\"applicationId\":49, \"appDefinitionName\":\"My Subscriptions\", \"appFields\":{\"platform\":{\"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\"}, \"margins\":{\"desktop\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/editorScript.bundle.min.js\", \"docking\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/viewerScript.bundle.min.js\", \"errorReporting\":{}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{}}}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.143.0\", \"hipaaCompliant\":true}, \"isWixTPA\":true}, \"140603ad-af8d-84a5-2c80-a0f60cb47351\":{\"applicationId\":1281, \"appDefinitionName\":\"Wix Events & Tickets\", \"appFields\":{\"platform\":{\"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/viewerScript.bundle.min.js\", \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/editorScript.bundle.min.js\", \"baseUrls\":{\"baseUrl\":\"https:\\/\\/events.wixapps.net\\/_api\\/wix-one-events-server\", \"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\"}, \"baseUrlsTemplate\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\"}, \"margins\":{\"desktop\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"docking\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"errorReporting\":{\"url\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\"}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{\"url\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\"}}}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"newEditorSchemaVersion\":\"externalUnifiedComponents\", \"isStandalone\":true, \"semanticVersion\":\"^0.2612.0\", \"hipaaCompliant\":true, \"appConfig\":{\"siteConfig\":{\"siteStructureApi\":\"wixArtifactId:com.wixpress.wix-events-web\"}, \"namespace\":\"wix.events\"}}, \"isWixTPA\":true}, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":{\"applicationId\":1797, \"appDefinitionName\":\"Wix Pro Gallery\", \"appFields\":{\"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.980.0\", \"hipaaCompliant\":true, \"platform\":{\"baseUrls\":{\"siteAssets\":\"{urlTemplate: {siteAssets}?siteId=ce7fd828-85c4-4b73-a390-d293eae32cec&metaSiteId=5af77ffc-cae0-4550-8a1e-4a85ff049a48&siteRevision=25\", \"blocks_widgetManifestsUrl\":\"\\/manifests\\/14271d6f-ba62-d045-549b-ab972ae1f70e\\/25\\/manifests.json\", \"santaWrapperBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/pro-gallery-tpa\\/1.1532.0\\/\"}, \"margins\":{\"desktop\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"cloneAppDataUrl\":\"https:\\/\\/progallery.wixapps.net\\/_api\\/gallery\\/clone\", \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/pro-gallery-tpa\\/1.1532.0\\/editorScript.bundle.min.js\", \"docking\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/pro-gallery-tpa\\/1.1532.0\\/viewerScript.bundle.min.js\", \"errorReporting\":{\"url\":\"https:\\/\\/8eb368c655b84e029ed79ad7a5c1718e@sentry.wixpress.com\\/3427\"}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"shouldCloneDataPerComponent\":true, \"viewer\":{\"errorReporting\":{\"url\":\"https:\\/\\/8eb368c655b84e029ed79ad7a5c1718e@sentry.wixpress.com\\/3427\"}}, \"studio\":{\"siteHeaderUrl\":\"a7dbf879980a8e90e03d649b6f48fac4_r3.json\", \"wixCodeGridId\":\"71869e96-79b7-49b9-b6f9-e32bcf00ac52\", \"wixCodeInstanceId\":\"4655355b-4814-4846-b82a-e057f0df94a3\"}}}, \"isWixTPA\":true}, \"14ce1214-b278-a7e4-1373-00cebd1bef7c\":{\"applicationId\":2722, \"appDefinitionName\":\"Old Wix Forms and Payments\", \"appFields\":{\"platform\":{\"hasDashboardComponent\":true, \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/forms-viewer\\/1.883.0\\/viewerScript.bundle.min.js\", \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-form-builder\\/1.5877.0\\/editor-app.bundle.min.js\", \"margins\":{\"desktop\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"docking\":{\"desktop\":{\"horizontal\":\"HCENTER\", \"vertical\":\"TOP_DOCKING\"}, \"tablet\":{}, \"mobile\":{}}, \"errorReporting\":{}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{}}}, \"mostPopularPackage\":\"Mid_Range\", \"premiumBundle\":{\"parentAppSlug\":\"ee21fe60-48c5-45e9-95f4-6ca8f9b1c9d9\", \"parentAppId\":\"ee21fe60-48c5-45e9-95f4-6ca8f9b1c9d9\"}, \"featuresForNewPackagePicker\":[{\"forPackages\":[{\"value\":\"Unlimited\", \"packageId\":\"Basic\"}, {\"value\":\"Unlimited\", \"packageId\":\"Mid_Range\"}, {\"value\":\"Unlimited\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"true\", \"packageId\":\"Basic\"}, {\"value\":\"true\", \"packageId\":\"Mid_Range\"}, {\"value\":\"true\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"100MB Storage\", \"packageId\":\"Basic\"}, {\"value\":\"1GB Storage\", \"packageId\":\"Mid_Range\"}, {\"value\":\"10GB Storage\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"10 Forms\", \"packageId\":\"Basic\"}, {\"value\":\"100 Forms\", \"packageId\":\"Mid_Range\"}, {\"value\":\"Unlimited\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"1000 Submissions\\/month\", \"packageId\":\"Basic\"}, {\"value\":\"5000 Submissions\\/month\", \"packageId\":\"Mid_Range\"}, {\"value\":\"Unlimited\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"1 User\", \"packageId\":\"Basic\"}, {\"value\":\"5 Users\", \"packageId\":\"Mid_Range\"}, {\"value\":\"Unlimited Users\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"true\", \"packageId\":\"Basic\"}, {\"value\":\"true\", \"packageId\":\"Mid_Range\"}, {\"value\":\"true\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"true\", \"packageId\":\"Basic\"}, {\"value\":\"true\", \"packageId\":\"Mid_Range\"}, {\"value\":\"true\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"true\", \"packageId\":\"Basic\"}, {\"value\":\"true\", \"packageId\":\"Mid_Range\"}, {\"value\":\"true\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"true\", \"packageId\":\"Basic\"}, {\"value\":\"true\", \"packageId\":\"Mid_Range\"}, {\"value\":\"true\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"true\", \"packageId\":\"Basic\"}, {\"value\":\"true\", \"packageId\":\"Mid_Range\"}, {\"value\":\"true\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"true\", \"packageId\":\"Basic\"}, {\"value\":\"true\", \"packageId\":\"Mid_Range\"}, {\"value\":\"true\", \"packageId\":\"Pro\"}]}, {\"forPackages\":[{\"value\":\"true\", \"packageId\":\"Mid_Range\"}, {\"value\":\"true\", \"packageId\":\"Pro\"}]}], \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.1264.0\", \"hipaaCompliant\":false}, \"isWixTPA\":true}, \"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":{\"applicationId\":7611, \"appDefinitionName\":\"Profile Card\", \"appFields\":{\"platform\":{\"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\"}, \"margins\":{\"desktop\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/editorScript.bundle.min.js\", \"docking\":{\"desktop\":{\"horizontal\":\"HCENTER\", \"vertical\":\"TOP_DOCKING\"}, \"tablet\":{}, \"mobile\":{}}, \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/viewerScript.bundle.min.js\", \"errorReporting\":{}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{}}}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.303.0\", \"hipaaCompliant\":true}, \"isWixTPA\":true}, \"14cffd81-5215-0a7f-22f8-074b0e2401fb\":{\"applicationId\":7856, \"appDefinitionName\":\"Member Account Info\", \"appFields\":{\"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.269.0\", \"hipaaCompliant\":true, \"platform\":{\"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\"}, \"margins\":{\"desktop\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/editorScript.bundle.min.js\", \"docking\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/viewerScript.bundle.min.js\", \"errorReporting\":{}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{}}}}, \"isWixTPA\":true}, \"14dbef06-cc42-5583-32a7-3abd44da4908\":{\"applicationId\":8091, \"appDefinitionName\":\"Members About\", \"appFields\":{\"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.227.0\", \"hipaaCompliant\":true, \"platform\":{\"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\"}, \"margins\":{\"desktop\":{\"top\":{\"type\":\"PX\", \"value\":0}, \"right\":{\"type\":\"PX\", \"value\":0}, \"bottom\":{\"type\":\"PX\", \"value\":0}, \"left\":{\"type\":\"PX\", \"value\":0}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/editorScript.bundle.min.js\", \"docking\":{\"desktop\":{\"horizontal\":\"HCENTER\", \"vertical\":\"TOP_DOCKING\"}, \"tablet\":{}, \"mobile\":{}}, \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/viewerScript.bundle.min.js\", \"errorReporting\":{}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{}}}}, \"isWixTPA\":true}, \"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\":{\"applicationId\":8151, \"appDefinitionName\":\"My Wallet\", \"appFields\":{\"platform\":{\"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\"}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/editorScript.bundle.min.js\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/viewerScript.bundle.min.js\", \"errorReporting\":{\"url\":\"https:\\/\\/9a65e97ebe8141fca0c4fd686f70996b@sentry.wixpress.com\\/5894\"}, \"viewer\":{\"errorReporting\":{\"url\":\"https:\\/\\/9a65e97ebe8141fca0c4fd686f70996b@sentry.wixpress.com\\/5894\"}}}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.82.0\", \"hipaaCompliant\":true}, \"isWixTPA\":true}, \"14c7a093-ff13-126a-2672-6adefebf5c02\":{\"applicationId\":10219, \"appDefinitionName\":\"News Ticker\", \"appFields\":{\"featuresForNewPackagePicker\":[], \"packagePickerV2\":[{\"model\":{\"features\":[{\"description\":\"Free plan is limited to 3 news items.\", \"name\":\"Unlimited News Items\", \"id\":\"95070fd8-4947-4831-becd-947aec708193\"}, {\"description\":\"Customize your ticker layout, text colors & fonts and running animation.\", \"name\":\"Design and Animation\", \"id\":\"20d503c0-4730-48da-b560-3d01387c55bf\"}, {\"description\":\"Link news items to other web pages.\", \"name\":\"Links\", \"id\":\"e6ccac75-30e6-458c-9680-027f87ceefb7\"}, {\"description\":\"Have a different feed for each installation.\", \"name\":\"Multiple Feeds\", \"id\":\"3d1ea2be-d587-4bab-9adc-9036c6cb74a4\"}, {\"description\":\"The \\\"Powered by\\\" banner is removed for premium users.\", \"name\":\"Remove Our Branding\", \"id\":\"a62e177d-9dcc-4803-9ed9-dda719f8b907\"}], \"isExternalPricing\":false, \"languageCode\":\"en\", \"isInAppPurchase\":false, \"freeTrialDays\":0, \"plans\":[{\"name\":\"Free\", \"featureList\":{\"95070fd8-4947-4831-becd-947aec708193\":\"3\", \"20d503c0-4730-48da-b560-3d01387c55bf\":\"\", \"e6ccac75-30e6-458c-9680-027f87ceefb7\":\"\"}, \"id\":\"f739642d-8ded-4127-992a-77bb6ff57b04\", \"mostPopular\":false, \"billing\":{\"oneTimePrice\":0, \"yearlyDiscountPercent\":0, \"monthlyPrice\":0, \"yearlyPrice\":0}}, {\"name\":\"Premium\", \"vendorId\":\"premium\", \"featureList\":{\"a62e177d-9dcc-4803-9ed9-dda719f8b907\":\"\", \"e6ccac75-30e6-458c-9680-027f87ceefb7\":\"\", \"20d503c0-4730-48da-b560-3d01387c55bf\":\"\", \"95070fd8-4947-4831-becd-947aec708193\":\"Unlimited\", \"3d1ea2be-d587-4bab-9adc-9036c6cb74a4\":\"\"}, \"id\":\"245be537-35d0-4c20-9ecb-ac80ee6a861d\", \"mostPopular\":false, \"billing\":{\"oneTimePrice\":0, \"yearlyDiscountPercent\":16, \"monthlyPrice\":2.9900000095367, \"yearlyPrice\":2.5}}], \"businessModel\":\"FREEMIUM\"}}], \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.0.0\", \"installedVersion\":\"^0.0.0\"}, \"isWixTPA\":false}, \"1484cb44-49cd-5b39-9681-75188ab429de\":{\"applicationId\":11709, \"appDefinitionName\":\"Wix Site Search\", \"appFields\":{\"platform\":{\"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/viewerScript.bundle.min.js\", \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/editorScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/\"}, \"baseUrlsTemplate\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/\"}, \"margins\":{\"desktop\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"tablet\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}, \"mobile\":{\"top\":{}, \"right\":{}, \"bottom\":{}, \"left\":{}}}, \"height\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"editorTranslationUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3605.0\\/assets\\/locales\\/messages_%7B%7Blng%7D%7D.json\", \"docking\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"errorReporting\":{}, \"width\":{\"desktop\":{}, \"tablet\":{}, \"mobile\":{}}, \"viewer\":{\"errorReporting\":{}}}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.461.0\", \"hipaaCompliant\":true}, \"isWixTPA\":true}, \"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\":{\"applicationId\":12284, \"appDefinitionName\":\"Members Notifications Settings\", \"appFields\":{\"platform\":{\"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\"}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\\/editorScript.bundle.min.js\", \"viewerScriptUrlTemplate\":\" \", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\\/viewerScript.bundle.min.js\", \"errorReporting\":{\"url\":\"https:\\/\\/271e9fa3230b4eec94b02bf95780f5f2@sentry.wixpress.com\\/6097\"}, \"viewer\":{\"errorReporting\":{\"url\":\"https:\\/\\/271e9fa3230b4eec94b02bf95780f5f2@sentry.wixpress.com\\/6097\"}}}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.23.0\", \"hipaaCompliant\":true}, \"isWixTPA\":true}, \"14f25924-5664-31b2-9568-f9c5ed98c9b1\":{\"applicationId\":12701, \"appDefinitionName\":\"Wix Members Area Notifications\", \"appFields\":{\"platform\":{\"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\"}, \"editorScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/editorScript.bundle.min.js\", \"viewerScriptUrlTemplate\":\" \", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/viewerScript.bundle.min.js\", \"errorReporting\":{\"url\":\"https:\\/\\/460ff4620fa44cba8df530afde949785@sentry.wixpress.com\\/5803\"}, \"viewer\":{\"errorReporting\":{\"url\":\"https:\\/\\/460ff4620fa44cba8df530afde949785@sentry.wixpress.com\\/5803\"}}}, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.45.0\", \"hipaaCompliant\":true}, \"isWixTPA\":true}, \"134139f3-f2a0-2c2c-693c-ed22165cfd84\":{\"applicationId\":15272, \"appDefinitionName\":\"Table Master\", \"appFields\":{\"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^0.20.0\", \"hipaaCompliant\":true, \"installedVersion\":\"^0.0.0\"}, \"isWixTPA\":true}, \"12dc0a44-f144-07d7-c8ea-1ac31b327b9e\":{\"applicationId\":16393, \"appDefinitionName\":\"Visitors Map\", \"appFields\":{\"featuresForNewPackagePicker\":[], \"packagePickerV2\":[{\"model\":{\"features\":[{\"description\":\"Zoomable, panable world map, with your last 100 most recent visitors\", \"name\":\"World map of your visitors\", \"id\":\"78f3f22f-389b-44f7-9ac4-1c884f0edf18\"}, {\"description\":\"Customize the initial zoom, longitude and latitude visitors see on your map. \", \"name\":\"Set Your Map’s Look \", \"id\":\"a2665c19-1f81-4582-9911-612d68655c08\"}, {\"description\":\"Get the precise location of every new visitor to your site.\\r\\n\", \"name\":\"Location of all visitors\", \"id\":\"0e38bf09-2c9e-4792-b78d-bc2bef0a6d3b\"}, {\"description\":\"Up to 500 recent visitors on your map (instead of 100)\", \"name\":\"More visitors\", \"id\":\"c0c7fa68-db04-43ed-be25-d1391b207672\"}, {\"description\":\"You've got 6 map designs to choose from to match the look and feel of your site.\", \"name\":\"6 beautiful map designs\", \"id\":\"1061d806-770d-486d-8d5c-909d982be0d4\"}, {\"description\":\"Points, Clusters or Heat Map - choose how you want to display your site visitors.\", \"name\":\"Choose From 3 Map Types\", \"id\":\"0af74752-b8d2-4219-b471-b62552a20ecc\"}, {\"description\":\"With this option enabled, new visitors appear automatically on the map without any action on your part (no need to refresh the map)\", \"name\":\"Automatic live updating\", \"id\":\"88610307-dddf-4bc0-b997-f8e76ff81f83\"}], \"isExternalPricing\":false, \"languageCode\":\"en\", \"isInAppPurchase\":false, \"freeTrialDays\":0, \"plans\":[{\"name\":\"Free\", \"featureList\":{\"0e38bf09-2c9e-4792-b78d-bc2bef0a6d3b\":\"\", \"a2665c19-1f81-4582-9911-612d68655c08\":\"\", \"78f3f22f-389b-44f7-9ac4-1c884f0edf18\":\"\"}, \"id\":\"45f1bc9e-884a-4a03-b9b0-452e98e0a2ab\", \"mostPopular\":false, \"billing\":{\"oneTimePrice\":0, \"yearlyDiscountPercent\":0, \"monthlyPrice\":0, \"yearlyPrice\":0}}, {\"name\":\"Premium version\", \"vendorId\":\"premium\", \"featureList\":{\"1061d806-770d-486d-8d5c-909d982be0d4\":\"\", \"88610307-dddf-4bc0-b997-f8e76ff81f83\":\"\", \"78f3f22f-389b-44f7-9ac4-1c884f0edf18\":\"\", \"c0c7fa68-db04-43ed-be25-d1391b207672\":\"\", \"0e38bf09-2c9e-4792-b78d-bc2bef0a6d3b\":\"\", \"a2665c19-1f81-4582-9911-612d68655c08\":\"\", \"0af74752-b8d2-4219-b471-b62552a20ecc\":\"\"}, \"id\":\"f0fc93aa-5b7f-4f08-a366-987a29ff8297\", \"mostPopular\":false, \"billing\":{\"oneTimePrice\":0, \"yearlyDiscountPercent\":21, \"monthlyPrice\":4.9499998092651, \"yearlyPrice\":3.9200000762939}}], \"businessModel\":\"FREEMIUM\"}}], \"excludeFromAutoRevoke\":true, \"permissionsEnforced\":false, \"blocksPermissionsEnforced\":false, \"isStandalone\":true, \"semanticVersion\":\"^2.7.0\", \"installedVersion\":\"^2.0.0\"}, \"isWixTPA\":false}}, \"previewMode\":false, \"siteRevision\":607, \"viewMode\":\"site\", \"editorOrSite\":\"site\", \"userFileDomainUrl\":\"filesusr.com\", \"metaSiteId\":\"29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\", \"isPremiumDomain\":true, \"routersConfig\":{\"routers-kyr2fk4p\":{\"prefix\":\"account\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"config\":\"{\\\"type\\\":\\\"private\\\", \\\"patterns\\\":{\\\"\\/my-account\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"appDefinitionId\\\":\\\"14cffd81-5215-0a7f-22f8-074b0e2401fb\\\", \\\"appPageId\\\":\\\"member_info\\\", \\\"menuOrder\\\":3, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\\\", \\\"seoData\\\":{\\\"title\\\":\\\"My Account\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"My Account\\\"}, \\\"\\/settings\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\\\", \\\"appPageId\\\":\\\"settings\\\", \\\"menuOrder\\\":4, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Settings\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Settings\\\"}, \\\"\\/notifications\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{\\\"key\\\":\\\"notificationsCount\\\", \\\"default\\\":0}, \\\"appDefinitionId\\\":\\\"14f25924-5664-31b2-9568-f9c5ed98c9b1\\\", \\\"appPageId\\\":\\\"notifications_app\\\", \\\"menuOrder\\\":4, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"5063ee74-6323-4b5c-b612-70ec4a0d075f\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Notifications\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Notifications\\\"}, \\\"\\/my-subscriptions\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"2bef2abe-7abe-43da-889c-53c1500a328c\\\", \\\"appPageId\\\":\\\"My Subscriptions\\\", \\\"menuOrder\\\":2, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Góiđăng ký của tôi\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Góiđăng ký của tôi\\\"}}}\", \"group\":\"members\", \"pages\":{\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\":\"bw36u\", \"5063ee74-6323-4b5c-b612-70ec4a0d075f\":\"v36av\", \"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\":\"k9gzs\", \"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\":\"bwvbz\"}, \"roleVariations\":{}}, \"routers-l3eg5akf\":{\"prefix\":\"trangmi-ebt\", \"appDefinitionId\":\"dataBinding\", \"config\":\"{\\\"patterns\\\":{\\\"\\/\\\":{\\\"pageRole\\\":\\\"395b5dbb-d497-4231-896e-d14504393fc9\\\", \\\"title\\\":\\\"Trangmi-ebt\\\", \\\"config\\\":{\\\"collection\\\":\\\"Trangmi-ebt\\\", \\\"pageSize\\\":12, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"lowercase\\\":true, \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"robots\\\":\\\"index\\\"}}}}\", \"group\":\"\", \"pages\":{\"395b5dbb-d497-4231-896e-d14504393fc9\":\"qyyn5\"}, \"roleVariations\":{}}, \"routers-l3eh1hty\":{\"prefix\":\"mc-8bt\", \"appDefinitionId\":\"dataBinding\", \"config\":\"{\\\"patterns\\\":{\\\"\\/{title}\\\":{\\\"pageRole\\\":\\\"afaf43a4-944f-40c5-a9e3-b914e5596344\\\", \\\"title\\\":\\\"{title}\\\", \\\"config\\\":{\\\"collection\\\":\\\"Mc-8bt\\\", \\\"pageSize\\\":1, \\\"lowercase\\\":true, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"description\\\":\\\"{subtitle}\\\", \\\"og:image\\\":\\\"{image}\\\", \\\"keywords\\\":\\\"\\\", \\\"robots\\\":\\\"index\\\"}}, \\\"\\/\\\":{\\\"pageRole\\\":\\\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\\\", \\\"title\\\":\\\"Mc-8bt\\\", \\\"config\\\":{\\\"collection\\\":\\\"Mc-8bt\\\", \\\"pageSize\\\":19, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"lowercase\\\":true, \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"robots\\\":\\\"index\\\"}}}}\", \"group\":\"\", \"pages\":{\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\":\"ldw8n\", \"afaf43a4-944f-40c5-a9e3-b914e5596344\":\"h483u\"}, \"roleVariations\":{}}, \"routers-kyr2fk4p1\":{\"prefix\":\"profile\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"config\":\"{\\\"type\\\":\\\"public\\\", \\\"patterns\\\":{\\\"\\/{userName}\\/profile\\\":{\\\"socialHome\\\":true, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"14dbef06-cc42-5583-32a7-3abd44da4908\\\", \\\"appPageId\\\":\\\"about\\\", \\\"menuOrder\\\":1, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"3213643b-49aa-4081-829d-e69fac6adc5f\\\", \\\"seoData\\\":{\\\"title\\\":\\\"{userName} | Profile\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Profile\\\"}}}\", \"group\":\"members\", \"pages\":{\"3213643b-49aa-4081-829d-e69fac6adc5f\":\"u3h11\"}, \"roleVariations\":{}}}, \"routerByPrefix\":{\"account\":\"routers-kyr2fk4p\", \"trangmi-ebt\":\"routers-l3eg5akf\", \"mc-8bt\":\"routers-l3eh1hty\", \"profile\":\"routers-kyr2fk4p1\"}, \"pageIdToPrefix\":{\"bw36u\":\"account\", \"v36av\":\"account\", \"k9gzs\":\"account\", \"bwvbz\":\"account\", \"qyyn5\":\"trangmi-ebt\", \"ldw8n\":\"mc-8bt\", \"h483u\":\"mc-8bt\", \"u3h11\":\"profile\"}, \"externalBaseUrl\":\"https:\\/\\/www.100relab.com\", \"tpaModalConfig\":{\"wixTPAs\":{\"8ea9df15-9ff6-4acf-bbb8-8d3a69ae5841\":true, \"35aec784-bbec-4e6e-abcb-d3d724af52cf\":true, \"55cd9036-36bb-480b-8ddc-afda3cb2eb8d\":true, \"13ee94c1-b635-8505-3391-97919052c16f\":true, \"148c2287-c669-d849-d153-463c7486a694\":true, \"14409595-f076-4753-8303-9a86f9f71469\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103\":true, \"14d7032a-0a65-5270-cca7-30f599708fed\":true, \"8725b255-2aa2-4a53-b76d-7d3c363aaeea\":true, \"139ef4fa-c108-8f9a-c7be-d5f492a2c939\":true, \"14bca956-e09f-f4d6-14d7-466cb3f09103\":true, \"150ae7ee-c74a-eecd-d3d7-2112895b988a\":true, \"141fbfae-511e-6817-c9f0-48993a7547d1\":true, \"a322993b-2c74-426f-bbb8-444db73d0d1b\":true, \"f123e8f1-4350-4c9b-b269-04adfadda977\":true, \"9bead16f-1c73-4cda-b6c4-28cff46988db\":true, \"1480c568-5cbd-9392-5604-1148f5faffa0\":true, \"13aa9735-aa50-4bdb-877c-0bb46804bd71\":true, \"d70b68e2-8d77-4e0c-9c00-c292d6e0025e\":true, \"14b89688-9b25-5214-d1cb-a3fb9683618b\":true, \"135c3d92-0fea-1f9d-2ba5-2a1dfb04297e\":true, \"146c0d71-352e-4464-9a03-2e868aabe7b9\":true, \"307ba931-689c-4b55-bb1d-6a382bad9222\":true, \"4b10fcce-732d-4be3-9d46-801d271acda9\":true, \"ea2821fc-7d97-40a9-9f75-772f29178430\":true, \"edd04d8e-3c81-46d7-b176-39b076fe7bbd\":true, \"94bc563b-675f-41ad-a2a6-5494f211c47b\":true, \"14dbefd2-01b4-fb61-32a7-3abd44da4908\":true, \"14e12b04-943e-fd32-456d-70b1820a2ff2\":true, \"eec3496e-44a8-45ac-9581-868a67345be8\":true, \"1973457f-c021-4da5-941f-58444ff761d4\":true, \"1380b703-ce81-ff05-f115-39571d94dfcd\":true, \"e4b5f1bc-c77a-4319-a60d-a46acb17f6fc\":true, \"2f70e2b4-ff36-472e-bdb9-ce393b13669e\":true, \"e593b0bd-b783-45b8-97c2-873d42aacaf4\":true, \"6580b7e9-4031-4a62-a0a5-8e2fa92e8e18\":true, \"7516f85b-0868-4c23-9fcb-cea7784243df\":true, \"45c44b27-ca7b-4891-8c0d-1747d588b835\":true, \"fc9314bc-a317-4a2b-a9d4-5ad21cc57856\":true, \"50d8c12f-715e-41ad-be25-d0f61375dbee\":true, \"f4d83b06-b408-4f3b-afd4-de8db311d7d8\":true, \"57d13128-4a4c-494b-80b3-a6fb2e28018d\":true, \"2bef2abe-7abe-43da-889c-53c1500a328c\":true, \"140603ad-af8d-84a5-2c80-a0f60cb47351\":true, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":true, \"14ce1214-b278-a7e4-1373-00cebd1bef7c\":true, \"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":true, \"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":true, \"14cffd81-5215-0a7f-22f8-074b0e2401fb\":true, \"14dbef06-cc42-5583-32a7-3abd44da4908\":true, \"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\":true, \"1484cb44-49cd-5b39-9681-75188ab429de\":true, \"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\":true, \"14f25924-5664-31b2-9568-f9c5ed98c9b1\":true, \"134139f3-f2a0-2c2c-693c-ed22165cfd84\":true}}, \"appSectionParams\":{}, \"requestUrl\":\"https:\\/\\/www.100relab.com\\/publications\", \"isMobileView\":false, \"isMobileDevice\":false, \"deviceType\":\"desktop\", \"extras\":{\"currency\":\"VND\"}, \"tpaDebugParams\":{\"debugApp\":null, \"petri_ovr\":null}, \"locale\":\"en\", \"timeZone\":\"Asia\\/Bangkok\", \"shouldRenderTPAsIframe\":true, \"debug\":false, \"regionalLanguage\":\"en\", \"isBuilderComponentModel\":false, \"fragmentInstanceToPageId\":{}}, \"tpaWorkerFeature\":{\"tpaWorkers\":{\"16393\":{\"appWorkerUrl\":\"https:\\/\\/app.visitorsmap.app\\/wixMapsWorker.pl\", \"appDefinitionName\":\"Visitors Map\", \"appDefinitionId\":\"12dc0a44-f144-07d7-c8ea-1ac31b327b9e\"}}}, \"widgetWixCodeSdk\":{\"isBuilderComponentModel\":false}, \"windowWixCodeSdk\":{\"locale\":\"vi-vn\", \"isMobileFriendly\":true, \"formFactor\":\"Desktop\", \"pageIdToRouterAppDefinitionId\":{\"bw36u\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"v36av\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"k9gzs\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"bwvbz\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"qyyn5\":\"dataBinding\", \"ldw8n\":\"dataBinding\", \"h483u\":\"dataBinding\", \"u3h11\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\"}}, \"wixCustomElementComponent\":{\"shouldLoadAllExternalScripts\":true, \"widgetsToRenderOnFreeSites\":{\"14bcded7-0066-7c35-14d7-466cb3f09103-sw47o\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-ak2wd\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-q8dzf\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-u5w25\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-hoxv1\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-pit6d\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-prihd\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-dqjva\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-nz8hi\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-e9hqn\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-e3jvn\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-gcv5t\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-ghrxf\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-liy9s\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-eii64\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-u61rq\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-pzdqd\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-yrjyo\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-wzdp6\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-y3apm\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-bu1xw\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-pz2i2\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-e25z0\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-b0z74\":true, \"14bcded7-0066-7c35-14d7-466cb3f09103-h77jn\":true}, \"wixCodeBundlersUrlData\":{\"url\":\"https:\\/\\/bundler.wix-code.com\\/29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\\/d29c1dc7-b033-4ebf-8e7d-95dda4f2ac62\\/ce23b3aa-abec-4be7-bcae-70f59a7d73bb\\/\", \"queryParams\":\"init-platform-api-provider=true&get-app-def-id-from-package-name=false&disable-yarn-pnp-mode=false\", \"parastorageUrl\":\"https:\\/\\/bundler-velo.parastorage.com\\/v_metaSiteId_29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\\/gridAppId_ce23b3aa-abec-4be7-bcae-70f59a7d73bb\\/filePath_\\/fileType_js\\/compression_gzip\\/depToken_\\/bundlerRuntimeExperiments_bundlerTrafficToAws-typescriptListExportedFunctions\\/additionalOptions_\", \"appDefIdToWixCodeBundlerUrlData\":{\"14bcded7-0066-7c35-14d7-466cb3f09103\":{\"url\":\"https:\\/\\/bundler.wix-code.com\\/29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\\/d29c1dc7-b033-4ebf-8e7d-95dda4f2ac62\\/21056c2c-144a-488f-912d-5fb0e1262beb\\/\", \"parastorageUrl\":\"https:\\/\\/bundler-velo.parastorage.com\\/v_metaSiteId_29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\\/gridAppId_21056c2c-144a-488f-912d-5fb0e1262beb\\/filePath_\\/fileType_js\\/compression_gzip\\/depToken_\\/bundlerRuntimeExperiments_bundlerTrafficToAws-typescriptListExportedFunctions\\/additionalOptions_\", \"queryParams\":\"init-platform-api-provider=true&get-app-def-id-from-package-name=false&disable-yarn-pnp-mode=false\"}, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":{\"url\":\"https:\\/\\/bundler.wix-code.com\\/29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\\/d29c1dc7-b033-4ebf-8e7d-95dda4f2ac62\\/71869e96-79b7-49b9-b6f9-e32bcf00ac52\\/\", \"parastorageUrl\":\"https:\\/\\/bundler-velo.parastorage.com\\/v_metaSiteId_29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\\/gridAppId_71869e96-79b7-49b9-b6f9-e32bcf00ac52\\/filePath_\\/fileType_js\\/compression_gzip\\/depToken_\\/bundlerRuntimeExperiments_bundlerTrafficToAws-typescriptListExportedFunctions\\/additionalOptions_\", \"queryParams\":\"init-platform-api-provider=true&get-app-def-id-from-package-name=false&disable-yarn-pnp-mode=false\"}}}, \"customElementWidgets\":{}}, \"wixEmbedsApi\":{\"isAdminPage\":false}, \"platform\":{\"sdksStaticPaths\":{\"mainSdks\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-thunderbolt\\/dist\\/mainSdks.0ea35b23.chunk.min.js\", \"nonMainSdks\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-thunderbolt\\/dist\\/nonMainSdks.572d87d3.chunk.min.js\"}, \"landingPageId\":\"hwkr6\", \"clientWorkerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-thunderbolt\\/dist\\/clientWorker.74db2e02.bundle.min.js\", \"bootstrapData\":{\"isMobileView\":false, \"isMobileAppBuilder\":false, \"appsSpecData\":{\"148c2287-c669-d849-d153-463c7486a694\":{\"appDefinitionId\":\"148c2287-c669-d849-d153-463c7486a694\", \"type\":\"public\", \"instanceId\":\"65097a3a-c54f-484f-9103-14c92a9ca87b\", \"appDefinitionName\":\"Wix Groups\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14409595-f076-4753-8303-9a86f9f71469\":{\"appDefinitionId\":\"14409595-f076-4753-8303-9a86f9f71469\", \"type\":\"public\", \"instanceId\":\"c60cd50c-e23c-4f9c-9aa8-282f490d5f9f\", \"appDefinitionName\":\"Wix Video\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14bcded7-0066-7c35-14d7-466cb3f09103\":{\"appDefinitionId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"type\":\"public\", \"instanceId\":\"509ffd75-eb76-4374-af66-13be0532344c\", \"appDefinitionName\":\"Wix Blog\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"1380b703-ce81-ff05-f115-39571d94dfcd\":{\"appDefinitionId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"type\":\"public\", \"instanceId\":\"6ba61bca-de9b-4ce5-922f-5a2f2178684b\", \"appDefinitionName\":\"Checkout & Orders\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"2bef2abe-7abe-43da-889c-53c1500a328c\":{\"appDefinitionId\":\"2bef2abe-7abe-43da-889c-53c1500a328c\", \"type\":\"public\", \"instanceId\":\"4b62c24f-b6c9-4503-a814-121f91796607\", \"appDefinitionName\":\"My Subscriptions\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"140603ad-af8d-84a5-2c80-a0f60cb47351\":{\"appDefinitionId\":\"140603ad-af8d-84a5-2c80-a0f60cb47351\", \"type\":\"public\", \"instanceId\":\"80576888-e33e-4197-b7f5-23302402920b\", \"appDefinitionName\":\"Wix Events & Tickets\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":{\"appDefinitionId\":\"14271d6f-ba62-d045-549b-ab972ae1f70e\", \"type\":\"public\", \"instanceId\":\"e7ebb960-1d98-4819-b69b-08b66c1c2e22\", \"appDefinitionName\":\"Wix Pro Gallery\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14ce1214-b278-a7e4-1373-00cebd1bef7c\":{\"appDefinitionId\":\"14ce1214-b278-a7e4-1373-00cebd1bef7c\", \"type\":\"public\", \"instanceId\":\"7db9845e-98c7-4bb6-97cb-f38c8e0bb358\", \"appDefinitionName\":\"Old Wix Forms and Payments\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"675bbcef-18d8-41f5-800e-131ec9e08762\":{\"appDefinitionId\":\"675bbcef-18d8-41f5-800e-131ec9e08762\", \"type\":\"siteextension\", \"instanceId\":\"d29c1dc7-b033-4ebf-8e7d-95dda4f2ac62\", \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":{\"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"type\":\"public\", \"instanceId\":\"fa05b7a8-6e42-4edd-9c5b-028de7348944\", \"appDefinitionName\":\"Wix Members Area\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":{\"appDefinitionId\":\"14ce28f7-7eb0-3745-22f8-074b0e2401fb\", \"type\":\"public\", \"instanceId\":\"f872b7b4-236f-4fa8-94be-6d596eac0e10\", \"appDefinitionName\":\"Profile Card\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14cffd81-5215-0a7f-22f8-074b0e2401fb\":{\"appDefinitionId\":\"14cffd81-5215-0a7f-22f8-074b0e2401fb\", \"type\":\"public\", \"instanceId\":\"8f773253-1a81-44b0-ba24-b529947af23b\", \"appDefinitionName\":\"Member Account Info\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14dbef06-cc42-5583-32a7-3abd44da4908\":{\"appDefinitionId\":\"14dbef06-cc42-5583-32a7-3abd44da4908\", \"type\":\"public\", \"instanceId\":\"31818802-4693-4a60-af7a-929bee3fa4af\", \"appDefinitionName\":\"Members About\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\":{\"appDefinitionId\":\"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\", \"type\":\"public\", \"instanceId\":\"1f2cca52-0b57-474c-8fc1-8ee6c82eb981\", \"appDefinitionName\":\"My Wallet\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"1484cb44-49cd-5b39-9681-75188ab429de\":{\"appDefinitionId\":\"1484cb44-49cd-5b39-9681-75188ab429de\", \"type\":\"public\", \"instanceId\":\"a3773369-fb6c-4716-b20f-2033c9dd7aa0\", \"appDefinitionName\":\"Wix Site Search\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\":{\"appDefinitionId\":\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\", \"type\":\"public\", \"instanceId\":\"0116878d-cb21-4c23-ad0c-544abd2ab813\", \"appDefinitionName\":\"Members Notifications Settings\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"14f25924-5664-31b2-9568-f9c5ed98c9b1\":{\"appDefinitionId\":\"14f25924-5664-31b2-9568-f9c5ed98c9b1\", \"type\":\"public\", \"instanceId\":\"26e67700-8088-4557-94ea-20887ff852ee\", \"appDefinitionName\":\"Wix Members Area Notifications\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}, \"dataBinding\":{\"appDefinitionId\":\"dataBinding\", \"type\":\"application\", \"instanceId\":\"d29c1dc7-b033-4ebf-8e7d-95dda4f2ac62\", \"appDefinitionName\":\"Data Binding\", \"isWixTPA\":true, \"isIdentityTokenAppSpec\":false, \"isModuleFederated\":false}}, \"appsUrlData\":{\"148c2287-c669-d849-d153-463c7486a694\":{\"appDefId\":\"148c2287-c669-d849-d153-463c7486a694\", \"appDefName\":\"Wix Groups\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsGroupBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\", \"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/\"}, \"errorReportingUrl\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"widgets\":{\"47a7e7bb-f412-4093-9155-1ff5adbc4dae\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/SideBySideController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/SideBySideViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/SideBySideViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"widgetId\":\"47a7e7bb-f412-4093-9155-1ff5adbc4dae\", \"cssPerBreakpoint\":true}, \"0a9f687f-7e00-4576-a8e1-9415844b8f44\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsListWidgetController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsListWidgetViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsListWidgetViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"widgetId\":\"0a9f687f-7e00-4576-a8e1-9415844b8f44\", \"cssPerBreakpoint\":true}, \"8cce2b9e-8549-46c7-8ad2-f75bf28534ac\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/FeedWidgetController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/FeedWidgetViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/FeedWidgetViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"widgetId\":\"8cce2b9e-8549-46c7-8ad2-f75bf28534ac\", \"cssPerBreakpoint\":true}, \"a7dcdfcb-8abd-4008-af19-fed5fcd12b40\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"widgetId\":\"a7dcdfcb-8abd-4008-af19-fed5fcd12b40\", \"cssPerBreakpoint\":true}, \"83b2af08-c021-40c8-a3a5-b329a959ec2b\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsListWidgetController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsListWidgetViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupsListWidgetViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"widgetId\":\"83b2af08-c021-40c8-a3a5-b329a959ec2b\", \"cssPerBreakpoint\":true}, \"e018cc55-7b1c-4500-a2e5-969f22c8a33a\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/MembersAreaGroupsController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/MembersAreaGroupsViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/MembersAreaGroupsViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"widgetId\":\"e018cc55-7b1c-4500-a2e5-969f22c8a33a\", \"cssPerBreakpoint\":true}, \"513a5d84-3ebb-4ca6-a5aa-83effd2123b9\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/social-groups-ooi\\/5.871.0\\/GroupViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/f36cc48fb72b4d298c835f2793cf3b84@sentry-next.wixpress.com\\/1058\", \"widgetId\":\"513a5d84-3ebb-4ca6-a5aa-83effd2123b9\", \"cssPerBreakpoint\":true}}}, \"14409595-f076-4753-8303-9a86f9f71469\":{\"appDefId\":\"14409595-f076-4753-8303-9a86f9f71469\", \"appDefName\":\"Wix Video\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-vod-widget\\/1.4650.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/vod-server.wix.com\\/\"}, \"widgets\":{\"144097ea-fea0-498e-ade7-e6de40127106\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-vod-widget\\/1.4650.0\\/WixVideoController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-vod-widget\\/1.4650.0\\/WixVideoViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-vod-widget\\/1.4650.0\\/WixVideoViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"144097ea-fea0-498e-ade7-e6de40127106\"}}}, \"1380b703-ce81-ff05-f115-39571d94dfcd\":{\"appDefId\":\"1380b703-ce81-ff05-f115-39571d94dfcd\", \"appDefName\":\"Checkout & Orders\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-viewer-script\\/1.155.0\\/webworker\\/ecom-platform-viewer-script.umd.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/\", \"addToCartBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-add-to-cart\\/1.1500.0\\/\", \"cartIconBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-icon\\/1.2290.0\\/\", \"productWidgetBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-widget\\/1.2058.0\\/\", \"galleryBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/\", \"wishlistBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-wishlist\\/1.2322.0\\/\", \"productPageBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-page\\/1.4416.0\\/\"}, \"widgets\":{\"13a94f09-2766-3c40-4a32-8edb5acdd8bc\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-page\\/1.4416.0\\/ProductPageController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-page\\/1.4416.0\\/ProductPageViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-page\\/1.4416.0\\/ProductPageViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"13a94f09-2766-3c40-4a32-8edb5acdd8bc\", \"cssPerBreakpoint\":true}, \"49dbb2d9-d9e5-4605-a147-e926605bf164\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/SideCartController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/SideCartViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/SideCartViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"49dbb2d9-d9e5-4605-a147-e926605bf164\", \"cssPerBreakpoint\":true}, \"5cd9f867-307e-4f6d-b572-bf262f062e55\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-edit-subscription\\/1.11.0\\/EditSubscriptionController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-edit-subscription\\/1.11.0\\/EditSubscriptionViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-edit-subscription\\/1.11.0\\/EditSubscriptionViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"5cd9f867-307e-4f6d-b572-bf262f062e55\"}, \"14666402-0bc7-b763-e875-e99840d131bd\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-add-to-cart\\/1.1500.0\\/addToCartController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-add-to-cart\\/1.1500.0\\/addToCart.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-add-to-cart\\/1.1500.0\\/addToCartNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/8c4075d5481d476e945486754f783364@sentry.io\\/1865790\", \"widgetId\":\"14666402-0bc7-b763-e875-e99840d131bd\"}, \"a63a5215-8aa6-42af-96b1-583bfd74cff5\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/WishlistController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/WishlistViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/WishlistViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"a63a5215-8aa6-42af-96b1-583bfd74cff5\", \"cssPerBreakpoint\":true}, \"13afb094-84f9-739f-44fd-78d036adb028\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/GridGalleryController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/GridGalleryViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/GridGalleryViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"13afb094-84f9-739f-44fd-78d036adb028\", \"cssPerBreakpoint\":true}, \"bb5ba6e9-272d-4a4d-a8dd-5e349744b539\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/SuccessPopupController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/SuccessPopupViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/SuccessPopupViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"bb5ba6e9-272d-4a4d-a8dd-5e349744b539\", \"cssPerBreakpoint\":true}, \"1380bbab-4da3-36b0-efb4-2e0599971d14\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/cartController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/cartViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-cart-ooi\\/1.6407.0\\/cartViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"1380bbab-4da3-36b0-efb4-2e0599971d14\"}, \"a787aa6f-f8f7-4de6-bfab-c105920dfa11\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"widgetId\":\"a787aa6f-f8f7-4de6-bfab-c105920dfa11\"}, \"139a41fd-0b1d-975f-6f67-e8cbdf8ccc82\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SliderGalleryController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SliderGalleryViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SliderGalleryViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"139a41fd-0b1d-975f-6f67-e8cbdf8ccc82\", \"cssPerBreakpoint\":true}, \"1380bbb4-8df0-fd38-a235-88821cf3f8a4\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-thank-you-page-ooi\\/1.3520.0\\/thankYouPageController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-thank-you-page-ooi\\/1.3520.0\\/thankYouPageViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-thank-you-page-ooi\\/1.3520.0\\/thankYouPageViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"1380bbb4-8df0-fd38-a235-88821cf3f8a4\"}, \"14e121c8-00a3-f7cc-6156-2c82a2ba8fcb\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"widgetId\":\"14e121c8-00a3-f7cc-6156-2c82a2ba8fcb\"}, \"1380bba0-253e-a800-a235-88821cf3f8a4\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/GridGalleryController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/GridGalleryViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/GridGalleryViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"1380bba0-253e-a800-a235-88821cf3f8a4\", \"cssPerBreakpoint\":true}, \"1380bbc4-1485-9d44-4616-92e36b1ead6b\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-cart-icon\\/1.2405.0\\/CartIconController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-cart-icon\\/1.2405.0\\/CartIconViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-cart-icon\\/1.2405.0\\/CartIconViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"1380bbc4-1485-9d44-4616-92e36b1ead6b\", \"cssPerBreakpoint\":true}, \"244576c9-d856-49b9-af14-216071924e3b\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchModalGalleryController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchModalGalleryViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchModalGalleryViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"244576c9-d856-49b9-af14-216071924e3b\", \"cssPerBreakpoint\":true}, \"abcd87fe-c51f-4538-848d-2902a2f50d2d\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchResultsPageGalleryController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchResultsPageGalleryViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/SearchResultsPageGalleryViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"abcd87fe-c51f-4538-848d-2902a2f50d2d\", \"cssPerBreakpoint\":true}, \"4425f8e8-51fb-457b-9123-fdb7b1cef94a\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/PaymentRequestController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/PaymentRequestViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"\", \"widgetId\":\"4425f8e8-51fb-457b-9123-fdb7b1cef94a\"}, \"bda15dc1-816d-4ff3-8dcb-1172d5343cce\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/CategoryPageController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/CategoryPageViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-gallery\\/1.6042.0\\/CategoryPageViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"bda15dc1-816d-4ff3-8dcb-1172d5343cce\", \"cssPerBreakpoint\":true}, \"14fd5970-8072-c276-1246-058b79e70c1a\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/CheckoutController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/CheckoutViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/CheckoutViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"14fd5970-8072-c276-1246-058b79e70c1a\"}, \"13ec3e79-e668-cc0c-2d48-e99d53a213dd\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-widget\\/1.2058.0\\/productWidgetController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-widget\\/1.2058.0\\/productWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wixstores-client-product-widget\\/1.2058.0\\/productWidgetNoCss.bundle.min.js\", \"widgetId\":\"13ec3e79-e668-cc0c-2d48-e99d53a213dd\"}, \"deaaaab0-f5bd-4b7a-a652-3845efcb546a\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/BundleBundleController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/ecom-platform-checkout\\/1.7338.0\\/BundleBundleViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"\", \"widgetId\":\"deaaaab0-f5bd-4b7a-a652-3845efcb546a\"}, \"215f8ab7-97c3-4838-a6d0-ad4a61747158\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"widgetId\":\"215f8ab7-97c3-4838-a6d0-ad4a61747158\"}}}, \"2bef2abe-7abe-43da-889c-53c1500a328c\":{\"appDefId\":\"2bef2abe-7abe-43da-889c-53c1500a328c\", \"appDefName\":\"My Subscriptions\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\"}, \"widgets\":{\"b29db04a-a8f2-4bfe-bbad-21c99c1054b5\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/MySubscriptionsController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/subscriptions-tpa\\/1.1242.0\\/MySubscriptionsViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"\", \"widgetId\":\"b29db04a-a8f2-4bfe-bbad-21c99c1054b5\"}}}, \"140603ad-af8d-84a5-2c80-a0f60cb47351\":{\"appDefId\":\"140603ad-af8d-84a5-2c80-a0f60cb47351\", \"appDefName\":\"Wix Events & Tickets\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"baseUrl\":\"https:\\/\\/events.wixapps.net\\/_api\\/wix-one-events-server\", \"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\"}, \"errorReportingUrl\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"widgets\":{\"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/widgetController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/widgetViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/widgetViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"widgetId\":\"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf\", \"cssPerBreakpoint\":true}, \"14d2abc2-5350-6322-487d-8c16ff833c8a\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\\/details-pageController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\\/details-pageViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-details-page\\/1.993.0\\/details-pageViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"widgetId\":\"14d2abc2-5350-6322-487d-8c16ff833c8a\", \"cssPerBreakpoint\":true}, \"1440e92d-47d8-69be-ade7-e6de40127106\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/widgetController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/widgetViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/widgetViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"widgetId\":\"1440e92d-47d8-69be-ade7-e6de40127106\", \"cssPerBreakpoint\":true}, \"405eb115-a694-4e2b-abaa-e4762808bb93\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/members-pageController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/members-pageViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/members-pageViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"widgetId\":\"405eb115-a694-4e2b-abaa-e4762808bb93\", \"cssPerBreakpoint\":true}, \"29ad290c-8529-4204-8fcf-41ef46e0d3b0\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/scheduleController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/scheduleViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/events-viewer\\/1.4332.0\\/scheduleViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/88170cb0c9d64f94b5821ca7fd2d55a4@sentry-next.wixpress.com\\/860\", \"widgetId\":\"29ad290c-8529-4204-8fcf-41ef46e0d3b0\", \"cssPerBreakpoint\":true}}}, \"14ce1214-b278-a7e4-1373-00cebd1bef7c\":{\"appDefId\":\"14ce1214-b278-a7e4-1373-00cebd1bef7c\", \"appDefName\":\"Old Wix Forms and Payments\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/forms-viewer\\/1.883.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{}, \"widgets\":{\"3e986f2b-6126-4ba0-8415-b375e9d61c52\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"widgetId\":\"3e986f2b-6126-4ba0-8415-b375e9d61c52\"}}}, \"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":{\"appDefId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"appDefName\":\"Wix Members Area\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/santa-members-viewer-app\\/1.2891.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{}, \"widgets\":{}}, \"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":{\"appDefId\":\"14ce28f7-7eb0-3745-22f8-074b0e2401fb\", \"appDefName\":\"Profile Card\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\"}, \"widgets\":{\"14cefc05-d163-dbb7-e4ec-cd4f2c4d6ddd\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/ProfileCardController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/ProfileCardViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/ProfileCardViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"14cefc05-d163-dbb7-e4ec-cd4f2c4d6ddd\", \"cssPerBreakpoint\":true}}}, \"14cffd81-5215-0a7f-22f8-074b0e2401fb\":{\"appDefId\":\"14cffd81-5215-0a7f-22f8-074b0e2401fb\", \"appDefName\":\"Member Account Info\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\"}, \"widgets\":{\"14dd1af6-3e02-63db-0ef2-72fbc7cc3136\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/MyAccountController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/MyAccountViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/my-account-ooi\\/1.2859.0\\/MyAccountViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"14dd1af6-3e02-63db-0ef2-72fbc7cc3136\", \"cssPerBreakpoint\":true}}}, \"14dbef06-cc42-5583-32a7-3abd44da4908\":{\"appDefId\":\"14dbef06-cc42-5583-32a7-3abd44da4908\", \"appDefName\":\"Members About\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\"}, \"widgets\":{\"14dbefb9-3b7b-c4e9-53e8-766defd30587\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/ProfileController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/ProfileViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-about-ooi\\/1.2711.0\\/ProfileViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"14dbefb9-3b7b-c4e9-53e8-766defd30587\", \"cssPerBreakpoint\":true}}}, \"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\":{\"appDefId\":\"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\", \"appDefName\":\"My Wallet\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\"}, \"errorReportingUrl\":\"https:\\/\\/9a65e97ebe8141fca0c4fd686f70996b@sentry.wixpress.com\\/5894\", \"widgets\":{\"6467c15e-af3c-4e8d-b167-41bfb8efc32a\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/MyWalletController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/MyWalletViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/payments-my-wallet\\/1.1357.0\\/MyWalletViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/9a65e97ebe8141fca0c4fd686f70996b@sentry.wixpress.com\\/5894\", \"widgetId\":\"6467c15e-af3c-4e8d-b167-41bfb8efc32a\", \"cssPerBreakpoint\":true}}}, \"1484cb44-49cd-5b39-9681-75188ab429de\":{\"appDefId\":\"1484cb44-49cd-5b39-9681-75188ab429de\", \"appDefName\":\"Wix Site Search\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/\"}, \"widgets\":{\"4a60a434-d08a-4bd4-a323-4c2479db87ea\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"widgetId\":\"4a60a434-d08a-4bd4-a323-4c2479db87ea\"}, \"44c66af6-4d25-485a-ad9d-385f5460deef\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/SearchResultsViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/search-app\\/1.3998.0\\/SearchResultsViewerWidgetNoCss.bundle.min.js\", \"widgetId\":\"44c66af6-4d25-485a-ad9d-385f5460deef\", \"cssPerBreakpoint\":true}}}, \"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\":{\"appDefId\":\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\", \"appDefName\":\"Members Notifications Settings\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\"}, \"errorReportingUrl\":\"https:\\/\\/271e9fa3230b4eec94b02bf95780f5f2@sentry.wixpress.com\\/6097\", \"widgets\":{\"04462ba4-2137-41bd-9460-0814554aae07\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.63.0\\/PreferencesOoiController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.63.0\\/PreferencesOoiViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/ed436f5053144538958ad06a5005e99a@sentry.wixpress.com\\/6142\", \"widgetId\":\"04462ba4-2137-41bd-9460-0814554aae07\", \"cssPerBreakpoint\":false}, \"14f25dd2-f9b0-edc2-f38e-eded5da094aa\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\\/PreferencesOoiController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications-preferences\\/1.68.0\\/PreferencesOoiViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/ed436f5053144538958ad06a5005e99a@sentry.wixpress.com\\/6142\", \"widgetId\":\"14f25dd2-f9b0-edc2-f38e-eded5da094aa\", \"cssPerBreakpoint\":false}}}, \"14f25924-5664-31b2-9568-f9c5ed98c9b1\":{\"appDefId\":\"14f25924-5664-31b2-9568-f9c5ed98c9b1\", \"appDefName\":\"Wix Members Area Notifications\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\", \"staticsEditorBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\"}, \"errorReportingUrl\":\"https:\\/\\/460ff4620fa44cba8df530afde949785@sentry.wixpress.com\\/5803\", \"widgets\":{\"14f2595a-a352-3ff1-9b3c-4d21861fe58f\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/OoiNotificationsController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/OoiNotificationsViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/460ff4620fa44cba8df530afde949785@sentry.wixpress.com\\/5803\", \"widgetId\":\"14f2595a-a352-3ff1-9b3c-4d21861fe58f\"}, \"6ca9273a-a775-407c-87e1-9685588c9aa7\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/NotificationsController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/members-area-notifications\\/1.7.0\\/NotificationsViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/460ff4620fa44cba8df530afde949785@sentry.wixpress.com\\/5803\", \"widgetId\":\"6ca9273a-a775-407c-87e1-9685588c9aa7\"}}}, \"14bcded7-0066-7c35-14d7-466cb3f09103\":{\"appDefId\":\"14bcded7-0066-7c35-14d7-466cb3f09103\", \"appDefName\":\"Wix Blog\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"mediaImageHost\":\"static.wixstatic.com\", \"staticsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/\", \"duplexerUrl\":\"duplexer.wix.com\", \"apiBaseUrlClient\":\"\\/_api\\/communities-blog-node-api\", \"translationsBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-translations\\/1.4450.0\\/\", \"siteAssets\":\"{urlTemplate: {siteAssets}?siteId=f2343010-d1f3-4080-a98e-3d82976a671d&metaSiteId=2b9fa616-1dde-46d3-a1a3-d715ebc1d57d&siteRevision=1335\", \"apiPlatformizedBaseUrl\":\"https:\\/\\/www.wix.com\\/_api\\/communities-blog-api-web\", \"mediaVideoHost\":\"video.wixstatic.com\", \"apiPlatformizedBaseUrlClient\":\"\\/_api\\/communities-blog-api-web\", \"apiBaseUrl\":\"https:\\/\\/apps.wix.com\\/_api\\/communities-blog-node-api\", \"apiExperimentsBaseUrlClient\":\"\\/_api\\/wix-laboratory-server\", \"blocks_devSiteUrl\":\"https:\\/\\/zanass1.editorx.io\\/2w5loeiwuf2frneevn6m\", \"blocks_widgetManifestsUrl\":\"\\/manifests\\/14bcded7-0066-7c35-14d7-466cb3f09103\\/1335\\/manifests.json\", \"useArchiveWidgetAdapter\":\"false\", \"disableDuplexerForInstanceIds\":\"671e6bcb-a0a9-4ae0-98f2-f81a607bf167\", \"provisioningModalUrl\":\"https:\\/\\/www.wix.com\\/_partials\\/communities-blog-provisioning-modal\\/1.1107.0\\/modal.html\", \"apiAggregatorBaseUrl\":\"\\/blog-frontend-adapter-public\", \"apiPaywallBaseUrl\":\"\\/_api\\/paywall-server\", \"categoryLabel\":\"false\"}, \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgets\":{\"ea40bb32-ddfc-4f68-a163-477bd0e97c8e\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"ea40bb32-ddfc-4f68-a163-477bd0e97c8e\"}, \"14f260f9-c2eb-50e8-9b3c-4d21861fe58f\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"14f260f9-c2eb-50e8-9b3c-4d21861fe58f\"}, \"6e2b3a80-dc83-4ce3-adc2-82ce48ff2ed6\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"6e2b3a80-dc83-4ce3-adc2-82ce48ff2ed6\"}, \"14e5b36b-e545-88a0-1475-2487df7e9206\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"14e5b36b-e545-88a0-1475-2487df7e9206\"}, \"14c1462a-97f2-9f6a-7bb7-f5541f23caa6\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/BlogViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/BlogViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"14c1462a-97f2-9f6a-7bb7-f5541f23caa6\"}, \"5fdc6c03-080d-4872-b567-24146c82fae5\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"5fdc6c03-080d-4872-b567-24146c82fae5\"}, \"7183995a-bf0b-4a2f-a9b4-a1b7ef96b6fa\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"7183995a-bf0b-4a2f-a9b4-a1b7ef96b6fa\"}, \"ff5bffc0-5d09-4b31-b140-be6d8ffa2c03\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"ff5bffc0-5d09-4b31-b140-be6d8ffa2c03\"}, \"2d4ed2d3-75f8-4942-9787-71e3d182e256\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"2d4ed2d3-75f8-4942-9787-71e3d182e256\"}, \"46a9e991-c1cc-47c9-b19a-e99d3be1e2c9\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/RelatedPostsViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/RelatedPostsViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"46a9e991-c1cc-47c9-b19a-e99d3be1e2c9\"}, \"a0d7808c-0d7d-4a40-8cf0-911a9f0de96f\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/CategoryMenuViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/CategoryMenuViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"a0d7808c-0d7d-4a40-8cf0-911a9f0de96f\", \"cssPerBreakpoint\":true}, \"5940091f-797c-4e86-9c57-73fcfd87425f\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"5940091f-797c-4e86-9c57-73fcfd87425f\"}, \"e5520a99-1725-4b88-a85f-c439916890c8\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"e5520a99-1725-4b88-a85f-c439916890c8\"}, \"1b5b448c-a39f-4515-9445-c6b4ceace1c2\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"1b5b448c-a39f-4515-9445-c6b4ceace1c2\"}, \"68a2d745-328b-475d-9e36-661f678daa31\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"68a2d745-328b-475d-9e36-661f678daa31\"}, \"5e123a45-f3aa-4157-a47a-e58d8cb246eb\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"5e123a45-f3aa-4157-a47a-e58d8cb246eb\"}, \"c0a125b8-2311-451e-99c5-89b6bba02b22\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/TagCloudViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/TagCloudViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"c0a125b8-2311-451e-99c5-89b6bba02b22\", \"cssPerBreakpoint\":true}, \"b27ea74b-1c6f-4bdb-bda7-8242323ba20b\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"b27ea74b-1c6f-4bdb-bda7-8242323ba20b\"}, \"25ab36f9-f8bd-4799-a887-f10b6822fc2e\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"25ab36f9-f8bd-4799-a887-f10b6822fc2e\"}, \"14f26109-514f-f9a8-9b3c-4d21861fe58f\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"14f26109-514f-f9a8-9b3c-4d21861fe58f\"}, \"e80c482c-f0df-4901-beba-fd1668395f88\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"e80c482c-f0df-4901-beba-fd1668395f88\"}, \"76359954-edd4-4c46-ad14-a7c5e65cc30c\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"76359954-edd4-4c46-ad14-a7c5e65cc30c\"}, \"14e5b39b-6d47-99c3-3ee5-cee1c2574c89\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"14e5b39b-6d47-99c3-3ee5-cee1c2574c89\"}, \"26858b64-aad8-42ab-8c63-f19009198c7b\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"26858b64-aad8-42ab-8c63-f19009198c7b\"}, \"129259f6-06e4-42a3-9877-81a1fa9de95c\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"129259f6-06e4-42a3-9877-81a1fa9de95c\"}, \"d134b0c9-8085-415a-9479-b555374ba958\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"d134b0c9-8085-415a-9479-b555374ba958\"}, \"1515a9e7-b579-fbbb-43fc-0e3051c14803\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/RssButtonViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/RssButtonViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"1515a9e7-b579-fbbb-43fc-0e3051c14803\", \"cssPerBreakpoint\":true}, \"2f3d2c69-2bc4-4519-bd72-0a63dd92577f\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/ArchiveViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/ArchiveViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"2f3d2c69-2bc4-4519-bd72-0a63dd92577f\", \"cssPerBreakpoint\":true}, \"75eefde7-6159-4e4c-aafd-2aaf5a27ebbd\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"75eefde7-6159-4e4c-aafd-2aaf5a27ebbd\"}, \"211b5287-14e2-4690-bb71-525908938c81\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"211b5287-14e2-4690-bb71-525908938c81\", \"cssPerBreakpoint\":true}, \"478911c3-de0c-469e-90e3-304f2f8cd6a7\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostTitleViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostTitleViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"478911c3-de0c-469e-90e3-304f2f8cd6a7\"}, \"f43a5e97-d70d-4906-a56e-45fdfc0f5bb7\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"f43a5e97-d70d-4906-a56e-45fdfc0f5bb7\"}, \"ce8e832b-c34f-4b80-b2a6-6cfd6d573751\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"ce8e832b-c34f-4b80-b2a6-6cfd6d573751\"}, \"0cc51cdc-4a4f-4054-9284-6cfb0dc5a22a\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"0cc51cdc-4a4f-4054-9284-6cfb0dc5a22a\"}, \"813eb645-c6bd-4870-906d-694f30869fd9\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostListViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/PostListViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"813eb645-c6bd-4870-906d-694f30869fd9\"}, \"bc7fa914-015b-4c32-a323-e5472563a798\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"bc7fa914-015b-4c32-a323-e5472563a798\"}, \"7466726a-84cf-41c8-be6b-1694445dc539\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"7466726a-84cf-41c8-be6b-1694445dc539\"}, \"14f260e4-ea13-f861-b0ba-4577df99b961\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"14f260e4-ea13-f861-b0ba-4577df99b961\"}, \"091d05b7-f44d-4a76-9163-0c7ed5312769\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"091d05b7-f44d-4a76-9163-0c7ed5312769\"}, \"763aa9a8-0531-426f-a4b1-61a7291ce292\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"763aa9a8-0531-426f-a4b1-61a7291ce292\"}, \"e5a2773b-0e6b-4cbb-a012-3b4a69e92046\":{\"controllerUrl\":\"\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/MyPostsViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/communities-blog-ooi\\/1.3335.0\\/MyPostsViewerWidgetNoCss.bundle.min.js\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"e5a2773b-0e6b-4cbb-a012-3b4a69e92046\"}, \"14f26118-b65b-b1c1-b6db-34d5da9dd623\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/2062d0a4929b45348643784b5cb39c36@sentry.wixpress.com\\/1643\", \"widgetId\":\"14f26118-b65b-b1c1-b6db-34d5da9dd623\"}}}, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":{\"appDefId\":\"14271d6f-ba62-d045-549b-ab972ae1f70e\", \"appDefName\":\"Wix Pro Gallery\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/pro-gallery-tpa\\/1.1532.0\\/viewerScript.bundle.min.js\", \"baseUrls\":{\"siteAssets\":\"{urlTemplate: {siteAssets}?siteId=ce7fd828-85c4-4b73-a390-d293eae32cec&metaSiteId=5af77ffc-cae0-4550-8a1e-4a85ff049a48&siteRevision=25\", \"blocks_widgetManifestsUrl\":\"\\/manifests\\/14271d6f-ba62-d045-549b-ab972ae1f70e\\/25\\/manifests.json\", \"santaWrapperBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/pro-gallery-tpa\\/1.1532.0\\/\"}, \"errorReportingUrl\":\"https:\\/\\/8eb368c655b84e029ed79ad7a5c1718e@sentry.wixpress.com\\/3427\", \"widgets\":{\"142bb34d-3439-576a-7118-683e690a1e0d\":{\"controllerUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/pro-gallery-tpa\\/1.1532.0\\/WixProGalleryController.bundle.min.js\", \"componentUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/pro-gallery-tpa\\/1.1532.0\\/WixProGalleryViewerWidget.bundle.min.js\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/8eb368c655b84e029ed79ad7a5c1718e@sentry.wixpress.com\\/3427\", \"widgetId\":\"142bb34d-3439-576a-7118-683e690a1e0d\"}, \"144f04b9-aab4-fde7-179b-780c11da4f46\":{\"controllerUrl\":\"\", \"componentUrl\":\"\", \"noCssComponentUrl\":\"\", \"errorReportingUrl\":\"https:\\/\\/8eb368c655b84e029ed79ad7a5c1718e@sentry.wixpress.com\\/3427\", \"widgetId\":\"144f04b9-aab4-fde7-179b-780c11da4f46\"}}}, \"dataBinding\":{\"appDefId\":\"dataBinding\", \"appDefName\":\"Data Binding\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/dbsm-viewer-app\\/1.9045.0\\/app.js\", \"baseUrls\":{}, \"widgets\":{}}, \"675bbcef-18d8-41f5-800e-131ec9e08762\":{\"appDefId\":\"675bbcef-18d8-41f5-800e-131ec9e08762\", \"viewerScriptUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-code-viewer-app\\/1.1479.751\\/app.js\", \"baseUrls\":{}, \"widgets\":{}}}, \"builderComponentsImportMapSdkUrls\":{}, \"builderComponentsCompTypeSdkUrls\":{}, \"builderPublicPackagesUrls\":{\"esm\":{}, \"umd\":{}}, \"blocksBootstrapData\":{\"blocksAppsData\":{\"14bcded7-0066-7c35-14d7-466cb3f09103\":{\"siteHeaderUrl\":\"ae7beb322e32912fccc688a488a3de89_r3.json\", \"wixCodeGridId\":\"21056c2c-144a-488f-912d-5fb0e1262beb\", \"wixCodeInstanceId\":\"c520f32b-7cd2-44bd-a087-e5c72fd7af4c\"}, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":{\"siteHeaderUrl\":\"a7dbf879980a8e90e03d649b6f48fac4_r3.json\", \"wixCodeGridId\":\"71869e96-79b7-49b9-b6f9-e32bcf00ac52\", \"wixCodeInstanceId\":\"4655355b-4814-4846-b82a-e057f0df94a3\"}}, \"elevatedBlocksAppsOnReactNative\":[], \"experiments\":{\"specs.blocks-client.alwaysUseTokenInfoForDecode\":\"true\"}, \"experimentsQueryParams\":\"init-platform-api-provider=true&get-app-def-id-from-package-name=false&disable-yarn-pnp-mode=false\", \"widgetBundleUrls\":{}, \"isVeloBundlerParastorageUrlEnabled\":true, \"parastorageTemplateUrl\":\"https:\\/\\/bundler-velo.parastorage.com\\/v_metaSiteId_\\/gridAppId_\\/filePath_\\/fileType_js\\/compression_gzip\\/depToken_3938\\/bundlerRuntimeExperiments_bundlerTrafficToAws-typescriptListExportedFunctions\\/additionalOptions_\"}, \"window\":{\"csrfToken\":\"\"}, \"location\":{\"externalBaseUrl\":\"https:\\/\\/www.100relab.com\", \"isPremiumDomain\":true, \"metaSiteId\":\"29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\", \"userFileDomainUrl\":\"filesusr.com\"}, \"bi\":{\"ownerId\":\"58745a76-e0c5-4f2f-9bde-555a9724b21d\", \"isMobileFriendly\":true, \"isPreview\":false, \"requestId\":\"1790278875.154287657261454\"}, \"platformAPIData\":{\"routersConfigMap\":{\"routers-kyr2fk4p\":{\"prefix\":\"account\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"config\":\"{\\\"type\\\":\\\"private\\\", \\\"patterns\\\":{\\\"\\/my-account\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"appDefinitionId\\\":\\\"14cffd81-5215-0a7f-22f8-074b0e2401fb\\\", \\\"appPageId\\\":\\\"member_info\\\", \\\"menuOrder\\\":3, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\\\", \\\"seoData\\\":{\\\"title\\\":\\\"My Account\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"My Account\\\"}, \\\"\\/settings\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\\\", \\\"appPageId\\\":\\\"settings\\\", \\\"menuOrder\\\":4, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Settings\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Settings\\\"}, \\\"\\/notifications\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{\\\"key\\\":\\\"notificationsCount\\\", \\\"default\\\":0}, \\\"appDefinitionId\\\":\\\"14f25924-5664-31b2-9568-f9c5ed98c9b1\\\", \\\"appPageId\\\":\\\"notifications_app\\\", \\\"menuOrder\\\":4, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"5063ee74-6323-4b5c-b612-70ec4a0d075f\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Notifications\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Notifications\\\"}, \\\"\\/my-subscriptions\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"2bef2abe-7abe-43da-889c-53c1500a328c\\\", \\\"appPageId\\\":\\\"My Subscriptions\\\", \\\"menuOrder\\\":2, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Góiđăng ký của tôi\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Góiđăng ký của tôi\\\"}}}\", \"group\":\"members\", \"pages\":{\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\":\"bw36u\", \"5063ee74-6323-4b5c-b612-70ec4a0d075f\":\"v36av\", \"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\":\"k9gzs\", \"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\":\"bwvbz\"}, \"roleVariations\":{}}, \"routers-l3eg5akf\":{\"prefix\":\"trangmi-ebt\", \"appDefinitionId\":\"dataBinding\", \"config\":\"{\\\"patterns\\\":{\\\"\\/\\\":{\\\"pageRole\\\":\\\"395b5dbb-d497-4231-896e-d14504393fc9\\\", \\\"title\\\":\\\"Trangmi-ebt\\\", \\\"config\\\":{\\\"collection\\\":\\\"Trangmi-ebt\\\", \\\"pageSize\\\":12, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"lowercase\\\":true, \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"robots\\\":\\\"index\\\"}}}}\", \"group\":\"\", \"pages\":{\"395b5dbb-d497-4231-896e-d14504393fc9\":\"qyyn5\"}, \"roleVariations\":{}}, \"routers-l3eh1hty\":{\"prefix\":\"mc-8bt\", \"appDefinitionId\":\"dataBinding\", \"config\":\"{\\\"patterns\\\":{\\\"\\/{title}\\\":{\\\"pageRole\\\":\\\"afaf43a4-944f-40c5-a9e3-b914e5596344\\\", \\\"title\\\":\\\"{title}\\\", \\\"config\\\":{\\\"collection\\\":\\\"Mc-8bt\\\", \\\"pageSize\\\":1, \\\"lowercase\\\":true, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"description\\\":\\\"{subtitle}\\\", \\\"og:image\\\":\\\"{image}\\\", \\\"keywords\\\":\\\"\\\", \\\"robots\\\":\\\"index\\\"}}, \\\"\\/\\\":{\\\"pageRole\\\":\\\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\\\", \\\"title\\\":\\\"Mc-8bt\\\", \\\"config\\\":{\\\"collection\\\":\\\"Mc-8bt\\\", \\\"pageSize\\\":19, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"lowercase\\\":true, \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"robots\\\":\\\"index\\\"}}}}\", \"group\":\"\", \"pages\":{\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\":\"ldw8n\", \"afaf43a4-944f-40c5-a9e3-b914e5596344\":\"h483u\"}, \"roleVariations\":{}}, \"routers-kyr2fk4p1\":{\"prefix\":\"profile\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"config\":\"{\\\"type\\\":\\\"public\\\", \\\"patterns\\\":{\\\"\\/{userName}\\/profile\\\":{\\\"socialHome\\\":true, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"14dbef06-cc42-5583-32a7-3abd44da4908\\\", \\\"appPageId\\\":\\\"about\\\", \\\"menuOrder\\\":1, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"3213643b-49aa-4081-829d-e69fac6adc5f\\\", \\\"seoData\\\":{\\\"title\\\":\\\"{userName} | Profile\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Profile\\\"}}}\", \"group\":\"members\", \"pages\":{\"3213643b-49aa-4081-829d-e69fac6adc5f\":\"u3h11\"}, \"roleVariations\":{}}}}, \"wixCodeBootstrapData\":{\"wixCodeAppDefinitionId\":\"675bbcef-18d8-41f5-800e-131ec9e08762\", \"wixCodeInstanceId\":\"d29c1dc7-b033-4ebf-8e7d-95dda4f2ac62\", \"wixCloudBaseDomain\":\"wix-code.com\", \"dbsmViewerApp\":\"https:\\/\\/static.parastorage.com\\/services\\/dbsm-viewer-app\\/1.9045.0\", \"wixCodePlatformBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/wix-code-platform\\/1.1097.93\", \"wixCodeModel\":{\"appData\":{\"codeAppId\":\"ce23b3aa-abec-4be7-bcae-70f59a7d73bb\"}, \"signedAppRenderInfo\":\"1b983cc106a794fe85bb62dd19da950d69381852.eyJncmlkQXBwSWQiOiJjZTIzYjNhYS1hYmVjLTRiZTctYmNhZS03MGY1OWE3ZDczYmIiLCJodG1sU2l0ZUlkIjoiNjcyMDI5ZDAtODNhMi00NzkwLThlOGUtMjYyYTEzNjk0NjVmIiwiZGVtb0lkIjpudWxsLCJzaWduRGF0ZSI6MTc5MDI3ODg3NTMwMn0=\"}, \"wixCodePageIds\":{\"s9v9x\":\"https:\\/\\/bundler-velo.parastorage.com\\/v_metaSiteId_29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\\/gridAppId_ce23b3aa-abec-4be7-bcae-70f59a7d73bb\\/filePath_public_delimiter_pages_delimiter_s9v9x.js\\/fileType_js\\/compression_gzip\\/depToken_\\/bundlerRuntimeExperiments_bundlerTrafficToAws-typescriptListExportedFunctions\\/additionalOptions_?init-platform-api-provider=true&get-app-def-id-from-package-name=false&disable-yarn-pnp-mode=false\"}, \"elementorySupport\":{\"baseUrl\":\"https:\\/\\/www.100relab.com\\/_api\\/wix-code-public-dispatcher-ng\\/siteview\"}, \"codePackagesData\":[]}, \"autoFrontendModulesBaseUrl\":\"https:\\/\\/static.parastorage.com\\/services\\/auto-frontend-modules\\/1.6238.0\", \"disabledPlatformApps\":{}, \"widgetsClientSpecMapData\":{\"148c2287-c669-d849-d153-463c7486a694\":{\"47a7e7bb-f412-4093-9155-1ff5adbc4dae\":{\"widgetName\":\"47a7e7bb-f412-4093-9155-1ff5adbc4dae\", \"componentFields\":{}}, \"0a9f687f-7e00-4576-a8e1-9415844b8f44\":{\"widgetName\":\"0a9f687f-7e00-4576-a8e1-9415844b8f44\", \"componentFields\":{}}, \"8cce2b9e-8549-46c7-8ad2-f75bf28534ac\":{\"widgetName\":\"8cce2b9e-8549-46c7-8ad2-f75bf28534ac\", \"componentFields\":{}}, \"a7dcdfcb-8abd-4008-af19-fed5fcd12b40\":{\"widgetName\":\"groups\", \"componentFields\":{}}, \"83b2af08-c021-40c8-a3a5-b329a959ec2b\":{\"widgetName\":\"83b2af08-c021-40c8-a3a5-b329a959ec2b\", \"componentFields\":{}}, \"e018cc55-7b1c-4500-a2e5-969f22c8a33a\":{\"widgetName\":\"e018cc55-7b1c-4500-a2e5-969f22c8a33a\", \"componentFields\":{}}, \"513a5d84-3ebb-4ca6-a5aa-83effd2123b9\":{\"widgetName\":\"group\", \"componentFields\":{}}}, \"14409595-f076-4753-8303-9a86f9f71469\":{\"144097ea-fea0-498e-ade7-e6de40127106\":{\"widgetName\":\"wix_vod_develop\", \"componentFields\":{}}}, \"14bcded7-0066-7c35-14d7-466cb3f09103\":{\"ea40bb32-ddfc-4f68-a163-477bd0e97c8e\":{\"componentFields\":{}}, \"14f260f9-c2eb-50e8-9b3c-4d21861fe58f\":{\"widgetName\":\"member-comments-page\", \"componentFields\":{}}, \"6e2b3a80-dc83-4ce3-adc2-82ce48ff2ed6\":{\"componentFields\":{}}, \"14e5b36b-e545-88a0-1475-2487df7e9206\":{\"widgetName\":\"recent-posts-widget\", \"componentFields\":{}}, \"14c1462a-97f2-9f6a-7bb7-f5541f23caa6\":{\"widgetName\":\"blog\", \"componentFields\":{}}, \"5fdc6c03-080d-4872-b567-24146c82fae5\":{\"componentFields\":{}}, \"7183995a-bf0b-4a2f-a9b4-a1b7ef96b6fa\":{\"componentFields\":{}}, \"ff5bffc0-5d09-4b31-b140-be6d8ffa2c03\":{\"componentFields\":{}}, \"2d4ed2d3-75f8-4942-9787-71e3d182e256\":{\"componentFields\":{}}, \"46a9e991-c1cc-47c9-b19a-e99d3be1e2c9\":{\"widgetName\":\"46a9e991-c1cc-47c9-b19a-e99d3be1e2c9\", \"componentFields\":{}}, \"a0d7808c-0d7d-4a40-8cf0-911a9f0de96f\":{\"widgetName\":\"a0d7808c-0d7d-4a40-8cf0-911a9f0de96f\", \"componentFields\":{}}, \"5940091f-797c-4e86-9c57-73fcfd87425f\":{\"componentFields\":{}}, \"e5520a99-1725-4b88-a85f-c439916890c8\":{\"componentFields\":{}}, \"1b5b448c-a39f-4515-9445-c6b4ceace1c2\":{\"componentFields\":{}}, \"68a2d745-328b-475d-9e36-661f678daa31\":{\"componentFields\":{}}, \"5e123a45-f3aa-4157-a47a-e58d8cb246eb\":{\"componentFields\":{}}, \"c0a125b8-2311-451e-99c5-89b6bba02b22\":{\"widgetName\":\"c0a125b8-2311-451e-99c5-89b6bba02b22\", \"componentFields\":{}}, \"b27ea74b-1c6f-4bdb-bda7-8242323ba20b\":{\"componentFields\":{}}, \"25ab36f9-f8bd-4799-a887-f10b6822fc2e\":{\"componentFields\":{}}, \"14f26109-514f-f9a8-9b3c-4d21861fe58f\":{\"widgetName\":\"member-likes-page\", \"componentFields\":{}}, \"e80c482c-f0df-4901-beba-fd1668395f88\":{\"componentFields\":{}}, \"76359954-edd4-4c46-ad14-a7c5e65cc30c\":{\"componentFields\":{}}, \"14e5b39b-6d47-99c3-3ee5-cee1c2574c89\":{\"widgetName\":\"custom-feed-widget\", \"componentFields\":{}}, \"26858b64-aad8-42ab-8c63-f19009198c7b\":{\"componentFields\":{}}, \"129259f6-06e4-42a3-9877-81a1fa9de95c\":{\"componentFields\":{}}, \"d134b0c9-8085-415a-9479-b555374ba958\":{\"componentFields\":{}}, \"1515a9e7-b579-fbbb-43fc-0e3051c14803\":{\"widgetName\":\"rss-feed-widget\", \"componentFields\":{}}, \"2f3d2c69-2bc4-4519-bd72-0a63dd92577f\":{\"widgetName\":\"2f3d2c69-2bc4-4519-bd72-0a63dd92577f\", \"componentFields\":{}}, \"75eefde7-6159-4e4c-aafd-2aaf5a27ebbd\":{\"componentFields\":{}}, \"211b5287-14e2-4690-bb71-525908938c81\":{\"widgetName\":\"post\", \"componentFields\":{}}, \"478911c3-de0c-469e-90e3-304f2f8cd6a7\":{\"widgetName\":\"478911c3-de0c-469e-90e3-304f2f8cd6a7\", \"componentFields\":{}}, \"f43a5e97-d70d-4906-a56e-45fdfc0f5bb7\":{\"componentFields\":{}}, \"ce8e832b-c34f-4b80-b2a6-6cfd6d573751\":{\"componentFields\":{}}, \"0cc51cdc-4a4f-4054-9284-6cfb0dc5a22a\":{\"componentFields\":{}}, \"813eb645-c6bd-4870-906d-694f30869fd9\":{\"widgetName\":\"813eb645-c6bd-4870-906d-694f30869fd9\", \"componentFields\":{}}, \"bc7fa914-015b-4c32-a323-e5472563a798\":{\"componentFields\":{}}, \"7466726a-84cf-41c8-be6b-1694445dc539\":{\"componentFields\":{}}, \"14f260e4-ea13-f861-b0ba-4577df99b961\":{\"widgetName\":\"member-drafts-page\", \"componentFields\":{}}, \"091d05b7-f44d-4a76-9163-0c7ed5312769\":{\"componentFields\":{}}, \"763aa9a8-0531-426f-a4b1-61a7291ce292\":{\"componentFields\":{}}, \"e5a2773b-0e6b-4cbb-a012-3b4a69e92046\":{\"widgetName\":\"e5a2773b-0e6b-4cbb-a012-3b4a69e92046\", \"componentFields\":{}}, \"14f26118-b65b-b1c1-b6db-34d5da9dd623\":{\"widgetName\":\"member-posts-page\", \"componentFields\":{}}}, \"1380b703-ce81-ff05-f115-39571d94dfcd\":{\"13a94f09-2766-3c40-4a32-8edb5acdd8bc\":{\"widgetName\":\"product_page\", \"componentFields\":{}}, \"49dbb2d9-d9e5-4605-a147-e926605bf164\":{\"widgetName\":\"49dbb2d9-d9e5-4605-a147-e926605bf164\", \"componentFields\":{}}, \"5cd9f867-307e-4f6d-b572-bf262f062e55\":{\"widgetName\":\"5cd9f867-307e-4f6d-b572-bf262f062e55\", \"componentFields\":{}}, \"14666402-0bc7-b763-e875-e99840d131bd\":{\"widgetName\":\"add_to_cart_button\", \"componentFields\":{}}, \"a63a5215-8aa6-42af-96b1-583bfd74cff5\":{\"widgetName\":\"wishlist\", \"componentFields\":{}}, \"13afb094-84f9-739f-44fd-78d036adb028\":{\"widgetName\":\"grid_gallery\", \"componentFields\":{}}, \"bb5ba6e9-272d-4a4d-a8dd-5e349744b539\":{\"widgetName\":\"Success Popup\", \"componentFields\":{}}, \"1380bbab-4da3-36b0-efb4-2e0599971d14\":{\"widgetName\":\"shopping_cart\", \"componentFields\":{}}, \"a787aa6f-f8f7-4de6-bfab-c105920dfa11\":{\"componentFields\":{}}, \"139a41fd-0b1d-975f-6f67-e8cbdf8ccc82\":{\"widgetName\":\"slider_gallery\", \"componentFields\":{}}, \"1380bbb4-8df0-fd38-a235-88821cf3f8a4\":{\"widgetName\":\"thank_you_page\", \"componentFields\":{}}, \"14e121c8-00a3-f7cc-6156-2c82a2ba8fcb\":{\"widgetName\":\"order_history\", \"componentFields\":{}}, \"1380bba0-253e-a800-a235-88821cf3f8a4\":{\"widgetName\":\"product_gallery\", \"componentFields\":{}}, \"1380bbc4-1485-9d44-4616-92e36b1ead6b\":{\"widgetName\":\"shopping_cart_icon\", \"componentFields\":{}}, \"244576c9-d856-49b9-af14-216071924e3b\":{\"widgetName\":\"244576c9-d856-49b9-af14-216071924e3b\", \"componentFields\":{}}, \"abcd87fe-c51f-4538-848d-2902a2f50d2d\":{\"widgetName\":\"abcd87fe-c51f-4538-848d-2902a2f50d2d\", \"componentFields\":{}}, \"4425f8e8-51fb-457b-9123-fdb7b1cef94a\":{\"widgetName\":\"4425f8e8-51fb-457b-9123-fdb7b1cef94a\", \"componentFields\":{}}, \"bda15dc1-816d-4ff3-8dcb-1172d5343cce\":{\"widgetName\":\"bda15dc1-816d-4ff3-8dcb-1172d5343cce\", \"componentFields\":{}}, \"14fd5970-8072-c276-1246-058b79e70c1a\":{\"widgetName\":\"checkout\", \"componentFields\":{}}, \"13ec3e79-e668-cc0c-2d48-e99d53a213dd\":{\"widgetName\":\"product_widget\", \"componentFields\":{}}, \"deaaaab0-f5bd-4b7a-a652-3845efcb546a\":{\"widgetName\":\"deaaaab0-f5bd-4b7a-a652-3845efcb546a\", \"componentFields\":{}}, \"215f8ab7-97c3-4838-a6d0-ad4a61747158\":{\"componentFields\":{}}}, \"2bef2abe-7abe-43da-889c-53c1500a328c\":{\"b29db04a-a8f2-4bfe-bbad-21c99c1054b5\":{\"widgetName\":\"My Subscriptions\", \"componentFields\":{}}}, \"140603ad-af8d-84a5-2c80-a0f60cb47351\":{\"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf\":{\"widgetName\":\"a74ee1f5-74e3-4612-8fac-8ba5ae2cacaf\", \"componentFields\":{}}, \"14d2abc2-5350-6322-487d-8c16ff833c8a\":{\"widgetName\":\"events\", \"componentFields\":{}}, \"1440e92d-47d8-69be-ade7-e6de40127106\":{\"widgetName\":\"wix_events\", \"componentFields\":{}}, \"405eb115-a694-4e2b-abaa-e4762808bb93\":{\"widgetName\":\"events_members_page\", \"componentFields\":{}}, \"29ad290c-8529-4204-8fcf-41ef46e0d3b0\":{\"widgetName\":\"agenda-page\", \"componentFields\":{}}}, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":{\"142bb34d-3439-576a-7118-683e690a1e0d\":{\"widgetName\":\"pro-gallery\", \"componentFields\":{}}, \"144f04b9-aab4-fde7-179b-780c11da4f46\":{\"widgetName\":\"fullscreen_page\", \"componentFields\":{}}}, \"14ce1214-b278-a7e4-1373-00cebd1bef7c\":{\"3e986f2b-6126-4ba0-8415-b375e9d61c52\":{\"componentFields\":{}}}, \"675bbcef-18d8-41f5-800e-131ec9e08762\":{}, \"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":{}, \"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":{\"14cefc05-d163-dbb7-e4ec-cd4f2c4d6ddd\":{\"widgetName\":\"profile\", \"componentFields\":{}}}, \"14cffd81-5215-0a7f-22f8-074b0e2401fb\":{\"14dd1af6-3e02-63db-0ef2-72fbc7cc3136\":{\"widgetName\":\"member_info\", \"componentFields\":{}}}, \"14dbef06-cc42-5583-32a7-3abd44da4908\":{\"14dbefb9-3b7b-c4e9-53e8-766defd30587\":{\"widgetName\":\"about\", \"componentFields\":{}}}, \"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\":{\"6467c15e-af3c-4e8d-b167-41bfb8efc32a\":{\"widgetName\":\"my_wallet\", \"componentFields\":{}}}, \"1484cb44-49cd-5b39-9681-75188ab429de\":{\"4a60a434-d08a-4bd4-a323-4c2479db87ea\":{\"componentFields\":{}}, \"44c66af6-4d25-485a-ad9d-385f5460deef\":{\"widgetName\":\"search_results\", \"componentFields\":{}}}, \"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\":{\"04462ba4-2137-41bd-9460-0814554aae07\":{\"widgetName\":\"04462ba4-2137-41bd-9460-0814554aae07\", \"componentFields\":{}}, \"14f25dd2-f9b0-edc2-f38e-eded5da094aa\":{\"widgetName\":\"settings\", \"componentFields\":{}}}, \"14f25924-5664-31b2-9568-f9c5ed98c9b1\":{\"14f2595a-a352-3ff1-9b3c-4d21861fe58f\":{\"widgetName\":\"notifications_app\", \"componentFields\":{}}, \"6ca9273a-a775-407c-87e1-9685588c9aa7\":{\"widgetName\":\"6ca9273a-a775-407c-87e1-9685588c9aa7\", \"componentFields\":{}}}, \"dataBinding\":{}}, \"essentials\":{\"appsConductedExperiments\":{\"14f25924-5664-31b2-9568-f9c5ed98c9b1\":{\"specs.ping.membersAreaNotifications.useIntlInsteadOfMoment\":\"true\", \"specs.ping.MANotifications.useMAWidgetPluginService\":\"true\"}, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":{\"specs.pro-gallery.displayPreset14\":\"true\", \"specs.pro-gallery.removeUseOfCounterApi\":\"true\", \"specs.pro-gallery.horizontalScrollAnimations\":\"true\", \"specs.pro-gallery.useImageAvifFormat\":\"true\", \"specs.pro-gallery.EnableAlbumsStorePremiumValidation\":\"true\", \"specs.pro-gallery.removePgStoreTab\":\"true\", \"specs.pro-gallery.backgroundDesignFullscreen\":\"true\", \"specs.pro-gallery.useMotherSiteAppInstance\":\"true\", \"specs.pro-gallery.addSEOVideoMetaTags\":\"false\", \"specs.pro-gallery.enableMainLightroomSettingsButton\":\"true\", \"specs.pro-gallery.displayPreset17\":\"false\", \"specs.pro-gallery.slideTransition\":\"true\", \"specs.proGallery.shouldShowNewPanels\":\"false\", \"specs.pro-gallery.displayProGalleryPresets\":\"true\", \"specs.pro-gallery.navigationArrowsDrawer\":\"true\", \"specs.pro-gallery.horizontalTitlePlacementOptions\":\"true\", \"specs.pro-gallery.artstoreShowDeprecationMessageInSettings\":\"false\", \"useProGalleryNewServices\":\"A\", \"specs.pro-gallery.navArrowsVericalPositionController\":\"true\", \"specs.pro-gallery.enablePGRenderIndicator\":\"false\", \"specs.pro-gallery.excludeFromWarmupData\":\"false\", \"specs.pro-gallery.customNavigationArrows\":\"true\", \"specs.pro-gallery.fixedGalleryRatio\":\"true\", \"specs.pro-gallery.displayProGalleryNewPreset\":\"true\", \"specs.pro-gallery.useReactionService\":\"true\", \"specs.pro-gallery.textBoxWidthControllers\":\"true\", \"specs.pro-gallery.allowOverlayGradient\":\"true\", \"specs.pro-gallery.excludeFromLayoutFixer\":\"false\", \"specs.pro-gallery.useIsInFirstFold\":\"false\", \"specs.pro-gallery.dontRenderGalleryBelowFoldOnLoad\":\"false\", \"specs.pro-gallery.enableLightroomSettingsButton\":\"true\", \"specs.pro-gallery.displayPreset16\":\"true\", \"specs.pro-gallery.displayProGallerySEOSettings\":\"false\", \"specs.pro-gallery.imageEditing\":\"b\", \"specs.pro-gallery.useWowImageRenderer\":\"false\", \"specs.pro-gallery.useWarmupData\":\"true\", \"specs.pro-gallery.enableFullResFeature\":\"true\", \"specs.pro-gallery.slideAnimationDeck\":\"true\", \"specs.pro-gallery.useReactPortalInArtStore\":\"true\", \"specs.pro-gallery.blockOAP\":\"false\", \"specs.pro-gallery.useServerBlueprints-viewer\":\"false\", \"specs.pro-gallery.excludeFromThinLinesFix\":\"false\", \"specs.pro-gallery.excludeFromHlsVideosOnIphone\":\"true\", \"excludeFromHlsVideosNew\":\"A\", \"specs.pro-gallery.removeRoleApplication\":\"true\", \"specs.pro-gallery.tryCentralizedConduction\":\"false\", \"specs.pro-gallery.organizeMediaMultiTypes\":\"true\", \"specs.pro-gallery.useServerBlueprints-preview\":\"false\", \"specs.pro-gallery.displayPreset15\":\"true\", \"specs.pro-gallery.enableVideoPlaceholder\":\"true\", \"specs.pro-gallery.organizeMediaAltText\":\"b\", \"specs.pro-gallery.overlayDesign\":\"true\", \"specs.pro-gallery.shouldUseVirtualization\":\"true\", \"specs.pro-gallery.disableImagePreload\":\"true\", \"specs.pro-gallery.excludeFromPrerenderPerformance\":\"false\", \"specs.pro-gallery.appSettings\":\"true\"}, \"2bef2abe-7abe-43da-889c-53c1500a328c\":{\"specs.subscriptionsTpa.ShowLastNextCharge\":\"true\", \"specs.premium.subscriptions-tpa.VerifyGracePeriodBeforePayNow\":\"true\", \"specs.subscriptions-tpa.showBenefitsScheduler\":\"true\", \"specs.subscriptions-tpa.showNewBenefitPrograms\":\"true\", \"specs.premium.subscriptions-tpa.enablePagnination\":\"true\", \"specs.premium.subscriptions-tpa.UseInitiatePaymentMethodSetup\":\"true\", \"specs.premium.subscriptions-tpa.fixSessionsOnEcom\":\"true\", \"specs.EnableAllowedActionsIsAllowedIndicator\":\"true\", \"specs.subscriptionsTpa.SkipSubscriptionsMembersArea\":\"false\", \"specs.premium.subscriptions-tpa.advancedPauseResume\":\"false\", \"specs.subscriptionsTpa.UseBassAPI\":\"true\"}, \"14409595-f076-4753-8303-9a86f9f71469\":{\"vodMigrateToEntitlements\":\"A\", \"specs.vod.iosHlsJsOverrideNative\":\"true\", \"specs.vod.VodWidgetNewSettingsResponsive\":\"true\", \"vodMigrateThumbnailsWDS\":\"A\", \"vodMigrateThumbnailsToWDS\":\"A\", \"specs.vod.OoiEditorFlow\":\"true\"}, \"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":{\"loginSocialBarBuyAgain\":\"B\", \"specs.ping.membersAreaUseNotificationsV2Api\":\"true\", \"specs.membersArea.addStandalonePageRoutesToPublicAppData\":\"true\", \"specs.membersArea.useScalableDimensionsForLoginBarOnE3\":\"true\", \"specs.membersArea.addNavigationIntentParams\":\"true\", \"specs.membersArea.EnableDependencyInstallationCheck\":\"true\", \"specs.membersArea.enableAppData\":\"true\", \"specs.membersArea.normalizeMenuItemsLinkMetaData\":\"true\", \"specs.membersArea.APIRaceConditionHandling\":\"true\"}, \"14dbef06-cc42-5583-32a7-3abd44da4908\":{\"specs.UouSubscriptionServiceUseApiGatewayClient\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppStudio2\":\"true\", \"specs.membersArea.DoNotWaitInstallNavigation\":\"true\", \"specs.membersArea.UseMembersNgApiUpdate\":\"false\", \"specs.members.FollowersAudienceProvider\":\"false\", \"specs.media.MediaManager3\":\"true\", \"specs.ricos.newFormattingToolbar\":\"true\", \"specs.membersArea.showCascadingIndicators\":\"true\", \"specs.membersArea.HideMemberSortField\":\"true\", \"specs.membersArea.DisableLivePreviewRefreshes\":\"true\", \"specs.membersArea.CheckUserContributorPermissions\":\"true\", \"specs.membersArea.CheckIsAppActiveBeforeInstallV1\":\"true\", \"specs.membersArea.UseGetMyMemberInMemberHandler\":\"true\", \"specs.membersArea.EnableMembersAreaContextCheck\":\"true\", \"specs.membersArea.AddSuspendedFilter\":\"true\", \"specs.membersfollow.ActivityCounters\":\"true\", \"specs.membersArea.ShowPageRedirectNote\":\"true\", \"specs.membersArea.ExtendedUninstallMASubApps\":\"true\", \"specs.membersArea.UseViewedMemberBlocked\":\"true\", \"specs.membersArea.UseFollowersV3\":\"true\", \"specs.members.enableMuteMembersSkill\":\"true\", \"specs.myAccount.ShowBlockedMembersModalEmptyState\":\"true\", \"specs.membersArea.enableTimeoutLogs\":\"false\", \"specs.membersArea.GetRoutesUseGlobal\":\"true\", \"specs.membersArea.ShouldOpenPropertyInDevCenter\":\"false\", \"specs.membersApi.UseProfilesApiForTitleAndCoverWrites\":\"true\", \"specs.membersArea.EnableLoginBarComponentExtension\":\"true\", \"specs.members.enableUpdateCustomFieldSkill\":\"true\", \"specs.membersArea.ShowNewFFBorderSettings\":\"true\", \"specs.membersArea.AddNotificationsIconOnV2\":\"true\", \"specs.membersAbout.EnableWDSPanels\":\"true\", \"specs.membersArea.AllowInstallingProfileE3\":\"true\", \"specs.members.enableHideCustomFieldSkill\":\"true\", \"specs.members.LogUpdateMemberRequest\":\"false\", \"specs.membersArea.installationSourceOfTruth\":\"true\", \"specs.membersAreaV2.HidePermissionsPanelOnPrivateMA\":\"false\", \"specs.wixRicos.withWixStyles\":\"true\", \"specs.responsive-editor.NoMeasureInstall\":\"true\", \"specs.members.enableDeleteCustomFieldSkill\":\"true\", \"specs.membersArea.SkipTemplateHandlerForSettings\":\"false\", \"specs.membersArea.UsePopoverDynamicPositioning\":\"true\", \"specs.membersArea.MemberHandlerUseMembersNgApi\":\"true\", \"specs.membersArea.EnableMyAccountParallelInstall\":\"true\", \"specs.membersArea.UseMembersNgApi\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppEditor3\":\"true\", \"specs.membersArea.DoNotCreateTeamMember\":\"false\", \"specs.membersArea.NotificationsIconFixerOnV2\":\"true\", \"specs.ricos-server.resolveParentPagePath\":\"true\", \"specs.membersArea.ConsumeMembersPiiExchangeDomainEvents\":\"true\", \"specs.membersAbout.UseResponsivePostsCover\":\"true\", \"specs.membersAbout.UseNewPostsCoverDefaults\":\"true\", \"specs.membersArea.ShowMoreMembersWithBadge\":\"false\", \"specs.membersAbout.EnableAboutContainerStyles\":\"true\", \"specs.membersAboutOOI.DisableButtonOnPublish\":\"true\", \"specs.ricos.enablePages\":\"true\", \"specs.membersArea.AddRevisionField\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV2MenuItems\":\"true\", \"specs.membersArea.AddManageMemberAccessAction\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV3MenuItems\":\"true\", \"specs.membersArea.EnableDependencyInstallationCheck\":\"true\", \"specs.ident.SiteMembersSocialDisclaimer\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV3\":\"true\", \"migrateDisconnectedLoginBars\":\"B\", \"specs.membersArea.UseQueryMembersTextSearch\":\"true\", \"specs.membersAreaV2.EnablePageInfoPanelCustomPage\":\"false\", \"specs.membersArea.SkipRolesSyncOnMemberCreated\":\"true\", \"specs.myAccount.showBlockedMembersModalRedesign\":\"true\", \"specs.membersArea.MetaSiteSpecialConsumerV2\":\"true\", \"specs.members.enableUnmuteMembersSkill\":\"true\", \"specs.membersArea.UseMembersAboutV2\":\"true\", \"specs.members.enableCreateBadgeSkill\":\"true\", \"specs.ricos.enableSmartBlock\":\"true\", \"specs.profileCard.HideMessageButtonForNonSocialChatUsers\":\"false\", \"specs.membersArea.HideSuspendedLabelForNonOwners\":\"true\", \"enableNewThumbnailSkinsForMembersAreaPanels\":\"A\", \"specs.membersArea.UseApplyChangeToAllLanguagesForMaV2\":\"true\", \"specs.membersArea.SortByNumbersInElastic\":\"true\", \"specs.myAccount.ShowPrivacySettingsMessageForSiteOwners\":\"true\", \"specs.membersArea.UninstallMASubApps\":\"true\", \"specs.membersArea.UseAppDataForRoutes\":\"true\", \"specs.membersArea.CreateMissingMember\":\"true\", \"specs.membersArea.EnableMenusDataFixer\":\"true\", \"specs.members.usePlatformizedServicesForUpdate\":\"true\", \"specs.badges.shouldUseBadgesV3InEdm\":\"true\", \"specs.membersArea.HideSuspendedLabelForNonOwnersFFBox\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV2\":\"true\", \"specs.membersArea.EnableMemberPagePermissions\":\"false\", \"specs.membersArea.UseIsPermittedOnMediaCredentials\":\"true\", \"specs.membersArea.fixLoginBarResponsiveLayout\":\"true\", \"specs.membersAbout.EnableAccessibleRCE\":\"true\", \"specs.membersArea.EnableV2SilentInstall\":\"true\", \"specs.membersArea.EnableInstallationTimeout\":\"false\", \"specs.membersAbout.EnableAboutMiddleware\":\"true\", \"specs.members.enableManageMemberPrivacySkill\":\"true\", \"specs.membersAreaV3.ReAddPageWorkaround\":\"true\", \"specs.membersArea.OptimizeVerticalDeletion\":\"true\", \"specs.membersAbout.EnableCSSIndicators\":\"true\", \"specs.membersArea.EnableFollowersAsLightbox\":\"true\", \"specs.membersArea.UseGetOrCreateMemberV2\":\"true\", \"specs.members.enableCreateCustomFieldSkill\":\"true\", \"specs.membersArea.migrateToV2\":\"false\", \"specs.membersArea.ClearSettings\":\"true\", \"specs.membersAbout.EnableHtmlTagSettings\":\"true\", \"specs.membersArea.ShowHeadingLevelSettings\":\"true\"}, \"dataBinding\":{\"specs.wixDataViewer.NewCoreImageStaticBinding\":\"false\", \"specs.wixDataViewer.useGetForSchemaBulk\":\"false\", \"specs.wixDataViewer.fetchOnlyConnectedFields\":\"true\", \"specs.wixDataViewer.deferredIsDead\":\"true\", \"specs.wixDataViewer.NewCoreFormatters\":\"false\", \"cmsViewerSyncTextInputValuesBeforeSave\":\"A\"}, \"14cffd81-5215-0a7f-22f8-074b0e2401fb\":{\"specs.UouSubscriptionServiceUseApiGatewayClient\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppStudio2\":\"true\", \"specs.membersArea.DoNotWaitInstallNavigation\":\"true\", \"specs.membersArea.UseMembersNgApiUpdate\":\"false\", \"specs.members.FollowersAudienceProvider\":\"false\", \"specs.media.MediaManager3\":\"true\", \"specs.membersArea.showCascadingIndicators\":\"true\", \"specs.membersArea.HideMemberSortField\":\"true\", \"specs.membersArea.DisableLivePreviewRefreshes\":\"true\", \"specs.membersArea.CheckUserContributorPermissions\":\"true\", \"specs.membersArea.CheckIsAppActiveBeforeInstallV1\":\"true\", \"specs.membersArea.UseGetMyMemberInMemberHandler\":\"true\", \"specs.membersArea.EnableMembersAreaContextCheck\":\"true\", \"specs.membersArea.AddSuspendedFilter\":\"true\", \"specs.membersfollow.ActivityCounters\":\"true\", \"specs.membersArea.ShowPageRedirectNote\":\"true\", \"specs.membersArea.ExtendedUninstallMASubApps\":\"true\", \"specs.membersArea.ChangeLoginInfo\":\"true\", \"specs.membersArea.UseViewedMemberBlocked\":\"true\", \"specs.membersArea.UseFollowersV3\":\"true\", \"specs.members.enableMuteMembersSkill\":\"true\", \"specs.myAccount.ShowBlockedMembersModalEmptyState\":\"true\", \"specs.membersArea.enableTimeoutLogs\":\"false\", \"specs.membersArea.GetRoutesUseGlobal\":\"true\", \"specs.membersArea.ShouldOpenPropertyInDevCenter\":\"false\", \"specs.myAccount.EnablePhoneNumberValidation\":\"true\", \"specs.membersApi.UseProfilesApiForTitleAndCoverWrites\":\"true\", \"specs.membersArea.EnableLoginBarComponentExtension\":\"true\", \"specs.members.enableUpdateCustomFieldSkill\":\"true\", \"specs.membersArea.ShowNewFFBorderSettings\":\"true\", \"specs.membersArea.AddNotificationsIconOnV2\":\"true\", \"specs.membersArea.AllowInstallingProfileE3\":\"true\", \"specs.members.enableHideCustomFieldSkill\":\"true\", \"specs.members.LogUpdateMemberRequest\":\"false\", \"specs.myAccount.EnableCSSIndicators\":\"true\", \"specs.membersArea.installationSourceOfTruth\":\"true\", \"specs.membersAreaV2.HidePermissionsPanelOnPrivateMA\":\"false\", \"specs.myAccount.EnableDatePickerStyling\":\"true\", \"specs.responsive-editor.NoMeasureInstall\":\"true\", \"specs.members.enableDeleteCustomFieldSkill\":\"true\", \"specs.membersArea.SkipTemplateHandlerForSettings\":\"false\", \"specs.membersArea.UsePopoverDynamicPositioning\":\"true\", \"specs.membersArea.MemberHandlerUseMembersNgApi\":\"true\", \"specs.membersArea.EnableMyAccountParallelInstall\":\"true\", \"specs.membersArea.UseMembersNgApi\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppEditor3\":\"true\", \"specs.membersArea.DoNotCreateTeamMember\":\"false\", \"specs.membersArea.NotificationsIconFixerOnV2\":\"true\", \"specs.myAccount.EnableHtmlTagSettings\":\"true\", \"specs.membersArea.ConsumeMembersPiiExchangeDomainEvents\":\"true\", \"specs.membersArea.ShowMoreMembersWithBadge\":\"false\", \"specs.membersArea.AddRevisionField\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV2MenuItems\":\"true\", \"specs.membersArea.AddManageMemberAccessAction\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV3MenuItems\":\"true\", \"specs.membersArea.EnableDependencyInstallationCheck\":\"true\", \"specs.ident.SiteMembersSocialDisclaimer\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV3\":\"true\", \"migrateDisconnectedLoginBars\":\"B\", \"specs.membersArea.UseQueryMembersTextSearch\":\"true\", \"specs.membersAreaV2.EnablePageInfoPanelCustomPage\":\"false\", \"specs.membersArea.SkipRolesSyncOnMemberCreated\":\"true\", \"specs.myAccount.showBlockedMembersModalRedesign\":\"true\", \"specs.membersArea.MetaSiteSpecialConsumerV2\":\"true\", \"specs.myAccount.EnableMyAccountMiddleware\":\"true\", \"specs.members.enableUnmuteMembersSkill\":\"true\", \"specs.membersArea.UseMembersAboutV2\":\"true\", \"specs.members.enableCreateBadgeSkill\":\"true\", \"specs.profileCard.HideMessageButtonForNonSocialChatUsers\":\"false\", \"specs.myAccount.EnableUrlEditNote\":\"true\", \"specs.membersArea.HideSuspendedLabelForNonOwners\":\"true\", \"enableNewThumbnailSkinsForMembersAreaPanels\":\"A\", \"specs.membersArea.UseApplyChangeToAllLanguagesForMaV2\":\"true\", \"specs.myAccount.ShowButtonTextSetting\":\"true\", \"specs.membersArea.SortByNumbersInElastic\":\"true\", \"specs.myAccount.ShowPrivacySettingsMessageForSiteOwners\":\"true\", \"specs.membersArea.UninstallMASubApps\":\"true\", \"specs.membersArea.UseAppDataForRoutes\":\"true\", \"specs.membersArea.CreateMissingMember\":\"true\", \"specs.membersArea.EnableMenusDataFixer\":\"true\", \"specs.members.usePlatformizedServicesForUpdate\":\"true\", \"specs.badges.shouldUseBadgesV3InEdm\":\"true\", \"specs.membersArea.HideSuspendedLabelForNonOwnersFFBox\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV2\":\"true\", \"specs.membersArea.EnableMemberPagePermissions\":\"false\", \"specs.membersArea.UseIsPermittedOnMediaCredentials\":\"true\", \"specs.membersArea.fixLoginBarResponsiveLayout\":\"true\", \"specs.membersArea.EnableV2SilentInstall\":\"true\", \"specs.membersArea.EnableInstallationTimeout\":\"false\", \"specs.members.enableManageMemberPrivacySkill\":\"true\", \"specs.membersAreaV3.ReAddPageWorkaround\":\"true\", \"specs.membersArea.OptimizeVerticalDeletion\":\"true\", \"specs.myAccount.EnableDesignTabResetButtonPerPage\":\"true\", \"specs.myAccount.EnableLoginAndAddressInTextsTab\":\"true\", \"specs.membersArea.EnableFollowersAsLightbox\":\"true\", \"specs.membersArea.UseGetOrCreateMemberV2\":\"true\", \"specs.members.enableCreateCustomFieldSkill\":\"true\", \"specs.myAccount.EnableWDSPanels\":\"true\", \"specs.membersArea.migrateToV2\":\"false\", \"specs.membersArea.ClearSettings\":\"true\", \"specs.myAccount.EnableAllSubdivisionsInAddressForm\":\"true\", \"specs.membersArea.ShowHeadingLevelSettings\":\"true\"}, \"148c2287-c669-d849-d153-463c7486a694\":{\"specs.groups.CustomTabContentType\":\"RICH_CONTENT\", \"specs.groups.UpdateSidebarLayout\":\"true\", \"specs.ricos.newFormattingToolbar\":\"true\", \"specs.groups.PublicGroupRestriction\":\"true\", \"specs.groups.UpdatedMemberPermissions\":\"true\", \"specs.groups.cssPBI\":\"true\", \"specs.groups.TopicsLayoutRedesign\":\"true\", \"specs.groups.SEO-subtitle\":\"true\", \"specs.groups.ResizeTopics\":\"true\", \"specs.wixRicos.withWixStyles\":\"true\", \"specs.groups.OOIPrivateProfileJoinPP\":\"true\", \"specs.groups.events-by-uou\":\"true\", \"specs.ricos-server.resolveParentPagePath\":\"true\", \"specs.groups.EnableMembersAreaFeedItemComments\":\"true\", \"specs.groups.newNotificationsScreens\":\"true\", \"spec.groups.TitlesAddOns\":\"true\", \"specs.groups.PP3migrationOOI\":\"true\", \"specs.ricos.enablePages\":\"true\", \"specs.groups.CentralFeedContentType\":\"RICH_CONTENT\", \"specs.groups.FeedItemViews\":\"true\", \"specs.groups.GroupFeedContentType\":\"RICH_CONTENT\", \"specs.groups.AllowToAddImageAltText\":\"false\", \"enableThumbnailSkinMigrationForGroups\":\"A\", \"specs.groups.GroupPrivacyLabel\":\"true\", \"specs.groups.MemberOnboarding\":\"true\", \"specs.ricos.enableSmartBlock\":\"true\", \"specs.groups.BuiToWds\":\"true\", \"specs.groups.SiteMembersSsrCaching\":\"false\", \"specs.groups.SupportRicosCollapsibleList\":\"true\", \"specs.groups.GroupDescriptionContentType\":\"RICH_CONTENT\", \"specs.groups.OOIOptimization\":\"true\", \"specs.groups.GroupSearch\":\"true\"}, \"140603ad-af8d-84a5-2c80-a0f60cb47351\":{\"specs.events.ui.DelayedCancelReservation\":\"true\", \"specs.events.ui.SplitEventsViewer\":\"false\", \"specs.events.ui.SettingsWDSMigration\":\"true\", \"specs.events.ui.UpdatePaymentMethodEnabled\":\"true\", \"specs.events.ui.ScheduleWdsPanels\":\"true\", \"specs.events.ui.FixCancelReservation\":\"true\", \"specs.events.ui.EventDetailsSlotsViewer\":\"true\", \"specs.events.ui.RicosViewer\":\"true\", \"specs.events.ui.useWixForms\":\"false\", \"specs.events.ui.CheckoutSummaryFromReservation\":\"true\", \"floatingUIMultilineAddressDropdowns\":\"A\", \"specs.events.ui.UseWarmupState\":\"true\", \"specs.events.ui.MembersPageWdsPanels\":\"true\", \"specs.events.ui.EventDetailsImageToggle\":\"true\", \"specs.events.ui.ConsentPolicy\":\"true\", \"refreshAvailableTickets\":\"B\", \"specs.events.ui.FixDetailsPageInitialNavigation\":\"true\", \"specs.events.ui.ExpressCheckout\":\"true\", \"specs.events.ui.FixDetailsPageNavigation\":\"true\", \"specs.events.ui.FixLoadMembers\":\"true\", \"specs.events.ui.NewDetailsPageVisibilityNavigation\":\"true\", \"specs.events.ui.RegistrationStatusInfo\":\"true\", \"specs.events.ui.DetailsPageWdsPanels\":\"true\", \"specs.events.ui.ListWidgetWdsPanels\":\"true\", \"specs.events.ui.ExtendMembersV2\":\"true\", \"specs.events.ui.UpcomingOccurrencesSuggestions\":\"true\", \"specs.events.ui.AboutSectionSettings\":\"true\", \"specs.events.ui.UseRichContentFromEvent\":\"true\", \"navigationToBuilderEventDetailsPage\":\"A\", \"specs.events.ui.RenameTicketPolicy\":\"true\", \"specs.events.ui.WixFormsEventSettings\":\"true\", \"specs.events.ui.UseEventsViewerReduxToolkit\":\"true\", \"specs.events.ui.FixSeatingModalPosition\":\"true\", \"specs.events.ui.SausageIntegration\":\"true\", \"specs.events.ui.DisabledButtonsViewer\":\"true\", \"specs.events.ui.RelocatedPagesModal\":\"true\", \"specs.events.ui.CategoryMenuSettings\":\"true\", \"specs.events.ui.FeaturedEventWidget\":\"false\", \"specs.events.ui.PaymentsStyleApi\":\"true\", \"specs.events.ui.MultidayEventsCalendar\":\"true\", \"specs.events.ui.PlanTicketsDesign\":\"true\", \"specs.events.ui.NavigateToEcomCheckout\":\"false\", \"specs.events.ui.HideWidgetTypeSelect\":\"false\", \"specs.events.ui.StudioCompatibility\":\"true\", \"specs.events.ui.saveADITextsInDs\":\"true\", \"specs.events.ui.RelocatedUpgradeModal\":\"true\", \"specs.events.ui.PricingPlansV3\":\"true\", \"specs.events.ui.PersistSingleChoiceMandatoryViewer\":\"true\", \"floatingUICountryDropdown\":\"B\", \"specs.events.ui.NavigateToCheckoutWithReservationId\":\"true\", \"specs.events.ui.SeatingTicketsSection\":\"true\", \"specs.events.ui.UseDetailsPageReduxToolkit\":\"true\", \"specs.events.ui.UpdateRichContentTruncate\":\"false\", \"specs.events.ui.WidgetRsvpButtonHoverColor\":\"true\", \"specs.events.ui.SeatingTicketUnavailableModal\":\"false\", \"specs.events.ui.UpdatedClassicAddPanel\":\"false\", \"se_eventsCategoryNewContentInAddPanel\":\"true\", \"specs.events.ui.PromotionalBadges\":\"true\", \"specs.events.ui.ServerlessWidgetData\":\"false\", \"specs.events.ui.AccessibilityLocalization\":\"true\", \"specs.events.ui.UseGuestsService\":\"true\", \"specs.events.ui.EventDetailsSlots\":\"true\", \"specs.events.ui.CalendarRevamp\":\"true\", \"specs.events.ui.AvoidCrossDCCalls\":\"true\", \"specs.events.ui.UseOrderPageUrl\":\"true\", \"specs.events.ui.ResponsiveCards\":\"true\", \"specs.events.ui.UpdatedEmptyState\":\"true\", \"specs.events.ui.EventsListSeoPanel\":\"true\", \"specs.events.ui.CategoryTabsUoU\":\"false\", \"specs.events.ui.MobileCalendarRewire\":\"true\", \"specs.events.ui.ButtonLayoutEmptyState\":\"false\", \"enableNewThumbnailSkinsForEvents\":\"A\"}, \"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\":{\"specs.ping.errorHandlerInUou\":\"true\", \"specs.ping.MAPreferences.useMAWidgetPluginService\":\"true\"}, \"14ce1214-b278-a7e4-1373-00cebd1bef7c\":{\"specs.forms.EnableFormsInBlog\":\"true\"}, \"14bcded7-0066-7c35-14d7-466cb3f09103\":{\"specs.wixBlog.ImportFromWordPressInsideMenu\":\"false\", \"specs.wixBlog.FixMultipleColors\":\"true\", \"specs.media.MediaManager3\":\"true\", \"specs.wixBlog.CollectMetrics\":\"false\", \"specs.ricos.newFormattingToolbar\":\"true\", \"specs.wixBlog.RemoveBlocksPostPage\":\"false\", \"specs.wixBlog.UseWarmupStateInOldPostPage\":\"false\", \"specs.wixBlog.PreInstalledAuthorChanged\":\"true\", \"specs.wixBlog.UseBlogSettingsAllPostsFeedLabels\":\"true\", \"newBlogMonetizationExperience\":\"A\", \"specs.wixBlog.BlogSausageMenu\":\"false\", \"specs.wixBlog.SausageMenuFeed\":\"false\", \"specs.wixBlog.BMMergePendingReviewTab\":\"false\", \"specs.wixBlog.ImportUseDraftPostApiProxy\":\"true\", \"specs.wixBlog.NewBlogPostComment\":\"false\", \"specs.wixBlog.DontCallDbOnBadSlug\":\"false\", \"specs.wixRicos.withWixStyles\":\"true\", \"specs.wixBlog.UseWarmupStateInPostList\":\"true\", \"specs.wixBlog.UseWarmupStateInNewPostPage\":\"true\", \"specs.wixBlog.BlockViewCountUpdates\":\"false\", \"specs.wixBlog.ReturnRichContentInsteadOfDraftJs\":\"true\", \"draftPostProxyNileRoutingExperiment\":\"A\", \"specs.ricos-server.resolveParentPagePath\":\"true\", \"specs.wixBlog.HashtagPageUseFeedPage\":\"true\", \"specs.wixBlog.PostRatings\":\"true\", \"specs.wixBlog.DisplayPostComposerError\":\"false\", \"specs.wixBlog.PreInstalledPostSubmittedForReview\":\"true\", \"specs.ricos.enablePages\":\"true\", \"specs.wixBlog.UseBlogPermissionCacheService\":\"true\", \"formsInPosts\":\"A\", \"specs.blogImporter.EnableRollbackOfMigrationsBM\":\"false\", \"specs.wixBlog.UseWarmupStateInFeed\":\"true\", \"specs.wixBlog.UseLayoutFixer\":\"true\", \"specs.forms.EnableFormsInBlog\":\"true\", \"specs.wixBlog.DisableBlogInjectGenie\":\"false\", \"liveSiteEditorDeprecation\":\"B\", \"specs.wixBlog.UseTranslationCreditsApi\":\"true\", \"specs.membersArea.BlogCommentsFromCommentsSerivice\":\"true\", \"specs.wixBlog.LiveSiteEditorDeprication\":\"true\", \"specs.ricos.enableSmartBlock\":\"true\", \"specs.wixBlog.UseFilesusrDomain\":\"false\", \"specs.wixBlog.UsePromptHubForImageGeneration\":\"true\", \"specs.wixBlog.SettingsFromParastorage\":\"false\", \"specs.wixBlog.NewBlogPostPublishedAutomation\":\"true\", \"specs.wixBlog.UseBlogLikeNinjaService\":\"true\", \"specs.wixBlog.BMManagePendingReviews\":\"true\", \"specs.wixBlog.PreInstalledPostSubmissionStatus\":\"true\", \"specs.wixBlog.EnableDiscoveryIngestion\":\"true\", \"specs.wixBlog.UseAiServiceCreateDraftPost\":\"true\", \"specs.wixBlog.UseVisitorPrimaryLocale\":\"true\", \"specs.wixBlog.PreInstalledScheduledPostPublished\":\"true\", \"ooiCategoryHeaderBlog\":\"A\"}, \"1484cb44-49cd-5b39-9681-75188ab429de\":{\"specs.siteSearch.ChangeSelectedTabInEditorOnEdit\":\"true\", \"specs.siteSearch.UseWarmupData\":\"true\", \"specs.siteSearch.NewSearchOnClassicEditor\":\"true\", \"specs.siteSearch.CSSPerBreakpointIndications\":\"true\", \"specs.siteSearch.ResponsiveSearchBoxSkin\":\"true\", \"specs.siteSearch.ShowStudioUpdateFlow\":\"true\"}, \"1380b703-ce81-ff05-f115-39571d94dfcd\":{\"ecomShowSubdivisionSelectorWithSelectedMethod\":\"B\", \"specs.stores.MoveCustomUrlApiToSiteStoreConstructor\":\"true\", \"specs.ecom.SupportManualPaymentsOnPaymentRequest\":\"false\", \"specs.stores.FixQuickViewNavigationToProductPage\":\"true\", \"specs.stores.GalleryMigrateRowsToProductsCountViewer\":\"true\", \"specs.ecom.ShowAdditionalFeesInSideCart\":\"true\", \"specs.stores.FixVariantIdCalculationInGalleryAddToCartFlow\":\"true\", \"specs.ecom.ShowMultipleLineItemActions\":\"true\", \"specs.stores.AddMobileClassesToSliderGalleryRoot\":\"true\", \"ecomNormalizeExpressBillingSubdivision\":\"B\", \"specs.stores.FixPriceElementsPanelMultilingual\":\"true\", \"specs.stores.AllowAddToCartButtonOnImageInViewer\":\"true\", \"ecomCheckoutPreloadFlow\":\"A\", \"fixOosTextLiveUpdateOnStage\":\"B\", \"specs.ecom.DisplayCheckoutErrorModalsForExpressButtons\":\"true\", \"specs.stores.FixWishlistControllerConfigType\":\"true\", \"specs.forms.JapanAutocompleteEnabled\":\"true\", \"specs.stores.RemoveLoadConfigInProductWidget\":\"true\", \"ecomCheckoutComposerCartSettingsPanelEntry\":\"B\", \"specs.stores.ReturnCartIdNullInsteadOfDeprecatedForExpressService\":\"true\", \"specs.stores.ShowFromTextOnFullSelectedVariant\":\"true\", \"specs.stores.EnableDynamicSizeDefaultImage\":\"true\", \"typUseOrderCurrency\":\"B\", \"specs.stores.SendSubcategoriesSeoDataSF\":\"true\", \"specs.stores.FixNavigationDotsPosition\":\"true\", \"enablePreOrderAddToCartInProductWidget\":\"B\", \"specs.stores.GalleryFilterChoicesGrouping\":\"true\", \"specs.stores.ProductPageNewWixCodeApi\":\"true\", \"specs.stores.ProductPageFixReflowSausageNavigation\":\"true\", \"specs.stores.ShowAutomaticDiscountDataOnGallery\":\"true\", \"specs.stores.HideBillingFormForPayPalAndManualNotBrazil\":\"true\", \"specs.stores.GalleryProductOptionsAndQuantityWidth\":\"true\", \"specs.stores.ProductPageUpliftProductOptionsViewer\":\"true\", \"specs.ecom.violationBasedOnDeliveryOption\":\"true\", \"floatingUIMultilineAddressDropdowns\":\"A\", \"specs.ecom.FullNameLeafOverrides\":\"true\", \"specs.ecom.deliveryOptionsSetFirstAsDefault\":\"true\", \"specs.stores.ShowUserWishlistStateInProductPage\":\"true\", \"specs.stores.InfoSectionTabsTPAComponent\":\"true\", \"specs.stores.CombinedListingFetchGroupInfo\":\"true\", \"specs.stores.ProductPageBreadcrumbsAfterHydration\":\"true\", \"specs.ecom.OrdersHideSubscriptionBillingPeriodWhenProductPeriodNotAligned\":\"true\", \"specs.stores.ZoomableMainMedia\":\"true\", \"specs.stores.FixQuickViewNavigationToProductPageInPreviewMode\":\"true\", \"specs.stores.GalleryColorPickerA11yReflowKeyboardFix\":\"true\", \"ecomIgnoreCartButtonsTextOpacity\":\"B\", \"fixPPThumbnailSliderNavigation\":\"B\", \"separateDeliveryComboBox\":\"B\", \"storesAllowExpandFirstInfoSectionsStorefront\":\"B\", \"ecomHideNonRequiredPrefillBillingFields\":\"B\", \"fixGalleryVerticalFiltersRoundCorners\":\"B\", \"specs.ecom.AddSlotToThankYouPage\":\"true\", \"specs.stores.allowProductPageButtonsOption\":\"true\", \"specs.stores.TYPUpdateOrderModelWithSubscriptionInfo\":\"true\", \"specs.stores.FixWishlistPageLiveTextEditing\":\"true\", \"specs.ecom.separateAdditionalFee\":\"true\", \"specs.stores.ProductPageMainMediaNavigationArrows\":\"true\", \"specs.stores.SliderGalleryInfiniteLoopToggleViewer\":\"true\", \"addProductOptionsToQueryParams\":\"B\", \"specs.stores.FixProductPageDescriptionReadMore\":\"true\", \"specs.stores.GalleryEditableGridTemplateRepeatOption\":\"true\", \"specs.stores.FetchLocaleFromWixCodeApi\":\"true\", \"specs.ecom.EnableBuilderContextProvider\":\"true\", \"storesFixPricingPrefixLayout\":\"B\", \"ecomShowEstimateDeliveryOnSubdivisionError\":\"B\", \"specs.stores.ProductPageRemovePagination\":\"true\", \"ecomShowTotalSavings\":\"B\", \"specs.stores.AddHasDiscountToVariantsItemsQueries\":\"true\", \"specs.ecom.SupportMultipleGCInCheckout\":\"false\", \"specs.stores.FixVerticalThumbnailsPosition\":\"true\", \"usePickupFormattedAddress\":\"B\", \"specs.stores.FixCheckoutAddressTemplateMandatoryZipCode\":\"true\", \"ecomSyncSelectedPaymentMethodToCart\":\"A\", \"storesFixNavigationToBuilderProductPage\":\"A\", \"specs.stores.FixVariantIdCalculationInBuyNowFlow\":\"true\", \"specs.stores.OnlineStoresSessionStorageWithTTL\":\"true\", \"specs.forms.MultilineAddressInTemplates\":\"true\", \"specs.stores.FixCartIconOnEditor\":\"true\", \"storesGalleryEmptyStateForDeletedCollection\":\"B\", \"specs.stores.ResponsiveGalleryMigration\":\"true\", \"specs.ecom.ShowCrossedOutPriceOnLineItemLevel\":\"true\", \"specs.stores.GalleryAllowLinkToProductPageInSSR\":\"true\", \"specs.ecom.MergeExpressDeliveryRateWithHandlingFee\":\"false\", \"specs.stores.ProductPageSlotsAddMoreProps\":\"true\", \"specs.stores.AddDiscountsToVariantsItemsQueries\":\"true\", \"storesFixClassicMobileNavigationVisibility\":\"B\", \"ecomMemberDetailsContactAwareSignificance\":\"B\", \"specs.stores.GalleryFixWarmUpDataCacheKeyWithQueryParams\":\"true\", \"specs.stores.ShowMultiRibbonsInProductPage\":\"true\", \"specs.ecom.useLocaleForDeliveryTimeSlot\":\"true\", \"specs.stores.FixAnnounceNotDefinedBug\":\"true\", \"ecomClearHiddenFieldsBeforeValidation\":\"B\", \"specs.stores.ShowErrorHandlingToastsGallery\":\"true\", \"specs.ecom.ShowAllSubscriptionItemNames\":\"true\", \"optionalModifiersProductPage\":\"B\", \"specs.ecom.useSelectedDeliveryOptionFallbackInSlotAPI\":\"true\", \"specs.stores.RefactorFormServiceToCalcExtendedFields\":\"true\", \"specs.stores.FixQuickViewForSubscriptionsInWishlist\":\"true\", \"storesProductPageRemoveOptionPreselection\":\"B\", \"specs.stores.ShowGiftCardAddToCartSettings\":\"true\", \"specs.stores.PPAlignFontSizeToModernLayout\":\"true\", \"ecomSplitSubscriptionCheckboxInCheckout\":\"B\", \"specs.stores.SideCartElementsVisibilityInCss\":\"true\", \"specs.stores.ProductPageVideoPosterOptimization\":\"true\", \"ecomChargeOrderPaymentRequestApi\":\"A\", \"specs.ecom.fixGroupedDeliveryOptionSelection\":\"false\", \"specs.stores.MainMediaWrapperAsAnchorElement\":\"true\", \"specs.stores.AllowGalleryProductRoundCornersInViewer\":\"false\", \"specs.stores.productPageMobileSettings\":\"true\", \"specs.stores.ResponsiveEditorBreadcrumbsToggle\":\"true\", \"specs.stores.GalleryFixSideFiltersShrink\":\"true\", \"specs.stores.SupportFreeTrialTYP\":\"true\", \"usingStoresViewerScriptAddToCart\":\"A\", \"ecomPurchaseRecommendationsSettingsField\":\"B\", \"ecomCheckoutCrossSell\":\"A\", \"specs.stores.FixFilterKeySpecialCharacter\":\"true\", \"specs.stores.StorefrontLegacyEnablePanoramaIntegration\":\"true\", \"specs.ecom.RevampDiscountsInCartAndCheckout\":\"true\", \"specs.stores.ProductNameHtmlTag\":\"true\", \"specs.stores.UseUndefinedAsDefaultBillingAddressInCheckout\":\"true\", \"specs.stores.GalleryA11yReflowFilterModalFix\":\"true\", \"specs.stores.EnableDiscountAndRegularPriceSwapViewer\":\"true\", \"specs.ecom.CartItemQuantityBadge\":\"true\", \"specs.stores.ShowWishlistInGallery\":\"true\", \"ecomShowReducedDiscountAmount\":\"B\", \"specs.stores.ProductPageDescriptionToggle\":\"true\", \"specs.ecom.ShowVoidedErrorMessage\":\"true\", \"ecomUseMembershipOverSelectedMembership\":\"B\", \"specs.stores.UseOpenSideCartApi\":\"true\", \"specs.stores.ShowAutomaticDiscountDataOnProductPage\":\"true\", \"specs.stores.ProductPageWaitForWarmupData\":\"true\", \"specs.stores.ProductMediaNavigationDots\":\"false\", \"specs.stores.UseNewSubscriptionView\":\"true\", \"ecomCheckoutComposerCartIconSettingsPanelEntry\":\"B\", \"specs.forms.FixControllerActions\":\"true\", \"specs.stores.UseCartV2ForDirectPurchase\":\"true\", \"specs.ecom.ImprovePerformanceByParallelPromises\":\"true\", \"specs.stores.GalleryAddMissingAddProductImpressionEvent\":\"true\", \"specs.stores.ProductPageUplift\":\"true\", \"specs.stores.ProductPageUpliftNewFeaturesSF\":\"true\", \"specs.stores.ProductPageBlocksCtaTrackEvents\":\"true\", \"specs.stores.ProductPageUpliftProductOptions\":\"true\", \"ecomClearHiddenBillingFieldsBeforeValidation\":\"B\", \"specs.stores.SubscriptionPlanNewDesign\":\"false\", \"ecomCartCssVars\":\"B\", \"specs.stores.AllowGalleryIntervalNavigation\":\"true\", \"specs.stores.navigateToRelativeUrlWithCustomizedUrl\":\"true\", \"specs.stores.enableUnitedStatesMilitaryAddresses\":\"true\", \"optionalModifiersGallery\":\"B\", \"specs.stores.StickyAddToCartMobile\":\"false\", \"updateDisableContinueButtonSlotAPI\":\"A\", \"specs.stores.FixProductPageDropdownMobileSsr\":\"true\", \"specs.ecom.showPriceWithFreeShippingCoupon\":\"true\", \"ecomPlanAndBookInPurchaseFlow\":\"B\", \"specs.stores.GalleryStoreExtractSEO\":\"true\", \"specs.stores.ProductPageWishlistTrackEvent\":\"true\", \"specs.stores.ProductPageSsrInvalidationTags\":\"true\", \"streetlessLocalityFallback\":\"B\", \"specs.ecom.HandleMembershipCalculationError\":\"true\", \"specs.stores.StorefrontSwatchImages\":\"true\", \"specs.ecom.CheckoutComposerSideCartSettingsPanelEntry\":\"true\", \"specs.stores.ConfigureGalleryViewStates\":\"true\", \"storesShowHiddenVariants\":\"A\", \"specs.stores.GalleryProductItemCarouselHover\":\"true\", \"specs.ecom.UpdateCartOnBillingFieldsChange\":\"true\", \"specs.ecom.FixCartNavigationOnPreview\":\"false\", \"specs.stores.GalleryWaitForWarmupData\":\"true\", \"specs.stores.FixMigratedAllProductsInManualCategoryList\":\"true\", \"specs.stores.FixMultilingualTextInSF\":\"true\", \"ecomCartValidationsInPurchaseFlow\":\"B\", \"specs.stores.ShowPromotionsInGallery\":\"true\", \"specs.stores.Set404ForSeoWhenPageHasNoProducts\":\"true\", \"specs.stores.SliderGalleryFixSwiperIndex\":\"true\", \"specs.stores.SupportMitEnabledFieldInCheckoutPage\":\"true\", \"specs.ecom.CouponAlignmentInCartAndCheckout\":\"true\", \"specs.stores.ConfigureSlotsInEditorSDK\":\"true\", \"specs.stores.FixPPAddToCartButtonTextKeyPriority\":\"true\", \"specs.ecom.useFallbackInPreviewLoader\":\"true\", \"specs.stores.GalleryProductOptionsLimit\":\"true\", \"specs.stores.ProductPageSlots\":\"true\", \"specs.ecom.CheckoutNewPhoneAndFullNameFields\":\"true\", \"specs.stores.newClearFiltersHoverState\":\"true\", \"specs.stores.UseGalleryNewApplyFilterQueryParams\":\"false\", \"specs.ecom.CheckoutComposerSuccessPopupSettingsPanelEntry\":\"true\", \"specs.stores.tpaRouterShouldQueryProductsV3\":\"true\", \"ecomCartCrossSell\":\"A\", \"ecomShowFreeShippingCouponPlacementInCart\":\"B\", \"specs.ecom.showDeliveryOptionPreviewError\":\"true\", \"specs.ecom.AddDiscountDataToTYPOrderQuery\":\"true\", \"specs.stores.ProductPageConsumePublicDataFromBothScopes\":\"true\", \"specs.stores.ShowMultiRibbonsInGallery\":\"true\", \"floatingUICountryDropdown\":\"B\", \"specs.ecom.OrderPlatformFeesUoU\":\"true\", \"storesFTGalleryEnableLoadMoreHoverUnderline\":\"A\", \"specs.forms.EnableNewPhoneFieldValidation\":\"true\", \"specs.stores.GallerySeoTags\":\"true\", \"fixPPUrlDoubleDecoding\":\"B\", \"storesPreselectSubscriptions\":\"B\", \"specs.stores.ProductPageBlocksFixAddToCartOnSecondaryLang\":\"true\", \"specs.stores.AllowStickySidebarInViewer\":\"true\", \"specs.stores.ProductPageLocationOnChangePathChangeForEditorSausage\":\"true\", \"specs.stores.SubscriptionPlansNewDesignViewer\":\"true\", \"specs.stores.AllowAddToCartButtonContentTypesInViewer\":\"true\", \"specs.ecom.OrdersModifiers\":\"true\", \"specs.ecom.loadDeliverySectionsDataOnReadOnly\":\"true\", \"specs.stores.PPNavigationSectionPerBreakpoint\":\"true\", \"ecomCheckoutBrandStyling\":\"B\", \"ecomSupportTestOrderOnCheckoutPage\":\"A\", \"specs.stores.UseStoreLanguageForTranslations\":\"false\", \"ecomShowCodeSectionWhenApplied\":\"B\", \"specs.stores.EnableOutOfStockAlignment\":\"true\", \"specs.stores.GalleryStoreExtractBI\":\"true\", \"specs.forms.EnablePhoneField\":\"true\", \"specs.stores.UseNewQueriesOnWishlistWithDiscount\":\"true\", \"specs.stores.UseExperimentsFromPlatformFlowApiLegacyProjects\":\"true\", \"specs.ecom.ShowMultipleSubscriptions\":\"true\", \"typDisableOfflineInstructionFetch\":\"B\", \"ecomPlaceOrderFallbackToContinueShoppingUrl\":\"B\", \"specs.stores.FixBackInStockButtonValidation\":\"true\", \"ecomInlineAddressSelectionInCart\":\"B\", \"specs.stores.FixGalleryNotToShowQueryPageFor1\":\"true\", \"specs.stores.DeprecateLineItemEnricherOnOrderUoU\":\"true\", \"ecomCheckoutComposerSettingsPanelEntry\":\"A\", \"specs.ecom.hideShippingOptionAvailibilityBadgeOnMobile\":\"true\", \"specs.ecom.OpenSuccessPopup\":\"true\", \"ecomRemovePmNameErrorModal\":\"B\", \"specs.ecom.HideMissingLineItemImagesInPaymentRequest\":\"true\", \"ecomFallbackForMissingEcommerceSettings\":\"B\", \"specs.stores.FixProductPageMediaCentering\":\"true\", \"specs.stores.GalleryProductOptionsAndQuantityRoundCornersInViewer\":\"true\", \"specs.stores.GalleryFixOutOfBoundsPageParam\":\"true\", \"specs.stores.RenderSlotsInGallery\":\"true\", \"specs.stores.SwitchLocalStorageToSessionStorageInGalleryNavigationToPP\":\"true\", \"specs.stores.PriceFilterClientTicksCalculation\":\"false\", \"chooseSourceCategoryGalleryAction\":\"B\", \"specs.stores.UseNewQueriesWithProductDiscount\":\"true\", \"specs.ecom.DontHandleCheckoutNotAllowedInCart\":\"true\", \"galleryParallelFiltersAndProductsFetch\":\"B\", \"specs.ecom.TaxExemptionOnTYP\":\"true\", \"gridGalleryReorderGfpp\":\"A\", \"specs.stores.ResponsiveTYPCss\":\"true\", \"specs.stores.UseGetClientConfigFromPublicApi\":\"true\", \"ecomCheckoutComposerBM\":\"B\", \"specs.stores.ShouldSplitBillingInfoPrefill\":\"true\", \"storesGraphQlSubscriptionDiscount\":\"B\", \"specs.stores.UseExperimentsFromPlatformFlowApi\":\"true\", \"specs.ecom.UsePaymentRequestTitleInThankYou\":\"true\", \"specs.stores.FixPreviewCustomProductUrlSlug\":\"true\", \"specs.stores.ShouldShowFirstProductOptionInGallery\":\"true\", \"specs.stores.FixProductPageHydrationError\":\"true\", \"specs.stores.GalleryColorOptionAlignment\":\"true\", \"specs.stores.AllowGalleryFreeModeNavigationInViewer\":\"true\", \"specs.stores.EnableQualityOptionsStylingChanges\":\"false\", \"specs.stores.AddingOverflowHiddenToFilterTitleMobile\":\"true\", \"specs.stores.ProductPageSupportGridLayout\":\"true\", \"specs.stores.UseProductLineItemFromTYP\":\"true\", \"ecomCartLineItemUpsells\":\"B\", \"specs.stores.AddSliderGalleryTitleToGlobalPropsContext\":\"true\", \"specs.stores.AdditionalRibbonsFieldGraphQL\":\"true\", \"specs.stores.FixProductPageHistoricalBreadcrumbsStyleParams\":\"true\", \"specs.ecom.FixCartCountOverlap\":\"true\", \"ecomExpressCheckoutFromViewerScript\":\"B\", \"specs.stores.EnableWarmUpDataCaching\":\"true\", \"storesMobileGalleryFiltersDesignSettings\":\"A\", \"galleryHideEmptyOptionFilters\":\"B\", \"specs.stores.FixGalleryRenderingWhenUrlChanges\":\"false\", \"specs.ecom.SupportMultipleGCInTYP\":\"true\", \"specs.stores.CombinedListing\":\"true\", \"specs.stores.ExtendPlaceOrderDeadline\":\"true\", \"specs.stores.CheckoutPagePreviewEnabled\":\"true\", \"specs.stores.RemoveLoadConfigInAddToCart\":\"false\", \"specs.ecom.useLocaleForDatePicker\":\"true\", \"specs.ecom.paymentErrorNoCountryHandling\":\"true\", \"specs.stores.OnlineStoresCurrencyClientFormatting\":\"true\", \"storesStickyAddToCart\":\"B\", \"specs.stores.ProductPageRicoDescription\":\"true\", \"ecomFixCartIconTextMeasurement\":\"B\", \"specs.stores.CategoryPageFooterDescriptionSF\":\"true\"}, \"675bbcef-18d8-41f5-800e-131ec9e08762\":{\"specs.wixCode.LoadWithImportAMDModule\":\"true\", \"specs.wixCode.LoadNamespacesPerPage\":\"false\", \"specs.wixcode.ViewerExperimentOwnerScopeTest\":\"true\", \"specs.wixCode.resolveMissingPlatformNamespaces\":\"false\", \"specs.wixcode.ViewerExperimentTest\":\"false\"}, \"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":{\"specs.UouSubscriptionServiceUseApiGatewayClient\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppStudio2\":\"true\", \"specs.membersArea.DoNotWaitInstallNavigation\":\"true\", \"specs.membersArea.UseMembersNgApiUpdate\":\"false\", \"specs.members.FollowersAudienceProvider\":\"false\", \"specs.media.MediaManager3\":\"true\", \"specs.membersArea.showCascadingIndicators\":\"true\", \"specs.membersArea.HideMemberSortField\":\"true\", \"specs.profileCardOOI.MakeProfileCardRemovableInNewMA\":\"true\", \"specs.membersArea.DisableLivePreviewRefreshes\":\"true\", \"specs.membersArea.CheckUserContributorPermissions\":\"true\", \"specs.profileCard.EnableHtmlTagSettings\":\"true\", \"specs.membersArea.CheckIsAppActiveBeforeInstallV1\":\"true\", \"specs.membersArea.UseGetMyMemberInMemberHandler\":\"true\", \"specs.membersArea.EnableMembersAreaContextCheck\":\"true\", \"specs.profileCardOOI.NewResetSettings\":\"true\", \"specs.membersArea.AddSuspendedFilter\":\"true\", \"specs.membersfollow.ActivityCounters\":\"true\", \"specs.membersArea.ShowPageRedirectNote\":\"true\", \"specs.membersArea.ExtendedUninstallMASubApps\":\"true\", \"specs.membersArea.UseViewedMemberBlocked\":\"true\", \"specs.membersArea.UseFollowersV3\":\"true\", \"specs.members.enableMuteMembersSkill\":\"true\", \"specs.myAccount.ShowBlockedMembersModalEmptyState\":\"true\", \"specs.membersArea.enableTimeoutLogs\":\"false\", \"specs.membersArea.GetRoutesUseGlobal\":\"true\", \"specs.membersArea.ShouldOpenPropertyInDevCenter\":\"false\", \"specs.membersApi.UseProfilesApiForTitleAndCoverWrites\":\"true\", \"specs.profileCardOOI.UseMiddlewareForGlobalSettingsGetter\":\"true\", \"specs.membersArea.EnableLoginBarComponentExtension\":\"true\", \"specs.members.enableUpdateCustomFieldSkill\":\"true\", \"specs.membersArea.ShowNewFFBorderSettings\":\"true\", \"specs.membersArea.AddNotificationsIconOnV2\":\"true\", \"specs.membersArea.AllowInstallingProfileE3\":\"true\", \"specs.members.enableHideCustomFieldSkill\":\"true\", \"specs.members.LogUpdateMemberRequest\":\"false\", \"checkEmailMistype\":\"B\", \"specs.membersArea.installationSourceOfTruth\":\"true\", \"specs.membersAreaV2.HidePermissionsPanelOnPrivateMA\":\"false\", \"specs.responsive-editor.NoMeasureInstall\":\"true\", \"specs.members.enableDeleteCustomFieldSkill\":\"true\", \"specs.membersArea.SkipTemplateHandlerForSettings\":\"false\", \"specs.membersArea.UsePopoverDynamicPositioning\":\"true\", \"specs.membersArea.MemberHandlerUseMembersNgApi\":\"true\", \"specs.membersArea.EnableMyAccountParallelInstall\":\"true\", \"specs.profileCardOOI.UseMiddlewareForMemberGetter\":\"true\", \"specs.membersArea.UseMembersNgApi\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppEditor3\":\"true\", \"specs.membersArea.DoNotCreateTeamMember\":\"false\", \"specs.membersArea.NotificationsIconFixerOnV2\":\"true\", \"specs.profileCardOOI.EnableAvifEncoding\":\"true\", \"specs.membersArea.ConsumeMembersPiiExchangeDomainEvents\":\"true\", \"specs.membersArea.ShowMoreMembersWithBadge\":\"false\", \"specs.membersArea.AddRevisionField\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV2MenuItems\":\"true\", \"specs.membersArea.AddManageMemberAccessAction\":\"true\", \"specs.membersArea.EnableTpaPageLinksDataFixerForV3MenuItems\":\"true\", \"specs.membersArea.EnableDependencyInstallationCheck\":\"true\", \"specs.ident.SiteMembersSocialDisclaimer\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV3\":\"true\", \"migrateDisconnectedLoginBars\":\"B\", \"specs.profileCardOOI.EnableProfileAlignmentCssVars\":\"true\", \"specs.membersArea.UseQueryMembersTextSearch\":\"true\", \"specs.membersAreaV2.EnablePageInfoPanelCustomPage\":\"false\", \"specs.profileCardOOI.usePlaceholderLoaders\":\"true\", \"specs.membersArea.SkipRolesSyncOnMemberCreated\":\"true\", \"specs.profileCardOOI.UseBlockedCheckFollowButton\":\"true\", \"specs.myAccount.showBlockedMembersModalRedesign\":\"true\", \"specs.membersArea.MetaSiteSpecialConsumerV2\":\"true\", \"specs.members.enableUnmuteMembersSkill\":\"true\", \"specs.membersArea.UseMembersAboutV2\":\"true\", \"specs.members.enableCreateBadgeSkill\":\"true\", \"specs.profileCard.HideMessageButtonForNonSocialChatUsers\":\"false\", \"specs.membersArea.HideSuspendedLabelForNonOwners\":\"true\", \"enableNewThumbnailSkinsForMembersAreaPanels\":\"A\", \"specs.membersArea.UseApplyChangeToAllLanguagesForMaV2\":\"true\", \"specs.membersArea.SortByNumbersInElastic\":\"true\", \"specs.myAccount.ShowPrivacySettingsMessageForSiteOwners\":\"true\", \"specs.profileCardOOI.showNewNotificationsContent\":\"true\", \"specs.membersArea.UninstallMASubApps\":\"true\", \"specs.membersArea.UseAppDataForRoutes\":\"true\", \"specs.membersArea.CreateMissingMember\":\"true\", \"specs.membersArea.EnableMenusDataFixer\":\"true\", \"specs.members.usePlatformizedServicesForUpdate\":\"true\", \"specs.badges.shouldUseBadgesV3InEdm\":\"true\", \"specs.membersArea.HideSuspendedLabelForNonOwnersFFBox\":\"true\", \"specs.ident.shouldInstallIdentityAuthAppV2\":\"true\", \"specs.profileCardOOI.EnableCSSIndicators\":\"true\", \"specs.membersArea.EnableMemberPagePermissions\":\"false\", \"specs.membersArea.UseIsPermittedOnMediaCredentials\":\"true\", \"specs.profileCardOOI.UseMiddlewareForRolesMapGetter\":\"true\", \"specs.membersArea.fixLoginBarResponsiveLayout\":\"true\", \"specs.membersArea.EnableV2SilentInstall\":\"true\", \"specs.profileCard.UseMigratedEditor3StylesParams\":\"true\", \"specs.membersArea.EnableInstallationTimeout\":\"false\", \"specs.members.enableManageMemberPrivacySkill\":\"true\", \"specs.membersAreaV3.ReAddPageWorkaround\":\"true\", \"specs.membersArea.OptimizeVerticalDeletion\":\"true\", \"specs.membersArea.EnableFollowersAsLightbox\":\"true\", \"specs.membersArea.UseGetOrCreateMemberV2\":\"true\", \"specs.members.enableCreateCustomFieldSkill\":\"true\", \"specs.membersArea.migrateToV2\":\"false\", \"specs.membersArea.ClearSettings\":\"true\", \"specs.membersArea.ShowHeadingLevelSettings\":\"true\"}}}, \"forceEmptySdks\":false, \"appDefIdToIsMigratedToGetPlatformApi\":{\"148c2287-c669-d849-d153-463c7486a694\":false, \"14409595-f076-4753-8303-9a86f9f71469\":false, \"14bcded7-0066-7c35-14d7-466cb3f09103\":true, \"1380b703-ce81-ff05-f115-39571d94dfcd\":false, \"2bef2abe-7abe-43da-889c-53c1500a328c\":false, \"140603ad-af8d-84a5-2c80-a0f60cb47351\":false, \"14271d6f-ba62-d045-549b-ab972ae1f70e\":false, \"14ce1214-b278-a7e4-1373-00cebd1bef7c\":false, \"675bbcef-18d8-41f5-800e-131ec9e08762\":false, \"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":false, \"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":false, \"14cffd81-5215-0a7f-22f8-074b0e2401fb\":false, \"14dbef06-cc42-5583-32a7-3abd44da4908\":false, \"4aebd0cb-fbdb-4da7-b5d1-d05660a30172\":false, \"1484cb44-49cd-5b39-9681-75188ab429de\":false, \"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\":false, \"14f25924-5664-31b2-9568-f9c5ed98c9b1\":false, \"dataBinding\":false}}, \"appsScripts\":{\"urls\":{\"14ce28f7-7eb0-3745-22f8-074b0e2401fb\":[\"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/viewerScript.bundle.min.js\", \"https:\\/\\/static.parastorage.com\\/services\\/profile-card-tpa-ooi\\/1.2966.0\\/ProfileCardController.bundle.min.js\"], \"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":[\"https:\\/\\/static.parastorage.com\\/services\\/santa-members-viewer-app\\/1.2891.0\\/viewerScript.bundle.min.js\"]}, \"scope\":\"page\"}, \"debug\":{\"disablePlatform\":false, \"disableSnapshots\":false, \"enableSnapshots\":false}, \"isBuilderComponentModel\":false}}, \"siteFeatures\":[\"accessibilityBrowserZoom\", \"appMonitoring\", \"assetsLoader\", \"businessLogger\", \"captcha\", \"clickHandlerRegistrar\", \"commonConfig\", \"componentsRegistry\", \"consentPolicy\", \"contentReflow\", \"cyclicTabbing\", \"domSelectors\", \"domStore\", \"dynamicPages\", \"environmentWixCodeSdk\", \"environment\", \"externalServices\", \"locationWixCodeSdk\", \"mpaNavigation\", \"navigationManager\", \"navigationPhases\", \"ooi\", \"pages\", \"panorama\", \"protectedPages\", \"renderer\", \"reporter\", \"routerFetch\", \"router\", \"scrollRestoration\", \"seoWixCodeSdk\", \"seo\", \"sessionManager\", \"siteMembersWixCodeSdk\", \"siteMembers\", \"siteScrollBlocker\", \"siteWixCodeSdk\", \"speculationRules\", \"ssrCache\", \"stores\", \"structureApi\", \"thunderboltInitializer\", \"tpaCommons\", \"tpaWorkerFeature\", \"translations\", \"usedPlatformApis\", \"warmupData\", \"windowMessageRegistrar\", \"windowWixCodeSdk\", \"wixCustomElementComponent\", \"wixEmbedsApi\", \"componentsLoader\", \"componentsReact\", \"platform\"], \"experiments\":{\"specs.thunderbolt.DisableSentry\":true, \"specs.thunderbolt.cmsDprNamedQueryParam\":true, \"specs.thunderbolt.viewport_hydration_extended_react_18\":true, \"specs.thunderbolt.inMemoryPaypalAuthToken\":true, \"specs.thunderbolt.roundBordersInResponsiveContainer\":true, \"specs.thunderbolt.PanoramaErrorMonitor\":true, \"specs.thunderbolt.userAsFactory\":true, \"specs.thunderbolt.getMemberDetailsFromMembersNg\":true, \"specs.thunderbolt.stopResolvingInnerSelectors_VAG\":true, \"specs.thunderbolt.UseEEImpress\":true, \"specs.thunderbolt.interactionsUseReactionEffectId\":true, \"specs.thunderbolt.logVsmSiteMapDiff\":true, \"specs.promote.ar.reportRestPurchaseEventsInsteadOfKafka\":true, \"specs.thunderbolt.guardAnonymousRequireJsDefine\":true, \"specs.thunderbolt.sendBiInlightbox\":true, \"specs.thunderbolt.migrateSdkDataMappers\":true, \"specs.thunderbolt.vsm_css\":true, \"specs.thunderbolt.fixDisabledLinkButtonStyles\":true, \"specs.thunderbolt.UseEcomFemBi\":true, \"specs.thunderbolt.vsm_interactions_v1\":true, \"specs.thunderbolt.browserZoomHandler\":true, \"disableViewerModelInlineSeo\":true, \"specs.thunderbolt.one_cell_grid_display_flex\":true, \"specs.thunderbolt.siteMembersMultilingualLanguage\":true, \"specs.thunderbolt.useClassnameInResponsiveAppWidget\":true, \"specs.thunderbolt.shouldRunCodEmbedsCallbackOnce\":true, \"specs.thunderbolt.componentCustomCss\":true, \"specs.thunderbolt.globalVarsRefactor23\":true, \"specs.thunderbolt.browserCacheReload\":true, \"specs.thunderbolt.repeaterStaticSlotChildCss\":true, \"specs.thunderbolt.browserZoomMobileOnloadDetection\":true, \"specs.thunderbolt.resolveSpxWithoutEditorCheck\":true, \"specs.thunderbolt.useERCUndependentComp\":true, \"shouldUseEditorElementsLoginSocialBarResponsiveStyling\":true, \"specs.thunderbolt.shouldUseResponsiveImages\":true, \"specs.thunderbolt.fedops_enableSampleRateForAppNames\":true, \"specs.thunderbolt.WixFreeSiteBannerDesktop\":true, \"specs.thunderbolt.dontTruncateScrollPosition\":true, \"specs.thunderbolt.excludeInstanceFromQueryParams\":true, \"specs.thunderbolt.vsmSiteMap\":true, \"specs.thunderbolt.useLegacyLinkUtilsInPlatform\":true, \"specs.thunderbolt.scopeRepeatedSelectors\":true, \"specs.thunderbolt.fullPageNavigationSpecificSites\":true, \"specs.thunderbolt.ComponentsRegistryFixAnonymousDefine\":true, \"specs.thunderbolt.newTransitionEndHandlerLogic\":true, \"specs.thunderbolt.postTransitionElementFocus\":true, \"specs.thunderbolt.LoginSocialBarSplitStateProps\":true, \"specs.thunderbolt.skipDecodeUri\":true, \"specs.thunderbolt.logVsmPlatformDiff\":true, \"specs.thunderbolt.uiTypeNativeMappers\":true, \"specs.thunderbolt.SetNoCacheOnAppError\":true, \"specs.thunderbolt.bundlerTrafficToAws\":true, \"textMarqueePlayPauseA11y\":true, \"specs.thunderbolt.HtmlComponentPropsMapper\":true, \"paginationForcedColorsResponsiveNav\":true, \"specs.thunderbolt.fixSafariTabHeight\":true, \"specs.thunderbolt.UseOriginalBlocksAppInstance\":true, \"specs.thunderbolt.showContentReflowBanner\":true, \"specs.thunderbolt.removeDynamicModelTopologyFromSiteAssets\":true, \"specs.thunderbolt.FreemiumBannerOdeditor\":true, \"specs.thunderbolt.pageUrlRegexIgnoreSpace\":true, \"specs.thunderbolt.UseLoginSocialBarCustomMenu\":true, \"specs.thunderbolt.WRichTextPropsMapper\":true, \"specs.thunderbolt.wixRealtimeGetAppTokenFromPlatformUtils\":true, \"specs.thunderbolt.newLoginFlowOnProtectedCollection\":true, \"specs.thunderbolt.shouldSendCookiesForSiteMembersSettings\":true, \"specs.thunderbolt.calculateHeadEmbedsInSSR\":true, \"specs.thunderbolt.useNewRegisterLogin\":true, \"specs.thunderbolt.useWowImageInFastGallery\":true, \"specs.thunderbolt.shouldFixIosFlashBug\":true, \"specs.thunderbolt.vsmFeaturesModule\":true, \"specs.thunderbolt.builderBoxSizingBorderBox\":true, \"specs.thunderbolt.headerUseMargins\":true, \"specs.thunderbolt.popupCustom404\":true, \"specs.thunderbolt.TextInputPrefixWidthFix\":true, \"specs.thunderbolt.loadWebpackRuntimeInHead\":true, \"specs.thunderbolt.returnToPreviousPageOnProtectedPageClose\":true, \"specs.thunderbolt.lightboxFocusRestore\":true, \"specs.thunderbolt.DatePickerPortal\":true, \"specs.thunderbolt.dom_store\":true, \"specs.thunderbolt.UseNewLoginSocialBarCustomMenuPositioning\":true, \"specs.thunderbolt.siteButtonKeyboardBehavior\":true, \"specs.thunderbolt.fixRemappedFullNameCompType\":true, \"specs.os.EnableErrorHandlerInViewer\":true, \"shouldUseMABuilderLoginSocialBarResponsiveStyling\":true, \"specs.thunderbolt.ShouldUseNewIAMSocialFlow\":true, \"specs.thunderbolt.lazy_load_iframe\":true, \"specs.thunderbolt.namedRanges\":true, \"specs.thunderbolt.useFragmentHrefForTopBottomAnchor\":true, \"specs.thunderbolt.useSvgLoaderFeatureOnBuilderComps\":true, \"specs.thunderbolt.useIAMEnabledConnections\":true, \"specs.thunderbolt.StoresCartNullOnShippingInfo\":true, \"specs.thunderbolt.logViewerModelDiff\":true, \"specs.thunderbolt.vsmPlatform\":true, \"specs.thunderbolt.securityExperiments\":true, \"specs.thunderbolt.fixFirefoxLinkBarIntrinsicSizing\":true, \"specs.thunderbolt.useElementoryRelativePath\":true, \"specs.thunderbolt.customCssUseBaseUrl\":true, \"sp.erc.MaskPanel\":true, \"specs.thunderbolt.HamburgerMenuOverflowFix\":true, \"specs.thunderbolt.preventGetMemberDetailsWaterfall\":true, \"specs.thunderbolt.linkBarNativeMapper\":true, \"specs.thunderbolt.outlineCss\":true, \"specs.thunderbolt.wrichtextListInRtl\":true, \"specs.thunderbolt.UseNestedLoginSocialBarMenuItems\":true, \"specs.thunderbolt.addPlatformizationOptionSignUpFlow\":true, \"specs.thunderbolt.scrollToRetries\":true, \"specs.thunderbolt.addPlatformizationOptionLoginFlow\":true, \"specs.thunderbolt.UseNewLoginBarDropdownMenuAlignment\":true, \"specs.thunderbolt.splitSlotSelectors\":true, \"specs.thunderbolt.pageBGTransitionHandler\":true, \"specs.thunderbolt.updateRichTextSemanticClassNamesOnCorvid\":true, \"specs.thunderbolt.shouldFetchLoginUrlByClientId\":true, \"specs.thunderbolt.shouldLoadGoogleSdkEarly\":true, \"specs.promote.ar.useFacebookSetupV1Service\":true, \"specs.thunderbolt.loadNewerSentrySdk\":true, \"specs.thunderbolt.motionTimeAnimationsCSS\":true, \"specs.thunderbolt.shouldUseMemberPrivacySettingsService\":true, \"specs.thunderbolt.DDMenuMigrateCssCarmiMapper\":true, \"specs.membersArea.LoginBarRemake\":true, \"specs.thunderbolt.buttonUdp\":true, \"specs.thunderbolt.alwaysApplySessionTokenOnIAM\":true, \"specs.thunderbolt.sendFedopsLoadStartedReplaced\":true, \"specs.thunderbolt.SlideshowStopMediaInNonActiveSlides\":true, \"specs.thunderbolt.removeDynamicModelTopology\":true, \"specs.thunderbolt.hardenFetchAndXHR\":true, \"specs.thunderbolt.useResponsiveImgClassicFixed\":true, \"specs.thunderbolt.routerDynamicPageOverride\":true, \"specs.thunderbolt.membersPrivacySettingsUseBaseUrl\":true, \"specs.thunderbolt.DisableDocumentScrollWhenLightBoxOpen\":true, \"specs.thunderbolt.biForBrowserZoom\":true, \"specs.thunderbolt.paidPlansSdkUseV2Orders\":true, \"specs.thunderbolt.shouldValidateRedirectUrl\":true, \"specs.thunderbolt.StoresCartZeroOnShippingAndTax\":true, \"specs.thunderbolt.cmsStandalone\":true, \"specs.thunderbolt.enableSignUpPrivacyNoteType\":true, \"specs.thunderbolt.vectorImageDecorativeClickElementTitle\":true, \"specs.thunderbolt.dynamicPageLinkTarget\":true, \"specs.thunderbolt.veloWixMembersAmbassadorV2\":true, \"specs.thunderbolt.customElemCollapsedheight\":true, \"specs.thunderbolt.EagerSpeculationRules\":true, \"specs.thunderbolt.megaMenuMouseLeave\":true, \"specs.thunderbolt.useUrlFromBrowserWindowInsteadOfViewerModel\":true, \"specs.thunderbolt.fixMpaWorkerBi\":true, \"specs.thunderbolt.contextProviders\":true, \"specs.thunderbolt.WRichTextVerticalAlignTopSafariAndIOS\":true, \"specs.thunderbolt.builderSvgCssVars\":true, \"specs.thunderbolt.viewportOnBPChange\":true, \"specs.thunderbolt.vsmViewerModel\":true, \"specs.thunderbolt.resolveDocumentLink\":true, \"specs.thunderbolt.allowWebpAvifTransforms\":true, \"specs.thunderbolt.UseWixDataItemService\":true, \"specs.thunderbolt.VerticalMenu_uiType_NativeMapper\":true, \"wrichTextForcedColorsFocusRing\":true, \"specs.thunderbolt.useImageAvifFormatInNativeProGallery\":true, \"specs.thunderbolt.splitLinkUtils\":true, \"specs.thunderbolt.a11yContrast\":true, \"specs.thunderbolt.useNewBuilderSdkApi\":true, \"specs.thunderbolt.migrateStylableMenuUiTypeMapper\":true, \"specs.thunderbolt.UseCloudDataUrlWithBaseExternalUrl\":true, \"specs.thunderbolt.skipMasterPageComponentManifestCss\":true, \"specs.thunderbolt.dontCleanLightboxState\":true, \"specs.thunderbolt.removeSafariStickyFix\":true, \"specs.promote.ar.reportEcomPlatformPurchaseEvents\":true, \"specs.thunderbolt.UseNewLoginSocialBarMemberInitialsAvatar\":true, \"specs.thunderbolt.useIAMPlatform\":true, \"specs.thunderbolt.filterRobotsForConvertedDynamicPages\":true, \"specs.thunderbolt.veloBundlerParastorageUrl\":true, \"specs.thunderbolt.HoverBoxSelectorToCssNativeMapper\":true, \"specs.thunderbolt.fiveGridLineStudioSkins\":true, \"specs.thunderbolt.responsiveContainerRoleGroup\":true, \"specs.thunderbolt.AddRegisterEventListenerToWixWindow\":true, \"specs.thunderbolt.fetchSVGfromNetworkInCSR\":true, \"specs.thunderbolt.runMappersWithSpecificDeps\":true, \"specs.thunderbolt.UseNewLoginSocialBarElementStructure\":true, \"specs.thunderbolt.LottieUseCanvasForIOSDevices\":true, \"specs.ident.usePlatformizedSMAuth\":true, \"reportBuilderComponentSsrFailures\":true, \"specs.thunderbolt.svgResolver_2\":true, \"specs.thunderbolt.shouldSearchForRouterPrefix\":true, \"specs.thunderbolt.carouselGalleryImageFitting\":true, \"specs.thunderbolt.fixSiteScrollBlockerRace\":true, \"specs.thunderbolt.deduplicateSvgFetches\":true, \"specs.thunderbolt.sectionA11yProps\":true, \"specs.thunderbolt.scrollToAnchorSsr\":true, \"specs.thunderbolt.pricingPlansUserOrdersV2\":true, \"specs.thunderbolt.useSvgLoaderFeature\":true, \"specs.thunderbolt.loginSocialBarEnableUrlChangeListeners\":true, \"specs.thunderbolt.pageTransitionScrollSmoothly\":true, \"specs.thunderbolt.buttonUdp_loggedIn\":true, \"specs.thunderbolt.preventAnchorReloadBeforeHydration\":true, \"specs.thunderbolt.logVsmFeaturesModuleDiff\":true, \"specs.thunderbolt.InitPlatformApiProvider\":true, \"specs.thunderbolt.fixFirefoxPopupScrollShift\":true, \"specs.thunderbolt.shouldMapFullContactInfoToIdentityProfile\":true, \"specs.thunderbolt.isClassNameToRootEnabledNext\":true, \"specs.thunderbolt.isClassNameToRootEnabled\":true, \"specs.thunderbolt.LoginBarEnableLoggingInStateInSSR\":true, \"specs.thunderbolt.WixFreeSiteBannerMobile\":true, \"specs.thunderbolt.render_dom_store_before_site\":true, \"specs.thunderbolt.calculateCollapsibleTextLineHeightByFont\":true, \"specs.thunderbolt.imageEncodingAVIF\":true, \"displayWixAdsNewVersion\":true, \"specs.thunderbolt.BundlerTypescriptListExportedFunctions\":true, \"specs.thunderbolt.smModalsShouldWaitForAppDidMount\":true, \"specs.thunderbolt.autoScrollingOnIphoneMPA\":true, \"specs.thunderbolt.ooi_css_optimization\":true, \"specs.thunderbolt.dynamicSlots\":true, \"specs.thunderbolt.fixGapBelowTextboxonMobileSite\":true, \"specs.thunderbolt.useBuilderComponentTypeInBi\":true, \"specs.odeditor.socialPlayerChangeSource\":true, \"specs.thunderbolt.ooiCssSelectorWithSuffix\":true, \"specs.thunderbolt.stringifyHashPresetName_VAG\":true, \"specs.thunderbolt.overrideFloatInDistance\":true, \"specs.thunderbolt.editorElementsRegistryEnsureComponentLoaderFix\":true, \"specs.thunderbolt.moveFedopsLoadStartToBody\":true, \"specs.thunderbolt.pinnedTopAuto\":true, \"specs.thunderbolt.EnableCustomCSSVarsForLoginSocialBar\":true, \"specs.thunderbolt.deduplicateFAQPageStructuredData\":true, \"specs.thunderbolt.shouldFetchLogoutUrlByClientId\":true, \"specs.thunderbolt.routerFetchExtendedUrlLength\":true, \"specs.thunderbolt.retainInternalQueryParams\":true, \"specs.thunderbolt.convertBirthdateToISOString\":true, \"specs.thunderbolt.textMaskFontFallbacks\":true, \"specs.thunderbolt.dynamicPageServiceManager\":true, \"specs.thunderbolt.getAppTokenForCustomElement\":true, \"specs.thunderbolt.dontApplyDacOverridesOnBoBApps\":true, \"accordionForcedColors\":true, \"specs.thunderbolt.previewRegion\":true, \"specs.thunderbolt.fixDocumentLinkInPremiumPreview\":true, \"specs.thunderbolt.HeaderSectionAddVisibilityTransition\":true, \"specs.promote.ar.reportScheduleEventsOnPurchaseIfNeeded\":true, \"specs.thunderbolt.removeSingleTabCssMapper\":true, \"specs.thunderbolt.newAuthorizedPagesFlow\":true, \"specs.thunderbolt.viewerWithoutWixDynamicCustomElements\":true, \"specs.thunderbolt.newControllersModel\":true, \"specs.thunderbolt.textScaleAdjust\":true, \"specs.thunderbolt.resolveManifestInTB\":true, \"specs.thunderbolt.Panorama\":true, \"specs.thunderbolt.fetchCurrentMemberFromMembersNg\":true, \"specs.thunderbolt.designStates\":true, \"specs.thunderbolt.logoutOnIAM\":true, \"specs.thunderbolt.resolveElementPropsSlotRefs\":true, \"slideshowSlideLtrDirection\":true, \"specs.thunderbolt.increaseFocusRing\":true, \"specs.thunderbolt.TextInputAutoFillFix\":true, \"specs.thunderbolt.addIdAsClassName\":true, \"specs.thunderbolt.suspenseInSlots\":true, \"specs.thunderbolt.useNewTelemetryAPI\":true, \"specs.thunderbolt.UseNewLoginBarColorWiringOnE3\":true}, \"formFactor\":\"desktop\", \"isMobileDevice\":false, \"viewMode\":\"desktop\", \"requestUrl\":\"https:\\/\\/www.100relab.com\\/publications\", \"fleetConfig\":{\"fleetName\":\"thunderbolt-renderer\", \"type\":\"GA\", \"code\":0}, \"accessTokensUrl\":\"https:\\/\\/www.100relab.com\\/_api\\/v1\\/access-tokens\", \"interactionSampleRatio\":0.01, \"isPartialRouteMatching\":false, \"siteAssetsTestModuleVersion\":\"1.334.0\", \"useLocalPiler\":false, \"componentsLibrariesTopology\":[{\"artifactId\":\"editor-elements\", \"namespace\":\"wixui\", \"url\":\"https:\\/\\/static.parastorage.com\\/services\\/editor-elements\\/1.15523.0\"}, {\"artifactId\":\"editor-elements\", \"namespace\":\"dsgnsys\", \"url\":\"https:\\/\\/static.parastorage.com\\/services\\/editor-elements\\/1.15523.0\"}], \"media\":{\"staticMediaUrl\":\"https:\\/\\/static.wixstatic.com\\/media\", \"mediaRootUrl\":\"https:\\/\\/static.wixstatic.com\\/\", \"staticVideoUrl\":\"https:\\/\\/video.wixstatic.com\\/\", \"userDomainMediaPrefixes\":[]}, \"deviceInfo\":{\"deviceClass\":\"Desktop\"}, \"site\":{\"metaSiteId\":\"29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\", \"userId\":\"58745a76-e0c5-4f2f-9bde-555a9724b21d\", \"siteId\":\"672029d0-83a2-4790-8e8e-262a1369465f\", \"externalBaseUrl\":\"https:\\/\\/www.100relab.com\", \"siteRevision\":607, \"siteType\":\"UGC\", \"dc\":\"virginia-pub\", \"isResponsive\":false, \"editorName\":\"Unknown\", \"sessionId\":\"2113be44-7f68-469c-8162-1129134fb7ca\", \"isSEO\":false, \"appNameForBiEvents\":\"thunderbolt\"}, \"mode\":{\"qa\":false, \"enableTestApi\":false, \"addAllServices\":false, \"debug\":false, \"ssrIndicator\":false, \"ssrOnly\":false, \"siteAssetsFallback\":\"enable\", \"versionIndicator\":false}, \"language\":{\"userLanguage\":\"en\", \"userLanguageResolutionMethod\":\"QueryParam\", \"siteLanguage\":\"en\", \"isMultilingualEnabled\":false, \"directionByLanguage\":\"ltr\"}, \"rollout\":{\"siteAssetsVersionsRollout\":false, \"isDACRollout\":0, \"isTBRollout\":false}, \"commonConfig\":{\"brand\":\"wix\", \"host\":\"VIEWER\", \"bsi\":\"\", \"consentPolicy\":{}, \"consentPolicyHeader\":{}, \"siteRevision\":\"607\", \"renderingFlow\":\"NONE\", \"language\":\"en\", \"locale\":\"vi-vn\"}, \"anywhereConfig\":{}, \"pilerExperiments\":{\"specs.piler.useEditorReactComponents\":true}, \"rendererType\":null, \"siteAssets\":{\"dataFixersParams\":{\"experiments\":{\"dm_migrateOldHoverBoxToNewFixer\":true, \"dm_masterPageVariablesQueryFixer\":true}, \"dfVersion\":\"1.5627.0\", \"isHttps\":true, \"isUrlMigrated\":true, \"metaSiteId\":\"29bb66d5-6ce7-4c59-b7b6-2dc7579e662a\", \"quickActionsMenuEnabled\":false, \"siteId\":\"672029d0-83a2-4790-8e8e-262a1369465f\", \"siteRevision\":607, \"v\":3, \"cacheVersions\":{\"dataFixer\":6}}, \"modulesParams\":{\"features\":{\"moduleName\":\"thunderbolt-features\", \"contentType\":\"application\\/json\", \"resourceType\":\"features\", \"languageResolutionMethod\":\"QueryParam\", \"isMultilingualEnabled\":false, \"externalBaseUrl\":\"https:\\/\\/www.100relab.com\", \"useSandboxInHTMLComp\":false, \"disableStaticPagesUrlHierarchy\":false, \"aboveTheFoldSectionsNum\":null, \"isTrackClicksAnalyticsEnabled\":false, \"isSocialElementsBlocked\":false, \"builderAppVersions\":\"\", \"onlyInteractions\":false}, \"platform\":{\"moduleName\":\"thunderbolt-platform\", \"contentType\":\"application\\/json\", \"resourceType\":\"platform\", \"externalBaseUrl\":\"https:\\/\\/www.100relab.com\", \"staticHTMLComponentUrl\":\"https:\\/\\/www-100relab-com.filesusr.com\\/\"}, \"css\":{\"moduleName\":\"thunderbolt-css\", \"contentType\":\"application\\/json\", \"resourceType\":\"css\", \"shouldRunVsm\":true, \"shouldRunCssInBrowser\":false, \"shouldGetCssResultObject\":false, \"stylableMetadataURLs\":[\"editor-elements-library.thunderbolt.6824ef59f3eee21e3c90ac2bc0f618b9d1145690\", \"editor-elements-design-systems.thunderbolt.48d191ec676032c3420df80ead415b786f6079dc\"], \"builderAppVersions\":\"\", \"ooiVersions\":\"14c1462a-97f2-9f6a-7bb7-f5541f23caa6%3Dp.communities-blog-ooi%2F1.3335.0%2FBlogViewerWidgetNoCss.%3B14cefc05-d163-dbb7-e4ec-cd4f2c4d6ddd%3Dp.profile-card-tpa-ooi%2F1.2966.0%2FProfileCardViewerWidgetNoCss.%3B14dbefb9-3b7b-c4e9-53e8-766defd30587%3Dp.members-about-ooi%2F1.2711.0%2FProfileViewerWidgetNoCss.%3B14dd1af6-3e02-63db-0ef2-72fbc7cc3136%3Dp.my-account-ooi%2F1.2859.0%2FMyAccountViewerWidgetNoCss.%3B211b5287-14e2-4690-bb71-525908938c81%3Dp.communities-blog-ooi%2F1.3335.0%2FPostViewerWidgetNoCss.%3B44c66af6-4d25-485a-ad9d-385f5460deef%3Dp.search-app%2F1.3998.0%2FSearchResultsViewerWidgetNoCss.%3Babcd87fe-c51f-4538-848d-2902a2f50d2d%3Dp.wixstores-client-gallery%2F1.6042.0%2FSearchResultsPageGalleryViewerWidgetNoCss.\"}, \"cssMappers\":{\"moduleName\":\"thunderbolt-css-mappers\", \"contentType\":\"application\\/json\", \"resourceType\":\"cssMappers\", \"shouldRunVsm\":true, \"shouldRunCssInBrowser\":false, \"shouldGetCssResultObject\":false, \"stylableMetadataURLs\":[\"editor-elements-library.thunderbolt.6824ef59f3eee21e3c90ac2bc0f618b9d1145690\", \"editor-elements-design-systems.thunderbolt.48d191ec676032c3420df80ead415b786f6079dc\"], \"builderAppVersions\":\"\", \"ooiVersions\":\"14c1462a-97f2-9f6a-7bb7-f5541f23caa6%3Dp.communities-blog-ooi%2F1.3335.0%2FBlogViewerWidgetNoCss.%3B14cefc05-d163-dbb7-e4ec-cd4f2c4d6ddd%3Dp.profile-card-tpa-ooi%2F1.2966.0%2FProfileCardViewerWidgetNoCss.%3B14dbefb9-3b7b-c4e9-53e8-766defd30587%3Dp.members-about-ooi%2F1.2711.0%2FProfileViewerWidgetNoCss.%3B14dd1af6-3e02-63db-0ef2-72fbc7cc3136%3Dp.my-account-ooi%2F1.2859.0%2FMyAccountViewerWidgetNoCss.%3B211b5287-14e2-4690-bb71-525908938c81%3Dp.communities-blog-ooi%2F1.3335.0%2FPostViewerWidgetNoCss.%3B44c66af6-4d25-485a-ad9d-385f5460deef%3Dp.search-app%2F1.3998.0%2FSearchResultsViewerWidgetNoCss.%3Babcd87fe-c51f-4538-848d-2902a2f50d2d%3Dp.wixstores-client-gallery%2F1.6042.0%2FSearchResultsPageGalleryViewerWidgetNoCss.\"}, \"siteMap\":{\"moduleName\":\"thunderbolt-site-map\", \"contentType\":\"application\\/json\", \"resourceType\":\"siteMap\", \"isDeployPreview\":false}, \"mobileAppBuilder\":{\"moduleName\":\"thunderbolt-mobile-app-builder\", \"resourceType\":\"mobileAppBuilder\", \"contentType\":\"application\\/json\"}, \"builderComponentFeatures\":{\"moduleName\":\"builder-component-features\", \"resourceType\":\"builderComponentFeatures\", \"contentType\":\"application\\/json\"}, \"builderComponentCss\":{\"moduleName\":\"builder-component-css\", \"resourceType\":\"builderComponentCss\", \"contentType\":\"application\\/json\"}, \"builderComponentPlatform\":{\"moduleName\":\"builder-component-platform\", \"resourceType\":\"builderComponentPlatform\", \"contentType\":\"application\\/json\"}, \"componentManifestCss\":{\"moduleName\":\"component-manifest-css\", \"resourceType\":\"componentManifestCss\", \"contentType\":\"application\\/json\", \"builderAppVersions\":\"\"}, \"pilerSiteAssets\":{\"moduleName\":\"piler-siteassets\", \"resourceType\":\"pilerSiteAssets\", \"contentType\":\"application\\/json\", \"buildFullApp\":\"true\", \"keepWidgetBuild\":\"false\", \"modulesToHashes\":\"{\\\"thunderbolt-features\\\":\\\"a6091b14.bundle.min\\\", \\\"thunderbolt-platform\\\":\\\"903d398e.bundle.min\\\", \\\"thunderbolt-css\\\":\\\"3dbec043.bundle.min\\\", \\\"thunderbolt-site-map\\\":\\\"cdea51ec.bundle.min\\\", \\\"thunderbolt-mobile-app-builder\\\":\\\"b99896aa.bundle.min\\\", \\\"builder-component-features\\\":\\\"2f91e2ed.bundle.min\\\", \\\"builder-component-css\\\":\\\"a1489312.bundle.min\\\", \\\"builder-component-platform\\\":\\\"365ffc98.bundle.min\\\", \\\"component-manifest-css\\\":\\\"ca86d5d8.bundle.min\\\", \\\"thunderbolt-css-mappers\\\":\\\"13f4efb2.bundle.min\\\", \\\"thunderbolt-services-configs\\\":\\\"61c9ce6a.bundle.min\\\"}\", \"nonBeckyModuleVersions\":\"{\\\"remote-widget-structure-builder\\\":\\\"1.251.0\\\", \\\"blocks-app-descriptor\\\":\\\"1.118.0\\\"}\"}}, \"clientTopology\":{\"mediaRootUrl\":\"https:\\/\\/static.wixstatic.com\", \"scriptsUrl\":\"static.parastorage.com\", \"staticMediaUrl\":\"https:\\/\\/static.wixstatic.com\\/media\", \"staticAudioUrl\":\"https:\\/\\/music.wixstatic.com\\/mp3\", \"moduleRepoUrl\":\"https:\\/\\/static.parastorage.com\\/unpkg\", \"fileRepoUrl\":\"https:\\/\\/static.parastorage.com\\/services\", \"viewerAppsUrl\":\"https:\\/\\/viewer-apps.parastorage.com\", \"viewerAssetsUrl\":\"https:\\/\\/viewer-assets.parastorage.com\", \"siteAssetsUrl\":\"https:\\/\\/siteassets.parastorage.com\", \"pageJsonServerUrls\":[\"https:\\/\\/pages.parastorage.com\", \"https:\\/\\/staticorigin.wixstatic.com\", \"https:\\/\\/www.100relab.com\", \"https:\\/\\/fallback.wix.com\\/wix-html-editor-pages-webapp\\/page\"], \"pathOfTBModulesInFileRepoForFallback\":\"wix-thunderbolt\\/dist\\/\"}, \"siteScopeParams\":{\"rendererType\":null, \"wixCodePageIds\":[\"s9v9x\"], \"hasTPAWorkerOnSite\":true, \"formFactor\":\"desktop\", \"viewMode\":\"desktop\", \"freemiumBanner\":false, \"coBrandingBanner\":false, \"dayfulBanner\":false, \"mobileActionsMenu\":false, \"isWixSite\":false, \"isResponsive\":false, \"editorName\":\"Unknown\", \"urlFormatModel\":{\"format\":\"slash\", \"forbiddenPageUriSEOs\":[\"_api\", \"robots.txt\", \"sitemap.xml\", \"feed.xml\", \"sites\"], \"pageIdToResolvedUriSEO\":{}}, \"pageJsonFileNames\":{\"v5gfm\":\"58745a_b227d45f9c0078d4558ebcc5be8e0d93_605.json\", \"imy4p\":\"58745a_ca1ed3b7566f754954b5faa5bf84082c_605.json\", \"wbh7l\":\"58745a_0b374e1e6bc2ccfadfc2dca7238ec015_605.json\", \"syls5\":\"58745a_336ba7ff7590be313edd61fe3862fbbc_605.json\", \"gg1rk\":\"58745a_bd0d691e23857e1d522055ae8649353a_605.json\", \"ymezx\":\"58745a_d1d82e74d3b39399f0518e0381a257b6_606.json\", \"thals\":\"58745a_03505133afc2a751bdaa8708b5ebee15_605.json\", \"kshql\":\"58745a_811ec7f41313679e88785e8dcf862cf3_605.json\", \"x1mpe\":\"58745a_595d6f3fd42925920ec8570c68c59a5e_605.json\", \"e9jsz\":\"58745a_45cb478756184da9782a5859a95364d9_605.json\", \"efy2o\":\"58745a_64eb95658be0025a1a132699487713a4_605.json\", \"cfu3y\":\"58745a_1647d6926311393b8cdc892e0467aad9_605.json\", \"whq86\":\"58745a_84f5ffbfeeb992284ff886c6143de50c_605.json\", \"hwkr6\":\"58745a_79e8b9cf96904955d6269e033322e103_605.json\", \"gjatk\":\"58745a_a0f46a85dcb9ec34827a60d2aa013a82_605.json\", \"um7z3\":\"58745a_0f83f5b6cbf049f106a1f82be8bf3a36_605.json\", \"yzozj\":\"58745a_31b43dedf235f0b7e0fd1438ccfb31d2_605.json\", \"asf6j\":\"58745a_27fc1e8d5c427d323599bc3b952b15b9_605.json\", \"qyyn5\":\"58745a_6a2e1d67eba75fff9c99826b77ceae9e_605.json\", \"gvoyx\":\"58745a_e2b240bb40c30553741036d12c959b20_605.json\", \"crthr\":\"58745a_24de1e3c04590fcea869781be982c048_605.json\", \"j3h1v\":\"58745a_69b450a9f2ecc27ee1abb62f17d4faf6_605.json\", \"w4sku\":\"58745a_0c93adb6da75d77a60be2b917368cc9f_605.json\", \"whufm\":\"58745a_fbee08389c1a592495ea399182b70019_605.json\", \"u5ncv\":\"58745a_a3db13db150c81576713550158042740_605.json\", \"hi9qs\":\"58745a_1422b70e6f206a1a1099c642c5b81fc8_605.json\", \"o3a3z\":\"58745a_1748690c92aff913292bfe9076e53c2f_605.json\", \"b29ye\":\"58745a_3db69168b91bc36c6d4b1a7b6a36e1d3_605.json\", \"x3vpv\":\"58745a_f7dbfed9af9932ddddef2ec0f3f98614_605.json\", \"h483u\":\"58745a_d92a99916a8b34e262caed461de3bb41_605.json\", \"ldw8n\":\"58745a_d804fa94607251e8bf63ccdd103659b0_605.json\", \"todeu\":\"58745a_65cf1982cdec0027eca51e2c83eff772_605.json\", \"utkvs\":\"58745a_67338fd0a32a3477db44c49e95e42f35_605.json\", \"ul3zo\":\"58745a_385fb09d9dbd4c38c7f81ba4b33133b5_605.json\", \"id3v5\":\"58745a_b156227495fcdb072e6aaed1de53ff67_605.json\", \"c1dmp\":\"58745a_c429fd03774b3ff6234a2b522e72ae21_607.json\", \"s9v9x\":\"58745a_32e62091855684e5d138a511529c0fe7_605.json\", \"hqe3r\":\"58745a_8bb16d54c8fabba6d0bdfba2e8ab9836_605.json\", \"u3h11\":\"58745a_0377c5812e5455a688d0011aef5d96e4_605.json\", \"hzskl\":\"58745a_55a357008ea7538c205c04e8e7332c70_606.json\", \"hi6bq\":\"58745a_70f2889eb6537f553dd7eb7c9cade391_605.json\", \"khq88\":\"58745a_b58403f2183d9bf52921dc9f9fb41ce6_605.json\", \"itycd\":\"58745a_3a0db373ff7e76914d6e13b1c1d3e869_605.json\", \"fmrkz\":\"58745a_35b004ac0f05d0b8d5bdbeb4849e0a7f_605.json\", \"vwems\":\"58745a_861071725dc54d68e41b3fb9c8a3b891_605.json\", \"jd2ix\":\"58745a_943327c89aa44dd068b12aa675c4bced_605.json\", \"masterPage\":\"58745a_16ce896ccf200f97e7d63276a2f9fe76_607.json\"}, \"protectedPageIds\":[\"k9gzs\", \"v36av\", \"bw36u\", \"bwvbz\"], \"routersInfo\":{\"configMap\":{\"routers-kyr2fk4p\":{\"prefix\":\"account\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"config\":\"{\\\"type\\\":\\\"private\\\", \\\"patterns\\\":{\\\"\\/my-account\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"appDefinitionId\\\":\\\"14cffd81-5215-0a7f-22f8-074b0e2401fb\\\", \\\"appPageId\\\":\\\"member_info\\\", \\\"menuOrder\\\":3, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\\\", \\\"seoData\\\":{\\\"title\\\":\\\"My Account\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"My Account\\\"}, \\\"\\/settings\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"14f25dc5-6af3-5420-9568-f9c5ed98c9b1\\\", \\\"appPageId\\\":\\\"settings\\\", \\\"menuOrder\\\":4, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Settings\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Settings\\\"}, \\\"\\/notifications\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{\\\"key\\\":\\\"notificationsCount\\\", \\\"default\\\":0}, \\\"appDefinitionId\\\":\\\"14f25924-5664-31b2-9568-f9c5ed98c9b1\\\", \\\"appPageId\\\":\\\"notifications_app\\\", \\\"menuOrder\\\":4, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"5063ee74-6323-4b5c-b612-70ec4a0d075f\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Notifications\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Notifications\\\"}, \\\"\\/my-subscriptions\\\":{\\\"socialHome\\\":false, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"2bef2abe-7abe-43da-889c-53c1500a328c\\\", \\\"appPageId\\\":\\\"My Subscriptions\\\", \\\"menuOrder\\\":2, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\\\", \\\"seoData\\\":{\\\"title\\\":\\\"Góiđăng ký của tôi\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Góiđăng ký của tôi\\\"}}}\", \"group\":\"members\", \"pages\":{\"01d7d6ad-ddb4-4139-81e1-a8c7b581b914\":\"bw36u\", \"5063ee74-6323-4b5c-b612-70ec4a0d075f\":\"v36av\", \"ed807e24-f3ba-4f27-8efb-3ad3a8cec1b9\":\"k9gzs\", \"f8e62ef8-1ce4-4cf1-9ff0-8483ae8dea57\":\"bwvbz\"}, \"roleVariations\":{}}, \"routers-l3eg5akf\":{\"prefix\":\"trangmi-ebt\", \"appDefinitionId\":\"dataBinding\", \"config\":\"{\\\"patterns\\\":{\\\"\\/\\\":{\\\"pageRole\\\":\\\"395b5dbb-d497-4231-896e-d14504393fc9\\\", \\\"title\\\":\\\"Trangmi-ebt\\\", \\\"config\\\":{\\\"collection\\\":\\\"Trangmi-ebt\\\", \\\"pageSize\\\":12, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"lowercase\\\":true, \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"robots\\\":\\\"index\\\"}}}}\", \"group\":\"\", \"pages\":{\"395b5dbb-d497-4231-896e-d14504393fc9\":\"qyyn5\"}, \"roleVariations\":{}}, \"routers-l3eh1hty\":{\"prefix\":\"mc-8bt\", \"appDefinitionId\":\"dataBinding\", \"config\":\"{\\\"patterns\\\":{\\\"\\/{title}\\\":{\\\"pageRole\\\":\\\"afaf43a4-944f-40c5-a9e3-b914e5596344\\\", \\\"title\\\":\\\"{title}\\\", \\\"config\\\":{\\\"collection\\\":\\\"Mc-8bt\\\", \\\"pageSize\\\":1, \\\"lowercase\\\":true, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"description\\\":\\\"{subtitle}\\\", \\\"og:image\\\":\\\"{image}\\\", \\\"keywords\\\":\\\"\\\", \\\"robots\\\":\\\"index\\\"}}, \\\"\\/\\\":{\\\"pageRole\\\":\\\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\\\", \\\"title\\\":\\\"Mc-8bt\\\", \\\"config\\\":{\\\"collection\\\":\\\"Mc-8bt\\\", \\\"pageSize\\\":19, \\\"sort\\\":[{\\\"title\\\":\\\"asc\\\"}], \\\"lowercase\\\":true, \\\"seoV2\\\":true}, \\\"seoMetaTags\\\":{\\\"robots\\\":\\\"index\\\"}}}}\", \"group\":\"\", \"pages\":{\"88f282b1-e4d0-4bc2-a300-71d1a899b7fb\":\"ldw8n\", \"afaf43a4-944f-40c5-a9e3-b914e5596344\":\"h483u\"}, \"roleVariations\":{}}, \"routers-kyr2fk4p1\":{\"prefix\":\"profile\", \"appDefinitionId\":\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\", \"config\":\"{\\\"type\\\":\\\"public\\\", \\\"patterns\\\":{\\\"\\/{userName}\\/profile\\\":{\\\"socialHome\\\":true, \\\"appData\\\":{\\\"numbers\\\":{}, \\\"appDefinitionId\\\":\\\"14dbef06-cc42-5583-32a7-3abd44da4908\\\", \\\"appPageId\\\":\\\"about\\\", \\\"menuOrder\\\":1, \\\"visibleForRoles\\\":[]}, \\\"page\\\":\\\"3213643b-49aa-4081-829d-e69fac6adc5f\\\", \\\"seoData\\\":{\\\"title\\\":\\\"{userName} | Profile\\\", \\\"description\\\":\\\"\\\", \\\"keywords\\\":\\\"\\\", \\\"noIndex\\\":\\\"true\\\"}, \\\"title\\\":\\\"Profile\\\"}}}\", \"group\":\"members\", \"pages\":{\"3213643b-49aa-4081-829d-e69fac6adc5f\":\"u3h11\"}, \"roleVariations\":{}}}}, \"isPremiumDomain\":true, \"disableSiteAssetsCache\":false, \"migratingToOoiWidgetIds\":\"\", \"siteRevisionConfig\":{}, \"registryLibrariesTopology\":[{\"artifactId\":\"editor-elements\", \"namespace\":\"wixui\", \"url\":\"https:\\/\\/static.parastorage.com\\/services\\/editor-elements\\/1.15523.0\"}, {\"artifactId\":\"editor-elements\", \"namespace\":\"dsgnsys\", \"url\":\"https:\\/\\/static.parastorage.com\\/services\\/editor-elements\\/1.15523.0\"}], \"isInSeo\":false, \"language\":\"en\", \"locale\":\"vi-vn\", \"originalLanguage\":\"en\", \"appDefinitionIdToSiteRevision\":{\"14bcded7-0066-7c35-14d7-466cb3f09103\":\"1335\", \"14271d6f-ba62-d045-549b-ab972ae1f70e\":\"25\"}, \"isClientSdkOnSite\":false, \"appDefinitionIdsWithCustomCss\":[], \"isBuilderComponentModel\":false, \"hasUserDomainMedia\":false, \"userDomainMediaPrefixes\":[], \"useViewerAssetsProxy\":false}, \"beckyExperiments\":{\"specs.thunderbolt.dynamicSlots\":true, \"specs.thunderbolt.DatePickerPortal\":true, \"specs.thunderbolt.shouldUseResponsiveImages\":true, \"specs.thunderbolt.useResponsiveImgClassicFixed\":true, \"specs.thunderbolt.DDMenuMigrateCssCarmiMapper\":true, \"specs.thunderbolt.fiveGridLineStudioSkins\":true, \"specs.thunderbolt.calculateCollapsibleTextLineHeightByFont\":true, \"specs.thunderbolt.TextInputAutoFillFix\":true, \"specs.thunderbolt.buttonUdp\":true, \"specs.thunderbolt.one_cell_grid_display_flex\":true, \"specs.thunderbolt.useSvgLoaderFeature\":true, \"specs.thunderbolt.useClassnameInResponsiveAppWidget\":true, \"specs.thunderbolt.isClassNameToRootEnabled\":true, \"specs.thunderbolt.WixFreeSiteBannerDesktop\":true, \"specs.thunderbolt.WixFreeSiteBannerMobile\":true, \"specs.thunderbolt.removeSafariStickyFix\":true, \"specs.thunderbolt.imageEncodingAVIF\":true, \"specs.thunderbolt.updateRichTextSemanticClassNamesOnCorvid\":true, \"specs.thunderbolt.LoginBarEnableLoggingInStateInSSR\":true, \"specs.thunderbolt.DisableDocumentScrollWhenLightBoxOpen\":true, \"specs.thunderbolt.interactionsUseReactionEffectId\":true, \"specs.thunderbolt.allowWebpAvifTransforms\":true, \"specs.thunderbolt.stopResolvingInnerSelectors_VAG\":true, \"specs.thunderbolt.logVsmSiteMapDiff\":true, \"specs.thunderbolt.migrateSdkDataMappers\":true, \"specs.thunderbolt.vsm_css\":true, \"specs.thunderbolt.vsm_interactions_v1\":true, \"specs.thunderbolt.globalVarsRefactor23\":true, \"specs.thunderbolt.resolveSpxWithoutEditorCheck\":true, \"specs.thunderbolt.vsmSiteMap\":true, \"specs.thunderbolt.scopeRepeatedSelectors\":true, \"specs.thunderbolt.logVsmPlatformDiff\":true, \"specs.thunderbolt.FreemiumBannerOdeditor\":true, \"specs.thunderbolt.UseLoginSocialBarCustomMenu\":true, \"specs.thunderbolt.useWowImageInFastGallery\":true, \"specs.thunderbolt.vsmFeaturesModule\":true, \"specs.thunderbolt.builderBoxSizingBorderBox\":true, \"specs.thunderbolt.dom_store\":true, \"specs.thunderbolt.fixRemappedFullNameCompType\":true, \"specs.thunderbolt.namedRanges\":true, \"specs.thunderbolt.useFragmentHrefForTopBottomAnchor\":true, \"specs.thunderbolt.useSvgLoaderFeatureOnBuilderComps\":true, \"specs.thunderbolt.vsmPlatform\":true, \"specs.thunderbolt.fixFirefoxLinkBarIntrinsicSizing\":true, \"specs.thunderbolt.UseNestedLoginSocialBarMenuItems\":true, \"specs.thunderbolt.UseNewLoginBarDropdownMenuAlignment\":true, \"specs.thunderbolt.splitSlotSelectors\":true, \"specs.thunderbolt.motionTimeAnimationsCSS\":true, \"specs.thunderbolt.dynamicPageLinkTarget\":true, \"specs.thunderbolt.builderSvgCssVars\":true, \"specs.thunderbolt.useImageAvifFormatInNativeProGallery\":true, \"specs.thunderbolt.a11yContrast\":true, \"specs.thunderbolt.UseNewLoginSocialBarMemberInitialsAvatar\":true, \"specs.thunderbolt.responsiveContainerRoleGroup\":true, \"specs.thunderbolt.UseNewLoginSocialBarElementStructure\":true, \"specs.thunderbolt.svgResolver_2\":true, \"specs.thunderbolt.sectionA11yProps\":true, \"specs.thunderbolt.logVsmFeaturesModuleDiff\":true, \"specs.thunderbolt.ooiCssSelectorWithSuffix\":true, \"specs.thunderbolt.stringifyHashPresetName_VAG\":true, \"specs.thunderbolt.pinnedTopAuto\":true, \"specs.thunderbolt.EnableCustomCSSVarsForLoginSocialBar\":true, \"specs.thunderbolt.dontApplyDacOverridesOnBoBApps\":true, \"specs.thunderbolt.fixDocumentLinkInPremiumPreview\":true, \"specs.thunderbolt.removeSingleTabCssMapper\":true, \"specs.thunderbolt.resolveManifestInTB\":true, \"specs.thunderbolt.designStates\":true, \"specs.thunderbolt.increaseFocusRing\":true, \"specs.thunderbolt.addIdAsClassName\":true}, \"manifests\":{\"node\":{\"modulesToHashes\":{\"thunderbolt-features\":\"a6091b14.bundle.min\", \"thunderbolt-platform\":\"903d398e.bundle.min\", \"thunderbolt-css\":\"3dbec043.bundle.min\", \"thunderbolt-site-map\":\"cdea51ec.bundle.min\", \"thunderbolt-mobile-app-builder\":\"b99896aa.bundle.min\", \"builder-component-features\":\"2f91e2ed.bundle.min\", \"builder-component-css\":\"a1489312.bundle.min\", \"builder-component-platform\":\"365ffc98.bundle.min\", \"component-manifest-css\":\"ca86d5d8.bundle.min\", \"thunderbolt-css-mappers\":\"13f4efb2.bundle.min\", \"thunderbolt-services-configs\":\"61c9ce6a.bundle.min\"}}, \"web\":{\"modulesToHashes\":{\"thunderbolt-features\":\"ec451244.bundle.min\", \"thunderbolt-platform\":\"913b9f07.bundle.min\", \"thunderbolt-css\":\"e6458616.bundle.min\", \"thunderbolt-site-map\":\"449427af.bundle.min\", \"thunderbolt-mobile-app-builder\":\"442bc048.bundle.min\", \"builder-component-features\":\"c5cbadbe.bundle.min\", \"builder-component-css\":\"560bd3ce.bundle.min\", \"builder-component-platform\":\"77d3594c.bundle.min\", \"component-manifest-css\":\"01f26a34.bundle.min\", \"thunderbolt-css-mappers\":\"2ff8c9c9.bundle.min\", \"thunderbolt-services-configs\":\"425bc0ff.bundle.min\", \"webpack-runtime\":\"e9817151.bundle.min\"}, \"webpackRuntimeBundle\":\"e9817151.bundle.min\"}, \"webWorker\":{\"modulesToHashes\":{\"builder-component-features\":\"6575cf7e.bundle.min\", \"builder-component-css\":\"44e18f75.bundle.min\", \"builder-component-platform\":\"7a508537.bundle.min\", \"component-manifest-css\":\"df130609.bundle.min\", \"thunderbolt-css-mappers\":\"4c9707d1.bundle.min\", \"thunderbolt-services-configs\":\"9dee5841.bundle.min\", \"thunderbolt-features\":\"5b3a6548.bundle.min\", \"thunderbolt-platform\":\"b56648f6.bundle.min\", \"thunderbolt-css\":\"3d33ff21.bundle.min\", \"thunderbolt-site-map\":\"9c7487b9.bundle.min\", \"thunderbolt-mobile-app-builder\":\"05f5deab.bundle.min\"}}}, \"siteAssetsVersions\":{\"viewer-assets-generator\":\"1.0.0\", \"santa-data-fixer\":\"1.5627.0\", \"@wix\\/santa-main-r\":\"1.1643.0\", \"santa-main-r\":\"1.1643.0\", \"@wix\\/blocks-app-descriptor\":\"1.118.0\", \"simple-all-pages\":\"1.0.0\", \"blocks-builder-manifest-generator\":\"1.151.0\", \"@wix\\/santa-data-fixer\":\"1.5627.0\", \"remote-widget-structure-builder\":\"1.251.0\", \"remote-widget-metadata\":\"1.2593.0\", \"santa-site-metadata\":\"1.3492.0\", \"piler-siteassets\":\"1.1048.0\", \"stylable-santa-flatten\":\"2.0.222\", \"@wix\\/piler-siteassets\":\"1.1048.0\"}, \"staticHTMLComponentUrl\":\"https:\\/\\/www-100relab-com.filesusr.com\\/\", \"remoteWidgetStructureBuilderVersion\":\"1.251.0\", \"blocksBuilderManifestGeneratorVersion\":\"1.129.0\"}, \"react18Compatible\":true, \"react18HydrationBlackListWidgets\":[], \"mpaBlacklistWidgets\":[], \"excludeCompsForSSRList\":[\"\"], \"mpaNavigationCompatible\":true, \"mpaIncompatibleWidgetsList\":[], \"mpaExclusionReasons\":[], \"siteCacheable\":true, \"isolatedRenderer\":false, \"siteOwnerId\":\"58745a76-e0c5-4f2f-9bde-555a9724b21d\", \"hasInteractions\":false, \"componentsExternalVersions\":{}} window.viewerModel = JSON.parse(document.getElementById('wix-viewer-model').textContent) [\"location\", \"window\", \"site\", \"seo\", \"user\"] window.usedPlatformApis = JSON.parse(document.getElementById('used-platform-apis-data').textContent) \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"5117\"], {}, function(n){n.O(0, [\"1619\", \"3033\"], function(){return n(n.s=55901)}), n.O()}]); \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"6747\"], {99090(e, t, o){o.d(t, {O:()=>c});let c=(e, t=\"\")=>t.toLowerCase().includes(\"forcereducedmotion\")||!!e?.matchMedia(\"(prefers-reduced-motion: reduce)\").matches}}, function(e){e.O(0, [\"1619\", \"3033\"], function(){return e(e.s=19787)}), e.O()}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/lazyCustomElementWrapper.inline.eefbcea5.bundle.min.js.map \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"6008\"], {68703(e, t, r){r.d(t, {L:()=>i});var a=r(8716), n=r(26778), o=r(49254);let i=(0, a.Og)([], ()=>({definition:n.F, impl:o.J, config:{}, platformConfig:{}}))}, 89973(e, t, r){r.d(t, {h:()=>i});var a=r(65672), n=r(48869);let o=({useBatch:e=!0, publishMethod:t=a.PublishMethods.Auto, endpoint:r, muteBi:n=!1, biStore:o, sessionManager:i, fetch:s, factory:p})=>p({useBatch:e, publishMethod:t, endpoint:r}).setMuted(n).withUoUContext({msid:o.msid}).withNonEssentialContext({visitorId:()=>i.getVisitorId(), siteMemberId:()=>i.getSiteMemberId()}).updateDefaults({vsi:o.viewerSessionId, _av:`thunderbolt-${o.viewerVersion}`, isb:o.is_headless, ...o.is_headless&&{isbr:o.is_headless_reason}}), i={createBaseBiLoggerFactory:o, createBiLoggerFactoryForFedops:e=>{let{biStore:{session_id:t, initialTimestamp:r, initialRequestTimestamp:a, dc:i, microPop:s, is_headless:p, isCached:d, pageData:l, rolloutData:u, caching:c, checkVisibility:m=()=>\"\", viewerVersion:f, requestUrl:I, st:h, isSuccessfulSSR:A, mpaSessionId:_, siteOwnerId:E, uuid:S}, muteBi:g=!1}=e;return o({...e, muteBi:g}).updateDefaults({ts:()=>Date.now()-r, tsn:()=>(function({initialRequestTimestamp:e, adjustForPrerender:t=!1}){if(\"undefined\"==typeof window)return Math.round(performance.now()+(performance.timeOrigin-e));let r=t?(0, n.b)():0;return Math.round(performance.now()-r)})({initialRequestTimestamp:a, adjustForPrerender:!0}), dc:i, microPop:s, caching:c, session_id:t, st:h, url:I||l.pageUrl, ish:p, pn:l.pageNumber, isFirstNavigation:1===l.pageNumber, pv:m, pageId:l.pageId, isServerSide:!1, isSuccessfulSSR:A, is_lightbox:l.isLightbox, is_cached:d, is_sav_rollout:+!!u.siteAssetsVersionsRollout, is_dac_rollout:+!!u.isDACRollout, v:f, mpaSessionId:_, siteOwnerId:E, uuid:S, ...\"undefined\"!=typeof document&&document.referrer&&{document_referrer:document.referrer}, ...\"undefined\"!=typeof navigator&&navigator.language&&{browserLanguage:navigator.language}})}}}, 48869(e, t, r){r.d(t, {b:()=>a});let a=()=>{let e=(()=>{if(\"undefined\"==typeof performance||\"function\"!=typeof performance.getEntriesByType)return;let e=performance.getEntriesByType(\"navigation\")[0];if(e&&e.responseStart>0&&e.responseStart d});var a=r(41394), n=r(41789), o=r(683), i=r(4291), s=r(6355), p=r(76526);let d=({biLoggerFactory:e, customParams:t={}, phasesConfig:r=\"SEND_ON_FINISH\", appName:d=\"thunderbolt\", presetType:l=a.u.BOLT, paramsOverrides:u={}, factory:c, muteThunderboltEvents:m=!1, experiments:f={}, monitoringData:I})=>{let h, A, _, E, S, g, N, R, b=c(d, {presetType:l, phasesConfig:r, isPersistent:!0, isServerSide:!1, customParams:t, biLoggerFactory:e, paramsOverrides:u, enableSampleRateForAppNames:(0, p.isExperimentOpen)(f, \"specs.thunderbolt.fedops_enableSampleRateForAppNames\")??(\"undefined\"!=typeof window&&(0, p.isExperimentOpen)(f, \"specs.thunderbolt.fedops_enableSampleRateForAppNames\"))}), {interactionStarted:v, interactionEnded:O, appLoadingPhaseStart:w, appLoadingPhaseFinish:T, appLoadStarted:y, appLoaded:V}=b, D=(0, p.isExperimentOpen)(f, \"specs.thunderbolt.fedopsMuteErrors\"), C=(0, p.isExperimentOpen)(f, \"specs.thunderbolt.panoramaInSsr\"), L=(0, p.isExperimentOpen)(f, \"panoramaPlatformTransactionsSampling\"), F=\"undefined\"==typeof window, P=e=>{let t;return t=e, !(L&&m&&t.startsWith(\"platform_\"))&&(C||e.startsWith(\"platform_\")||!F)}, B=e=>e?.evid&&26===parseInt(e.evid, 10), G=(h=(0, s.n)(), I?.viewerSessionId&&h.setSessionId(I.viewerSessionId), A=I?.metaSiteId??\"\", _=I?.dc??\"\", E=!!I?.isHeadless, S=!!I?.isCached, g=!!I?.rolloutData?.isTBRollout, N=!!I?.rolloutData?.isDACRollout, R=!!I?.rolloutData?.siteAssetsVersionsRollout, (0, o.V)({baseParams:{platform:i.OD.Viewer, msid:A, fullArtifactId:\"com.wixpress.html-client.wix-thunderbolt\", artifactVersion:I?.artifactVersion, componentId:d}, pluginParams:{useBatch:!0}, data:{dataCenter:_, isHeadless:E, isCached:S, isRollout:g, isDacRollout:N, isSavRollout:R, isSsr:!1, presetType:l, customParams:t}, reporterOptions:F?{fetchFn:fetch}:{}}).withGlobalConfig(h).client()), x=e=>{G&&(C||!F)&&(e?G.reportLoadStart():G.reportLoadFinish())}, M=(e, t, r)=>{if(!G)return;let a=e.replaceAll(\" \", \"_\");t?G.transaction(a).start(r):G.transaction(a).finish(r)}, $=(e, t, r, o)=>{if(n.iy.has(d))return!0;if(((e, t, r)=>{let o;return B(r)?D:(o=r?.siteAssetsModule??\"\", !(l!==a.u.BOLT||n.EQ.has(e)||t&&[\"thunderbolt-css\", \"thunderbolt-features\", \"thunderbolt-platform\"].includes(o)))})(e, t, o))return!1;if(o?.siteAssetsModule)return!0;let i=!!r?.appId&&!n.S_.has(r.appId), s=n.S2.has(e), p=n.wV.has(e);return s||i||!p&&!m};return b.interactionStarted=(e, t)=>{if(B(t?.paramsOverrides)?((e={})=>{if(!G)return;let{errorInfo:t, errorType:r}=e, a=Error(t);G?.errorMonitor().reportError(a, {errorName:r, environment:\"Viewer\"})})(t?.paramsOverrides):P(e)&&M(e, !0), $(e, !0, void 0, t?.paramsOverrides))return v.call(b, e, t);try{performance.mark(`${e} started`)}catch(e){}return{timeoutId:0}}, b.interactionEnded=(e, t)=>{if(P(e)&&M(e, !1), $(e, !0, void 0, t?.paramsOverrides))O.call(b, e, t);else try{performance.mark(`${e} ended`)}catch(e){}}, b.appLoadingPhaseStart=(e, t)=>{if(M(e, !0, {appDefId:t?.appId, componentId:t?.widgetId}), $(e, !1, t))w.call(b, e, t);else try{performance.mark(`${e} started`)}catch(e){}}, b.appLoadingPhaseFinish=(e, t, r)=>{if(M(e, !1, {appDefId:t?.appId, componentId:t?.widgetId}), $(e, !1, t))T.call(b, e, t, r);else try{performance.mark(`${e} finished`)}catch(e){}}, b.appLoadStarted=e=>{x(!0), y.call(b, e)}, b.appLoaded=e=>{x(!1), V.call(b, e)}, b}}, 81855(e, t, r){r.d(t, {c:()=>a});let a=e=>{let t=\"thunderbolt-commons\";return{reportAsyncWithCustomKey:(r, a, n)=>e.reportAsyncWithCustomKey(r, t, a, n), runAsyncAndReport:(r, a)=>e.runAsyncAndReport(r, t, a), runAndReport:(r, a)=>e.runAndReport(r, t, a), reportError:r=>{e.captureError(r, {tags:{feature:t, clientMetricsReporterError:!0}})}, meter:(t, r)=>{e.meter(t, r)}, histogram:(e, t)=>{}}}}, 27256(e, t, r){r.r(t), r.d(t, {createBiReporter:()=>i, site:()=>s});var a=r(73388), n=r(60990);let o=(...e)=>console.log(\"[TB] \", ...e);function i(e=o, t=o, r=()=>{}, a=o, n=o){return{reportBI:e, sendBeat:t, setDynamicSessionData:r, reportPageNavigation:a, reportPageNavigationDone:n}}let s=({biReporter:e, wixBiSession:t, viewerModel:r})=>o=>{o(a.O$).toConstantValue(t), o(a.u6).toConstantValue(e), o(a.lR).toConstantValue((0, n.f)(r))}}, 94756(e, t, r){r.d(t, {lF:()=>o, mY:()=>s, w4:()=>i});var a, n, o=((a={})[a.START=1]=\"START\", a[a.VISIBLE=2]=\"VISIBLE\", a[a.PARTIALLY_VISIBLE=12]=\"PARTIALLY_VISIBLE\", a[a.PAGE_FINISH=33]=\"PAGE_FINISH\", a[a.FIRST_CDN_RESPONSE=4]=\"FIRST_CDN_RESPONSE\", a[a.TBD=-1]=\"TBD\", a[a.PAGE_NAVIGATION=101]=\"PAGE_NAVIGATION\", a[a.PAGE_NAVIGATION_DONE=103]=\"PAGE_NAVIGATION_DONE\", a), i=((n={})[n.NAVIGATION=1]=\"NAVIGATION\", n[n.DYNAMIC_REDIRECT=2]=\"DYNAMIC_REDIRECT\", n[n.INNER_ROUTE=3]=\"INNER_ROUTE\", n[n.NAVIGATION_ERROR=4]=\"NAVIGATION_ERROR\", n[n.CANCELED=5]=\"CANCELED\", n);let s={1:\"page-navigation\", 2:\"page-navigation-redirect\", 3:\"page-navigation-inner-route\", 4:\"navigation-error\", 5:\"navigation-canceled\"}}, 73388(e, t, r){r.d(t, {O$:()=>n, lR:()=>o, u6:()=>a});let a=Symbol.for(\"BI\"), n=Symbol.for(\"WixBiSessionSymbol\"), o=Symbol.for(\"appName\")}}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/bi-common.inline.17f83560.bundle.min.js.map \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"8426\"], {7146(e, r, t){t.r(r), t.d(r, {platformWorkerPromise:()=>m});let s=window.viewerModel, a=s?.siteFeatures||[], o=s?.siteFeaturesConfigs?.platform, p=s?.siteAssets?.clientTopology, l=s?.site?.externalBaseUrl, i=window.usedPlatformApis, n=\"undefined\"!=typeof Worker&&a.includes(\"platform\")&&!!o, c=async()=>{let e;if(!o?.clientWorkerUrl||!o?.appsScripts||!o?.bootstrapData)return void console.warn(\"[create-worker] Platform config incomplete (missing clientWorkerUrl, appsScripts, or bootstrapData), skipping worker creation\");let r=\"platform_create-worker started\";performance.mark(r);let{clientWorkerUrl:t, appsScripts:s, bootstrapData:a, sdksStaticPaths:n}=o, {appsSpecData:c={}, appDefIdToIsMigratedToGetPlatformApi:m={}, forceEmptySdks:d}=a||{}, f=new Worker(t.startsWith(\"http://localhost:\")||document.baseURI!==location.href?(e=new Blob([`importScripts('${t}');`], {type:\"application/javascript\"}), URL.createObjectURL(e)):t.replace(p?.fileRepoUrl||\"\", `${l}/_partials`)), k=s?.urls||{}, u=Object.keys(k).filter(e=>!c[e]?.isModuleFederated).reduce((e, r)=>(e[r]=k[r], e), {});n&&n.mainSdks&&n.nonMainSdks&&(Object.values(m).every(e=>e)||d?f.postMessage({type:\"preloadNamespaces\", namespaces:i}):f.postMessage({type:\"preloadAllNamespaces\", sdksStaticPaths:n})), f.postMessage({type:\"platformScriptsToPreload\", appScriptsUrls:u});let w=\"platform_create-worker ended\";return performance.mark(w), performance.measure(\"Create Platform Web Worker\", r, w), f}, m=n?c():Promise.resolve()}}, function(e){e(e.s=7146)}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/createPlatformWorker.inline.a9bb4739.bundle.min.js.map \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"1625\"], {97534(){var e;let n, a, t;e=window, n=new Set, a=[], t=e=>{let a=[];n.forEach(n=>{e.canHandleEvent(n)&&a.push(n)}), a.forEach(a=>{n.delete(a), e.handleEvent(a)})}, e.addEventListener(\"message\", e=>{let d={source:e.source, data:e.data, origin:e.origin}, s=a.find(e=>e.canHandleEvent(d));s?(t(s), s.handleEvent(d)):n.add(d)}), e._addWindowMessageHandler=e=>{a.push(e), t(e)}}}, function(e){e(e.s=97534)}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/windowMessageRegister.inline.5cd174ec.bundle.min.js.map window.clientSideRender = false; \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"9114\"], {80974(e, i, n){let r, t, s, a;n.d(i, {K:()=>u});var o=n(94756);let c=\"unknown\", d=e=>{let i, n, r=(i=e.cache, n=e.varnish, `${i||c}, ${n||c}`);return{caching:r, isCached:r.includes(\"hit\"), ...e.microPop?{microPop:e.microPop}:{}}}, l={WixSite:1, UGC:2, Template:3}, u=(r=(()=>{let{fedops:e, viewerModel:{siteFeaturesConfigs:i, requestUrl:n, site:r, fleetConfig:t, commonConfig:s, interactionSampleRatio:a}, clientSideRender:o, santaRenderingError:u}=window, p=(({requestUrl:e, interactionSampleRatio:i})=>{let n=new URL(e).searchParams;return n.has(\"sampleEvents\")?\"true\"===n.get(\"sampleEvents\"):Math.random() {let{userAgent:i}=e.navigator;return/instagram.+google\\/google/i.test(i)?\"\":/bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\\/4\\.0$|^\\s*$/i.test(i)?\"ua\":\"\"})(window)||(()=>{try{if(window.self===window.top)return\"\"}catch{}return\"iframe\"})()||(()=>{if(!Function.prototype.bind)return\"bind\";let{document:e, navigator:i}=window;if(!e||!i)return\"document\";let{webdriver:n, userAgent:r, plugins:t, languages:s}=i;if(n)return\"webdriver\";if(!t||Array.isArray(t))return\"plugins\";if(Object.getOwnPropertyDescriptor(t, \"0\")?.writable)return\"plugins-extra\";if(!r)return\"userAgent\";if(r.indexOf(\"Snapchat\")>0&&e.hidden)return\"Snapchat\";if(!s||0===s.length||!Object.isFrozen(s))return\"languages\";try{throw Error()}catch(e){if(e instanceof Error){let{stack:i}=e;if(i&&/ (\\(internal\\/)|(\\(?file:\\/)/.test(i))return\"stack\"}}return\"\"})()||(({seo:e})=>e?.isInSEO?\"seo\":\"\")(i);return{suppressbi:n.includes(\"suppressbi=true\"), initialTimestamp:window.initialTimestamps.initialTimestamp, initialRequestTimestamp:window.initialTimestamps.initialRequestTimestamp, viewerSessionId:e.vsi, viewerName:r.appNameForBiEvents, siteRevision:String(r.siteRevision), msId:r.metaSiteId, is_rollout:0===t.code||1===t.code?t.code:null, is_platform_loaded:0, requestUrl:encodeURIComponent(n), sessionId:String(r.sessionId), btype:m, isjp:!!m, dc:r.dc, siteCacheRevision:\"__siteCacheRevision__\", checkVisibility:(()=>{let e=!0;function i(){e=e&&!0!==document.hidden}return document.addEventListener(\"visibilitychange\", i, {passive:!0}), i(), ()=>(i(), e)})(), ...((e, i)=>{let n, r=(e=>{let i;try{i=e()}catch{i=[]}let n=i.reduce((e, i)=>(e[i.name]=i.description, e), {});return{cache:n.cache, varnish:n.varnish, microPop:n.dc}})(i);if(r.cache||r.varnish)return d({cache:r.cache||c, varnish:r.varnish||c, microPop:r.microPop});let t=(n=e.match(/ssr-caching=\"?cache[, #]\\s*desc=([\\w-]+)(?:[, #]\\s*varnish=(\\w+))?(?:[, #]\\s*dc[, #]\\s*desc=([\\w-]+))?(?:\"|;|$)/))&&n.length?{cache:n[1], varnish:n[2]||c, microPop:n[3]}:null;return t?d(t):{caching:c, isCached:!1}})(document.cookie, ()=>[...performance.getEntriesByType(\"navigation\")[0].serverTiming||[]]), isMesh:1, st:l[r.siteType]||0, commonConfig:s, muteThunderboltEvents:p, isServerSide:+!o, isSuccessfulSSR:!o, fallbackReason:u?.errorInfo, mpaSessionId:e.mpaSessionId}})(), t={}, s=1, {sendBeat:a=(e, i)=>{if(i&&performance.mark){let n=`${i} (beat ${e})`;performance.mark(n)}}, reportBI:function(e, i){let n, r;n=i?`${e} - ${i}`:e, r=\"end\"===i?`${e} - start`:null, performance.mark(n), performance.measure&&r&&performance.measure(`\\u2B50${e}`, r, n)}, wixBiSession:r, sendBeacon:e=>{let i=!1;if(!/\\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent))try{i=navigator.sendBeacon(e)}catch{}i||(new Image().src=e)}, setDynamicSessionData:({visitorId:e, siteMemberId:i, bsi:n})=>{t.visitorId=e||t.visitorId, t.siteMemberId=i||t.siteMemberId, t.bsi=n||t.bsi}, reportPageNavigation:function(e){s+=1, a(o.lF.PAGE_NAVIGATION, \"page navigation start\", {pageId:e, pageNumber:s})}, reportPageNavigationDone:function(e, i){a(o.lF.PAGE_NAVIGATION_DONE, \"page navigation complete\", {pageId:e, pageNumber:s, navigationType:i}), (i===o.w4.DYNAMIC_REDIRECT||i===o.w4.NAVIGATION_ERROR||i===o.w4.CANCELED)&&(s-=1)}});window.bi=u, window.bi.wixBiSession.isServerSide=+!window.clientSideRender, window.bi.wixBiSession.isSuccessfulSSR=!window.clientSideRender, window.clientSideRender&&(window.bi.wixBiSession.fallbackReason=window.santaRenderingError?.errorInfo), u.sendBeat(1, \"Init\")}}, function(e){e.O(0, [\"6008\"], function(){return e(e.s=80974)}), e.O()}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/bi.inline.ae93e7f6.bundle.min.js.map \"use strict\";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[\"1698\"], {40250(e, i, n){var r=n(94756);n(80974).K.sendBeat(r.lF.PARTIALLY_VISIBLE, \"Partially visible\", {pageId:window.firstPageId})}, 80974(e, i, n){let r, t, s, a;n.d(i, {K:()=>p});var o=n(94756);let c=\"unknown\", d=e=>{let i, n, r=(i=e.cache, n=e.varnish, `${i||c}, ${n||c}`);return{caching:r, isCached:r.includes(\"hit\"), ...e.microPop?{microPop:e.microPop}:{}}}, l={WixSite:1, UGC:2, Template:3}, p=(r=(()=>{let{fedops:e, viewerModel:{siteFeaturesConfigs:i, requestUrl:n, site:r, fleetConfig:t, commonConfig:s, interactionSampleRatio:a}, clientSideRender:o, santaRenderingError:p}=window, u=(({requestUrl:e, interactionSampleRatio:i})=>{let n=new URL(e).searchParams;return n.has(\"sampleEvents\")?\"true\"===n.get(\"sampleEvents\"):Math.random() {let{userAgent:i}=e.navigator;return/instagram.+google\\/google/i.test(i)?\"\":/bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\\/4\\.0$|^\\s*$/i.test(i)?\"ua\":\"\"})(window)||(()=>{try{if(window.self===window.top)return\"\"}catch{}return\"iframe\"})()||(()=>{if(!Function.prototype.bind)return\"bind\";let{document:e, navigator:i}=window;if(!e||!i)return\"document\";let{webdriver:n, userAgent:r, plugins:t, languages:s}=i;if(n)return\"webdriver\";if(!t||Array.isArray(t))return\"plugins\";if(Object.getOwnPropertyDescriptor(t, \"0\")?.writable)return\"plugins-extra\";if(!r)return\"userAgent\";if(r.indexOf(\"Snapchat\")>0&&e.hidden)return\"Snapchat\";if(!s||0===s.length||!Object.isFrozen(s))return\"languages\";try{throw Error()}catch(e){if(e instanceof Error){let{stack:i}=e;if(i&&/ (\\(internal\\/)|(\\(?file:\\/)/.test(i))return\"stack\"}}return\"\"})()||(({seo:e})=>e?.isInSEO?\"seo\":\"\")(i);return{suppressbi:n.includes(\"suppressbi=true\"), initialTimestamp:window.initialTimestamps.initialTimestamp, initialRequestTimestamp:window.initialTimestamps.initialRequestTimestamp, viewerSessionId:e.vsi, viewerName:r.appNameForBiEvents, siteRevision:String(r.siteRevision), msId:r.metaSiteId, is_rollout:0===t.code||1===t.code?t.code:null, is_platform_loaded:0, requestUrl:encodeURIComponent(n), sessionId:String(r.sessionId), btype:m, isjp:!!m, dc:r.dc, siteCacheRevision:\"__siteCacheRevision__\", checkVisibility:(()=>{let e=!0;function i(){e=e&&!0!==document.hidden}return document.addEventListener(\"visibilitychange\", i, {passive:!0}), i(), ()=>(i(), e)})(), ...((e, i)=>{let n, r=(e=>{let i;try{i=e()}catch{i=[]}let n=i.reduce((e, i)=>(e[i.name]=i.description, e), {});return{cache:n.cache, varnish:n.varnish, microPop:n.dc}})(i);if(r.cache||r.varnish)return d({cache:r.cache||c, varnish:r.varnish||c, microPop:r.microPop});let t=(n=e.match(/ssr-caching=\"?cache[, #]\\s*desc=([\\w-]+)(?:[, #]\\s*varnish=(\\w+))?(?:[, #]\\s*dc[, #]\\s*desc=([\\w-]+))?(?:\"|;|$)/))&&n.length?{cache:n[1], varnish:n[2]||c, microPop:n[3]}:null;return t?d(t):{caching:c, isCached:!1}})(document.cookie, ()=>[...performance.getEntriesByType(\"navigation\")[0].serverTiming||[]]), isMesh:1, st:l[r.siteType]||0, commonConfig:s, muteThunderboltEvents:u, isServerSide:+!o, isSuccessfulSSR:!o, fallbackReason:p?.errorInfo, mpaSessionId:e.mpaSessionId}})(), t={}, s=1, {sendBeat:a=(e, i)=>{if(i&&performance.mark){let n=`${i} (beat ${e})`;performance.mark(n)}}, reportBI:function(e, i){let n, r;n=i?`${e} - ${i}`:e, r=\"end\"===i?`${e} - start`:null, performance.mark(n), performance.measure&&r&&performance.measure(`\\u2B50${e}`, r, n)}, wixBiSession:r, sendBeacon:e=>{let i=!1;if(!/\\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent))try{i=navigator.sendBeacon(e)}catch{}i||(new Image().src=e)}, setDynamicSessionData:({visitorId:e, siteMemberId:i, bsi:n})=>{t.visitorId=e||t.visitorId, t.siteMemberId=i||t.siteMemberId, t.bsi=n||t.bsi}, reportPageNavigation:function(e){s+=1, a(o.lF.PAGE_NAVIGATION, \"page navigation start\", {pageId:e, pageNumber:s})}, reportPageNavigationDone:function(e, i){a(o.lF.PAGE_NAVIGATION_DONE, \"page navigation complete\", {pageId:e, pageNumber:s, navigationType:i}), (i===o.w4.DYNAMIC_REDIRECT||i===o.w4.NAVIGATION_ERROR||i===o.w4.CANCELED)&&(s-=1)}});window.bi=p, window.bi.wixBiSession.isServerSide=+!window.clientSideRender, window.bi.wixBiSession.isSuccessfulSSR=!window.clientSideRender, window.clientSideRender&&(window.bi.wixBiSession.fallbackReason=window.santaRenderingError?.errorInfo), p.sendBeat(1, \"Init\")}}, function(e){e.O(0, [\"6008\"], function(){return e(e.s=40250)}), e.O()}]); //# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/sendBeat12.inline.995b241c.bundle.min.js.map window.firstPageId = 'hwkr6' if (window.requestCloseWelcomeScreen) { window.requestCloseWelcomeScreen() } if (!window.__browser_deprecation__) { window.fedops.phaseStarted('partially_visible', {paramsOverrides: { pageId: firstPageId, isSuccessfulSSR: !clientSideRender }}) } const wixAdsOffsetHeight = document.querySelector(':is(.WIX_ADS, #WIX_ADS)')?.offsetHeight || 0; const header = document.getElementsByTagName('header')[0]; let headerOffsetHeight = 0; if (header) { const headerPosition = window.getComputedStyle(header).getPropertyValue('position').toLowerCase(); const isHeaderStickyOrFixed = headerPosition === 'sticky' || headerPosition === 'fixed'; headerOffsetHeight = isHeaderStickyOrFixed header.offsetHeight : 0; } document.documentElement.style.scrollPaddingTop = `${wixAdsOffsetHeight + headerOffsetHeight}px`; {\"platform\":{\"ssrPropsUpdates\":[{\"comp-kyr2fs4i\":{\"items\":[{\"isVisible\":true, \"isVisibleMobile\":true, \"items\":[], \"label\":\"Profile\", \"link\":{\"href\":\"https:\\/\\/www.100relab.com\\/profile\\/undefined\\/profile\", \"target\":\"_self\", \"type\":\"DynamicPageLink\"}}, {\"isVisible\":true, \"isVisibleMobile\":true, \"items\":[], \"label\":\"Góiđăng ký của tôi\", \"link\":{\"href\":\"https:\\/\\/www.100relab.com\\/account\\/my-subscriptions\", \"target\":\"_self\", \"type\":\"DynamicPageLink\"}}, {\"isVisible\":true, \"isVisibleMobile\":true, \"items\":[], \"label\":\"My Account\", \"link\":{\"href\":\"https:\\/\\/www.100relab.com\\/account\\/my-account\", \"target\":\"_self\", \"type\":\"DynamicPageLink\"}}, {\"isVisible\":true, \"isVisibleMobile\":true, \"items\":[], \"label\":\"Settings\", \"link\":{\"href\":\"https:\\/\\/www.100relab.com\\/account\\/settings\", \"target\":\"_self\", \"type\":\"DynamicPageLink\"}}, {\"isVisible\":true, \"isVisibleMobile\":true, \"items\":[], \"label\":\"Notifications\", \"link\":{\"href\":\"https:\\/\\/www.100relab.com\\/account\\/notifications\", \"target\":\"_self\", \"type\":\"DynamicPageLink\"}}]}}], \"ssrStyleUpdates\":[], \"ssrStructureUpdates\":[]}, \"pages\":{\"compIdToTypeMap\":{\"masterPage\":\"MasterPage\", \"BACKGROUND_GROUP\":\"BackgroundGroup\", \"SCROLL_TO_TOP\":\"Anchor\", \"SCROLL_TO_BOTTOM\":\"Anchor\", \"SKIP_TO_CONTENT_BTN\":\"SkipToContentButton\", \"SITE_HEADER\":\"HeaderContainer\", \"comp-knzya86i\":\"StripColumnsContainer\", \"comp-knzya88p\":\"Column\", \"comp-l35m69wm\":\"WPhoto\", \"comp-jrudwh47\":\"WRichText\", \"comp-knzyakwo\":\"Column\", \"comp-jrue0rpx\":\"DropDownMenu\", \"PAGES_CONTAINER\":\"PagesContainer\", \"SITE_PAGES\":\"PageGroup\", \"soapAfterPagesContainer\":\"MeshGroup\", \"CONTROLLER_COMP_CUSTOM_ID\":\"AppController\", \"SOSP_CONTAINER_CUSTOM_ID\":\"Container\", \"comp-kyr2fme3\":\"tpaWidgetNative\", \"comp-kyr2fs4i\":\"DropDownMenu\", \"SITE_FOOTER\":\"FooterContainer\", \"comp-jruhwlv6\":\"StripColumnsContainer\", \"comp-jruhwlwz\":\"Column\", \"comp-jrum2pny\":\"WRichText\", \"comp-jrul8oi1\":\"WRichText\", \"comp-jrum1orj\":\"Column\", \"comp-jrum4vie\":\"WRichText\", \"comp-jrum4vii\":\"WRichText\", \"comp-jrum1uyy\":\"Column\", \"comp-jrum5k7a\":\"WRichText\", \"comp-jrum5k8r\":\"WRichText\", \"hwkr6\":\"Page\", \"pageBackground_hwkr6\":\"PageBackground\", \"Containerhwkr6\":\"Group\", \"comp-ltjka25n\":\"ClassicSection\", \"comp-l3444xic\":\"StripColumnsContainer\", \"comp-l3444xie2\":\"Column\", \"comp-l3444xig2\":\"WRichText\", \"comp-l3444xii\":\"WRichText\", \"comp-ltjka25o\":\"ClassicSection\", \"comp-l3444xiq1\":\"StripColumnsContainer\", \"comp-l3444xis\":\"Column\", \"comp-l3444xit2\":\"WRichText\", \"comp-l3444xiv1\":\"Repeater\", \"comp-l3444xix1\":\"MediaContainer\", \"comp-l3444xj1\":\"WRichText\", \"comp-l3444xj33\":\"WRichText\", \"comp-l3615r7a\":\"WRichText\", \"comp-l3615r9s\":\"Repeater\", \"comp-l3615rcm1\":\"MediaContainer\", \"comp-l3615rda1\":\"WRichText\", \"comp-l3615rde2\":\"WRichText\", \"comp-ltjka25o1\":\"ClassicSection\", \"comp-l363b95u\":\"WRichText\", \"comp-l363b9b7\":\"Repeater\", \"comp-l363b9d4\":\"MediaContainer\", \"comp-l363b9da\":\"WRichText\", \"comp-l363b9de\":\"WRichText\", \"comp-ltjka25o2\":\"ClassicSection\", \"comp-l366i7fr\":\"WRichText\", \"comp-l366i7ub\":\"Repeater\", \"comp-l366i81u2\":\"MediaContainer\", \"comp-l366i81x\":\"WRichText\", \"comp-l366i81y2\":\"WRichText\", \"comp-l364whrc\":\"WRichText\", \"comp-ltjka25o3\":\"ClassicSection\", \"comp-l364wi9k\":\"Repeater\", \"comp-l364wiex1\":\"MediaContainer\", \"comp-l364wif5\":\"WRichText\", \"comp-l364wif9\":\"WRichText\", \"comp-l3650x1x\":\"WRichText\", \"comp-l3650xk4\":\"Repeater\", \"comp-l3650xpj1\":\"MediaContainer\", \"comp-l3650xpu1\":\"WRichText\", \"comp-l3650xpz\":\"WRichText\", \"comp-l3i9r714\":\"Container\", \"DYNAMIC_STRUCTURE_CONTAINER\":\"DynamicStructureContainer\", \"site-root\":\"DivWithChildren\", \"main_MF\":\"DivWithChildren\", \"hwkr6_wrapper\":\"PageMountUnmount\", \"hwkr6_wrapper_background\":\"PageMountUnmount\"}}, \"appsWarmupData\":{\"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9\":{\"initialData\":{\"counters\":{}, \"roles\":{}}}}, \"ooi\":{\"failedInSsr\":{}}, \"builderComponentsWarmupData\":{}}",
        "year": 2023,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-90",
        "title": "Typical Situations and Solutions in Distribution Grids with High Penetration of Rooftop Solar in Viet Nam",
        "authors": "DN Huu, MH Pham, ND Tuyen, ND Toan, DT Nga, LT Thoa, L Van Hoang",
        "venue": "2023 Asia Meeting on Environment and Electrical Engineering (EEE-AM), 01-06",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:ns9cj8rnVeAC",
        "citations": 0
    },
    {
        "id": "pub-91",
        "title": "OPTIMAL SIZING OF A BATTERY ENERGY STORAGE SYSTEM USING PARTICLE SWARM OPTIMIZATION FOR MICROGRID",
        "authors": "ND Tuyen, TD Bach, VQ Anh, LTM Lien",
        "venue": "Trường Đại học Công nghiệp Hà Nội",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:YFjsv_pBGBYC",
        "citations": 0
    },
    {
        "id": "pub-92",
        "title": "AN OPTIMIZED FUZZY LOGIC-BASED ENERGY MANAGEMENT STRATEGY FOR RENEWABLE ENERGY MICROGRID WITH HYDROGEN STORAGE SYSTEM",
        "authors": "ND Tuyen, P Van Long",
        "venue": "Trường Đại học Công nghiệp Hà Nội",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:WF5omc3nYNoC",
        "citations": 0
    },
    {
        "id": "pub-93",
        "title": "Reliable islanding detection and subsequent actions to remain continuous power supply",
        "authors": "ND Tuyen",
        "venue": "(No Title)",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:k_IJM867U9cC",
        "citations": 0
    },
    {
        "id": "pub-94",
        "title": "Technical Analysis of Biomass Bamboo for Generating Electrical Energy Using APL Power Pallet",
        "authors": "KNAKA Shah, MYA Hamid, MZ Mohd, JMR Yusop, NA Fadil, MF Hasan, ...",
        "venue": "Academic Research Publication",
        "year": 2023,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:Zph67rFs4hoC",
        "citations": 0
    },
    {
        "id": "pub-95",
        "title": "A comprehensive review of cybersecurity in inverter-based smart power system amid the boom of renewable energy",
        "authors": "ND Tuyen, NS Quan, VB Linh, V Van Tuyen, G Fujita",
        "venue": "Ieee Access 10, 35846-35875",
        "year": 2022,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:abG-DnoFyZgC",
        "citations": 156
    },
    {
        "id": "pub-96",
        "title": "A mixed-integer programming approach for unit commitment in micro-grid with incentive-based demand response and battery energy storage system",
        "authors": "T Nguyen-Duc, L Hoang-Tuan, H Ta-Xuan, L Do-Van, H Takano",
        "venue": "Energies 15 (19), 7192",
        "year": 2022,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:EUQCXRtRnyEC",
        "citations": 48
    },
    {
        "id": "pub-97",
        "title": "Photovoltaic array reconfiguration under partial shading conditions based on short-circuit current estimated by convolutional neural network",
        "authors": "T Nguyen-Duc, T Le-Viet, D Nguyen-Dang, T Dao-Quang, M Bui-Quang",
        "venue": "Energies 15 (17), 6341",
        "year": 2022,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:YsMSGLbcyi4C",
        "citations": 40
    },
    {
        "id": "pub-98",
        "title": "Impact of renewable energy integration on a novel method for pricing incentive payments of incentive‐based demand response program",
        "authors": "T Nguyen Duc, S Tran Thanh, L Do Van, N Tran Quoc, H Takano",
        "venue": "IET Generation, Transmission & Distribution 16 (8), 1648-1667",
        "year": 2022,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:pyW8ca7W8N0C",
        "citations": 17
    },
    {
        "id": "pub-99",
        "title": "Continuous reconfiguration framework for photovoltaic array under variable partial shading conditions: Heuristic-based algorithms with optimizing switching operation",
        "authors": "T Nguyen-Duc, D Nguyen-Dang, T Le-Viet, G Fujita",
        "venue": "Energies 15 (18), 6821",
        "year": 2022,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:1sJd4Hv_s6UC",
        "citations": 9
    },
    {
        "id": "pub-100",
        "title": "Deterministic and probabilistic wind speed forecasting employing a hybrid deep learning model and quantile regression",
        "authors": "TN Trong, G Nguyen-Hoang-Minh, H Do-Dinh, G Pham-Thi-Huong, ...",
        "venue": "SEATUC journal of science and engineering 3 (1), 1-8",
        "year": 2022,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:cFHS6HbyZ2cC",
        "citations": 6
    },
    {
        "id": "pub-101",
        "title": "Fabrication of flexible multilayer transparent electrode based on silver nanowire, graphene oxide, and poly (3, 4-ethylenedioxythiophene): Polystyrene sulfonate",
        "authors": "TTH Nguyen, MH Nguyen, MT Khong, TKD Nguyen, TD Doan, NH Thi, ...",
        "venue": "Vietnam Journal of Science and Technology 60 (6), 1067-1077",
        "year": 2022,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:TQgYirikUcIC",
        "citations": 2
    },
    {
        "id": "pub-102",
        "title": "Management of Distributed Energy Resources to Support Balancing Operations of Power Supply-Demand in Power Grids",
        "authors": "T Yamazaki, H Takano, H Asano, T Nguyen-Duc",
        "venue": "Grand Renewable Energy proceedings GRE2022, 56",
        "year": 2022,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:_kc_bZDykSQC",
        "citations": 1
    },
    {
        "id": "pub-103",
        "title": "Pricing Method for Incentive Payment Demand Response Program Considers Cost Function of Renewable Energy Source",
        "authors": "Nguyen Duc Tuyen, Tran Thanh Son*, Do Van Long, Tran Quoc Ngu, Hirotaka Takano",
        "venue": "IET Transaction on Transmission and Distribution, 18 Jan 2022, Vol.xx, No.xx, pp.xx-xx, DOI: (In Press)",
        "year": 2022,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "https://doi.org/10.1049/gtd2.12391",
        "url": "https://doi.org/10.1049/gtd2.12391",
        "citations": 0
    },
    {
        "id": "pub-104",
        "title": "Le-Viet T",
        "authors": "Nguyen-Duc T",
        "venue": "Nguyen-Dang D, Dao-Quang T, Bui-Quang M. Photovoltaic Array Reconfiguration under Partial Shading Conditions Based on Short-Circuit Current Estimated by Convolutional Neural Network. Energies. 2022; 15(17):6341",
        "year": 2022,
        "category": "international-journal",
        "quartile": "",
        "doi": "https://doi.org/10.3390/en15176341",
        "url": "https://doi.org/10.3390/en15176341",
        "citations": 0
    },
    {
        "id": "pub-105",
        "title": "Nguyen-Dang D",
        "authors": "Nguyen-Duc T",
        "venue": "Le-Viet T, Fujita G. Continuous Reconfiguration Framework for Photovoltaic Array under Variable Partial Shading Conditions: Heuristic-Based Algorithms with Optimizing Switching Operation. Energies. 2022; 15(18):6821",
        "year": 2022,
        "category": "international-journal",
        "quartile": "",
        "doi": "https://doi.org/10.3390/en15186821",
        "url": "https://doi.org/10.3390/en15186821",
        "citations": 0
    },
    {
        "id": "pub-106",
        "title": "T",
        "authors": "Nguyen-Duc",
        "venue": "Hoang-Tuan, L., Ta-Xuan, H., Do-Van, L., & Takano, H. (2022). A Mixed-Integer Programming Approach for Unit Commitment in Micro-Grid with Incentive-Based Demand Response and Battery Energy Storage System. Energies, 15(19), 7192",
        "year": 2022,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-107",
        "title": "T. N",
        "authors": "Trong",
        "venue": "Nguyen-Hoang-Minh, G., Do-Dinh, H., Pham-Thi-Huong, G., Vu-Xuan-Son, H., & Nguyen-Duc, T. (2022). DETERMINISTIC AND PROBABILISTIC WIND SPEED FORECASTING EMPLOYING A HYBRID DEEP LEARNING MODEL AND QUANTILE REGRESSION. SEATUC journal of science and engineering, 3(1), 1-8",
        "year": 2022,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-108",
        "title": "Challenges and Countermeasure for High Penetration of Renewable Energy into Power Grid",
        "authors": "Nguyen Duc Tuyen",
        "venue": "Automation Today, January 2022. (in Vietnamese)",
        "year": 2022,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-109",
        "title": "K",
        "authors": "Do Chi",
        "venue": "Van, L. P., & Duc, T. N. (2022). AN OPTIMIZED FUZZY LOGIC-BASED ENERGY MANAGEMENT STRATEGY FOR RENEWABLE ENERGY MICROGRID WITH HYDROGEN STORAGE SYSTEM. Student Forum",
        "year": 2022,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-110",
        "title": "B. Q",
        "authors": "Minh",
        "venue": "Duong, N. D., Tung, D. Q., & Duc, T. N. (2022). PHOTOVOLTAIC SYSTEM FAULT DETECTION AND CLASSIFICATION BASED ON K-NEAREST NEIGHBOR",
        "year": 2022,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-111",
        "title": "L. T. M",
        "authors": "Lien",
        "venue": "Anh, V. Q., Bach, T. D., & Duc, T. N. (2022). OPTIMAL SIZING OF A BATTERY ENERGY STORAGE SYSTEM USING PARTICLE SWARM OPTIMIZATION FOR MICROGRID. Student Forum",
        "year": 2022,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-112",
        "title": "V2G Application: EV Charging Management in PV Integrated Distribution Grid Regarding DSM Approach",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Future Lab 2021, GIZ Vietnam 23/2/2022",
        "year": 2022,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-113",
        "title": "Demand Side Integration in smart distributed power system",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "World Engineering Day, 04 March 2022. (Hybrid)",
        "year": 2022,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-114",
        "title": "Control Analysis of Biomass Gasification with Combined Heat and Power System",
        "authors": "YH Kok, N Kamarulzaman, ZF Mohd Shadzalli, N Abdul Manaf, ...",
        "venue": "Proceedings of the 2nd Energy Security and Chemical Engineering Congress …",
        "year": 2022,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:hC7cP41nSMkC",
        "citations": 0
    },
    {
        "id": "pub-115",
        "title": "Feasibility study on biomass bamboo renewable energy in Malaysia, Indonesia, Vietnam and Japan",
        "authors": "KNAKA Shah, MZM Yusop, JM Rohani, NA Fadil, NA Manaf, B Hartono, ...",
        "venue": "Chemical Engineering Transactions 89, 127-132",
        "year": 2021,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:70eg2SAEIzsC",
        "citations": 20
    },
    {
        "id": "pub-116",
        "title": "Calculation Method for Electricity Price and Rebate Level in Demand Response Programs",
        "authors": "Hirotaka Takano*, Naohiro Yoshida, Hiroshi Asano, Aya Hagishima, Nguyen Duc Tuyen",
        "venue": "Applied Sciences, Aug 2021, Vol.11, No.15, pp.6871, DOI",
        "year": 2021,
        "category": "international-journal",
        "quartile": "Q2",
        "doi": "10.3390/app11156871",
        "url": "https://doi.org/10.3390/app11156871",
        "citations": 11
    },
    {
        "id": "pub-117",
        "title": "Reconfiguration of Electric Power Distribution Networks: A Typical Application of Metaheuristics in Electrical Power Field",
        "authors": "H. Takano, J. Murata, H. Asano, N. D. Tuyen",
        "venue": "pp.111-139, in book “Frontiers in Nature-Inspired Industrial Optimization”, Springer, Aug 7 2021",
        "year": 2021,
        "category": "book-chapter",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:qxL8FJ1GzNcC",
        "citations": 6
    },
    {
        "id": "pub-118",
        "title": "Photovoltaic Power Generation Forecasting Utilizing Long Short Term Memory",
        "authors": "Nguyen Duc Tuyen*, Vu Xuan Son Huu and Le Viet Thinh",
        "venue": "Measurement Control and Automation, Vol. 1, No. 2, May 2021",
        "year": 2021,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:Y0pCki6q_DkC",
        "citations": 3
    },
    {
        "id": "pub-119",
        "title": "Synthesis of metal organic framework mesostructured UIO-66 with defections in frameworks for enhancing photocatalytic degradation of residues pesticides",
        "authors": "ND Hai, VM Tan, NTT An, PL Ha, HM Ha, HT Nhung, HT Oanh, ND Tuyen, ...",
        "venue": "Vietnam Journal of Catalysis and Adsorption 10 (1S), 230-236",
        "year": 2021,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:RHpTSmoSYBkC",
        "citations": 2
    },
    {
        "id": "pub-120",
        "title": "Solar and biomass potential of renewable energy in selected ASEAN countries and Japan",
        "authors": "Ku Nur Afrina Ku Azman Shah , Mohd Zamri Mohd Yusop , Jafri Mohd Rohani , Nor Akmal Fadil, Mohd Faizal Hasan, Mohd Fairus Mohd Yasin, Natrah Kamaruzaman, Engku Mohd Nazim Engku Abu Bakar, Syahrullail Samion, Mohd Yazid Yahya, Norhuda Abdul Manaf, Budi Hartono, Nguyen Duc Tuyen, Tanemura Masaki, Abdul Samad Ahmad6 and Ashaari Ramli",
        "venue": "Journal of Physics: Conference Series, 2053(2021), 22 Oct 2021. https://iopscience.iop.org/article/",
        "year": 2021,
        "category": "international-journal",
        "quartile": "Q4",
        "doi": "10.1088/1742-6596/2053/1/012018/meta",
        "url": "https://doi.org/10.1088/1742-6596/2053/1/012018/meta",
        "citations": 1
    },
    {
        "id": "pub-121",
        "title": "Short-Term Load Forecasting Using Long Short-Term Memory Based on EVN NLDC Data",
        "authors": "Nguyen Duc Huy, Nguyen Duc Tuyen*, Nguyen Thi Ngoc Anh, Trinh Tuan Tu, Le Hai Trieu, Vu Xuan Son Huu",
        "venue": "Measurement Control and Automation, Vol. 1, No. 2, Mar. 2021",
        "year": 2021,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:ULOm3_A8WrAC",
        "citations": 1
    },
    {
        "id": "pub-122",
        "title": "Solar Renewable Energy Potential and Development in Malaysia, Indonesia, Vietnam and Japan",
        "authors": "Mohamad Yuszaimie Abdul Hamid, Ku Nur Afrina Ku Azman Shah, Nor Akmal Fadil, Jafri Mohd Rohani, Mohd Zamri Mohd Yusop, Nguyen Duc Tuyen",
        "venue": "2nd Asia Pacific Conference on Industrial Engineering and Operations Management, Surakarta, Indonesia (Virtual), September 14-16, 2021 – Scopus Indexing",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:mB3voiENLucC",
        "citations": 1
    },
    {
        "id": "pub-123",
        "title": "Forecast PV-Generation-Characteristic at Real-time Conditions by Improved Single-Diode Model",
        "authors": "Nguyen Duc Tuyen*, Le Viet Thinh, Goro Fujita",
        "venue": "IET Renewable Power Generation, Sep 2021, Vol.16, No.1, pp.223-236, DOI",
        "year": 2021,
        "category": "international-journal",
        "quartile": "Q2",
        "doi": "https://doi.org/10.1049/rpg2.12288",
        "url": "https://doi.org/10.1049/rpg2.12288",
        "citations": 0
    },
    {
        "id": "pub-124",
        "title": "Reactive power control with Smart Inverter for Photovoltaic Grid-Connected System",
        "authors": "Nguyễn Quang Thuấn, NguyễnĐức Tuyên, Đỗ Văn Long, Ninh Văn Nam",
        "venue": "Journal of Science &Technology-Hanoi University of Industry, E-ISSN 2615-9619, pp.7-11, No.57, Vol.1, Feb 2021",
        "year": 2021,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-125",
        "title": "The Output Characteristic of A Photovoltaic Array Under Mismatching Conditions",
        "authors": "NguyễnĐức Tuyên, Lê Viết Thịnh, Nguyễn Quang Thuấn",
        "venue": "Journal of Science &Technology-Hanoi University of Industry, E-ISSN 2615-9619, pp.3-8, No.57, Vol.2, April 2021. (in Vietnamese)",
        "year": 2021,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-126",
        "title": "Overview of demand response through experience in operating electricity market in some countries",
        "authors": "NguyễnĐức Tuyên*, Đỗ Văn Long, Trần Quốc Ngữ , Lê Viết Thịnh, Đặng Hoàng Anh, Dương Mạnh Cường",
        "venue": "E-ISSN 2615-9619, pp.36-43, No.57, Vol.3, June 2021. (in Vietnamese)",
        "year": 2021,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-127",
        "title": "鈴木智史",
        "authors": "ウエン ダック トウエン",
        "venue": "五舛目清剛, 遠藤成輝, 前田哲彦, 「20kW 級太陽電池直結水電解装置のリチウムイオンキャパシタを用いた平滑化」, 第37回水素エネルギー協会大会, 東京, 2017年12月4日-5日",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-128",
        "title": "浅野 浩志",
        "authors": "吉田 尚洋",
        "venue": "萩島 理, Tuyen Nguyen Duc, 「デマンドレスポンス設計時の基準の設定方法に関する検討」, 電力技術/電力系統技術/半導体電力変換合同研究会, 2020年3月5・6日",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-129",
        "title": "Modular cascaded H-bridge multilevel converter for high-power PV system",
        "authors": "Trần Minh Hoàn, Phạm Quang Vinh, NguyễnĐức Tuyên",
        "venue": "Conferences",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-130",
        "title": "TAKANO HIROTAKA (岐阜大)",
        "authors": "YOSHIDA NAOHIRO (岐阜大)",
        "venue": "ASANO HIROSHI (岐阜大), ASANO HIROSHI (電力中研), HAGISHIMA AYA (九大), TUYEN Nguyen Duc (ハノイ工科大), A Study on Optimization Method for Electricity Pricing in Demand Response Programs, 電気学会研究会資料, PSE-21-001-009.011. 013-019, Jan 16, 2021",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-131",
        "title": "「小型風車による水素ガス自給製造」",
        "authors": "ウエン ダック トウエン",
        "venue": "２０１７水素セミナー合宿, 群馬、9月22日",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-132",
        "title": "Các yêu cầ u cầ nđápứ ng về hạ tầ ng kỹ thuậ t cho các giả i pháp linh hoạ t cho hệ thố ngđiệ n",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Các giả i phápđả m bả o tính linh hoạ t và ổ nđị nh củ a hệ thố ngđiệ n, GreenID Host: 27 Aug 2021",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-133",
        "title": "Reconfiguration of PV Panel System",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "IEOM, Indonesia: 15 September 2021",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-134",
        "title": "Chương trình tọ ađàm Dự thả o quy hoạ chđiệ n 8- Open or Close for Green Energy Transition, GreenID Host: 16 September 2021",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Invited Talks",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-135",
        "title": "Virtual power plant and Energy Storage: Solutions for Vietnam's power system in the future, VIET SE Host: 17 September 2021",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Invited Talks",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-136",
        "title": "Kinh nghiệ m quố c tế về 100% Năng lư ợ ng tái tạ o và bố i cả nh tạ i Việ t Nam",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Thúcđẩ y mạ ng lư ớ i Doanh nghiệ p tiên phong hư ớ ng tớ i 100% Năng lư ợ ng tái tạ o, WWF, Nov 9 2021",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-137",
        "title": "Cyber Security in Inverter-based Smart Power System and Microgrid with high penetration of the Renewable Energy/ Vấ nđề bả o mậ t thông tin trong lư ớ iđiệ n có tỷ trọ ng cao các nguồ n NLTT",
        "authors": "GIZ host: How the researches can support the implementation of smart grids roadmap in Vietnam",
        "venue": "Academy Day, Nov 26 2021",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-138",
        "title": "High share RE Power System and Energy Storage using H2",
        "authors": "Vietnam Summit: Innovative Energy System for Sustainable Development Goals",
        "venue": "No 21 2021",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-139",
        "title": "Electrical engineering for offshore wind power",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Block seminar for Wind power Technology, VIET SE, CASE Projects, 15-19 Nov 2021",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-140",
        "title": "Policies and technologies on electric vehicles training",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "GreenID, 28&29/11/2021",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-141",
        "title": "The development of electric vehicles worldwide and implications for Vietnam",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Transportation Newspaper&GreenID, 21/12/2021 (Online)",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-142",
        "title": "Cyber Security in Inverter-based Smart Power System and Microgrid with high penetration of the Renewable Energy",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Academy Day, GIZ Vietnam, 23/12/2021. (Online)",
        "year": 2021,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-143",
        "title": "ĐẶC TÍNH ĐIỆN ĐẦU RA CỦA MỘT DÀN PIN MẶT TRỜI DƯỚI CÁC ĐIỀU KIỆN KHÔNG ĐỒNG NHẤT",
        "authors": "ND Tuyen, NQ Thuan",
        "venue": "Trường Đại học Công nghiệp Hà Nội",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:ldfaerwXgEUC",
        "citations": 0
    },
    {
        "id": "pub-144",
        "title": "ĐIỀU KHIỂN CÔNG SUẤT PHẢN KHÁNG BẰNG INVERTER BA PHA CHO HỆ THỐNG NGUỒN ĐIỆN MẶT TRỜI HÒA LƯỚI",
        "authors": "ND Tuyen, N Van Nam, NQ Thuan",
        "venue": "Trường Đại học Công nghiệp Hà Nội",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:TFP_iSt0sucC",
        "citations": 0
    },
    {
        "id": "pub-145",
        "title": "A Study of Influences of Estimation Error in Demand Baseline on design of Demand Response Programs",
        "authors": "N YOSHIDA, H TAKANO, H ASANO, AYA HAGISHIMA, DT NGUYEN",
        "venue": "電気学会研究会資料 (Web), 101-106",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:K3LRdlH-MEoC",
        "citations": 0
    },
    {
        "id": "pub-146",
        "title": "A Study on Optimization Method for Electricity Pricing in Demand Response Programs",
        "authors": "N YOSHIDA, H TAKANO, H ASANO, AYA HAGISHIMA, ND TUYEN",
        "venue": "電気学会研究会資料, 1-6",
        "year": 2021,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:_xSYboBqXhAC",
        "citations": 0
    },
    {
        "id": "pub-147",
        "title": "Optimization Strategy for High-Efficiency Large-Scale Direct Coupled Photovoltaic-Electrolyzer System Based On Experiment Data",
        "authors": "Tuyen Nguyen Duc",
        "venue": "The 14th South East Asian Technical University Consortium Symposium (SEATUC), 27-28 Feb, Mongkut Thonburi, Thailand, 2020",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:Tiz5es2fbqcC",
        "citations": 57
    },
    {
        "id": "pub-148",
        "title": "Single-diode models of PV modules: a comparison of conventional approaches and propose a novel model",
        "authors": "Tuyen Nguyen-Duc, Huy Nguyen-Duc, Thinh Le-Viet, Hirotaka Takano",
        "venue": "Energies, 2020, vol. 13, issue 6, 1-22, DOI",
        "year": 2020,
        "category": "international-journal",
        "quartile": "Q2",
        "doi": "https://doi.org/10.3390/en13061296",
        "url": "https://doi.org/10.3390/en13061296",
        "citations": 53
    },
    {
        "id": "pub-149",
        "title": "Evaluating the determinants of Vietnamese frequent flyers’ loyalty in civil aviation industry: The case of Delta air lines",
        "authors": "TT Anh, TT Duc, TT Thi, NT Hong",
        "venue": "Management Science Letters 10 (2), 391-398",
        "year": 2020,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:1qzjygNMrQYC",
        "citations": 12
    },
    {
        "id": "pub-150",
        "title": "Forecasting I-V Characteristic of PV Modules Considering Real Operating Conditions Using Numerical Method and Deep Learning",
        "authors": "Nguyen Duc Tuyen, Thinh Le Viet, Huu Vu Xuan Son Huu, Goro Fujita",
        "venue": "International Conference on Smart Grids and Energy Systems (SGES 2020), Perth, Australia, November 23-26, 2020. ISSN: 978-1-7281-8550-7 (virtual, IEEE Explore)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:M3NEmzRMIkIC",
        "citations": 8
    },
    {
        "id": "pub-151",
        "title": "On the Sudoku-based Arrangement in Reconfiguring a Large-scale Photovoltaic Array",
        "authors": "Nguyen Duc Tuyen, Thinh Le Viet, Huu Vu Xuan Son Huu",
        "venue": "Society of Instrument and Control Engineers Annual Conference 2020 (SICE 2020), Sep 23-26 2020. (virtual, IEEE Explore)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:iH-uZ7U-co4C",
        "citations": 4
    },
    {
        "id": "pub-152",
        "title": "Photovoltaic Power Generation Forecasting Utilizing Long Short-term Memory",
        "authors": "Duc Tuyen Nguyen, Xuan Son Huu Vu and Viet Thinh Le",
        "venue": "The 1 st International Symposium on Power, Energy and Cybernetics 2020 (ISPEC 2020), Dec 18-19, Ha noi, Vietnam. (virtual)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:Y0pCki6q_DkC",
        "citations": 3
    },
    {
        "id": "pub-153",
        "title": "A Strategy to Enhance Generator Efficiency of Sudoku-based PV Arrays Under Partial Shading Conditions",
        "authors": "Tuyen Nguyen Duc, Thinh Le Viet and Huu Vu Xuan Son",
        "venue": "5th International Conference on Green Technology and Sustainable Development (GTSD 2020), 27-28 Nov, Da Nang, Vietnam (virtual, IEEE Explore)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:ZHo1McVdvXMC",
        "citations": 2
    },
    {
        "id": "pub-154",
        "title": "Short-Term Load Forecasting Using Long ShortTerm Memory Based on EVN NLDC Data",
        "authors": "Huy Nguyen-Duc, Tuyen Nguyen-Duc, Anh Nguyen-Thi Ngoc, Tu Trinh-Tuan, Trieu Le-Hai and Huu Vu-Xuan-Son",
        "venue": "The 1 st International Symposium on Power, Energy and Cybernetics 2020 (ISPEC 2020), Dec 18-19, Ha noi, Vietnam. (virtual)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:ULOm3_A8WrAC",
        "citations": 1
    },
    {
        "id": "pub-155",
        "title": "AN EXPLICIT APPROACH TO SIMULATE THE FIVE PARAMETER MODEL FOR PV PANELS UNDER VARIOUS CONDITIONS",
        "authors": "DT Nguyen, DH Nguyen, VT Le, TT Hoang",
        "venue": "SEATUC journal of science and engineering 1 (2), 6-13",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:p2g8aNsByqUC",
        "citations": 1
    },
    {
        "id": "pub-156",
        "title": "An Explicit Approach to Simulate Five-Parameter Model for PV Panels Under Various Conditions",
        "authors": "Tuyen Nguyen-Duc, Huy Nguyen-Duc, Thinh Le-Viet and Thanh Hoang-Tien",
        "venue": "SEATUC Journal of Science and Engineering (SJSE), ISSN: 2435-2993, Vol.1, No.2, pp.6-13, Sept. 2020. DOI",
        "year": 2020,
        "category": "international-journal",
        "quartile": "",
        "doi": "https://doi.org/10.34436/sjse.1.2_6",
        "url": "https://doi.org/10.34436/sjse.1.2_6",
        "citations": 0
    },
    {
        "id": "pub-157",
        "title": "Design Method for Incentive-based Demand Response Programs Using Framework of Social Optimization",
        "authors": "Naohiro Yoshida, Hirotaka Takano, Hiroshi Asano, Aya Hagishima, Nguyen Duc Tuyen",
        "venue": "Journal of Japan Society of Energy and Resources, ISSN-L : 2433-0531, Oct. 2020, Vol.41, No.6, pp.300-306, DOI",
        "year": 2020,
        "category": "international-journal",
        "quartile": "",
        "doi": "https://doi.org/10.24778/jjser.41.6_300",
        "url": "https://doi.org/10.24778/jjser.41.6_300",
        "citations": 0
    },
    {
        "id": "pub-158",
        "title": "Comparing Profits of Investing In Grid-Connected Rooftop PV System And Deposit Money In Bank Using Dual Interest Rate",
        "authors": "NguyễnĐức Tuyên, Lê Văn Lực*, Ninh Văn Nam, Trần Thanh Sơn",
        "venue": "Journal of Science &Technology-Hanoi University of Industry, E-ISSN 2615-9619, No.56, Vol.2, April 2020. (in Vietnamese)",
        "year": 2020,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-159",
        "title": "Building a model of inverter capable of controlling active power and reactive power in grid-connected solar power system when a short-circuit fault occurs",
        "authors": "NguyễnĐức Tuyên, Lê Văn Lực*, Đỗ Văn Long, Nguyễn HữuĐức",
        "venue": "Journal of Science & Technology-Hanoi University of Industry, E-ISSN 2615-9619, No.56, Vol.4, Aug 2020. (in Vietnamese)",
        "year": 2020,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-160",
        "title": "Forecast Solar Irradiance Using Artificial Neural Networks Via Assessment of Root Mean Square Error",
        "authors": "NguyễnĐức Tuyên*, Vũ Xuân Sơn Hữu, Nguyễn Quang Thuấn",
        "venue": "Journal of Science &Technology-Hanoi University of Industry, E-ISSN 2615-9619, No.56, Vol.6, Dec 2020",
        "year": 2020,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-161",
        "title": "A Novel Method to Simulate The Five-Parameter Model For PV Panels",
        "authors": "Tuyen Nguyen Duc, Huy Nguyen Duc and Thinh Le Viet",
        "venue": "The 14cth South East Asian Technical University Consortium Symposium (SEATUC), 27-28 Feb, Mongkut Thonburi, Thailand, 2020",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-162",
        "title": "Forecast Solar Irradiance Using Artificial Neural Networks Via Assessment of Root Mean Square Error",
        "authors": "NguyễnĐức Tuyên, Vũ Xuân Sơn Hữu, Nguyễn Quang Thuấn",
        "venue": "The 4th HaUI University Conference, May 2020",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-163",
        "title": "Reactive power control with Smart Inverter for Photovoltaic Grid-Connected System",
        "authors": "Nguyễn Quang Thuấn, NguyễnĐức Tuyên, Đỗ Văn Long",
        "venue": "The 4th HaUI University Conference, May 2020",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-164",
        "title": "The Output Characteristic of A Photovoltaic Array Under Mismatching Conditions",
        "authors": "NguyễnĐức Tuyên, Lê Viết Thịnh, Nguyễn Quang Thuấn",
        "venue": "The 4th HaUI University Conference, May 2020",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-165",
        "title": "Tracking Optimum Efficiency of Virtual Power Plant Using Tracking Efficiency Auto Control System (TEAS)",
        "authors": "Tuyen Nguyen and Nguyen Van Thuc",
        "venue": "The 1 st International Symposium on Power, Energy and Cybernetics 2020 (ISPEC 2020), Dec 18-19, Ha noi, Vietnam. (virtual)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-166",
        "title": "A Review on Cyber-Attack Mitigation Techniques and Challenges in Cyber-Physical Microgrid Systems",
        "authors": "Đức Tuyên Nguyễn and Sỹ Quân Nguyễn",
        "venue": "The 1 st International Symposium on Power, Energy and Cybernetics 2020 (ISPEC 2020), Dec 18-19, Ha noi, Vietnam. (virtual)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-167",
        "title": "Two-stage three-phase grid-connected power electronic interface for PV system",
        "authors": "Duc Tuyen Nguyen, Minh Hoan Tran and Van Long Do",
        "venue": "The 1 st International Symposium on Power, Energy and Cybernetics 2020 (ISPEC 2020), Dec 18-19, Ha noi, Vietnam. (virtual)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-168",
        "title": "Propose Optimal Method Operating Costs for Grid-Connected PV System and BESS in Vietnam",
        "authors": "Tuyen Nguyen and Hoang Ho",
        "venue": "The 1 st International Symposium on Power, Energy and Cybernetics 2020 (ISPEC 2020), Dec 18-19, Ha noi, Vietnam. (virtual)",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-169",
        "title": "Demand response program: optimization for utilities of multi-energy source suppliers and consumers based on social welfare framework",
        "authors": "Trần Quốc Ngữ, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:g5m5HwL7SMYC",
        "citations": 0
    },
    {
        "id": "pub-170",
        "title": "Optimal Scheduling for Charging and Discharging of Electric Vehicles",
        "authors": "Hoàng Nhật, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-171",
        "title": "Energy storage system for renewable energy sources according to the gravitational potential theorem",
        "authors": "Hồ Đức Hoàng, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-172",
        "title": "Assessment of solar irradiance forecasting utilizing Attention-Based Bidirectional Long Short-Term Memory model via mean absolute percentage error",
        "authors": "Vũ Xuân Sơn Hữu, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-173",
        "title": "Two-stage stochastic unit commitment for microgrid",
        "authors": "Đỗ Văn Long, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-174",
        "title": "Tuabin gió không khí ở độ cao lớn",
        "authors": "Phạm Hải Minh, Nguyễn Vũ Nhật Nam, Tào Thị Quỳnh Anh, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-175",
        "title": "Simulation and assessment of false data injection attack in physical layer of smart grid",
        "authors": "Võ Bá Linh, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-176",
        "title": "Impact of smart grid on renewable energy: a simulation approach",
        "authors": "Nguyễn Sỹ Quân, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-177",
        "title": "High voltage direct current intergrated renewable enery sources into the grid",
        "authors": "Nguyễn Văn Thức, NguyễnĐức Tuyên",
        "venue": "Student Forum 2020, 8 Dec 2020, Hanoi, Vietnam. ISBN: 978-604-316-020-8",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-178",
        "title": "DỰ BÁO BỨC XẠ MẶT TRỜI SỬ DỤNG MẠNG NƠ-RON NHÂN TẠO THÔNG QUA ĐÁNH GIÁ SAI SỐ BÌNH PHƯƠNG TRUNG BÌNH",
        "authors": "ND Tuyen, NQ Thuan, VXS Huu",
        "venue": "Đại học Công nghiệp Hà Nội",
        "year": 2020,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:MXK_kJrjxJIC",
        "citations": 0
    },
    {
        "id": "pub-179",
        "title": "Protection of Sensitive Loads using Sliding Mode Controlled Three-Phase DVR with Adaptive Notch Filter",
        "authors": "Samet Biricik, Hasan Komurcugil, Nguyen Duc Tuyen, Malabika Basu",
        "venue": "Transactions on Industrial Electronics, Vol.66, No.7, pp.5465-5475, July 2019. DOI",
        "year": 2019,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "10.1109/TIE.2018.2868303",
        "url": "https://doi.org/10.1109/TIE.2018.2868303",
        "citations": 102
    },
    {
        "id": "pub-180",
        "title": "The Analysis of Technical Trend in Islanding Operation, Harmonic Distortion, Stabilizing Frequency, and Voltage of Islanded Entities",
        "authors": "Tran Thanh Son, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "Resources, Special Issue \"Advance Research on Power Electronics for Sustainable Energy Conversion Systems\", 8(1), 14, Jan 2019; DOI",
        "year": 2019,
        "category": "international-journal",
        "quartile": "Q2",
        "doi": "https://doi.org/10.3390/resources8010014",
        "url": "https://doi.org/10.3390/resources8010014",
        "citations": 28
    },
    {
        "id": "pub-181",
        "title": "Influence of organoclay on the flame retardancy and thermal insulation property of expandable graphite/polyurethane foam",
        "authors": "NH Thi, DL Pham, NT Hanh, HT Oanh, TH Yen Duong, TN Nguyen, ...",
        "venue": "Journal of Chemistry 2019 (1), 4794106",
        "year": 2019,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:7PzlFSSx8tAC",
        "citations": 22
    },
    {
        "id": "pub-182",
        "title": "Operation Scheduling Optimization for Microgrids Considering Coordination of Their Components",
        "authors": "Hirotaka Takano, Ryota Goto, Thin Zar Soe, Nguyen Duc Tuyen, Hiroshi Asano",
        "venue": "Future Internet, 11(11), 223, 2019; DOI",
        "year": 2019,
        "category": "international-journal",
        "quartile": "Q3",
        "doi": "https://doi.org/10.3390/fi11110223",
        "url": "https://doi.org/10.3390/fi11110223",
        "citations": 9
    },
    {
        "id": "pub-183",
        "title": "Effect of the incorporation of organoclay and melamine cyanurate on the flame retardancy and mechanical property of polyurethane foam",
        "authors": "HT Nhung, PD Linh, NT Hanh, NT Nhan, HT Oanh, ND Tuyen, ...",
        "venue": "Vietnam Journal of Chemistry 57 (3), 368-374",
        "year": 2019,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:isC4tDSrTZIC",
        "citations": 7
    },
    {
        "id": "pub-184",
        "title": "The Improvement of an Islanding Detection Method Based on the Perturbation Signal in Case of a Multi-Photovoltaic Operation",
        "authors": "Son Tran Thanh, Tuyen Nguyen Duc, Goro FUJITA",
        "venue": "Applied Sciences, 9(19), 4054, Sep 2019; DOI",
        "year": 2019,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "https://doi.org/10.3390/app9194054",
        "url": "https://doi.org/10.3390/app9194054",
        "citations": 4
    },
    {
        "id": "pub-185",
        "title": "20 kW-Class Direct Coupled Photovoltaic-Electrolyzer System with MPPT Capability",
        "authors": "Nguyen Duc Tuyen, Goshome Kiyotaka, Endo Naruki, Maeda Tetsuhiko",
        "venue": "International Journal of Hydrogen, Vol. 44, No.49, October 2019, pp.26741-26752, 2019. DOI",
        "year": 2019,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "https://doi.org/10.1016/j.ijhydene.2019.07.056",
        "url": "https://doi.org/10.1016/j.ijhydene.2019.07.056",
        "citations": 0
    },
    {
        "id": "pub-186",
        "title": "Lithium-ion Capacitor to Compensate PV Output Current in the Direct PV-electrolyzer Unit",
        "authors": "Nguyen Duc Tuyen",
        "venue": "The 13th South East Asian Technical University Consortium Symposium (SEATUC), Hanoi, March 14-15, 2019",
        "year": 2019,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-187",
        "title": "Microgrid EMS With Economical Analysis",
        "authors": "Le Huu Thanh Binh, Tran Anh Thai, Nguyen Anh The, Nguyen Duc Tuyen",
        "venue": "Vietnam Japan Science and Technology Syposium (VJST2019), Hanoi, Vietnam, 2019. (invited talk)",
        "year": 2019,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-188",
        "title": "A study of Demand Response Programs based on Framework of Social Welfare Optimization",
        "authors": "Hirotaka Takano, Hiroshi Asano, Nguyen Duc Tuyen",
        "venue": "The 3rd International Workshop on Power. Engineering in Remote Islands (IWPI), Taiwan, 2019",
        "year": 2019,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:hqOjcs7Dif8C",
        "citations": 0
    },
    {
        "id": "pub-189",
        "title": "A Comparison between Analytics Methods to Identify Five-Parameter Model for Photovoltaic Panels",
        "authors": "Nguyen Duc Tuyen, Nguyen Duc Huy, Le Viet Thinh, Vu Xuan Son Huu, Tran Quoc Ngu",
        "venue": "National Conference on Application of Advanced Technology (NCAAT), Thai Nguyen, Oct 26, 2019",
        "year": 2019,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-190",
        "title": "Carrier development for engineer",
        "authors": "Nguyen Duc Tuyen",
        "venue": "Workshop 3: HBT (Hybrid Twinning Program) Alumni research collaboration workshop, SEATUC, Hanoi, March 14-15, 2019",
        "year": 2019,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-191",
        "title": "Microgrid EMS With Economical Analysis",
        "authors": "Le Huu Thanh Binh, Tran Anh Thai, Nguyen Anh The, Nguyen Duc Tuyen",
        "venue": "Vietnam Japan Science and Technology Syposium (VJST2019), Hanoi, Vietnam, 2019. (invited talk)",
        "year": 2019,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-192",
        "title": "Integration of Renewable Energy on Power System",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "National Dispatch Center, Aug 18-23, 2019 & Nov 11-15, 2019",
        "year": 2019,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-193",
        "title": "Demand Side Management, Demand Reponse",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Vietnam Center Power Company, Nov 22, 2019",
        "year": 2019,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-194",
        "title": "Islanding Detection Method Based on Injecting Perturbation Signal and Rate of Change of Output Power in DC Grid-Connected Photovoltaic System",
        "authors": "Tran, Thanh S.; Nguyen, Duc T.; FUJITA, Goro",
        "venue": "Energies 11, No. 5: 1313, May 2018. DOI",
        "year": 2018,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "https://doi.org/10.3390/en11051313",
        "url": "https://doi.org/10.3390/en11051313",
        "citations": 21
    },
    {
        "id": "pub-195",
        "title": "Cancellation Signal Issue by Using Islanding Detection Method based on Injecting Perturbation Signal and Rate of Change of Output Power in DC Network-Connected Photovoltaic System",
        "authors": "Tran Thanh Son, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "The 2nd International Workshop on Power. Engineering in Remote Islands (IWPI) Conference, 2018",
        "year": 2018,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:rO6llkc54NcC",
        "citations": 0
    },
    {
        "id": "pub-196",
        "title": "Renewable Energy, Smart Grid and Smart Community",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Hanoi Power Company, Hanoi, Dec 12, 2018",
        "year": 2018,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-197",
        "title": "Demand Side Management with Renewable Energy, Storage, Commercial Building",
        "authors": "Nguyen Duc Tuyen et al.",
        "venue": "Hanoi Power Company, Hanoi, Feb 22, 2018",
        "year": 2018,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-198",
        "title": "Quantum criticality at the superconductor-insulator transition revealed by specific heat measurements",
        "authors": "S Poran, T Nguyen-Duc, A Auerbach, N Dupuis, A Frydman, O Bourgeois",
        "venue": "Nature communications 8 (1), 14464",
        "year": 2017,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:Se3iqnhoufwC",
        "citations": 34
    },
    {
        "id": "pub-199",
        "title": "New Modulation Strategy Combining Phase Shift and Frequency Variation for Dual-Active-Bridge Converter",
        "authors": "Nguyen Duy Dinh, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "IEEJ Journal of Industry Applications, pp140-pp150, Vol.6, No.2, March 2017. DOI:",
        "year": 2017,
        "category": "international-journal",
        "quartile": "Q2",
        "doi": "https://doi.org/10.1541/ieejjia.6.140",
        "url": "https://doi.org/10.1541/ieejjia.6.140",
        "citations": 19
    },
    {
        "id": "pub-200",
        "title": "Islanding detection in DC network",
        "authors": "TT Son, G Fujita, ND Tuyen",
        "venue": "2017 52nd International Universities Power Engineering Conference (UPEC), 1-5",
        "year": 2017,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:IWHjjKOFINEC",
        "citations": 5
    },
    {
        "id": "pub-201",
        "title": "Extraction of lycopene from Gac fruit (Momordica cochinchinensis Spreng) and preparation of nanolycopene",
        "authors": "HT Oanh, HT Nhung, ND Tuyen, LTK Van, TH Trung, HM Ha",
        "venue": "Vietnam Journal of Chemistry 55 (6), 761-761",
        "year": 2017,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:hMod-77fHWUC",
        "citations": 4
    },
    {
        "id": "pub-202",
        "title": "An observer-based digital control system for individually management of active and reactive power of dual-active-bridge DC/DC converter",
        "authors": "Dinh Duy Nguyen, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "JICEE, Online ISSN: 2234-8972, pp234-pp241 Vol.7, No.1, Sep 6, 2017. DOI",
        "year": 2017,
        "category": "international-journal",
        "quartile": "",
        "doi": "http://dx.doi.org/10.1080/22348972.2017.1369925",
        "url": "http://dx.doi.org/10.1080/22348972.2017.1369925",
        "citations": 1
    },
    {
        "id": "pub-203",
        "title": "Islanding Detection in DC Networks",
        "authors": "Tran Thanh Son, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "Universities Power Engineering Conference (UPEC2017), Crete, Greece, Aug 28-31, 2017",
        "year": 2017,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-204",
        "title": "Smart inverter control for small power systems",
        "authors": "Nguyen Duc Tuyen",
        "venue": "International Conference on Materials and Systems for Sustainability 2017, Nagoya, Japan, September 29 - October 1, 2017. (invited talk)",
        "year": 2017,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-205",
        "title": "Smart inverter control for small power systems",
        "authors": "Nguyen Duc Tuyen",
        "venue": "International Conference on Materials and Systems for Sustainability 2017, Nagoya, Japan, September 29 - October 1, 2017. (invited talk)",
        "year": 2017,
        "category": "invited-talk",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-206",
        "title": "Notch Adaptive Filter Solution under Unbalanced and/or Distorted PCC Voltage for 3-phase 3-wire Shunt Active Power Filter",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, Mohd Nabil Bin Muhtazaruddin",
        "venue": "Electrical Engineering, Springer, Vol.98, No.3, pp.321-332, May 2016. DOI",
        "year": 2016,
        "category": "international-journal",
        "quartile": "Q3",
        "doi": "10.1007/s00202-016-0362-9",
        "url": "https://doi.org/10.1007/s00202-016-0362-9",
        "citations": 12
    },
    {
        "id": "pub-207",
        "title": "Analysis of Transient-to-island Mode of Power Electronic Interface with Conventional dq-Current Controller and Proposed Droop-Based Controller",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, Toshihisa Funabashi, Masakatsu Nomura",
        "venue": "Electrical Engineering Springer, 99(1), pp. 47-57, June 2016, DOI",
        "year": 2016,
        "category": "international-journal",
        "quartile": "Q3",
        "doi": "10.1007/s00202-016-0380-7",
        "url": "https://doi.org/10.1007/s00202-016-0380-7",
        "citations": 11
    },
    {
        "id": "pub-208",
        "title": "Observer-based Nonlinear Control for Frequency Modulated Dual-Active-Bridge Converter",
        "authors": "Nguyen Duy Dinh, Nguyen Manh Linh, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "2016 IEEE Energy Conversion Congress and Exposition (ECCE), USA, 18-22 September 2016",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:NhqRSupF_l8C",
        "citations": 4
    },
    {
        "id": "pub-209",
        "title": "Very sensitive nanocalorimetry of small mass systems and glassy materials",
        "authors": "JL Garden, A Tavakoli, T Nguyen-Duc, A Frydman, M Laarraj, J Richard, ...",
        "venue": "Nanomaterials for Security, 35-44",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:35N4QoGY0k4C",
        "citations": 2
    },
    {
        "id": "pub-210",
        "title": "An Observer-based Digital Control System for Individually Management of Active and Reactive Power of Dual-active-bridge Converter",
        "authors": "Duy Dinh Nguyen, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "International Conference on Electrical Engineering, Okinawa (Japan), (2016.7)",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:maZDTaKrznsC",
        "citations": 1
    },
    {
        "id": "pub-211",
        "title": "Remote Data Acquisition of a Small Wind Turbine",
        "authors": "Nguyen Duc Tuyen, Junji Kondoh, Kentaro Matsumoto, Takuji Funamoto",
        "venue": "International Conference on Electrical Engineering, Okinawa (Japan), (2016.7)",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-212",
        "title": "Review of International Standards on FRT Requirements For WT and Suggestion to Japan Context on SWT",
        "authors": "Nguyen Duc Tuyen, Junji Kondoh, Kentaro Matsumoto, Takuji Funamoto",
        "venue": "International Conference on Electrical Engineering, Okinawa (Japan), (2016.7)",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-213",
        "title": "Investigate voltage fluctuations phenomenon since DGs reclosing subsequent to short disconnection",
        "authors": "Tran Thanh Son, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "International Conference on Electrical Engineering, Okinawa (Japan), (2016.7)",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-214",
        "title": "Various Scenarios of Using Capacitors as a Solution for Voltage Sags Caused by Anti-islanding Protection",
        "authors": "Tran Thanh Son, Nguyen Duc Tuyen, Goro Fujita, Funabashi",
        "venue": "The First International Conference on Advanced Technologies in Electrical, Electronic and Communication Engineering (ICATEC 2016), Danang, Vietnam, August 19-20, 2016",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-215",
        "title": "Remote Data Acquisition for Small Wind Turbine",
        "authors": "Nguyen Duc Tuyen, Matsumoto Kentaro, Funamoto Takuji, Junji Kondoh",
        "venue": "National Convention of IEEJ, Sendai (Japan), (2016.3)",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-216",
        "title": "Development of an FRT test system for a small wind turbine on real field (1) A resistor with automatic load control",
        "authors": "Takuji Funamoto, Kentaro Matsumoto, Hidetoshi Mizuno, Nguyen Duc Tuyen, Junji Kondoh",
        "venue": "National Convention of IEEJ, Sendai (Japan), (2016.3)",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-217",
        "title": "Development of an FRT test system for a small wind turbine on real field (2) operation of a PCS",
        "authors": "Kentaro Matsumoto, Takuji Funamoto, Nguyen Duc Tuyen, Junji Kondoh",
        "venue": "National Convention of IEEJ, Sendai (Japan), (2016.3)",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-218",
        "title": "The relationship between the PCS operating conditions and islanding detection time for SWT, New energy - Environment High Voltage Workshop",
        "authors": "Kentaro Matsumoto, Hidetoshi Mizuno, Nguyen Duc Tuyen, Kondoh Junji",
        "venue": "Kyoto University, Yoshida Campus International Science and Innovation Building, July 12-13, 2016. (in Japanese)",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-219",
        "title": "「実運用下の小形風車の発電出力変動計測」",
        "authors": "近藤 潤次，岡本 悠生，大塚 修司，Nguyen Duc Tuyen",
        "venue": "第38回風力エネルギー利用シンポジウム, 東京, 11/30-12/1, 2016",
        "year": 2016,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-220",
        "title": "PV-Active Power Filter Combination Supplies Power to Nonlinear Load and Compensates Utility Current",
        "authors": "Nguyen Duc Tuyen, Goro Fujita",
        "venue": "IEEE Power and Energy Technology Systems Journal, Vol.2, pp.32-42, March 2015. DOI",
        "year": 2015,
        "category": "international-journal",
        "quartile": "",
        "doi": "10.1109/JPETS.2015.2404355",
        "url": "https://doi.org/10.1109/JPETS.2015.2404355",
        "citations": 145
    },
    {
        "id": "pub-221",
        "title": "Adaptive Notch Filter Solution under Unbalanced and/or Distorted PCC Voltage for 3-phase 4-wire Shunt Active Power Filter with Sinusoidal Utility Current Strategy",
        "authors": "Nguyen Duy Dinh, Nguyen Duc Tuyen (corresponding), Goro Fujita, Toshihisa Funabashi",
        "venue": "IET Generation, Transmission & Distribution, Vol.9, No.13, pp. 1580 – 1596, Oct 2015. DOI",
        "year": 2015,
        "category": "international-journal",
        "quartile": "Q1",
        "doi": "10.1049/iet-gtd.2014.1017",
        "url": "https://doi.org/10.1049/iet-gtd.2014.1017",
        "citations": 40
    },
    {
        "id": "pub-222",
        "title": "Dual-Active-Bridge Series Resonant Converter: Reactive Power Minimization Using Phase-Shifting Combined Frequency Modulation",
        "authors": "Duy-Dinh NGUYEN, Khai Nguyen, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "International Universities Power Engineering Conference, Bristol (UK), (2015.9)",
        "year": 2015,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:D_sINldO8mEC",
        "citations": 30
    },
    {
        "id": "pub-223",
        "title": "Rapid and sensitive detection of clenbuterol using a fluorescence nanosensor based on diazo coupling mechanism",
        "authors": "TTH Tran, TM Huong Do, MH Hoang, DT Nguyen, QT Le, DN Nguyen, ...",
        "venue": "Advances in Natural Sciences: Nanoscience and Nanotechnology 6 (2), 025007",
        "year": 2015,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:HoB7MX3m0LUC",
        "citations": 8
    },
    {
        "id": "pub-224",
        "title": "Applying Adaptive Notch Filter in αβ-coordinate to improve 3-phase 4-wire shunt APF performance under non-ideal PCC voltage",
        "authors": "ND Tuyen, ND Dinh, G Fujita, T Funabashi",
        "venue": "2015 IEEE Power & Energy Society General Meeting, 1-5",
        "year": 2015,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:9yKSN-GCB0IC",
        "citations": 3
    },
    {
        "id": "pub-225",
        "title": "The trend of DC distribution system in Japan",
        "authors": "Nguyen Duc Tuyen, Bach Quoc Khanh",
        "venue": "Electricity & Life Review, ISSN: 0686-3883, September 2015 (in Vietnamese)",
        "year": 2015,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-226",
        "title": "Applying Adaptive Notch Filter in alpha-beta-coordinate to Improve 3-phase 4-wire Shunt APF Performance under Non-ideal PCC Voltage",
        "authors": "Nguyen Duc Tuyen, Nguyen Duy Dinh, Goro Fujita, Toshihisa Funabashi",
        "venue": "IEEE PES General Meeting, Denver, Colorado (USA), (2015.7)",
        "year": 2015,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-227",
        "title": "D-Q Control for Three-phase Dual-Active-Bridge Series Resonant Converter to be Applied in DC Transmission System",
        "authors": "Duy-Dinh NGUYEN, Khai Nguyen, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "International Universities Power Engineering Conference, Bristol (UK), (2015.9)",
        "year": 2015,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-228",
        "title": "Dual-Power Loss Minimization by Combining Phase-shift and Frequency Modulation Technique for Dual Bridge Series Resonant Converter",
        "authors": "Duy-Dinh NGUYEN, Khai Nguyen, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "International Universities Power Engineering Conference, Bristol (UK), (2015.9)",
        "year": 2015,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-229",
        "title": "Wind Speed Data Acquisition Applied to Wind Turbine Power Estimation",
        "authors": "Nguyen Duc Tuyen, Kondoh Junji",
        "venue": "Anual Meeting of IEEJ, B-Division, Nagoya (Japan), (2015.8)",
        "year": 2015,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-230",
        "title": "Optimal Distributed Generation and capacitor coordination for power loss minimization",
        "authors": "Mohd Nabil Muhtazaruddin, Nguyen Duc Tuyen, Goro Fujita, Jasrul Jamani Bin Jamian",
        "venue": "IEEE PES Transmission & Distribution Conference & Exposition, Chicago (USA), (2014.4)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:_FxGoFyzp5QC",
        "citations": 18
    },
    {
        "id": "pub-231",
        "title": "Investigation of ZVS Condition for Dual-Active-Bridge Converter using Dual-Phase-Shift Modulation",
        "authors": "Nguyen Duy Dinh, Nguyen Duc Tuyen, Mohd Nabil Bin Muhtazaruddin, Goro Fujita",
        "venue": "IEEE PES Asia-Pacific Power and Energy Engineering Conference, Hongkong (China), (2014.12)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:eJXPG6dFmWUC",
        "citations": 12
    },
    {
        "id": "pub-232",
        "title": "Shunt Active Power Filter for 3-phase 3-wire Nonlinear Load under Unbalanced and Distorted PCC Voltage using Notch Adaptive Filter",
        "authors": "Nguyen Duc Tuyen, Mohd Nabil Muhtazaruddin, Goro Fujita, T.Funabashi",
        "venue": "2014 IEEE PES Transmission & Distribution Conference & Exposition, Chicago (USA), (2014.4)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:kNdYIx-mwKoC",
        "citations": 8
    },
    {
        "id": "pub-233",
        "title": "Optimal placement and sizing of SVC by using various meta-heuristic optimization methods",
        "authors": "Khai Phuc Nguyen, Goro Fujita, Nguyen Duc Tuyen, Vo Ngoc Dieu, Toshihisa Funabashi",
        "venue": "The 2nd IEEE Conference on Power Engineering and Renewable Energy, Bali (Indonesia), (2014.12)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:RGFaLdJalmkC",
        "citations": 8
    },
    {
        "id": "pub-234",
        "title": "3-phase 4-wire Shunt APF under Non-ideal PCC Voltage using Adaptive Notch Filter",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, Mohd Nabil Muhtazaruddin",
        "venue": "IEEE PES General Meeting, Washington DC (USA), (2014.7)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:LkGwnXOMwfcC",
        "citations": 2
    },
    {
        "id": "pub-235",
        "title": "Controller Design for PV-Active Power Filter Combination Based on Instantaneous Power Theory",
        "authors": "Junpei Takehara, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "International Conference on Electrical Engineering, Jeju (Korea), (2014.6)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-236",
        "title": "Adaptive Notch Filter: A Solution for 3-phase 4-wire Shunt Active Power Filter under Non-ideal Voltage",
        "authors": "Nguyen Duc Tuyen, Junpei Takehara, Mohd Nabil Bin Muhtazaruddin, Goro Fujita",
        "venue": "International Conference on Electrical Engineering, Jeju (Korea), (2014.6)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-237",
        "title": "Effect of reverse power flow in determine optimal distributed generation sizing and location",
        "authors": "Mohd Nabil Bin Muhtazaruddin, Jasrul Jamani Bin Jamian, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "International Conference on Electrical Engineering, Jeju (Korea), (2014.6)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-238",
        "title": "PV Unit Supplies Nonlinear Load",
        "authors": "Nguyen Duc Tuyen, Toyokawa Keisuke, Goro Fujita",
        "venue": "Grand Renewable Energy, Tokyo (Japan), (2014.7)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-239",
        "title": "Verification of small hydroelectric generation model using measured value",
        "authors": "K.Katano, N. Kaneko, Nguyen Duc Tuyen, G. Fujita",
        "venue": "Grand Renewable Energy, Tokyo (Japan), (2014.7)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-240",
        "title": "PV-APF Combination System",
        "authors": "Junpei Takehara, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "National Convention of IEEJ, Ehime (Japan), (2014.3)",
        "year": 2014,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-241",
        "title": "An Integrated Function of Photovoltaic Generator Supplying to Nonlinear Load: Active Power Filter",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "International Universities Power Engineering Conference, Dublin (Ireland), (2013.9)",
        "year": 2013,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:qUcmZB5y_30C",
        "citations": 2
    },
    {
        "id": "pub-242",
        "title": "Estimated-Impedance Islanding Detection Method for Grids with High Motor Penetration",
        "authors": "Nguyen Tuyen Duc, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "IEEJ Transactions on Electrical and Electronic Engineering, Vol.8, No.5, pp.446–pp.455, September, 2013. DOI",
        "year": 2013,
        "category": "international-journal",
        "quartile": "Q3",
        "doi": "https://doi.org/10.1002/tee.21879",
        "url": "https://doi.org/10.1002/tee.21879",
        "citations": 1
    },
    {
        "id": "pub-243",
        "title": "Confronting damage, recover and challenges by Japanese power system beyond Great East Japan Earthquake",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, Bach Quoc Khanh",
        "venue": "pp.19-27, Electricity & Life Review, ISSN: 0686-3883, September 2013 (in Vietnamese)",
        "year": 2013,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-244",
        "title": "Establishing Smart Communities in Japan",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, Kenji Iba, Bach Quoc Khanh",
        "venue": "pp.19-27, Electricity & Life Review, ISSN: 0686-3883, November 2013 (in Vietnamese)",
        "year": 2013,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-245",
        "title": "Modelling a SOFC power unit using natural gas fed directly",
        "authors": "Nguyen Duc Tuyen, Goro Fujita",
        "venue": "in Book “Advances in natural gas technology”, IntechOpen, pp.497-524, 2012/4/11",
        "year": 2012,
        "category": "book-chapter",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:aqlVkmm33-oC",
        "citations": 13
    },
    {
        "id": "pub-246",
        "title": "Adaptive Notch Filter for Synchronization and Islanding Detection using Negative-sequence Impedance Measurement",
        "authors": "NGUYEN Tuyen Duc, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "IEEJ Transactions on Power and Energy, pp.240-pp.250, Vol.7, No.3, B-section, March, 2012. DOI",
        "year": 2012,
        "category": "international-journal",
        "quartile": "Q2",
        "doi": "https://doi.org/10.1002/tee.21724",
        "url": "https://doi.org/10.1002/tee.21724",
        "citations": 9
    },
    {
        "id": "pub-247",
        "title": "Synchronization and Islanding Detection of Dispersed Generation using Adaptive Notch Filter",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, Toshihisa Funabashi, Masakatsu Nomura",
        "venue": "No.162, pp34-39, Electricity & Life Review, ISSN: 0686-3883, October 2012. (in Vietnamese)",
        "year": 2012,
        "category": "domestic-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:roLk4NBRz8UC",
        "citations": 4
    },
    {
        "id": "pub-248",
        "title": "Reliable Impedance Islanding Detection for Power Distribution Systems with High Motor Penetration",
        "authors": "Nguyen Duc Tuyen, Goro Fujita",
        "venue": "Asia-Pacific Power and Energy Engineering Conference, Shanghai (China), (2012.3)",
        "year": 2012,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:u-x6o8ySG0sC",
        "citations": 2
    },
    {
        "id": "pub-249",
        "title": "Analysis of Current-Controller in Grid-Connected and Islanded Operation of DG Unit",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "International Universities Power Engineering Conference, London (England), (2012.9)",
        "year": 2012,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:4TOpqqG69KYC",
        "citations": 1
    },
    {
        "id": "pub-250",
        "title": "Subsequence Action to Eliminate Blackout after Detecting Islanding using Solid State Transfer Switch Implemented in PSCAD/EMTDC",
        "authors": "NGUYEN Tuyen Duc, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "JICEE, ISSN: 2233-5951, Korea, pp.45-pp.52, Vol.2, No.1, Jan, 2012. DOI",
        "year": 2012,
        "category": "international-journal",
        "quartile": "",
        "doi": "https://doi.org/10.5370/JICEE.2012.2.1.045",
        "url": "https://doi.org/10.5370/JICEE.2012.2.1.045",
        "citations": 0
    },
    {
        "id": "pub-251",
        "title": "Power Electronic Interface with Islanding Detection Function and Unbalanced Fault Ride-through Capability Based on Negative-sequence Current Injection",
        "authors": "NGUYEN Tuyen Duc, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "Journal of Energy and Power Engineering, ISSN 1934-8975, USA, Vol.6, No.11, pp.1816-pp.1825, Dec, 2012. DOI",
        "year": 2012,
        "category": "international-journal",
        "quartile": "",
        "doi": "10.17265/1934-8975/2012.11.013",
        "url": "https://doi.org/10.17265/1934-8975/2012.11.013",
        "citations": 0
    },
    {
        "id": "pub-252",
        "title": "Load Characteristics Influence on Current Controller of Dispersed Generation during Transient-to-island mode",
        "authors": "Nguyen Duc Tuyen, Goro Fujita",
        "venue": "The 6th South East Asian Technical University Consortium Symposium (SEATUC), Bangkok (Thailand), (2012.3)",
        "year": 2012,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:R3hNpaxXUhUC",
        "citations": 0
    },
    {
        "id": "pub-253",
        "title": "Current-Controller at Transient-to-island Mode of Power Electronic Interface Dispersed Generation",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "International Conference on Electrical Engineering, Kanazawa (Japan), (2012.7)",
        "year": 2012,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:bFI3QPDXJZMC",
        "citations": 0
    },
    {
        "id": "pub-254",
        "title": "Distribution Generation Coordination by Using Artificial Immune Bee Colony",
        "authors": "Mohd Nabil Muhtazaruddin, Jasrul Jamani Bin Jamian, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "The 8th South East Asian Technical University Consortium Symposium (SEATUC), Johor Bahru (Malaysia), (2012.3)",
        "year": 2012,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-255",
        "title": "Enhanced Droop Controller to Remain Rated Voltage and Frequency of Islanded Entity",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "Anual Meeting of IEEJ, B-Division, Hokkaido (Japan), (2012.9)",
        "year": 2012,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-256",
        "title": "ィーゼル発電機を用いたマイクログリッドの自立分散制御",
        "authors": "Hoshino Tomohiro, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "(Autonomous Decentralized Control of Micro Grid with Diesel Generator), Anual Meeting of IEEJ, B-Division, Hokkaido (Japan), (2012.9)",
        "year": 2012,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-257",
        "title": "Modeling a SOFC Power Unit Using Directly-Fed Natural Gas",
        "authors": "ND Tuyen, G Fujita",
        "venue": "Default journal",
        "year": 2012,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:blknAaTinKkC",
        "citations": 0
    },
    {
        "id": "pub-258",
        "title": "Negative-sequence Current Injection of Dispersed Generation for Islanding Detection and Unbalanced Fault Ride-through",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "International Universities Power Engineering Conference, Soest (Germany), (2011.9)",
        "year": 2011,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:BqipwSGYUEgC",
        "citations": 27
    },
    {
        "id": "pub-259",
        "title": "Synchronization and Islanding Detection of Dispersed Generation Using Adaptive Notch Filter",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "Applied Power Electronics Conference, Forth Worth (USA), (2011.3)",
        "year": 2011,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:roLk4NBRz8UC",
        "citations": 4
    },
    {
        "id": "pub-260",
        "title": "Using solid state transfer switch after detecting islanding to eliminate blackout",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "The 5th South East Asian Technical University Consortium Symposium, Hanoi (Vietnam), (2011.2)",
        "year": 2011,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:HDshCWvjkbEC",
        "citations": 0
    },
    {
        "id": "pub-261",
        "title": "Connecting Islanded Entity to Backup Terminals upon Detecting Islanding Using Solid State Transfer Switch",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "International Conference on Electrical Engineering, Hong Kong, (2011.7)",
        "year": 2011,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-262",
        "title": "Eﬀect of Negative-sequence Current Generation in Islanding Detection and Unbalanced Fault Ride-through",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "Anual Meeting of IEEJ, B-Division, Fukui (Japan), (2011.8-9)",
        "year": 2011,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-263",
        "title": "Islanding Detection with Negative Sequence Impedance Measurement Method",
        "authors": "Hoshino Tomohiro, Wataru Nishimura, Nguyen Duc Tuyen, Goro Fujita",
        "venue": "National Conventionof IEEJ, Hiroshima (Japan), (2011.3)",
        "year": 2011,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-264",
        "title": "N. D. Tuyen",
        "authors": "A. Rizqiawan",
        "venue": "藤田 吾郎, 「学界情報 国際会議レポート, The 26th IEEE Annual Applied Power Electronics Conference and Exposition (APEC2011)」March 6-10, 2011, Fort Worth, Texas, USA, 電気学会論文誌Ｄ（産業応用部門誌）, Vol. 131 (2011) No. 6, 公開日: 2011年06月01日, DOI:",
        "year": 2011,
        "category": "conference",
        "quartile": "",
        "doi": "http://doi.org/10.1541/ieejias.131.NL6_4",
        "url": "http://doi.org/10.1541/ieejias.131.NL6_4",
        "citations": 0
    },
    {
        "id": "pub-265",
        "title": "Effect of Negative-sequence Current Generation in Islanding Detection and Unbalanced Fault Ride-through",
        "authors": "ND Tuyen, G Fujita, T Funabashi, M Nomura",
        "venue": "Default journal, 16-22",
        "year": 2011,
        "category": "international-journal",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:BrmTIyaxlBUC",
        "citations": 0
    },
    {
        "id": "pub-266",
        "title": "Conference Report: The 26th IEEE Annual Applied Power Electronics Conference and Exposition (APEC2011) March 6-10, 2011, Fort Worth, Texas, USA",
        "authors": "A Rizqiawan, ND Tuyen, G Fujita",
        "venue": "IEEJ Transactions on Industry Applications 131 (6), NL6_4",
        "year": 2011,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:kRWSkSYxWN8C",
        "citations": 0
    },
    {
        "id": "pub-267",
        "title": "Using Simulink Simulation to Evaluate Load Following Characteristics of SOFC Generator with Heat Exchanger Considering Heat Balance",
        "authors": "NGUYEN Tuyen Duc, Goro Fujita, G.Yokoyama, R.Koyanagi, T.Funabashi, M.Nomura",
        "venue": "IEEJ Transactions on Power and Energy, pp.501-pp.509, Vol.130, No.5, B-Section, July, 2010. DOI",
        "year": 2010,
        "category": "international-journal",
        "quartile": "Q2",
        "doi": "https://doi.org/10.1541/ieejpes.130.501",
        "url": "https://doi.org/10.1541/ieejpes.130.501",
        "citations": 1
    },
    {
        "id": "pub-268",
        "title": "Technical Obstacles of Dispersed Generation Penetration into Distribution Power System",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "The 4th South East Asian Technical University Consortium Symposium (SEATUC), Tokyo (Japan), (2010.2)",
        "year": 2010,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:mVmsd5A6BfQC",
        "citations": 0
    },
    {
        "id": "pub-269",
        "title": "Evaluate Detection Methods for Anti-Islanding of Dispersed Generation",
        "authors": "Nguyen Duc Tuyen, Goro Fujita",
        "venue": "International Symposium on Sustainable Energy, Tokyo (Japan), (2010.9)",
        "year": 2010,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:9ZlFYXVOiuMC",
        "citations": 0
    },
    {
        "id": "pub-270",
        "title": "Impedance Measurements for a Reliable Islanding Detection Method",
        "authors": "Koda, Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "Anual Meeting of IEEJ, D-Division, Tokyo (Japan), (2010.8)",
        "year": 2010,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "#",
        "citations": 0
    },
    {
        "id": "pub-271",
        "title": "Islanding Detection Method Based on Two Rounds of Impedance Measurement",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "Anual Meeting of IEEJ, B-Division, Kyushu, (2010.9)",
        "year": 2010,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:wbdj-CoPYUoC",
        "citations": 0
    },
    {
        "id": "pub-272",
        "title": "Load Following Characteristics and Operating Temperature Control of SOFC Simulation",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "IEEE T&D Asia Conference and Exposition, Seoul (Korea), (2009.10)",
        "year": 2009,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&pagesize=100&citation_for_view=89Jk4L0AAAAJ:mvPsJ3kp5DgC",
        "citations": 3
    },
    {
        "id": "pub-273",
        "title": "Establishing Simulink Simulation Method for Evaluate Load Following Characteristics and Heat Control of SOFC Power Unit",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "Society for Simulation Technology, Tokyo (Japan), (2009.6)",
        "year": 2009,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:UeHWp8X0CEIC",
        "citations": 0
    },
    {
        "id": "pub-274",
        "title": "Using Simulink Simulation to Evaluate Load Following Characteristics of SOFC Generator",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "Anual Meeting of IEEJ, B-Division, Tokyo (Japan), (2009.8)",
        "year": 2009,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:5ugPr518TE4C",
        "citations": 0
    },
    {
        "id": "pub-275",
        "title": "Typical Fuel Cell Technology for Dispersed Generation",
        "authors": "Nguyen Duc Tuyen, Goro Fujita, T.Funabashi, M.Nomura",
        "venue": "International Symposium on Sustainable Energy, Tokyo (Japan), (2008.12)",
        "year": 2008,
        "category": "conference",
        "quartile": "",
        "doi": "",
        "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=89Jk4L0AAAAJ&cstart=100&pagesize=100&citation_for_view=89Jk4L0AAAAJ:u_35RYKgDlwC",
        "citations": 0
    }
  ],

  // 4. Projects Dataset
  projects: [
    {
      id: "proj-1",
      title: "Rooftop PV SCADA Monitoring, Fault Detection & Array Reconfiguration",
      org: "Hanoi University of Science and Technology (HUST)",
      period: "2021 – 2024",
      tags: ["Solar PV", "SCADA", "Hardware", "Optimization"],
      desc: "Built a complete hardware-software testbed on HUST D9 building comprising a 3.6 kW solar array, DAQ data logger, smart relays, and automated switching matrices to eliminate partial shading losses."
    },
    {
      id: "proj-2",
      title: "Behind-the-Meter Solar PV in Vietnam: Regulatory & Technical Framework",
      org: "GIZ (German Agency for International Cooperation) & EREA",
      period: "May 2021 – Dec 2021",
      tags: ["GIZ", "Policy", "Solar", "Self-Consumption"],
      desc: "Technical consultation for Electricity and Renewable Energy Authority (EREA) on incentive mechanisms, self-consumption guidelines, and grid impact mitigation for behind-the-meter solar systems."
    },
    {
      id: "proj-3",
      title: "Smart Grid Roadmap Development for Vietnam Power System",
      org: "GIZ & Ministry of Industry and Trade (MOIT)",
      period: "Dec 2020 – Mar 2022",
      tags: ["Smart Grid", "Roadmap", "Policy", "SCADA"],
      desc: "Comprehensive analysis of Vietnam's national grid infrastructure, interviews with dispatch centers, regulatory review, and technical roadmap for advanced automation, AMI, and VPP deployment."
    },
    {
      id: "proj-4",
      title: "Battery Energy Storage System (BESS) Deployment in Vietnam Power System",
      org: "VIETSE (Vietnam Initiative for Energy Transition)",
      period: "Jan 2021 – Oct 2021",
      tags: ["VIETSE", "BESS", "Stability", "Ancillary Services"],
      desc: "Landmark study assessing international BESS experiences, grid frequency stability simulation, investment cost-benefit analysis, and policy recommendations for curtailment reduction in Vietnam."
    },
    {
      id: "proj-5",
      title: "Viet Nam Climate Promise — Youth4Climate Learning & Energy Transition",
      org: "UNDP (United Nations Development Programme)",
      period: "2021 – 2023",
      tags: ["UNDP", "Youth4Climate", "Education", "Training"],
      desc: "Empowering youth leadership in sustainable energy: developed 5 multimedia educational modules, conducted training workshops for 70+ young engineers, and guided youth-led community clean energy projects."
    },
    {
      id: "proj-6",
      title: "SCADA / DCS / EMS Technical Assessment for Dispatching Centers",
      org: "National Load Dispatch Center (A0, EVN)",
      period: "Jan 2021 – Feb 2021",
      tags: ["EVN", "A0", "SCADA/EMS", "DCS"],
      desc: "Assessed control protocols (IEC 60870-5-104, IEC 61850), hardware architecture, and communication reliability for Vietnam regional and national dispatching systems."
    },
    {
      id: "proj-7",
      title: "Electric Vehicle (EV) Grid Impact & Incentive Policy Study",
      org: "GreenID (Green Innovation and Development Centre)",
      period: "Dec 2021 – Feb 2022",
      tags: ["GreenID", "EV", "Policy", "Charging"],
      desc: "Analyzed distribution grid loading and charging profiles, recommending policy mechanisms, time-of-use tariffs, and public charging standards for Vietnam."
    },
    {
      id: "proj-8",
      title: "Rooftop Solar Integration in Huong Khe Distribution Grid",
      org: "Ha Tinh Power Company (PC Ha Tinh, EVN CPC)",
      period: "May 2021 – Jun 2022",
      tags: ["EVN CPC", "Distribution Grid", "Voltage Stability"],
      desc: "Grid simulation on PSS/ADEPT and DigSILENT PowerFactory to analyze reverse power flow, voltage swell, and protection coordination under high rooftop PV penetration."
    }
  ],

  // 5. Achievements Dataset
  achievements: [
    {
      id: "ach-1",
      title: "Battle of Minds 2021 — Global Innovation Challenge",
      rank: "1st Place Vietnam & 5th Place Globally",
      year: 2021,
      org: "BAT Global",
      desc: "Outperformed 200+ universities across Vietnam and competed among 650+ international teams from 13 countries with an innovative renewable energy sharing solution ($3,000 national prize)."
    },
    {
      id: "ach-2",
      title: "National Scientific Research Contest for University Students",
      rank: "2nd Prize (Ministry of Education & Training)",
      year: 2021,
      org: "MOET Vietnam",
      desc: "HUST representative team won Second Prize nationwide among 460+ research teams from 98 universities with deep learning solar radiation forecasting software."
    },
    {
      id: "ach-3",
      title: "Student Forum on Sustainable Energy & Electrical Engineering",
      rank: "Gold & Bronze Articles, Best Presentation",
      year: "2020 – 2022",
      org: "100RE Lab & HUST",
      desc: "Annual academic student forum attracting hundreds of student researchers. PV team won Gold Article; Hydrogen team won Best Presentation and Bronze Article in 2022."
    },
    {
      id: "ach-4",
      title: "ASEAN Energy Youth Awards & Youth For Climate Contest",
      rank: "Winner / Top Finalist",
      year: 2021,
      org: "ASEAN Centre for Energy (ACE) & UNDP",
      desc: "Recognized across Southeast Asia for pioneering clean energy solutions, community awareness programs, and youth-driven climate innovation."
    }
  ],

  // 6. News & Blog Articles (Full authentic publication dataset)
  news: [
    {
      id: "news-1",
      title: "Workshop: Strengthening Collaboration in Renewable Energy Education and Research between HUST and UoB",
      slug: "workshop-hust-uob-renewable-energy-collaboration",
      category: "International Collaboration",
      date: "Dec 12, 2025",
      readTime: "4 min read",
      author: "Khánh Đào",
      authorRole: "100RE Editorial Board",
      authorAvatar: "assets/images/logo.jpg",
      views: "1.4k views",
      image: "assets/images/banner_pv.jpg",
      imageCaption: "Toàn cảnh buổi Workshop Hợp tác Giáo dục và Nghiên cứu giữa ĐHBK Hà Nội và ĐH Bradford (Vương quốc Anh) tại tòa nhà Alumni HUST.",
      excerpt: "Sáng ngày 10/12/2025, tại tầng 1 tòa nhà Alumni, Đại học Bách Khoa Hà Nội, workshop 'Hợp tác Nghiên cứu và Đào tạo giữa Đại học Bách khoa Hà Nội và Đại học Bradford' đã diễn ra thành công tốt đẹp, mở ra lộ trình cụ thể cho các mô hình đào tạo chuyển tiếp và nghiên cứu chuyên sâu về năng lượng tái tạo.",
      tags: ["HUST", "University of Bradford", "Renewable Energy", "Transnational Education", "UK-Vietnam"],
      content: `
        <p class="article-lead">Sáng ngày 10/12/2025, tại tầng 1 tòa nhà Alumni, Đại học Bách Khoa Hà Nội, workshop <strong>"Hợp tác Nghiên cứu và Đào tạo giữa Đại học Bách khoa Hà Nội và Đại học Bradford”</strong> đã diễn ra thành công tốt đẹp. Sự kiện đánh dấu bước tiến quan trọng trong việc triển khai dự án đối tác giáo dục xuyên quốc gia, đồng thời mở ra lộ trình cụ thể cho các mô hình đào tạo chuyển tiếp và nghiên cứu chuyên sâu về năng lượng tái tạo.</p>
        
        <p>Tham dự sự kiện có sự hiện diện của các vị thầy cô quản lý, cùng đông đảo giảng viên và các em sinh viên, những người trực tiếp tham gia định hướng chiến lược và bảo đảm các thỏa thuận hợp tác giữa hai đại học được triển khai hiệu quả.</p>

        <h3>Đại biểu tham dự từ hai trường đại học</h3>
        <p><strong>Về phía Đại học Bradford (Vương quốc Anh):</strong></p>
        <ul>
          <li><strong>GS. Ben Whiteside</strong> – Giám đốc Viện Kỹ thuật số và Tương lai Bền vững.</li>
          <li><strong>TS. Cường Đào</strong> – Giám đốc chương trình Thạc sĩ Năng lượng Tái tạo & Bền vững.</li>
        </ul>

        <p><strong>Về phía Đại học Bách Khoa Hà Nội (HUST):</strong></p>
        <ul>
          <li><strong>PGS.TS Nguyễn Hữu Thanh</strong> – Hiệu trưởng Trường Điện – Điện tử.</li>
          <li><strong>PGS.TS Nguyễn Đức Tuyên</strong> – Trưởng phòng thí nghiệm 100RE Lab / PGRE.</li>
          <li><strong>PGS.TS Nguyễn Quốc Minh</strong> – Phó Trưởng khoa Kỹ thuật Điện.</li>
          <li><strong>PGS.TS Trương Thu Hương</strong> – Phó Trưởng khoa Kỹ thuật Truyền thông.</li>
        </ul>

        <blockquote>
          "Hợp tác quốc tế trong đào tạo và nghiên cứu là chìa khóa để trang bị cho sinh viên năng lực toàn cầu và giải quyết các thách thức cấp bách của chuyển dịch năng lượng tại Việt Nam."
          <cite>— PGS.TS Nguyễn Đức Tuyên, Trưởng PTN 100RE</cite>
        </blockquote>

        <h3>Chiến lược phát triển và chương trình song bằng 2026–2028</h3>
        <p>Tại diễn đàn, PGS.TS Nguyễn Đức Tuyên đã có bài phát biểu mở đầu, phân tích bối cảnh của workshop, nhấn mạnh tầm quan trọng của hợp tác quốc tế hướng tới sinh viên và giảng viên trong bối cảnh chuyển dịch năng lượng toàn cầu. Tiếp nối định hướng đó, PGS.TS Nguyễn Quốc Minh đã có bài trình bày tổng quan về năng lực nghiên cứu và chương trình đào tạo của HUST trong lĩnh vực năng lượng và chuyển dịch năng lượng, khẳng định sự sẵn sàng của nhà trường trong việc tiếp nhận các chương trình tiên tiến.</p>

        <p>Bên cạnh đó, các chuyên gia từ Vương quốc Anh cũng mang đến những thông tin giá trị. TS. Cường Đào đã giới thiệu dự án "Hợp tác giáo dục xuyên quốc gia Anh - Việt", trong khi GS. Ben Whiteside chia sẻ về các hướng nghiên cứu mũi nhọn tại Viện kỹ thuật số và Tương lai bền vững.</p>

        <p>Đặc biệt, hội trường đã dành sự quan tâm lớn cho phần chia sẻ của PGS.TS Trương Thu Hương. Với kinh nghiệm dày dặn trong môi trường học thuật quốc tế, cô đã mang đến những góc nhìn thực tiễn về phương pháp nghiên cứu và học tập giữa Anh và Việt Nam, truyền cảm hứng mạnh mẽ cho các sinh viên và giảng viên trẻ có mặt tại sự kiện.</p>

        <p>Các nội dung trao đổi tập trung vào xu hướng, kinh nghiệm và định hướng triển khai các chương trình Song bằng, mô hình chuyển tiếp và các nhóm nghiên cứu chung. Từ đó, các bên bày tỏ mong muốn từng bước đưa các thỏa thuận này vào thực tế trong giai đoạn 2026-2028, đồng thời mở ra cơ hội tăng cường trao đổi sinh viên và giảng viên giữa hai trường.</p>

        <h3>Kết luận và Định hướng tương lai</h3>
        <p>Kết thúc phiên thảo luận, PGS.TS Nguyễn Hữu Thanh đã có bài phát biểu tổng kết đầy tâm huyết. Thầy nhấn mạnh rằng sự kiện này không chỉ dừng lại ở những biên bản ghi nhớ, mà là bước khởi đầu cho một chiến lược dài hạn nhằm nâng tầm vị thế của Đại học Bách Khoa Hà Nội trên bản đồ giáo dục kỹ thuật thế giới.</p>
        
        <p>Sự kiện Workshop HUST - UoB là một dấu mốc quan trọng, khẳng định vai trò tiên phong của Trường Điện - Điện tử và Đại học Bách khoa Hà Nội trong việc thúc đẩy hợp tác giáo dục xuyên quốc gia và phát triển nguồn nhân lực năng lượng tái tạo, đồng thời thể hiện tinh thần hội nhập quốc tế và cam kết đóng góp tích cực vào sự phát triển bền vững tại Việt Nam.</p>
      `
    },
    {
      id: "news-2",
      title: "100RE Lab Member Phan Van Long in the Launching Ceremony of Special Report on Youth For Climate Action",
      slug: "phan-van-long-youth-for-climate-action-special-report",
      category: "Youth & Climate Action",
      date: "Oct 5, 2025",
      readTime: "4 min read",
      author: "100RE Media Team",
      authorRole: "Communications Lead",
      authorAvatar: "assets/images/logo.jpg",
      views: "1.1k views",
      image: "assets/images/banner_ai.jpg",
      imageCaption: "Thành viên 100RE Lab Phan Văn Long cùng các đại biểu thanh niên và chuyên gia UNDP tại lễ ra mắt Báo cáo đặc biệt.",
      excerpt: "Thành viên 100RE Lab Phan Văn Long đại diện cho thế hệ kỹ sư trẻ tham dự lễ công bố báo cáo đặc biệt 'Thanh niên Việt Nam hành động vì Khí hậu', khẳng định vai trò nòng cốt của tuổi trẻ trong hành trình Net Zero 2050.",
      tags: ["Youth4Climate", "UNDP", "Climate Action", "Net Zero 2050", "HUST Engineers"],
      content: `
        <p class="article-lead">Vừa qua, tại Hà Nội, Chương trình Phát triển Liên Hợp Quốc (UNDP) phối hợp cùng Cục Biến đổi Khí hậu (Bộ Tài nguyên và Môi trường) và Trung ương Đoàn TNCS Hồ Chí Minh đã tổ chức Lễ ra mắt Báo cáo Đặc biệt <strong>"Thanh niên Việt Nam hành động vì Khí hậu 2022–2025"</strong>. Thành viên 100RE Lab – kỹ sư trẻ Phan Văn Long đã vinh dự tham gia và đóng góp ý kiến tại diễn đàn quan trọng này.</p>

        <h3>Vai trò tiên phong của thế hệ trẻ trong chuyển dịch năng lượng</h3>
        <p>Báo cáo đặc biệt tổng hợp các sáng kiến, giải pháp công nghệ và mô hình khởi nghiệp xanh do thanh niên và sinh viên kỹ thuật thực hiện trên toàn quốc. Tại sự kiện, các đại biểu đã thảo luận về những cơ chế tài chính, chuyển giao công nghệ sạch và cơ hội phát triển nghề nghiệp trong ngành năng lượng tái tạo.</p>

        <blockquote>
          "Thế hệ trẻ không chỉ là những người chịu tác động mạnh mẽ nhất của biến đổi khí hậu, mà chính là lực lượng sáng tạo nhất với các công nghệ số, trí tuệ nhân tạo và kỹ thuật xanh để hiện thực hóa cam kết Net Zero 2050 của Việt Nam."
          <cite>— Đại diện UNDP Việt Nam phát biểu tại buổi lễ</cite>
        </blockquote>

        <h3>Đóng góp thực tiễn từ phòng thí nghiệm 100RE Lab</h3>
        <p>Trong khuôn khổ chương trình, Phan Văn Long cùng nhóm nghiên cứu 100RE Lab đã giới thiệu các mô hình giáo dục cộng đồng về năng lượng bền vững (SE4Y - Sustainable Energy for Youth), các bộ công cụ tính toán phát thải carbon và giải pháp ứng dụng hệ thống điện mặt trời mái nhà có lưu trữ BESS cho các vùng nông thôn.</p>

        <p>Sự tham gia tích cực của các thành viên 100RE Lab tại các diễn đàn cấp quốc gia tiếp tục khẳng định cam kết của phòng thí nghiệm trong việc gắn liền nghiên cứu hàn lâm với trách nhiệm xã hội và lan tỏa tinh thần hành động vì khí hậu đến cộng đồng.</p>
      `
    },
    {
      id: "news-3",
      title: "Technical Seminar & Workshop on Hydrogen in Microgrids and HOMER Pro Simulation Tool",
      slug: "seminar-hydrogen-in-microgrids-homer-pro",
      category: "Scientific Workshops",
      date: "Oct 3, 2025",
      readTime: "3 min read",
      author: "Hydrogen Research Group",
      authorRole: "Technical Lead",
      authorAvatar: "assets/images/logo.jpg",
      views: "980 views",
      image: "assets/images/banner_hydrogen.jpg",
      imageCaption: "Buổi tọa đàm chuyên đề và hướng dẫn thực hành phần mềm mô phỏng HOMER Pro tại phòng thí nghiệm D9-300.",
      excerpt: "Nhóm nghiên cứu Hydrogen thuộc 100RE Lab tổ chức tọa đàm chuyên đề về tích hợp hệ thống lưu trữ Hydrogen trong lưới điện siêu nhỏ (Microgrid) và thực hành phần mềm mô phỏng tối ưu HOMER Pro.",
      tags: ["Hydrogen", "HOMER Pro", "Microgrid", "NREL", "Techno-Economic Analysis"],
      content: `
        <p class="article-lead">Trong xu thế chuyển dịch sang năng lượng xanh và bền vững toàn cầu, việc tích hợp <strong>Hydro xanh (Green Hydrogen)</strong> vào lưới điện siêu nhỏ (Microgrid) đang mở ra những cơ hội đột phá cho hệ thống điện tương lai. Nhằm cập nhật kiến thức chuyên sâu và nâng cao kỹ năng nghiên cứu, nhóm nghiên cứu Hydrogen thuộc 100RE Lab đã tổ chức buổi Tọa đàm kỹ thuật nội bộ.</p>

        <h3>Nội dung trọng tâm của buổi Seminar</h3>
        <ul>
          <li><strong>Giới thiệu phần mềm HOMER Pro:</strong> Công cụ mô phỏng chuẩn mực quốc tế do NREL (Phòng Thí nghiệm Năng lượng Tái tạo Quốc gia Hoa Kỳ) phát triển, hỗ trợ thiết kế tối ưu hệ thống năng lượng lai ghép (Hybrid Renewable Systems).</li>
          <li><strong>Mô hình hóa điện phân nước (Electrolyzer) và Pin nhiên liệu (Fuel Cell):</strong> Phân tích hiệu suất chuyển đổi năng lượng từ nguồn điện gió/mặt trời dư thừa sang dạng lưu trữ Hydrogen dài hạn.</li>
          <li><strong>Tối ưu hóa chi phí vòng đời (LCOE & NPC):</strong> Tính toán bài toán kinh tế kỹ thuật cho các kịch bản lưới điện đảo biệt lập và khu công nghiệp Net Zero.</li>
        </ul>

        <blockquote>
          "Hydrogen đóng vai trò như một giải pháp lưu trữ năng lượng theo mùa (Seasonal Storage), giải quyết triệt để bài toán cắt giảm công suất tái tạo khi tỷ trọng điện gió và điện mặt trời vượt ngưỡng 50% tổng công suất phụ tải."
        </blockquote>

        <p>Buổi workshop đã thu hút sự tham gia nhiệt tình của hơn 25 thành viên nghiên cứu sinh, học viên cao học và sinh viên đề tài tốt nghiệp tại lab. Các thành viên đã trực tiếp thực hành xây dựng kịch bản cấp điện tự hòa lưới và độc lập trên phần mềm HOMER Pro dưới sự hướng dẫn của các nghiên cứu viên chính.</p>
      `
    },
    {
      id: "news-4",
      title: "100RE Lab Researchers Win Best Paper Award at GMSARN 2024 International Conference",
      slug: "gmsarn-2024-best-paper-award",
      category: "Awards & Recognition",
      date: "Nov 28, 2024",
      readTime: "3 min read",
      author: "100RE Editorial Board",
      authorRole: "Editorial Committee",
      authorAvatar: "assets/images/logo.jpg",
      views: "1.6k views",
      image: "assets/images/banner_smartgrid.jpg",
      imageCaption: "Đoàn cán bộ và nghiên cứu sinh 100RE Lab nhận chứng nhận Best Paper Award tại Hội nghị GMSARN 2024.",
      excerpt: "Đoàn nghiên cứu 100RE Lab xuất sắc giành giải thưởng Báo cáo xuất sắc (Best Paper Award) tại Hội nghị Quốc tế GMSARN lần thứ 18 với nghiên cứu về thuật toán điều khiển chống tách đảo và ổn định tần số cho lưới điện tích hợp pin BESS.",
      tags: ["GMSARN 2024", "Best Paper Award", "BESS", "Islanding Detection", "Smart Grid"],
      content: `
        <p class="article-lead">Tại Hội nghị Quốc tế GMSARN lần thứ 18 (The 18th GMSARN International Conference) tổ chức tại Đại học Bách Khoa Hà Nội, nhóm tác giả của phòng thí nghiệm 100RE Lab đã vinh dự được Hội đồng khoa học trao tặng giải thưởng <strong>Báo cáo xuất sắc nhất (Best Paper Award)</strong>.</p>

        <h3>Công trình nghiên cứu đoạt giải</h3>
        <p>Báo cáo khoa học đoạt giải mang tiêu đề: <em>"Adaptive Notch Filter-based islanding detection for grid-connected inverter with zero non-detection zone"</em> do nhóm tác giả gồm PGS.TS Nguyễn Đức Tuyên, KS. Lê Ngọc Dũng và ThS. Phạm Mạnh Hải thực hiện.</p>

        <p>Nghiên cứu đã phát triển một thuật toán điều khiển tích cực mới trên nền tảng bộ lọc Notch thích nghi (ANF), cho phép phát hiện sự cố tách đảo trong vòng chưa đầy 2 chu kỳ sóng điện áp (dưới 40ms) mà không gây méo dạng sóng dòng điện, triệt tiêu hoàn toàn vùng không phát hiện (Zero Non-Detection Zone).</p>

        <p>Thành tích xuất sắc này là sự ghi nhận xứng đáng cho những nỗ lực nghiên cứu bền bỉ và chất lượng học thuật đạt chuẩn quốc tế của tập thể phòng thí nghiệm 100RE Lab.</p>
      `
    },
    {
      id: "news-5",
      title: "100RE Lab Students Awarded Prestigious Sakura Science Exchange Scholarship in Japan",
      slug: "sakura-science-exchange-scholarship-japan-2023",
      category: "Awards & Scholarships",
      date: "Sep 18, 2023",
      readTime: "3 min read",
      author: "Student Affairs Committee",
      authorRole: "Student Chapter",
      authorAvatar: "assets/images/logo.jpg",
      views: "1.3k views",
      image: "assets/images/banner_wind.jpg",
      imageCaption: "Các thành viên 100RE Lab tham quan và làm việc tại phòng thí nghiệm Điện trường thuộc Viện Công nghệ Shibaura (SIT), Tokyo.",
      excerpt: "Chúc mừng 5 thành viên trẻ của 100RE Lab nhận học bổng toàn phần Sakura Science Exchange Program 2023, tham gia nghiên cứu thực địa và học tập tại Viện Công nghệ Shibaura (SIT), Nhật Bản.",
      tags: ["Sakura Science", "Japan Exchange", "Shibaura Institute of Technology", "Scholarship"],
      content: `
        <p class="article-lead">Chương trình Giao lưu Khoa học Sakura (Sakura Science Exchange Program) do Cơ quan Khoa học và Công nghệ Nhật Bản (JST) tài trợ đã chính thức trao học bổng toàn phần cho 5 sinh viên và nghiên cứu sinh xuất sắc thuộc phòng thí nghiệm 100RE Lab.</p>

        <h3>Hành trình trải nghiệm học thuật tại Tokyo & Kyoto</h3>
        <p>Trong chuyến công tác kéo dài 10 ngày, các bạn sinh viên đã được:</p>
        <ul>
          <li>Làm việc trực tiếp tại Phòng thí nghiệm Hệ thống Điện thuộc Viện Công nghệ Shibaura (SIT) dưới sự hướng dẫn của GS. Goro Fujita.</li>
          <li>Tham quan trung tâm điều độ phụ tải thông minh và trạm biến áp số tại Tokyo.</li>
          <li>Tham gia báo cáo tại Hội thảo Khoa học Sinh viên Quốc tế Việt - Nhật.</li>
        </ul>

        <p>Chương trình là cơ hội quý báu giúp các bạn sinh viên rèn luyện tư duy nghiên cứu độc lập, tiếp cận công nghệ năng lượng tiên tiến hàng đầu thế giới và mở rộng mạng lưới hợp tác quốc tế.</p>
      `
    }
  ],

  // 7. Journey Events (13 Milestones)
  journey: [
    {
      id: "j-1",
      title: "100RE Lab General Meeting 2024",
      date: "July 2024",
      location: "Hanoi, Vietnam",
      image: "assets/images/banner_smartgrid.jpg",
      desc: "Annual gathering of 40+ lab members, supervisors, and alumni celebrating 6 years of 100RE Lab with research presentations and roadmap for 2024–2026."
    },
    {
      id: "j-2",
      title: "The 18th GMSARN International Conference (GMSARN 2024)",
      date: "November 2024",
      location: "HUST, Hanoi",
      image: "assets/images/banner_pv.jpg",
      desc: "Hosted at HUST on Smart Energy, Environment, and Sustainable Development in the Greater Mekong Subregion, featuring 5 research papers from 100RE Lab."
    },
    {
      id: "j-3",
      title: "CPESE 2023 International Conference in Japan",
      date: "September 2023",
      location: "Kyoto & Tokyo, Japan",
      image: "assets/images/banner_wind.jpg",
      desc: "Presenting cutting-edge renewable research at the 10th International Conference on Power and Energy Systems Engineering (CPESE 2023)."
    },
    {
      id: "j-4",
      title: "Tọa đàm Chuyển dịch Năng lượng & Net Zero 2050",
      date: "29.08.2023",
      location: "Hanoi, Vietnam",
      image: "assets/images/banner_dr_uc.jpg",
      desc: "High-level panel discussion on Vietnam's energy transition, power development plan VIII (PDP8), and roadmap toward 100% renewable energy."
    },
    {
      id: "j-5",
      title: "Wind Power Advanced Training in DTU Denmark",
      date: "August 2023",
      location: "Technical University of Denmark (DTU)",
      image: "assets/images/banner_wind.jpg",
      desc: "Lab members participated in intensive wind turbine aerodynamics and grid integration training at DTU Wind Energy department."
    },
    {
      id: "j-6",
      title: "Washington D.C. Energy Transition Roundtable",
      date: "July 2023",
      location: "Washington D.C., USA",
      image: "assets/images/banner_hydrogen.jpg",
      desc: "Assoc. Prof. Nguyen Duc Tuyen presented Vietnam's clean energy policy and green hydrogen opportunities at the U.S. Clean EDGE Asia forum."
    },
    {
      id: "j-7",
      title: "100RE Lab Field Trip & Team Building 2023",
      date: "June 2023",
      location: "Ba Vi National Park, Hanoi",
      image: "assets/images/banner_bess.jpg",
      desc: "Annual retreat uniting all 9 research teams for outdoor activities, research sharing, and celebration after semester final exams."
    },
    {
      id: "j-8",
      title: "Sustainable Energy Training for Youth (SE4Y)",
      date: "June 2023",
      location: "Hanoi, Vietnam",
      image: "assets/images/banner_ai.jpg",
      desc: "Organized 2-day intensive training on sustainable energy technologies, green lifestyle, and international study orientation for 76 young trainees."
    },
    {
      id: "j-9",
      title: "ABB AVS Scholarship Award 2022",
      date: "December 2022",
      location: "Hanoi, Vietnam",
      image: "assets/images/banner_ev.jpg",
      desc: "100RE Lab researcher Nguyen Trong Thanh awarded the prestigious ABB Jurgen Dormann / AVS Scholarship for excellence in smart grid research."
    },
    {
      id: "j-10",
      title: "SVNCKH 2022 Scientific Contest",
      date: "May 2022",
      location: "HUST, Hanoi",
      image: "assets/images/banner_pv.jpg",
      desc: "AI Team members awarded 3rd place in HUST University Student Scientific Research Contest for solar radiation neural network forecasting."
    },
    {
      id: "j-11",
      title: "Sakura Science Exchange Program in Japan",
      date: "Feb 11 – 20, 2023",
      location: "Tokyo & Shibaura, Japan",
      image: "assets/images/banner_smartgrid.jpg",
      desc: "Funded by JST: 10-day research exchange visiting Daidan Research Center, Shibaura IT power laboratories, robotics showrooms, and master thesis defenses."
    },
    {
      id: "j-12",
      title: "SEATUC 2023 Conference in Thailand",
      date: "Feb 23 – 24, 2023",
      location: "Suranaree University of Technology, Thailand",
      image: "assets/images/banner_hydrogen.jpg",
      desc: "Hydrogen team members presented papers on fuel cell modeling and participated in campus technical visits and academic gala."
    },
    {
      id: "j-13",
      title: "2nd Regional CSO Energy Workshop & Training",
      date: "Feb 28 – Mar 2, 2023",
      location: "Siem Reap, Cambodia",
      image: "assets/images/banner_bess.jpg",
      desc: "Jointly organized by USAID, WWF, NREL, and BMZ-100RE MAP on regional civil-society energy advocacy and renewable energy mapping across Southeast Asia."
    }
  ],

  // 8. Featured Alumni Dataset (9 Featured Profiles + 21 Team Alumni)
  featuredAlumni: [
    {
      name: "Lê Viết Thịnh",
      labPeriod: "2/2019 – 8/2022",
      formerRole: "Former PV Lead and Lab Lead",
      currentPos: "PhD student @ Virginia Tech",
      image: "assets/images/alumni/le_viet_thinh.png",
      email: "thinhle@vt.edu",
      phone: "",
      achievements: [
        "Publications: 4 journal papers, 5 conference papers",
        "Projects: 3 university projects (PV curve modeling - participant; Partial shading mitigation for enhancing PV generation - leader; Demand response - participant), 1 course project (Unit commitment in microgrid - leader)",
        "Contests: First place of Student forum 2020; Honor prize of Student research competition at HUST 2020",
        "Awards: Fellow, Vietnam Education Foundation Fellows and Scholars Association (Nov. 2021)"
      ],
      bio: "Former PV Lead and Lab Lead (1st Gen). Conducted research in partial shading mitigation and PV curve modeling before pursuing PhD studies at Virginia Tech."
    },
    {
      name: "Phan Văn Long",
      labPeriod: "4/2021 – 8/2023",
      formerRole: "Former H2 Lead and Lab Lead (2nd Gen)",
      currentPos: "Junior Engineer - OWC, ABL Group",
      image: "assets/images/alumni/phan_van_long.jpg",
      email: "phanlongbkhn123@gmail.com",
      phone: "(+84) 932392803",
      achievements: [
        "Research/Publications: 6 Journal Papers Q1, 1 International & 1 Domestic Journal Paper; 5+ International Conference Papers (UK, Japan, Singapore, Thailand), 2+ Domestic Conference Papers; 1 R&D Project (with OWC), 1 National Report (with UNDP)",
        "Projects: 3 Regional Level Projects (Topic: OWF, Floating PV, Hydrogen, Ammonia; with OWC as a Junior Engineer); 4 National Level Projects (Topic: RTS Policies, EV, Hydrogen, Energy; with Dr. Tuyen as a RA); 2 National Level Projects (Topic: Youth, Climate Change, Energy Transition; with UNDP as an individual consultant); 2 Local Projects (Topic: Electricity Safety, RTS; with Dr. Hai & Dr. Son as a RA)",
        "Contests: 7+ Contests (3 x 1st prize, 2 x 2nd prize, 2 x 3rd prize)",
        "Awards & Scholarships: 5+ awards & honors"
      ],
      bio: "Former Green Hydrogen Lead and 2nd Gen Lab Lead. Authored 6 Q1 papers, led regional offshore wind & hydrogen studies, and consulted on national climate policy reports with UNDP."
    },
    {
      name: "Trần Quốc Ngữ",
      labPeriod: "6/2019 – 1/2022",
      formerRole: "Former UC-DR Member",
      currentPos: "SCADA Engineer at Toshiba Transmission & Distribution Vietnam (TTDV)",
      image: "assets/images/alumni/tran_quoc_ngu.jpg",
      email: "ngu.tranquoc.bscee@gmail.com",
      phone: "+84 343828333",
      achievements: [
        "Publications: 1 journal paper, 2 conference papers",
        "Projects: 1 university project (Demand Response)",
        "Contests: 4th place at Student Research Competition HUST 2020",
        "Awards: Power system Alumni Scholarship 2020"
      ],
      bio: "Former core member of Demand Response & Unit Commitment Team. Conducted research on power system demand response before joining Toshiba Transmission & Distribution Vietnam as a SCADA Engineer."
    },
    {
      name: "Đỗ Văn Long",
      labPeriod: "11/2019 – 8/2022",
      formerRole: "Former UC-DR Lead",
      currentPos: "Engineer at Power Market Operation Department, National Load Dispatch Centre (A0)",
      image: "assets/images/alumni/do_van_long.jpg",
      email: "",
      phone: "0967 559 475",
      achievements: [
        "Research/Publications: 2 Journal Papers (Q1: 1, Q2: 1), 2 Domestic Journal Papers; 2 International Conference Papers, 2 Domestic Conference Papers",
        "Projects: 1 University Project (Topic: Demand Response)"
      ],
      bio: "Former Unit Commitment & Demand Response Team Lead. Published high-impact papers in Q1/Q2 journals on economic dispatch and power market modeling. Currently operating at National Load Dispatch Centre (A0)."
    },
    {
      name: "Nguyễn Văn Thức",
      labPeriod: "1/2020 – 8/2022",
      formerRole: "Former Wind Member",
      currentPos: "Primary Equipment Engineer at Toshiba Transmission & Distribution Vietnam (TTDV)",
      image: "assets/images/alumni/nguyen_van_thuc.jpg",
      email: "nguyenthuc0510@gmail.com",
      phone: "+84 946583644",
      achievements: [
        "Projects: 1 university project (Topic: Wind power + PV), IE project (PV + HVDC + Calculation TRV + Use Comsol software to calculate and simulate leakage currents on insulators)",
        "Contests: Student Forum 2020",
        "Awards: Scholarship of Toshiba Vietnam; Scholarship of HUST"
      ],
      bio: "Former Wind Energy Team member. Specialized in Wind-PV integration, HVDC systems, TRV transient calculation, and COMSOL insulator leakage current simulation."
    },
    {
      name: "Vũ Xuân Sơn Hữu",
      labPeriod: "5/2019 – 8/2022",
      formerRole: "Former AI Lead",
      currentPos: "Engineer at Renewable Energy Management Department, National Load Dispatch Centre (A0)",
      image: "assets/images/alumni/vu_xuan_son_huu.jpg",
      email: "huu.vuxuanson1999@gmail.com",
      phone: "+84 352035317",
      achievements: [
        "Publications: 1 journal paper (Q2); 5 international conference papers",
        "Projects: 3 university projects (participant)",
        "Contests: Student research competition at HUST 2021 (leader) - 1st; Student research competition at MoET 2021 (leader) - 2nd",
        "Awards: Google’s TensorFlow Developer Certificate"
      ],
      bio: "Former AI Team Lead. Led the team to 1st Prize at HUST and 2nd Prize at MoET National Student Research Competitions with AI-driven renewable forecasting models."
    },
    {
      name: "Trần Hoàng Ánh",
      labPeriod: "8/2020 – 8/2022",
      formerRole: "Former Wind Member",
      currentPos: "Electrical Design Engineer at Advanced Information Technologies Corporation (AIT)",
      image: "assets/images/alumni/tran_hoang_anh.jpg",
      email: "anhs.th1879@gmail.com",
      phone: "+84 964968726",
      achievements: [
        "Projects: 1 university project (Topic: Power Supply Systems), IE project (Calculating the power flow of Vietnam's 220kV and 500kV power grid)",
        "Contests: Student Forum 2020",
        "Awards: Scholarship of Lotte Vietnam; Tran Dai Nghia Scholarship"
      ],
      bio: "Former Wind Team member. Conducted extensive power flow calculations for Vietnam's 220kV and 500kV national transmission grid and recipient of Tran Dai Nghia & Lotte scholarships."
    },
    {
      name: "Nguyễn Huy Tiên",
      labPeriod: "2/2021 – 8/2023",
      formerRole: "Former Wind Lead",
      currentPos: "Wind Energy Specialist & Development Engineer",
      image: "assets/images/alumni/nguyen_huy_tien.jpg",
      email: "",
      phone: "+84 373282058",
      achievements: [
        "Publications: 1 Journal Paper, 1 Domestic Journal Paper",
        "Projects: EVN project (Topic: PV)",
        "Awards: International Intern Research Program"
      ],
      bio: "Former Wind Energy Team Lead. Researched wind energy conversion systems and solar PV grid integration for EVN, participating in international research exchange programs."
    },
    {
      name: "Hoàng Nhật",
      labPeriod: "7/2020 – 8/2023",
      formerRole: "Former EV Lead",
      currentPos: "Power Electronics & EV Systems Engineer",
      image: "assets/images/alumni/hoang_nhat.png",
      email: "hoangnhat27102k@gmail.com",
      phone: "+84 333575592",
      achievements: [
        "Projects: 3 projects (VIETSE on BESS, GREENID on EV, 100RELab on PV)",
        "Publications: 3 conferences (2 on Student Forum 2020/2021, 1 on IEEE CPESE 2023); 1 journal rank Q4 (IOP Science: Environmental and Earth)",
        "Contests: Student Forum 2020, Student Forum 2021",
        "Awards: 4+ awards and scholarships"
      ],
      bio: "Former Electric Vehicle Team Lead. Led projects on EV smart charging with GREENID and BESS deployment with VIETSE, publishing across IEEE CPESE and IOP Science."
    }
  ],

  // Team Alumni Directory (21 Members)
  teamAlumni: [
    { name: "Nguyen Dang Duong", team: "PV Team", teamCode: "pv", image: "assets/images/alumni/nguyen_dang_duong.png" },
    { name: "Dao Quang Tung", team: "PV Team", teamCode: "pv", image: "assets/images/alumni/dao_quang_tung.jpg" },
    { name: "Hoang Tuan Linh", team: "Unit Commitment Team", teamCode: "dr_uc", image: "assets/images/alumni/hoang_tuan_linh.png" },
    { name: "Ta Xuan Hung", team: "Unit Commitment Team", teamCode: "dr_uc", image: "assets/images/alumni/ta_xuan_hung.jpg" },
    { name: "Le Hanh Duc", team: "Wind Team", teamCode: "wind", image: "assets/images/alumni/le_hanh_duc.jpg" },
    { name: "Nguyen Trung Hai", team: "Wind Team", teamCode: "wind", image: "assets/images/alumni/nguyen_trung_hai.png" },
    { name: "Nguyen Sy Quan", team: "Smart Grid Team", teamCode: "smartgrid", image: "assets/images/alumni/nguyen_sy_quan.jpg" },
    { name: "Vo Ba Linh", team: "Smart Grid Team", teamCode: "smartgrid", image: "assets/images/alumni/vo_ba_linh.jpg" },
    { name: "Tran Minh Khoi", team: "Smart Grid Team", teamCode: "smartgrid", image: "assets/images/alumni/tran_minh_khoi.jpg" },
    { name: "Tran Dinh Le Hoang", team: "Smart Grid Team", teamCode: "smartgrid", image: "assets/images/alumni/tran_dinh_le_hoang.jpg" },
    { name: "Tran Minh Tuan", team: "Electric Vehicle Team", teamCode: "ev", image: "assets/images/alumni/tran_minh_tuan.jpg" },
    { name: "Do Chi Kien", team: "Hydrogen Team", teamCode: "hydrogen", image: "assets/images/alumni/do_chi_kien.jpg" },
    { name: "Hoang Hieu Long", team: "Hydrogen Team", teamCode: "hydrogen", image: "assets/images/alumni/hoang_hieu_long.jpg" },
    { name: "Nguyen Manh Khai", team: "Hydrogen Team", teamCode: "hydrogen", image: "assets/images/alumni/nguyen_manh_khai.jpg" },
    { name: "Le Thi Minh Lien", team: "BESS Team", teamCode: "bess", image: "assets/images/alumni/le_thi_minh_lien.jpg" },
    { name: "Ta Duy Bach", team: "BESS Team", teamCode: "bess", image: "assets/images/alumni/ta_duy_bach.png" },
    { name: "Vu Quoc Anh", team: "BESS Team", teamCode: "bess", image: "assets/images/alumni/vu_quoc_anh.jpg" },
    { name: "Nguyen Dinh Phu Nghia", team: "BESS Team", teamCode: "bess", image: "assets/images/alumni/nguyen_dinh_phu_nghia.jpg" },
    { name: "Nguyen Trong Thanh", team: "AI Team", teamCode: "ai", image: "assets/images/alumni/nguyen_trong_thanh.png" },
    { name: "Nguyen H. Minh Giang", team: "AI Team", teamCode: "ai", image: "assets/images/alumni/nguyen_hoang_minh_giang.png" },
    { name: "Do Dinh Hieu", team: "AI Team", teamCode: "ai", image: "assets/images/alumni/do_dinh_hieu.jpg" }
  ],


  // 9. Collaborations Dataset
  collaborations: {
    academic: [
      { name: "Nagoya University", country: "Japan", icon: "fa-graduation-cap" },
      { name: "Shibaura Institute of Technology", country: "Japan", icon: "fa-graduation-cap" },
      { name: "Nanyang Technological University (NTU)", country: "Singapore", icon: "fa-graduation-cap" },
      { name: "Tokyo University of Science", country: "Japan", icon: "fa-graduation-cap" },
      { name: "University of the Ryukyus", country: "Japan", icon: "fa-graduation-cap" },
      { name: "Gifu University", country: "Japan", icon: "fa-graduation-cap" },
      { name: "Hanoi University of Science and Technology (HUST)", country: "Vietnam", icon: "fa-graduation-cap" },
      { name: "Electric Power University (EPU)", country: "Vietnam", icon: "fa-graduation-cap" },
      { name: "Hanoi University of Industry (HaUI)", country: "Vietnam", icon: "fa-graduation-cap" },
      { name: "Ho Chi Minh City University of Technology (HCMUT)", country: "Vietnam", icon: "fa-graduation-cap" }
    ],
    industry: [
      { name: "TOSHIBA", role: "Power & Industrial Systems", icon: "fa-building" },
      { name: "EVN (Vietnam Electricity)", role: "National Power Utility", icon: "fa-bolt" },
      { name: "GIZ", role: "German Development Cooperation", icon: "fa-globe" },
      { name: "AFTER FIT", role: "Solar & Wind Developer (Japan)", icon: "fa-solar-panel" },
      { name: "SHIZEN ENERGY", role: "Renewable Energy (Japan)", icon: "fa-leaf" },
      { name: "NIRAS", role: "International Engineering Consultancy", icon: "fa-compass-drafting" },
      { name: "VIETSE", role: "Energy Transition Initiative", icon: "fa-chart-pie" },
      { name: "ATS JSC", role: "Substation Automation & SCADA", icon: "fa-network-wired" },
      { name: "AIT (Asian Institute of Technology)", role: "Regional Technology Institute", icon: "fa-building-columns" }
    ],
    individuals: [
      { name: "Prof. Goro Fujita", affiliation: "Shibaura Institute of Technology, Japan" },
      { name: "Prof. Junji Kondoh", affiliation: "Tokyo University of Science, Japan" },
      { name: "Prof. Toshihisa Funabashi", affiliation: "Nagoya University, Japan" },
      { name: "Prof. Takeyoshi Kato", affiliation: "Nagoya University, Japan" },
      { name: "Dr. Tuyen Vu", affiliation: "Clarkson University, USA" },
      { name: "Prof. Yuan-Kang Wu", affiliation: "National Chung Cheng University, Taiwan" },
      { name: "Dr. Samet Biricik", affiliation: "European University of Lefke" },
      { name: "Dr. Dang Hoang Anh", affiliation: "Electric Power University, Vietnam" }
    ]
  },

  // 10. Lab Equipment Dataset (20 Items)
  equipment: [
    {
      id: "eq-1",
      name: "Solar Power System (Rooftop)",
      model: "3.6 kW On-Grid SCADA",
      specs: [
        { label: "Location", value: "Building D9, HUST" },
        { label: "Capacity", value: "3.6 kWp" },
        { label: "Inverter", value: "Growatt 3600MTL-S" },
        { label: "Features", value: "DAQ, Automated Relay Matrix" }
      ]
    },
    {
      id: "eq-2",
      name: "Digital Storage Oscilloscope",
      model: "Siglent SDS1052DL+",
      specs: [
        { label: "Bandwidth", value: "50 MHz, 2 Channels" },
        { label: "Sample Rate", value: "500 MSa/s" },
        { label: "Display", value: "7-inch TFT-LCD Color" },
        { label: "Interface", value: "USB Host, USB Device, LAN" }
      ]
    },
    {
      id: "eq-3",
      name: "Programmable DC Electronic Load",
      model: "Itech IT8200 Series",
      specs: [
        { label: "Modes", value: "CV / CC / CR / CP" },
        { label: "Testing", value: "Short-circuit & Battery Test" },
        { label: "Protection", value: "OVP, OCP, OPP, OTP" },
        { label: "Resolution", value: "1 mV / 1 mA" }
      ]
    },
    {
      id: "eq-4",
      name: "High Regulation DC Power Supply",
      model: "GW Instek SPS-606",
      specs: [
        { label: "Voltage", value: "0 – 60 V DC" },
        { label: "Current", value: "0 – 6 A" },
        { label: "Regulation", value: "CV <= 0.01% + 3mV" },
        { label: "Features", value: "Over-voltage Protection" }
      ]
    },
    {
      id: "eq-5",
      name: "Memory Data Logger",
      model: "Hioki 8430-20 & PW 8198",
      specs: [
        { label: "Channels", value: "10 Isolated Analog Channels" },
        { label: "Sampling", value: "10 ms on all channels" },
        { label: "Storage", value: "CF Card & USB Drive" },
        { label: "Origin", value: "Japan" }
      ]
    },
    {
      id: "eq-6",
      name: "Industrial Solar Power Meter",
      model: "Tenmars TM-207",
      specs: [
        { label: "Range", value: "2000 W/m² (634 BTU)" },
        { label: "Accuracy", value: "+/- 10 W/m²" },
        { label: "Sensor", value: "External Photodiode Sensor" },
        { label: "Function", value: "Solar irradiance measurement" }
      ]
    },
    {
      id: "eq-7",
      name: "Precision True RMS Multimeter",
      model: "Fluke 289 Data Logging",
      specs: [
        { label: "Display", value: "50,000 Counts TrendCapture" },
        { label: "Logging", value: "Up to 10,000 readings" },
        { label: "Bandwidth", value: "100 kHz AC True RMS" },
        { label: "Low Pass", value: "Accurate motor drive voltage" }
      ]
    },
    {
      id: "eq-8",
      name: "Control System Design Experimental Kit",
      model: "TechShare Experimental Platform",
      specs: [
        { label: "Provider", value: "TechShare Japan" },
        { label: "Application", value: "MATLAB/Simulink Real-Time" },
        { label: "Components", value: "Inverter, Motor, Sensors" },
        { label: "Purpose", value: "Inverter & Motor Control" }
      ]
    },
    {
      id: "eq-9",
      name: "On-Grid Solar Inverter",
      model: "Growatt 3600MTL-S",
      specs: [
        { label: "Rated Power", value: "3.6 kW" },
        { label: "MPPT", value: "Dual MPPT Trackers" },
        { label: "Max Efficiency", value: "97.9%" },
        { label: "Communication", value: "RS485, Wi-Fi" }
      ]
    },
    {
      id: "eq-10",
      name: "AC Magnetic Contactor",
      model: "Fuji SC-N1 Series",
      specs: [
        { label: "Contacts", value: "2 NO + 2 NC Auxiliaries" },
        { label: "Coil Voltage", value: "220V AC 50/60Hz" },
        { label: "Origin", value: "Fuji Electric, Japan" },
        { label: "Application", value: "Automated Grid Isolation" }
      ]
    },
    {
      id: "eq-11",
      name: "High-Performance Workstation 1 (AI & ML)",
      model: "Ryzen 7 3700X / 32GB RAM",
      specs: [
        { label: "CPU", value: "AMD Ryzen 7 3700X (8C/16T)" },
        { label: "RAM", value: "32 GB DDR4 3200MHz" },
        { label: "Display", value: "Samsung S24R35x IPS" },
        { label: "Purpose", value: "Deep Learning & ANN Training" }
      ]
    },
    {
      id: "eq-12",
      name: "Power System Simulation Workstation 2",
      model: "Ryzen 5 5600X / 16GB RAM",
      specs: [
        { label: "CPU", value: "AMD Ryzen 5 5600X (6C/12T)" },
        { label: "RAM", value: "16 GB DDR4 3200MHz" },
        { label: "GPU", value: "Radeon RX550" },
        { label: "Software", value: "DigSILENT, PSCAD, MATLAB" }
      ]
    }
  ],

  // 11. Useful Links Dataset
  usefulLinks: [
    {
      title: "NREL (National Renewable Energy Laboratory) Data & Tools",
      category: "dataset",
      url: "https://www.nrel.gov/research/data-tools.html",
      desc: "Comprehensive solar radiation (NSRDB), wind resource database, and PVWatts calculator."
    },
    {
      title: "IEEE Power & Energy Society (PES)",
      category: "academic",
      url: "https://www.ieee-pes.org/",
      desc: "Global forum for sharing technological developments in the electric power industry."
    },
    {
      title: "HOMER Energy (Microgrid Simulation Software)",
      category: "software",
      url: "https://www.homerenergy.com/",
      desc: "Industry standard tool for optimizing hybrid renewable microgrid systems and hydrogen storage."
    },
    {
      title: "DigSILENT PowerFactory",
      category: "software",
      url: "https://www.digsilent.de/en/powerfactory.html",
      desc: "Leading power system analysis software for transmission, distribution, and renewable grid connection."
    },
    {
      title: "IRENA (International Renewable Energy Agency)",
      category: "standards",
      url: "https://www.irena.org/",
      desc: "Global renewable energy statistics, cost reduction trends, and policy frameworks."
    },
    {
      title: "Vietnam Electricity Regulatory Authority (ERAV)",
      category: "energy-market",
      url: "https://erav.vn/",
      desc: "Regulatory documents, competitive electricity market rules, and clean energy tariff decrees in Vietnam."
    }
  ],

  // 12. Photos Gallery Dataset
  photos: [
    { id: "photo-1", title: "PV Team Banner & Solar Research", category: "teams", caption: "PV Team research testbed and rooftop solar installation at Building D9.", image: "assets/images/banner_pv.jpg" },
    { id: "photo-2", title: "AI Team Deep Learning Platform", category: "teams", caption: "Deep learning models SAM-LSTM for solar irradiance and wind power forecasting.", image: "assets/images/banner_ai.jpg" },
    { id: "photo-3", title: "Demand Response & Unit Commitment Team", category: "teams", caption: "Microgrid power dispatch, MILP optimization, and electricity market simulation.", image: "assets/images/banner_dr_uc.jpg" },
    { id: "photo-4", title: "Wind Energy Research Cluster", category: "teams", caption: "Wind turbine aerodynamics, LVRT capability, and grid stability testbed.", image: "assets/images/banner_wind.jpg" },
    { id: "photo-5", title: "Smart Grid & SCADA Automation", category: "teams", caption: "Intelligent microgrid control, cybersecurity, and IEC 61850 substation integration.", image: "assets/images/banner_smartgrid.jpg" },
    { id: "photo-6", title: "Electric Vehicle & V2G Infrastructure", category: "teams", caption: "EV smart charging algorithms and Vehicle-to-Grid distribution grid impact.", image: "assets/images/banner_ev.jpg" },
    { id: "photo-7", title: "Green Hydrogen Production & Fuel Cell", category: "teams", caption: "Renewable electrolysis coupling, fuel cell efficiency, and hydrogen supply chains.", image: "assets/images/banner_hydrogen.jpg" },
    { id: "photo-8", title: "Battery Energy Storage Systems (BESS)", category: "teams", caption: "Utility-scale BESS frequency regulation and battery degradation modeling.", image: "assets/images/banner_bess.jpg" }
  ]
};
