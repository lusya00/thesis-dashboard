import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './db';
import { user_role } from '../generated/prisma';
import { verifyPassword } from './password';

interface Credentials {
  email: string;
  password: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        try {
          const user = await prisma.admin_users.findUnique({
            where: { email: credentials.email as string }
          });

          if (!user || !user.is_active) {
            return null;
          }

          const passwordMatch = await verifyPassword(
            credentials.password as string,
            user.password
          );

          if (!passwordMatch) {
            return null;
          }

          // Actualizar último inicio de sesión
          await prisma.admin_users.update({
            where: { id: user.id },
            data: { last_login: new Date() }
          });

          return {
            id: String(user.id),
            name: user.name,
            email: user.email,
            role: user.role
          };
        } catch (error) {
          console.error('Error en autenticación:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/error'
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
});
