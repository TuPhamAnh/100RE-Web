/**
 * 100RE LAB WORKSPACE — Documents API Routes (/api/documents)
 * Storage: Google Drive 5TB (Files) + Cloudflare D1 (Metadata)
 */

import { RBAC } from '../rbac.js';
import { logActivity } from '../activity.js';
import { StorageService } from '../storage/index.js';

export async function handleDocuments(request, user, db, env) {
  const url = new URL(request.url);
  const method = request.method;
  const pathParts = url.pathname.split('/').filter(Boolean); // ['api', 'documents', ':id'...]
  const docId = pathParts[2] || null;

  // 1. GET /api/documents
  if (!docId && method === 'GET') {
    const teamFilter = url.searchParams.get('team');
    const projectFilter = url.searchParams.get('project');
    const fileTypeFilter = url.searchParams.get('file_type');
    const search = (url.searchParams.get('search') || '').toLowerCase();

    let allDocs = await db.all('SELECT * FROM documents ORDER BY created_at DESC');
    let teams = await db.all('SELECT id, name, slug FROM teams');
    let projects = await db.all('SELECT id, name, slug FROM projects');
    let users = await db.all('SELECT id, COALESCE(display_name, name) as name, email, avatar_url FROM users');

    const teamMap = new Map(teams.map(t => [t.id, t]));
    const projectMap = new Map(projects.map(p => [p.id, p]));
    const userMap = new Map(users.map(u => [u.id, u]));

    // Filter by user access
    let filtered = allDocs.filter(d => RBAC.canAccessResource(user, d));

    if (teamFilter) {
      filtered = filtered.filter(d => d.team_id === teamFilter || (teamMap.get(d.team_id) && teamMap.get(d.team_id).slug === teamFilter));
    }
    if (projectFilter) {
      filtered = filtered.filter(d => d.project_id === projectFilter || (projectMap.get(d.project_id) && projectMap.get(d.project_id).slug === projectFilter));
    }
    if (fileTypeFilter) {
      filtered = filtered.filter(d => (d.mime_type && d.mime_type.toLowerCase().includes(fileTypeFilter.toLowerCase())) || d.file_name.toLowerCase().endsWith(fileTypeFilter.toLowerCase()));
    }
    if (search) {
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(search) || 
        d.file_name.toLowerCase().includes(search) || 
        (d.tags && d.tags.toLowerCase().includes(search)) ||
        (d.description && d.description.toLowerCase().includes(search))
      );
    }

    const enriched = filtered.map(d => ({
      ...d,
      team: teamMap.get(d.team_id) || null,
      project: projectMap.get(d.project_id) || null,
      uploader: userMap.get(d.uploaded_by) || null,
      canDelete: RBAC.canDeleteResource(user, d)
    }));

    return { success: true, documents: enriched };
  }

  // 2. POST /api/documents
  if (!docId && method === 'POST') {
    const body = await request.json();
    const team_id = body.team_id;
    const project_id = body.project_id || null;
    const name = (body.name || '').trim();
    const description = (body.description || '').trim();
    const file_name = (body.file_name || '').trim();
    const mime_type = body.mime_type || body.file_type || 'application/pdf';
    const file_size = Number(body.file_size) || 0;
    const drive_file_id = body.drive_file_id || `1Drive_Doc_${Date.now().toString(36)}`;
    const drive_folder_id = body.drive_folder_id || null;
    const storage_provider = body.storage_provider || 'google_drive';
    const tags = body.tags || '';

    if (!team_id || !name || !file_name) {
      return { error: 'Team, tên tài liệu và tên file là bắt buộc.', status: 400 };
    }

    if (!RBAC.canUploadResource(user, team_id)) {
      return { error: 'Forbidden: Bạn không có quyền upload tài liệu vào Team này.', status: 403 };
    }

    const id = `doc-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      `INSERT INTO documents (id, team_id, project_id, name, description, file_name, mime_type, file_size, storage_provider, drive_file_id, drive_folder_id, uploaded_by, tags, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, team_id, project_id, name, description, file_name, mime_type, file_size, storage_provider, drive_file_id, drive_folder_id, user.id, tags, now, now]
    );

    await logActivity(db, {
      userId: user.id,
      teamId: team_id,
      projectId: project_id,
      entityType: 'document',
      entityId: id,
      action: 'upload_document',
      metadata: { name, file_name, mime_type, storage_provider: 'google_drive', drive_file_id }
    });

    return { success: true, document: { id, team_id, project_id, name, file_name, mime_type, file_size, storage_provider, drive_file_id, drive_folder_id, tags } };
  }

  // 3. GET /api/documents/:id
  if (docId && method === 'GET') {
    const doc = await db.first('SELECT * FROM documents WHERE id = ?', [docId]);
    if (!doc) return { error: 'Không tìm thấy tài liệu.', status: 404 };

    if (!RBAC.canAccessResource(user, doc)) {
      return { error: 'Forbidden: Bạn không có quyền xem tài liệu này.', status: 403 };
    }

    const team = await db.first('SELECT id, name, slug FROM teams WHERE id = ?', [doc.team_id]);
    const project = doc.project_id ? await db.first('SELECT id, name, slug FROM projects WHERE id = ?', [doc.project_id]) : null;
    const uploader = await db.first('SELECT id, COALESCE(display_name, name) as name, email, avatar_url FROM users WHERE id = ?', [doc.uploaded_by]);

    return {
      success: true,
      document: {
        ...doc,
        team,
        project,
        uploader,
        canDelete: RBAC.canDeleteResource(user, doc)
      }
    };
  }

  // 4. DELETE /api/documents/:id
  if (docId && method === 'DELETE') {
    const doc = await db.first('SELECT * FROM documents WHERE id = ?', [docId]);
    if (!doc) return { error: 'Không tìm thấy tài liệu.', status: 404 };

    if (!RBAC.canDeleteResource(user, doc)) {
      return { error: 'Forbidden: Bạn không có quyền xóa tài liệu này.', status: 403 };
    }

    // Delete Google Drive file
    if (doc.drive_file_id) {
      await StorageService.deleteFile({ fileId: doc.drive_file_id, env });
    }

    await db.run('DELETE FROM documents WHERE id = ?', [doc.id]);

    await logActivity(db, {
      userId: user.id,
      teamId: doc.team_id,
      projectId: doc.project_id,
      entityType: 'document',
      entityId: doc.id,
      action: 'delete_document',
      metadata: { name: doc.name, file_name: doc.file_name, drive_file_id: doc.drive_file_id }
    });

    return { success: true, message: 'Đã xóa tài liệu thành công khỏi Google Drive và hệ thống.' };
  }

  return { error: 'Method Not Allowed', status: 405 };
}
