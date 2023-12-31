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

export interface DeployasmartcontractRequest {
    accountName: any;
    accept: any;
}

/**
 * 
 */
export class DeployApi extends runtime.BaseAPI {

    /**
     * deploy a smart contract
     */
    async deployasmartcontractRaw(requestParameters: DeployasmartcontractRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling deployasmartcontract.');
        }

        if (requestParameters.accept === null || requestParameters.accept === undefined) {
            throw new runtime.RequiredError('accept','Required parameter requestParameters.accept was null or undefined when calling deployasmartcontract.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.accept !== undefined && requestParameters.accept !== null) {
            headerParameters['Accept'] = String(requestParameters.accept);
        }

        const response = await this.request({
            path: `/accounts/{account-name}/deploy`.replace(`{${"account-name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deploy a smart contract
     */
    async deployasmartcontract(requestParameters: DeployasmartcontractRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deployasmartcontractRaw(requestParameters, initOverrides);
    }

}
