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
      console.warn('Auth init failed:', e);
    }
    return null;
  },

  getUser() {
    return this.currentUser;
  },

  isSupervisor() {
    return this.currentUser && this.currentUser.role === 'supervisor';
  },

  isTeamLeader() {
    return this.currentUser && (this.currentUser.role === 'team_leader' || this.currentUser.role === 'supervisor');
  },

  isAlumni() {
    return this.currentUser && this.currentUser.role === 'alumni';
  },

  canAccessTeam(teamId) {
    if (!this.currentUser) return false;
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

    if (nameEl) nameEl.textContent = this.currentUser.name;
    if (roleEl) roleEl.textContent = this.currentUser.role.replace('_', ' ');
    if (avatarEl && this.currentUser.avatar_url) avatarEl.src = this.currentUser.avatar_url;

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
