-- ==========================================================
-- 100RE LABORATORY INTERNAL WORKSPACE — SCINOTE ELN EXTENSION
-- Migration: 0003_scinote_eln.sql
-- Adds Experiments, Protocols, Lab Instruments, Lab Notes & Sign-offs
-- ==========================================================

-- 1. EXPERIMENTS TABLE (Hierarchy: Project -> Experiments -> Tasks)
CREATE TABLE IF NOT EXISTS experiments (
    id TEXT PRIMARY KEY,
    project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    team_id TEXT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'in_progress' CHECK(status IN ('planning', 'in_progress', 'review', 'completed', 'archived')),
    start_date TEXT,
    end_date TEXT,
    created_by TEXT NOT NULL REFERENCES users(id),
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_experiments_project ON experiments(project_id);
CREATE INDEX IF NOT EXISTS idx_experiments_team ON experiments(team_id);
CREATE INDEX IF NOT EXISTS idx_experiments_status ON experiments(status);

-- 2. LAB INSTRUMENTS & INVENTORY TABLE
CREATE TABLE IF NOT EXISTS instruments (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL, -- 'simulator', 'measurement', 'power_source', 'testbed', 'software'
    location TEXT NOT NULL, -- e.g. 'Lab D9 - Room 302', 'C7 - Room 505'
    status TEXT NOT NULL DEFAULT 'available' CHECK(status IN ('available', 'in_use', 'maintenance', 'calibrating')),
    specs TEXT,
    current_user_id TEXT REFERENCES users(id),
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_instruments_status ON instruments(status);
CREATE INDEX IF NOT EXISTS idx_instruments_category ON instruments(category);

-- 3. PROTOCOL TEMPLATES / SOPS TABLE
CREATE TABLE IF NOT EXISTS protocols (
    id TEXT PRIMARY KEY,
    team_id TEXT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    code TEXT UNIQUE NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    steps_json TEXT NOT NULL, -- Array of default steps
    created_by TEXT NOT NULL REFERENCES users(id),
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_protocols_team ON protocols(team_id);

-- 4. PROTOCOL EXECUTION STEPS TABLE (Interactive checklist per Task)
CREATE TABLE IF NOT EXISTS protocol_steps (
    id TEXT PRIMARY KEY,
    task_id TEXT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    step_order INTEGER NOT NULL,
    title TEXT NOT NULL,
    instruction TEXT,
    is_completed INTEGER NOT NULL DEFAULT 0 CHECK(is_completed IN (0, 1)),
    completed_by TEXT REFERENCES users(id),
    completed_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_protocol_steps_task ON protocol_steps(task_id);

-- 5. LAB OBSERVATION NOTES & PARAMETERS TABLE
CREATE TABLE IF NOT EXISTS lab_notes (
    id TEXT PRIMARY KEY,
    task_id TEXT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users(id),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    parameters_json TEXT, -- Key-value parameters: e.g. {"Temp": "25C", "Irradiance": "1000W/m2", "SoC": "85%"}
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_lab_notes_task ON lab_notes(task_id);

-- 6. SUPERVISOR SIGN-OFFS TABLE
CREATE TABLE IF NOT EXISTS sign_offs (
    id TEXT PRIMARY KEY,
    task_id TEXT NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users(id),
    status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'changes_requested')),
    comments TEXT,
    signed_at INTEGER,
    created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sign_offs_task ON sign_offs(task_id);
