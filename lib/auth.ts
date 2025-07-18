import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './db';
import { hashPassword, verifyPassword } from './password';

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
          console.log('Missing credentials');
          return null;
        }

        try {
          console.log('Attempting to authenticate user:', credentials.email);
          
          const user = await prisma.admin_users.findUnique({
            where: { email: credentials.email as string }
          });

          if (!user) {
            console.log('User not found:', credentials.email);
            return null;
          }

          if (!user.is_active) {
            console.log('User is inactive:', credentials.email);
            return null;
          }

          console.log('User found, verifying password...');
          
          const passwordMatch = await verifyPassword(
            credentials.password as string,
            user.password
          );

          if (!passwordMatch) {
            console.log('Password mismatch for user:', credentials.email);
            return null;
          }

          console.log('Password verified successfully for user:', credentials.email);

          // Update last login
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
          console.error('Authentication error:', error);
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
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development'
});
