/**
 * 100RE LAB WORKSPACE — Activity Logging Subsystem
 */

export async function logActivity(db, { userId, teamId = null, projectId = null, entityType, entityId, action, metadata = {} }) {
  const id = `act-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const metaStr = typeof metadata === 'string' ? metadata : JSON.stringify(metadata);
  const now = Math.floor(Date.now() / 1000);

  try {
    await db.run(
      `INSERT INTO activity_logs (id, user_id, team_id, project_id, entity_type, entity_id, action, metadata, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, userId, teamId, projectId, entityType, entityId, action, metaStr, now]
    );
  } catch (err) {
    console.error('Failed to log activity:', err);
  }
}
