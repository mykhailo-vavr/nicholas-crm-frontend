/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignInDto } from '../models/SignInDto';
import type { SignInResponse } from '../models/SignInResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @returns SignInResponse 
     * @throws ApiError
     */
    public static authControllerSignIn({
requestBody,
}: {
requestBody: SignInDto,
}): CancelablePromise<SignInResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/sign-in',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
