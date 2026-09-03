/**
 * 100RE LAB WORKSPACE — Internationalization (i18n) Engine
 * Supports seamless bilingual switching: Tiếng Việt (VI) & English (EN)
 */

export const DICTIONARY = {
  vi: {
    // Navigation & App Shell
    nav_dashboard: "Bảng Điều Khiển",
    nav_sec_scinote: "SCINOTE ELN",
    nav_experiments: "Đề Tài & Thí Nghiệm",
    nav_workflows: "Quy Trình Trực Quan",
    nav_protocols: "Quy Trình Chuẩn (SOPs)",
    nav_inventory: "Thiết Bị Phòng Lab",
    nav_signoffs: "Ký Duyệt & Phê Chuẩn",
    nav_sec_work: "CÔNG VIỆC & NHIỆM VỤ",
    nav_all_tasks: "Tất Cả Nhiệm Vụ",
    nav_teams: "8 Nhóm Nghiên Cứu",
    nav_sec_database: "100RE DATABASE",
    nav_datasets: "Bộ Dữ Liệu Nghiên Cứu",
    nav_documents: "Tài Liệu & Báo Cáo",
    nav_sec_lab: "PHÒNG THÍ NGHIỆM",
    nav_members: "Thành Viên & Hồ Sơ",
    nav_activity: "Nhật Ký Hoạt Động",
    nav_sec_admin: "QUẢN TRỊ HỆ THỐNG",
    nav_admin: "Quản Trị & Phân Quyền",

    // Topbar
    top_workspace: "Workspace",
    top_new_task: "Tạo Nhiệm Vụ Mới",
    top_public_web: "Web Công Khai",
    top_dev_role: "DEV ROLE:",
    top_switch_lang: "Đổi Ngôn Ngữ",
    top_theme_dark: "Chế độ Tối",
    top_theme_light: "Chế độ Sáng",

    // Common Actions & Buttons
    btn_save: "Lưu Thay Đổi",
    btn_cancel: "Hủy Bỏ",
    btn_create: "Tạo Mới",
    btn_edit: "Chỉnh Sửa",
    btn_delete: "Xóa",
    btn_close: "Đóng",
    btn_upload: "Tải Lên",
    btn_download: "Tải Xuống",
    btn_open: "Mở Xem",
    btn_search: "Tìm kiếm...",
    btn_filter: "Lọc Dữ Liệu",
    btn_all: "Tất Cả",
    btn_signoff: "Ký Duyệt Nghiệm Thu",
    btn_approved: "Đã Ký Duyệt",
    btn_details: "Chi Tiết",

    // Status Badges
    status_not_started: "Chưa Bắt Đầu",
    status_in_progress: "Đang Thực Hiện",
    status_review: "Chờ Duyệt",
    status_completed: "Hoàn Thành",
    status_blocked: "Bị Chặn",
    priority_high: "Cao",
    priority_medium: "Trung Bình",
    priority_low: "Thấp",

    // Dashboard
    dash_title: "Trung Tâm Điều Hành Nghiên Cứu 100RE",
    dash_subtitle: "Tổng quan các đề tài, thí nghiệm điện tử SciNote và kho lưu trữ 100RE Database",
    dash_stat_projects: "Đề Tài Đang Triển Khai",
    dash_stat_tasks: "Nhiệm Vụ & Thí Nghiệm",
    dash_stat_datasets: "Bộ Dữ Liệu Lưu Trữ",
    dash_stat_documents: "Tài Liệu & Tiêu Chuẩn",
    dash_recent_tasks: "Nhiệm Vụ Gần Đây",
    dash_recent_activity: "Hoạt Động Phòng Thí Nghiệm",

    // Tasks & Kanban
    tasks_title: "Quản Lý Tiến Độ Nhiệm Vụ & Thí Nghiệm",
    tasks_tab_kanban: "Bảng Kanban",
    tasks_tab_list: "Danh Sách Chi Tiết",
    tasks_col_todo: "CẦN LÀM",
    tasks_col_progress: "ĐANG LÀM",
    tasks_col_review: "CHỜ DUYỆT",
    tasks_col_done: "HOÀN THÀNH",

    // SciNote ELN
    scinote_title: "Nhật Ký Thí Nghiệm Điện Tử (SciNote ELN)",
    scinote_step_hypo: "1. Giả Thuyết Nghiên Cứu",
    scinote_step_protocol: "2. Quy Trình & Thiết Bị",
    scinote_step_results: "3. Dữ Liệu & Kết Quả",
    scinote_step_discussion: "4. Thảo Luận & Kết Luận",
    scinote_signoff_notice: "Trạng Thái Phê Chuẩn Của Chủ Nhiệm Lab (Supervisor Sign-off)",

    // Datasets
    ds_title: "Kho Bộ Dữ Liệu Nghiên Cứu (100RE Database)",
    ds_subtitle: "Bộ dữ liệu đo đạc thực nghiệm bức xạ, gió, chu kỳ pin BESS và Smart Grid",
    ds_upload_btn: "Tải Lên Dataset Mới",
    ds_col_name: "Tên Bộ Dữ Liệu",
    ds_col_team: "Nhóm Nghiên Cứu",
    ds_col_type: "Loại Dữ Liệu",
    ds_col_format: "Định Dạng",
    ds_col_size: "Dung Lượng",
    ds_col_actions: "Thao Tác",

    // Documents
    doc_title: "Tài Liệu Kỹ Thuật & Báo Cáo Nghiên Cứu",
    doc_subtitle: "Tiêu chuẩn IEEE/IEC, slide thuyết trình hội thảo, báo cáo tiến độ",
    doc_upload_btn: "Tải Lên Tài Liệu",

    // Teams
    teams_title: "8 Nhóm Nghiên Cứu Chuyên Sâu 100RE Lab",
    teams_subtitle: "Thông tin các nhóm đề tài, trưởng nhóm và danh sách thành viên",

    // Admin
    admin_title: "Trung Tâm Quản Trị Hệ Thống & Phân Quyền",
    admin_subtitle: "Tạo tài khoản thành viên mới và cấp ma trận quyền hạn chi tiết",
    admin_create_user_btn: "Tạo Tài Khoản & Phân Quyền",

    // Modals
    modal_create_task_title: "Tạo Nhiệm Vụ / Thí Nghiệm Mới",
    modal_upload_doc_title: "Tải Lên Tài Liệu Nghiên Cứu",
    modal_upload_ds_title: "Tải Lên Bộ Dữ Liệu Thực Nghiệm",
    modal_user_perms_title: "Thiết Lập Tài Khoản & Ma Trận Phân Quyền",
    modal_account_info: "1. Thông Tin Tài Khoản",
    modal_perms_matrix: "2. Danh Sách Tích Chọn Quyền Hạn",
    modal_field_name: "Tiêu Đề / Họ Tên *",
    modal_field_team: "Nhóm Nghiên Cứu *",
    modal_field_project: "Đề Tài Liên Quan",
    modal_field_desc: "Mô Tả & Ghi Chú",
    modal_field_file: "Chọn Tệp Đính Kèm *"
  },

  en: {
    // Navigation & App Shell
    nav_dashboard: "Dashboard",
    nav_sec_scinote: "SCINOTE ELN",
    nav_experiments: "Projects & Experiments",
    nav_workflows: "Visual Workflows",
    nav_protocols: "Protocols & SOPs",
    nav_inventory: "Lab Inventory",
    nav_signoffs: "Sign-offs & Approvals",
    nav_sec_work: "WORK & TASKS",
    nav_all_tasks: "All Tasks",
    nav_teams: "Research Teams",
    nav_sec_database: "100RE DATABASE",
    nav_datasets: "Research Datasets",
    nav_documents: "Documents & Reports",
    nav_sec_lab: "LAB",
    nav_members: "Members & Profiles",
    nav_activity: "Audit Trail / Log",
    nav_sec_admin: "ADMINISTRATION",
    nav_admin: "Lab Admin & Users",

    // Topbar
    top_workspace: "Workspace",
    top_new_task: "New Task / Step",
    top_public_web: "Public Web",
    top_dev_role: "DEV ROLE:",
    top_switch_lang: "Switch Language",
    top_theme_dark: "Dark Mode",
    top_theme_light: "Light Mode",

    // Common Actions & Buttons
    btn_save: "Save Changes",
    btn_cancel: "Cancel",
    btn_create: "Create New",
    btn_edit: "Edit",
    btn_delete: "Delete",
    btn_close: "Close",
    btn_upload: "Upload",
    btn_download: "Download",
    btn_open: "Open",
    btn_search: "Search...",
    btn_filter: "Filter",
    btn_all: "All",
    btn_signoff: "Sign-off & Approve",
    btn_approved: "Approved",
    btn_details: "Details",

    // Status Badges
    status_not_started: "To Do",
    status_in_progress: "In Progress",
    status_review: "Review",
    status_completed: "Completed",
    status_blocked: "Blocked",
    priority_high: "High",
    priority_medium: "Medium",
    priority_low: "Low",

    // Dashboard
    dash_title: "100RE Research Command Center",
    dash_subtitle: "Overview of research projects, SciNote ELN experiments and 100RE Database",
    dash_stat_projects: "Active Projects",
    dash_stat_tasks: "Tasks & Experiments",
    dash_stat_datasets: "Stored Datasets",
    dash_stat_documents: "Documents & Standards",
    dash_recent_tasks: "Recent Tasks",
    dash_recent_activity: "Laboratory Activity Stream",

    // Tasks & Kanban
    tasks_title: "Tasks & Experiments Progress Board",
    tasks_tab_kanban: "Kanban Board",
    tasks_tab_list: "List View",
    tasks_col_todo: "TO DO",
    tasks_col_progress: "IN PROGRESS",
    tasks_col_review: "REVIEW",
    tasks_col_done: "DONE",

    // SciNote ELN
    scinote_title: "Electronic Lab Notebook (SciNote ELN)",
    scinote_step_hypo: "1. Research Hypothesis",
    scinote_step_protocol: "2. Protocol & Instruments",
    scinote_step_results: "3. Data & Results",
    scinote_step_discussion: "4. Discussion & Conclusion",
    scinote_signoff_notice: "Supervisor Sign-off & Approval Status",

    // Datasets
    ds_title: "Research Datasets Repository (100RE Database)",
    ds_subtitle: "Solar irradiance, wind speed, BESS battery cycle and Smart Grid experimental datasets",
    ds_upload_btn: "Upload New Dataset",
    ds_col_name: "Dataset Name",
    ds_col_team: "Research Team",
    ds_col_type: "Data Type",
    ds_col_format: "Format",
    ds_col_size: "File Size",
    ds_col_actions: "Actions",

    // Documents
    doc_title: "Technical Documents & Research Reports",
    doc_subtitle: "IEEE/IEC standards, conference slide decks, project milestone reports",
    doc_upload_btn: "Upload Document",

    // Teams
    teams_title: "9 Specialized Research Teams at 100RE Lab",
    teams_subtitle: "Explore team projects, team leaders and active researchers",

    // Admin
    admin_title: "System Administration & RBAC Permissions Matrix",
    admin_subtitle: "Create new user accounts and configure granular permission checklist",
    admin_create_user_btn: "Create User & Permissions",

    // Modals
    modal_create_task_title: "Create New Task / Experiment Step",
    modal_upload_doc_title: "Upload Research Document",
    modal_upload_ds_title: "Upload Experimental Dataset",
    modal_user_perms_title: "Account Setup & Granular Permissions Matrix",
    modal_account_info: "1. Account Information",
    modal_perms_matrix: "2. Permissions Checklist Matrix",
    modal_field_name: "Title / Full Name *",
    modal_field_team: "Research Team *",
    modal_field_project: "Related Project",
    modal_field_desc: "Description & Notes",
    modal_field_file: "Select Attached File *"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('100re_ws_lang') || 'vi';
  }

  init() {
    this.currentLang = localStorage.getItem('100re_ws_lang') || 'vi';
    document.documentElement.lang = this.currentLang;
    this.applyToDOM();
    this.updateSwitcherUI();
  }

  getLanguage() {
    return this.currentLang;
  }

  setLanguage(lang) {
    if (lang !== 'vi' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('100re_ws_lang', lang);
    document.documentElement.lang = lang;
    this.applyToDOM();
    this.updateSwitcherUI();
    window.dispatchEvent(new CustomEvent('workspace-lang-change', { detail: { lang } }));
  }

  t(key, fallback = '') {
    const dict = DICTIONARY[this.currentLang] || DICTIONARY.vi;
    if (dict && dict[key] !== undefined) return dict[key];
    const fallbackDict = DICTIONARY.en;
    if (fallbackDict && fallbackDict[key] !== undefined) return fallbackDict[key];
    return fallback || key;
  }

  updateSwitcherUI() {
    const btnVi = document.getElementById('btnLangVi');
    const btnEn = document.getElementById('btnLangEn');
    if (btnVi && btnEn) {
      if (this.currentLang === 'vi') {
        btnVi.classList.add('active');
        btnEn.classList.remove('active');
      } else {
        btnEn.classList.add('active');
        btnVi.classList.remove('active');
      }
    }
  }

  applyToDOM() {
    // 1. Text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // 2. HTML elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = this.t(key);
      if (translation) {
        el.innerHTML = translation;
      }
    });

    // 3. Placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation) {
        el.placeholder = translation;
      }
    });

    // 4. Title elements
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const translation = this.t(key);
      if (translation) {
        el.title = translation;
      }
    });
  }
}

export const i18n = new I18nManager();
if (typeof window !== 'undefined') {
  window.i18n = i18n;
}
