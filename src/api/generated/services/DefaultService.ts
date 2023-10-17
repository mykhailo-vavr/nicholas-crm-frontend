/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAddressDto } from '../models/CreateAddressDto';
import type { CreateChildDto } from '../models/CreateChildDto';
import type { UpdateChildDto } from '../models/UpdateChildDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @returns any 
     * @throws ApiError
     */
    public static appControllerHealth(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static addressControllerCreate({
requestBody,
}: {
requestBody: CreateAddressDto,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/addresses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static addressControllerGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/addresses',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static addressControllerGetByPk({
id,
}: {
id: number,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/addresses/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static addressControllerDelete({
id,
}: {
id: number,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/addresses/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static childControllerCreate({
requestBody,
}: {
requestBody: CreateChildDto,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/children',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static childControllerGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/children',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static childControllerDelete({
id,
}: {
id: number,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/children/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static childControllerGetByPk({
id,
}: {
id: number,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/children/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static childControllerUpdate({
id,
requestBody,
}: {
id: number,
requestBody: UpdateChildDto,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/children/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
