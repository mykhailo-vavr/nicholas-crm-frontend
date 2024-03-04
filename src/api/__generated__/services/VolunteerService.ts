/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVolunteerDto } from '../models/CreateVolunteerDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VolunteerService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static volunteerControllerCreate({
        requestBody,
    }: {
        requestBody: CreateVolunteerDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/volunteer',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static volunteerControllerGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/volunteer',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static volunteerControllerDelete({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/volunteer/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static volunteerControllerGetByPk({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/volunteer/{id}',
            path: {
                'id': id,
            },
        });
    }

}
