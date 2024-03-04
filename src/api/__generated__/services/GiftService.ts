/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGiftDto } from '../models/CreateGiftDto';
import type { CreateGiftResponse } from '../models/CreateGiftResponse';
import type { DeleteGiftResponse } from '../models/DeleteGiftResponse';
import type { GetAllGiftsResponse } from '../models/GetAllGiftsResponse';
import type { GetGiftByPkResponse } from '../models/GetGiftByPkResponse';
import type { GiftSortFieldsEnum } from '../models/GiftSortFieldsEnum';
import type { IsGiftTakenResponse } from '../models/IsGiftTakenResponse';
import type { SortOrderEnum } from '../models/SortOrderEnum';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GiftService {

    /**
     * @returns CreateGiftResponse
     * @throws ApiError
     */
    public static giftControllerCreate({
        requestBody,
    }: {
        requestBody: CreateGiftDto,
    }): CancelablePromise<CreateGiftResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/gifts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns GetAllGiftsResponse
     * @throws ApiError
     */
    public static giftControllerGetAll({
        page,
        limit,
        search,
        sort,
        order,
    }: {
        page?: number,
        limit?: number,
        search?: string,
        sort?: GiftSortFieldsEnum,
        order?: SortOrderEnum,
    }): CancelablePromise<GetAllGiftsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/gifts',
            query: {
                'page': page,
                'limit': limit,
                'search': search,
                'sort': sort,
                'order': order,
            },
        });
    }

    /**
     * @returns DeleteGiftResponse
     * @throws ApiError
     */
    public static giftControllerDelete({
        id,
    }: {
        id: number,
    }): CancelablePromise<DeleteGiftResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/gifts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns GetGiftByPkResponse
     * @throws ApiError
     */
    public static giftControllerGetByPk({
        id,
    }: {
        id: number,
    }): CancelablePromise<GetGiftByPkResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/gifts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns IsGiftTakenResponse
     * @throws ApiError
     */
    public static giftControllerIsTaken({
        name,
    }: {
        name: string,
    }): CancelablePromise<IsGiftTakenResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/gifts/is-taken',
            query: {
                'name': name,
            },
        });
    }

}
