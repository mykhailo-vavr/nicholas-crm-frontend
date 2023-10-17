/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { CreateUserResponse } from '../models/CreateUserResponse';
import type { DeleteUserResponse } from '../models/DeleteUserResponse';
import type { GetAllUsersResponse } from '../models/GetAllUsersResponse';
import type { GetUserByPkResponse } from '../models/GetUserByPkResponse';
import type { IsUserTakenResponse } from '../models/IsUserTakenResponse';
import type { SortOrderEnum } from '../models/SortOrderEnum';
import type { UserSortFieldsEnum } from '../models/UserSortFieldsEnum';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @returns CreateUserResponse 
     * @throws ApiError
     */
    public static userControllerCreate({
requestBody,
}: {
requestBody: CreateUserDto,
}): CancelablePromise<CreateUserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns GetAllUsersResponse 
     * @throws ApiError
     */
    public static userControllerGetAll({
sort,
order,
search,
page,
limit,
}: {
sort?: UserSortFieldsEnum,
order?: SortOrderEnum,
search?: string,
page?: number,
limit?: number,
}): CancelablePromise<GetAllUsersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users',
            query: {
                'sort': sort,
                'order': order,
                'search': search,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * @returns DeleteUserResponse 
     * @throws ApiError
     */
    public static userControllerDelete({
id,
}: {
id: number,
}): CancelablePromise<DeleteUserResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns GetUserByPkResponse 
     * @throws ApiError
     */
    public static userControllerGetByPk({
id,
}: {
id: number,
}): CancelablePromise<GetUserByPkResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns IsUserTakenResponse 
     * @throws ApiError
     */
    public static userControllerIsTaken({
email,
phone,
}: {
email: string,
phone: string,
}): CancelablePromise<IsUserTakenResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/is-taken',
            query: {
                'email': email,
                'phone': phone,
            },
        });
    }

}
