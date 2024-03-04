/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseAddressResponse } from './BaseAddressResponse';
import type { GenderEnum } from './GenderEnum';
import type { NeedStatusEnum } from './NeedStatusEnum';

export type DeleteChildResponse = {
    gender: GenderEnum;
    needStatus: NeedStatusEnum;
    address: BaseAddressResponse;
    id: number;
    firstName: string;
    lastName: string;
    birthYear: number;
    phone: string;
    notes: string | null;
    isActive: boolean;
    deactivationReason: string | null;
    createdAt: string;
    updatedAt: string;
};

