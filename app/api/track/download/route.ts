import { getPool } from "@/lib/db";

export async function POST() {
  const pool = getPool();
  await pool.query(
    "CREATE TABLE IF NOT EXISTS downloads (id SERIAL PRIMARY KEY, downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
  );
  await pool.query("INSERT INTO downloads DEFAULT VALUES");
  return Response.json({ ok: true });
}
