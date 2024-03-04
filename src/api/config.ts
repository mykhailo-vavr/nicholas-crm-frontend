import { ServerConfigKeysEnum, getServerConfig } from '@/utils';
import { OpenAPI } from './__generated__';

OpenAPI.BASE = getServerConfig(ServerConfigKeysEnum.API_BASE_URL);
OpenAPI.TOKEN = '';
