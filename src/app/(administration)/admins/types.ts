import { UsersService } from '@/api/generated';
import { FCWithSearchParams } from '@/types';

export type AdminsPageSearchParams = Parameters<typeof UsersService.userControllerGetAll>[0];

export type AdminsPageFC = FCWithSearchParams<AdminsPageSearchParams>;

export type AdminsDataFC = FCWithSearchParams<AdminsPageSearchParams>;

export type AdminsContainerFC = FCWithSearchParams<AdminsPageSearchParams>;
