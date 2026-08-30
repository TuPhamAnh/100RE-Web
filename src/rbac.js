/**
 * 100RE LAB WORKSPACE — Authoritative Role-Based Access Control (RBAC)
 */

export const RBAC = {
  // Global Roles
  ROLE_SUPERVISOR: 'supervisor',
  ROLE_LEADER: 'team_leader',
  ROLE_RESEARCHER: 'researcher',
  ROLE_ALUMNI: 'alumni',

  canAccessTeam(user, teamId) {
    if (!user) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    return user.teams.includes(teamId);
  },

  canManageTeam(user, teamId) {
    if (!user) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    return user.role === this.ROLE_LEADER && user.teamRoles[teamId] === 'leader';
  },

  canAccessProject(user, project) {
    if (!user || !project) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    if (!this.canAccessTeam(user, project.team_id)) return false;
    if (user.role === this.ROLE_LEADER) return true;
    return user.projects.includes(project.id) || project.created_by === user.id;
  },

  canManageProject(user, project) {
    if (!user || !project) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    return this.canManageTeam(user, project.team_id);
  },

  canCreateProject(user, teamId) {
    if (!user) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    return this.canManageTeam(user, teamId);
  },

  canCreateTask(user, teamId) {
    if (!user) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    return this.canManageTeam(user, teamId);
  },

  canEditTask(user, task) {
    if (!user || !task) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    if (this.canManageTeam(user, task.team_id)) return true;
    if (user.role === this.ROLE_RESEARCHER) {
      return task.assigned_to === user.id || task.created_by === user.id || this.canAccessTeam(user, task.team_id);
    }
    return false;
  },

  canDeleteTask(user, task) {
    if (!user || !task) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    return this.canManageTeam(user, task.team_id);
  },

  canUploadResource(user, teamId) {
    if (!user) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    if (user.role === this.ROLE_ALUMNI) return false;
    return this.canAccessTeam(user, teamId);
  },

  canDeleteResource(user, resource) {
    if (!user || !resource) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    if (this.canManageTeam(user, resource.team_id)) return true;
    return resource.uploaded_by === user.id;
  },

  canAccessResource(user, resource) {
    if (!user || !resource) return false;
    if (user.role === this.ROLE_SUPERVISOR) return true;
    return this.canAccessTeam(user, resource.team_id);
  },

  canManageUsers(user) {
    return user && user.role === this.ROLE_SUPERVISOR;
  }
};
