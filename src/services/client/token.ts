import { TokenService } from '../common';
import { cookieStorageClientService } from './cookie-storage';

export const tokenClientService = new TokenService(cookieStorageClientService);
