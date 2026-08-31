/**
 * 100RE LAB WORKSPACE — Authentication State, Identity Resolution & Dev Role Switcher
 */

import { API } from './api.js';

export const ALL_PRESET_USERS = {
  'usr-admin-01': {
    id: 'usr-admin-01',
    username: '100re',
    name: 'System Developer & Super Admin',
    display_name: 'System Admin (100RE)',
    email: 'admin@100relab.hust.edu.vn',
    role: 'admin',
    isSystemAdmin: true,
    status: 'active',
    avatar_url: 'assets/images/logo.jpg',
    isSupervisor: true,
    isLeader: true,
    teams: ['team-pv', 'team-bess', 'team-ai', 'team-smartgrid', 'team-wind', 'team-ev', 'team-hydrogen', 'team-dr', 'team-uc'],
    teamRoles: {},
    projects: []
  },
  'usr-sup-01': {
    id: 'usr-sup-01',
    username: 'supervisor',
    name: 'Assoc. Prof. Nguyen Duc Tuyen',
    display_name: 'Assoc. Prof. Nguyen Duc Tuyen',
    email: 'supervisor@100relab.hust.edu.vn',
    role: 'supervisor',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/tuyen_nguyen_duc.jpg',
    isSupervisor: true,
    isLeader: true,
    teams: [],
    teamRoles: {},
    projects: []
  },
  'usr-ldr-01': {
    id: 'usr-ldr-01',
    username: 'duc.ngotri@100relab',
    name: 'Dr. Ngo Tri Duc',
    display_name: 'Dr. Ngo Tri Duc',
    email: 'duc.ngotri@100relab',
    role: 'team_leader',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/ngo_tri_duc.png',
    isSupervisor: false,
    isLeader: true,
    teams: ['team-pv'],
    teamRoles: { 'team-pv': 'leader' },
    projects: ['proj-pv-01']
  },
  'usr-ldr-02': {
    id: 'usr-ldr-02',
    username: 'phuong.trinhminh@100relab',
    name: 'Dr. Trinh Minh Phuong',
    display_name: 'Dr. Trinh Minh Phuong',
    email: 'phuong.trinhminh@100relab',
    role: 'team_leader',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/trinh_minh_phuong.jpg',
    isSupervisor: false,
    isLeader: true,
    teams: ['team-bess'],
    teamRoles: { 'team-bess': 'leader' },
    projects: ['proj-bess-01']
  },
  'usr-res-05': {
    id: 'usr-res-05',
    username: 'hai.duongminh@100relab',
    name: 'Duong Minh Hai',
    display_name: 'Duong Minh Hai',
    email: 'hai.duongminh@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/duong_minh_hai.png',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-smartgrid'],
    teamRoles: { 'team-smartgrid': 'member' },
    projects: ['proj-grid-01']
  },
  'usr-res-01': {
    id: 'usr-res-01',
    username: 'hai.buiquang@100relab',
    name: 'Bui Quang Hai',
    display_name: 'Bui Quang Hai',
    email: 'hai.buiquang@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/bui_quang_hai.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-ai', 'team-pv'],
    teamRoles: { 'team-ai': 'member', 'team-pv': 'member' },
    projects: ['proj-pv-01']
  },
  'usr-res-02': {
    id: 'usr-res-02',
    username: 'anh.nguyentuan@100relab',
    name: 'Nguyen Tuan Anh',
    display_name: 'Nguyen Tuan Anh',
    email: 'anh.nguyentuan@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/nguyen_tuan_anh.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-dr', 'team-uc'],
    teamRoles: { 'team-dr': 'member', 'team-uc': 'member' },
    projects: ['proj-grid-01']
  },
  'usr-res-03': {
    id: 'usr-res-03',
    username: 'nam.nguyenhoang@100relab',
    name: 'Nguyen Hoang Nam',
    display_name: 'Nguyen Hoang Nam',
    email: 'nam.nguyenhoang@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/nguyen_hoang_nam.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-wind'],
    teamRoles: { 'team-wind': 'member' },
    projects: []
  },
  'usr-res-04': {
    id: 'usr-res-04',
    username: 'cuong.lethe@100relab',
    name: 'Le The Cuong',
    display_name: 'Le The Cuong',
    email: 'cuong.lethe@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/le_the_cuong.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-ev'],
    teamRoles: { 'team-ev': 'member' },
    projects: []
  },
  'usr-res-06': {
    id: 'usr-res-06',
    username: 'dung.vutien@100relab',
    name: 'Vu Tien Dung',
    display_name: 'Vu Tien Dung',
    email: 'dung.vutien@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/vu_tien_dung.png',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-smartgrid'],
    teamRoles: { 'team-smartgrid': 'member' },
    projects: []
  },
  'usr-res-07': {
    id: 'usr-res-07',
    username: 'dung.lengoc@100relab',
    name: 'Le Ngoc Dung',
    display_name: 'Le Ngoc Dung',
    email: 'dung.lengoc@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/le_ngoc_dung.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-smartgrid'],
    teamRoles: { 'team-smartgrid': 'member' },
    projects: []
  },
  'usr-res-08': {
    id: 'usr-res-08',
    username: 'minh.buiquang@100relab',
    name: 'Bui Quang Minh',
    display_name: 'Bui Quang Minh',
    email: 'minh.buiquang@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/bui_quang_minh.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-pv'],
    teamRoles: { 'team-pv': 'member' },
    projects: []
  },
  'usr-res-09': {
    id: 'usr-res-09',
    username: 'quan.leanh@100relab',
    name: 'Dr. Le Anh Quan',
    display_name: 'Dr. Le Anh Quan',
    email: 'quan.leanh@100relab',
    role: 'alumni',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/le_anh_quan.png',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-dr', 'team-uc'],
    teamRoles: {},
    projects: []
  },
  'usr-res-10': {
    id: 'usr-res-10',
    username: 'tung.nguyennhu@100relab',
    name: 'Nguyen Nhu Tung',
    display_name: 'Nguyen Nhu Tung',
    email: 'tung.nguyennhu@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/nguyen_nhu_tung.png',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-wind'],
    teamRoles: { 'team-wind': 'member' },
    projects: []
  },
  'usr-res-11': {
    id: 'usr-res-11',
    username: 'khanh.daoquoc@100relab',
    name: 'Dao Quoc Khanh',
    display_name: 'Dao Quoc Khanh',
    email: 'khanh.daoquoc@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/dao_quoc_khanh.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-ev'],
    teamRoles: { 'team-ev': 'member' },
    projects: []
  },
  'usr-res-12': {
    id: 'usr-res-12',
    username: 'anh.nguyenhoang@100relab',
    name: 'Nguyen Hoang Anh',
    display_name: 'Nguyen Hoang Anh',
    email: 'anh.nguyenhoang@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/nguyen_hoang_anh.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-hydrogen'],
    teamRoles: { 'team-hydrogen': 'member' },
    projects: []
  },
  'usr-res-13': {
    id: 'usr-res-13',
    username: 'anh.nguyenquang@100relab',
    name: 'Nguyen Quang Anh',
    display_name: 'Nguyen Quang Anh',
    email: 'anh.nguyenquang@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/nguyen_quang_anh.png',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-bess'],
    teamRoles: { 'team-bess': 'member' },
    projects: []
  },
  'usr-res-14': {
    id: 'usr-res-14',
    username: 'vinh.tranthihong@100relab',
    name: 'Tran Thi Hong Vinh',
    display_name: 'Tran Thi Hong Vinh',
    email: 'vinh.tranthihong@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/tran_thi_hong_vinh.png',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-bess'],
    teamRoles: { 'team-bess': 'member' },
    projects: []
  },
    'usr-smartgrid-1788108587815': {
    id: 'usr-smartgrid-1788108587815',
    username: 'tu.phamanh@100relab',
    name: 'Pham Anh Tu',
    display_name: 'Pham Anh Tu',
    email: 'tu.phamanh@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/logo.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-smartgrid'],
    teamRoles: { 'team-smartgrid': 'member' },
    projects: []
  },
  'usr-smartgrid-1788099630575': {
    id: 'usr-smartgrid-1788099630575',
    username: 'long.nguyenquy@100relab',
    name: 'Nguyễn Quý Long',
    display_name: 'Nguyễn Quý Long',
    email: 'long.nguyenquy@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/logo.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-smartgrid'],
    teamRoles: { 'team-smartgrid': 'member' },
    projects: []
  },
  'usr-smartgrid-1788099612925': {
    id: 'usr-smartgrid-1788099612925',
    username: 'hieu.dodac@100relab',
    name: 'Đỗ Đắc Hiếu',
    display_name: 'Đỗ Đắc Hiếu',
    email: 'hieu.dodac@100relab',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/logo.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-smartgrid'],
    teamRoles: { 'team-smartgrid': 'member' },
    projects: []
  },
  'usr-guest-01': {
    id: 'usr-guest-01',
    username: 'guest.visiting@100relab',
    name: 'Visiting Fellow',
    display_name: 'Visiting Fellow',
    email: 'guest.visiting@100relab',
    role: 'alumni',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/logo.jpg',
    isSupervisor: false,
    isLeader: false,
    teams: [],
    teamRoles: {},
    projects: []
  }
};

export const Auth = {
  currentUser: null,

  async init() {
    const savedUserId = localStorage.getItem('ws_dev_user_id') || localStorage.getItem('100re_logged_username') || 'usr-sup-01';
    await this.switchDevUser(savedUserId);
    return this.currentUser;
  },

  async switchDevUser(userId) {
    const rawKey = (userId || '').trim().toLowerCase();
    const normalized = rawKey.replace(/@100relab(\.hust\.edu\.vn)?$/, '');
    localStorage.setItem('ws_dev_user_id', rawKey);

    // 1. Direct key match in presets
    let matched = ALL_PRESET_USERS[rawKey];

    // 2. Match by username/email in presets
    if (!matched) {
      matched = Object.values(ALL_PRESET_USERS).find(u => 
        u.username.toLowerCase() === rawKey ||
        u.id.toLowerCase() === rawKey ||
        u.username.toLowerCase().replace(/@100relab$/, '') === normalized ||
        (u.email && u.email.toLowerCase() === rawKey) ||
        (u.email && u.email.toLowerCase().replace(/@100relab$/, '') === normalized)
      );
    }

    // 3. Fallback aliases
    if (!matched) {
      if (rawKey === 'teamleader' || rawKey === 'leader.pv') matched = ALL_PRESET_USERS['usr-ldr-01'];
      else if (rawKey === 'leader.bess') matched = ALL_PRESET_USERS['usr-ldr-02'];
      else if (rawKey === 'researcher' || rawKey === 'hai.ai') matched = ALL_PRESET_USERS['usr-res-01'];
      else if (rawKey === 'hai.duongminh') matched = ALL_PRESET_USERS['usr-res-05'];
      else if (rawKey === 'anh.grid') matched = ALL_PRESET_USERS['usr-res-02'];
      else if (rawKey === 'nam.wind') matched = ALL_PRESET_USERS['usr-res-03'];
      else if (rawKey === 'cuong.ev') matched = ALL_PRESET_USERS['usr-res-04'];
      else if (rawKey === 'supervisor') matched = ALL_PRESET_USERS['usr-sup-01'];
      else if (rawKey === '100re' || rawKey === 'admin') matched = ALL_PRESET_USERS['usr-admin-01'];
    }

    // 4. Match in custom created users in localStorage
    if (!matched) {
      try {
        const customList = JSON.parse(localStorage.getItem('100re_created_users') || localStorage.getItem('100re_custom_users') || '[]');
        const customFound = customList.find(u => 
          u.id === rawKey || 
          (u.username && u.username.toLowerCase() === rawKey) || 
          (u.email && u.email.toLowerCase() === rawKey) ||
          (u.username && u.username.toLowerCase().replace(/@100relab$/, '') === normalized)
        );
        if (customFound) {
          matched = {
            id: customFound.id,
            name: customFound.display_name || customFound.name || customFound.username,
            display_name: customFound.display_name || customFound.name,
            username: customFound.username || rawKey,
            email: customFound.email || `${rawKey}@100relab`,
            role: customFound.role || 'researcher',
            isSystemAdmin: customFound.role === 'admin' || customFound.username === '100re',
            status: customFound.status || 'active',
            avatar_url: customFound.avatar_url || 'assets/images/logo.jpg',
            isSupervisor: customFound.role === 'supervisor' || customFound.role === 'admin',
            isLeader: customFound.role === 'team_leader' || customFound.role === 'supervisor' || customFound.role === 'admin',
            teams: customFound.teams || [],
            teamRoles: {},
            projects: [],
            permissions: customFound.permissions || []
          };
        }
      } catch (e) {}
    }

    // 5. Default fallback to Supervisor
    if (!matched) {
      matched = ALL_PRESET_USERS['usr-sup-01'];
    }

    this.currentUser = { ...matched };

    if (this.currentUser.username === '100re' || this.currentUser.role === 'admin') {
      localStorage.setItem('100re_is_admin', 'true');
    } else {
      localStorage.removeItem('100re_is_admin');
    }

    this.updateUI();
    return this.currentUser;
  },

  getUser() {
    return this.currentUser;
  },

  isSupervisor() {
    if (!this.currentUser) return true;
    return this.currentUser.role === 'supervisor' || this.currentUser.role === 'admin';
  },

  isSystemAdmin() {
    if (!this.currentUser) {
      return localStorage.getItem('100re_is_admin') === 'true';
    }
    return this.currentUser.username === '100re' ||
           this.currentUser.role === 'admin' ||
           !!this.currentUser.isSystemAdmin ||
           localStorage.getItem('100re_is_admin') === 'true';
  },

  isAdmin() {
    return this.isSystemAdmin();
  },

  isTeamLeader() {
    return this.currentUser && (this.currentUser.role === 'team_leader' || this.currentUser.role === 'supervisor' || this.currentUser.role === 'admin');
  },

  isAlumni() {
    return this.currentUser && this.currentUser.role === 'alumni';
  },

  canAccessTeam(teamId) {
    if (!this.currentUser) return true;
    if (this.isSupervisor()) return true;
    return this.currentUser.teams && this.currentUser.teams.some(t => {
      const tid = typeof t === 'string' ? t : (t.team_id || t.id);
      return tid === teamId;
    });
  },

  updateUI() {
    if (!this.currentUser) return;

    const nameEl = document.getElementById('sidebarUserName');
    const roleEl = document.getElementById('sidebarUserRole');
    const avatarEl = document.getElementById('sidebarUserAvatar');
    const adminSecLabel = document.getElementById('sectionAdminLabel');
    const adminNavGroup = document.getElementById('groupAdminNav');

    // 1. Update Display Name
    if (nameEl) {
      nameEl.textContent = this.currentUser.display_name || this.currentUser.name || 'Assoc. Prof. Nguyen Duc Tuyen';
      nameEl.title = this.currentUser.email || this.currentUser.username;
    }

    // 2. Update Role Badge with Team information & Color Coding
    if (roleEl) {
      const roleStr = (this.currentUser.role || 'researcher').replace('_', ' ').toUpperCase();
      let teamInfo = '';
      if (this.currentUser.teams && this.currentUser.teams.length > 0) {
        const t0 = this.currentUser.teams[0];
        const tName = typeof t0 === 'string' ? t0.replace('team-', '').toUpperCase() : (t0.team_name || t0.team_id || '');
        if (tName) teamInfo = tName;
      }

      roleEl.textContent = teamInfo ? `${roleStr} • ${teamInfo}` : roleStr;

      // Color tags
      if (this.currentUser.role === 'admin') {
        roleEl.style.color = '#7c3aed';
        roleEl.style.background = '#ede9fe';
      } else if (this.currentUser.role === 'supervisor') {
        roleEl.style.color = '#16a34a';
        roleEl.style.background = '#dcfce7';
      } else if (this.currentUser.role === 'team_leader') {
        roleEl.style.color = '#0284c7';
        roleEl.style.background = '#e0f2fe';
      } else if (this.currentUser.role === 'alumni') {
        roleEl.style.color = '#94a3b8';
        roleEl.style.background = '#f1f5f9';
      } else {
        roleEl.style.color = '#0d9488';
        roleEl.style.background = '#ccfbf1';
      }
      roleEl.style.padding = '2px 6px';
      roleEl.style.borderRadius = '4px';
      roleEl.style.display = 'inline-block';
      roleEl.style.fontSize = '0.675rem';
      roleEl.style.fontWeight = '700';
    }
    
    // 3. Update User Avatar Photo
    let avatar = this.currentUser.avatar_url || 'assets/images/logo.jpg';
    if (!avatar.startsWith('/') && !avatar.startsWith('http') && !avatar.startsWith('data:') && !avatar.startsWith('.')) {
      avatar = '../' + avatar;
    }
    if (avatarEl) {
      avatarEl.src = avatar;
      avatarEl.alt = this.currentUser.display_name || this.currentUser.name;
      avatarEl.onerror = () => { avatarEl.src = '../assets/images/logo.jpg'; };
    }

    // 4. Show or hide Admin section (Accessible to supervisor and 100re admin)
    if (adminSecLabel && adminNavGroup) {
      if (this.isSupervisor()) {
        adminSecLabel.style.display = 'block';
        adminNavGroup.style.display = 'flex';
      } else {
        adminSecLabel.style.display = 'none';
        adminNavGroup.style.display = 'none';
      }
    }

        // 5. Show or hide Dev Role Switcher bar (ONLY for Supervisor and Admin)
    const devSwitcher = document.getElementById('wsDevSwitcher');
    if (devSwitcher) {
      if (this.currentUser && (this.currentUser.username === '100re' || this.currentUser.role === 'admin' || this.isSupervisor())) {
        devSwitcher.style.display = 'inline-flex';
      } else {
        devSwitcher.style.display = 'none';
      }
    }

    // 6. Update Dev Selector to match current user ID
    const devSelect = document.getElementById('devRoleSelect');
    if (devSelect) {
      let exists = Array.from(devSelect.options).some(opt => opt.value === this.currentUser.id || opt.value === this.currentUser.username);
      if (!exists) {
        const opt = document.createElement('option');
        opt.value = this.currentUser.id;
        opt.textContent = `👤 ${this.currentUser.display_name || this.currentUser.name} (${this.currentUser.username})`;
        devSelect.appendChild(opt);
      }
      devSelect.value = this.currentUser.id;
    }
  }
};
