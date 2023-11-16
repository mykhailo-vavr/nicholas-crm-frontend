/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GenderEnum } from './GenderEnum';
import type { GiftSubtypeEnum } from './GiftSubtypeEnum';
import type { GiftTypeEnum } from './GiftTypeEnum';

export type CreateGiftResponse = {
    type: GiftTypeEnum;
    subtype: GiftSubtypeEnum;
    forGender: GenderEnum;
    id: number;
    name: string;
    description: string | null;
    minAge: number;
    maxAge: number;
    requiredQuantity: number | null;
    currentQuantity: number;
    createdAt: string;
    updatedAt: string;
};
