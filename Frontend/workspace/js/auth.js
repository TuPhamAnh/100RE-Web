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
    avatar_url: 'assets/images/logo.jpg',
    isSupervisor: true,
    isLeader: true,
    teams: [],
    teamRoles: {},
    projects: []
  },
  'usr-ldr-01': {
    id: 'usr-ldr-01',
    username: 'leader.pv',
    name: 'Dr. Ngo Tri Duc',
    display_name: 'Dr. Ngo Tri Duc (Leader PV)',
    email: 'leader.pv@100relab.hust.edu.vn',
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
    username: 'leader.bess',
    name: 'Dr. Trinh Minh Phuong',
    display_name: 'Dr. Trinh Minh Phuong (Leader BESS)',
    email: 'leader.bess@100relab.hust.edu.vn',
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
    username: 'hai.duongminh',
    name: 'Duong Minh Hai',
    display_name: 'Duong Minh Hai (Smart Grid)',
    email: 'hai.duongminh@100relab.hust.edu.vn',
    role: 'researcher',
    isSystemAdmin: false,
    status: 'active',
    avatar_url: 'assets/images/duong_minh_hai.png',
    isSupervisor: false,
    isLeader: false,
    teams: ['team-smartgrid'],
    teamRoles: { 'team-smartgrid': 'member' },
    projects: ['proj-scada-01']
  },
  'usr-res-01': {
    id: 'usr-res-01',
    username: 'hai.ai',
    name: 'Bui Quang Hai',
    display_name: 'Bui Quang Hai (AI Team)',
    email: 'hai.ai@100relab.hust.edu.vn',
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
    username: 'anh.grid',
    name: 'Nguyen Tuan Anh',
    display_name: 'Nguyen Tuan Anh (DR & UC)',
    email: 'anh.grid@100relab.hust.edu.vn',
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
    username: 'nam.wind',
    name: 'Nguyen Hoàng Nam',
    display_name: 'Nguyen Hoang Nam (Wind Team)',
    email: 'nam.wind@100relab.hust.edu.vn',
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
    username: 'cuong.ev',
    name: 'Le The Cuong',
    display_name: 'Le The Cuong (EV Team)',
    email: 'cuong.ev@100relab.hust.edu.vn',
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
    username: 'dung.scada',
    name: 'Vu Tien Dung',
    display_name: 'Vu Tien Dung (SCADA/Grid)',
    email: 'dung.scada@100relab.hust.edu.vn',
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
  'usr-guest-01': {
    id: 'usr-guest-01',
    username: 'guest.visiting',
    name: 'Visiting Fellow',
    display_name: 'Visiting Fellow (Guest)',
    email: 'guest.visiting@100relab.hust.edu.vn',
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
    localStorage.setItem('ws_dev_user_id', rawKey);

    // 1. Direct key match in presets
    let matched = ALL_PRESET_USERS[rawKey];

    // 2. Match by username in presets
    if (!matched) {
      matched = Object.values(ALL_PRESET_USERS).find(u => 
        u.username.toLowerCase() === rawKey ||
        u.id.toLowerCase() === rawKey ||
        (u.email && u.email.toLowerCase().includes(rawKey))
      );
    }

    // 3. Match in custom created users in localStorage
    if (!matched) {
      try {
        const customList = JSON.parse(localStorage.getItem('100re_created_users') || localStorage.getItem('100re_custom_users') || '[]');
        const customFound = customList.find(u => 
          u.id === rawKey || 
          (u.username && u.username.toLowerCase() === rawKey) || 
          (u.email && u.email.toLowerCase().includes(rawKey))
        );
        if (customFound) {
          matched = {
            id: customFound.id,
            name: customFound.display_name || customFound.name || customFound.username,
            display_name: customFound.display_name || customFound.name,
            username: customFound.username || rawKey,
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

    // 4. Default fallback to Supervisor
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

    // 5. Show or hide Dev Role Switcher bar (STRICTLY restricted to 100re Admin or Supervisor)
    const devSwitcher = document.getElementById('wsDevSwitcher');
    if (devSwitcher) {
      devSwitcher.style.display = 'inline-flex';
    }

    // 6. Update Dev Selector to match current user ID
    const devSelect = document.getElementById('devRoleSelect');
    if (devSelect) {
      // Ensure current user exists in select options
      let exists = Array.from(devSelect.options).some(opt => opt.value === this.currentUser.id || opt.value === this.currentUser.username);
      if (!exists) {
        const opt = document.createElement('option');
        opt.value = this.currentUser.id;
        opt.textContent = `👤 ${this.currentUser.display_name || this.currentUser.name} (${this.currentUser.role})`;
        devSelect.appendChild(opt);
      }
      devSelect.value = this.currentUser.id;
    }
  }
};
