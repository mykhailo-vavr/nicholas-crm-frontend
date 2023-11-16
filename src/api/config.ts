import { ServerConfigKeysEnum, getServerApiToken, getServerConfig } from '@/utils';
import { OpenAPI } from './generated';

OpenAPI.BASE = getServerConfig(ServerConfigKeysEnum.API_BASE_URL);
OpenAPI.TOKEN = getServerApiToken;
