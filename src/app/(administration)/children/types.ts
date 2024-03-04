import { ChildService } from '@/api/__generated__';
import { FCWithSearchParams } from '@/types';

export type ChildrenPageSearchParams = Parameters<typeof ChildService.childControllerGetAll>[0];

export type ChildrenPageFC = FCWithSearchParams<ChildrenPageSearchParams>;

export type ChildrenDataFC = FCWithSearchParams<ChildrenPageSearchParams>;

export type ChildrenContainerFC = FCWithSearchParams<ChildrenPageSearchParams>;
