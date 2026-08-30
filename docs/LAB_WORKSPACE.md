# 100RE LABORATORY ARCHITECTURE & WORKSPACE SPECIFICATION

Welcome to the comprehensive system documentation for the **100RE Laboratory Platform (Public Website + Internal Workspace)**.

---

## 1. System Architecture (3-Tier Storage Model)

```text
                         100RE LABORATORY ECOSYSTEM

                                     │
                       ┌─────────────┴─────────────┐
                       │                           │

                 PUBLIC WEBSITE              LAB WORKSPACE
                       │                           │
                       │                    Cloudflare Access
                       │                           │
                       ▼                           ▼
               Cloudflare KV                 Cloudflare Worker
                       │                           │
                 Public Members          ┌─────────┴──────────┐
                 (Source of Truth)       │                    │
                                         ▼                    ▼
                                        D1               Google Drive
                                         │                   5 TB
                                  Users / Teams                │
                                  Projects / Tasks        Documents
                                  Permissions             Datasets
                                  Metadata                Results
                                  Activity                Papers
```

### Responsibility Breakdown:
1. **Public Website (`Cloudflare KV`)**:
   - **Source of Truth for Public Members**: `name`, `avatar`, `position`, `academic_title`, `bio`, `research_interest`, `google_scholar`, `orcid`, `website`, `public_email`, `public_social_links`.
   - Used by public pages (`/index.html`, `/members.html`, `/research-areas.html`) and `/api/public/members`.
2. **Lab Workspace (`Cloudflare D1`)**:
   - **Source of Truth for Workspace Users & Relational Operations**: `users` (with optional `member_key`), `teams`, `team_members`, `projects`, `project_members`, `tasks`, `task_comments`, `documents` (metadata), `datasets` (metadata), `activity_logs`.
   - All authorization and RBAC checks executed on backend.
3. **File Storage (`Google Drive 5 TB`)**:
   - **Source of Truth for Physical Binary Files**: PDF papers, DOCX reports, PPTX presentations, CSV/Parquet time-series datasets, MAT/HDF5 battery cycling data, simulation outputs.
   - Primary reference in D1 stores `drive_file_id`, `drive_folder_id`, `storage_provider: 'google_drive'`, `mime_type`, `file_size`.

---

## 2. Core Distinction: Public Member vs Workspace User

| Concept | Public Member (`Cloudflare KV`) | Workspace User (`Cloudflare D1`) |
|---|---|---|
| **Purpose** | Displayed on public website | Authenticated to enter Lab Workspace |
| **Storage** | Cloudflare KV (`MEMBERS_KV`) | Cloudflare D1 (`DB`) |
| **Attributes** | Academic title, bio, scholar, photo | Role, email, team/project memberships, tasks |
| **Key Identifier**| Stable Key (e.g. `pv-1`, `bess-1`) | UUID (e.g. `usr-sup-01`, `usr-res-01`) |
| **Workspace Account** | Not required (e.g. external collaborator) | Required for login |

### Linking via `users.member_key`:
- When a Workspace User has a public profile, `users.member_key` points to the KV member key.
- When `users.member_key IS NULL`, the user is a Workspace-only researcher, system supervisor, or visiting fellow.
- When a user is deactivated (`users.status = 'inactive'`), their workspace login is disabled while their public member profile in KV remains intact as Alumni.

---

## 3. Database Schema (Cloudflare D1)

The complete schema is located in `migrations/0001_workspace_schema.sql` and initialized with `migrations/0002_seed_data.sql`.

### Table Summary:
1. `users`: `id`, `email`, `display_name`, `member_key` (FK pointer to KV), `avatar_url`, `role` (`supervisor`, `team_leader`, `researcher`, `alumni`), `status` (`active`, `inactive`), `created_at`, `updated_at`.
2. `teams`: `id`, `name`, `slug`, `description`, `status`, `created_at`, `updated_at`.
3. `team_members`: `id`, `team_id`, `user_id`, `team_role` (`leader`, `member`), `joined_at`.
4. `projects`: `id`, `team_id`, `name`, `slug`, `description`, `status`, `progress`, `start_date`, `end_date`, `drive_folder_id`, `created_by`, `created_at`, `updated_at`.
5. `project_members`: `id`, `project_id`, `user_id`, `project_role` (`leader`, `member`, `contributor`), `joined_at`.
6. `tasks`: `id`, `team_id`, `project_id`, `title`, `description`, `status` (`todo`, `in_progress`, `review`, `done`), `priority` (`low`, `medium`, `high`, `urgent`), `assigned_to`, `created_by`, `due_date`, `created_at`, `updated_at`, `completed_at`.
7. `task_comments`: `id`, `task_id`, `user_id`, `content`, `created_at`, `updated_at`.
8. `documents`: `id`, `team_id`, `project_id`, `name`, `description`, `file_name`, `mime_type`, `file_size`, `storage_provider`, `drive_file_id`, `drive_folder_id`, `uploaded_by`, `tags`, `created_at`, `updated_at`.
9. `datasets`: `id`, `team_id`, `project_id`, `name`, `description`, `source`, `data_type`, `start_date`, `end_date`, `resolution`, `format`, `file_size`, `storage_provider`, `drive_file_id`, `drive_folder_id`, `uploaded_by`, `tags`, `created_at`, `updated_at`.
10. `activity_logs`: `id`, `user_id`, `team_id`, `project_id`, `entity_type`, `entity_id`, `action`, `metadata`, `created_at`.

---

## 4. Google Drive 5TB Storage Integration

### File Organization Pattern:
```text
100RE LAB (Root Folder: GOOGLE_DRIVE_ROOT_FOLDER_ID)
│
├── BESS
│   └── Data Center BESS Peak Shaving
│       ├── Documents (Papers, Manuals)
│       └── Datasets (2-sec AGC Signals, EIS MAT files)
├── Photovoltaic (PV)
│   └── AI-Driven Solar Irradiance Forecasting
│       └── Datasets (1-sec GHI Pyranometer recordings)
├── Smart Grid
├── Wind Energy
├── Green Hydrogen
├── Electric Vehicle
├── Artificial Intelligence
├── Unit Commitment
└── Demand Response
```

### Storage Abstraction (`src/storage/index.js`):
- `StorageService.uploadFile({ name, mimeType, content, folderId, env })`: Streams to Google Drive v3 REST API.
- `StorageService.downloadFile({ fileId, env })`: Authorizes and streams file content to client.
- `StorageService.createFolder({ name, parentFolderId, env })`: Generates project folder in Drive.
- `StorageService.deleteFile({ fileId, env })`: Removes file from Drive.

---

## 5. RBAC Authorization Model

All security rules are enforced at the Worker Gateway (`src/rbac.js`):

| Action | Supervisor | Team Leader | Researcher | Alumni |
|---|---|---|---|---|
| **View Teams & Projects** | All | Assigned Teams | Assigned Teams | Assigned Teams (Read) |
| **Create Project / Folder** | Any Team | Assigned Team(s) | No | No |
| **Create & Assign Task** | Any Team | Team Projects | No | No |
| **Update Task / Comment** | Yes | Yes | Assigned Tasks | No (Read Only) |
| **Upload Dataset / Document**| Yes | Yes | Assigned Team(s) | No |
| **Download / Open in Drive** | Yes | Yes | Assigned Team(s) | Assigned Team(s) |
| **Manage Users & KV Linking**| Yes | No | No | No |

---

## 6. Environment Configuration & Secrets

### Cloudflare Worker Environment Variables (`wrangler.toml`):
```toml
[vars]
ENVIRONMENT = "production"
ADMIN_USERNAME = "100re"
ADMIN_PASSWORD = "..."
GOOGLE_DRIVE_ROOT_FOLDER_ID = "YOUR_GOOGLE_DRIVE_ROOT_FOLDER_ID"
```

### Production Secrets (set via `wrangler secret put`):
```bash
# Google Drive API Service Account or OAuth2 Credentials
npx wrangler secret put GOOGLE_CLIENT_ID
npx wrangler secret put GOOGLE_CLIENT_SECRET
npx wrangler secret put GOOGLE_REFRESH_TOKEN
```

---

## 7. Development & Deployment Guide

### Local Development:
```bash
# 1. Run local dev server
npx wrangler dev

# 2. Run automated test suite
node test_workspace.js
```

### Cloudflare Production Deploy:
```bash
# 1. Apply D1 migrations to remote database
npx wrangler d1 migrations apply 100re-workspace-db --remote

# 2. Deploy Worker & Static Assets
npx wrangler deploy
```
