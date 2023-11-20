import { NextResponse } from "next/server";

const jwt = require("jsonwebtoken");

export async function POST(req) {
  const { name, email } = await req.json();
  const token = jwt.sign({ name, email }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
  const exp = jwt.verify(token, process.env.JWT_SECRET);
  return NextResponse.json({
    message: "Token created successfully",
    exp: exp.exp,
    token: token,
  });
}
