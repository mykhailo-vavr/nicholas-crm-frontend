/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolesEnum } from './RolesEnum';

export type UserBaseResponse = {
    role: RolesEnum;
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    isActive: boolean;
    deactivationReason: string | null;
    createdAt: string;
    updatedAt: string;
};
