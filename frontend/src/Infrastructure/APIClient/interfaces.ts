import { AxiosRequestConfig } from "axios";

export interface InterfaceAPIClientQueryParams {
    key: string;
    value: string | number;
}

export interface InterfaceAPIClientGetRequest {
    url: string;
    queryParams?: Array<InterfaceAPIClientQueryParams>;
}

export interface InterfaceAPIClientPostRequest {
    url: string;
    data?: any;
    config?: AxiosRequestConfig<any>;
    queryParams?: Array<InterfaceAPIClientQueryParams>;
}

export interface InterfaceAPIClientPutRequest {
    url: string;
    data?: any;
    config?: AxiosRequestConfig<any>;
    queryParams?: Array<InterfaceAPIClientQueryParams>;
}

export interface InterfaceAPIClientDeleteRequest {
    url: string;
    config?: AxiosRequestConfig<any>;
    queryParams?: Array<InterfaceAPIClientQueryParams>;
}