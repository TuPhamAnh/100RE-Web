import { extractToken, verifyToken, ADMIN_USERNAME, jsonResponse } from "./_utils.js";

export async function onRequestGet({ request, env }) {
  const token = extractToken(request);
  const isValid = await verifyToken(token, env);
  return jsonResponse({
    authenticated: isValid,
    user: isValid ? ((env && env.ADMIN_USERNAME) || ADMIN_USERNAME) : null
  });
}
