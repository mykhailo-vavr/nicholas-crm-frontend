/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GenderEnum } from './GenderEnum';
import type { GiftSubtypeEnum } from './GiftSubtypeEnum';
import type { GiftTypeEnum } from './GiftTypeEnum';

export type CreateGiftDto = {
    type: GiftTypeEnum;
    subtype: GiftSubtypeEnum;
    forGender: GenderEnum;
    name: string;
    description?: string;
    minAge: number;
    maxAge: number;
    currentQuantity: number;
};

