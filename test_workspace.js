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
    const req = makeReq('/api/me', 'GET', null, { 'X-Dev-User-Id': 'usr-res-06' });
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

  console.log(`\n==============================================`);
  console.log(`Test Summary: ${passed} Passed, ${failed} Failed`);
  console.log(`==============================================\n`);

  if (failed > 0) process.exit(1);
}

runTests();
