import { NextResponse } from "next/server";
import { Pool } from "@neondatabase/serverless";

// Ensure you have NEON_DATABASE_URL in your environment variables
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token } = body;
    
    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    // Check if the token exists in the database
    const result = await pool.query(
      `SELECT id FROM access_tokens WHERE token = $1 LIMIT 1`,
      [token],
    );

    // If no rows are returned, the token does not exist
    if ((result.rowCount ?? 0) === 0) {
      return NextResponse.json({ valid: false });
    }

    return NextResponse.json({ valid: true });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
