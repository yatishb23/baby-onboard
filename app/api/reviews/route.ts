import { getPool } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET() {
  const pool = getPool();
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        comment TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    const result = await pool.query(
      "SELECT id, name, rating, comment, created_at FROM reviews ORDER BY created_at DESC"
    );
    const avgResult = await pool.query(
      "SELECT COALESCE(ROUND(AVG(rating), 1), 0) as average, COUNT(*) as total FROM reviews"
    );
    return Response.json({
      reviews: result.rows,
      averageRating: parseFloat(avgResult.rows[0].average),
      totalReviews: parseInt(avgResult.rows[0].total),
    });
  } catch {
    return Response.json({ reviews: [], averageRating: 0, totalReviews: 0 });
  }
}

export async function POST(request: NextRequest) {
  const pool = getPool();
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        comment TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    const { name, rating, comment } = await request.json();
    if (!name || !rating || !comment) {
      return Response.json({ error: "name, rating, and comment are required" }, { status: 400 });
    }
    const parsedRating = parseInt(rating);
    if (parsedRating < 1 || parsedRating > 5) {
      return Response.json({ error: "rating must be between 1 and 5" }, { status: 400 });
    }
    if (name.length > 255) {
      return Response.json({ error: "name too long" }, { status: 400 });
    }
    const result = await pool.query(
      "INSERT INTO reviews (name, rating, comment) VALUES ($1, $2, $3) RETURNING id, name, rating, comment, created_at",
      [name.trim(), parsedRating, comment.trim()]
    );
    return Response.json(result.rows[0], { status: 201 });
  } catch {
    return Response.json({ error: "failed to submit review" }, { status: 500 });
  }
}
