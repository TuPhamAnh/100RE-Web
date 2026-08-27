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

export async function onRequestGet({ env }) {
  const members = await getMembersList(env);
  return jsonResponse(members);
}

export async function onRequestPost({ request, env }) {
  const token = extractToken(request);
  const isAuth = await verifyToken(token, env);
  if (!isAuth) {
    return jsonResponse({ success: false, error: "Unauthorized! Vui lòng đăng nhập." }, 401);
  }

  try {
    const payload = await request.json();
    const name = (payload.name || "").trim();
    const team = (payload.team || "").trim();
    const teamName = payload.teamName || team;
    const role = (payload.role || "").trim() || `${teamName} Researcher`;
    const image = (payload.image || "").trim() || "assets/images/logo.jpg";
    const bio = (payload.bio || "").trim();

    if (!name || !team) {
      return jsonResponse({ success: false, error: "Tên và Nhóm là bắt buộc" }, 400);
    }

    const newId = `${team}_${crypto.randomUUID().slice(0, 8)}`;
    const newMember = {
      id: newId,
      name,
      team,
      teamName,
      role,
      image,
      bio
    };

    const members = await getMembersList(env);
    members.push(newMember);
    await saveMembersList(members, env);

    return jsonResponse({ success: true, member: newMember }, 201);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 500);
  }
}
