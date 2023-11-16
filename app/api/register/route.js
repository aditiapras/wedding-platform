import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import ShortUniqueId from "short-unique-id";
import bcrypt from "bcrypt";

const uid = new ShortUniqueId();
const prisma = new PrismaClient();

export async function POST(req) {
  const { username, password, email } = await req.json();
  const uidWithTimestamp = uid.stamp(32);
  const token = uid.rnd(32);
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const userExist = await prisma.users.findMany({
      where: {
        email,
      },
    });
    if (userExist.length > 0) {
      return NextResponse.json({
        status: 400,
        message: "User already exists",
        isRegistered: false,
      });
    }
    const users = await prisma.users.create({
      data: {
        id: uidWithTimestamp,
        username,
        password: hashedPassword,
        email,
        Auth: {
          create: {
            token: token,
            confirmation_token: token,
            oAuth: false,
            isVerified: false,
          },
        },
      },
    });
    return NextResponse.json({
      status: 200,
      message: "User created successfully",
      isRegistered: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 400,
      message: "Something went wrong",
    });
  }
}
