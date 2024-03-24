import { CommonConfigKeysEnum, getClientConfig } from '@/utils';
import { OpenAPI } from '../__generated__';
import { tokenClientService } from '@/services/client/token';

OpenAPI.BASE = getClientConfig(CommonConfigKeysEnum.NEXT_PUBLIC_API_BASE_URL);
OpenAPI.TOKEN = async () => tokenClientService.get.access() || '';
