import { NextResponse } from "next/server";
import { Pool } from "@neondatabase/serverless";

// You will need to add NEON_DATABASE_URL to your environment variables
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function POST(req: Request) {
  try {
    // Generate a simple access token
    const accessToken = crypto.randomUUID();

    // Ensure the table exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS access_tokens (
        id SERIAL PRIMARY KEY,
        token VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Store in PostgreSQL database using Neon Serverless
    const result = await pool.query(
      `INSERT INTO access_tokens (token) VALUES ($1) RETURNING id`,
      [accessToken],
    );

    return NextResponse.json({
      success: true,
      tokenId: result.rows[0].id,
      accessToken,
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
