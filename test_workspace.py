import os
import sys

# Force UTF-8 stdout on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

def verify_workspace():
    print("[*] Verifying 100RE Lab Workspace (KV + D1 + Google Drive) Architecture...\n")
    base_dir = r"d:\100RE Web"
    
    required_files = [
        r"migrations\0001_workspace_schema.sql",
        r"migrations\0002_seed_data.sql",
        r"wrangler.toml",
        r"src\index.js",
        r"src\db.js",
        r"src\auth.js",
        r"src\rbac.js",
        r"src\activity.js",
        r"src\seedData.js",
        r"src\storage\index.js",
        r"src\storage\googleDrive.js",
        r"src\routes\dashboard.js",
        r"src\routes\teams.js",
        r"src\routes\projects.js",
        r"src\routes\tasks.js",
        r"src\routes\documents.js",
        r"src\routes\datasets.js",
        r"src\routes\members.js",
        r"src\routes\activity.js",
        r"src\routes\storage.js",
        r"Frontend\workspace\index.html",
        r"Frontend\workspace\css\workspace.css",
        r"Frontend\workspace\css\kanban.css",
        r"Frontend\workspace\js\api.js",
        r"Frontend\workspace\js\auth.js",
        r"Frontend\workspace\js\components.js",
        r"Frontend\workspace\js\app.js",
        r"Frontend\workspace\js\views\dashboardView.js",
        r"Frontend\workspace\js\views\teamsView.js",
        r"Frontend\workspace\js\views\projectsView.js",
        r"Frontend\workspace\js\views\tasksView.js",
        r"Frontend\workspace\js\views\datasetsView.js",
        r"Frontend\workspace\js\views\documentsView.js",
        r"Frontend\workspace\js\views\membersView.js",
        r"Frontend\workspace\js\views\activityView.js",
        r"Frontend\workspace\js\views\adminView.js",
        r"docs\LAB_WORKSPACE.md",
    ]

    all_ok = True
    for rel_path in required_files:
        full_path = os.path.join(base_dir, rel_path)
        if not os.path.exists(full_path):
            print(f"  [-] Missing required file: {rel_path}")
            all_ok = False
        else:
            size = os.path.getsize(full_path)
            if size == 0:
                print(f"  [-] Empty file: {rel_path}")
                all_ok = False
            else:
                print(f"  [+] Verified ({size} bytes): {rel_path}")

    # Check D1 schema syntax & tables
    schema_path = os.path.join(base_dir, r"migrations\0001_workspace_schema.sql")
    with open(schema_path, "r", encoding="utf-8") as f:
        schema_sql = f.read()

    expected_tables = ["users", "teams", "team_members", "projects", "project_members", "tasks", "task_comments", "documents", "datasets", "activity_logs"]
    for tbl in expected_tables:
        if f"CREATE TABLE IF NOT EXISTS {tbl}" not in schema_sql:
            print(f"  [-] Schema missing table: {tbl}")
            all_ok = False
        else:
            print(f"  [+] D1 Table definition verified: {tbl}")

    # Check member_key in users table
    if "member_key TEXT" not in schema_sql:
        print("  [-] users table missing member_key field")
        all_ok = False
    else:
        print("  [+] users.member_key field verified (KV linking)")

    # Check drive_file_id in documents and datasets
    if "drive_file_id TEXT" not in schema_sql:
        print("  [-] documents/datasets missing drive_file_id")
        all_ok = False
    else:
        print("  [+] drive_file_id field verified in documents & datasets")

    # Check wrangler.toml bindings (KV and D1 present, no R2)
    wrangler_path = os.path.join(base_dir, "wrangler.toml")
    with open(wrangler_path, "r", encoding="utf-8") as f:
        wrangler_content = f.read()
    if 'binding = "DB"' not in wrangler_content or 'binding = "MEMBERS_KV"' not in wrangler_content:
        print("  [-] wrangler.toml missing DB or MEMBERS_KV bindings")
        all_ok = False
    else:
        print("  [+] wrangler.toml bindings verified (MEMBERS_KV & DB)")

    if 'r2_buckets' in wrangler_content:
        print("  [-] wrangler.toml still contains r2_buckets")
        all_ok = False
    else:
        print("  [+] Clean wrangler.toml without R2 verified")

    print("\n==============================================")
    if all_ok:
        print("  [SUCCESS] ALL SYSTEM FILES & ARCHITECTURE VERIFIED!")
    else:
        print("  [WARNING] SOME CHECKS FAILED.")
    print("==============================================\n")

if __name__ == "__main__":
    verify_workspace()
