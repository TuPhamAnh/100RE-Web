/**
 * 100RE LAB WORKSPACE — Authoritative Role-Based Access Control (RBAC)
 */

export const RBAC = {
  // Global Roles
  ROLE_SUPERVISOR: 'supervisor',
  ROLE_LEADER: 'team_leader',
  ROLE_RESEARCHER: 'researcher',
  ROLE_ALUMNI: 'alumni',

  isSuper(user) {
    if (!user) return false;
    return user.role === 'supervisor' || user.role === 'admin' || !!user.isSupervisor || !!user.isSystemAdmin;
  },

  canAccessTeam(user, teamId) {
    if (!user) return false;
    if (this.isSuper(user)) return true;
    if (Array.isArray(user.teams)) {
      return user.teams.some(t => {
        const tid = typeof t === 'string' ? t : (t.team_id || t.id);
        return tid === teamId;
      });
    }
    return false;
  },

  canManageTeam(user, teamId) {
    if (!user) return false;
    if (this.isSuper(user)) return true;
    if (user.role === this.ROLE_LEADER || user.role === 'team_leader') {
      if (user.teamRoles && user.teamRoles[teamId] === 'leader') return true;
      if (Array.isArray(user.teams)) {
        return user.teams.some(t => {
          const tid = typeof t === 'string' ? t : (t.team_id || t.id);
          return tid === teamId;
        });
      }
    }
    return false;
  },

  canAccessProject(user, project) {
    if (!user || !project) return false;
    if (this.isSuper(user)) return true;
    if (!this.canAccessTeam(user, project.team_id)) return false;
    if (user.role === this.ROLE_LEADER || user.role === 'team_leader') return true;
    if (Array.isArray(user.projects)) {
      return user.projects.some(p => {
        const pid = typeof p === 'string' ? p : (p.project_id || p.id);
        return pid === project.id;
      }) || project.created_by === user.id;
    }
    return project.created_by === user.id;
  },

  canManageProject(user, project) {
    if (!user || !project) return false;
    if (this.isSuper(user)) return true;
    return this.canManageTeam(user, project.team_id);
  },

  canCreateProject(user, teamId) {
    if (!user) return false;
    if (this.isSuper(user)) return true;
    return this.canManageTeam(user, teamId);
  },

  canCreateTask(user, teamId) {
    if (!user) return false;
    if (this.isSuper(user)) return true;
    return this.canManageTeam(user, teamId);
  },

  canEditTask(user, task) {
    if (!user || !task) return false;
    if (this.isSuper(user)) return true;
    if (this.canManageTeam(user, task.team_id)) return true;
    if (user.role === this.ROLE_RESEARCHER || user.role === 'researcher') {
      return task.assigned_to === user.id || task.created_by === user.id || this.canAccessTeam(user, task.team_id);
    }
    return false;
  },

  canDeleteTask(user, task) {
    if (!user || !task) return false;
    if (this.isSuper(user)) return true;
    return this.canManageTeam(user, task.team_id);
  },

  canUploadResource(user, teamId) {
    if (!user) return false;
    if (this.isSuper(user)) return true;
    if (user.role === this.ROLE_ALUMNI || user.role === 'alumni') return false;
    return this.canAccessTeam(user, teamId);
  },

  canDeleteResource(user, resource) {
    if (!user || !resource) return false;
    if (this.isSuper(user)) return true;
    if (this.canManageTeam(user, resource.team_id)) return true;
    return resource.uploaded_by === user.id;
  },

  canAccessResource(user, resource) {
    if (!user || !resource) return false;
    if (this.isSuper(user)) return true;
    return this.canAccessTeam(user, resource.team_id);
  },

  canManageUsers(user) {
    if (!user) return false;
    return this.isSuper(user);
  }
};
