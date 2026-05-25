import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  const secret = process.env.JWT_SECRET || "default_secret_key";
  const apiKey =
    process.env.GEMINI_API_KEY || process.env.API_KEY || "yourapikey";
  const token = jwt.sign({ api_key: apiKey }, secret, {
    expiresIn: "1h",
  });

  return NextResponse.json({
    model: "gemini-3.1-flash-live-preview",
    token: token,
  });
}
