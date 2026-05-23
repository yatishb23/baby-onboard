import { getPool } from "@/lib/db";

export async function GET() {
  const pool = getPool();
  try {
    const visitsResult = await pool.query("SELECT COUNT(*) as count FROM page_visits");
    const downloadsResult = await pool.query("SELECT COUNT(*) as count FROM downloads");
    return Response.json({
      visits: parseInt(visitsResult.rows[0].count) || 0,
      downloads: parseInt(downloadsResult.rows[0].count) || 0,
    });
  } catch {
    return Response.json({ visits: 0, downloads: 0 });
  }
}
