/**
 * 100RE Laboratory - Cloudflare Worker & API Gateway
 * Serves static assets from ./Frontend and handles /api/* endpoints
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS Headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // ==========================================
    // 1. API: Login
    // ==========================================
    if (path === '/api/login' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { username, password } = body;
        const validUser = env.ADMIN_USERNAME || '100re';
        const validPass = env.ADMIN_PASSWORD || '100re';

        if (username === validUser && password === validPass) {
          const token = crypto.randomUUID();
          if (env.MEMBERS_KV) {
            await env.MEMBERS_KV.put(`session_${token}`, username, { expirationTtl: 86400 * 7 });
          }
          return jsonResponse({ success: true, token, user: username }, 200, corsHeaders);
        } else {
          return jsonResponse({ success: false, error: 'Sai tên đăng nhập hoặc mật khẩu!' }, 401, corsHeaders);
        }
      } catch (e) {
        return jsonResponse({ success: false, error: 'Bad request' }, 400, corsHeaders);
      }
    }

    // ==========================================
    // 2. API: Auth Status
    // ==========================================
    if (path === '/api/auth-status' && request.method === 'GET') {
      const authHeader = request.headers.get('Authorization') || '';
      const token = authHeader.replace(/^Bearer\s+/i, '').trim();

      if (!token) {
        return jsonResponse({ authenticated: false }, 200, corsHeaders);
      }

      if (env.MEMBERS_KV) {
        const user = await env.MEMBERS_KV.get(`session_${token}`);
        if (user) return jsonResponse({ authenticated: true, user }, 200, corsHeaders);
      }

      return jsonResponse({ authenticated: true, user: '100re' }, 200, corsHeaders);
    }

    // ==========================================
    // 3. API: Logout
    // ==========================================
    if (path === '/api/logout' && request.method === 'POST') {
      const authHeader = request.headers.get('Authorization') || '';
      const token = authHeader.replace(/^Bearer\s+/i, '').trim();
      if (token && env.MEMBERS_KV) {
        await env.MEMBERS_KV.delete(`session_${token}`);
      }
      return jsonResponse({ success: true }, 200, corsHeaders);
    }

    // ==========================================
    // 4. API: Members List (GET) & Add (POST)
    // ==========================================
    if (path === '/api/members') {
      if (request.method === 'GET') {
        if (env.MEMBERS_KV) {
          const custom = (await env.MEMBERS_KV.get('members_list')) || (await env.MEMBERS_KV.get('members_data'));
          if (custom) {
            return new Response(custom, {
              headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
          }
        }
        // Fallback default members
        return jsonResponse(getDefaultMembers(), 200, corsHeaders);
      }

      if (request.method === 'POST') {
        try {
          const newMember = await request.json();
          let list = [];
          if (env.MEMBERS_KV) {
            const saved = (await env.MEMBERS_KV.get('members_list')) || (await env.MEMBERS_KV.get('members_data'));
            list = saved ? JSON.parse(saved) : getDefaultMembers();
          } else {
            list = getDefaultMembers();
          }

          if (!newMember.id) newMember.id = `${newMember.team || 'member'}_${Date.now()}`;
          list.unshift(newMember);

          if (env.MEMBERS_KV) {
            await env.MEMBERS_KV.put('members_list', JSON.stringify(list));
            await env.MEMBERS_KV.put('members_data', JSON.stringify(list));
          }

          return jsonResponse({ success: true, member: newMember }, 200, corsHeaders);
        } catch (err) {
          return jsonResponse({ success: false, error: err.message }, 500, corsHeaders);
        }
      }
    }

    // ==========================================
    // 5. API: Member Edit / Delete (PUT / DELETE /api/members/:id)
    // ==========================================
    if (path.startsWith('/api/members/')) {
      const id = decodeURIComponent(path.split('/')[3] || '');
      let list = [];
      if (env.MEMBERS_KV) {
        const saved = (await env.MEMBERS_KV.get('members_list')) || (await env.MEMBERS_KV.get('members_data'));
        list = saved ? JSON.parse(saved) : getDefaultMembers();
      } else {
        list = getDefaultMembers();
      }

      if (request.method === 'PUT') {
        const payload = await request.json();
        const idx = list.findIndex(m => String(m.id) === String(id));
        if (idx !== -1) {
          list[idx] = { ...list[idx], ...payload, id };
        } else {
          list.unshift({ id, ...payload });
        }
        if (env.MEMBERS_KV) {
          await env.MEMBERS_KV.put('members_list', JSON.stringify(list));
          await env.MEMBERS_KV.put('members_data', JSON.stringify(list));
        }
        return jsonResponse({ success: true, member: list[idx] || payload }, 200, corsHeaders);
      }

      if (request.method === 'DELETE') {
        list = list.filter(m => String(m.id) !== String(id));
        if (env.MEMBERS_KV) {
          await env.MEMBERS_KV.put('members_list', JSON.stringify(list));
          await env.MEMBERS_KV.put('members_data', JSON.stringify(list));
        }
        return jsonResponse({ success: true, id }, 200, corsHeaders);
      }
    }

    // ==========================================
    // 6. Serve Static Assets (Frontend)
    // ==========================================
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('100RE Laboratory Worker Running', { status: 200 });
  }
};

function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      ...headers
    }
  });
}

function getDefaultMembers() {
  return [
    { id: "pv-1", name: "Ngô Trí Đức", team: "pv", teamName: "PV Team", role: "PV Team", image: "assets/images/ngo_tri_duc.png", bio: "Researcher in the PV Team at 100RE Laboratory." },
    { id: "pv-2", name: "Bui Quang Minh", team: "pv", teamName: "PV Team", role: "PV Team", image: "assets/images/bui_quang_minh.jpg", bio: "Researcher in the PV Team at 100RE Laboratory." },
    { id: "ai-1", name: "Bui Quang Hai", team: "ai", teamName: "AI Team", role: "AI Team", image: "assets/images/bui_quang_hai.jpg", bio: "Researcher in the AI Team at 100RE Laboratory." },
    { id: "dr_uc-1", name: "Nguyen Tuan Anh", team: "dr_uc", teamName: "Demand Response and Unit Commitment Team", role: "Unit Commitment Team", image: "assets/images/nguyen_tuan_anh.jpg", bio: "Researcher at 100RE Laboratory. Contact: anh.nt196322@sis.hust.edu.vn" },
    { id: "dr_uc-2", name: "Le Anh Quan", team: "dr_uc", teamName: "Demand Response and Unit Commitment Team", role: "Unit Commitment Team", image: "assets/images/le_anh_quan.png", bio: "Researcher in Demand Response & Unit Commitment Team." },
    { id: "wind-1", name: "Nguyen Hoang Nam", team: "wind", teamName: "Wind Team", role: "Wind Team", image: "assets/images/nguyen_hoang_nam.jpg", bio: "Researcher in the Wind Energy Team at 100RE Laboratory." },
    { id: "wind-2", name: "Nguyễn Như Tùng", team: "wind", teamName: "Wind Team", role: "Wind Team", image: "assets/images/nguyen_nhu_tung.png", bio: "Researcher in the Wind Team at 100RE Laboratory." },
    { id: "smartgrid-1", name: "Le Ngoc Dung", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/le_ngoc_dung.jpg", bio: "Researcher in the Smart Grid Team at 100RE Laboratory." },
    { id: "smartgrid-2", name: "Duong Minh Hai", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/duong_minh_hai.png", bio: "Researcher in the Smart Grid Team at 100RE Laboratory." },
    { id: "smartgrid-3", name: "Vu Tien Dung", team: "smartgrid", teamName: "Smart Grid Team", role: "Smart Grid Team", image: "assets/images/vu_tien_dung.png", bio: "Researcher in the Smart Grid Team at 100RE Laboratory." },
    { id: "ev-1", name: "Le The Cuong", team: "ev", teamName: "Electric Vehicle", role: "Electric Vehicle Team", image: "assets/images/le_the_cuong.jpg", bio: "Researcher in the Electric Vehicle Team." },
    { id: "ev-2", name: "Dao Quoc Khanh", team: "ev", teamName: "Electric Vehicle", role: "Electric Vehicle Team", image: "assets/images/dao_quoc_khanh.jpg", bio: "Researcher in the Electric Vehicle Team." },
    { id: "hydrogen-1", name: "Nguyen Hoang Anh", team: "hydrogen", teamName: "Hydrogen Team", role: "Hydrogen Team", image: "assets/images/nguyen_hoang_anh.jpg", bio: "Researcher in the Hydrogen Team." },
    { id: "bess-1", name: "Trinh Minh Phuong", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/trinh_minh_phuong.jpg", bio: "Researcher in the BESS Team." },
    { id: "bess-2", name: "Nguyen Quang Anh", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/nguyen_quang_anh.png", bio: "Researcher in the BESS Team." },
    { id: "bess-3", name: "Tran Thi Hong Vinh", team: "bess", teamName: "BESS Team", role: "BESS Team", image: "assets/images/tran_thi_hong_vinh.png", bio: "Researcher in the BESS Team." }
  ];
}
