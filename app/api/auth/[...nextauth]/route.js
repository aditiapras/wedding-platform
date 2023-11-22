import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import bcrypt from "bcrypt";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await axios
          .post(`${process.env.NEXTAUTH_URL}/api/login`, {
            email,
          })
          .then((res) => {
            return res.data;
          });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!user) return null;
        if (!isPasswordValid) return null;

        console.log(`${user.username} is logged in by email`);

        return {
          id: user.id,
          name: user.username,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return true;
    },
    async session({ session }) {
      const id = await prisma.users.findMany({
        where: {
          email: session.user.email,
        },
      });
      session.user.id = id[0].id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 60 * 60 * 2,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
