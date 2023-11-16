/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateAddressDto } from './CreateAddressDto';
import type { GenderEnum } from './GenderEnum';
import type { NeedStatusEnum } from './NeedStatusEnum';

export type CreateChildDto = {
    gender: GenderEnum;
    needStatus: NeedStatusEnum;
    address: CreateAddressDto;
    firstName: string;
    lastName: string;
    birthYear: number;
    phone: string;
    notes?: string;
};
