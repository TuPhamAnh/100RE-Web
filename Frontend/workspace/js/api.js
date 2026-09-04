/**
 * 100RE LAB WORKSPACE — REST API Client
 */

class ApiClient {
  constructor() {
    this.baseUrl = '';
  }

  getHeaders(extraHeaders = {}) {
    const devUserId = localStorage.getItem('ws_dev_user_id') || 'usr-sup-01';
    const token = localStorage.getItem('100re_token') || '';

    const headers = {
      'Content-Type': 'application/json',
      'X-Workspace-Client': 'true',
      'X-Dev-User-Id': devUserId,
      ...extraHeaders
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = this.getHeaders(options.headers || {});

    const config = {
      ...options,
      headers
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        let errData = {};
        try {
          errData = await response.json();
        } catch (e) {}
        const errorMsg = errData.error || `Request failed with status ${response.status}`;
        throw new Error(errorMsg);
      }
      return await response.json();
    } catch (err) {
      console.error(`API Error on [${options.method || 'GET'} ${endpoint}]:`, err);
      throw err;
    }
  }

  get(endpoint, queryParams = {}) {
    const qs = new URLSearchParams();
    Object.entries(queryParams).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') qs.append(k, v);
    });
    const queryString = qs.toString();
    const finalUrl = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(finalUrl, { method: 'GET' });
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }

  put(endpoint, body) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  }

  patch(endpoint, body) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(body)
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  async upload(formDataOrBody) {
    const devUserId = localStorage.getItem('ws_dev_user_id') || 'usr-sup-01';
    const token = localStorage.getItem('100re_token') || '';

    // If it is a FormData instance
    if (typeof FormData !== 'undefined' && formDataOrBody instanceof FormData) {
      const type = formDataOrBody.get('type') || 'document';
      const file = formDataOrBody.get('file');
      const name = formDataOrBody.get('name') || (file ? file.name : 'Untitled');
      const team_id = formDataOrBody.get('team_id');
      const project_id = formDataOrBody.get('project_id') || null;
      const description = formDataOrBody.get('description') || '';
      const tags = formDataOrBody.get('tags') || '';

      // 1. Upload file to 100RE Storage (/api/upload)
      let uploadRes = { fileId: `file_${Date.now()}`, webViewLink: 'https://100relab.com' };
      try {
        const upForm = new FormData();
        if (file) upForm.append('file', file);
        upForm.append('team_id', team_id);
        if (project_id) upForm.append('project_id', project_id);

        const upHeaders = {
          'X-Workspace-Client': 'true',
          'X-Dev-User-Id': devUserId
        };
        if (token) upHeaders['Authorization'] = `Bearer ${token}`;

        const res = await fetch(`${this.baseUrl}/api/upload`, {
          method: 'POST',
          headers: upHeaders,
          body: upForm
        });
        if (res.ok) {
          uploadRes = await res.json();
        }
      } catch (e) {
        console.warn('Storage upload fallback note:', e);
      }

      // 2. Save document or dataset record in D1 Database
      if (type === 'dataset') {
        return this.post('/api/datasets', {
          team_id,
          project_id: project_id || null,
          name,
          source: formDataOrBody.get('source') || 'Experimental Rig',
          data_type: formDataOrBody.get('data_type') || 'time-series',
          resolution: formDataOrBody.get('resolution') || '',
          format: formDataOrBody.get('format') || 'CSV',
          size_bytes: file && file.size ? file.size : 1024,
          file_name: file && file.name ? file.name : `${name}.csv`,
          drive_file_id: uploadRes.fileId || `ds_${Date.now()}`,
          tags,
          description
        });
      } else {
        return this.post('/api/documents', {
          team_id,
          project_id: project_id || null,
          title: name,
          name: name,
          doc_type: 'report',
          file_format: file && file.name ? file.name.split('.').pop().toUpperCase() : 'PDF',
          file_size_bytes: file && file.size ? file.size : 2048,
          file_name: file && file.name ? file.name : `${name}.pdf`,
          drive_file_id: uploadRes.fileId || `doc_${Date.now()}`,
          tags,
          description
        });
      }
    }

    return this.post('/api/upload', formDataOrBody);
  }

  async uploadFile(file, { teamId, projectId }) {
    const reader = new FileReader();
    const base64Data = await new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    return this.post('/api/upload', {
      fileName: file.name,
      fileType: file.type || 'application/octet-stream',
      teamId,
      projectId,
      base64Data
    });
  }

  downloadFile(entityType, id, filename = 'download') {
    const devUserId = localStorage.getItem('ws_dev_user_id') || 'usr-sup-01';
    const downloadUrl = `/api/files/${entityType}/${id}/download`;

    // Fetch with auth headers and trigger browser download
    fetch(downloadUrl, {
      headers: {
        'X-Workspace-Client': 'true',
        'X-Dev-User-Id': devUserId
      }
    })
    .then(res => {
      if (!res.ok) throw new Error('Download failed: Permission Denied or File Not Found');
      return res.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch(err => {
      alert(`Download error: ${err.message}`);
    });
  }
}

export const API = new ApiClient();
