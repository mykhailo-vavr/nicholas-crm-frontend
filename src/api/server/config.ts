import { CommonConfigKeysEnum, getClientConfig } from '@/utils';
import { OpenAPI } from '../__generated__';
import { tokenServerService } from '@/services/server/token';

OpenAPI.BASE = getClientConfig(CommonConfigKeysEnum.NEXT_PUBLIC_API_BASE_URL);
OpenAPI.TOKEN = async () => tokenServerService.get.access() || '';
