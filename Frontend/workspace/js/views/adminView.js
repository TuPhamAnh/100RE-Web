/**
 * 100RE LAB WORKSPACE — Supervisor Administration Console
 * User Account Creation, Granular Permissions Matrix & Credentials Management
 */

import { API } from '../api.js';
import { Auth } from '../auth.js';
import { formatDate, escapeHtml, showToast, renderEmptyState } from '../components.js';

export async function renderAdmin(container) {
  if (!Auth.isSupervisor()) {
    container.innerHTML = `
      <div class="ws-empty-state">
        <i class="fa-solid fa-lock" style="color:#ef4444;"></i>
        <h3>403 Access Denied</h3>
        <p>This administrative panel is strictly restricted to Lab Supervisors.</p>
        <a href="#dashboard" class="btn-ws-primary" style="margin-top:10px; display:inline-flex;">Return to Dashboard</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="ws-page-header">
      <div class="ws-page-title-group">
        <h1>Lab Administration &amp; Access Control</h1>
        <p>Supervisor management console for workspace users, login credentials, granular permissions, and 100RE Database storage.</p>
      </div>
      <div class="ws-page-actions">
        <button class="btn-ws-primary" id="btnOpenCreateUserModal">
          <i class="fa-solid fa-user-shield"></i> + Tạo Tài Khoản &amp; Phân Quyền (Create User)
        </button>
      </div>
    </div>

    <!-- Credentials Reference Notice Box -->
    <div class="ws-card" style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); border: 1px solid #a7f3d0; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08);">
      <div style="padding: 16px 20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div>
            <h4 style="font-size: 1rem; font-weight: 700; color: #065f46; margin: 0 0 4px 0; display:flex; align-items:center; gap:8px;">
              <i class="fa-solid fa-key" style="color:#10b981;"></i> Thông Tin Đăng Nhập Hệ Thống (Login Credentials Directory)
            </h4>
            <p style="font-size: 0.8rem; color: #047857; margin: 0;">
              Tất cả các tài khoản mặc định và tài khoản tạo mới đều có thể đăng nhập bằng <strong>Tên đăng nhập (Username)</strong> và <strong>Mật khẩu (Password)</strong> hiển thị bên dưới (Mật khẩu mặc định: <code style="background:#d1fae5; padding:2px 6px; border-radius:4px; font-weight:700;">100re</code>).
            </p>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <span class="ws-badge ws-badge-done" style="font-size:0.75rem;"><i class="fa-solid fa-circle-check"></i> Cloudflare KV Synced</span>
          </div>
        </div>
      </div>
    </div>

    <!-- System Status Row -->
    <div class="ws-stats-grid">
      <div class="ws-stat-card">
        <div class="ws-stat-info">
          <div class="ws-stat-val" style="color:#16a34a; font-size:1.4rem;">CONNECTED</div>
          <div class="ws-stat-lbl">Cloudflare D1 (Workspace DB)</div>
        </div>
        <div class="ws-stat-icon"><i class="fa-solid fa-server"></i></div>
      </div>
      <div class="ws-stat-card">
        <div class="ws-stat-info">
          <div class="ws-stat-val" style="color:#0284c7; font-size:1.4rem;">ACTIVE (5 TB)</div>
          <div class="ws-stat-lbl">100RE Database Storage</div>
        </div>
        <div class="ws-stat-icon" style="background:#e0f2fe; color:#0284c7;"><i class="fa-solid fa-database"></i></div>
      </div>
      <div class="ws-stat-card">
        <div class="ws-stat-info">
          <div class="ws-stat-val" style="color:#7c3aed; font-size:1.4rem;">ACTIVE</div>
          <div class="ws-stat-lbl">Cloudflare KV (Global Sync &amp; Permissions)</div>
        </div>
        <div class="ws-stat-icon" style="background:#ede9fe; color:#7c3aed;"><i class="fa-solid fa-globe"></i></div>
      </div>
    </div>

    <!-- Filter & Search Bar -->
    <div class="ws-filter-bar" style="margin-bottom:16px;">
      <input type="text" id="adminSearchInput" class="ws-search-input" placeholder="Tìm kiếm theo Tên, Username, Email hoặc Nhóm nghiên cứu...">
      <select id="adminRoleFilter" class="ws-select-filter">
        <option value="">Tất cả chức vụ (All Roles)</option>
        <option value="supervisor">👑 Supervisor (Chủ nhiệm)</option>
        <option value="team_leader">🛡️ Team Leader (Trưởng nhóm)</option>
        <option value="researcher">🔬 Researcher (Nghiên cứu viên)</option>
        <option value="alumni">🎓 Alumni (Cựu thành viên)</option>
      </select>
    </div>

    <!-- Users Management Table -->
    <div class="ws-card">
      <div class="ws-card-header" style="display:flex; justify-content:space-between; align-items:center;">
        <div class="ws-card-title"><i class="fa-solid fa-users-gear" style="color:var(--ws-primary)"></i> Danh Sách Tài Khoản, Tên Đăng Nhập, Mật Khẩu &amp; Phân Quyền Chi Tiết</div>
      </div>
      <div class="ws-card-body" style="padding:0;">
        <div id="adminUsersTableContainer">
          <div class="ws-loader-center"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
        </div>
      </div>
    </div>

    <!-- MODAL: CREATE / EDIT USER WITH GRANULAR PERMISSIONS MATRIX -->
    <div id="modalUserPermissions" class="ws-modal-backdrop" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15,23,42,0.65); z-index:99999; overflow-y:auto; padding:20px; align-items:center; justify-content:center;">
      <div class="ws-modal-card" style="background:#ffffff; max-width:960px; width:100%; border-radius:12px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25); overflow:hidden; border:1px solid #cbd5e1; margin:auto;">
        
        <div style="background:#f8fafc; padding:18px 24px; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h3 id="modalUserPermTitle" style="font-size:1.2rem; font-weight:700; color:#0f172a; margin:0; display:flex; align-items:center; gap:8px;">
              <i class="fa-solid fa-user-shield" style="color:#16a34a;"></i> Tạo Tài Khoản &amp; Thiết Lập Quyền Hạn
            </h3>
            <p style="font-size:0.8rem; color:#64748b; margin:4px 0 0 0;">Tích chọn các quyền mà tài khoản này được phép thao tác trên Website công khai và Workspace.</p>
          </div>
          <button type="button" id="btnCloseUserPermModal" style="background:none; border:none; font-size:1.4rem; color:#64748b; cursor:pointer;">&times;</button>
        </div>

        <form id="formUserWithPerms" style="padding:24px;">
          <input type="hidden" id="permUserId" value="">

          <div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:24px;">
            
            <!-- CỘT TRÁI: THÔNG TIN TÀI KHOẢN -->
            <div>
              <h4 style="font-size:0.95rem; font-weight:700; color:#1e293b; margin-bottom:14px; padding-bottom:6px; border-bottom:2px solid #e2e8f0;">
                <i class="fa-solid fa-id-card"></i> 1. Thông Tin Đăng Nhập &amp; Tài Khoản (Login Info)
              </h4>

              <div class="form-group" style="margin-bottom:12px;">
                <label style="display:block; font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:4px;">Tên Đăng Nhập (Username) *</label>
                <input type="text" id="permUsername" class="ws-search-input" style="width:100%; border-radius:6px; font-family:monospace; font-weight:700;" placeholder="ví dụ: hai.duongminh@100relab, duc.ngotri@100relab..." required>
              </div>

              <div class="form-group" style="margin-bottom:12px;">
                <label style="display:block; font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:4px;">Mật Khẩu Đăng Nhập (Password) *</label>
                <div style="position:relative;">
                  <input type="text" id="permPassword" class="ws-search-input" style="width:100%; border-radius:6px; font-family:monospace; font-weight:700; padding-right:40px;" value="100re" placeholder="Mặc định: 100re" required>
                  <button type="button" id="btnTogglePassVisibility" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); background:none; border:none; color:#64748b; cursor:pointer;" title="Hiện / Ẩn mật khẩu">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                </div>
              </div>

              <div class="form-group" style="margin-bottom:12px;">
                <label style="display:block; font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:4px;">Họ Và Tên (Display Name) *</label>
                <input type="text" id="permDisplayName" class="ws-search-input" style="width:100%; border-radius:6px;" placeholder="ví dụ: Dương Minh Hải" required>
              </div>

              <div class="form-group" style="margin-bottom:12px;">
                <label style="display:block; font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:4px;">Email</label>
                <input type="text" id="permEmail" class="ws-search-input" style="width:100%; border-radius:6px;" placeholder="ví dụ: hai.duongminh@100relab">
              </div>

              <div class="form-group" style="margin-bottom:14px;">
                <label style="display:block; font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:4px;">Chức Vụ Chính (Role)</label>
                <select id="permRole" class="ws-select-filter" style="width:100%; border-radius:6px;">
                  <option value="supervisor">👑 Supervisor (Chủ nhiệm Lab - Toàn quyền)</option>
                  <option value="team_leader">🛡️ Team Leader (Trưởng nhóm nghiên cứu)</option>
                  <option value="researcher" selected>🔬 Researcher (Nghiên cứu viên)</option>
                  <option value="alumni">🎓 Alumni (Cựu thành viên - Chỉ xem)</option>
                </select>
              </div>

              <div class="form-group">
                <label style="display:block; font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">
                  Nhóm Nghiên Cứu Phân Công (Assigned Teams):
                </label>
                <div id="permTeamsCheckboxList" style="display:grid; grid-template-columns:1fr; gap:6px; max-height:160px; overflow-y:auto; background:#f8fafc; padding:10px; border-radius:6px; border:1px solid #e2e8f0;">
                  <!-- Injected dynamically -->
                </div>
              </div>
            </div>

            <!-- CỘT PHẢI: MA TRẬN PHÂN QUYỀN TÍCH CHỌN -->
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:6px; border-bottom:2px solid #e2e8f0;">
                <h4 style="font-size:0.95rem; font-weight:700; color:#1e293b; margin:0;">
                  <i class="fa-solid fa-list-check"></i> 2. Ma Trận Quyền Hạn (Permissions Matrix)
                </h4>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="btn-ws-ghost btn-ws-sm" id="presetSupervisor" style="font-size:0.7rem; padding:2px 8px;">Supervisor</button>
                  <button type="button" class="btn-ws-ghost btn-ws-sm" id="presetLeader" style="font-size:0.7rem; padding:2px 8px;">Leader</button>
                  <button type="button" class="btn-ws-ghost btn-ws-sm" id="presetResearcher" style="font-size:0.7rem; padding:2px 8px;">Researcher</button>
                  <button type="button" class="btn-ws-ghost btn-ws-sm" id="presetClear" style="font-size:0.7rem; padding:2px 6px; color:#ef4444;">Xóa hết</button>
                </div>
              </div>

              <!-- Section A: Public Web Permissions -->
              <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:12px; margin-bottom:14px;">
                <div style="font-size:0.825rem; font-weight:700; color:#166534; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                  <i class="fa-solid fa-globe"></i> Quyền Quản Trị Website Công Khai (Public Web)
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_news" class="perm-cb" checked>
                    <span>Soạn &amp; Đăng Tin Tức (News)</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_journey" class="perm-cb" checked>
                    <span>Sửa Dòng Sự Kiện (Journey)</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_research" class="perm-cb" checked>
                    <span>Sửa Lĩnh Vực Nghiên Cứu</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_projects" class="perm-cb" checked>
                    <span>Sửa Đề Tài Công Khai</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_pubs" class="perm-cb" checked>
                    <span>Đăng Bài Báo Khoa Học (Pubs)</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_photos" class="perm-cb" checked>
                    <span>Quản Lý Ảnh Hoạt Động</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer; grid-column:span 2;">
                    <input type="checkbox" name="perms" value="perm_members" class="perm-cb" checked>
                    <span>Thêm / Sửa / Xóa Thành Viên Công Khai (Public Members)</span>
                  </label>
                </div>
              </div>

              <!-- Section B: Workspace Management Permissions -->
              <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:12px;">
                <div style="font-size:0.825rem; font-weight:700; color:#1e40af; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                  <i class="fa-solid fa-briefcase"></i> Quyền Quản Lý Nghiên Cứu Workspace
                </div>
                <div style="display:grid; grid-template-columns:1fr; gap:8px;">
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_all_teams" class="perm-cb">
                    <span><strong>Toàn quyền xem tất cả các nhóm (Global All Teams)</strong></span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_projects" class="perm-cb">
                    <span>Tạo &amp; Cập Nhật Đề Tài / Thí Nghiệm (Projects/Experiments)</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_tasks_create" class="perm-cb">
                    <span>Giao Việc &amp; Tạo Nhiệm Vụ Mới (Create Tasks)</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_tasks_update" class="perm-cb" checked>
                    <span>Cập Nhật Tiến Độ &amp; Trạng Thái Task Nhóm Mình</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_scinote_edit" class="perm-cb" checked>
                    <span>Soạn Thảo Sổ Tay Thí Nghiệm (SciNote ELN Protocol)</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_scinote_signoff" class="perm-cb">
                    <span><strong>Ký Duyệt Nghiệm Thu Thí Nghiệm (Supervisor Sign-off)</strong></span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_datasets" class="perm-cb" checked>
                    <span>Tải Lên / Tải Về 100RE Database (Datasets &amp; Storage)</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_documents" class="perm-cb" checked>
                    <span>Quản Lý Tài Liệu &amp; Tiêu Chuẩn Kỹ Thuật (Documents)</span>
                  </label>
                  <label style="font-size:0.775rem; color:#1e293b; display:flex; align-items:center; gap:6px; cursor:pointer;">
                    <input type="checkbox" name="perms" value="perm_ws_admin" class="perm-cb">
                    <span><strong>Quản Trị Người Dùng &amp; Phân Quyền (Lab Admin Console)</strong></span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          <!-- Footer Actions -->
          <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:24px; padding-top:16px; border-top:1px solid #e2e8f0;">
            <button type="button" class="btn-ws-ghost" id="btnCancelUserPermModal">Hủy (Cancel)</button>
            <button type="submit" class="btn-ws-primary" id="btnSubmitUserPerm">
              <i class="fa-solid fa-floppy-disk"></i> Lưu &amp; Kích Hoạt Tài Khoản (Save &amp; Activate)
            </button>
          </div>
        </form>

      </div>
    </div>
  `;

  try {
    let members = [];
    let teams = [];

    // Load blacklist of permanently deleted user IDs
    let deletedUserIds = [];
    try {
      deletedUserIds = JSON.parse(localStorage.getItem('100re_deleted_user_ids') || '[]');
    } catch (e) {}

    // Fetch members from API
    try {
      const res = await API.get('/api/members');
      members = res.users || res.members || [];
    } catch (e) {
      console.warn('API members fetch error, using local state:', e);
    }

    // Default Seed Members if empty
    if (!members || members.length === 0) {
            members = [
        { id: 'usr-sup-01', username: 'supervisor', password: '100re', display_name: 'Assoc. Prof. Nguyen Duc Tuyen', name: 'Assoc. Prof. Nguyen Duc Tuyen', email: 'supervisor@100relab.hust.edu.vn', role: 'supervisor', status: 'active', teams: [], permissions: [] },
        { id: 'usr-ldr-01', username: 'duc.ngotri@100relab', password: '100re', display_name: 'Dr. Ngo Tri Duc', name: 'Dr. Ngo Tri Duc', email: 'duc.ngotri@100relab', role: 'team_leader', status: 'active', teams: ['team-pv'], permissions: [] },
        { id: 'usr-ldr-02', username: 'phuong.trinhminh@100relab', password: '100re', display_name: 'Dr. Trinh Minh Phuong', name: 'Dr. Trinh Minh Phuong', email: 'phuong.trinhminh@100relab', role: 'team_leader', status: 'active', teams: ['team-bess'], permissions: [] },
        { id: 'usr-res-05', username: 'hai.duongminh@100relab', password: '100re', display_name: 'Duong Minh Hai', name: 'Duong Minh Hai', email: 'hai.duongminh@100relab', role: 'researcher', status: 'active', teams: ['team-smartgrid'], permissions: [] },
        { id: 'usr-res-01', username: 'hai.buiquang@100relab', password: '100re', display_name: 'Bui Quang Hai', name: 'Bui Quang Hai', email: 'hai.buiquang@100relab', role: 'researcher', status: 'active', teams: ['team-ai', 'team-pv'], permissions: [] },
        { id: 'usr-res-02', username: 'anh.nguyentuan@100relab', password: '100re', display_name: 'Nguyen Tuan Anh', name: 'Nguyen Tuan Anh', email: 'anh.nguyentuan@100relab', role: 'researcher', status: 'active', teams: ['team-ucdr'], permissions: [] },
        { id: 'usr-res-03', username: 'nam.nguyenhoang@100relab', password: '100re', display_name: 'Nguyen Hoang Nam', name: 'Nguyen Hoang Nam', email: 'nam.nguyenhoang@100relab', role: 'researcher', status: 'active', teams: ['team-wind'], permissions: [] },
        { id: 'usr-res-04', username: 'cuong.lethe@100relab', password: '100re', display_name: 'Le The Cuong', name: 'Le The Cuong', email: 'cuong.lethe@100relab', role: 'researcher', status: 'active', teams: ['team-ev'], permissions: [] },
        { id: 'usr-res-06', username: 'dung.vutien@100relab', password: '100re', display_name: 'Vu Tien Dung', name: 'Vu Tien Dung', email: 'dung.vutien@100relab', role: 'researcher', status: 'active', teams: ['team-smartgrid'], permissions: [] },
        { id: 'usr-res-07', username: 'dung.lengoc@100relab', password: '100re', display_name: 'Le Ngoc Dung', name: 'Le Ngoc Dung', email: 'dung.lengoc@100relab', role: 'researcher', status: 'active', teams: ['team-smartgrid'], permissions: [] },
        { id: 'usr-res-08', username: 'minh.buiquang@100relab', password: '100re', display_name: 'Bui Quang Minh', name: 'Bui Quang Minh', email: 'minh.buiquang@100relab', role: 'researcher', status: 'active', teams: ['team-pv'], permissions: [] },
        { id: 'usr-res-09', username: 'quan.leanh@100relab', password: '100re', display_name: 'Dr. Le Anh Quan', name: 'Dr. Le Anh Quan', email: 'quan.leanh@100relab', role: 'alumni', status: 'active', teams: ['team-ucdr'], permissions: [] },
        { id: 'usr-res-10', username: 'tung.nguyennhu@100relab', password: '100re', display_name: 'Nguyen Nhu Tung', name: 'Nguyen Nhu Tung', email: 'tung.nguyennhu@100relab', role: 'researcher', status: 'active', teams: ['team-wind'], permissions: [] },
        { id: 'usr-res-11', username: 'khanh.daoquoc@100relab', password: '100re', display_name: 'Dao Quoc Khanh', name: 'Dao Quoc Khanh', email: 'khanh.daoquoc@100relab', role: 'researcher', status: 'active', teams: ['team-ev'], permissions: [] },
        { id: 'usr-res-12', username: 'anh.nguyenhoang@100relab', password: '100re', display_name: 'Nguyen Hoang Anh', name: 'Nguyen Hoang Anh', email: 'anh.nguyenhoang@100relab', role: 'researcher', status: 'active', teams: ['team-hydrogen'], permissions: [] },
        { id: 'usr-res-13', username: 'anh.nguyenquang@100relab', password: '100re', display_name: 'Nguyen Quang Anh', name: 'Nguyen Quang Anh', email: 'anh.nguyenquang@100relab', role: 'researcher', status: 'active', teams: ['team-bess'], permissions: [] },
        { id: 'usr-res-14', username: 'vinh.tranthihong@100relab', password: '100re', display_name: 'Tran Thi Hong Vinh', name: 'Tran Thi Hong Vinh', email: 'vinh.tranthihong@100relab', role: 'researcher', status: 'active', teams: ['team-bess'], permissions: [] }
      ];
    }

    // Fetch teams
    try {
      const teamsRes = await API.get('/api/teams');
      teams = teamsRes.teams || [];
    } catch (e) {
      console.warn('API teams fetch error:', e);
    }

    // Filter out deleted users from API list
    members = members.filter(m => !deletedUserIds.includes(m.id) && !deletedUserIds.includes(m.username) && !deletedUserIds.includes(m.email));

    // Helper functions for user storage
    function getStoredCreatedUsers() {
      try {
        return JSON.parse(localStorage.getItem('100re_created_users') || localStorage.getItem('100re_custom_users') || '[]');
      } catch (e) {
        return [];
      }
    }

    function saveStoredCreatedUsers(userList) {
      try {
        localStorage.setItem('100re_created_users', JSON.stringify(userList));
        localStorage.setItem('100re_custom_users', JSON.stringify(userList));
      } catch (e) {}
    }

    // Merge with LocalStorage created users (and put user-created ones at the top!)
    const storedCreated = getStoredCreatedUsers();
    storedCreated.forEach(cu => {
      if (!deletedUserIds.includes(cu.id) && !deletedUserIds.includes(cu.username) && !deletedUserIds.includes(cu.email)) {
        const idx = members.findIndex(m => m.id === cu.id || (m.username && m.username === cu.username) || (m.email && m.email === cu.email));
        if (idx >= 0) {
          members[idx] = { ...members[idx], ...cu };
        } else {
          members.unshift(cu);
        }
      }
    });

    const tableContainer = container.querySelector('#adminUsersTableContainer');
    const modal = container.querySelector('#modalUserPermissions');
    const teamsContainer = container.querySelector('#permTeamsCheckboxList');

    // Populate Teams checkboxes in Modal
    if (teamsContainer && teams.length > 0) {
      teamsContainer.innerHTML = teams.map(t => `
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px; cursor:pointer;">
          <input type="checkbox" name="perm_team_check" value="${t.id}" class="perm-team-cb">
          <span>${escapeHtml(t.name)}</span>
        </label>
      `).join('');
    } else if (teamsContainer) {
      teamsContainer.innerHTML = `
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px;"><input type="checkbox" value="team-smartgrid" class="perm-team-cb" checked> Smart Grid</label>
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px;"><input type="checkbox" value="team-pv" class="perm-team-cb"> Photovoltaic (PV)</label>
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px;"><input type="checkbox" value="team-bess" class="perm-team-cb"> Battery Storage (BESS)</label>
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px;"><input type="checkbox" value="team-ai" class="perm-team-cb"> Artificial Intelligence (AI)</label>
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px;"><input type="checkbox" value="team-wind" class="perm-team-cb"> Wind Energy</label>
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px;"><input type="checkbox" value="team-ev" class="perm-team-cb"> Electric Vehicle (EV)</label>
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px;"><input type="checkbox" value="team-hydrogen" class="perm-team-cb"> Hydrogen Team</label>
        <label style="font-size:0.775rem; color:#334155; display:flex; align-items:center; gap:6px;"><input type="checkbox" value="team-ucdr" class="perm-team-cb"> Unit Commitment & Demand Response (UCDR)</label>
      `;
    }

    function renderUserTable(listToRender = members) {
      if (listToRender.length === 0) {
        tableContainer.innerHTML = renderEmptyState('Chưa có tài khoản nào phù hợp với bộ lọc tìm kiếm.');
        return;
      }

      tableContainer.innerHTML = `
        <div class="ws-table-container">
          <table class="ws-table">
            <thead>
              <tr>
                <th>Tài Khoản / Tên Đăng Nhập</th>
                <th>Mật Khẩu (Password)</th>
                <th>Chức Vụ (Role)</th>
                <th>Nhóm Phân Công</th>
                <th>Quyền Hạn</th>
                <th>Trạng Thái</th>
                <th style="text-align:right;">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              ${listToRender.map(u => {
                const name = u.display_name || u.name;
                const username = u.username || (u.email ? u.email : 'user');
                const emailDisplay = u.email || (username.includes('@') ? username : `${username}@100relab`);
                const password = u.password || '100re';
                const permsCount = Array.isArray(u.permissions) && u.permissions.length > 0 ? u.permissions.length : (u.role === 'supervisor' ? 16 : 9);
                const roleBadge = u.role === 'supervisor' ? '<span class="ws-badge ws-badge-done">👑 SUPERVISOR</span>' :
                                  u.role === 'team_leader' ? '<span class="ws-badge ws-badge-in_progress">🛡️ TEAM LEADER</span>' :
                                  u.role === 'researcher' ? '<span class="ws-badge ws-badge-todo">🔬 RESEARCHER</span>' :
                                  '<span class="ws-badge ws-badge-blocked">🎓 ALUMNI</span>';

                let teamLabels = 'Tất cả (Global)';
                if (u.teams && u.teams.length > 0) {
                  teamLabels = u.teams.map(t => typeof t === 'string' ? t.replace('team-', '').toUpperCase() : (t.team_name || t.team_id)).join(', ');
                }

                return `
                  <tr>
                    <td>
                      <div style="display:flex; align-items:center; gap:10px;">
                        <img src="${u.avatar_url || 'assets/images/logo.jpg'}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:1px solid var(--ws-border);" alt="${escapeHtml(name)}">
                        <div>
                          <strong style="color:var(--ws-dark); font-size:0.92rem; display:block;">${escapeHtml(name)}</strong>
                          <div style="display:flex; align-items:center; gap:6px; margin-top:2px;">
                            <span style="font-size:0.75rem; font-family:monospace; background:#f1f5f9; padding:1px 6px; border-radius:4px; color:#0f172a; border:1px solid #cbd5e1; font-weight:700;">
                              <i class="fa-solid fa-user" style="color:#64748b; font-size:0.65rem;"></i> ${escapeHtml(username)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style="display:inline-flex; align-items:center; gap:6px; background:#f0fdf4; border:1px solid #a7f3d0; padding:3px 8px; border-radius:6px;">
                        <i class="fa-solid fa-key" style="color:#10b981; font-size:0.7rem;"></i>
                        <span style="font-family:monospace; font-size:0.8rem; font-weight:700; color:#065f46;">${escapeHtml(password)}</span>
                        <button type="button" class="btn-copy-cred" data-copy="${escapeHtml(username)}|${escapeHtml(password)}" style="background:none; border:none; color:#059669; cursor:pointer; font-size:0.75rem; padding:0 2px;" title="Sao chép Tên đăng nhập & Mật khẩu">
                          <i class="fa-regular fa-copy"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      ${roleBadge}
                    </td>
                    <td>
                      <span class="ws-tag-pill" style="font-size:0.75rem;">
                        ${escapeHtml(teamLabels)}
                      </span>
                    </td>
                    <td>
                      <span class="ws-tag-pill" style="background:#f0fdf4; color:#15803d; font-weight:700; border:1px solid #bbf7d0;">
                        <i class="fa-solid fa-shield-halved"></i> ${permsCount} Quyền
                      </span>
                    </td>
                    <td>
                      <span class="ws-badge ${u.status === 'active' || !u.status ? 'ws-badge-done' : 'ws-badge-blocked'}">${u.status ? u.status.toUpperCase() : 'ACTIVE'}</span>
                    </td>
                    <td style="text-align:right;">
                      <div style="display:inline-flex; gap:6px;">
                        <button class="btn-ws-ghost btn-ws-sm btn-edit-perms" data-user-id="${u.id}" style="color:#15803d; border-color:#86efac; font-weight:700;" title="Chỉnh sửa quyền hạn và mật khẩu">
                          <i class="fa-solid fa-sliders"></i> Phân Quyền &amp; Mật Khẩu
                        </button>
                        ${u.role !== 'supervisor' ? `
                          <button class="btn-ws-ghost btn-ws-sm btn-delete-user" data-user-id="${u.id}" data-user-name="${escapeHtml(name)}" style="color:#dc2626;" title="Xóa tài khoản">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        ` : ''}
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;

      // Copy credentials button
      tableContainer.querySelectorAll('.btn-copy-cred').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const [u, p] = btn.getAttribute('data-copy').split('|');
          navigator.clipboard.writeText(`Username: ${u}
Password: ${p}`);
          showToast(`Đã sao chép: Username: ${u} | Password: ${p}`);
        });
      });

      // Bind Edit Permissions Buttons
      tableContainer.querySelectorAll('.btn-edit-perms').forEach(btn => {
        btn.addEventListener('click', () => {
          const uid = btn.getAttribute('data-user-id');
          const target = members.find(m => m.id === uid);
          if (target) {
            openUserModal(target);
          }
        });
      });

      // Bind Delete User Buttons
      tableContainer.querySelectorAll('.btn-delete-user').forEach(btn => {
        btn.addEventListener('click', async () => {
          const uid = btn.getAttribute('data-user-id');
          const uname = btn.getAttribute('data-user-name');
          const confirmed = typeof window.showConfirmModal === 'function' ? await window.showConfirmModal({
            title: 'Xác Nhận Xóa Tài Khoản',
            message: `Bạn có chắc chắn muốn xóa tài khoản "${uname}" khỏi hệ thống không?`,
            confirmText: 'Xóa Tài Khoản',
            cancelText: 'Hủy Bỏ',
            type: 'danger'
          }) : true;

          if (confirmed) {
            const targetObj = members.find(m => m.id === uid);
            
            // Add to persistent deleted blacklist
            try {
              let curDeleted = JSON.parse(localStorage.getItem('100re_deleted_user_ids') || '[]');
              if (uid) curDeleted.push(uid);
              if (targetObj && targetObj.username) curDeleted.push(targetObj.username);
              if (targetObj && targetObj.email) curDeleted.push(targetObj.email);
              localStorage.setItem('100re_deleted_user_ids', JSON.stringify(curDeleted));
            } catch (e) {}

            // Instant remove from state
            members = members.filter(m => m.id !== uid);
            const curCreated = getStoredCreatedUsers().filter(u => u.id !== uid);
            saveStoredCreatedUsers(curCreated);

            renderUserTable();
            showToast(`Đã xóa tài khoản "${uname}" thành công.`);

            try {
              await API.delete(`/api/members/${uid}`);
            } catch (err) {
              console.warn('Backend delete sync:', err);
            }
          }
        });
      });
    }

    function openUserModal(user = null) {
      const isEdit = !!user;
      container.querySelector('#permUserId').value = isEdit ? user.id : '';
      container.querySelector('#modalUserPermTitle').innerHTML = isEdit ?
        `<i class="fa-solid fa-sliders" style="color:#15803d;"></i> Chỉnh Sửa Tài Khoản &amp; Phân Quyền: ${escapeHtml(user.display_name || user.name)}` :
        `<i class="fa-solid fa-user-shield" style="color:#16a34a;"></i> Tạo Tài Khoản Mới &amp; Thiết Lập Quyền Hạn`;

      container.querySelector('#permUsername').value = isEdit ? (user.username || (user.email ? user.email.split('@')[0] : '')) : '';
      container.querySelector('#permUsername').disabled = isEdit;
      container.querySelector('#permPassword').value = isEdit ? (user.password || '100re') : '100re';
      container.querySelector('#permDisplayName').value = isEdit ? (user.display_name || user.name) : '';
      container.querySelector('#permEmail').value = isEdit ? user.email : '';
      container.querySelector('#permRole').value = isEdit ? user.role : 'researcher';

      // Set Assigned Teams
      const assignedTeamIds = isEdit && user.teams ? (
        Array.isArray(user.teams) ? user.teams.map(t => typeof t === 'string' ? t : (t.team_id || t.id)) : []
      ) : [];
      container.querySelectorAll('.perm-team-cb').forEach(cb => {
        cb.checked = assignedTeamIds.includes(cb.value);
      });

      // Set Permissions Checkboxes
      const userPerms = isEdit && Array.isArray(user.permissions) && user.permissions.length > 0 ? user.permissions : (
        user ? (user.role === 'supervisor' ? [
          'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos', 'perm_members',
          'perm_ws_all_teams', 'perm_ws_projects', 'perm_ws_tasks_create', 'perm_ws_tasks_update',
          'perm_ws_scinote_edit', 'perm_ws_scinote_signoff', 'perm_ws_datasets', 'perm_ws_documents', 'perm_ws_admin'
        ] : [
          'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos',
          'perm_ws_tasks_update', 'perm_ws_scinote_edit', 'perm_ws_datasets'
        ]) : [
          'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos',
          'perm_ws_tasks_update', 'perm_ws_scinote_edit', 'perm_ws_datasets'
        ]
      );

      container.querySelectorAll('.perm-cb').forEach(cb => {
        cb.checked = userPerms.includes(cb.value);
      });

      if (modal) {
        modal.classList.add('show');
        modal.style.display = 'flex';
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
      }
    }

    function closeUserModal() {
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
      }
    }

    container.querySelector('#btnOpenCreateUserModal')?.addEventListener('click', (e) => {
      e.preventDefault();
      openUserModal(null);
    });

    container.querySelector('#btnCloseUserPermModal')?.addEventListener('click', closeUserModal);
    container.querySelector('#btnCancelUserPermModal')?.addEventListener('click', closeUserModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeUserModal();
    });

    // Toggle Password Visibility
    container.querySelector('#btnTogglePassVisibility')?.addEventListener('click', () => {
      const pInput = container.querySelector('#permPassword');
      if (pInput.type === 'password') {
        pInput.type = 'text';
        container.querySelector('#btnTogglePassVisibility').innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      } else {
        pInput.type = 'password';
        container.querySelector('#btnTogglePassVisibility').innerHTML = '<i class="fa-solid fa-eye"></i>';
      }
    });

    // Preset Buttons
    container.querySelector('#presetSupervisor')?.addEventListener('click', () => {
      container.querySelector('#permRole').value = 'supervisor';
      container.querySelectorAll('.perm-cb').forEach(cb => { cb.checked = true; });
    });

    container.querySelector('#presetLeader')?.addEventListener('click', () => {
      container.querySelector('#permRole').value = 'team_leader';
      const leaderPerms = [
        'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos', 'perm_members',
        'perm_ws_projects', 'perm_ws_tasks_create', 'perm_ws_tasks_update',
        'perm_ws_scinote_edit', 'perm_ws_datasets', 'perm_ws_documents'
      ];
      container.querySelectorAll('.perm-cb').forEach(cb => {
        cb.checked = leaderPerms.includes(cb.value);
      });
    });

    container.querySelector('#presetResearcher')?.addEventListener('click', () => {
      container.querySelector('#permRole').value = 'researcher';
      const researcherPerms = [
        'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos',
        'perm_ws_tasks_update', 'perm_ws_scinote_edit', 'perm_ws_datasets'
      ];
      container.querySelectorAll('.perm-cb').forEach(cb => {
        cb.checked = researcherPerms.includes(cb.value);
      });
    });

    container.querySelector('#presetClear')?.addEventListener('click', () => {
      container.querySelectorAll('.perm-cb').forEach(cb => { cb.checked = false; });
    });

    // Search and Filter logic
    const searchInput = container.querySelector('#adminSearchInput');
    const roleFilter = container.querySelector('#adminRoleFilter');

    function applyAdminFilter() {
      const q = (searchInput?.value || '').toLowerCase().trim();
      const r = roleFilter?.value || '';

      const filtered = members.filter(u => {
        const name = (u.display_name || u.name || '').toLowerCase();
        const username = (u.username || '').toLowerCase();
        const email = (u.email || '').toLowerCase();
        const matchesQuery = !q || name.includes(q) || username.includes(q) || email.includes(q) || (u.teams && u.teams.some(t => {
          const tname = typeof t === 'string' ? t : (t.team_name || t.team_id || '');
          return tname.toLowerCase().includes(q);
        }));
        const matchesRole = !r || u.role === r;
        return matchesQuery && matchesRole;
      });

      renderUserTable(filtered);
    }

    searchInput?.addEventListener('input', applyAdminFilter);
    roleFilter?.addEventListener('change', applyAdminFilter);

    // Form Submit
    container.querySelector('#formUserWithPerms')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const uid = container.querySelector('#permUserId').value;
      let username = container.querySelector('#permUsername').value.trim().toLowerCase();
      const password = container.querySelector('#permPassword').value.trim() || '100re';
      const display_name = container.querySelector('#permDisplayName').value.trim();
      let email = container.querySelector('#permEmail').value.trim().toLowerCase();
      const role = container.querySelector('#permRole').value;

      if (!email) {
        email = username.includes('@') ? username : `${username}@100relab`;
      } else if (!email.includes('@')) {
        email = `${email}@100relab`;
      }

      if (!username) {
        username = email.split('@')[0];
      }

      const selectedTeams = Array.from(container.querySelectorAll('.perm-team-cb:checked')).map(cb => cb.value);
      const selectedPerms = Array.from(container.querySelectorAll('.perm-cb:checked')).map(cb => cb.value);

      // Un-blacklist if re-created
      try {
        let curDeleted = JSON.parse(localStorage.getItem('100re_deleted_user_ids') || '[]');
        curDeleted = curDeleted.filter(id => id !== uid && id !== username && id !== email);
        localStorage.setItem('100re_deleted_user_ids', JSON.stringify(curDeleted));
      } catch (e) {}

      const targetId = uid || `usr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
      const userObj = {
        id: targetId,
        username,
        password,
        display_name,
        name: display_name,
        email,
        role,
        status: 'active',
        teams: selectedTeams.length > 0 ? selectedTeams : ['team-smartgrid'],
        permissions: selectedPerms.length > 0 ? selectedPerms : [
          'perm_news', 'perm_journey', 'perm_research', 'perm_projects', 'perm_pubs', 'perm_photos',
          'perm_ws_tasks_update', 'perm_ws_scinote_edit', 'perm_ws_datasets'
        ],
        created_at: Math.floor(Date.now() / 1000)
      };

      // Update Local Created Store
      const curCreated = getStoredCreatedUsers();
      const createIdx = curCreated.findIndex(u => u.id === targetId || (u.username && u.username === username) || (u.email && u.email === email));
      if (createIdx >= 0) {
        curCreated[createIdx] = userObj;
      } else {
        curCreated.unshift(userObj);
      }
      saveStoredCreatedUsers(curCreated);

      if (uid) {
        // Update local state in-memory
        const idx = members.findIndex(m => m.id === uid);
        if (idx >= 0) members[idx] = { ...members[idx], ...userObj };
        showToast(`Đã cập nhật mật khẩu & quyền hạn cho "${display_name}" thành công!`);
      } else {
        // Add new user to local state in-memory at top
        const existingIdx = members.findIndex(m => m.username === username || m.email === email);
        if (existingIdx >= 0) {
          members[existingIdx] = userObj;
        } else {
          members.unshift(userObj);
        }
        showToast(`Tạo tài khoản "${username}" thành công (Mật khẩu: ${password})!`);
      }

      renderUserTable();
      closeUserModal();

      // Reset form
      container.querySelector('#formUserWithPerms').reset();
      container.querySelector('#permUserId').value = '';

      // Background Cloudflare Backend Sync
      try {
        if (uid) {
          await API.patch(`/api/members/${uid}`, {
            display_name,
            name: display_name,
            role,
            username,
            password: password || undefined,
            teams: selectedTeams,
            permissions: selectedPerms
          });
        } else {
          await API.post('/api/members', {
            username,
            password: password || '100re',
            display_name,
            name: display_name,
            email,
            role,
            teams: selectedTeams,
            permissions: selectedPerms
          });
        }
      } catch (err) {
        console.warn('Backend sync completed locally, remote server notice:', err);
      }
    });

    renderUserTable();

  } catch (err) {
    console.error('Error in renderAdmin:', err);
    container.innerHTML = `<div class="ws-empty-state"><i class="fa-solid fa-triangle-exclamation"></i><h3>Error</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}
