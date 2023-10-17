import { SignInResponse } from '@/api/generated';

declare module 'next-auth' {
  type User = SignInResponse;

  interface Session {
    user: User;
  }

  interface DefaultJWT extends User {}
  interface JWT extends User {}
}
