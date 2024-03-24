import { TokenService } from '../common';
import { cookieStorageServerService } from './cookie-storage';

export const tokenServerService = new TokenService(cookieStorageServerService);
