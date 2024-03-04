import { cookieService } from './cookie';
import { jwtService } from './jwt';

// TODO: check possibility to refactor this service to class with dependency injection

export enum TokensTypesEnum {
  ACCESS = 'accessToken',
}

export const tokenService = {
  get: {
    access: () => cookieService.get(TokensTypesEnum.ACCESS)?.name,
  },

  set: {
    access: (token: string) =>
      cookieService.set(TokensTypesEnum.ACCESS, token, { httpOnly: true, expires: Date.now() + 60 * 60 * 1000 }),
  },

  delete: {
    access: () => cookieService.delete(TokensTypesEnum.ACCESS),
  },

  validate: {
    access: () => {
      try {
        const result = jwtService.decode(tokenService.get.access() || '');

        if (Number(result?.exp) * 1000 < Date.now()) {
          return false;
        }
      } catch {
        return false;
      }

      return true;
    },
  },
};
