"use server";
import { PrismaClient } from ".prisma/client";
import ShortUniqueId from "short-unique-id";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
const prisma = new PrismaClient();
const uid = new ShortUniqueId();

export async function registerUser({ email, password }) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = uid.rnd(32);
    const uidWithTimestamp = uid.stamp(32);
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
    } else {
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
        token: token,
      };
    }
  } catch (e) {
    return {
      status: 400,
      message: "Cannot register user",
      isRegistered: false,
    };
  }
}

export async function getSesions() {
  const sessions = await getServerSession(authOptions);
  return sessions;
}
