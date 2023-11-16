import { GiftService } from '@/api/generated';
import { FCWithSearchParams } from '@/types';

// TODO: separate searchParams query type

export type GiftsPageSearchParams = Parameters<typeof GiftService.giftControllerGetAll>[0];

export type GiftsPageFC = FCWithSearchParams<GiftsPageSearchParams>;

export type GiftsDataFC = FCWithSearchParams<GiftsPageSearchParams>;

export type GiftsContainerFC = FCWithSearchParams<GiftsPageSearchParams>;
