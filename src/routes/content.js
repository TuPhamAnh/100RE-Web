/**
 * 100RE LABORATORY - Public Content KV Controller
 * Synchronizes News, Journey, Research Areas, Projects, Publications, and Photos with Cloudflare KV
 */

export async function handlePublicContent(request, env, collectionKey) {
  const method = request.method;

  if (method === 'GET') {
    if (env && env.MEMBERS_KV) {
      try {
        const raw = await env.MEMBERS_KV.get('content_' + collectionKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          return parsed;
        }
      } catch (e) {
        console.error('Error fetching KV content_' + collectionKey, e);
      }
    }
    return { notFound: true, message: 'Collection not customized in KV, use default dataset.' };
  }

  if (method === 'PUT' || method === 'POST') {
    try {
      const body = await request.json();
      const items = Array.isArray(body) ? body : (body.items || body.data || []);
      
      if (env && env.MEMBERS_KV) {
        await env.MEMBERS_KV.put('content_' + collectionKey, JSON.stringify(items));
        return { success: true, count: items.length, collection: collectionKey, timestamp: new Date().toISOString() };
      }
      return { success: true, count: items.length, collection: collectionKey, mocked: true };
    } catch (e) {
      return { error: 'Failed to update KV content: ' + e.message };
    }
  }

  return { error: 'Method Not Allowed' };
}
