import { ADMIN_USERNAME, ADMIN_PASSWORD, jsonResponse } from "./_utils.js";

export async function onRequestPost({ request, env }) {
  try {
    const payload = await request.json();
    const username = (payload.username || "").trim();
    const password = (payload.password || "").trim();

    const expectedUser = (env && env.ADMIN_USERNAME) || ADMIN_USERNAME;
    const expectedPass = (env && env.ADMIN_PASSWORD) || ADMIN_PASSWORD;

    if (username === expectedUser && password === expectedPass) {
      const token = crypto.randomUUID();

      // Store in KV if bound
      if (env && env.MEMBERS_KV) {
        await env.MEMBERS_KV.put(`session:${token}`, JSON.stringify({
          username,
          createdAt: Date.now()
        }), {
          expirationTtl: 86400 * 7 // 7 days session
        });
      }

      return jsonResponse({
        success: true,
        token: token,
        user: username,
        message: "Login successful"
      });
    } else {
      return jsonResponse({
        success: false,
        error: "Sai tên đăng nhập hoặc mật khẩu!"
      }, 401);
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 400);
  }
}
