/**
 * Automated Verification Test Suite for 100RE Lab Workspace (Updated Architecture)
 * Architecture: KV (Public Profiles) + D1 (Workspace DB) + Google Drive 5TB (File Storage)
 */

import worker from './src/index.js';

async function runTests() {
  console.log('🧪 Starting 100RE Lab Workspace (KV + D1 + Google Drive) Test Suite...\n');
  let passed = 0;
  let failed = 0;

  async function test(name, fn) {
    try {
      await fn();
      console.log(`  ✅ PASS: ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`);
      console.error(`     Error: ${err.message}`);
      failed++;
    }
  }

  // Simulated Cloudflare Environment
  const mockKvStore = new Map([
    ['members_list', JSON.stringify([
      { id: "pv-1", name: "Ngô Trí Đức", team: "pv", role: "PV Leader", image: "assets/images/ngo_tri_duc.png" },
      { id: "bess-1", name: "Trịnh Minh Phương", team: "bess", role: "BESS Leader", image: "assets/images/trinh_minh_phuong.jpg" }
    ])]
  ]);

  const mockEnv = {
    ENVIRONMENT: 'development',
    ADMIN_USERNAME: '100re',
    ADMIN_PASSWORD: '100re',
    GOOGLE_DRIVE_ROOT_FOLDER_ID: '100RE_LAB_DRIVE_ROOT_FOLDER_ID',
    MEMBERS_KV: {
      get: async (k) => mockKvStore.get(k) || null,
      put: async (k, v) => mockKvStore.set(k, v),
      delete: async (k) => mockKvStore.delete(k)
    }
  };

  function makeReq(path, method = 'GET', body = null, headers = {}) {
    const opts = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-Workspace-Client': 'true',
        ...headers
      }
    };
    if (body) opts.body = JSON.stringify(body);
    return new Request(`http://localhost:8787${path}`, opts);
  }

  // 1. Test Public Member KV API (Preserved & Separate)
  await test('GET /api/public/members returns public profiles from Cloudflare KV', async () => {
    const req = new Request('http://localhost:8787/api/public/members', { method: 'GET' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!Array.isArray(data) || data.length < 2 || data[0].id !== 'pv-1') {
      throw new Error(`Expected KV profiles, got ${JSON.stringify(data)}`);
    }
  });

  // 2. Test Workspace User Identity & Linking
  await test('GET /api/me resolves User with display_name and member_key', async () => {
    const req = makeReq('/api/me', 'GET', null, { 'X-Dev-User-Id': 'usr-ldr-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.authenticated || data.user.member_key !== 'pv-1' || !data.user.display_name) {
      throw new Error(`User auth failed: ${JSON.stringify(data)}`);
    }
  });

  await test('Workspace User without member_key works normally (member_key = null)', async () => {
    const req = makeReq('/api/me', 'GET', null, { 'X-Dev-User-Id': 'usr-guest-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.authenticated || data.user.member_key !== null) {
      throw new Error(`Expected null member_key, got ${JSON.stringify(data)}`);
    }
  });

  // 3. Test Dashboard Aggregation from D1
  await test('GET /api/workspace/dashboard queries D1 relational tables', async () => {
    const req = makeReq('/api/workspace/dashboard', 'GET', null, { 'X-Dev-User-Id': 'usr-sup-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.stats || data.stats.teamCount !== 9) {
      throw new Error(`Invalid dashboard stats: ${JSON.stringify(data.stats)}`);
    }
  });

  // 4. Test Google Drive File Upload
  let uploadedDriveFileId = null;
  await test('POST /api/upload uploads file to Google Drive 5TB storage', async () => {
    const req = makeReq('/api/upload', 'POST', {
      fileName: 'PJM_Regulation_Signal_Test.csv',
      fileType: 'text/csv',
      teamId: 'team-bess',
      projectId: 'proj-bess-01',
      base64Data: 'VGltZXN0YW1wLFZhbHVlCjIwMjYtMDEtMDEsMTAwLjAK' // "Timestamp,Value\n2026-01-01,100.0\n"
    }, { 'X-Dev-User-Id': 'usr-ldr-02' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.success || data.storage_provider !== 'google_drive' || !data.drive_file_id) {
      throw new Error(`Google Drive upload failed: ${JSON.stringify(data)}`);
    }
    uploadedDriveFileId = data.drive_file_id;
  });

  // 5. Test Dataset Registration in D1 with Google Drive Reference
  let createdDatasetId = null;
  await test('POST /api/datasets saves Google Drive reference to D1', async () => {
    const req = makeReq('/api/datasets', 'POST', {
      team_id: 'team-bess',
      project_id: 'proj-bess-01',
      name: 'PJM Frequency Regulation AGC Stream 2026',
      source: 'PJM Portal',
      format: 'CSV',
      file_size: 2048,
      drive_file_id: uploadedDriveFileId,
      storage_provider: 'google_drive'
    }, { 'X-Dev-User-Id': 'usr-res-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.success || !data.dataset.id) {
      throw new Error(`Dataset save failed: ${JSON.stringify(data)}`);
    }
    createdDatasetId = data.dataset.id;
  });

  // 6. Test Google Drive Download & Open Endpoints
  await test('GET /api/files/datasets/:id/download streams file with auth check', async () => {
    const req = makeReq(`/api/files/datasets/${createdDatasetId}/download`, 'GET', null, { 'X-Dev-User-Id': 'usr-res-01' });
    const res = await worker.fetch(req, mockEnv);
    if (res.status !== 200 || !res.headers.get('content-disposition')?.includes('attachment')) {
      throw new Error(`Download stream failed: status ${res.status}`);
    }
  });

  await test('GET /api/files/datasets/:id/open returns Google Drive webViewLink', async () => {
    const req = makeReq(`/api/files/datasets/${createdDatasetId}/open`, 'GET', null, { 'X-Dev-User-Id': 'usr-res-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.success || !data.web_view_link.includes('drive.google.com')) {
      throw new Error(`Drive open link failed: ${JSON.stringify(data)}`);
    }
  });

  // 7. Test RBAC: Forbidden download for researcher not in team
  await test('RBAC: Unauthorized researcher cannot download BESS dataset (403 Forbidden)', async () => {
    const req = makeReq(`/api/files/datasets/${createdDatasetId}/download`, 'GET', null, { 'X-Dev-User-Id': 'usr-res-03' }); // wind only
    const res = await worker.fetch(req, mockEnv);
    if (res.status !== 403) {
      throw new Error(`Expected 403, got status ${res.status}`);
    }
  });

  // 8. Test Project Creation with Auto Google Drive Folder
  await test('POST /api/projects creates D1 project with drive_folder_id', async () => {
    const req = makeReq('/api/projects', 'POST', {
      team_id: 'team-bess',
      name: 'Grid Frequency BESS Pilot 2026',
      description: 'Dynamic testing'
    }, { 'X-Dev-User-Id': 'usr-ldr-02' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.success || !data.project.drive_folder_id) {
      throw new Error(`Project creation failed: ${JSON.stringify(data)}`);
    }
  });

  // 9. Test Linking & Unlinking User to Public Profile in KV
  await test('PATCH /api/members/:id updates member_key linking to KV', async () => {
    const req = makeReq('/api/members/usr-res-06', 'PATCH', {
      member_key: 'bess-1'
    }, { 'X-Dev-User-Id': 'usr-sup-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.success || data.user.member_key !== 'bess-1') {
      throw new Error(`Link update failed: ${JSON.stringify(data)}`);
    }
  });

  // 10. Test SciNote ELN Endpoints
  await test('GET /api/experiments returns active laboratory experiments', async () => {
    const req = makeReq('/api/experiments', 'GET', null, { 'X-Dev-User-Id': 'usr-sup-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.experiments || data.experiments.length === 0 || !data.experiments[0].project) {
      throw new Error(`Expected experiments, got ${JSON.stringify(data)}`);
    }
  });

  await test('GET /api/instruments returns laboratory hardware inventory', async () => {
    const req = makeReq('/api/instruments', 'GET', null, { 'X-Dev-User-Id': 'usr-res-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.instruments || data.instruments.length === 0) {
      throw new Error(`Expected instruments, got ${JSON.stringify(data)}`);
    }
  });

  await test('GET /api/tasks/:id/scinote returns full electronic lab sheet', async () => {
    const req = makeReq('/api/tasks/tsk-01/scinote', 'GET', null, { 'X-Dev-User-Id': 'usr-res-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.task || !Array.isArray(data.steps) || !Array.isArray(data.notes)) {
      throw new Error(`Expected SciNote sheet structure, got ${JSON.stringify(data)}`);
    }
  });

  await test('Supervisor Sign-off: POST /api/tasks/:id/sign-off marks task as approved', async () => {
    const req = makeReq('/api/tasks/tsk-02/sign-off', 'POST', {
      status: 'approved',
      comments: 'Electrochemical degradation verified by Assoc. Prof. Nguyen Duc Tuyen'
    }, { 'X-Dev-User-Id': 'usr-sup-01' });
    const res = await worker.fetch(req, mockEnv);
    const data = await res.json();
    if (!data.success) {
      throw new Error(`Sign-off failed: ${JSON.stringify(data)}`);
    }
  });

  await test('Cloudflare KV Database Sync: PUT & GET /api/public/content/news saves and loads globally', async () => {
    // 1. PUT news into Cloudflare KV
    const testArticles = [
      { id: 'news-test-1', title: 'HUST Clean Energy Breakthrough 2026', date: 'March 2026', category: 'International Collaboration' }
    ];
    const putReq = makeReq('/api/public/content/news', 'PUT', testArticles);
    const putRes = await worker.fetch(putReq, mockEnv);
    const putData = await putRes.json();
    if (!putData.success || putData.count !== 1) {
      throw new Error(`Expected KV save success, got ${JSON.stringify(putData)}`);
    }

    // 2. GET news from Cloudflare KV
    const getReq = makeReq('/api/public/content/news', 'GET');
    const getRes = await worker.fetch(getReq, mockEnv);
    const getData = await getRes.json();
    if (!Array.isArray(getData) || getData.length !== 1 || getData[0].id !== 'news-test-1') {
      throw new Error(`Expected KV retrieve array with news-test-1, got ${JSON.stringify(getData)}`);
    }
  });

  await test('Multi-Account Login & RBAC: 100re admin, supervisor, teamleader, researcher authentication', async () => {
    // 0. 100re System Super Admin login
    const adminLoginReq = makeReq('/api/login', 'POST', { username: '100re', password: '100re' });
    const adminLoginRes = await worker.fetch(adminLoginReq, mockEnv);
    const adminData = await adminLoginRes.json();
    if (!adminData.success || adminData.role !== 'admin' || !adminData.isSystemAdmin) {
      throw new Error(`Expected 100re admin login success with isSystemAdmin=true, got ${JSON.stringify(adminData)}`);
    }

    // 1. Supervisor login
    const supLoginReq = makeReq('/api/login', 'POST', { username: 'supervisor', password: '100re' });
    const supLoginRes = await worker.fetch(supLoginReq, mockEnv);
    const supData = await supLoginRes.json();
    if (!supData.success || supData.role !== 'supervisor' || supData.isSystemAdmin === true) {
      throw new Error(`Expected supervisor login success with isSystemAdmin=false, got ${JSON.stringify(supData)}`);
    }

    // 2. Teamleader login
    const ldrLoginReq = makeReq('/api/login', 'POST', { username: 'teamleader', password: '100re' });
    const ldrLoginRes = await worker.fetch(ldrLoginReq, mockEnv);
    const ldrData = await ldrLoginRes.json();
    if (!ldrData.success || ldrData.role !== 'team_leader' || ldrData.isSystemAdmin === true) {
      throw new Error(`Expected teamleader login success with isSystemAdmin=false, got ${JSON.stringify(ldrData)}`);
    }

    // 3. Researcher login
    const resLoginReq = makeReq('/api/login', 'POST', { username: 'researcher', password: '100re' });
    const resLoginRes = await worker.fetch(resLoginReq, mockEnv);
    const resData = await resLoginRes.json();
    if (!resData.success || resData.role !== 'researcher' || resData.isSystemAdmin === true) {
      throw new Error(`Expected researcher login success with isSystemAdmin=false, got ${JSON.stringify(resData)}`);
    }

    // 4. Verify Teamleader PV cannot access BESS private dataset
    const bessReq = makeReq('/api/files/datasets/ds-01/download', 'GET', null, { 'Authorization': `Bearer ${ldrData.token}` });
    const bessRes = await worker.fetch(bessReq, mockEnv);
    if (bessRes.status !== 403) {
      throw new Error(`Expected 403 Forbidden for PV Teamleader accessing BESS dataset, got ${bessRes.status}`);
    }
  });

  await test('Supervisor Dynamic User Creation & Granular Permissions Checklist', async () => {
    // 1. Supervisor creates custom user with specific permissions checklist
    const newUserData = {
      username: 'hai_smartgrid',
      password: '100re_custom_pass',
      display_name: 'Eng. Duong Minh Hai',
      email: 'hai.smartgrid@100relab.hust.edu.vn',
      role: 'researcher',
      teams: ['team-smartgrid'],
      permissions: ['perm_news', 'perm_ws_tasks_create', 'perm_ws_tasks_update', 'perm_ws_scinote_edit']
    };

    const createReq = makeReq('/api/members', 'POST', newUserData, { 'X-Dev-User-Id': 'usr-sup-01' });
    const createRes = await worker.fetch(createReq, mockEnv);
    const createData = await createRes.json();
    if (!createData.success || !createData.user) {
      throw new Error(`Expected user creation success, got ${JSON.stringify(createData)}`);
    }

    // 2. Custom user logs in with new credentials
    const loginReq = makeReq('/api/login', 'POST', { username: 'hai_smartgrid', password: '100re_custom_pass' });
    const loginRes = await worker.fetch(loginReq, mockEnv);
    const loginData = await loginRes.json();
    if (!loginData.success || loginData.user !== 'hai_smartgrid') {
      throw new Error(`Expected dynamic user login success, got ${JSON.stringify(loginData)}`);
    }

    // 3. Verify permissions returned
    if (!Array.isArray(loginData.permissions) || !loginData.permissions.includes('perm_news') || !loginData.permissions.includes('perm_ws_scinote_edit')) {
      throw new Error(`Expected permissions array with perm_news & perm_ws_scinote_edit, got ${JSON.stringify(loginData.permissions)}`);
    }
  });

  await test('Public Member CRUD & Cloudflare KV Persistence: POST, GET, DELETE /api/public/members', async () => {
    // 1. Add public member
    const newMember = {
      id: 'pv-new-test',
      name: 'Nguyen Van Test',
      team: 'pv',
      teamName: 'PV Team',
      role: 'Solar Cell Researcher',
      bio: 'Pioneering bifacial perovskite tandem cells at 100RE Lab.'
    };
    const addReq = makeReq('/api/public/members', 'POST', newMember);
    const addRes = await worker.fetch(addReq, mockEnv);
    const addData = await addRes.json();
    if (!addData.success || !addData.member || addData.member.name !== 'Nguyen Van Test') {
      throw new Error(`Expected public member add success, got ${JSON.stringify(addData)}`);
    }

    // 2. Fetch public members
    const getReq = makeReq('/api/public/members', 'GET');
    const getRes = await worker.fetch(getReq, mockEnv);
    const getData = await getRes.json();
    if (!Array.isArray(getData) || !getData.find(m => m.id === 'pv-new-test')) {
      throw new Error(`Expected public member list to include pv-new-test, got ${JSON.stringify(getData)}`);
    }

    // 3. Delete public member
    const delReq = makeReq('/api/public/members/pv-new-test', 'DELETE');
    const delRes = await worker.fetch(delReq, mockEnv);
    const delData = await delRes.json();
    if (!delData.success || delData.members.find(m => m.id === 'pv-new-test')) {
      throw new Error(`Expected member to be deleted from list, got ${JSON.stringify(delData)}`);
    }
  });

  await test('AI Chat Assistant Gateway: POST /api/chat responds with 100RE Lab knowledge (Vietnamese & English)', async () => {
    // 1. Vietnamese prompt
    const chatReqVi = makeReq('/api/chat', 'POST', { message: 'Phòng Lab 100RE có những nhóm nghiên cứu nào?' });
    const chatResVi = await worker.fetch(chatReqVi, mockEnv);
    const chatDataVi = await chatResVi.json();
    if (!chatDataVi.success || !chatDataVi.answer || !chatDataVi.answer.includes('PV')) {
      throw new Error(`Expected AI Chat response with PV/teams in VI, got ${JSON.stringify(chatDataVi)}`);
    }

    // 2. English prompt
    const chatReqEn = makeReq('/api/chat', 'POST', { message: 'What are the 9 specialized research teams at 100RE Lab?' });
    const chatResEn = await worker.fetch(chatReqEn, mockEnv);
    const chatDataEn = await chatResEn.json();
    if (!chatDataEn.success || !chatDataEn.answer || !chatDataEn.answer.includes('PV Team')) {
      throw new Error(`Expected AI Chat response with PV Team in EN, got ${JSON.stringify(chatDataEn)}`);
    }

    // 3. Join Lab prompt
    const chatReqJoin = makeReq('/api/chat', 'POST', { message: 'làm thế nào để có thể xin được vào lab' });
    const chatResJoin = await worker.fetch(chatReqJoin, mockEnv);
    const chatDataJoin = await chatResJoin.json();
    if (!chatDataJoin.success || !chatDataJoin.answer || !chatDataJoin.answer.includes('Đăng ký') && !chatDataJoin.answer.includes('tuyen.nguyenduc@hust.edu.vn')) {
      throw new Error(`Expected AI Chat response with join instructions, got ${JSON.stringify(chatDataJoin)}`);
    }
  });

  // 21. Move Member to Alumni Database & Cloudflare KV Persistence Test
  await test('Move Member to Alumni: POST /api/public/members/:id/move-to-alumni updates KV & marks alumni', async () => {
    const moveReq = new Request('http://localhost/api/public/members/pv-2/move-to-alumni', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer 100re_token' }
    });
    const res = await worker.fetch(moveReq, mockEnv);
    const data = await res.json();

    if (!data.success || !data.member || data.member.team !== 'alumni' || !data.member.is_alumni) {
      throw new Error(`Expected member to be moved to alumni in database, got ${JSON.stringify(data)}`);
    }

    // Verify GET /api/public/members reflects alumni status
    const getReq = new Request('http://localhost/api/public/members');
    const getRes = await worker.fetch(getReq, mockEnv);
    const members = await getRes.json();
    const updatedMember = members.find(m => m.id === 'pv-2');

    if (!updatedMember || updatedMember.team !== 'alumni' || !updatedMember.is_alumni) {
      throw new Error(`Expected member pv-2 in KV to have team=alumni, got ${JSON.stringify(updatedMember)}`);
    }
  });

  console.log(`\n==============================================`);
  console.log(`Test Summary: ${passed} Passed, ${failed} Failed`);
  console.log(`==============================================\n`);

  if (failed > 0) process.exit(1);
}

runTests();
