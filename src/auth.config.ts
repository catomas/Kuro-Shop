import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

const authenticatedRoutes = ["/checkout"];

const adminRoutes = ["/admin"];

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        // Buscar el correo en la base de datos
        const user = await prisma.user.findUnique({
          where: {
            email: email.toLowerCase(),
          },
        });

        if (!user) return null;

        // Verificar la contraseña
        if (!bcryptjs.compareSync(password, user.password)) return null;

        // Si el usuario y la contraseña son correctos, retornar el usuario sin la contraseña
        const { password: _, ...rest } = user;

        return rest;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }

      return token;
    },

    session({ session, token, user }) {
      session.user = token.data as any;
      return session;
    },

    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnCheckout = authenticatedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );
      const isAmin = auth?.user?.role === "ADMIN";
      const isOnAdmin = adminRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );

      if (isOnAdmin) {
        if (isLoggedIn && isAmin) return true;
        return false; // Redirect unauthenticated users to login page
      }

      if (isOnCheckout) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
