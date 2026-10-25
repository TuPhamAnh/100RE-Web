/**
 * 100RE LABORATORY - Universal Homepage Live Editor
 * Allows authorized users (Admin, Supervisor, Team Leaders) to edit ALL information on the homepage.
 * Persists changes to LocalStorage and synchronizes with Cloudflare KV Database (/api/public/content/homepage).
 */

(function () {
  'use strict';

  const STORAGE_KEY = '100re_homepage_content';
  const API_ENDPOINT = '/api/public/content/homepage';

  // 1. Default Master Dataset for Homepage
  const DEFAULT_HOMEPAGE_DATA = {
    hero: {
      title: "WELCOME TO <span>100% RENEWABLE ENERGY LAB</span>",
      desc: "Established in July 2018 at Hanoi University of Science and Technology (HUST), conducting world-class research on smart grids, renewable integration, energy storage, green hydrogen, and electricity markets.",
      btn1Text: "JOIN US",
      btn1Link: "join-us.html",
      btn2Text: "EXPLORE RESEARCH",
      btn2Link: "research-areas.html"
    },
    stats: {
      stat1Num: "200+",
      stat1Label: "Publications",
      stat2Num: "40+",
      stat2Label: "Researchers & Members",
      stat3Num: "8",
      stat3Label: "Research Areas",
      stat4Num: "10:1",
      stat4Label: "Student Supervisor Ratio"
    },
    goals: {
      title: "What are our Goals?",
      p1: "The power grid is undergoing a profound structural transformation fueled by the rapid growth of renewable energy sources such as solar photovoltaics, wind power, and battery storage. The traditional centralized, one-directional grid architecture is evolving into a deregulated, multi-dimensional ecosystem characterized by multi-layered data streams, intelligent edge controllers, and flexible demand response mechanisms.",
      p2: "While smart cities, microgrids, and electric transportation present tremendous opportunities for decarbonization, they introduce critical challenges regarding frequency stability, voltage regulation, power quality, and cybersecurity. Many countries and international organizations are ambitiously advancing toward 100% renewable energy penetration.",
      p3: "<strong>100RE Laboratory</strong> was founded to directly address these complex technical and economic questions through rigorous mathematical modeling, real-time hardware-in-the-loop (HIL) simulations, artificial intelligence forecasting, and field experimental validations in Vietnam and internationally.",
      author: "Assoc. Prof. Nguyen Duc Tuyen, Head of 100RE Laboratory",
      date: "July 05, 2018"
    },
    platformHeader: {
      title: "Welcome to the 100RE Research Platform",
      lead: "The <strong>100% Renewable Energy Research Platform (100RE Lab)</strong> is part of the Department of Power Systems, School of Electrical and Electronic Engineering at Hanoi University of Science and Technology (HUST). 100RE Lab conducts advanced scientific research, technology development, and industrial consultancy toward 100% clean, sustainable energy systems. The laboratory operates dedicated experimental testbeds, rooftop solar microgrids, and high-performance computing clusters linking generation, storage, electric transport, and intelligent automation.",
      sub1Title: "100RE Energy Lab Infrastructure",
      sub1Text: "The 100RE Laboratory serves as a unified academic research infrastructure in which the dynamic interactions of clean power generation, energy storage, power electronics, and artificial intelligence are validated under realistic operating conditions. A synchronized network of installations links rooftop solar arrays, wind turbine simulators, battery storage banks, water electrolyzers, and electric vehicle charging infrastructure via high-speed industrial SCADA and telemetry protocols.",
      sub2Title: "8 Research Teams & Core Laboratories",
      sub2Text: "Our platform organizes research activities across 8 specialized teams corresponding to the Member divisions:"
    },
    teams: {
      pv: {
        id: "pv",
        title: "1. Photovoltaic Systems & Solar Integration (PV Team)",
        image: "assets/images/banner_pv.jpg",
        caption: "Dynamic array reconfiguration & partial shading mitigation testbed. (Photo: 100RE Laboratory, HUST)",
        p1: "The Photovoltaic Systems & Solar Integration Laboratory develops advanced control architectures and power electronics topologies for utility-scale solar farms, commercial rooftop arrays, and floating PV installations. Research focuses on Maximum Power Point Tracking (MPPT) under non-uniform irradiance, string-level degradation diagnostics, bifacial yield optimization, and grid-forming inverter controls for weak grid environments.",
        p2: "A core specialty is the dynamic array reconfiguration using solid-state switching matrices to mitigate partial shading losses, as well as solar hosting capacity evaluation and harmonic distortion analysis for urban commercial and industrial distribution feeders across Vietnam.",
        linkText: "View Team Members & Projects",
        linkUrl: "members.html#grid-pv"
      },
      ai: {
        id: "ai",
        title: "2. AI & Computational Intelligence in Energy (AI Team)",
        image: "assets/images/banner_ai.jpg",
        caption: "High-performance GPU cluster for neural load & solar forecasting. (Photo: 100RE Laboratory, HUST)",
        p1: "The AI & Computational Intelligence Laboratory leverages machine learning, spatio-temporal deep neural networks, and reinforcement learning to solve high-dimensional optimization problems in modern energy systems. Core initiatives include ultra-short-term and probabilistic wind and solar forecasting, non-intrusive load monitoring (NILM), reinforcement learning for automated microgrid dispatch, and transformer health diagnostics.",
        p2: "The team also develops computer-vision-based automated thermal fault detection on solar modules, physics-informed neural networks (PINN) for dynamic line rating, and decentralized blockchain smart contracts for secure peer-to-peer (P2P) renewable energy trading in urban microgrids.",
        linkText: "View Team Members & Projects",
        linkUrl: "members.html#grid-ai"
      },
      dr_uc: {
        id: "dr_uc",
        title: "3. Demand Response & Unit Commitment (UCDR Team)",
        image: "assets/images/banner_dr_uc.jpg",
        caption: "Stochastic Unit Commitment & Dynamic Demand Response Optimization Center. (Source: 100RE Laboratory)",
        p1: "The Demand Response and Unit Commitment (UCDR) Laboratory specializes in large-scale mixed-integer linear programming (MILP), robust stochastic optimization, and electricity market clearing algorithms. The team formulates security-constrained unit commitment (SCUC) models accommodating high renewable penetration, ramping limitations, and transmission congestion.",
        p2: "On the demand side, the team designs dynamic retail pricing tariffs, critical-peak rebate incentives, and automated load-shifting mechanisms. By quantifying consumer elasticity and comfort indices, demand flexibility is transformed into an active grid-balancing resource.",
        linkText: "View Team Members & Projects",
        linkUrl: "members.html#grid-dr_uc"
      },
      wind: {
        id: "wind",
        title: "4. Wind Energy Conversion Systems (Wind Team)",
        image: "assets/images/banner_wind.jpg",
        caption: "Aerodynamic wind turbine emulator & power curve testbed. (Photo: 100RE Laboratory, HUST)",
        p1: "The Wind Energy Conversion Systems Laboratory investigates the mechanical, electrical, and control complexities of onshore and offshore wind farms. Research domains include low-voltage ride-through (LVRT) compliance, wake effect aerodynamic modeling, active and reactive power pitch control, and sub-synchronous resonance (SSR) damping in inverter-interfaced wind farms.",
        p2: "The team also develops synthetic inertia emulation methods for doubly-fed induction generators (DFIG) and permanent magnet synchronous generators (PMSG), as well as hybrid wind-BESS coordinated control schemes to eliminate steep ramp-rate power fluctuations.",
        linkText: "View Team Members & Projects",
        linkUrl: "members.html#grid-wind"
      },
      smartgrid: {
        id: "smartgrid",
        title: "5. Smart Grid & Distribution Automation (Smart Grid Team)",
        image: "assets/images/banner_smartgrid.jpg",
        caption: "Mini-SCADA control console & distribution grid automation testbed. (Photo: 100RE Laboratory, HUST)",
        p1: "The Smart Grid & Distribution Automation Laboratory serves as an operational testbed for modernizing distribution networks. Utilizing IEC 61850 communication protocols, advanced Phasor Measurement Units (PMU), and mini-SCADA platforms, the team investigates microgrid islanding transitions, autonomous black-start sequencing, and distributed volt-VAR optimization (VVO).",
        p2: "Key research priorities include automated fault location, isolation, and service restoration (FLISR), Virtual Power Plants (VPP) aggregating distributed energy resources, cybersecurity in inverter-based power systems, and active distribution network voltage stability.",
        linkText: "View Team Members & Projects",
        linkUrl: "members.html#grid-smartgrid"
      },
      ev: {
        id: "ev",
        title: "6. Electric Vehicle Integration & V2G Infrastructure (EV Team)",
        image: "assets/images/banner_ev.jpg",
        caption: "Bidirectional V2G charging station & EV battery degradation emulator. (Photo: 100RE Laboratory, HUST)",
        p1: "The Electric Vehicle Integration & V2G Infrastructure Laboratory studies the multifaceted impacts of electromobility on the power grid. Through hardware-in-the-loop charging testbeds, researchers evaluate smart charging protocols (ISO 15118 / OCPP), harmonic distortions caused by fast-charging stations, and Vehicle-to-Home (V2H) / Vehicle-to-Grid (V2G) grid-support ancillary services.",
        p2: "Research emphasizes smart coordinated charging scheduling to prevent local distribution bottlenecks, bidirectional Vehicle-to-Grid (V2G) power electronic topologies, and electrochemical battery degradation modeling to safeguard EV battery health during grid-support services.",
        linkText: "View Team Members & Projects",
        linkUrl: "members.html#grid-ev"
      },
      hydrogen: {
        id: "hydrogen",
        title: "7. Hydrogen & Power-to-X Systems (Hydrogen Team)",
        image: "assets/images/banner_hydrogen.jpg",
        caption: "PEM Electrolyzer & green hydrogen fuel cell experimental test unit. (Source: 100RE Laboratory)",
        p1: "The Hydrogen & Power-to-X Laboratory conducts cutting-edge research into green hydrogen production, electrochemical conversion efficiency, and fuel cell energy systems. Our testbed features Proton Exchange Membrane (PEM) water electrolyzers, alkaline cells, high-pressure hydrogen storage tanks, and fuel cell micro-cogeneration units.",
        p2: "In collaboration with international partners (AIST Japan, Shibaura Institute of Technology), the team evaluates Power-to-Gas seasonal energy storage, fuel cell micro-CHP efficiency, green hydrogen techno-economics, and ammonia supply chain logistics for Vietnam's Net-Zero 2050 pathway.",
        linkText: "View Team Members & Projects",
        linkUrl: "members.html#grid-hydrogen"
      },
      bess: {
        id: "bess",
        title: "8. Battery Energy Storage Systems (BESS Team)",
        image: "assets/images/banner_bess.jpg",
        caption: "Multi-chemistry BESS rack & high-rate battery management system. (Photo: 100RE Laboratory, HUST)",
        p1: "The Battery Energy Storage Systems (BESS) Laboratory focuses on the design, modeling, and optimal control of electrochemical energy storage for grid applications. The laboratory houses multi-chemistry battery test racks (LFP, NMC, Flow Batteries) coupled with bidirectional power conversion systems (PCS) to study frequency regulation, peak shaving, and energy arbitrage.",
        p2: "Research rigorously analyzes lithium-ion battery state-of-charge (SoC), state-of-health (SoH), and electro-thermal degradation, designing optimal multi-use dispatch strategies. The team actively consults for organizations such as VIETSE and GIZ on Vietnam's national BESS deployment roadmap.",
        linkText: "View Team Members & Projects",
        linkUrl: "members.html#grid-bess"
      }
    },
    gallery: {
      title: "Life & Research at 100RE Lab",
      linkText: "View Full Gallery",
      items: [
        { image: "assets/images/banner_pv.jpg", caption: "Rooftop Solar PV SCADA" },
        { image: "assets/images/banner_ai.jpg", caption: "AI & Deep Learning Forecasting" },
        { image: "assets/images/banner_smartgrid.jpg", caption: "Smart Grid Automation Testbed" },
        { image: "assets/images/banner_hydrogen.jpg", caption: "Green Hydrogen Electrolyzer System" }
      ]
    },
    location: {
      title: "100RE Lab Location",
      university: "Hanoi University of Science and Technology (HUST)",
      offices: "Offices: D9-300 & C7-503",
      address: "No. 1 Dai Co Viet Road, Hai Ba Trung District, Hanoi 100000, Vietnam",
      mapsUrl: "https://maps.google.com/?q=Hanoi+University+of+Science+and+Technology"
    },
    footer: {
      supervisorName: "Nguyen Duc Tuyen",
      supervisorTitle: "Assoc. Prof",
      supervisorPhone: "+84 986 509 059",
      supervisorEmail1: "tuyen.nguyenduc@hust.edu.vn",
      supervisorEmail2: "i029999@shibaura-it.ac.jp",
      contactName: "Nguyen Tuan Anh",
      contactTitle: "B.Eng",
      contactPhone: "+84 974 812 546",
      contactEmail: "anh.nt196322@sis.hust.edu.vn",
      offices: "D9-300 & C7-503",
      address: "Hanoi University of Science and Technology (HUST)\nNo. 1 Dai Co Viet, Hai Ba Trung, Hanoi, Vietnam",
      website: "www.100relab.com",
      copyright: "© 2026 100RE LABORATORY. All rights reserved. Toward 100% Renewable Energy."
    }
  };

  // 2. Data Access & Synchronization Engine
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function getHomepageData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Deep merge with default data
        return deepMerge(deepClone(DEFAULT_HOMEPAGE_DATA), parsed);
      }
    } catch (e) {
      console.warn('[HomepageEditor] Error reading localStorage:', e);
    }
    return deepClone(DEFAULT_HOMEPAGE_DATA);
  }

  function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object && !Array.isArray(source[key]) && key in target) {
        Object.assign(source[key], deepMerge(target[key], source[key]));
      }
    }
    Object.assign(target || {}, source);
    return target;
  }

  async function fetchServerHomepageData() {
    try {
      const res = await fetch(API_ENDPOINT);
      if (res.ok) {
        const data = await res.json();
        if (data && !data.notFound && typeof data === 'object') {
          const merged = deepMerge(deepClone(DEFAULT_HOMEPAGE_DATA), data);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          renderHomepageDOM(merged);
          return merged;
        }
      }
    } catch (e) {
      // Offline or local development fallback
    }
    return null;
  }

  async function saveHomepageData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    renderHomepageDOM(data);

    // Sync with Cloudflare KV / Backend
    try {
      const token = localStorage.getItem('100re_token');
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const res = await fetch(API_ENDPOINT, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
      });
      if (res.ok) {
        console.log('[HomepageEditor] Saved and synchronized to KV Database successfully.');
      }
    } catch (e) {
      console.warn('[HomepageEditor] Offline save, synced to localStorage.');
    }

    if (typeof showToast === 'function') {
      showToast('Đã lưu thay đổi trang chủ thành công!');
    } else {
      alert('Đã lưu thay đổi thành công!');
    }

    window.dispatchEvent(new CustomEvent('100re_homepage_updated', { detail: data }));
  }

  // 3. Permission Checker
  function hasHomepageEditRights() {
    const token = localStorage.getItem('100re_token');
    const isAdmin = localStorage.getItem('100re_is_admin') === 'true';
    const role = (localStorage.getItem('100re_user_role') || '').toLowerCase();
    const user = (localStorage.getItem('100re_logged_username') || '').toLowerCase();

    if (!token && !document.body.classList.contains('admin-mode')) {
      return false;
    }

    if (isAdmin || role === 'admin' || role === 'supervisor' || role === 'team_leader' || role === 'teamleader') {
      return true;
    }

    if (user === '100re' || user === 'admin' || user === 'supervisor' || user.includes('leader')) {
      return true;
    }

    return document.body.classList.contains('admin-mode');
  }

  // 4. Render Homepage DOM
  function renderHomepageDOM(data) {
    if (!data) data = getHomepageData();

    // A. Hero
    if (data.hero) {
      const heroTitle = document.querySelector('.home-hero-title');
      if (heroTitle) heroTitle.innerHTML = data.hero.title;

      const heroDesc = document.querySelector('.home-master-hero .page-hero-desc');
      if (heroDesc) heroDesc.textContent = data.hero.desc;

      const btn1 = document.querySelector('.home-master-hero .btn-primary:nth-child(1)');
      if (btn1) {
        btn1.innerHTML = `<i class="fa-solid fa-user-plus"></i> ${escapeHtml(data.hero.btn1Text || 'JOIN US')}`;
        btn1.href = data.hero.btn1Link || 'join-us.html';
      }

      const btn2 = document.querySelector('.home-master-hero .btn-primary:nth-child(2)');
      if (btn2) {
        btn2.innerHTML = `<i class="fa-solid fa-atom"></i> ${escapeHtml(data.hero.btn2Text || 'EXPLORE RESEARCH')}`;
        btn2.href = data.hero.btn2Link || 'research-areas.html';
      }
    }

    // B. Stats
    if (data.stats) {
      const statCards = document.querySelectorAll('.stats-section .stat-card');
      if (statCards.length >= 4) {
        if (statCards[0].querySelector('.stat-number')) statCards[0].querySelector('.stat-number').textContent = data.stats.stat1Num;
        if (statCards[0].querySelector('.stat-label')) statCards[0].querySelector('.stat-label').textContent = data.stats.stat1Label;

        if (statCards[1].querySelector('.stat-number')) statCards[1].querySelector('.stat-number').textContent = data.stats.stat2Num;
        if (statCards[1].querySelector('.stat-label')) statCards[1].querySelector('.stat-label').textContent = data.stats.stat2Label;

        if (statCards[2].querySelector('.stat-number')) statCards[2].querySelector('.stat-number').textContent = data.stats.stat3Num;
        if (statCards[2].querySelector('.stat-label')) statCards[2].querySelector('.stat-label').textContent = data.stats.stat3Label;

        if (statCards[3].querySelector('.stat-number')) statCards[3].querySelector('.stat-number').textContent = data.stats.stat4Num;
        if (statCards[3].querySelector('.stat-label')) statCards[3].querySelector('.stat-label').textContent = data.stats.stat4Label;
      }
    }

    // C. Goals
    if (data.goals) {
      const goalsSection = document.getElementById('section-goals');
      if (goalsSection) {
        const titleEl = goalsSection.querySelector('h2');
        if (titleEl) titleEl.textContent = data.goals.title;

        const paragraphs = goalsSection.querySelectorAll('.hp-goals-content p');
        if (paragraphs.length >= 3) {
          paragraphs[0].innerHTML = data.goals.p1;
          paragraphs[1].innerHTML = data.goals.p2;
          paragraphs[2].innerHTML = data.goals.p3;
        }

        const authorEl = goalsSection.querySelector('.hp-goals-author');
        if (authorEl) authorEl.innerHTML = `<i class="fa-solid fa-quote-left" style="color: #16a34a; margin-right: 8px;"></i> <strong>${escapeHtml(data.goals.author)}</strong>`;

        const dateEl = goalsSection.querySelector('.hp-goals-date');
        if (dateEl) dateEl.innerHTML = `<i class="fa-regular fa-calendar" style="margin-right: 6px;"></i> ${escapeHtml(data.goals.date)}`;
      }
    }

    // D. Platform Header
    if (data.platformHeader) {
      const pHeader = document.querySelector('.rpe-header-block');
      if (pHeader) {
        const titleEl = pHeader.querySelector('.rpe-main-title');
        if (titleEl) titleEl.textContent = data.platformHeader.title;

        const leadEl = pHeader.querySelector('.rpe-lead-paragraph');
        if (leadEl) leadEl.innerHTML = data.platformHeader.lead;

        const subgroups = pHeader.querySelectorAll('.rpe-intro-subgroup');
        if (subgroups.length >= 2) {
          const s1Title = subgroups[0].querySelector('.rpe-subheading');
          const s1Text = subgroups[0].querySelector('.rpe-intro-text');
          if (s1Title) s1Title.textContent = data.platformHeader.sub1Title;
          if (s1Text) s1Text.innerHTML = data.platformHeader.sub1Text;

          const s2Title = subgroups[1].querySelector('.rpe-subheading');
          const s2Text = subgroups[1].querySelector('.rpe-intro-text');
          if (s2Title) s2Title.textContent = data.platformHeader.sub2Title;
          if (s2Text) s2Text.innerHTML = data.platformHeader.sub2Text;
        }
      }
    }

    // E. 8 Research Teams
    if (data.teams) {
      Object.keys(data.teams).forEach(teamKey => {
        const teamObj = data.teams[teamKey];
        const unitEl = document.getElementById(`rpe-team-${teamKey}`);
        if (unitEl && teamObj) {
          const titleEl = unitEl.querySelector('.rpe-unit-title');
          if (titleEl) titleEl.textContent = teamObj.title;

          const imgEl = unitEl.querySelector('.rpe-unit-img');
          if (imgEl) {
            imgEl.src = teamObj.image || 'assets/images/logo.jpg';
            imgEl.alt = teamObj.title;
          }

          const captionEl = unitEl.querySelector('.rpe-caption-box');
          if (captionEl) captionEl.innerHTML = teamObj.caption;

          const paragraphs = unitEl.querySelectorAll('.rpe-text-col p');
          if (paragraphs.length >= 2) {
            paragraphs[0].innerHTML = teamObj.p1;
            paragraphs[1].innerHTML = teamObj.p2;
          }

          const linkEl = unitEl.querySelector('.rpe-explore-link');
          if (linkEl) {
            linkEl.href = teamObj.linkUrl || `members.html#grid-${teamKey}`;
            linkEl.innerHTML = `${escapeHtml(teamObj.linkText || 'View Team Members & Projects')} <i class="fa-solid fa-arrow-right"></i>`;
          }
        }
      });
    }

    // F. Gallery Preview
    if (data.gallery) {
      const galSection = document.getElementById('section-gallery-preview');
      if (galSection) {
        const titleEl = galSection.querySelector('.section-title');
        if (titleEl) titleEl.textContent = data.gallery.title;

        const linkEl = galSection.querySelector('.hp-gallery-link');
        if (linkEl) linkEl.innerHTML = `${escapeHtml(data.gallery.linkText || 'View Full Gallery')} <i class="fa-solid fa-arrow-right"></i>`;

        if (Array.isArray(data.gallery.items)) {
          const galItems = galSection.querySelectorAll('.gallery-item');
          data.gallery.items.forEach((item, idx) => {
            if (galItems[idx]) {
              const img = galItems[idx].querySelector('.gallery-img');
              const cap = galItems[idx].querySelector('.gallery-caption-overlay');
              if (img && item.image) img.src = item.image;
              if (cap && item.caption) cap.textContent = item.caption;
            }
          });
        }
      }
    }

    // G. Location
    if (data.location) {
      const locSection = document.getElementById('section-location');
      if (locSection) {
        const titleEl = locSection.querySelector('h3');
        if (titleEl) titleEl.textContent = data.location.title;

        const textP = locSection.querySelector('.hp-location-desc');
        if (textP) {
          textP.innerHTML = `<strong>${escapeHtml(data.location.university)}</strong><br>
          ${escapeHtml(data.location.offices)}<br>
          ${escapeHtml(data.location.address)}`;
        }

        const mapBtn = locSection.querySelector('.hp-location-map-btn');
        if (mapBtn && data.location.mapsUrl) {
          mapBtn.href = data.location.mapsUrl;
        }
      }
    }

    // H. Footer
    if (data.footer) {
      const footer = document.querySelector('.footer');
      if (footer) {
        const supName = footer.querySelector('.footer-sup-name');
        if (supName) supName.textContent = `${data.footer.supervisorName}, ${data.footer.supervisorTitle}`;

        const supPhone = footer.querySelector('.footer-sup-phone');
        if (supPhone) {
          supPhone.textContent = data.footer.supervisorPhone;
          supPhone.href = `tel:${data.footer.supervisorPhone.replace(/\s+/g, '')}`;
        }

        const supMail1 = footer.querySelector('.footer-sup-mail1');
        if (supMail1) {
          supMail1.textContent = data.footer.supervisorEmail1;
          supMail1.href = `mailto:${data.footer.supervisorEmail1}`;
        }

        const supMail2 = footer.querySelector('.footer-sup-mail2');
        if (supMail2) {
          supMail2.textContent = data.footer.supervisorEmail2;
          supMail2.href = `mailto:${data.footer.supervisorEmail2}`;
        }

        const cntName = footer.querySelector('.footer-cnt-name');
        if (cntName) cntName.textContent = `${data.footer.contactName}, ${data.footer.contactTitle}`;

        const cntPhone = footer.querySelector('.footer-cnt-phone');
        if (cntPhone) {
          cntPhone.textContent = data.footer.contactPhone;
          cntPhone.href = `tel:${data.footer.contactPhone.replace(/\s+/g, '')}`;
        }

        const cntMail = footer.querySelector('.footer-cnt-mail');
        if (cntMail) {
          cntMail.textContent = data.footer.contactEmail;
          cntMail.href = `mailto:${data.footer.contactEmail}`;
        }

        const fCopy = footer.querySelector('.footer-copyright');
        if (fCopy) fCopy.textContent = data.footer.copyright;
      }
    }
  }

  // 5. Admin Floating Edit Buttons Injector
  function injectAdminEditButtons() {
    // Clean up old edit buttons
    document.querySelectorAll('.hp-section-edit-btn').forEach(b => b.remove());

    if (!hasHomepageEditRights()) return;

    // Attach to Hero
    const heroSec = document.querySelector('.home-master-hero');
    if (heroSec) attachEditBtn(heroSec, 'hero', 'Chỉnh sửa Banner Hero');

    // Attach to Stats
    const statsSec = document.querySelector('.stats-section');
    if (statsSec) attachEditBtn(statsSec, 'stats', 'Chỉnh sửa Số Liệu Thống Kê');

    // Attach to Goals
    const goalsSec = document.getElementById('section-goals');
    if (goalsSec) attachEditBtn(goalsSec, 'goals', 'Chỉnh sửa Mục Tiêu (Goals)');

    // Attach to Platform Header
    const rpeHeader = document.querySelector('.rpe-header-block');
    if (rpeHeader) attachEditBtn(rpeHeader, 'platformHeader', 'Chỉnh sửa Giới Thiệu Nền Tảng');

    // Attach to each of the 8 Research Teams
    const teams = ['pv', 'ai', 'dr_uc', 'wind', 'smartgrid', 'ev', 'hydrogen', 'bess'];
    teams.forEach(teamKey => {
      const unit = document.getElementById(`rpe-team-${teamKey}`);
      if (unit) attachEditBtn(unit, 'team', `Chỉnh sửa nhóm ${teamKey.toUpperCase()}`, teamKey);
    });

    // Attach to Gallery
    const galSec = document.getElementById('section-gallery-preview');
    if (galSec) attachEditBtn(galSec, 'gallery', 'Chỉnh sửa Thư Viện Ảnh');

    // Attach to Location
    const locSec = document.getElementById('section-location');
    if (locSec) attachEditBtn(locSec, 'location', 'Chỉnh sửa Địa Chỉ & Bản Đồ');

    // Attach to Footer
    const footSec = document.querySelector('.footer');
    if (footSec) attachEditBtn(footSec, 'footer', 'Chỉnh sửa Thông Tin Liên Hệ & Footer');
  }

  function attachEditBtn(container, sectionType, btnLabel, subKey = null) {
    if (container.querySelector(`.hp-section-edit-btn[data-section="${sectionType}"]`)) return;

    container.classList.add('hp-editable-section');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hp-section-edit-btn';
    btn.setAttribute('data-section', sectionType);
    if (subKey) btn.setAttribute('data-subkey', subKey);
    btn.title = btnLabel;
    btn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> <span>${escapeHtml(btnLabel)}</span>`;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openHomepageEditModal(sectionType, subKey);
    });

    container.appendChild(btn);
  }

  // 6. Homepage Dynamic Edit Modal
  function injectModalHTML() {
    if (document.getElementById('hpEditModalBackdrop')) return;

    const modal = document.createElement('div');
    modal.id = 'hpEditModalBackdrop';
    modal.className = 'hp-modal-backdrop';
    modal.innerHTML = `
      <div class="hp-modal-card">
        <div class="hp-modal-header">
          <div class="hp-modal-title-group">
            <div class="hp-modal-icon"><i class="fa-solid fa-pen-to-square"></i></div>
            <h3 class="hp-modal-title" id="hpModalTitle">Chỉnh sửa nội dung</h3>
          </div>
          <button type="button" class="hp-modal-close" id="hpModalCloseBtn" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="hp-modal-body" id="hpModalBody">
          <!-- Dynamic form fields -->
        </div>
        <div class="hp-modal-footer">
          <button type="button" class="hp-btn-reset" id="hpBtnResetSection"><i class="fa-solid fa-rotate-left"></i> Khôi phục mặc định mục này</button>
          <div class="hp-modal-footer-right">
            <button type="button" class="hp-btn-cancel" id="hpBtnCancel">Hủy bỏ</button>
            <button type="button" class="hp-btn-save" id="hpBtnSave"><i class="fa-solid fa-check"></i> Lưu thay đổi</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Event listeners
    document.getElementById('hpModalCloseBtn').addEventListener('click', closeHomepageEditModal);
    document.getElementById('hpBtnCancel').addEventListener('click', closeHomepageEditModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeHomepageEditModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeHomepageEditModal();
      }
    });
  }

  let currentEditingSection = null;
  let currentEditingSubKey = null;

  function openHomepageEditModal(sectionType, subKey = null) {
    injectModalHTML();
    currentEditingSection = sectionType;
    currentEditingSubKey = subKey;

    const modal = document.getElementById('hpEditModalBackdrop');
    const modalTitle = document.getElementById('hpModalTitle');
    const modalBody = document.getElementById('hpModalBody');
    const allData = getHomepageData();

    modalBody.innerHTML = '';

    if (sectionType === 'hero') {
      modalTitle.textContent = 'Chỉnh sửa: Banner Hero Trang Chủ';
      const d = allData.hero || DEFAULT_HOMEPAGE_DATA.hero;
      modalBody.innerHTML = `
        <div class="hp-form-group">
          <label class="hp-form-label">Tiêu đề Hero (Hỗ trợ HTML/thẻ span làm nổi bật)</label>
          <input type="text" class="hp-form-input" id="inp_hero_title" value="${escapeAttr(d.title)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Mô tả / Tôn chỉ phòng Lab</label>
          <textarea class="hp-form-textarea" rows="4" id="inp_hero_desc">${escapeHtml(d.desc)}</textarea>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Nút 1 - Nhãn</label>
            <input type="text" class="hp-form-input" id="inp_hero_btn1Text" value="${escapeAttr(d.btn1Text)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Nút 1 - Đường dẫn (URL)</label>
            <input type="text" class="hp-form-input" id="inp_hero_btn1Link" value="${escapeAttr(d.btn1Link)}">
          </div>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Nút 2 - Nhãn</label>
            <input type="text" class="hp-form-input" id="inp_hero_btn2Text" value="${escapeAttr(d.btn2Text)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Nút 2 - Đường dẫn (URL)</label>
            <input type="text" class="hp-form-input" id="inp_hero_btn2Link" value="${escapeAttr(d.btn2Link)}">
          </div>
        </div>
      `;
    } else if (sectionType === 'stats') {
      modalTitle.textContent = 'Chỉnh sửa: Khối Số Liệu Thống Kê';
      const d = allData.stats || DEFAULT_HOMEPAGE_DATA.stats;
      modalBody.innerHTML = `
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Chỉ số 1 - Con số (VD: 200+)</label>
            <input type="text" class="hp-form-input" id="inp_stat1Num" value="${escapeAttr(d.stat1Num)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Chỉ số 1 - Tên nhãn (VD: Publications)</label>
            <input type="text" class="hp-form-input" id="inp_stat1Label" value="${escapeAttr(d.stat1Label)}">
          </div>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Chỉ số 2 - Con số (VD: 40+)</label>
            <input type="text" class="hp-form-input" id="inp_stat2Num" value="${escapeAttr(d.stat2Num)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Chỉ số 2 - Tên nhãn</label>
            <input type="text" class="hp-form-input" id="inp_stat2Label" value="${escapeAttr(d.stat2Label)}">
          </div>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Chỉ số 3 - Con số (VD: 8)</label>
            <input type="text" class="hp-form-input" id="inp_stat3Num" value="${escapeAttr(d.stat3Num)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Chỉ số 3 - Tên nhãn</label>
            <input type="text" class="hp-form-input" id="inp_stat3Label" value="${escapeAttr(d.stat3Label)}">
          </div>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Chỉ số 4 - Con số (VD: 10:1)</label>
            <input type="text" class="hp-form-input" id="inp_stat4Num" value="${escapeAttr(d.stat4Num)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Chỉ số 4 - Tên nhãn</label>
            <input type="text" class="hp-form-input" id="inp_stat4Label" value="${escapeAttr(d.stat4Label)}">
          </div>
        </div>
      `;
    } else if (sectionType === 'goals') {
      modalTitle.textContent = 'Chỉnh sửa: Mục Tiêu & Tầm Nhìn (Goals)';
      const d = allData.goals || DEFAULT_HOMEPAGE_DATA.goals;
      modalBody.innerHTML = `
        <div class="hp-form-group">
          <label class="hp-form-label">Tiêu đề mục</label>
          <input type="text" class="hp-form-input" id="inp_goals_title" value="${escapeAttr(d.title)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Đoạn văn 1</label>
          <textarea class="hp-form-textarea" rows="3" id="inp_goals_p1">${escapeHtml(d.p1)}</textarea>
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Đoạn văn 2</label>
          <textarea class="hp-form-textarea" rows="3" id="inp_goals_p2">${escapeHtml(d.p2)}</textarea>
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Đoạn văn 3 (Kết luận)</label>
          <textarea class="hp-form-textarea" rows="3" id="inp_goals_p3">${escapeHtml(d.p3)}</textarea>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Tác giả trích dẫn (Author)</label>
            <input type="text" class="hp-form-input" id="inp_goals_author" value="${escapeAttr(d.author)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Ngày thành lập / ghi nhận</label>
            <input type="text" class="hp-form-input" id="inp_goals_date" value="${escapeAttr(d.date)}">
          </div>
        </div>
      `;
    } else if (sectionType === 'platformHeader') {
      modalTitle.textContent = 'Chỉnh sửa: Giới Thiệu Nền Tảng Nghiên Cứu';
      const d = allData.platformHeader || DEFAULT_HOMEPAGE_DATA.platformHeader;
      modalBody.innerHTML = `
        <div class="hp-form-group">
          <label class="hp-form-label">Tiêu đề chính nền tảng</label>
          <input type="text" class="hp-form-input" id="inp_rpe_title" value="${escapeAttr(d.title)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Đoạn mở đầu (Lead paragraph)</label>
          <textarea class="hp-form-textarea" rows="4" id="inp_rpe_lead">${escapeHtml(d.lead)}</textarea>
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Tiêu đề phụ 1 (Hạ tầng Lab)</label>
          <input type="text" class="hp-form-input" id="inp_rpe_sub1Title" value="${escapeAttr(d.sub1Title)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Nội dung phụ 1</label>
          <textarea class="hp-form-textarea" rows="4" id="inp_rpe_sub1Text">${escapeHtml(d.sub1Text)}</textarea>
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Tiêu đề phụ 2 (8 Nhóm nghiên cứu)</label>
          <input type="text" class="hp-form-input" id="inp_rpe_sub2Title" value="${escapeAttr(d.sub2Title)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Nội dung phụ 2</label>
          <textarea class="hp-form-textarea" rows="2" id="inp_rpe_sub2Text">${escapeHtml(d.sub2Text)}</textarea>
        </div>
      `;
    } else if (sectionType === 'team' && subKey) {
      const d = (allData.teams && allData.teams[subKey]) || DEFAULT_HOMEPAGE_DATA.teams[subKey];
      modalTitle.textContent = `Chỉnh sửa Nhóm: ${d.title}`;
      modalBody.innerHTML = `
        <div class="hp-form-group">
          <label class="hp-form-label">Tên nhóm nghiên cứu &amp; Tiêu đề hiển thị</label>
          <input type="text" class="hp-form-input" id="inp_team_title" value="${escapeAttr(d.title)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Hình ảnh minh họa nhóm (URL hoặc tải từ máy tính)</label>
          <div style="display: flex; gap: 10px; margin-bottom: 8px;">
            <input type="text" class="hp-form-input" id="inp_team_image" value="${escapeAttr(d.image)}" placeholder="assets/images/banner_...jpg hoặc link ảnh">
            <label class="hp-btn-upload-file">
              <i class="fa-solid fa-cloud-arrow-up"></i> Chọn ảnh
              <input type="file" id="file_team_image" accept="image/*" style="display:none;">
            </label>
          </div>
          <div class="hp-image-preview-wrap">
            <img id="preview_team_image" src="${d.image || 'assets/images/logo.jpg'}" alt="Preview" onerror="this.src='assets/images/logo.jpg'">
          </div>
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Chú thích ảnh học thuật (Photo / Source Caption)</label>
          <input type="text" class="hp-form-input" id="inp_team_caption" value="${escapeAttr(d.caption)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Đoạn văn chuyên môn 1 (Mục tiêu &amp; Lĩnh vực cốt lõi)</label>
          <textarea class="hp-form-textarea" rows="4" id="inp_team_p1">${escapeHtml(d.p1)}</textarea>
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Đoạn văn chuyên môn 2 (Ứng dụng thực tiễn &amp; Hợp tác)</label>
          <textarea class="hp-form-textarea" rows="4" id="inp_team_p2">${escapeHtml(d.p2)}</textarea>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Chữ nút liên kết (Link Text)</label>
            <input type="text" class="hp-form-input" id="inp_team_linkText" value="${escapeAttr(d.linkText || 'View Team Members & Projects')}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Đường dẫn liên kết (Link URL)</label>
            <input type="text" class="hp-form-input" id="inp_team_linkUrl" value="${escapeAttr(d.linkUrl || `members.html#grid-${subKey}`)}">
          </div>
        </div>
      `;

      // Live image preview & file upload listener
      const fileInput = document.getElementById('file_team_image');
      const textInput = document.getElementById('inp_team_image');
      const imgPreview = document.getElementById('preview_team_image');

      textInput.addEventListener('input', () => {
        imgPreview.src = textInput.value || 'assets/images/logo.jpg';
      });

      fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            textInput.value = e.target.result;
            imgPreview.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    } else if (sectionType === 'gallery') {
      modalTitle.textContent = 'Chỉnh sửa: Thư Viện Ảnh Nổi Bật';
      const d = allData.gallery || DEFAULT_HOMEPAGE_DATA.gallery;
      let itemsHTML = '';
      (d.items || []).forEach((item, idx) => {
        itemsHTML += `
          <div class="hp-sub-card">
            <h5 style="margin: 0 0 8px 0; color: #16a34a;">Ảnh ${idx + 1}</h5>
            <div class="hp-form-row">
              <div class="hp-form-group">
                <label class="hp-form-label">Đường dẫn ảnh</label>
                <input type="text" class="hp-form-input inp-gal-img" data-idx="${idx}" value="${escapeAttr(item.image)}">
              </div>
              <div class="hp-form-group">
                <label class="hp-form-label">Chú thích ảnh</label>
                <input type="text" class="hp-form-input inp-gal-cap" data-idx="${idx}" value="${escapeAttr(item.caption)}">
              </div>
            </div>
          </div>
        `;
      });

      modalBody.innerHTML = `
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Tiêu đề thư viện ảnh</label>
            <input type="text" class="hp-form-input" id="inp_gal_title" value="${escapeAttr(d.title)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Nhãn nút xem thêm</label>
            <input type="text" class="hp-form-input" id="inp_gal_linkText" value="${escapeAttr(d.linkText)}">
          </div>
        </div>
        <h4 style="margin: 16px 0 10px 0; font-size: 0.95rem; color: #0f172a;">4 Ảnh hiển thị trên trang chủ:</h4>
        ${itemsHTML}
      `;
    } else if (sectionType === 'location') {
      modalTitle.textContent = 'Chỉnh sửa: Địa Chỉ & Vị Trí Phòng Lab';
      const d = allData.location || DEFAULT_HOMEPAGE_DATA.location;
      modalBody.innerHTML = `
        <div class="hp-form-group">
          <label class="hp-form-label">Tiêu đề mục</label>
          <input type="text" class="hp-form-input" id="inp_loc_title" value="${escapeAttr(d.title)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Đơn vị / Trường Đại học</label>
          <input type="text" class="hp-form-input" id="inp_loc_uni" value="${escapeAttr(d.university)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Phòng làm việc (Offices)</label>
          <input type="text" class="hp-form-input" id="inp_loc_offices" value="${escapeAttr(d.offices)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Địa chỉ chi tiết</label>
          <input type="text" class="hp-form-input" id="inp_loc_address" value="${escapeAttr(d.address)}">
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Đường dẫn Google Maps</label>
          <input type="text" class="hp-form-input" id="inp_loc_mapsUrl" value="${escapeAttr(d.mapsUrl)}">
        </div>
      `;
    } else if (sectionType === 'footer') {
      modalTitle.textContent = 'Chỉnh sửa: Thông Tin Footer & Liên Hệ';
      const d = allData.footer || DEFAULT_HOMEPAGE_DATA.footer;
      modalBody.innerHTML = `
        <h4 style="color: #16a34a; margin: 0 0 10px 0;">1. Người phụ trách phòng Lab (Supervisor)</h4>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Họ và tên</label>
            <input type="text" class="hp-form-input" id="inp_foot_supName" value="${escapeAttr(d.supervisorName)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Học hàm / Học vị</label>
            <input type="text" class="hp-form-input" id="inp_foot_supTitle" value="${escapeAttr(d.supervisorTitle)}">
          </div>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Số điện thoại</label>
            <input type="text" class="hp-form-input" id="inp_foot_supPhone" value="${escapeAttr(d.supervisorPhone)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Email 1 (HUST)</label>
            <input type="text" class="hp-form-input" id="inp_foot_supEmail1" value="${escapeAttr(d.supervisorEmail1)}">
          </div>
        </div>
        <div class="hp-form-group">
          <label class="hp-form-label">Email 2 (Quốc tế)</label>
          <input type="text" class="hp-form-input" id="inp_foot_supEmail2" value="${escapeAttr(d.supervisorEmail2)}">
        </div>

        <h4 style="color: #16a34a; margin: 18px 0 10px 0;">2. Liên hệ thông tin chung (Contact for Information)</h4>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Họ và tên</label>
            <input type="text" class="hp-form-input" id="inp_foot_cntName" value="${escapeAttr(d.contactName)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Học vị / Vị trí</label>
            <input type="text" class="hp-form-input" id="inp_foot_cntTitle" value="${escapeAttr(d.contactTitle)}">
          </div>
        </div>
        <div class="hp-form-row">
          <div class="hp-form-group">
            <label class="hp-form-label">Số điện thoại</label>
            <input type="text" class="hp-form-input" id="inp_foot_cntPhone" value="${escapeAttr(d.contactPhone)}">
          </div>
          <div class="hp-form-group">
            <label class="hp-form-label">Email</label>
            <input type="text" class="hp-form-input" id="inp_foot_cntEmail" value="${escapeAttr(d.contactEmail)}">
          </div>
        </div>

        <h4 style="color: #16a34a; margin: 18px 0 10px 0;">3. Bản quyền</h4>
        <div class="hp-form-group">
          <label class="hp-form-label">Dòng bản quyền</label>
          <input type="text" class="hp-form-input" id="inp_foot_copyright" value="${escapeAttr(d.copyright)}">
        </div>
      `;
    }

    // Attach Save Button Handler
    const saveBtn = document.getElementById('hpBtnSave');
    saveBtn.onclick = handleSaveSectionModal;

    // Attach Reset Section Handler
    const resetBtn = document.getElementById('hpBtnResetSection');
    resetBtn.onclick = handleResetSectionModal;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeHomepageEditModal() {
    const modal = document.getElementById('hpEditModalBackdrop');
    if (modal) modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function handleSaveSectionModal() {
    const data = getHomepageData();

    if (currentEditingSection === 'hero') {
      data.hero = {
        title: document.getElementById('inp_hero_title').value.trim(),
        desc: document.getElementById('inp_hero_desc').value.trim(),
        btn1Text: document.getElementById('inp_hero_btn1Text').value.trim(),
        btn1Link: document.getElementById('inp_hero_btn1Link').value.trim(),
        btn2Text: document.getElementById('inp_hero_btn2Text').value.trim(),
        btn2Link: document.getElementById('inp_hero_btn2Link').value.trim()
      };
    } else if (currentEditingSection === 'stats') {
      data.stats = {
        stat1Num: document.getElementById('inp_stat1Num').value.trim(),
        stat1Label: document.getElementById('inp_stat1Label').value.trim(),
        stat2Num: document.getElementById('inp_stat2Num').value.trim(),
        stat2Label: document.getElementById('inp_stat2Label').value.trim(),
        stat3Num: document.getElementById('inp_stat3Num').value.trim(),
        stat3Label: document.getElementById('inp_stat3Label').value.trim(),
        stat4Num: document.getElementById('inp_stat4Num').value.trim(),
        stat4Label: document.getElementById('inp_stat4Label').value.trim()
      };
    } else if (currentEditingSection === 'goals') {
      data.goals = {
        title: document.getElementById('inp_goals_title').value.trim(),
        p1: document.getElementById('inp_goals_p1').value.trim(),
        p2: document.getElementById('inp_goals_p2').value.trim(),
        p3: document.getElementById('inp_goals_p3').value.trim(),
        author: document.getElementById('inp_goals_author').value.trim(),
        date: document.getElementById('inp_goals_date').value.trim()
      };
    } else if (currentEditingSection === 'platformHeader') {
      data.platformHeader = {
        title: document.getElementById('inp_rpe_title').value.trim(),
        lead: document.getElementById('inp_rpe_lead').value.trim(),
        sub1Title: document.getElementById('inp_rpe_sub1Title').value.trim(),
        sub1Text: document.getElementById('inp_rpe_sub1Text').value.trim(),
        sub2Title: document.getElementById('inp_rpe_sub2Title').value.trim(),
        sub2Text: document.getElementById('inp_rpe_sub2Text').value.trim()
      };
    } else if (currentEditingSection === 'team' && currentEditingSubKey) {
      if (!data.teams) data.teams = {};
      data.teams[currentEditingSubKey] = {
        id: currentEditingSubKey,
        title: document.getElementById('inp_team_title').value.trim(),
        image: document.getElementById('inp_team_image').value.trim(),
        caption: document.getElementById('inp_team_caption').value.trim(),
        p1: document.getElementById('inp_team_p1').value.trim(),
        p2: document.getElementById('inp_team_p2').value.trim(),
        linkText: document.getElementById('inp_team_linkText').value.trim(),
        linkUrl: document.getElementById('inp_team_linkUrl').value.trim()
      };
    } else if (currentEditingSection === 'gallery') {
      const items = [];
      const imgInputs = document.querySelectorAll('.inp-gal-img');
      const capInputs = document.querySelectorAll('.inp-gal-cap');
      imgInputs.forEach((inp, idx) => {
        items.push({
          image: inp.value.trim(),
          caption: capInputs[idx] ? capInputs[idx].value.trim() : ''
        });
      });
      data.gallery = {
        title: document.getElementById('inp_gal_title').value.trim(),
        linkText: document.getElementById('inp_gal_linkText').value.trim(),
        items
      };
    } else if (currentEditingSection === 'location') {
      data.location = {
        title: document.getElementById('inp_loc_title').value.trim(),
        university: document.getElementById('inp_loc_uni').value.trim(),
        offices: document.getElementById('inp_loc_offices').value.trim(),
        address: document.getElementById('inp_loc_address').value.trim(),
        mapsUrl: document.getElementById('inp_loc_mapsUrl').value.trim()
      };
    } else if (currentEditingSection === 'footer') {
      data.footer = {
        ...data.footer,
        supervisorName: document.getElementById('inp_foot_supName').value.trim(),
        supervisorTitle: document.getElementById('inp_foot_supTitle').value.trim(),
        supervisorPhone: document.getElementById('inp_foot_supPhone').value.trim(),
        supervisorEmail1: document.getElementById('inp_foot_supEmail1').value.trim(),
        supervisorEmail2: document.getElementById('inp_foot_supEmail2').value.trim(),
        contactName: document.getElementById('inp_foot_cntName').value.trim(),
        contactTitle: document.getElementById('inp_foot_cntTitle').value.trim(),
        contactPhone: document.getElementById('inp_foot_cntPhone').value.trim(),
        contactEmail: document.getElementById('inp_foot_cntEmail').value.trim(),
        copyright: document.getElementById('inp_foot_copyright').value.trim()
      };
    }

    saveHomepageData(data);
    closeHomepageEditModal();
  }

  function handleResetSectionModal() {
    if (!confirm('Bạn có chắc chắn muốn khôi phục mục này về nội dung mặc định của phòng Lab?')) return;

    const data = getHomepageData();
    if (currentEditingSection === 'hero') {
      data.hero = deepClone(DEFAULT_HOMEPAGE_DATA.hero);
    } else if (currentEditingSection === 'stats') {
      data.stats = deepClone(DEFAULT_HOMEPAGE_DATA.stats);
    } else if (currentEditingSection === 'goals') {
      data.goals = deepClone(DEFAULT_HOMEPAGE_DATA.goals);
    } else if (currentEditingSection === 'platformHeader') {
      data.platformHeader = deepClone(DEFAULT_HOMEPAGE_DATA.platformHeader);
    } else if (currentEditingSection === 'team' && currentEditingSubKey) {
      if (data.teams && DEFAULT_HOMEPAGE_DATA.teams[currentEditingSubKey]) {
        data.teams[currentEditingSubKey] = deepClone(DEFAULT_HOMEPAGE_DATA.teams[currentEditingSubKey]);
      }
    } else if (currentEditingSection === 'gallery') {
      data.gallery = deepClone(DEFAULT_HOMEPAGE_DATA.gallery);
    } else if (currentEditingSection === 'location') {
      data.location = deepClone(DEFAULT_HOMEPAGE_DATA.location);
    } else if (currentEditingSection === 'footer') {
      data.footer = deepClone(DEFAULT_HOMEPAGE_DATA.footer);
    }

    saveHomepageData(data);
    closeHomepageEditModal();
  }

  // Helper Escape Functions
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // 7. Initializer
  function init() {
    // Render stored or default content
    const initialData = getHomepageData();
    renderHomepageDOM(initialData);

    // Sync from server
    fetchServerHomepageData();

    // Inject buttons on start
    injectAdminEditButtons();

    // Listen for auth state changes on body
    const observer = new MutationObserver(() => {
      injectAdminEditButtons();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Expose API
    window.HomepageEditor = {
      getData: getHomepageData,
      saveData: saveHomepageData,
      openModal: openHomepageEditModal,
      resetAll() {
        if (confirm('Khôi phục toàn bộ trang chủ về mặc định gốc?')) {
          localStorage.removeItem(STORAGE_KEY);
          renderHomepageDOM(DEFAULT_HOMEPAGE_DATA);
          saveHomepageData(DEFAULT_HOMEPAGE_DATA);
        }
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
