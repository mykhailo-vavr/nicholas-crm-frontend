import { cookies } from 'next/headers';
import { CookieStorageService } from '@/types';

export const cookieStorageServerService: CookieStorageService = {
  get: (key) => cookies().get(key)?.value || null,
  set: (key, value, options) => cookies().set(key, String(value), options),
  delete: (key) => cookies().delete(key),
};
