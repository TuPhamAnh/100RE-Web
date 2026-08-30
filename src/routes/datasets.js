/**
 * 100RE LAB WORKSPACE — Research Datasets API Routes (/api/datasets)
 * Storage: Google Drive 5TB (Files) + Cloudflare D1 (Metadata)
 */

import { RBAC } from '../rbac.js';
import { logActivity } from '../activity.js';
import { StorageService } from '../storage/index.js';

export async function handleDatasets(request, user, db, env) {
  const url = new URL(request.url);
  const method = request.method;
  const pathParts = url.pathname.split('/').filter(Boolean); // ['api', 'datasets', ':id'...]
  const dsId = pathParts[2] || null;

  // 1. GET /api/datasets
  if (!dsId && method === 'GET') {
    const teamFilter = url.searchParams.get('team');
    const projectFilter = url.searchParams.get('project');
    const formatFilter = url.searchParams.get('format');
    const typeFilter = url.searchParams.get('data_type');
    const tagFilter = url.searchParams.get('tag');
    const search = (url.searchParams.get('search') || '').toLowerCase();

    let allDatasets = await db.all('SELECT * FROM datasets ORDER BY created_at DESC');
    let teams = await db.all('SELECT id, name, slug FROM teams');
    let projects = await db.all('SELECT id, name, slug FROM projects');
    let users = await db.all('SELECT id, COALESCE(display_name, name) as name, email, avatar_url FROM users');

    const teamMap = new Map(teams.map(t => [t.id, t]));
    const projectMap = new Map(projects.map(p => [p.id, p]));
    const userMap = new Map(users.map(u => [u.id, u]));

    // Filter by user access
    let filtered = allDatasets.filter(ds => RBAC.canAccessResource(user, ds));

    if (teamFilter) {
      filtered = filtered.filter(ds => ds.team_id === teamFilter || (teamMap.get(ds.team_id) && teamMap.get(ds.team_id).slug === teamFilter));
    }
    if (projectFilter) {
      filtered = filtered.filter(ds => ds.project_id === projectFilter || (projectMap.get(ds.project_id) && projectMap.get(ds.project_id).slug === projectFilter));
    }
    if (formatFilter) {
      filtered = filtered.filter(ds => ds.format.toLowerCase().includes(formatFilter.toLowerCase()));
    }
    if (typeFilter) {
      filtered = filtered.filter(ds => ds.data_type && ds.data_type.toLowerCase() === typeFilter.toLowerCase());
    }
    if (tagFilter) {
      filtered = filtered.filter(ds => ds.tags && ds.tags.toLowerCase().includes(tagFilter.toLowerCase()));
    }
    if (search) {
      filtered = filtered.filter(ds => 
        ds.name.toLowerCase().includes(search) || 
        (ds.source && ds.source.toLowerCase().includes(search)) ||
        (ds.tags && ds.tags.toLowerCase().includes(search)) ||
        (ds.description && ds.description.toLowerCase().includes(search))
      );
    }

    const enriched = filtered.map(ds => ({
      ...ds,
      team: teamMap.get(ds.team_id) || null,
      project: projectMap.get(ds.project_id) || null,
      uploader: userMap.get(ds.uploaded_by) || null,
      canDelete: RBAC.canDeleteResource(user, ds)
    }));

    return { success: true, datasets: enriched };
  }

  // 2. POST /api/datasets
  if (!dsId && method === 'POST') {
    const body = await request.json();
    const team_id = body.team_id;
    const project_id = body.project_id || null;
    const name = (body.name || '').trim();
    const description = (body.description || '').trim();
    const source = (body.source || '').trim();
    const data_type = body.data_type || 'time-series';
    const start_date = body.start_date || null;
    const end_date = body.end_date || null;
    const resolution = body.resolution || '1-second';
    const format = body.format || 'CSV';
    const file_size = Number(body.file_size) || Number(body.size) || 0;
    const drive_file_id = body.drive_file_id || `1Drive_DS_${Date.now().toString(36)}`;
    const drive_folder_id = body.drive_folder_id || null;
    const storage_provider = body.storage_provider || 'google_drive';
    const tags = body.tags || '';

    if (!team_id || !name) {
      return { error: 'Team và tên Dataset là bắt buộc.', status: 400 };
    }

    if (!RBAC.canUploadResource(user, team_id)) {
      return { error: 'Forbidden: Bạn không có quyền upload Dataset vào Team này.', status: 403 };
    }

    const id = `ds-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    const now = Math.floor(Date.now() / 1000);

    await db.run(
      `INSERT INTO datasets (id, team_id, project_id, name, description, source, data_type, start_date, end_date, resolution, format, file_size, storage_provider, drive_file_id, drive_folder_id, uploaded_by, tags, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, team_id, project_id, name, description, source, data_type, start_date, end_date, resolution, format, file_size, storage_provider, drive_file_id, drive_folder_id, user.id, tags, now, now]
    );

    await logActivity(db, {
      userId: user.id,
      teamId: team_id,
      projectId: project_id,
      entityType: 'dataset',
      entityId: id,
      action: 'upload_dataset',
      metadata: { name, format, file_size, storage_provider: 'google_drive', drive_file_id }
    });

    return { success: true, dataset: { id, team_id, project_id, name, source, data_type, resolution, format, file_size, storage_provider, drive_file_id, drive_folder_id, tags } };
  }

  // 3. GET /api/datasets/:id
  if (dsId && method === 'GET') {
    const ds = await db.first('SELECT * FROM datasets WHERE id = ?', [dsId]);
    if (!ds) return { error: 'Không tìm thấy Dataset.', status: 404 };

    if (!RBAC.canAccessResource(user, ds)) {
      return { error: 'Forbidden: Bạn không có quyền xem Dataset này.', status: 403 };
    }

    const team = await db.first('SELECT id, name, slug FROM teams WHERE id = ?', [ds.team_id]);
    const project = ds.project_id ? await db.first('SELECT id, name, slug FROM projects WHERE id = ?', [ds.project_id]) : null;
    const uploader = await db.first('SELECT id, COALESCE(display_name, name) as name, email, avatar_url FROM users WHERE id = ?', [ds.uploaded_by]);

    return {
      success: true,
      dataset: {
        ...ds,
        team,
        project,
        uploader,
        canDelete: RBAC.canDeleteResource(user, ds)
      }
    };
  }

  // 4. DELETE /api/datasets/:id
  if (dsId && method === 'DELETE') {
    const ds = await db.first('SELECT * FROM datasets WHERE id = ?', [dsId]);
    if (!ds) return { error: 'Không tìm thấy Dataset.', status: 404 };

    if (!RBAC.canDeleteResource(user, ds)) {
      return { error: 'Forbidden: Bạn không có quyền xóa Dataset này.', status: 403 };
    }

    // Delete Google Drive file
    if (ds.drive_file_id) {
      await StorageService.deleteFile({ fileId: ds.drive_file_id, env });
    }

    await db.run('DELETE FROM datasets WHERE id = ?', [ds.id]);

    await logActivity(db, {
      userId: user.id,
      teamId: ds.team_id,
      projectId: ds.project_id,
      entityType: 'dataset',
      entityId: ds.id,
      action: 'delete_dataset',
      metadata: { name: ds.name, format: ds.format, drive_file_id: ds.drive_file_id }
    });

    return { success: true, message: 'Đã xóa Dataset thành công khỏi Google Drive và hệ thống.' };
  }

  return { error: 'Method Not Allowed', status: 405 };
}
