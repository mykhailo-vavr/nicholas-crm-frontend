import { UserService } from '@/api/generated';
import { FCWithSearchParams } from '@/types';

export type AdminsPageSearchParams = Parameters<typeof UserService.userControllerGetAll>[0];

export type AdminsPageFC = FCWithSearchParams<AdminsPageSearchParams>;

export type AdminsDataFC = FCWithSearchParams<AdminsPageSearchParams>;

export type AdminsContainerFC = FCWithSearchParams<AdminsPageSearchParams>;
