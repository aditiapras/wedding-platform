"use server";
import { PrismaClient } from ".prisma/client";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

export async function registerUser({ email, password, username }) {
  const res = await axios.post(`${process.env.NEXTAUTH_URL}/api/register`, {
    email,
    password,
    username,
  });

  return res.data;
}

export async function getSesions() {
  const sessions = await getServerSession(authOptions);
  return sessions;
}

export async function verifyAccount(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const res = await axios.post(
      `${process.env.NEXTAUTH_URL}/api/token-verify`,
      {
        token,
      }
    );
    const id = await prisma.users.findMany({
      where: {
        email: decoded.email,
      },
    });

    const user = await prisma.users.update({
      where: {
        id: id[0].id,
      },
      data: {
        Auth: {
          update: {
            isVerified: true,
          },
        },
      },
    });
  } catch (error) {
    return {
      isVerified: false,
    };
  }

  return res.data;
}

export async function createNewToken(email) {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });

  return token;
}
