/**
 * 100RE LAB WORKSPACE — Storage API Routes
 * Service Provider: Google Drive 5TB File Storage
 */

import { RBAC } from '../rbac.js';
import { StorageService } from '../storage/index.js';

export async function handleUpload(request, user, db, env) {
  if (!user || user.role === RBAC.ROLE_ALUMNI) {
    return new Response(JSON.stringify({ error: 'Forbidden: Bạn không có quyền upload file.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  }

  const contentType = request.headers.get('content-type') || '';
  let fileName = 'file.bin';
  let fileType = 'application/octet-stream';
  let fileData = null;
  let teamId = 'general';
  let projectId = 'general';
  let folderId = null;

  if (contentType.includes('application/json')) {
    const body = await request.json();
    fileName = body.fileName || body.filename || 'uploaded_file.dat';
    fileType = body.fileType || body.filetype || body.mimeType || 'application/octet-stream';
    teamId = body.teamId || body.team_id || 'general';
    projectId = body.projectId || body.project_id || 'general';
    folderId = body.folderId || body.drive_folder_id || null;

    if (body.base64Data) {
      const binaryStr = atob(body.base64Data.replace(/^data:.*?;base64,/, ''));
      const bytes = new Uint8Array(binaryStr.length);
      for (let i = 0; i < binaryStr.length; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
      }
      fileData = bytes.buffer;
    }
  } else if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const file = formData.get('file');
    teamId = formData.get('team_id') || formData.get('teamId') || 'general';
    projectId = formData.get('project_id') || formData.get('projectId') || 'general';
    folderId = formData.get('drive_folder_id') || null;

    if (file && typeof file === 'object') {
      fileName = file.name || 'uploaded_file.dat';
      fileType = file.type || 'application/octet-stream';
      fileData = await file.arrayBuffer();
    }
  }

  if (!fileData) {
    const enc = new TextEncoder();
    fileData = enc.encode(`100RE Laboratory Research File: ${fileName}\nUploaded: ${new Date().toISOString()}`).buffer;
  }

  // Upload to Google Drive
  const driveResult = await StorageService.uploadFile({
    name: fileName,
    mimeType: fileType,
    content: fileData,
    folderId,
    metadata: { teamId, projectId, uploadedBy: user.id },
    env
  });

  return new Response(JSON.stringify({
    success: true,
    storage_provider: 'google_drive',
    drive_file_id: driveResult.driveFileId,
    drive_folder_id: driveResult.folderId,
    web_view_link: driveResult.webViewLink,
    file_name: fileName,
    mime_type: fileType,
    file_size: driveResult.size
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function handleDownload(request, user, db, env) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(Boolean); // ['api', 'files', ':entityType', ':id', 'download' | 'open']
  const entityType = pathParts[2]; // 'documents' or 'datasets'
  const entityId = pathParts[3];
  const action = pathParts[4] || 'download'; // 'download' or 'open'

  if (!entityType || !entityId) {
    return new Response('Not Found', { status: 404 });
  }

  let resource = null;
  if (entityType === 'documents' || entityType === 'document') {
    resource = await db.first('SELECT * FROM documents WHERE id = ?', [entityId]);
  } else if (entityType === 'datasets' || entityType === 'dataset') {
    resource = await db.first('SELECT * FROM datasets WHERE id = ?', [entityId]);
  }

  if (!resource) {
    return new Response('Resource Not Found', { status: 404 });
  }

  // Authoritative Security RBAC check
  if (!RBAC.canAccessResource(user, resource)) {
    return new Response(JSON.stringify({ error: '403 Forbidden: Bạn không có quyền truy cập file này.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const driveFileId = resource.drive_file_id;
  const fileName = resource.file_name || resource.name || 'download';
  const fileType = resource.mime_type || (resource.format === 'CSV' ? 'text/csv' : 'application/octet-stream');

  // If action is open / view in Google Drive
  if (action === 'open') {
    return new Response(JSON.stringify({
      success: true,
      web_view_link: `https://drive.google.com/file/d/${driveFileId}/view`,
      drive_file_id: driveFileId,
      name: fileName
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Download from Google Drive Storage Service
  const downloadRes = await StorageService.downloadFile({ fileId: driveFileId, env });

  return new Response(downloadRes.data, {
    status: 200,
    headers: {
      'Content-Type': downloadRes.contentType || fileType,
      'Content-Disposition': `attachment; filename="${encodeURIComponent(fileName)}"`,
      'Cache-Control': 'private, no-cache'
    }
  });
}
