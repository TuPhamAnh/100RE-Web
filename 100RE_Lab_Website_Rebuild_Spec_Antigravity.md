# 100RE LABORATORY — Full Website Rebuild Specification

> **Mục đích:** dùng file này làm **source of truth** cho Antigravity/Codex/Gemini khi code lại frontend của `https://www.100relab.com/` mà **không phụ thuộc Wix**.
>
> **Ngày rà soát:** 28/08/2026.
>
> **Stack khuyến nghị:** **Astro + TypeScript + Tailwind CSS + Astro Content Collections**, build static và deploy lên **Cloudflare Pages**.
>
> **Nguyên tắc:** giữ đầy đủ kiến trúc thông tin và ý nghĩa nội dung của website hiện tại, nhưng tổ chức code sạch hơn, responsive tốt hơn, SEO tốt hơn, không mang theo các lỗi route/link của Wix.

---

# 1. Mục tiêu tổng thể

100RE Lab là website học thuật/nghiên cứu với các nhiệm vụ:

1. Giới thiệu phòng thí nghiệm.
2. Trình bày vision/goals.
3. Trình bày research areas và research teams.
4. Trình bày research experiences.
5. Liệt kê publications.
6. Liệt kê collaborations.
7. Trình bày achievements.
8. Trình bày projects.
9. Đăng news/blog.
10. Lưu các hoạt động dạng Journey.
11. Giới thiệu members.
12. Giới thiệu alumni.
13. Gallery ảnh.
14. Fund raising.
15. Hướng dẫn join Lab.
16. Lab equipment.
17. Contact/location.

Website mới phải ưu tiên:

- tốc độ;
- responsive;
- SEO;
- content/data tách khỏi UI;
- reusable components;
- static rendering;
- không phụ thuộc Wix;
- dễ deploy lên Cloudflare Pages.

---

# 2. Các lỗi/điểm cần sửa khi rời Wix

- Menu **Mini Scada** hiện đang dẫn sang Alumni → **không được sao chép lỗi này**.
- Menu **Useful Links** không truy cập ổn định qua crawler → website mới phải có route thật hoặc bỏ khỏi menu sau khi xác minh.
- Một số URL xấu:
  - `/copy-of-publications`
  - `/general-5`
  - `/mc-8bt`
  - các Journey URL dạng `copy-of-*`, `bản-sao-của-*`.
- Research URLs không nhất quán: `/photonvoltaic`, `/ai`, `/uc`, `/sg`, `/h2`, `/bess`, `/wind`, `/dr`.
- Trang Project hiện ở `/copy-of-publications`.
- EV và BESS hiển thị như hai research area ở trang chính nhưng lại dùng chung trang detail `EV & BESS`.
- Footer/contact bị lặp trên mọi trang → phải thành component chung.
- Không giữ dependency production lên `static.wixstatic.com`; nếu có quyền asset, export về repo/R2/storage riêng.
- Không copy Wix HTML/runtime; cần **rebuild** bằng semantic HTML + structured content.

---

# 3. Information Architecture hiện tại

```text
About

Research
├── Research Areas
├── Research Experiences
├── Publications
└── Collaborations

Achievement
Project
News

Journey
├── 100RE Lab General Meeting (2024)
├── Hội nghị quốc tế GMSARN lần thứ 18
├── Japan, Sep 2023
├── Tọa đàm 29.08.2023
├── Denmark, Aug 2023
├── Washington DC, July 2023
├── 100RE Lab Trip 2023
├── Tập huấn về năng lượng bền vững (SE4Y)
├── ABB Scholarship 2022
├── SVNCKH2022
├── SAKURA SCHOLARSHIP PROGRAM 2023
├── SEATUC2023
└── 2nd Regional CSO Energy Workshop & Training

Member
└── Alumni

Photos

Others
├── Mini Scada
├── Fund Raise
├── How to be one of us?
├── Useful Links
└── Lab Equipment
```

---

# 4. Route map đề xuất

```text
/
├── /about
├── /research
│   ├── /areas
│   │   ├── /solar
│   │   ├── /artificial-intelligence
│   │   ├── /unit-commitment
│   │   ├── /smart-grid
│   │   ├── /hydrogen
│   │   ├── /battery-energy-storage
│   │   ├── /electric-vehicle
│   │   ├── /wind
│   │   └── /demand-response
│   ├── /experiences
│   ├── /publications
│   └── /collaborations
├── /achievements
├── /projects
├── /news
│   └── /[slug]
├── /journey
│   └── /[slug]
├── /members
├── /alumni
├── /photos
├── /fund-raise
├── /join-us
├── /useful-links
├── /lab-equipment
└── /mini-scada
```

### Redirect URL cũ → mới

```text
/research-areas              -> /research/areas
/research-experiences        -> /research/experiences
/publications                -> /research/publications
/collaborations              -> /research/collaborations
/achievement                 -> /achievements
/copy-of-publications        -> /projects
/blog                        -> /news
/member                      -> /members
/100relabalumni              -> /alumni
/photo                       -> /photos
/fund-raise                  -> /fund-raise
/general-5                   -> /join-us
/mc-8bt                      -> /lab-equipment
/photonvoltaic               -> /research/areas/solar
/ai                          -> /research/areas/artificial-intelligence
/uc                          -> /research/areas/unit-commitment
/sg                          -> /research/areas/smart-grid
/h2                          -> /research/areas/hydrogen
/bess                        -> /research/areas/battery-energy-storage
/wind                        -> /research/areas/wind
/dr                          -> /research/areas/demand-response
```

---

# 5. Global Layout

```text
<AppLayout>
  <SiteHeader />
  <MainNavigation />
  <main>
    <slot />
  </main>
  <SiteFooter />
</AppLayout>
```

## 5.1 Header

Cần có:

- 100RE logo;
- tagline: `Toward 100% Renewable Energy`;
- desktop navigation;
- dropdown:
  - Research;
  - Journey;
  - Member;
  - Others;
- mobile hamburger/drawer;
- active state;
- keyboard navigation;
- `aria-expanded`, focus state.

Desktop:

```text
[LOGO] Toward 100% Renewable Energy

About | Research v | Achievement | Project | News | Journey v | Member v | Photos | Others v
```

Mobile:

```text
[LOGO]                                             [☰]

Drawer
About
Research
  Research Areas
  Research Experiences
  Publications
  Collaborations
...
```

## 5.2 Footer

### Supervisor

- Nguyen Duc Tuyen, Assoc. Prof
- Tel: +84 986 509 059
- tuyen.nguyenduc@hust.edu.vn
- i029999@shibaura-it.ac.jp

### Contact for more information

- Nguyen Tuan Anh, B.Eng
- Tel: +84 974 812 546
- anh.nt196322@sis.hust.edu.vn

### Laboratory Offices

- D9-300 & C7-503
- Hanoi University of Science and Technology
- 1 Dai Co Viet, Hanoi, Vietnam

Desktop: 3 columns. Mobile: 1 column.

---

# 6. Design System

Phong cách website hiện tại: academic, clean, nhiều khoảng trắng, ảnh nghiên cứu/sự kiện, text đen/xám, card/gallery.

## Màu đề xuất

```css
--color-primary:      #0F766E;
--color-primary-dark: #115E59;
--color-accent:       #22C55E;
--color-text:         #1F2937;
--color-muted:        #6B7280;
--color-border:       #E5E7EB;
--color-background:   #FFFFFF;
--color-surface:      #F8FAFC;
```

Nếu cần bám thương hiệu hơn, lấy palette từ logo sau khi export asset.

## Typography

Khuyến nghị:

- headings: Inter / Manrope / Source Sans 3;
- body: Inter / Source Sans 3.

## Container

```css
max-width: 1200px;
margin-inline: auto;
padding-inline: 20px; /* mobile */
```

Tablet: 32px. Desktop: 40px.

## Spacing scale

```text
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
```

## Radius

```text
cards: 12px
buttons: 8px
```

---

# 7. Component Architecture

```text
src/components/
├── layout/
│   ├── SiteHeader.astro
│   ├── DesktopNav.astro
│   ├── MobileNav.astro
│   ├── SiteFooter.astro
│   ├── PageContainer.astro
│   └── Breadcrumbs.astro
│
├── common/
│   ├── PageHero.astro
│   ├── SectionHeader.astro
│   ├── Button.astro
│   ├── StatCard.astro
│   ├── ContentCard.astro
│   ├── SearchInput.astro
│   ├── EmptyState.astro
│   └── Pagination.astro
│
├── research/
│   ├── ResearchAreaCard.astro
│   ├── ResearchSection.astro
│   └── ResearchFigure.astro
│
├── people/
│   ├── SupervisorCard.astro
│   ├── MemberCard.astro
│   ├── TeamSection.astro
│   └── AlumniCard.astro
│
├── publications/
│   ├── PublicationItem.astro
│   ├── PublicationSection.astro
│   └── PublicationFilters.tsx
│
├── news/
│   ├── NewsCard.astro
│   ├── NewsMeta.astro
│   └── RecentPosts.astro
│
├── journey/
│   ├── JourneyCard.astro
│   └── JourneyGallery.astro
│
├── gallery/
│   ├── PhotoGrid.astro
│   ├── PhotoCard.astro
│   └── Lightbox.tsx
│
├── equipment/
│   ├── EquipmentCard.astro
│   └── EquipmentGrid.astro
│
└── collaboration/
    ├── PartnerGrid.astro
    └── PartnerCard.astro
```

---

# 8. PAGE: Home / About

Nguồn: `https://www.100relab.com/`

## 8.1 Hero

- ảnh renewable/solar;
- H1: `Welcome to 100% Renewable Energy Lab`;
- CTA: `JOIN US` → `/join-us`.

## 8.2 What are our Goals?

Ý chính:

- lưới điện thay đổi nhanh do renewable energy;
- hệ thống một chiều dần chuyển sang hệ thống deregulated/multi-dimensional;
- có nhiều data layers và flexible operating methods;
- smart city/smart grid tạo cơ hội và thách thức;
- nhiều quốc gia hướng tới 100% renewable;
- 100RE Lab nghiên cứu vấn đề kỹ thuật và kinh tế của RE trong power grid.

Attribution:

- Nguyen Duc Tuyen
- July 05, 2018

## 8.3 Stats

| Metric | Value |
|---|---:|
| Publications | 200+ |
| Members | 40+ |
| Research Areas | 9 |
| Student Supervisor Ratio | 10:1 |

Desktop: 4 columns. Mobile: 2x2.

## 8.4 Home research teams

1. PV Team — Leader: Bui Quang Minh
2. Wind Team — Leader: Nguyen Hoang Nam
3. Hydrogen Team — Leader: Nguyen Hoang Anh
4. Smart Grid Team — Leader: Le Ngoc Dung
5. Electric Vehicle Team — Leader: Dao Quoc Khanh
6. Artificial Intelligence Team — Leader: Nguyen Trong Thanh
7. Unit Commitment Team — Leader: Nguyen Tuan Anh
8. Battery Storage System — Leader: Nguyen Quang Anh
9. Demand Response Team — Leader: Ta Xuan Hung

Data model:

```ts
type ResearchTeamPreview = {
  name: string
  leader: string
  image: string
  href: string
}
```

## 8.5 Home gallery

Ảnh liên quan:

- H2 system;
- Job Fair;
- Student Forum;
- Ha Tinh;
- Quang Ngai;
- bioenergy workshop;
- An Khe biomass plant;
- SVNCKH;
- other lab activities.

Dùng gallery data, không hard-code.

## 8.6 Page Visit

Website Wix có `Page Visit`.

Bản mới:

- ưu tiên Cloudflare Web Analytics;
- không cần hiển thị counter công khai;
- nếu bắt buộc: Worker + KV/D1.

## 8.7 Location

Section `100RE Lab Location`.

Có thể render address + Open in Maps.

---

# 9. PAGE: Research Areas

Nguồn: `https://www.100relab.com/research-areas`

## Intro

Lab nghiên cứu theo 3 hướng:

1. projects từ nhiều nguồn;
2. research theo request của company/institute/university;
3. self-funded để theo kịp topic mới.

## Research areas

### Solar Energy
- PV modeling;
- forecasting;
- PV SCADA;
- control;
- partial shading;
- hosting capacity.

### Artificial Intelligence
- renewable generation forecast;
- load forecast;
- PV fault detection;
- stability assessment;
- blockchain/electricity market.

### Unit Commitment
- generator scheduling;
- dispatch level;
- demand satisfaction;
- minimize cost;
- optimization.

### Smart Grid
- intelligent control;
- cybersecurity;
- ICT integration;
- system-operation optimization.

### Hydrogen
- gray/blue/green hydrogen context;
- renewable-powered green hydrogen.

### Battery Storage System
- transmission/distribution applications;
- frequency regulation;
- voltage regulation.

### Electric Vehicle
- EV-grid integration;
- power quality;
- optimization;
- distribution-grid impacts.

### Wind Energy
- LVRT;
- output smoothing;
- wind + BESS;
- grid-connected simulation.

### Demand Response
- DR-program design;
- benefit optimization;
- pricing/incentives;
- advanced solver.

---

# 10. Research Detail Template

```text
ResearchDetailLayout
├── Breadcrumb
├── PageHero
├── Overview
├── Vision / Background
├── Research Purpose
├── Solution Methods
├── Conducted Research
├── Current Research
├── Future Direction
├── Figures
└── Related Research Areas
```

Schema:

```ts
type ResearchArea = {
  title: string
  slug: string
  excerpt: string
  heroImage?: string
  vision?: string[]
  background?: string[]
  solutionMethods?: string[]
  themes?: string[]
  purposes?: string[]
  conductedResearch?: string[]
  currentResearch?: string[]
  futureDirections?: string[]
  figures?: {
    src: string
    caption: string
    alt: string
  }[]
}
```

---

# 11. Research Detail: Solar Energy

Old: `/photonvoltaic`

## Vision

- effective;
- flexible;
- adaptive PV systems;
- move toward 100% renewable energy.

## What we have done

- PV modeling;
- PV array reconfiguration;
- monitoring;
- controlling;
- optimizing PV systems.

## Future directions

- PV impacts on power system;
- community solar sharing;
- integrate PV with BESS, EV, Wind.

## Figures

- PV hosting capacity;
- PV monitoring/control/optimization;
- rooftop PV monitoring;
- output comparison under partial shading with/without reconfiguration.

---

# 12. Research Detail: Artificial Intelligence

Old: `/ai`

## Solution methods

- ANN
- RNN
- LSTM
- CNN-LSTM
- SAM-LSTM
- EDSACL

## Research themes

- solar irradiance forecasting;
- PV power forecasting;
- wind speed/power forecasting;
- PV fault detection;
- life-expectancy prediction;
- blockchain + AI.

## Research purpose

- long/medium/short-term forecasting;
- forecasting software;
- data analysis;
- classification algorithms.

## Plan

1. collect/preprocess data;
2. construct models;
3. compare;
4. evaluate.

---

# 13. Research Detail: Unit Commitment

Old: `/uc`

## Current status

- renewable penetration rises;
- smart grid/distributed generation development;
- microgrid growth.

## Purpose

- develop UC for microgrid;
- assess power-source components;
- improve optimization algorithms.

## Current research

- MILP;
- MILP vs GA;
- probabilistic uncertainty.

## Conducted

- stochastic UC + demand response using GA;
- UC with BESS + DR.

---

# 14. Research Detail: Smart Grid

Old: `/sg`

## Definition

Digital electricity network with two-way communication.

## Characteristics

- Smart Monitoring & Control
- End-user Satisfaction
- Economic Optimization
- Security
- Transparency
- Reliability

## Potential research

- intelligent grid control;
- cybersecurity;
- system protection;
- DSM;
- intelligent energy trading;
- VPP;
- blockchain;
- AI;
- ICT.

---

# 15. Research Detail: Hydrogen

Old: `/h2`

## Roles

- industry;
- transport;
- buildings;
- power system.

## Green Hydrogen

Explain transition from fossil-based hydrogen toward renewable-powered green hydrogen.

## Impacted sectors

Power:
- long-term/seasonal storage;
- seasonal balancing;
- power-heat coupling.

Transport:
- long-haul aviation;
- maritime shipping.

Industry:
- DRI steel;
- ammonia;
- chemicals.

Buildings:
- heating grids.

---

# 16. Research Detail: Electric Vehicle & BESS

Old: `/bess`

## Electric Vehicle

- EV affects transport and power system;
- distribution voltage;
- power flow;
- EV charging;
- electricity-market questions.

## BESS

- supports high renewable penetration;
- frequency stability;
- frequency regulation.

## Website mới

Khuyến nghị tách:

```text
/research/areas/electric-vehicle
/research/areas/battery-energy-storage
```

---

# 17. Research Detail: Wind

Old: `/wind`

## Background

- rapid wind growth;
- fluctuation/intermittency;
- harmonic;
- LVRT.

## Purpose

- smooth output;
- improve LVRT.

## Conducted research

- BESS integrated wind;
- output smoothing;
- LVRT improvement.

## Current research

- MATLAB/Simulink;
- with/without BESS;
- scenario evaluation.

---

# 18. Research Detail: Demand Response

Old: `/dr`

## Definition

End-use customers change electricity demand in response to price, incentives, or grid-operator directions.

## Background

- load increases;
- ICT develops;
- DR becomes important in smart grid.

## Purpose

- incentive/payment design;
- electricity price;
- market/power-system interaction;
- optimize benefit among participants.

## Conducted

- incentive pricing based on satisfaction function.

---

# 19. PAGE: Research Experiences

Nguồn: `https://www.100relab.com/research-experiences`

Nên render bằng **vertical timeline**.

## 2005–2006

Bachelor thesis:
- Cau Giay aging grid;
- reduce losses;
- distribution redesign;
- new load installation;
- optimize power flow.

## 2006

DSM project:
- National Political Institute;
- reduce losses;
- efficiency;
- technical/economic/social approaches.

## 2006–2007

Northern Region Load Dispatch Center:
- training;
- power plants;
- major substations.

## 2007–2008

HUST research:
- power system design;
- stability;
- power quality;
- lightning protection;
- relay protection.

## 2008–2009

Master thesis: Dynamic Model Simulation of SOFC.

Topics:
- SOFC;
- heat balance;
- operating temperature;
- CH4;
- internal reforming;
- heat exchanger;
- load following;
- fuel/air feedback;
- temperature control.

## 2011

Waseda University – TEPCO:
- equivalent induction motor models;
- MidFielder;
- PSCAD.

## 2009–2012

PhD:
- islanding detection;
- negative-sequence;
- impedance measurement;
- active injection;
- Adaptive Notch Filter;
- fault ride-through;
- SSTS;
- droop controller;
- PSCAD/SimPowerSystems/experiment.

## 2012–2015

Postdoc at Shibaura:
- PV + Active Power Filter;
- adaptive notch filter;
- APF;
- DG optimization;
- remote energy system;
- frequency stabilization.

## 2015–2017

Tokyo University of Science:
- NEDO;
- small wind turbine;
- PCS;
- measurements;
- FRT;
- data logger/anemometer.

## 2017–2018

AIST:
- 20 kW solar;
- water electrolyzer;
- MPPT;
- Li-ion capacitor;
- current smoothing.

---

# 20. PAGE: Publications

Nguồn: `https://www.100relab.com/publications`

## Sections

- International Journals
- Domestic Journals
- Conferences
- Book Chapter
- Other publications
- Invited Talks

Homepage nêu `200+ publications`.

Publication page hiện rất dài; **không hard-code citation vào page component**.

Schema:

```ts
type Publication = {
  id: string
  category:
    | "international-journal"
    | "domestic-journal"
    | "conference"
    | "book-chapter"
    | "other"
    | "invited-talk"
  year?: number
  authors: string[]
  title: string
  venue?: string
  volume?: string
  issue?: string
  pages?: string
  doi?: string
  url?: string
  quartile?: "Q1" | "Q2" | "Q3" | "Q4"
  language?: string
}
```

## UI

```text
Publications
[Search title / author / DOI...]

[All] [Journal] [Conference] [Book] [Talk]
[Year ▼] [Research Area ▼]

2025
Title
Authors
Venue · Q1 · DOI
```

Migration:

1. export publication content;
2. parse JSON/YAML;
3. normalize author;
4. extract DOI;
5. extract year;
6. category;
7. render component.

---

# 21. PAGE: Collaborations

Nguồn: `https://www.100relab.com/collaborations`

## Academic

- Nagoya University
- Electric Power University
- University of the Ryukyus
- Nanyang Technological University
- Hanoi University of Industry
- Shibaura Institute of Technology
- Gifu University
- Ho Chi Minh City University of Technology
- Tokyo University of Science

## Industry

- AFTER FIT
- TOSHIBA
- AIT
- ATS
- EVN
- GIZ
- NIRAS
- VIET
- SHIZEN ENERGY

## Other collaborators

- Goro Fujita
- Junji Kondoh
- Toshihisa Funabashi
- Takeyoshi Kato
- Hirokata Katano
- Yasutoshi Takemoto
- Yuan-Kang Wu
- Nguyen Dinh Hung
- Mohd Zamri Bin Mohd Yusop
- Nguyen Tuan Anh
- Tran Anh Thai
- Nguyen Nhat Nam
- Samet Biricik
- Tuyen Vu
- Tuan Ngo
- Dang Hoang Anh
- Pham Manh Hai
- BKContech

Schema:

```ts
type Partner = {
  name: string
  type: "academic" | "industry" | "individual" | "other"
  logo?: string
  url?: string
  role?: string
  institution?: string
}
```

UI:
- Academic/Industry: logo grid;
- Individual: list/card.

---

# 22. PAGE: Achievement

Nguồn: `https://www.100relab.com/achievement`

## Battle of Minds 2021

- global innovation challenge;
- team 4;
- business + engineering;
- energy solution;
- Vietnam local round:
  - 1st;
  - 200+ teams;
  - 800+ students;
  - $3000.
- global:
  - 13 countries;
  - 5th;
  - 650+ teams;
  - 2600+ students.

## Scientific Research 2021 Contest

- organized by MOET;
- team 5;
- solar radiation forecasting software based on deep learning;
- HUST representative;
- 460+ teams;
- 98 universities;
- 2nd in Science and Technology field.

## Student Forum 2020 & 2021

- Electrical/Energy Engineering academic forum;
- Sustainable Energy research.

## Student Forum 2022

- Hydrogen team: best presentation + bronze article;
- PV team: gold article.

## Other achievements

- Green Invention 2021 Contest;
- ASEAN Energy Youth Awards 2021;
- Youth For Climate Contest;
- Sustainable Energy Challenge 2021;
- Power Systems Engineers Alumni Scholarship / Toshiba;
- HUST excellence scholarship.

Schema:

```ts
type Achievement = {
  title: string
  year?: number
  organizer?: string
  summary: string
  rank?: string
  metrics?: string[]
  images?: string[]
}
```

---

# 23. PAGE: Projects

Nguồn: `https://www.100relab.com/copy-of-publications`

## University projects

### PV forecasting + reconfiguration
- forecast PV generation from PV + meteorological data;
- irradiance/temperature;
- PV array reconfiguration;
- reduce partial shading loss;
- experimental system at HUST;
- PV SCADA;
- DAQ;
- monitoring/control;
- automatic switching.

### Incentive Demand Response pricing
- social welfare optimization.

### PV I-V model
- I-V characteristics under irradiance/temperature;
- prediction under heterogeneous conditions.

## GIZ

### Behind-the-meter solar in Vietnam
Time: May 2021 – Dec 2021.
- support EREA;
- incentive framework;
- self-consumption;
- reduce grid injection;
- procurement/operation mechanisms.

### Smart Grid Roadmap
Time: Dec 2020 – Mar 2022.
- roadmap;
- GIZ/international partner;
- data gathering;
- interviews;
- SCADA/smart-grid legal/state analysis.

## VIETSE

### BESS in Vietnam Power System
Time: Jan 2021 – Oct 2021.
- BESS deployment report;
- international experience;
- voltage/frequency stability;
- market size;
- ancillary services;
- curtailment;
- policy/financial/technology recommendations.

## UNDP — Viet Nam Climate Promise

- youth learning;
- sustainable-energy dialogue;
- cohort of 10 youths;
- Youth4Climate Learning Hub;
- 5 multimedia videos;
- training modules;
- meetups;
- youth-led energy-transition project.

## A0 / Vietnam Dispatching Centers

Time: Jan 2021 – Feb 2021.
- SCADA/DCS implementation;
- technology/protocol/hardware;
- SCADA/DCS/EMS report.

## GreenID

Time: Dec 2021 – Feb 2022.
- EV development implications;
- incentive-policy framework.

## Ha Tinh Power Company

Time: May 2021 – Jun 2022.
- rooftop PV integrated distribution grid;
- Huong Khe;
- scenario analysis;
- design/operation recommendations.

Schema:

```ts
type Project = {
  title: string
  organization: string
  startDate?: string
  endDate?: string
  summary?: string
  responsibilities?: string[]
  outputs?: string[]
  tags?: string[]
}
```

---

# 24. PAGE: News / Blog

Nguồn: `https://www.100relab.com/blog`

Listing có:

- All Posts;
- Old events;
- thumbnail;
- title;
- excerpt;
- date;
- reading time.

## Bài gần nhất nhìn thấy khi rà soát

### Workshop: Strengthening Collaboration in Renewable Energy Education and Research between HUST and UoB
- Dec 12, 2025;
- 3 min read;
- HUST–University of Bradford;
- transnational education;
- renewable research;
- joint programs;
- cooperation direction 2026–2028.

### 100RE Lab member Phan Van Long in the launching ceremony of the special report on Youth For Climate Action 2022
- Oct 5, 2025 on listing;
- external detail link.

### Seminar/Workshop on Hydrogen in Microgrids and the HOMER Pro Tool
- Oct 3, 2025;
- 1 min read;
- HOMER Pro;
- hydrogen in microgrid;
- energy management;
- power conversion.

## Article template

```text
Breadcrumb
Title
Author + avatar
Date + reading time
Hero image
Body
Figures
Recent Posts
Comments optional
Footer
```

## Comments

V1 khuyến nghị bỏ hoặc tích hợp Giscus; không build backend chỉ để clone Wix comments.

## Content

```text
src/content/news/
  2025-12-12-hust-uob-workshop.md
  2025-10-05-youth-climate-action.md
  2025-10-03-hydrogen-homer-pro.md
```

Frontmatter:

```yaml
title:
date:
author:
excerpt:
heroImage:
category:
tags:
featured:
```

---

# 25. PAGE GROUP: Journey

Dùng một collection và dynamic route.

Schema:

```ts
type JourneyEntry = {
  title: string
  date?: string
  location?: string
  excerpt?: string
  externalUrl?: string
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}
```

## Entries

### 100RE Lab General Meeting (2024)
- title + 6 ảnh.

### GMSARN 18
- HUST-hosted;
- Smart Energy, Environment, Sustainable Development in GMS;
- event page nêu 16–17/11;
- link HUST.

### Japan, Sep 2023
- CPESE 2023 in Japan;
- image gallery.

### Tọa đàm 29.08.2023
- energy transition;
- 100% renewable;
- Net Zero Vietnam;
- 29/08/2023.

### Denmark, Aug 2023
- wind-power training;
- DTU Denmark;
- Aug 2023.

### Washington DC, July 2023
- H2 policies in Vietnam;
- panel discussion;
- Washington DC;
- July 2023.

### 100RE Lab Trip 2023
- Ba Vi, Hanoi;
- lab members after final exam.

### SE4Y
- 76 trainees;
- sustainable-energy training;
- 2 days/2 nights;
- interactive activities;
- career/study sharing;
- local culture;
- green lifestyle;
- academic-unit collaboration;
- program through June 2023.

### ABB Scholarship 2022
- Nguyen Trong Thanh;
- AVS Scholarship by ABB;
- images.

### SVNCKH2022
- AI Team;
- 3rd place;
- images.

### Sakura Scholarship Program 2023
- JST;
- HUST/HCMUT;
- 11–20 Feb;
- museum/robot showroom;
- master defense;
- facility tour;
- power-system experiments;
- Daidan Research Center;
- presentations.

### SEATUC2023
- Hydrogen team;
- Suranaree University of Technology;
- Feb 23–24;
- presentations;
- keynote;
- gala;
- campus/technical visit.

### 2nd Regional CSO Energy Workshop & Training
- USAID;
- WWF;
- NREL;
- BMZ-100RE MAP;
- Empress Angkor Hotel;
- Siem Reap, Cambodia;
- Feb 28–Mar 2, 2023;
- energy transition;
- civil-society advocacy.

---

# 26. PAGE: Members

Nguồn: `https://www.100relab.com/member`

## Intro

H1 `Our Team`; team gồm researchers từ nhiều backgrounds, cùng passion for learning/discovery.

## Supervisors

### Assoc. Prof. Nguyen Duc Tuyen

Affiliation:
- HUST;
- adjunct role at Shibaura được nhắc trong bio.

Research:
- renewable energy systems;
- PV;
- wind;
- FC;
- BESS;
- Smart Grid;
- Microgrid;
- Hydrogen Society/Supply.

Office:
- C7-505, HUST.

Email:
- tuyen.nguyenduc@hust.edu.vn
- i029999@shibaura-it.ac.jp

Mobile:
- +84 986 509 059

Links:
- ORCID;
- Google Scholar.

Bio themes:
- MSc 2009;
- PhD 2012;
- Japanese universities/institutes;
- founded 100RE Lab July 2018;
- nearly 40 members;
- 200+ publications;
- reviewer;
- current directions: RE, smart grid, storage, EV, policy;
- Clean EDGE Asia Fellow.

### Dr. Tran Thanh Son
- HUST;
- office C7-503;
- son.tranthanh@hust.edu.vn;
- B.S./M.S.;
- M.S. Power System at Shibaura;
- PhD Shibaura 2019;
- HUST lecturer from 2020;
- ORCID.

### Dr. Pham Manh Hai
- Electric Power University;
- Power System;
- Plasma Applications;
- AI/ANN;
- load forecast;
- wind/solar forecast;
- reliability;
- biomass/biogas;
- ORCID.

## Current teams

### PV
- Ngo Tri Duc
- Bui Quang Minh

### AI
- Bui Quang Hai

### Demand Response / Unit Commitment
- Nguyen Tuan Anh
- Le Anh Quan

### Wind
- Nguyen Hoang Nam
- Nguyen Nhu Tung

### Smart Grid
- Le Ngoc Dung
- Duong Minh Hai
- Vu Tien Dung

### Electric Vehicle
- Le The Cuong
- Dao Quoc Khanh

### Hydrogen
- Nguyen Hoang Anh

### BESS
- Trinh Minh Phuong
- Nguyen Quang Anh
- Tran Thi Hong Vinh

Schema:

```ts
type Person = {
  name: string
  role?: string
  team?: string
  institution?: string
  image?: string
  email?: string
  phone?: string
  office?: string
  researchAreas?: string[]
  biography?: string
  orcid?: string
  scholar?: string
}
```

---

# 27. PAGE: Alumni

Nguồn: `https://www.100relab.com/100relabalumni`

Intro:
- former members;
- achievements;
- publications;
- projects;
- contact.

## Profile chi tiết nhìn thấy

- Lê Viết Thịnh
- Phan Văn Long
- Trần Quốc Ngữ
- Đỗ Văn Long
- Nguyễn Văn Thức
- Vũ Xuân Sơn Hữu
- Trần Hoàng Ánh
- Nguyễn Huy Tiên
- Hoàng Nhật

Profile có thể gồm:
- lab period;
- former role/team;
- current position;
- publication count/details;
- projects;
- contests;
- awards;
- phone/email;
- CV link.

## Additional alumni grid

### PV
- Nguyen Dang Duong
- Dao Quang Tung

### Unit Commitment
- Hoang Tuan Linh
- Ta Xuan Hung

### Wind
- Le Hanh Duc
- Nguyen Trung Hai

### Smart Grid
- Nguyen Sy Quan
- Vo Ba Linh
- Tran Minh Khoi
- Tran Dinh Le Hoang

### Electric Vehicle
- Tran Minh Tuan

### Hydrogen
- Do Chi Kien
- Hoang Hieu Long
- Nguyen Manh Khai

### BESS
- Le Thi Minh Lien
- Ta Duy Bach
- Vu Quoc Anh
- Nguyen Dinh Phu Nghia

### AI
- Nguyen Trong Thanh
- Nguyen H. Minh Giang
- Do Dinh Hieu

Schema:

```ts
type Alumni = {
  name: string
  image?: string
  labPeriod?: string
  formerRole?: string
  formerTeam?: string
  currentPosition?: string
  achievements?: {
    publications?: string[]
    projects?: string[]
    contests?: string[]
    awards?: string[]
  }
  phone?: string
  email?: string
  cvUrl?: string
}
```

UI:

```text
Alumni
[Search...] [Team filter]

Featured alumni cards

All alumni
avatar grid
```

---

# 28. PAGE: Photos

Nguồn: `https://www.100relab.com/photo`

## Group 1 — Members

- 100RE TEAM
- WIND TEAM
- PV TEAM
- BESS TEAM
- AI TEAM
- SMART GRID TEAM
- UC-DR TEAM
- HYDROGEN TEAM
- EV TEAM
- MASTER TEAM

## Group 2 — Visiting Power Plants and Substations

- Son La Hydropower Plant
- Hoa Binh Hydropower Plant
- Thuong Tin Substation
- Quang Ngai Site Visit
- 100MW An Khe Biomass Power Plant
- Ha Tinh PV Farm – 9MW
- Smart Grid for Renewable and Energy Efficiency closing ceremony
- Thuong Tin 500kV Substation

## Group 3 — Conferences and Contests

- Smart Grid Day, Da Nang;
- Student Forum 2020;
- Student Forum 2021;
- Youth For Climate Innovation;
- Vietnam Renewable Energy Week 2019;
- Renewable Energy Training Program;
- Energy Job Fair;
- SVNCKH2022;
- technical working group meeting;
- Vietnam Wind Power 2022;
- bioenergy workshop;
- University of Tokyo visit;
- Toshiba scholarships;
- ICPEE Singapore;
- Student Forum 2022.

## Group 4 — Collaborations

- ASEAN Australia summit side event;
- Assoc. Prof. Nguyen Hong Phuong meeting;
- MOU with Weather Plus;
- National Bureau of Asian Research delegates;
- Hue University;
- student scientific-research talkshow;
- Can Tho work trip;
- Ha Tinh PC presentation;
- Vietnam 100RE scenario discussion;
- Thai students workshop.

## Group 5 — Relaxing

- Ba Vi;
- Ha Tinh field trip;
- farewell members studying abroad;
- Vietnamese Women’s Day;
- Teacher’s Day alumni celebration.

Schema:

```ts
type GalleryGroup = {
  title: string
  slug: string
  items: {
    src: string
    alt: string
    caption?: string
    date?: string
    location?: string
  }[]
}
```

UI:
- masonry/grid;
- desktop 3–4 cols;
- tablet 2;
- mobile 1–2;
- lightbox;
- keyboard navigation.

---

# 29. PAGE: Fund Raise

Nguồn: `https://www.100relab.com/fund-raise`

Context:
- Lab established July 2018;
- 20-year vision;
- world-class renewable-energy lab in Vietnam.

Support requests:

1. experimental devices / licensed simulation;
2. consultant members for students;
3. overseas-lab admission;
4. recruiting Lab students;
5. office equipment: printer/monitor/PC;
6. renewable-energy training;
7. financial support for:
   - apparatus;
   - student/researcher labor;
   - conferences;
   - publication fees;
   - English proofreading;
   - workshops/seminars/symposiums/conferences.

UI:
- Hero;
- support cards;
- Contact CTA.

---

# 30. PAGE: Join Us

Nguồn: `https://www.100relab.com/general-5`

## Requirements

- interest in power-system/renewable research;
- desire to study abroad or join international company;
- good English;
- good academic result;
- hardworking;
- good attitude.

## Apply

Prepare:
- CV;
- Letter of Interest.

Send:
- `tuyen.nguyenduc@hust.edu.vn`

Letter should include:

1. self introduction;
2. hobbies/personal interests/favorite research direction;
3. what you know about the Lab;
4. why choose the Lab;
5. qualification/orientation.

V1: dùng `mailto:`; không cần backend form.

---

# 31. PAGE: Useful Links

Menu hiện có nhưng route không ổn định.

Website mới phải có route thật:

`/useful-links`

Schema:

```ts
type UsefulLink = {
  title: string
  description?: string
  url: string
  category:
    | "academic"
    | "software"
    | "dataset"
    | "energy-market"
    | "standards"
    | "other"
}
```

Không invent/copy link chưa xác minh.

---

# 32. PAGE: Mini Scada

Hiện menu bị route sai sang Alumni.

## Option A

Nếu Mini Scada còn dùng, tạo `/mini-scada` với:

- overview;
- screenshots;
- system diagram;
- protocols;
- hardware;
- monitoring;
- control;
- demo/link.

## Option B

Nếu không còn dùng: bỏ khỏi menu.

Không được để Mini Scada → Alumni.

---

# 33. PAGE: Lab Equipment

Nguồn: `https://www.100relab.com/mc-8bt`

## Equipment hiện có

### Contactor
- Fuji SC-N1
- 2NO+2NC
- 220V activation

### Control System Design Experimental Kit
- TechShare, Japan
- book + experimental kit

### DC Electronic Load
- Itech IT8200
- CV/CC/CR
- short-circuit test

### DC Power Supply
- GW Instek SPS-606
- over-voltage protection
- high regulation

### Data Loggers
- Hioki PW 8198
- Hioki 8430-20
- automatic storage

### Digital Oscilloscope
- Siglent SDS1052DL+
- USB/LAN
- 7-inch TFT-LCD

### Drill
- Total power drill
- 750W
- 180–2770 rpm

### Hioki Multimeter
- 2306
- 2301
- 2354
- 2332
- Japan

### Inverter
- Growatt 3600MTL-S
- 3.6kW
- on-grid solar

### Mini Inverter
- Carmaer
- 500W
- 12VDC

### Mini Solar Panel
- WorldEnergy
- 5W
- 9V

### Multimeter 1
- Kyoritsu 1009
- AC/DC voltage up to 600V
- AC/DC current up to 10A

### Multimeter 2
- Fluke 289
- True RMS
- data logging
- TrendCapture

### PC 1
- Ryzen 5 5600X
- 16GB RAM
- Radeon RX550

### PC 2
- Ryzen 7 3700X
- 32GB RAM
- Samsung S24R35x

### PC 3
- Ryzen 7 3700X
- 16GB RAM
- GeForce GTX1660

### PC 4
- Ryzen 5 4600G
- 8GB RAM
- 2x Samsung S24R35x

### Solar Power Meter
- Tenmars TM-207
- 2000W/m²
- 634 BTU
- external sensor

### Solar Power System
- D9 building
- 3.6kW
- SCADA

Schema:

```ts
type Equipment = {
  name: string
  model?: string
  image?: string
  manufacturer?: string
  origin?: string
  specifications: {
    label: string
    value: string
  }[]
  description?: string
}
```

---

# 34. Contact data chỉ có một source

```ts
export const contact = {
  supervisor: {
    name: "Nguyen Duc Tuyen",
    title: "Assoc. Prof",
    phone: "+84 986 509 059",
    emails: [
      "tuyen.nguyenduc@hust.edu.vn",
      "i029999@shibaura-it.ac.jp",
    ],
  },
  informationContact: {
    name: "Nguyen Tuan Anh",
    title: "B.Eng",
    phone: "+84 974 812 546",
    email: "anh.nt196322@sis.hust.edu.vn",
  },
  offices: ["D9-300", "C7-503"],
  institution: "Hanoi University of Science and Technology",
  address: "1 Dai Co Viet, Hanoi, Vietnam",
}
```

---

# 35. Content/Data Architecture

Không hard-code content dài trong component.

```text
content/data
   ↓
template
   ↓
component
```

Collections:

```text
src/content/
├── research/
├── news/
├── journey/
├── publications/
├── projects/
├── achievements/
├── people/
└── equipment/
```

Ví dụ:

```yaml
---
title: Solar Energy
slug: solar
order: 1
heroImage: /assets/research/solar/hero.webp
team: PV Team
leader: Bui Quang Minh
---
```

---

# 36. Folder Structure

```text
100re-lab/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── _redirects
│   ├── assets/
│   │   ├── logo/
│   │   ├── home/
│   │   ├── research/
│   │   ├── members/
│   │   ├── alumni/
│   │   ├── journey/
│   │   ├── news/
│   │   ├── equipment/
│   │   └── gallery/
│   └── documents/
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── achievements.astro
│   │   ├── projects.astro
│   │   ├── members.astro
│   │   ├── alumni.astro
│   │   ├── photos.astro
│   │   ├── fund-raise.astro
│   │   ├── join-us.astro
│   │   ├── useful-links.astro
│   │   ├── mini-scada.astro
│   │   ├── lab-equipment.astro
│   │   ├── research/
│   │   │   ├── areas/
│   │   │   │   ├── index.astro
│   │   │   │   └── [slug].astro
│   │   │   ├── experiences.astro
│   │   │   ├── publications.astro
│   │   │   └── collaborations.astro
│   │   ├── news/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── journey/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── content/
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── contact.ts
│   │   ├── partners.ts
│   │   └── site.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── tokens.css
│   ├── utils/
│   └── content.config.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

# 37. Navigation data

```ts
export const navigation = [
  { label: "About", href: "/about" },
  {
    label: "Research",
    children: [
      { label: "Research Areas", href: "/research/areas" },
      { label: "Research Experiences", href: "/research/experiences" },
      { label: "Publications", href: "/research/publications" },
      { label: "Collaborations", href: "/research/collaborations" },
    ],
  },
  { label: "Achievement", href: "/achievements" },
  { label: "Project", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Journey", href: "/journey" },
  {
    label: "Member",
    children: [
      { label: "Members", href: "/members" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
  { label: "Photos", href: "/photos" },
  {
    label: "Others",
    children: [
      { label: "Mini Scada", href: "/mini-scada" },
      { label: "Fund Raise", href: "/fund-raise" },
      { label: "How to be one of us?", href: "/join-us" },
      { label: "Useful Links", href: "/useful-links" },
      { label: "Lab Equipment", href: "/lab-equipment" },
    ],
  },
]
```

---

# 38. Responsive Requirements

Breakpoints:

```text
mobile:   <640
tablet:   640–1023
desktop:  >=1024
wide:     >=1280
```

Research:
- mobile 1 col;
- tablet 2;
- desktop 3.

Stats:
- mobile 2;
- desktop 4.

Partners:
- mobile 2;
- tablet 3;
- desktop 4–5.

Members:
- mobile 1–2;
- tablet 2–3;
- desktop 3–4.

Gallery:
- responsive masonry.

---

# 39. Images

Sau khi rời Wix:

1. export media;
2. rename;
3. optimize;
4. store local/R2;
5. update content paths.

Không giữ tên hash khó hiểu nếu có thể.

Ví dụ:

```text
hydrogen-system-lab-01.webp
pv-team-2025.webp
smart-grid-day-da-nang-2020.webp
```

Format:
- AVIF/WebP;
- JPEG fallback nếu cần.

Alt text phải có nghĩa.

---

# 40. SEO

Mỗi page:

```html
<title>...</title>
<meta name="description">
<link rel="canonical">
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
```

Title pattern:

```text
About | 100RE Laboratory
Research Areas | 100RE Laboratory
Solar Energy | 100RE Laboratory
Publications | 100RE Laboratory
```

Thêm:
- sitemap;
- robots.txt;
- canonical;
- Organization schema;
- Person schema;
- Article schema;
- BreadcrumbList;
- ScholarlyArticle khi phù hợp.

---

# 41. Accessibility

Bắt buộc:

- semantic HTML;
- `nav`, `main`, `footer`;
- keyboard-accessible dropdown;
- mobile drawer focus;
- visible focus;
- image alt;
- contrast WCAG AA;
- button đúng semantic;
- heading hierarchy;
- `aria-expanded`;
- `aria-current`.

---

# 42. Performance

Target Lighthouse:

```text
Performance:    >=90
Accessibility:  >=95
Best Practices: >=95
SEO:            >=95
```

Rules:
- static rendering;
- minimal client JS;
- interactive islands chỉ cho search/lightbox/mobile behavior;
- lazy image;
- responsive srcset;
- no Wix runtime;
- no unnecessary third-party scripts.

---

# 43. Cloudflare Pages

Build:

```bash
npm run build
```

Output:

```text
dist/
```

Migration:

1. export content/assets;
2. deploy Pages;
3. custom domain `100relab.com`;
4. DNS;
5. HTTPS;
6. redirects;
7. test;
8. sau cùng mới dừng Wix.

---

# 44. Cloudflare `_redirects`

```text
/research-areas           /research/areas                        301
/research-experiences     /research/experiences                  301
/publications             /research/publications                 301
/collaborations           /research/collaborations               301
/achievement              /achievements                          301
/copy-of-publications     /projects                              301
/blog                     /news                                  301
/member                   /members                               301
/100relabalumni           /alumni                                301
/photo                    /photos                                301
/fund-raise               /fund-raise                            301
/general-5                /join-us                               301
/mc-8bt                   /lab-equipment                         301
/photonvoltaic            /research/areas/solar                  301
/ai                       /research/areas/artificial-intelligence 301
/uc                       /research/areas/unit-commitment         301
/sg                       /research/areas/smart-grid              301
/h2                       /research/areas/hydrogen                301
/bess                     /research/areas/battery-energy-storage  301
/wind                     /research/areas/wind                    301
/dr                       /research/areas/demand-response         301
```

Journey/news old URLs bổ sung sau khi migration content hoàn tất.

---

# 45. Search

Không cần backend.

Publications search:
- title;
- author;
- year;
- venue;
- DOI.

News search:
- title;
- excerpt;
- tags.

Có thể dùng Fuse.js.

---

# 46. Content Editing Workflow

Add news:

```text
src/content/news/new-post.md
```

Add member:

```text
src/content/people/nguyen-van-a.md
```

Publications:
- JSON/YAML/CSV-generated;
- không viết thẳng trong `.astro`.

---

# 47. Site Config

```ts
export const siteConfig = {
  name: "100RE Laboratory",
  shortName: "100RE Lab",
  tagline: "Toward 100% Renewable Energy",
  url: "https://www.100relab.com",
  institution: "Hanoi University of Science and Technology",
  locale: "en",
}
```

Website hiện dùng cả English và Vietnamese.

V1 có thể giữ mixed-language giống hiện tại.

Không cần i18n ngay nếu mục tiêu trước tiên là migrate.

---

# 48. Homepage data example

```ts
export const homeStats = [
  { label: "Publications", value: "200+" },
  { label: "Members", value: "40+" },
  { label: "Research Areas", value: "9" },
  { label: "Student Supervisor Ratio", value: "10:1" },
]
```

---

# 49. Research team data example

```ts
export const researchAreas = [
  { slug: "solar", title: "Solar Energy", team: "PV Team", leader: "Bui Quang Minh" },
  { slug: "wind", title: "Wind Energy", team: "Wind Team", leader: "Nguyen Hoang Nam" },
  { slug: "hydrogen", title: "Hydrogen", team: "Hydrogen Team", leader: "Nguyen Hoang Anh" },
  { slug: "smart-grid", title: "Smart Grid", team: "Smart Grid Team", leader: "Le Ngoc Dung" },
  { slug: "electric-vehicle", title: "Electric Vehicle", team: "Electric Vehicle Team", leader: "Dao Quoc Khanh" },
  { slug: "artificial-intelligence", title: "Artificial Intelligence", team: "AI Team", leader: "Nguyen Trong Thanh" },
  { slug: "unit-commitment", title: "Unit Commitment", team: "Unit Commitment Team", leader: "Nguyen Tuan Anh" },
  { slug: "battery-energy-storage", title: "Battery Energy Storage System", team: "BESS Team", leader: "Nguyen Quang Anh" },
  { slug: "demand-response", title: "Demand Response", team: "Demand Response Team", leader: "Ta Xuan Hung" },
]
```

---

# 50. Template Types

## StandardContentPage
- Fund Raise
- Join Us
- Useful Links

## ResearchDetailPage
- research detail.

## CollectionIndexPage
- Research Areas
- News
- Journey
- Members
- Alumni
- Equipment

## ArticlePage
- News detail
- Journey detail

## DataListPage
- Publications
- Projects
- Collaborations

## GalleryPage
- Photos

---

# 51. Interactive States

Mỗi component cần:
- default;
- hover;
- focus;
- active;
- disabled;
- empty;
- loading nếu có.

Search empty:

```text
No publications found.
Try another title, author, year, or category.
```

---

# 52. Error Page

`src/pages/404.astro`

```text
Page not found

The page may have moved during the migration from the previous 100RE Lab website.

[Back to homepage]
```

---

# 53. Implementation Phases

## Phase 1
- Astro;
- TS;
- Tailwind;
- design tokens;
- header/footer/navigation.

## Phase 2
- Home;
- Research Areas;
- Research Detail;
- Members;
- Projects;
- Collaborations;
- Achievement;
- Join;
- Fund Raise.

## Phase 3
- Publications;
- Alumni;
- Equipment;
- Photos.

## Phase 4
- News;
- Journey.

## Phase 5
- assets;
- old routes;
- redirects;
- metadata;
- sitemap.

## Phase 6
- QA;
- responsive;
- a11y;
- performance;
- SEO.

---

# 54. Acceptance Checklist

- [ ] Không cần Wix runtime.
- [ ] `npm run build` pass.
- [ ] Zero TypeScript error.
- [ ] Không broken internal links.
- [ ] Desktop nav đúng.
- [ ] Mobile nav đúng.
- [ ] Dropdown accessible.
- [ ] Journey có index.
- [ ] News listing + detail.
- [ ] Research dynamic route.
- [ ] Publications từ data.
- [ ] Members từ data.
- [ ] Alumni từ data.
- [ ] Photos responsive + lightbox.
- [ ] Equipment từ data.
- [ ] Contact có một source.
- [ ] Footer shared.
- [ ] Images optimized.
- [ ] Không hotlink Wix trong production.
- [ ] Old URL redirects.
- [ ] Sitemap.
- [ ] robots.txt.
- [ ] canonical.
- [ ] OG metadata.
- [ ] 404.
- [ ] Lighthouse target.
- [ ] Deploy Cloudflare Pages.

---

# 55. Antigravity KHÔNG được làm

1. Không copy Wix source code/runtime.
2. Không embed Wix iframe.
3. Không hard-code hàng trăm publications vào page.
4. Không tạo page/component duplicate cho cùng layout.
5. Không dùng URL `copy-of-*`.
6. Không hover-only dropdown.
7. Không desktop-only.
8. Không fixed width gây overflow.
9. Không tự thêm backend/database/auth nếu chưa yêu cầu.
10. Không giữ Mini Scada → Alumni.
11. Không để Useful Links link chết.
12. Không tự thay đổi factual names/project/publication.
13. Không bỏ DOI/external research links.
14. Không thay đổi contact khi chưa có dữ liệu mới.
15. Không invent content còn thiếu.

---

# 56. Prompt trực tiếp cho Antigravity

```text
You are rebuilding the 100RE Laboratory website from Wix into a fully independent static website.

Use this Markdown specification as the single source of truth.

Requirements:

1. Build with Astro + TypeScript + Tailwind CSS.
2. Fully independent from Wix.
3. Target Cloudflare Pages static deployment.
4. Use reusable components and content/data collections.
5. Do not hard-code long collections inside page components.
6. Use the clean routes in this specification.
7. Preserve the existing site's information architecture and factual meaning.
8. Modernize the visual presentation into a clean, professional academic/research-lab website.
9. Maintain a shared global header/navigation/footer.
10. Support desktop/tablet/mobile.
11. Accessible dropdowns and mobile navigation.
12. Dynamic pages for research, news and journey.
13. Client-side publication search/filter.
14. Gallery/lightbox for Photos.
15. Member/alumni/equipment cards from structured data.
16. SEO metadata, sitemap, robots.txt, canonical, Open Graph, 404.
17. Add redirects for old Wix routes.
18. Do not reproduce the broken Mini Scada -> Alumni route.
19. Create a real Useful Links page.
20. Do not depend on static.wixstatic.com in production.
21. Keep code production-ready and simple.
22. Prefer static Astro rendering; use client-side islands only when needed.
23. Do not introduce backend/database/auth unless requested later.
24. Ensure npm run build passes with zero errors.
25. Follow the acceptance checklist.

Implementation order:
A. Setup/design tokens
B. Layout/header/footer/navigation
C. Home
D. Research index + detail
E. Research Experiences
F. Publications
G. Collaborations
H. Achievements
I. Projects
J. Members
K. Alumni
L. Photos
M. News
N. Journey
O. Fund Raise
P. Join Us
Q. Useful Links
R. Lab Equipment
S. Mini Scada placeholder/page
T. SEO/redirects/performance/accessibility/QA

When source data is missing, do not invent facts. Hide optional sections instead.

Keep factual content separate from presentation code.

Before finishing:
- run the build;
- check internal links;
- verify responsive behavior;
- verify accessibility;
- verify no production dependency on Wix.
```

---

# 57. Source URL Inventory

```text
https://www.100relab.com/
https://www.100relab.com/research-areas
https://www.100relab.com/research-experiences
https://www.100relab.com/publications
https://www.100relab.com/collaborations
https://www.100relab.com/achievement
https://www.100relab.com/copy-of-publications
https://www.100relab.com/blog
https://www.100relab.com/member
https://www.100relab.com/100relabalumni
https://www.100relab.com/photo
https://www.100relab.com/fund-raise
https://www.100relab.com/general-5
https://www.100relab.com/mc-8bt

https://www.100relab.com/photonvoltaic
https://www.100relab.com/ai
https://www.100relab.com/uc
https://www.100relab.com/sg
https://www.100relab.com/h2
https://www.100relab.com/bess
https://www.100relab.com/wind
https://www.100relab.com/dr

https://www.100relab.com/dhbkhn-gmsarn18
https://www.100relab.com/japan-sep-2023
https://www.100relab.com/toadam29082023
https://www.100relab.com/denmark2023
https://www.100relab.com/washingtondc-2023
https://www.100relab.com/100relab-trip-2023
https://www.100relab.com/abb-scholarship-2022
https://www.100relab.com/svnckh2022
https://www.100relab.com/sakura
https://www.100relab.com/seatuc2023
https://www.100relab.com/copy-of-seatuc2023
```

---

# 58. Kết luận triển khai

Không làm:

```text
Wix HTML -> copy/paste
```

Mà làm:

```text
Wix website
  ↓
extract information architecture
  ↓
normalize content
  ↓
structured data
  ↓
reusable templates
  ↓
migrate assets
  ↓
clean routes
  ↓
static build
  ↓
Cloudflare Pages
  ↓
301 redirects
```

Kết quả mong muốn:

- giữ đầy đủ ý nghĩa/content quan trọng của 100RE Lab;
- codebase rõ ràng;
- không vendor lock-in;
- nhanh;
- SEO tốt;
- dễ chỉnh sửa;
- dễ mở rộng;
- chi phí hosting thấp.
