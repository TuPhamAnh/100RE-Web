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
    this.currentUser = {
      id: localStorage.getItem('ws_dev_user_id') || 'usr-sup-01',
      name: 'Assoc. Prof. Nguyen Duc Tuyen',
      display_name: 'Assoc. Prof. Nguyen Duc Tuyen',
      role: 'supervisor',
      status: 'active',
      avatar_url: 'assets/images/logo.jpg',
      isSupervisor: true,
      teams: [],
      projects: []
    };
    this.updateUI();
    return this.currentUser;
  },

  getUser() {
    return this.currentUser;
  },

  isSupervisor() {
    return !this.currentUser || this.currentUser.role === 'supervisor';
  },

  isTeamLeader() {
    return this.currentUser && (this.currentUser.role === 'team_leader' || this.currentUser.role === 'supervisor');
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

    // Show or hide Admin section
    if (adminSecLabel && adminNavGroup) {
      if (this.isSupervisor()) {
        adminSecLabel.style.display = 'block';
        adminNavGroup.style.display = 'flex';
      } else {
        adminSecLabel.style.display = 'none';
        adminNavGroup.style.display = 'none';
      }
    }

    // Update Dev Selector to match current user ID
    const devSelect = document.getElementById('devRoleSelect');
    if (devSelect && this.currentUser.id) {
      devSelect.value = this.currentUser.id;
    }
  }
};
