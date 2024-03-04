import { decodeJwt } from 'jose';

export const jwtService = {
  decode: <T extends Record<string, any>>(token: string) => decodeJwt<T>(token),
};
