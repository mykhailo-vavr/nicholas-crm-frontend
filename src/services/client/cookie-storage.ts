import Cookies from 'js-cookie';
import { CookieStorageService } from '@/types';

export const cookieStorageClientService: CookieStorageService = {
  get: (key) => Cookies.get(key) || null,
  set: (key, value, options) => Cookies.set(key, String(value), options),
  delete: (key) => Cookies.remove(key),
};
