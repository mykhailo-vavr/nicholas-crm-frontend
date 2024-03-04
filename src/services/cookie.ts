import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export const cookieService = {
  get: (key: string) => cookies().get(key),
  set: (key: string, value: string, options?: Partial<ResponseCookie>) => cookies().set(key, value, options),
  delete: (key: string) => cookies().delete(key),
};
