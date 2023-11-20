import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
  const { email } = await req.json();
  const users = await prisma.users.findMany({
    where: {
      email,
    },
  });
  if (email == users[0].email) {
    return NextResponse.json({
      status: 200,
      id: users[0].id,
      username: users[0].username,
      email: users[0].email,
      password: users[0].password,
    });
  }
  return NextResponse.json({
    status: 400,
    message: "Wrong credentials",
  });
}
