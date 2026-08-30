/**
 * 100RE LAB WORKSPACE — Database Abstraction Layer (Cloudflare D1)
 * Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive (File Storage)
 */

import { SEED_USERS, SEED_TEAMS, SEED_TEAM_MEMBERS, SEED_PROJECTS, SEED_PROJECT_MEMBERS, SEED_TASKS, SEED_TASK_COMMENTS, SEED_DOCUMENTS, SEED_DATASETS, SEED_ACTIVITY_LOGS } from './seedData.js';

// In-memory persistent dev store fallback
let devStore = null;

export function getDatabase(env) {
  if (env && env.DB) {
    return new D1Wrapper(env.DB);
  }
  
  if (!devStore) {
    devStore = initDevStore();
  }
  return new MockD1Wrapper(devStore);
}

class D1Wrapper {
  constructor(d1) {
    this.d1 = d1;
  }

  async all(query, params = []) {
    const stmt = this.d1.prepare(query);
    const res = params.length > 0 ? await stmt.bind(...params).all() : await stmt.all();
    return res.results || [];
  }

  async first(query, params = []) {
    const stmt = this.d1.prepare(query);
    const res = params.length > 0 ? await stmt.bind(...params).first() : await stmt.first();
    return res || null;
  }

  async run(query, params = []) {
    const stmt = this.d1.prepare(query);
    const res = params.length > 0 ? await stmt.bind(...params).run() : await stmt.run();
    return { success: res.success, changes: res.meta ? res.meta.changes : 1 };
  }
}

class MockD1Wrapper {
  constructor(store) {
    this.store = store;
  }

  async all(query, params = []) {
    return this.store.execute(query, params);
  }

  async first(query, params = []) {
    const rows = this.store.execute(query, params);
    return rows.length > 0 ? rows[0] : null;
  }

  async run(query, params = []) {
    const res = this.store.run(query, params);
    return { success: true, changes: res.changes || 1 };
  }
}

function initDevStore() {
  const store = {
    users: JSON.parse(JSON.stringify(SEED_USERS)),
    teams: JSON.parse(JSON.stringify(SEED_TEAMS)),
    team_members: JSON.parse(JSON.stringify(SEED_TEAM_MEMBERS)),
    projects: JSON.parse(JSON.stringify(SEED_PROJECTS)),
    project_members: JSON.parse(JSON.stringify(SEED_PROJECT_MEMBERS)),
    tasks: JSON.parse(JSON.stringify(SEED_TASKS)),
    task_comments: JSON.parse(JSON.stringify(SEED_TASK_COMMENTS)),
    documents: JSON.parse(JSON.stringify(SEED_DOCUMENTS)),
    datasets: JSON.parse(JSON.stringify(SEED_DATASETS)),
    activity_logs: JSON.parse(JSON.stringify(SEED_ACTIVITY_LOGS)),

    execute(query, params = []) {
      const q = query.trim().toUpperCase();
      
      // USERS
      if (q.includes('FROM USERS')) {
        if (q.includes('WHERE EMAIL =') || q.includes('WHERE EMAIL=?')) {
          const email = params[0]?.toLowerCase();
          return this.users.filter(u => u.email.toLowerCase() === email);
        }
        if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
          return this.users.filter(u => u.id === params[0]);
        }
        if (q.includes('WHERE ROLE =') || q.includes('WHERE ROLE=?')) {
          return this.users.filter(u => u.role === params[0]);
        }
        if (q.includes('WHERE MEMBER_KEY =') || q.includes('WHERE MEMBER_KEY=?')) {
          return this.users.filter(u => u.member_key === params[0]);
        }
        return [...this.users];
      }

      // TEAMS
      if (q.includes('FROM TEAMS')) {
        if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
          return this.teams.filter(t => t.id === params[0] || t.slug === params[0]);
        }
        if (q.includes('WHERE SLUG =') || q.includes('WHERE SLUG=?')) {
          return this.teams.filter(t => t.slug === params[0]);
        }
        return [...this.teams];
      }

      // TEAM_MEMBERS
      if (q.includes('FROM TEAM_MEMBERS')) {
        if (q.includes('WHERE USER_ID =') || q.includes('WHERE USER_ID=?')) {
          return this.team_members.filter(tm => tm.user_id === params[0]);
        }
        if (q.includes('WHERE TEAM_ID =') || q.includes('WHERE TEAM_ID=?')) {
          return this.team_members.filter(tm => tm.team_id === params[0]);
        }
        return [...this.team_members];
      }

      // PROJECTS
      if (q.includes('FROM PROJECTS')) {
        if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
          return this.projects.filter(p => p.id === params[0]);
        }
        if (q.includes('WHERE TEAM_ID =') || q.includes('WHERE TEAM_ID=?')) {
          return this.projects.filter(p => p.team_id === params[0]);
        }
        return [...this.projects];
      }

      // PROJECT_MEMBERS
      if (q.includes('FROM PROJECT_MEMBERS')) {
        if (q.includes('WHERE PROJECT_ID =') || q.includes('WHERE PROJECT_ID=?')) {
          return this.project_members.filter(pm => pm.project_id === params[0]);
        }
        if (q.includes('WHERE USER_ID =') || q.includes('WHERE USER_ID=?')) {
          return this.project_members.filter(pm => pm.user_id === params[0]);
        }
        return [...this.project_members];
      }

      // TASKS
      if (q.includes('FROM TASKS')) {
        let list = [...this.tasks];
        if (params.length > 0) {
          if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
            return list.filter(t => t.id === params[0]);
          }
        }
        return list;
      }

      // TASK_COMMENTS
      if (q.includes('FROM TASK_COMMENTS')) {
        if (q.includes('WHERE TASK_ID =') || q.includes('WHERE TASK_ID=?')) {
          return this.task_comments.filter(c => c.task_id === params[0]).sort((a,b) => a.created_at - b.created_at);
        }
        return [...this.task_comments];
      }

      // DOCUMENTS
      if (q.includes('FROM DOCUMENTS')) {
        if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
          return this.documents.filter(d => d.id === params[0]);
        }
        return [...this.documents];
      }

      // DATASETS
      if (q.includes('FROM DATASETS')) {
        if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
          return this.datasets.filter(d => d.id === params[0]);
        }
        return [...this.datasets];
      }

      // ACTIVITY_LOGS
      if (q.includes('FROM ACTIVITY_LOGS')) {
        return [...this.activity_logs].sort((a,b) => b.created_at - a.created_at);
      }

      return [];
    },

    run(query, params = []) {
      const q = query.trim().toUpperCase();

      // INSERT / UPDATE / DELETE handlers for in-memory dev store
      if (q.startsWith('INSERT INTO USERS') || q.startsWith('INSERT OR IGNORE INTO USERS')) {
        // [id, email, display_name, member_key, avatar_url, role, status, created_at, updated_at]
        const u = {
          id: params[0],
          email: params[1],
          display_name: params[2],
          name: params[2], // compatibility alias
          member_key: params[3] || null,
          avatar_url: params[4],
          role: params[5],
          status: params[6],
          created_at: params[7],
          updated_at: params[8]
        };
        this.users.push(u);
        return { changes: 1 };
      }

      if (q.startsWith('UPDATE USERS')) {
        const id = params[params.length - 1];
        const u = this.users.find(x => x.id === id);
        if (u) {
          if (params.length === 6) { // display_name, role, status, member_key, updated_at, id
            u.display_name = params[0];
            u.name = params[0];
            u.role = params[1];
            u.status = params[2];
            u.member_key = params[3];
            u.updated_at = params[4];
          } else if (params.length === 7) { // display_name, role, status, member_key, avatar_url, updated_at, id
            u.display_name = params[0];
            u.name = params[0];
            u.role = params[1];
            u.status = params[2];
            u.member_key = params[3];
            u.avatar_url = params[4];
            u.updated_at = params[5];
          }
        }
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO TEAMS') || q.startsWith('INSERT OR IGNORE INTO TEAMS')) {
        const t = { id: params[0], name: params[1], slug: params[2], description: params[3], status: params[4], created_at: params[5], updated_at: params[6] };
        this.teams.push(t);
        return { changes: 1 };
      }

      if (q.startsWith('UPDATE TEAMS')) {
        const id = params[params.length - 1];
        const t = this.teams.find(x => x.id === id);
        if (t) {
          t.name = params[0];
          t.slug = params[1];
          t.description = params[2];
          t.status = params[3];
          t.updated_at = params[4];
        }
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO PROJECTS') || q.startsWith('INSERT OR IGNORE INTO PROJECTS')) {
        const p = { id: params[0], team_id: params[1], name: params[2], slug: params[3], description: params[4], status: params[5], progress: params[6], start_date: params[7], end_date: params[8], drive_folder_id: params[9], created_by: params[10], created_at: params[11], updated_at: params[12] };
        this.projects.push(p);
        return { changes: 1 };
      }

      if (q.startsWith('UPDATE PROJECTS')) {
        const id = params[params.length - 1];
        const p = this.projects.find(x => x.id === id);
        if (p) {
          p.name = params[0];
          p.description = params[1];
          p.status = params[2];
          p.progress = params[3];
          p.start_date = params[4];
          p.end_date = params[5];
          p.updated_at = params[6];
        }
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO TASKS') || q.startsWith('INSERT OR IGNORE INTO TASKS')) {
        const t = { id: params[0], team_id: params[1], project_id: params[2], title: params[3], description: params[4], status: params[5], priority: params[6], assigned_to: params[7], created_by: params[8], due_date: params[9], created_at: params[10], updated_at: params[11], completed_at: params[12] };
        this.tasks.push(t);
        return { changes: 1 };
      }

      if (q.startsWith('UPDATE TASKS')) {
        const id = params[params.length - 1];
        const t = this.tasks.find(x => x.id === id);
        if (t) {
          t.title = params[0];
          t.description = params[1];
          t.status = params[2];
          t.priority = params[3];
          t.assigned_to = params[4];
          t.due_date = params[5];
          t.updated_at = params[6];
          t.completed_at = params[7];
        }
        return { changes: 1 };
      }

      if (q.startsWith('DELETE FROM TASKS')) {
        const id = params[0];
        this.tasks = this.tasks.filter(x => x.id !== id);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO TASK_COMMENTS') || q.startsWith('INSERT OR IGNORE INTO TASK_COMMENTS')) {
        const c = { id: params[0], task_id: params[1], user_id: params[2], content: params[3], created_at: params[4], updated_at: params[5] };
        this.task_comments.push(c);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO DOCUMENTS') || q.startsWith('INSERT OR IGNORE INTO DOCUMENTS')) {
        const d = { id: params[0], team_id: params[1], project_id: params[2], name: params[3], description: params[4], file_name: params[5], mime_type: params[6], file_size: params[7], storage_provider: params[8] || 'google_drive', drive_file_id: params[9], drive_folder_id: params[10], uploaded_by: params[11], tags: params[12], created_at: params[13], updated_at: params[14] };
        this.documents.push(d);
        return { changes: 1 };
      }

      if (q.startsWith('DELETE FROM DOCUMENTS')) {
        const id = params[0];
        this.documents = this.documents.filter(x => x.id !== id);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO DATASETS') || q.startsWith('INSERT OR IGNORE INTO DATASETS')) {
        const ds = { id: params[0], team_id: params[1], project_id: params[2], name: params[3], description: params[4], source: params[5], data_type: params[6], start_date: params[7], end_date: params[8], resolution: params[9], format: params[10], file_size: params[11], storage_provider: params[12] || 'google_drive', drive_file_id: params[13], drive_folder_id: params[14], uploaded_by: params[15], tags: params[16], created_at: params[17], updated_at: params[18] };
        this.datasets.push(ds);
        return { changes: 1 };
      }

      if (q.startsWith('DELETE FROM DATASETS')) {
        const id = params[0];
        this.datasets = this.datasets.filter(x => x.id !== id);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO ACTIVITY_LOGS') || q.startsWith('INSERT OR IGNORE INTO ACTIVITY_LOGS')) {
        const a = { id: params[0], user_id: params[1], team_id: params[2], project_id: params[3], entity_type: params[4], entity_id: params[5], action: params[6], metadata: params[7], created_at: params[8] };
        this.activity_logs.unshift(a);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO TEAM_MEMBERS') || q.startsWith('INSERT OR IGNORE INTO TEAM_MEMBERS')) {
        const tm = { id: params[0], team_id: params[1], user_id: params[2], team_role: params[3], joined_at: params[4] };
        if (!this.team_members.some(x => x.team_id === tm.team_id && x.user_id === tm.user_id)) {
          this.team_members.push(tm);
        }
        return { changes: 1 };
      }

      if (q.startsWith('DELETE FROM TEAM_MEMBERS')) {
        const team_id = params[0];
        const user_id = params[1];
        this.team_members = this.team_members.filter(x => !(x.team_id === team_id && x.user_id === user_id));
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO PROJECT_MEMBERS') || q.startsWith('INSERT OR IGNORE INTO PROJECT_MEMBERS')) {
        const pm = { id: params[0], project_id: params[1], user_id: params[2], project_role: params[3], joined_at: params[4] };
        if (!this.project_members.some(x => x.project_id === pm.project_id && x.user_id === pm.user_id)) {
          this.project_members.push(pm);
        }
        return { changes: 1 };
      }

      return { changes: 0 };
    }
  };

  return store;
}
