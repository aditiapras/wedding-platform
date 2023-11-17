"use server";

import { PrismaClient } from ".prisma/client";
import ShortUniqueId from "short-unique-id";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
const uid = new ShortUniqueId();

export async function registerUser({ email, password }) {
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
        username: email.split("@")[0],
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
  } catch (e) {
    console.log(e);
    return {
      status: 400,
      message: "Cannot register user",
      isRegistered: false,
    };
  }
}
