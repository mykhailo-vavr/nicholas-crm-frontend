import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { AuthService } from '@/api/generated';
import { webRoutes } from './routes';

export const authOptions: NextAuthOptions = {
  session: {
    maxAge: 3600,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const user = await AuthService.authControllerSignIn({
          requestBody: { email: credentials.email, password: credentials.password },
        });

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      return { user: user || token.user, token };
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  pages: { signIn: webRoutes.public.SIGN_IN },
};
