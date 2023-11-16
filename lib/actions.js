"use server";

import { PrismaClient } from ".prisma/client";
import ShortUniqueId from "short-unique-id";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
const uid = new ShortUniqueId();

export async function register(body) {
  const user = await prisma.users.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  const uidWithTimestamp = uid.stamp(32);
  const token = uid.rnd(32);
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const userExist = await prisma.users.findMany({
      where: {
        email: body.email,
      },
    });
    if (userExist.length > 0) {
      return {
        status: 400,
        message: "User already exists",
        isRegistered: false,
      };
    }
    const users = await prisma.users.create({
      data: {
        id: uidWithTimestamp,
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
    return {
      status: 200,
      message: "User created successfully",
      isRegistered: true,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 400,
      message: "Something went wrong",
    };
  }
}
