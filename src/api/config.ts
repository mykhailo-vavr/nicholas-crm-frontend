import { ConfigKeysEnum, getServerApiToken, getServerConfig } from '@/utils';
import { OpenAPI } from './generated';

OpenAPI.BASE = getServerConfig(ConfigKeysEnum.API_BASE_URL);
OpenAPI.TOKEN = getServerApiToken;
