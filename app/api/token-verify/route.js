import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function POST(req) {
  const { token } = await req.json();
  try {
    const tokenVerify = jwt.verify(token, process.env.JWT_SECRET);
    if (!tokenVerify) {
      return NextResponse.json({
        message: "Token is invalid",
        isVerified: false,
      });
    }
    return NextResponse.json({
      message: "Token is valid",
      isVerified: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Token is invalid",
      isVerified: false,
    });
  }
}
