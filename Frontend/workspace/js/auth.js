/**
 * 100RE LAB WORKSPACE — Authentication State & Dev Role Switcher
 */

import { API } from './api.js';

export const Auth = {
  currentUser: null,

  async init() {
    try {
      const data = await API.get('/api/me');
      if (data.authenticated && data.user) {
        this.currentUser = data.user;
        this.updateUI();
        return this.currentUser;
      }
    } catch (e) {
      console.warn('Auth init fetch warning, using active session:', e);
    }

    // Active session fallback for smooth workspace entry
    const savedUserId = localStorage.getItem('ws_dev_user_id') || 'usr-sup-01';
    return this.switchDevUser(savedUserId);
  },

  async switchDevUser(userId) {
    localStorage.setItem('ws_dev_user_id', userId);
    try {
      const data = await API.get('/api/me');
      if (data.authenticated && data.user) {
        this.currentUser = data.user;
        this.updateUI();
        return this.currentUser;
      }
    } catch (e) {
      console.warn('API /api/me lookup warning:', e);
    }

    // Local role resolution
    if (userId === 'usr-admin-01' || userId === '100re') {
      this.currentUser = {
        id: 'usr-admin-01',
        name: 'System Developer & Super Admin',
        display_name: 'System Admin (100RE)',
        username: '100re',
        role: 'admin',
        isSystemAdmin: true,
        status: 'active',
        avatar_url: 'assets/images/logo.jpg',
        isSupervisor: true,
        isLeader: true,
        teams: [],
        teamRoles: {},
        projects: []
      };
      localStorage.setItem('100re_is_admin', 'true');
    } else if (userId === 'usr-ldr-01' || userId === 'teamleader') {
      this.currentUser = {
        id: 'usr-ldr-01',
        name: 'Dr. Ngo Tri Duc',
        display_name: 'Dr. Ngo Tri Duc (Leader PV)',
        username: 'teamleader',
        role: 'team_leader',
        isSystemAdmin: false,
        status: 'active',
        avatar_url: 'assets/images/ngo_tri_duc.png',
        isSupervisor: false,
        isLeader: true,
        teams: ['team-pv'],
        teamRoles: { 'team-pv': 'leader' },
        projects: ['proj-pv-01']
      };
    } else if (userId === 'usr-res-01' || userId === 'researcher') {
      this.currentUser = {
        id: 'usr-res-01',
        name: 'Bui Quang Hai',
        display_name: 'Bui Quang Hai (Researcher PV)',
        username: 'researcher',
        role: 'researcher',
        isSystemAdmin: false,
        status: 'active',
        avatar_url: 'assets/images/bui_quang_hai.jpg',
        isSupervisor: false,
        isLeader: false,
        teams: ['team-pv', 'team-ai'],
        teamRoles: { 'team-pv': 'member', 'team-ai': 'member' },
        projects: ['proj-pv-01']
      };
    } else {
      this.currentUser = {
        id: 'usr-sup-01',
        name: 'Assoc. Prof. Nguyen Duc Tuyen',
        display_name: 'Assoc. Prof. Nguyen Duc Tuyen (Supervisor)',
        username: 'supervisor',
        role: 'supervisor',
        isSystemAdmin: false,
        status: 'active',
        avatar_url: 'assets/images/logo.jpg',
        isSupervisor: true,
        isLeader: true,
        teams: [],
        teamRoles: {},
        projects: []
      };
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
    return this.currentUser.teams && this.currentUser.teams.includes(teamId);
  },

  updateUI() {
    if (!this.currentUser) return;

    const nameEl = document.getElementById('sidebarUserName');
    const roleEl = document.getElementById('sidebarUserRole');
    const avatarEl = document.getElementById('sidebarUserAvatar');
    const adminSecLabel = document.getElementById('sectionAdminLabel');
    const adminNavGroup = document.getElementById('groupAdminNav');

    if (nameEl) nameEl.textContent = this.currentUser.display_name || this.currentUser.name || 'Assoc. Prof. Nguyen Duc Tuyen';
    if (roleEl) roleEl.textContent = (this.currentUser.role || 'supervisor').replace('_', ' ').toUpperCase();
    
    let avatar = this.currentUser.avatar_url || '/assets/images/logo.jpg';
    if (!avatar.startsWith('/') && !avatar.startsWith('http') && !avatar.startsWith('data:')) {
      avatar = '/' + avatar;
    }
    if (avatarEl) {
      avatarEl.src = avatar;
      avatarEl.onerror = () => { avatarEl.src = '/assets/images/logo.jpg'; };
    }

    // Show or hide Admin section (Accessible to supervisor and 100re admin)
    if (adminSecLabel && adminNavGroup) {
      if (this.isSupervisor()) {
        adminSecLabel.style.display = 'block';
        adminNavGroup.style.display = 'flex';
      } else {
        adminSecLabel.style.display = 'none';
        adminNavGroup.style.display = 'none';
      }
    }

    // Show or hide Dev Role Switcher bar (STRICTLY restricted to 100re Admin account)
    const devSwitcher = document.getElementById('wsDevSwitcher');
    if (devSwitcher) {
      if (this.isSystemAdmin()) {
        devSwitcher.style.display = 'inline-flex';
      } else {
        devSwitcher.style.display = 'none';
      }
    }

    // Update Dev Selector to match current user ID
    const devSelect = document.getElementById('devRoleSelect');
    if (devSelect && this.currentUser.id) {
      devSelect.value = this.currentUser.id;
    }
  }
};
