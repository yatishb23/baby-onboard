import { getPool } from "@/lib/db";

export async function POST(req: Request) {
  const { path } = await req.json();
  const pool = getPool();
  await pool.query(
    "CREATE TABLE IF NOT EXISTS page_visits (id SERIAL PRIMARY KEY, path TEXT NOT NULL, visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
  );
  await pool.query("INSERT INTO page_visits (path) VALUES ($1)", [path]);
  return Response.json({ ok: true });
}
