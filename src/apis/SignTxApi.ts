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

export interface SignatransactionRequest {
    accountName: any;
    accept: any;
    xVAULTREQUEST: any;
    xVAULTTOKEN: any;
    body: any | null;
}

/**
 * 
 */
export class SignTxApi extends runtime.BaseAPI {

    /**
     * sign a transaction
     */
    async signatransactionRaw(requestParameters: SignatransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling signatransaction.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling signatransaction.');
        }

        if (requestParameters.xVAULTREQUEST === null || requestParameters.xVAULTREQUEST === undefined) {
            throw new runtime.RequiredError('xVAULTREQUEST','Required parameter requestParameters.xVAULTREQUEST was null or undefined when calling signatransaction.');
        }

        if (requestParameters.xVAULTTOKEN === null || requestParameters.xVAULTTOKEN === undefined) {
            throw new runtime.RequiredError('xVAULTTOKEN','Required parameter requestParameters.xVAULTTOKEN was null or undefined when calling signatransaction.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling signatransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        if (requestParameters.xVAULTREQUEST !== undefined && requestParameters.xVAULTREQUEST !== null) {
            headerParameters['X-VAULT_REQUEST'] = String(requestParameters.xVAULTREQUEST);
        }

        if (requestParameters.xVAULTTOKEN !== undefined && requestParameters.xVAULTTOKEN !== null) {
            headerParameters['X-VAULT-TOKEN'] = String(requestParameters.xVAULTTOKEN);
        }

        const response = await this.request({
            path: `/accounts/{account-name}/sign-tx`.replace(`{${"account-name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * sign a transaction
     */
    async signatransaction(requestParameters: SignatransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.signatransactionRaw(requestParameters, initOverrides);
    }

}
