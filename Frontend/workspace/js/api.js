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

  patch(endpoint, body) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(body)
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
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
