/**
 * 100RE Laboratory - Cloudflare Worker Gateway
 * Architecture:
 * - Public Website: Cloudflare KV (Public Member Profiles)
 * - Lab Workspace: Cloudflare D1 (Relational Data & RBAC)
 * - File Storage: Google Drive 5TB (Documents, Datasets, Reports)
 */

import { getDatabase } from './db.js';
import { resolveUser } from './auth.js';
import { handleDashboard } from './routes/dashboard.js';
import { handleTeams } from './routes/teams.js';
import { handleProjects } from './routes/projects.js';
import { handleTasks } from './routes/tasks.js';
import { handleDocuments } from './routes/documents.js';
import { handleDatasets } from './routes/datasets.js';
import { handlePublicMembers, handleWorkspaceUsers } from './routes/members.js';
import { handleActivity } from './routes/activity.js';
import { handleUpload, handleDownload } from './routes/storage.js';
import { handleSciNoteRoutes } from './routes/scinote.js';
import { handlePublicContent } from './routes/content.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS Headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Dev-User-Id, X-Dev-User-Email, X-Workspace-Client, Cf-Access-Authenticated-User-Email, Cf-Access-Jwt-Assertion',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Initialize D1 Database
    const db = getDatabase(env);

    // =========================================================================
    // A. PUBLIC MEMBER APIS (Source of Truth: Cloudflare KV)
    // =========================================================================
    if (path === '/api/public/members' || path.startsWith('/api/public/members/')) {
      const data = await handlePublicMembers(request, env);
      return jsonResponse(data, 200, corsHeaders);
    }

    // =========================================================================
    // A2. PUBLIC & ADMIN CONTENT APIS (Cloudflare KV for News, Journey, Projects...)
    // =========================================================================
    if (path.startsWith('/api/public/content/') || path.startsWith('/api/admin/content/')) {
      const collectionKey = path.split('/').pop();
      const data = await handlePublicContent(request, env, collectionKey);
      return jsonResponse(data, 200, corsHeaders);
    }

    // =========================================================================
    // B. WORKSPACE REST APIS (Source of Truth: Cloudflare D1 & Google Drive)
    // =========================================================================

    // 1. GET /api/me (Current Authenticated Workspace User)
    if (path === '/api/me' && request.method === 'GET') {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ authenticated: false, user: null }, 200, corsHeaders);
      }
      return jsonResponse({ authenticated: true, user }, 200, corsHeaders);
    }

    // 2. GET /api/workspace/dashboard
    if (path === '/api/workspace/dashboard' && request.method === 'GET') {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized: Vui lòng đăng nhập.' }, 401, corsHeaders);
      }
      const data = await handleDashboard(user, db);
      return jsonResponse(data, 200, corsHeaders);
    }

    // 3. /api/teams*
    if (path.startsWith('/api/teams')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const res = await handleTeams(request, user, db);
      return jsonResponse(res, res.status || 200, corsHeaders);
    }

    // 4. /api/projects*
    if (path.startsWith('/api/projects')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const res = await handleProjects(request, user, db, env);
      return jsonResponse(res, res.status || 200, corsHeaders);
    }

    // 4b. SciNote ELN Routes (/api/experiments, /api/instruments, /api/protocols, /api/tasks/:id/scinote, etc.)
    if (path.startsWith('/api/experiments') || path.startsWith('/api/instruments') || path.startsWith('/api/protocols') || path.includes('/scinote') || path.includes('/steps') || path.includes('/notes') || path.includes('/sign-off')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const sciRes = await handleSciNoteRoutes(request, env, db, user, path, corsHeaders);
      if (sciRes) return sciRes;
    }

    // 5. /api/tasks*
    if (path.startsWith('/api/tasks')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const res = await handleTasks(request, user, db);
      return jsonResponse(res, res.status || 200, corsHeaders);
    }

    // 6. /api/documents*
    if (path.startsWith('/api/documents')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const res = await handleDocuments(request, user, db, env);
      return jsonResponse(res, res.status || 200, corsHeaders);
    }

    // 7. /api/datasets*
    if (path.startsWith('/api/datasets')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const res = await handleDatasets(request, user, db, env);
      return jsonResponse(res, res.status || 200, corsHeaders);
    }

    // 8. /api/activity*
    if (path.startsWith('/api/activity')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const res = await handleActivity(request, user, db);
      return jsonResponse(res, res.status || 200, corsHeaders);
    }

    // 9. /api/upload (Google Drive 5TB Storage)
    if (path === '/api/upload' && request.method === 'POST') {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      return await handleUpload(request, user, db, env);
    }

    // 10. /api/files/* (Download & Open from Google Drive)
    if (path.startsWith('/api/files/')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized: Cần đăng nhập để tải file.' }, 401, corsHeaders);
      }
      return await handleDownload(request, user, db, env);
    }

    // 11. /api/members & /api/workspace/users (Public Member KV vs Workspace User D1)
    if (path.startsWith('/api/workspace/users')) {
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const res = await handleWorkspaceUsers(request, user, db, env);
      return jsonResponse(res, res.status || 200, corsHeaders);
    }

    if (path.startsWith('/api/members')) {
      const isWorkspaceCall = request.headers.get('x-workspace-client') === 'true' || request.headers.get('x-dev-user-id');
      
      // If public request from public website
      if (!isWorkspaceCall && request.method === 'GET') {
        const data = await handlePublicMembers(request, env);
        return jsonResponse(data, 200, corsHeaders);
      }

      // If workspace authenticated call
      const { user, isAuthenticated } = await resolveUser(request, env, db);
      if (!isAuthenticated || !user) {
        return jsonResponse({ error: '401 Unauthorized.' }, 401, corsHeaders);
      }
      const res = await handleWorkspaceUsers(request, user, db, env);
      return jsonResponse(res, res.status || 200, corsHeaders);
    }

    // =========================================================================
    // =========================================================================
    // C. USER AUTHENTICATION & LOGIN (Supervisor, Team Leader, Researcher)
    // =========================================================================
    if (path === '/api/login' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { username, password } = body;
        const lowerUser = (username || '').toLowerCase().trim();

        let userProfile = null;
        if (password === '100re') {
          if (lowerUser === '100re' || lowerUser === 'admin') {
            userProfile = {
              id: 'usr-admin-01',
              username: '100re',
              name: 'System Developer & Super Admin',
              display_name: 'System Admin (100RE)',
              email: 'admin@100relab.com',
              role: 'admin',
              isSystemAdmin: true
            };
          } else if (lowerUser === 'supervisor') {
            userProfile = {
              id: 'usr-sup-01',
              username: 'supervisor',
              name: 'Assoc. Prof. Nguyen Duc Tuyen',
              display_name: 'Assoc. Prof. Nguyen Duc Tuyen (Supervisor)',
              email: 'supervisor@100relab.hust.edu.vn',
              role: 'supervisor',
              isSystemAdmin: false
            };
          } else if (lowerUser === 'teamleader' || lowerUser === 'leader') {
            userProfile = {
              id: 'usr-ldr-01',
              username: 'teamleader',
              name: 'Dr. Ngo Tri Duc',
              display_name: 'Dr. Ngo Tri Duc (Leader PV)',
              email: 'leader.pv@100relab.hust.edu.vn',
              role: 'team_leader',
              team: 'team-pv',
              isSystemAdmin: false
            };
          } else if (lowerUser === 'researcher') {
            userProfile = {
              id: 'usr-res-01',
              username: 'researcher',
              name: 'Bui Quang Hai',
              display_name: 'Bui Quang Hai (Researcher PV)',
              email: 'hai.ai@100relab.hust.edu.vn',
              role: 'researcher',
              team: 'team-pv',
              isSystemAdmin: false
            };
          }
        }

        // Check custom users created dynamically by Supervisor
        if (!userProfile && env && env.MEMBERS_KV) {
          try {
            const customCredRaw = await env.MEMBERS_KV.get('user_cred_' + lowerUser);
            if (customCredRaw) {
              const cred = JSON.parse(customCredRaw);
              if (cred && cred.password === password) {
                userProfile = {
                  id: cred.userId || cred.id,
                  username: cred.username,
                  name: cred.display_name || cred.name,
                  display_name: cred.display_name || cred.name,
                  email: cred.email,
                  role: cred.role || 'researcher',
                  permissions: cred.permissions || [],
                  teams: cred.teams || [],
                  isSystemAdmin: false
                };
              }
            }
          } catch(e) {}
        }

        if (userProfile) {
          const token = crypto.randomUUID();
          if (env && env.MEMBERS_KV) {
            await env.MEMBERS_KV.put(`session_${token}`, JSON.stringify(userProfile), { expirationTtl: 86400 * 7 });
          }
          return jsonResponse({
            success: true,
            token,
            user: userProfile.username,
            userId: userProfile.id,
            role: userProfile.role,
            display_name: userProfile.display_name,
            isSystemAdmin: !!userProfile.isSystemAdmin,
            permissions: userProfile.permissions || []
          }, 200, corsHeaders);
        } else {
          return jsonResponse({
            success: false,
            error: 'Sai tên đăng nhập hoặc mật khẩu!'
          }, 401, corsHeaders);
        }
      } catch (e) {
        return jsonResponse({ success: false, error: 'Bad request: ' + e.message }, 400, corsHeaders);
      }
    }

    if (path === '/api/auth-status' && request.method === 'GET') {
      const authHeader = request.headers.get('Authorization') || '';
      const token = authHeader.replace(/^Bearer\s+/i, '').trim();

      if (!token) {
        return jsonResponse({ authenticated: false }, 200, corsHeaders);
      }
      if (env && env.MEMBERS_KV) {
        const sessionRaw = await env.MEMBERS_KV.get(`session_${token}`);
        if (sessionRaw) {
          try {
            const parsed = JSON.parse(sessionRaw);
            return jsonResponse({ authenticated: true, user: parsed.display_name || parsed.username || 'supervisor', role: parsed.role, userId: parsed.id }, 200, corsHeaders);
          } catch(e) {
            return jsonResponse({ authenticated: true, user: sessionRaw, role: 'supervisor', userId: 'usr-sup-01' }, 200, corsHeaders);
          }
        }
      }
      return jsonResponse({ authenticated: true, user: 'Assoc. Prof. Nguyen Duc Tuyen', role: 'supervisor', userId: 'usr-sup-01' }, 200, corsHeaders);
    }

    if (path === '/api/logout' && request.method === 'POST') {
      const authHeader = request.headers.get('Authorization') || '';
      const token = authHeader.replace(/^Bearer\s+/i, '').trim();
      if (token && env && env.MEMBERS_KV) {
        await env.MEMBERS_KV.delete(`session_${token}`);
      }
      return jsonResponse({ success: true }, 200, corsHeaders);
    }

    // =========================================================================
    // D. STATIC ASSETS & WORKSPACE SPA ROUTING
    // =========================================================================
    if (env && env.ASSETS) {
      if (path === '/workspace' || path === '/workspace/' || path.startsWith('/workspace/')) {
        const hasExtension = /\.[a-zA-Z0-9]+$/.test(path);
        if (!hasExtension) {
          const spaRequest = new Request(`${url.origin}/workspace/index.html`, request);
          return env.ASSETS.fetch(spaRequest);
        }
      }
      return env.ASSETS.fetch(request);
    }

    return new Response('100RE Laboratory Worker Gateway Running', { status: 200 });
  }
};

export function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers
    }
  });
}
