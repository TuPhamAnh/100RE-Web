import { DEFAULT_MEMBERS, extractToken, verifyToken, jsonResponse } from "../_utils.js";

async function getMembersList(env) {
  if (env && env.MEMBERS_KV) {
    const raw = await env.MEMBERS_KV.get("members_list");
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {}
    }
  }
  return DEFAULT_MEMBERS;
}

async function saveMembersList(members, env) {
  if (env && env.MEMBERS_KV) {
    await env.MEMBERS_KV.put("members_list", JSON.stringify(members));
  }
}

export async function onRequestPut({ request, params, env }) {
  const token = extractToken(request);
  const isAuth = await verifyToken(token, env);
  if (!isAuth) {
    return jsonResponse({ success: false, error: "Unauthorized! Vui lòng đăng nhập." }, 401);
  }

  const memberId = params.id;
  try {
    const payload = await request.json();
    const members = await getMembersList(env);
    let updated = null;

    for (let m of members) {
      if (m.id === memberId) {
        if (payload.name) m.name = payload.name.trim();
        if (payload.team) m.team = payload.team.trim();
        if (payload.teamName) m.teamName = payload.teamName.trim();
        if (payload.role) m.role = payload.role.trim();
        if (payload.image) m.image = payload.image.trim();
        if (payload.bio !== undefined) m.bio = payload.bio.trim();
        updated = m;
        break;
      }
    }

    if (updated) {
      await saveMembersList(members, env);
      return jsonResponse({ success: true, member: updated });
    } else {
      return jsonResponse({ success: false, error: "Member not found" }, 404);
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 500);
  }
}

export async function onRequestDelete({ request, params, env }) {
  const token = extractToken(request);
  const isAuth = await verifyToken(token, env);
  if (!isAuth) {
    return jsonResponse({ success: false, error: "Unauthorized! Vui lòng đăng nhập." }, 401);
  }

  const memberId = params.id;
  try {
    let members = await getMembersList(env);
    const initialCount = members.length;
    members = members.filter(m => m.id !== memberId);

    if (members.length < initialCount) {
      await saveMembersList(members, env);
      return jsonResponse({ success: true, message: "Member deleted" });
    } else {
      return jsonResponse({ success: false, error: "Member not found" }, 404);
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 500);
  }
}
