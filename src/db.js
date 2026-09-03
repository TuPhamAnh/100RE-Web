/**
 * 100RE LAB WORKSPACE — Database Abstraction Layer (Cloudflare D1 + SciNote ELN)
 * Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive (File Storage)
 */

import { 
  SEED_USERS, SEED_TEAMS, SEED_TEAM_MEMBERS, SEED_PROJECTS, SEED_PROJECT_MEMBERS, 
  SEED_TASKS, SEED_TASK_COMMENTS, SEED_DOCUMENTS, SEED_DATASETS, SEED_ACTIVITY_LOGS,
  SEED_EXPERIMENTS, SEED_INSTRUMENTS, SEED_PROTOCOLS, SEED_PROTOCOL_STEPS, SEED_LAB_NOTES, SEED_SIGNOFFS
} from './seedData.js';

// In-memory persistent dev store fallback
let devStore = null;

export function getDatabase(env) {
  if (!devStore) {
    devStore = initDevStore();
  }

  if (env && env.DB) {
    return new D1Wrapper(env.DB, devStore);
  }
  
  return new MockD1Wrapper(devStore);
}

class D1Wrapper {
  constructor(d1, fallbackStore) {
    this.d1 = d1;
    this.fallbackStore = fallbackStore;
  }

  async all(query, params = []) {
    try {
      const stmt = this.d1.prepare(query);
      const res = params.length > 0 ? await stmt.bind(...params).all() : await stmt.all();
      if (res.results && res.results.length > 0) {
        return res.results;
      }
      return this.fallbackStore.execute(query, params);
    } catch (e) {
      console.warn('D1 all error, using fallback:', e.message);
      return this.fallbackStore.execute(query, params);
    }
  }

  async first(query, params = []) {
    try {
      const stmt = this.d1.prepare(query);
      const res = params.length > 0 ? await stmt.bind(...params).first() : await stmt.first();
      if (res) return res;
      return this.fallbackStore.execute(query, params)[0] || null;
    } catch (e) {
      console.warn('D1 first error, using fallback:', e.message);
      const rows = this.fallbackStore.execute(query, params);
      return rows.length > 0 ? rows[0] : null;
    }
  }

  async run(query, params = []) {
    try {
      const stmt = this.d1.prepare(query);
      const res = params.length > 0 ? await stmt.bind(...params).run() : await stmt.run();
      this.fallbackStore.run(query, params);
      return { success: res.success, changes: res.meta ? res.meta.changes : 1 };
    } catch (e) {
      console.warn('D1 run error, running on fallback:', e.message);
      return this.fallbackStore.run(query, params);
    }
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
    experiments: JSON.parse(JSON.stringify(SEED_EXPERIMENTS)),
    project_members: JSON.parse(JSON.stringify(SEED_PROJECT_MEMBERS)),
    tasks: JSON.parse(JSON.stringify(SEED_TASKS)),
    protocol_steps: JSON.parse(JSON.stringify(SEED_PROTOCOL_STEPS)),
    lab_notes: JSON.parse(JSON.stringify(SEED_LAB_NOTES)),
    instruments: JSON.parse(JSON.stringify(SEED_INSTRUMENTS)),
    protocols: JSON.parse(JSON.stringify(SEED_PROTOCOLS)),
    sign_offs: JSON.parse(JSON.stringify(SEED_SIGNOFFS)),
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
        if (q.includes('USER_ID =') || q.includes('USER_ID=?') || q.includes('USER_ID')) {
          return this.team_members.filter(tm => tm.user_id === params[0]);
        }
        if (q.includes('TEAM_ID =') || q.includes('TEAM_ID=?') || q.includes('TEAM_ID')) {
          return this.team_members.filter(tm => tm.team_id === params[0]);
        }
        return [...this.team_members];
      }

      // PROJECT_MEMBERS
      if (q.includes('FROM PROJECT_MEMBERS')) {
        if (q.includes('USER_ID =') || q.includes('USER_ID=?') || q.includes('USER_ID')) {
          return this.project_members.filter(pm => pm.user_id === params[0]);
        }
        if (q.includes('PROJECT_ID =') || q.includes('PROJECT_ID=?') || q.includes('PROJECT_ID')) {
          return this.project_members.filter(pm => pm.project_id === params[0]);
        }
        return [...this.project_members];
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

      // EXPERIMENTS (SciNote hierarchy)
      if (q.includes('FROM EXPERIMENTS')) {
        if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
          return this.experiments.filter(e => e.id === params[0]);
        }
        if (q.includes('WHERE PROJECT_ID =') || q.includes('WHERE PROJECT_ID=?')) {
          return this.experiments.filter(e => e.project_id === params[0]);
        }
        if (q.includes('WHERE TEAM_ID =') || q.includes('WHERE TEAM_ID=?')) {
          return this.experiments.filter(e => e.team_id === params[0]);
        }
        return [...this.experiments];
      }

      // INSTRUMENTS & LAB INVENTORY
      if (q.includes('FROM INSTRUMENTS')) {
        if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
          return this.instruments.filter(i => i.id === params[0]);
        }
        if (q.includes('WHERE STATUS =') || q.includes('WHERE STATUS=?')) {
          return this.instruments.filter(i => i.status === params[0]);
        }
        return [...this.instruments];
      }

      // PROTOCOLS (SOPs)
      if (q.includes('FROM PROTOCOLS')) {
        if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
          return this.protocols.filter(p => p.id === params[0]);
        }
        if (q.includes('WHERE TEAM_ID =') || q.includes('WHERE TEAM_ID=?')) {
          return this.protocols.filter(p => p.team_id === params[0]);
        }
        return [...this.protocols];
      }

      // PROTOCOL_STEPS
      if (q.includes('FROM PROTOCOL_STEPS')) {
        if (q.includes('WHERE TASK_ID =') || q.includes('WHERE TASK_ID=?')) {
          return this.protocol_steps.filter(ps => ps.task_id === params[0]).sort((a,b) => a.step_order - b.step_order);
        }
        return [...this.protocol_steps];
      }

      // LAB_NOTES
      if (q.includes('FROM LAB_NOTES')) {
        if (q.includes('WHERE TASK_ID =') || q.includes('WHERE TASK_ID=?')) {
          return this.lab_notes.filter(ln => ln.task_id === params[0]).sort((a,b) => b.created_at - a.created_at);
        }
        return [...this.lab_notes];
      }

      // SIGN_OFFS
      if (q.includes('FROM SIGN_OFFS')) {
        if (q.includes('WHERE TASK_ID =') || q.includes('WHERE TASK_ID=?')) {
          return this.sign_offs.filter(so => so.task_id === params[0]);
        }
        return [...this.sign_offs];
      }

      // TASKS
      if (q.includes('FROM TASKS')) {
        let list = [...this.tasks];
        if (params.length > 0) {
          if (q.includes('WHERE ID =') || q.includes('WHERE ID=?')) {
            return list.filter(t => t.id === params[0]);
          }
          if (q.includes('WHERE PROJECT_ID =') || q.includes('WHERE PROJECT_ID=?')) {
            return list.filter(t => t.project_id === params[0]);
          }
          if (q.includes('WHERE EXPERIMENT_ID =') || q.includes('WHERE EXPERIMENT_ID=?')) {
            return list.filter(t => t.experiment_id === params[0]);
          }
          if (q.includes('WHERE TEAM_ID =') || q.includes('WHERE TEAM_ID=?')) {
            return list.filter(t => t.team_id === params[0]);
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

      if (q.startsWith('INSERT INTO EXPERIMENTS') || q.startsWith('INSERT OR IGNORE INTO EXPERIMENTS')) {
        const e = { id: params[0], project_id: params[1], team_id: params[2], name: params[3], slug: params[4], description: params[5], status: params[6], start_date: params[7], end_date: params[8], created_by: params[9], created_at: params[10], updated_at: params[11] };
        this.experiments.push(e);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO PROTOCOL_STEPS') || q.startsWith('INSERT OR IGNORE INTO PROTOCOL_STEPS')) {
        const ps = { id: params[0], task_id: params[1], step_order: params[2], title: params[3], instruction: params[4], is_completed: params[5], completed_by: params[6], completed_at: params[7] };
        this.protocol_steps.push(ps);
        return { changes: 1 };
      }

      if (q.startsWith('UPDATE PROTOCOL_STEPS')) {
        const id = params[params.length - 1];
        const ps = this.protocol_steps.find(x => x.id === id);
        if (ps) {
          ps.is_completed = params[0];
          ps.completed_by = params[1];
          ps.completed_at = params[2];
        }
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO LAB_NOTES') || q.startsWith('INSERT OR IGNORE INTO LAB_NOTES')) {
        const ln = { id: params[0], task_id: params[1], user_id: params[2], title: params[3], content: params[4], parameters_json: params[5], created_at: params[6], updated_at: params[7] };
        this.lab_notes.unshift(ln);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO SIGN_OFFS') || q.startsWith('INSERT OR IGNORE INTO SIGN_OFFS')) {
        const so = { id: params[0], task_id: params[1], user_id: params[2], status: params[3], comments: params[4], signed_at: params[5], created_at: params[6] };
        this.sign_offs.push(so);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO INSTRUMENTS') || q.startsWith('INSERT OR IGNORE INTO INSTRUMENTS')) {
        let newInst;
        if (params.length >= 10) {
          newInst = {
            id: params[0], name: params[1], code: params[2],
            model: params[3] || '', manufacturer: params[4] || '', serial_number: params[5] || '',
            category: params[6] || params[3], team_id: params[7] || 'team-pv', location: params[8] || params[4],
            status: params[9] || params[5], specs: params[10] || params[6],
            documentation_url: params[11] || '', current_user_id: params[12] || params[7] || null,
            created_at: params[13] || params[8] || Math.floor(Date.now()/1000),
            updated_at: params[14] || params[9] || Math.floor(Date.now()/1000)
          };
        } else {
          newInst = {
            id: params[0], name: params[1], code: params[2], category: params[3],
            location: params[4], status: params[5], specs: params[6],
            current_user_id: params[7] || null, created_at: params[8] || Math.floor(Date.now()/1000),
            updated_at: params[9] || Math.floor(Date.now()/1000)
          };
        }
        this.instruments.unshift(newInst);
        return { changes: 1 };
      }

      if (q.startsWith('DELETE FROM INSTRUMENTS')) {
        const id = params[0];
        this.instruments = this.instruments.filter(i => i.id !== id);
        return { changes: 1 };
      }

      if (q.startsWith('UPDATE INSTRUMENTS')) {
        const id = params[params.length - 1];
        const inst = this.instruments.find(x => x.id === id);
        if (inst) {
          if (q.includes('SET STATUS = ?') && params.length <= 4) {
            inst.status = params[0];
            inst.current_user_id = params[1];
            inst.updated_at = params[2];
          } else {
            if (params[0] !== undefined) inst.name = params[0] || inst.name;
            if (params[1] !== undefined) inst.code = params[1] || inst.code;
            if (params[2] !== undefined) inst.model = params[2] || inst.model;
            if (params[3] !== undefined) inst.manufacturer = params[3] || inst.manufacturer;
            if (params[4] !== undefined) inst.serial_number = params[4] || inst.serial_number;
            if (params[5] !== undefined) inst.category = params[5] || inst.category;
            if (params[6] !== undefined) inst.team_id = params[6] || inst.team_id;
            if (params[7] !== undefined) inst.location = params[7] || inst.location;
            if (params[8] !== undefined) inst.status = params[8] || inst.status;
            if (params[9] !== undefined) inst.specs = params[9] || inst.specs;
            if (params[10] !== undefined) inst.documentation_url = params[10] || inst.documentation_url;
            inst.updated_at = params[11] || Math.floor(Date.now()/1000);
          }
        }
        return { changes: 1 };
      }

      // Original handlers
      if (q.startsWith('INSERT INTO TASKS') || q.startsWith('INSERT OR IGNORE INTO TASKS')) {
        const t = { id: params[0], team_id: params[1], project_id: params[2], title: params[3], description: params[4], status: params[5], priority: params[6], assigned_to: params[7], created_by: params[8], due_date: params[9], created_at: params[10], updated_at: params[11], completed_at: params[12], experiment_id: params[13] || null };
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

      if (q.startsWith('INSERT INTO DATASETS') || q.startsWith('INSERT OR IGNORE INTO DATASETS')) {
        const ds = { id: params[0], team_id: params[1], project_id: params[2], name: params[3], description: params[4], source: params[5], data_type: params[6], format: params[7], start_date: params[8], end_date: params[9], resolution: params[10], file_size: params[11], storage_provider: params[12], drive_file_id: params[13], drive_folder_id: params[14], uploaded_by: params[15], tags: params[16], created_at: params[17], updated_at: params[18] };
        this.datasets.push(ds);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO DOCUMENTS') || q.startsWith('INSERT OR IGNORE INTO DOCUMENTS')) {
        const doc = { id: params[0], team_id: params[1], project_id: params[2], name: params[3], description: params[4], file_name: params[5], mime_type: params[6], file_size: params[7], storage_provider: params[8], drive_file_id: params[9], drive_folder_id: params[10], uploaded_by: params[11], tags: params[12], created_at: params[13], updated_at: params[14] };
        this.documents.push(doc);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO PROJECTS') || q.startsWith('INSERT OR IGNORE INTO PROJECTS')) {
        const proj = { id: params[0], team_id: params[1], name: params[2], slug: params[3], description: params[4], status: params[5], progress: params[6], start_date: params[7], end_date: params[8], drive_folder_id: params[9], created_by: params[10], created_at: params[11], updated_at: params[12] };
        this.projects.push(proj);
        return { changes: 1 };
      }

      if (q.startsWith('INSERT INTO ACTIVITY_LOGS') || q.startsWith('INSERT OR IGNORE INTO ACTIVITY_LOGS')) {
        const a = { id: params[0], user_id: params[1], team_id: params[2], project_id: params[3], entity_type: params[4], entity_id: params[5], action: params[6], metadata: params[7], created_at: params[8] };
        this.activity_logs.unshift(a);
        return { changes: 1 };
      }

      return { changes: 1 };
    }
  };

  return store;
}
