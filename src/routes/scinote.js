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

  // 3. LAB INSTRUMENTS & INVENTORY (Full CRUD with D1 & Cloudflare KV Persistence)
  if (path === '/api/instruments' || path.startsWith('/api/instruments/')) {
    const instId = path.split('/')[3];

    // GET /api/instruments
    if (method === 'GET' && !instId) {
      let instruments = await db.all('SELECT * FROM instruments ORDER BY category ASC, name ASC');
      if (env && env.MEMBERS_KV) {
        try {
          const kvRaw = await env.MEMBERS_KV.get('instruments_dataset');
          if (kvRaw) {
            const parsed = JSON.parse(kvRaw);
            if (Array.isArray(parsed) && parsed.length > 0) {
              instruments = parsed;
            }
          }
        } catch(e) {}
      }
      return jsonResponse({ instruments }, 200, corsHeaders);
    }

    // GET /api/instruments/:id
    if (method === 'GET' && instId && !path.endsWith('/status')) {
      let inst = await db.first('SELECT * FROM instruments WHERE id = ?', [instId]);
      if (!inst && env && env.MEMBERS_KV) {
        try {
          const kvRaw = await env.MEMBERS_KV.get('instruments_dataset');
          if (kvRaw) {
            const list = JSON.parse(kvRaw);
            inst = list.find(i => i.id === instId);
          }
        } catch(e) {}
      }
      if (!inst) return jsonResponse({ error: 'Instrument not found' }, 404, corsHeaders);
      return jsonResponse({ instrument: inst }, 200, corsHeaders);
    }

    // POST /api/instruments (Create new equipment)
    if (method === 'POST' && !instId) {
      const body = await request.json();
      const now = Math.floor(Date.now() / 1000);
      const newId = body.id || `inst-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
      const newInst = {
        id: newId,
        code: body.code || `100RE-EQ-${Date.now().toString().slice(-4)}`,
        name: body.name || 'New Lab Equipment',
        model: body.model || '',
        manufacturer: body.manufacturer || '',
        serial_number: body.serial_number || '',
        category: body.category || 'testbed',
        team_id: body.team_id || 'team-pv',
        location: body.location || 'Lab D9 / C7, HUST',
        status: body.status || 'available',
        specs: body.specs || '',
        documentation_url: body.documentation_url || '',
        current_user_id: body.current_user_id || null,
        created_at: now,
        updated_at: now
      };

      try {
        await db.run(
          `INSERT INTO instruments (id, name, code, model, manufacturer, serial_number, category, team_id, location, status, specs, documentation_url, current_user_id, created_at, updated_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [newInst.id, newInst.name, newInst.code, newInst.model, newInst.manufacturer, newInst.serial_number, newInst.category, newInst.team_id, newInst.location, newInst.status, newInst.specs, newInst.documentation_url, newInst.current_user_id, newInst.created_at, newInst.updated_at]
        );
      } catch(e) {
        await db.run('INSERT INTO instruments (id, name, code, category, location, status, specs, current_user_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [newInst.id, newInst.name, newInst.code, newInst.category, newInst.location, newInst.status, newInst.specs, newInst.current_user_id, newInst.created_at, newInst.updated_at]
        ).catch(() => {});
      }

      // KV sync
      if (env && env.MEMBERS_KV) {
        try {
          let list = [];
          const kvRaw = await env.MEMBERS_KV.get('instruments_dataset');
          if (kvRaw) list = JSON.parse(kvRaw);
          else list = await db.all('SELECT * FROM instruments');
          list = [newInst, ...list.filter(i => i.id !== newInst.id)];
          await env.MEMBERS_KV.put('instruments_dataset', JSON.stringify(list));
        } catch(e) {}
      }

      return jsonResponse({ success: true, instrument: newInst }, 201, corsHeaders);
    }

    // PATCH /api/instruments/:id/status
    if (path.endsWith('/status') && method === 'PATCH') {
      const body = await request.json();
      const { status } = body;
      const now = Math.floor(Date.now() / 1000);
      const userId = status === 'in_use' ? (user ? user.id : 'usr-res-01') : null;

      await db.run('UPDATE instruments SET status = ?, current_user_id = ?, updated_at = ? WHERE id = ?', [status, userId, now, instId]);

      if (env && env.MEMBERS_KV) {
        try {
          let list = [];
          const kvRaw = await env.MEMBERS_KV.get('instruments_dataset');
          if (kvRaw) list = JSON.parse(kvRaw);
          else list = await db.all('SELECT * FROM instruments');
          const item = list.find(i => i.id === instId);
          if (item) {
            item.status = status;
            item.current_user_id = userId;
            item.updated_at = now;
            await env.MEMBERS_KV.put('instruments_dataset', JSON.stringify(list));
          }
        } catch(e) {}
      }

      return jsonResponse({ success: true, status, current_user_id: userId }, 200, corsHeaders);
    }

    // PUT or PATCH /api/instruments/:id (Update equipment)
    if ((method === 'PUT' || method === 'PATCH') && instId && !path.endsWith('/status')) {
      const body = await request.json();
      const now = Math.floor(Date.now() / 1000);

      await db.run(
        `UPDATE instruments SET name = ?, code = ?, model = ?, manufacturer = ?, serial_number = ?, category = ?, team_id = ?, location = ?, status = ?, specs = ?, documentation_url = ?, updated_at = ? WHERE id = ?`,
        [body.name, body.code, body.model, body.manufacturer, body.serial_number, body.category, body.team_id, body.location, body.status, body.specs, body.documentation_url, now, instId]
      ).catch(() => {});

      let updated = null;
      if (env && env.MEMBERS_KV) {
        try {
          let list = [];
          const kvRaw = await env.MEMBERS_KV.get('instruments_dataset');
          if (kvRaw) list = JSON.parse(kvRaw);
          else list = await db.all('SELECT * FROM instruments');
          const idx = list.findIndex(i => i.id === instId);
          if (idx !== -1) {
            list[idx] = { ...list[idx], ...body, updated_at: now };
            updated = list[idx];
            await env.MEMBERS_KV.put('instruments_dataset', JSON.stringify(list));
          }
        } catch(e) {}
      }

      return jsonResponse({ success: true, instrument: updated }, 200, corsHeaders);
    }

    // DELETE /api/instruments/:id (Delete equipment)
    if (method === 'DELETE' && instId) {
      await db.run('DELETE FROM instruments WHERE id = ?', [instId]).catch(() => {});

      if (env && env.MEMBERS_KV) {
        try {
          let list = [];
          const kvRaw = await env.MEMBERS_KV.get('instruments_dataset');
          if (kvRaw) list = JSON.parse(kvRaw);
          else list = await db.all('SELECT * FROM instruments');
          list = list.filter(i => i.id !== instId);
          await env.MEMBERS_KV.put('instruments_dataset', JSON.stringify(list));
        } catch(e) {}
      }

      return jsonResponse({ success: true, deleted_id: instId }, 200, corsHeaders);
    }
  }

  // 4. PROTOCOLS (SOPs)
  if (path === '/api/protocols' && method === 'GET') {
    const protocols = await db.all('SELECT * FROM protocols ORDER BY category ASC, title ASC');
    return jsonResponse({ protocols }, 200, corsHeaders);
  }

  // 5. SCINOTE TASK FULL ELECTRONIC LAB SHEET
  if (path.startsWith('/api/tasks/') && path.endsWith('/scinote') && method === 'GET') {
    const taskId = path.split('/')[3];
    let task = await db.first('SELECT * FROM tasks WHERE id = ?', [taskId]);

    if (!task && env && env.MEMBERS_KV) {
      try {
        const kvRaw = await env.MEMBERS_KV.get('tasks_dataset');
        if (kvRaw) {
          const list = JSON.parse(kvRaw);
          task = list.find(t => t.id === taskId);
        }
      } catch(e) {}
    }

    if (!task) {
      const SEED_TASKS = [
        { id: 'tsk-wind-01', team_id: 'team-wind', title: 'Optimal pitch angle controller under turbulent wind gusts', description: 'Simulate FAST aerodynamic turbine model and test fuzzy pitch angle controller in Simulink.', status: 'in_progress', priority: 'medium', due_date: '2026-10-05' },
        { id: 'tsk-bess-01', team_id: 'team-bess', title: 'Implement RegD frequency regulation control algorithm', description: 'Develop MATLAB/Simulink and Python controller for fast 2-second response to PJM RegD automatic generation control signals.', status: 'in_progress', priority: 'urgent', due_date: '2026-09-15' },
        { id: 'tsk-ev-01', team_id: 'team-ev', title: 'V2G smart charging optimization for campus microgrid', description: 'Formulate mixed-integer linear programming (MILP) scheduler for 20 EV charging stations.', status: 'in_progress', priority: 'high', due_date: '2026-10-10' },
        { id: 'tsk-h2-01', team_id: 'team-hydrogen', title: 'PEM electrolyzer dynamic response & fuel cell scheduling', description: 'Model green hydrogen production from surplus solar energy with dynamic power curtailment.', status: 'in_progress', priority: 'medium', due_date: '2026-10-20' },
        { id: 'tsk-dr-01', team_id: 'team-ucdr', title: 'Dynamic pricing demand response for industrial loads', description: 'Design incentive-based demand response algorithm for industrial microgrid consumers.', status: 'in_progress', priority: 'medium', due_date: '2026-10-25' },
        { id: 'tsk-pv-01', team_id: 'team-pv', title: 'Deploy Spatio-temporal Transformer for 15-min Solar Forecasting', description: 'Train Vision Transformer with Sky Imager footage and Pyranometer irradiance log.', status: 'in_progress', priority: 'high', due_date: '2026-09-20' },
        { id: 'tsk-pv-02', team_id: 'team-pv', title: 'Calibrate Rooftop Pyranometer & Inverter Sensors', description: 'Clean sensor optics and perform 24-hour baseline irradiance calibration on C7 rooftop.', status: 'todo', priority: 'medium', due_date: '2026-09-28' },
        { id: 'tsk-sg-09', team_id: 'team-bess', title: 'Nafosted BESS State-of-Charge & Degradation Modeling', description: 'Nghiên cứu mô hình lưu trữ năng lượng pin BESS đề tài Nafosted', status: 'in_progress', priority: 'high', due_date: '2026-07-30' },
        { id: 'tsk-ai-01', team_id: 'team-ai', title: 'Huấn luyện mạng Neural dự báo phụ tải đỉnh Microgrid', description: 'Tối ưu hóa siêu tham số mô hình LSTM và Transformer dự báo công suất đỉnh', status: 'in_progress', priority: 'high', due_date: '2026-09-25' },
        { id: 'tsk-gen-01', team_id: 'team-general', title: 'Báo cáo mua sắm thiết bị & kinh phí Quý 3 Lab', description: 'Tổng hợp chi phí linh kiện thí nghiệm và dự trù kinh phí Quý 3 phòng Lab C7', status: 'in_progress', priority: 'high', due_date: '2026-09-30' },
        { id: 'tsk-gen-02', team_id: 'team-general', title: 'Chuẩn bị hồ sơ nghiệm thu đề tài cấp Bộ', description: 'Hoàn thiện thuyết minh kỹ thuật và biên bản thử nghiệm HIL phục vụ nghiệm thu', status: 'in_progress', priority: 'urgent', due_date: '2026-10-15' },
        { id: 'tsk-sg-01', team_id: 'team-smartgrid', title: 'Sửa miniscada', description: 'Tìm hiểu toàn bộ lỗi và lên danh sách thiết bị', status: 'cancelled', priority: 'low', due_date: '2026-06-24' },
        { id: 'tsk-sg-02', team_id: 'team-smartgrid', title: 'Severless Cloud Computing', description: 'Test thử full mạch cứng', status: 'cancelled', priority: 'medium', due_date: '2026-07-30' },
        { id: 'tsk-sg-03', team_id: 'team-smartgrid', title: 'Project Smartgrid T5-8', description: 'D2', status: 'in_progress', priority: 'high', due_date: '2026-07-22' },
        { id: 'tsk-sg-04', team_id: 'team-smartgrid', title: 'Bằng sáng chế - Build Application', description: 'Tìm hiểu: Backend + Frontend, API, Database', status: 'in_progress', priority: 'high', due_date: '2026-07-30' },
        { id: 'tsk-sg-05', team_id: 'team-smartgrid', title: 'Data Center - RL', description: 'First Draft', status: 'in_progress', priority: 'high', due_date: '2026-08-03' },
        { id: 'tsk-sg-06', team_id: 'team-smartgrid', title: 'Sửa review PowerCon', description: 'Hoàn thiện bản sửa đổi bài báo PowerCon gửi ban biên tập', status: 'in_progress', priority: 'low', due_date: '2026-09-01' },
        { id: 'tsk-sg-07', team_id: 'team-smartgrid', title: 'Slide PowerCon', description: 'Thiết kế slide thuyết trình báo cáo PowerCon', status: 'in_progress', priority: 'low', due_date: '2026-09-20' },
        { id: 'tsk-sg-08', team_id: 'team-smartgrid', title: 'Data Center - Review', description: 'Đánh giá cấu trúc mạng và phân tích hiệu năng Data Center', status: 'in_progress', priority: 'low', due_date: '2026-09-15' },
        { id: 'tsk-sg-10', team_id: 'team-smartgrid', title: 'Distributed Controller - RNN', description: 'Sửa lại ICGEA để Long test HIL bên Đài', status: 'todo', priority: 'medium', due_date: '2026-09-01' }
      ];
      task = SEED_TASKS.find(t => t.id === taskId);
    }

    if (!task) {
      task = {
        id: taskId,
        team_id: 'team-smartgrid',
        title: 'Nhiệm Vụ Nghiên Cứu Lab',
        description: 'Chi tiết quy trình thực nghiệm và sổ tay điện tử 100RE SciNote.',
        status: 'in_progress',
        priority: 'medium',
        created_at: Math.floor(Date.now() / 1000)
      };
    }

    let steps = await db.all('SELECT * FROM protocol_steps WHERE task_id = ? ORDER BY step_order ASC', [taskId]);
    if (!steps || steps.length === 0) {
      steps = [
        { id: `step-${taskId}-1`, task_id: taskId, step_order: 1, title: 'Chuẩn bị dữ liệu đầu vào & thiết lập mô hình tính toán', instruction: 'Kiểm tra thông số đường dây, tải và nguồn điện trong phần mềm mô phỏng.', is_completed: 1 },
        { id: `step-${taskId}-2`, task_id: taskId, step_order: 2, title: 'Chạy thuật toán tối ưu hóa & đo đạc thông số thực nghiệm', instruction: 'Ghi nhận điện áp, công suất và dung lượng lưu trữ theo chu kỳ 15 phút.', is_completed: 0 },
        { id: `step-${taskId}-3`, task_id: taskId, step_order: 3, title: 'Phân tích sai số và tổng hợp báo cáo nghiệm thu', instruction: 'So sánh kết quả thực nghiệm phần cứng HIL với kết quả mô phỏng số.', is_completed: 0 }
      ];
    }

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
