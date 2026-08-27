import { extractToken, jsonResponse } from "./_utils.js";

export async function onRequestPost({ request, env }) {
  const token = extractToken(request);
  if (token && env && env.MEMBERS_KV) {
    await env.MEMBERS_KV.delete(`session:${token}`);
  }
  return jsonResponse({ success: true, message: "Logged out" });
}
