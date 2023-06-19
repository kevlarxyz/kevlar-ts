/* tslint:disable */
/* eslint-disable */
/**
 * Vault Ethereum Plugin
 * This is a Vault plugin that allows for the creation of Ethereum accounts and signing of transactions using those accounts. Contact Support:  Name: @kevlarxyz  Email: support@kevlar.xyz
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface Erc20approveRequest {
    accountName: any;
    accept: any;
}

export interface Erc721approveRequest {
    accountName: any;
    accept: any;
}

/**
 * 
 */
export class ApproveApi extends runtime.BaseAPI {

    /**
     * erc20 approve
     */
    async erc20approveRaw(requestParameters: Erc20approveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling erc20approve.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling erc20approve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        const response = await this.request({
            path: `/accounts/{account-name}/erc20/approve`.replace(`{${"account-name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * erc20 approve
     */
    async erc20approve(requestParameters: Erc20approveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.erc20approveRaw(requestParameters, initOverrides);
    }

    /**
     * erc721 approve
     */
    async erc721approveRaw(requestParameters: Erc721approveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling erc721approve.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling erc721approve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        const response = await this.request({
            path: `/accounts/{account-name}/erc721/approve`.replace(`{${"account-name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * erc721 approve
     */
    async erc721approve(requestParameters: Erc721approveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.erc721approveRaw(requestParameters, initOverrides);
    }

}