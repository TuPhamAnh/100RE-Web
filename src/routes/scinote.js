/**
 * 100RE LAB WORKSPACE — SciNote ELN Routes
 * Endpoints for Experiments, Protocol Steps, Lab Notes, Inventory Instruments, and Sign-offs.
 */

import { jsonResponse } from '../index.js';

export async function handleSciNoteRoutes(request, env, db, user, path, corsHeaders) {
  const method = request.method;

  // 1. EXPERIMENTS LIST & CREATE
  if (path === '/api/experiments') {
    if (method === 'GET') {
      const url = new URL(request.url);
      const projectId = url.searchParams.get('projectId');
      const teamId = url.searchParams.get('teamId');

      let query = 'SELECT * FROM experiments';
      const params = [];
      const conditions = [];

      if (projectId) {
        conditions.push('project_id = ?');
        params.push(projectId);
      }
      if (teamId) {
        conditions.push('team_id = ?');
        params.push(teamId);
      }

      if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
      }
      query += ' ORDER BY created_at DESC';

      const experiments = await db.all(query, params);
      
      // Enrich with project name and tasks count
      for (const exp of experiments) {
        const proj = await db.first('SELECT name, slug FROM projects WHERE id = ?', [exp.project_id]);
        exp.project = proj || { name: 'General Project' };
        const tasks = await db.all('SELECT id, status FROM tasks WHERE experiment_id = ?', [exp.id]);
        exp.taskCount = tasks.length;
        exp.completedTaskCount = tasks.filter(t => t.status === 'done').length;
      }

      return jsonResponse({ experiments }, 200, corsHeaders);
    }

    if (method === 'POST') {
      if (!user.isSupervisor && !user.isLeader) {
        return jsonResponse({ error: 'Permission denied. Only Leaders and Supervisors can create experiments.' }, 403, corsHeaders);
      }
      const body = await request.json();
      const { project_id, team_id, name, description, start_date, end_date } = body;
      if (!project_id || !name) {
        return jsonResponse({ error: 'project_id and name are required' }, 400, corsHeaders);
      }

      const id = `exp-${Date.now()}`;
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const now = Math.floor(Date.now() / 1000);

      await db.run(
        'INSERT INTO experiments (id, project_id, team_id, name, slug, description, status, start_date, end_date, created_by, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [id, project_id, team_id || 'team-pv', name, slug, description || '', 'in_progress', start_date || '', end_date || '', user.id, now, now]
      );

      await db.run(
        'INSERT INTO activity_logs (id, user_id, team_id, project_id, entity_type, entity_id, action, metadata, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [`act-${Date.now()}`, user.id, team_id, project_id, 'experiment', id, 'create_experiment', JSON.stringify({ name }), now]
      );

      return jsonResponse({ success: true, id }, 201, corsHeaders);
    }
  }

  // 2. EXPERIMENT DETAIL & WORKFLOW GRAPH
  if (path.startsWith('/api/experiments/') && method === 'GET') {
    const expId = path.split('/')[3];
    const exp = await db.first('SELECT * FROM experiments WHERE id = ?', [expId]);
    if (!exp) return jsonResponse({ error: 'Experiment not found' }, 404, corsHeaders);

    const project = await db.first('SELECT * FROM projects WHERE id = ?', [exp.project_id]);
    const team = await db.first('SELECT * FROM teams WHERE id = ?', [exp.team_id]);
    const tasks = await db.all('SELECT * FROM tasks WHERE experiment_id = ? ORDER BY created_at ASC', [expId]);

    // Build SciNote Workflow Nodes
    const workflowNodes = tasks.map((t, idx) => ({
      id: t.id,
      stepNumber: idx + 1,
      title: t.title,
      status: t.status,
      priority: t.priority,
      assigned_to: t.assigned_to,
      due_date: t.due_date
    }));

    return jsonResponse({ experiment: exp, project, team, tasks, workflowNodes }, 200, corsHeaders);
  }

  // 3. LAB INSTRUMENTS & INVENTORY
  if (path === '/api/instruments') {
    if (method === 'GET') {
      const instruments = await db.all('SELECT * FROM instruments ORDER BY category ASC, name ASC');
      return jsonResponse({ instruments }, 200, corsHeaders);
    }
  }

  if (path.startsWith('/api/instruments/') && path.endsWith('/status') && method === 'PATCH') {
    const instId = path.split('/')[3];
    const body = await request.json();
    const { status } = body;
    const now = Math.floor(Date.now() / 1000);
    const userId = status === 'in_use' ? user.id : null;

    await db.run('UPDATE instruments SET status = ?, current_user_id = ?, updated_at = ? WHERE id = ?', [status, userId, now, instId]);
    return jsonResponse({ success: true }, 200, corsHeaders);
  }

  // 4. PROTOCOLS (SOPs)
  if (path === '/api/protocols' && method === 'GET') {
    const protocols = await db.all('SELECT * FROM protocols ORDER BY category ASC, title ASC');
    return jsonResponse({ protocols }, 200, corsHeaders);
  }

  // 5. SCINOTE TASK FULL ELECTRONIC LAB SHEET
  if (path.startsWith('/api/tasks/') && path.endsWith('/scinote') && method === 'GET') {
    const taskId = path.split('/')[3];
    const task = await db.first('SELECT * FROM tasks WHERE id = ?', [taskId]);
    if (!task) return jsonResponse({ error: 'Task not found' }, 404, corsHeaders);

    const steps = await db.all('SELECT * FROM protocol_steps WHERE task_id = ? ORDER BY step_order ASC', [taskId]);
    const notes = await db.all('SELECT * FROM lab_notes WHERE task_id = ? ORDER BY created_at DESC', [taskId]);
    const signOffs = await db.all('SELECT * FROM sign_offs WHERE task_id = ? ORDER BY created_at DESC', [taskId]);
    const comments = await db.all('SELECT * FROM task_comments WHERE task_id = ? ORDER BY created_at ASC', [taskId]);
    const documents = await db.all('SELECT * FROM documents WHERE project_id = ?', [task.project_id || '']);
    const datasets = await db.all('SELECT * FROM datasets WHERE project_id = ?', [task.project_id || '']);

    return jsonResponse({ task, steps, notes, signOffs, comments, documents, datasets }, 200, corsHeaders);
  }

  // 6. TOGGLE PROTOCOL STEP COMPLETION
  if (path.startsWith('/api/tasks/steps/') && method === 'PATCH') {
    const stepId = path.split('/')[4];
    const body = await request.json();
    const { is_completed } = body;
    const now = Math.floor(Date.now() / 1000);
    const completedBy = is_completed ? user.id : null;
    const completedAt = is_completed ? now : null;

    await db.run('UPDATE protocol_steps SET is_completed = ?, completed_by = ?, completed_at = ? WHERE id = ?', [is_completed ? 1 : 0, completedBy, completedAt, stepId]);
    return jsonResponse({ success: true }, 200, corsHeaders);
  }

  // 7. ADD PROTOCOL STEP
  if (path.startsWith('/api/tasks/') && path.endsWith('/steps') && method === 'POST') {
    const taskId = path.split('/')[3];
    const body = await request.json();
    const { title, instruction, step_order } = body;
    const id = `step-${Date.now()}`;

    await db.run(
      'INSERT INTO protocol_steps (id, task_id, step_order, title, instruction, is_completed) VALUES (?, ?, ?, ?, ?, 0)',
      [id, taskId, step_order || 1, title, instruction || '']
    );
    return jsonResponse({ success: true, id }, 201, corsHeaders);
  }

  // 8. ADD LAB OBSERVATION NOTE
  if (path.startsWith('/api/tasks/') && path.endsWith('/notes') && method === 'POST') {
    const taskId = path.split('/')[3];
    const body = await request.json();
    const { title, content, parameters } = body;
    const id = `note-${Date.now()}`;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      'INSERT INTO lab_notes (id, task_id, user_id, title, content, parameters_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [id, taskId, user.id, title || 'Lab Observation Note', content || '', JSON.stringify(parameters || {}), now, now]
    );
    return jsonResponse({ success: true, id }, 201, corsHeaders);
  }

  // 9. SUPERVISOR ELECTRONIC SIGN-OFF
  if (path.startsWith('/api/tasks/') && path.endsWith('/sign-off') && method === 'POST') {
    if (!user.isSupervisor && !user.isLeader) {
      return jsonResponse({ error: 'Permission denied. Only Supervisors and Team Leaders can sign off.' }, 403, corsHeaders);
    }
    const taskId = path.split('/')[3];
    const body = await request.json();
    const { status, comments } = body; // 'approved' | 'changes_requested'
    const id = `sign-${Date.now()}`;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      'INSERT INTO sign_offs (id, task_id, user_id, status, comments, signed_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, taskId, user.id, status || 'approved', comments || '', now, now]
    );

    if (status === 'approved') {
      await db.run('UPDATE tasks SET status = ? WHERE id = ?', ['done', taskId]);
    }

    return jsonResponse({ success: true, id }, 201, corsHeaders);
  }

  return null;
}
