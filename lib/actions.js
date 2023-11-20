"use server";
import { PrismaClient } from ".prisma/client";
import ShortUniqueId from "short-unique-id";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const uid = new ShortUniqueId();

export async function registerUser({ email, password, username }) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ username, email }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });
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
          username: username,
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

export async function verifyAccount(token) {}
