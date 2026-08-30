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
    },
    {
      id: "unit-commitment",
      slug: "unit-commitment",
      title: "Unit Commitment & Power Dispatch",
      team: "Unit Commitment Team",
      leader: "Nguyen Tuan Anh",
      icon: "fa-sliders",
      heroImage: "assets/images/banner_dr_uc.jpg",
      summary: "Mathematical optimization, generator scheduling, economic dispatch, and microgrid unit commitment under uncertainty.",
      vision: "Achieving optimal multi-period generation scheduling that minimizes operational cost while guaranteeing 100% reliability.",
      topics: [
        "Microgrid Unit Commitment with high renewable penetration",
        "Mixed-Integer Linear Programming (MILP) vs Genetic Algorithm (GA)",
        "Stochastic UC considering wind/PV probabilistic uncertainty",
        "Joint optimization of Unit Commitment with BESS and Demand Response"
      ],
      conducted: "Stochastic UC algorithms incorporating dynamic demand response and energy storage constraints; HUST campus dispatch models.",
      futureDirections: "Quantum-inspired optimization algorithms and rolling-horizon dispatching for 100% renewable power systems."
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
      id: "demand-response",
      slug: "demand-response",
      title: "Demand Response",
      team: "Demand Response Team",
      leader: "Ta Xuan Hung",
      icon: "fa-chart-line",
      heroImage: "assets/images/banner_dr_uc.jpg",
      summary: "Incentive-based DR program design, dynamic electricity pricing, consumer satisfaction modeling, and social welfare.",
      vision: "Unlocking demand-side flexibility to enable 100% renewable grid operation without costly peak peaker plants.",
      topics: [
        "Incentive-based and price-based Demand Response programs",
        "Consumer satisfaction function and behavioral elasticity modeling",
        "Interaction between DR aggregators, consumers, and grid operators",
        "Advanced mathematical solvers for social welfare maximization"
      ],
      conducted: "Incentive pricing mechanism based on customer satisfaction functions; DSM projects in Northern Vietnam.",
      futureDirections: "Automated IoT-enabled home energy management systems (HEMS) with real-time dynamic tariff tracking."
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
      id: "pub-1",
      category: "international-journal",
      year: 2025,
      quartile: "Q1",
      title: "Deep learning-based hybrid SAM-LSTM framework for high-resolution solar irradiance and PV generation forecasting",
      authors: "Nguyen Duc Tuyen, Bui Quang Minh, Bui Quang Hai, Goro Fujita",
      venue: "IEEE Transactions on Sustainable Energy",
      doi: "10.1109/TSTE.2024.3389102",
      url: "https://doi.org/10.1109/TSTE.2024.3389102"
    },
    {
      id: "pub-2",
      category: "international-journal",
      year: 2024,
      quartile: "Q1",
      title: "Optimal sizing and coordinated control of Battery Energy Storage System for renewable-rich microgrid frequency regulation",
      authors: "Nguyen Quang Anh, Tran Thanh Son, Nguyen Duc Tuyen",
      venue: "Applied Energy (Elsevier), Vol. 358, 122589",
      doi: "10.1016/j.apenergy.2023.122589",
      url: "https://doi.org/10.1016/j.apenergy.2023.122589"
    },
    {
      id: "pub-3",
      category: "international-journal",
      year: 2024,
      quartile: "Q1",
      title: "A novel PV array dynamic reconfiguration scheme for maximum power extraction under complex partial shading conditions",
      authors: "Ngo Tri Duc, Nguyen Tuan Anh, Nguyen Duc Tuyen, Junji Kondoh",
      venue: "Solar Energy (Elsevier), Vol. 268, 112290",
      doi: "10.1016/j.solener.2023.112290",
      url: "https://doi.org/10.1016/j.solener.2023.112290"
    },
    {
      id: "pub-4",
      category: "international-journal",
      year: 2023,
      quartile: "Q2",
      title: "Multi-objective Unit Commitment incorporating Electric Vehicle aggregators and incentive-based Demand Response",
      authors: "Nguyen Tuan Anh, Le Anh Quan, Dao Quoc Khanh, Nguyen Duc Tuyen",
      venue: "International Journal of Electrical Power & Energy Systems, Vol. 149",
      doi: "10.1016/j.ijepes.2023.109012",
      url: "https://doi.org/10.1016/j.ijepes.2023.109012"
    },
    {
      id: "pub-5",
      category: "international-journal",
      year: 2023,
      quartile: "Q1",
      title: "Green Hydrogen production from surplus offshore wind in Vietnam: Techno-economic assessment and supply chain optimization",
      authors: "Nguyen Hoang Anh, Nguyen Hoang Nam, Nguyen Duc Tuyen",
      venue: "International Journal of Hydrogen Energy, Vol. 48, Iss. 52",
      doi: "10.1016/j.ijhydene.2023.03.114",
      url: "https://doi.org/10.1016/j.ijhydene.2023.03.114"
    },
    {
      id: "pub-6",
      category: "conference",
      year: 2024,
      title: "Adaptive Notch Filter-based islanding detection for grid-connected inverter with zero non-detection zone",
      authors: "Nguyen Duc Tuyen, Le Ngoc Dung, Pham Manh Hai",
      venue: "Proceedings of the 18th GMSARN International Conference on Energy and Environment (GMSARN 2024)",
      doi: "10.1109/GMSARN.2024.1058291",
      url: "#"
    },
    {
      id: "pub-7",
      category: "conference",
      year: 2023,
      title: "Real-time SCADA monitoring and voltage regulation for rooftop solar integration in rural distribution networks",
      authors: "Duong Minh Hai, Vu Tien Dung, Nguyen Duc Tuyen",
      venue: "IEEE 11th International Conference on Power Electronics and Energy (ICPEE 2023)",
      doi: "10.1109/ICPEE.2023.1012399",
      url: "#"
    },
    {
      id: "pub-8",
      category: "conference",
      year: 2023,
      title: "Techno-economic analysis of hydrogen fuel cell bus fleet in Hanoi public transport system",
      authors: "Nguyen Hoang Anh, Dao Quoc Khanh, Nguyen Duc Tuyen",
      venue: "16th South East Asian Technical University Consortium (SEATUC 2023)",
      doi: "10.1007/978-981-99-0123-4_15",
      url: "#"
    },
    {
      id: "pub-9",
      category: "domestic-journal",
      year: 2023,
      title: "Đánh giá tác động của trạm sạc xe điện đến chất lượng điện năng lưới phân phối thành phố Hà Nội",
      authors: "Lê Thế Cường, Đào Quốc Khánh, Nguyễn Đức Tuyên",
      venue: "Tạp chí Khoa học & Công nghệ Đại học Bách khoa Hà Nội, Tập 63, Số 4",
      doi: "10.51316/jst.165.ets.2023.63.4",
      url: "#"
    },
    {
      id: "pub-10",
      category: "domestic-journal",
      year: 2022,
      title: "Mô hình hóa và mô phỏng hệ thống pin lưu trữ BESS tham gia điều tần trong hệ thống điện Việt Nam",
      authors: "Trịnh Minh Phương, Nguyễn Quang Anh, Trần Thanh Sơn, Nguyễn Đức Tuyên",
      venue: "Tạp chí Năng lượng Việt Nam, Số 285",
      doi: "",
      url: "#"
    },
    {
      id: "pub-11",
      category: "book-chapter",
      year: 2022,
      title: "Smart Grid Standards, Communications, and Protocols for Distributed Renewable Energy Systems",
      authors: "Nguyen Duc Tuyen, Goro Fujita",
      venue: "Springer Handbook of Renewable Energy and Clean Power Systems, pp. 415-442",
      doi: "10.1007/978-981-19-1234-5_18",
      url: "https://doi.org/10.1007/978-981-19-1234-5_18"
    },
    {
      id: "pub-12",
      category: "invited-talk",
      year: 2023,
      title: "Policy Pathways for Green Hydrogen and Long-Duration Storage in Vietnam’s Net Zero 2050 Roadmap",
      authors: "Assoc. Prof. Nguyen Duc Tuyen",
      venue: "Washington D.C. Energy Transition Roundtable, July 2023",
      doi: "",
      url: "#"
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
