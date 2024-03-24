import { CookieStorageService } from '@/types';
import { jwtService } from './jwt';

export enum TokensTypesEnum {
  ACCESS = 'accessToken',
}

export class TokenService {
  constructor(private readonly cookieStorageService: CookieStorageService) {}

  get get() {
    return {
      access: () => this.cookieStorageService.get(TokensTypesEnum.ACCESS),
    };
  }

  get set() {
    return {
      access: (token: string) => {
        const expiresInSec = jwtService.decode(token).exp;
        const expiresInMs = expiresInSec && expiresInSec * 1000;

        this.cookieStorageService.set(TokensTypesEnum.ACCESS, token, { expires: expiresInMs });
      },
    };
  }

  get delete() {
    return {
      access: () => this.cookieStorageService.delete(TokensTypesEnum.ACCESS),
    };
  }
}
