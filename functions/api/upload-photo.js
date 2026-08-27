import { extractToken, verifyToken, jsonResponse } from "./_utils.js";

export async function onRequestPost({ request, env }) {
  const token = extractToken(request);
  const isAuth = await verifyToken(token, env);
  if (!isAuth) {
    return jsonResponse({ success: false, error: "Unauthorized! Vui lòng đăng nhập." }, 401);
  }

  try {
    const payload = await request.json();
    let rawData = payload.base64Data || "";
    const origFilename = payload.filename || "photo.jpg";

    if (!rawData) {
      return jsonResponse({ success: false, error: "No image data provided" }, 400);
    }

    // Ensure full data URL format if not already
    let fullDataUrl = rawData;
    if (!rawData.startsWith("data:")) {
      fullDataUrl = `data:image/jpeg;base64,${rawData}`;
    }

    // If Cloudflare R2 is bound
    if (env && env.PHOTOS_BUCKET) {
      const ext = origFilename.split('.').pop().toLowerCase() || 'jpg';
      const fileKey = `uploads/${crypto.randomUUID()}.${ext}`;
      const base64Content = rawData.includes(',') ? rawData.split(',')[1] : rawData;
      const binaryString = atob(base64Content);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      await env.PHOTOS_BUCKET.put(fileKey, bytes, {
        httpMetadata: { contentType: `image/${ext === 'png' ? 'png' : 'jpeg'}` }
      });

      return jsonResponse({
        success: true,
        imagePath: `/api/photos/${fileKey}`
      });
    }

    // Cloudflare KV or Serverless Base64 storage
    return jsonResponse({
      success: true,
      imagePath: fullDataUrl
    });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 500);
  }
}
