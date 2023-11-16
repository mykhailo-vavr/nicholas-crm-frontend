/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { CreateUserResponse } from '../models/CreateUserResponse';
import type { DeactivateUserDto } from '../models/DeactivateUserDto';
import type { DeleteUserResponse } from '../models/DeleteUserResponse';
import type { GetAllUsersResponse } from '../models/GetAllUsersResponse';
import type { GetUserByPkResponse } from '../models/GetUserByPkResponse';
import type { IsUserTakenResponse } from '../models/IsUserTakenResponse';
import type { SortOrderEnum } from '../models/SortOrderEnum';
import type { UserSortFieldsEnum } from '../models/UserSortFieldsEnum';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns any 
     * @throws ApiError
     */
    public static userControllerActivate({
id,
}: {
id: number,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/{id}/activate',
            path: {
                'id': id,
            },
        });
    }

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
page,
limit,
search,
sort,
order,
}: {
page?: number,
limit?: number,
search?: string,
sort?: UserSortFieldsEnum,
order?: SortOrderEnum,
}): CancelablePromise<GetAllUsersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users',
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
    public static userControllerDeactivate({
id,
requestBody,
}: {
id: number,
requestBody: DeactivateUserDto,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/{id}/deactivate',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
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
