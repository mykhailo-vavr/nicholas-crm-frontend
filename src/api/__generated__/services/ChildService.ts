/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChildSortFieldsEnum } from '../models/ChildSortFieldsEnum';
import type { CreateChildDto } from '../models/CreateChildDto';
import type { CreateChildResponse } from '../models/CreateChildResponse';
import type { DeactivateChildDto } from '../models/DeactivateChildDto';
import type { DeleteChildResponse } from '../models/DeleteChildResponse';
import type { GetAllChildrenResponse } from '../models/GetAllChildrenResponse';
import type { GetChildByPkResponse } from '../models/GetChildByPkResponse';
import type { SortOrderEnum } from '../models/SortOrderEnum';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChildService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static childControllerActivate({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/children/{id}/activate',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns CreateChildResponse
     * @throws ApiError
     */
    public static childControllerCreate({
        requestBody,
    }: {
        requestBody: CreateChildDto,
    }): CancelablePromise<CreateChildResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/children',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns GetAllChildrenResponse
     * @throws ApiError
     */
    public static childControllerGetAll({
        page,
        limit,
        search,
        sort,
        order,
    }: {
        page?: number,
        limit?: number,
        search?: string,
        sort?: ChildSortFieldsEnum,
        order?: SortOrderEnum,
    }): CancelablePromise<GetAllChildrenResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/children',
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
     * @returns any
     * @throws ApiError
     */
    public static childControllerDeactivate({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: DeactivateChildDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/children/{id}/deactivate',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns DeleteChildResponse
     * @throws ApiError
     */
    public static childControllerDelete({
        id,
    }: {
        id: number,
    }): CancelablePromise<DeleteChildResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/children/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns GetChildByPkResponse
     * @throws ApiError
     */
    public static childControllerGetByPk({
        id,
    }: {
        id: number,
    }): CancelablePromise<GetChildByPkResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/children/{id}',
            path: {
                'id': id,
            },
        });
    }

}
