import axios from "axios";

import {
  InterfaceAPIClientDeleteRequest,
  InterfaceAPIClientGetRequest,
  InterfaceAPIClientPostRequest,
  InterfaceAPIClientPutRequest,
} from "./interfaces";
import { constructQueryParams } from "./functions/constructQueryParams";
import { baseURLConstants } from "@Shared/Constants/baseURLConstants";

export const api = axios.create({
  baseURL: baseURLConstants,
  timeout: 1000 * 20,
});

api.interceptors.response.use(
  function (response) {
    if (response.data !== null) {
      if (typeof response.data === "object" && !Array.isArray(response.data)) {
        if ("error" in response.data) {
          throw new Error(response.data.error, { cause: "error" });
        }
      }
    }

    return response.data;
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export function get({ url, queryParams }: InterfaceAPIClientGetRequest): any {
  return api.get(constructQueryParams(url, queryParams));
}

export function post({
  url,
  config,
  data,
  queryParams,
}: InterfaceAPIClientPostRequest): any {
  return api.post(constructQueryParams(url, queryParams), data, config);
}

export function put({
  url,
  data,
  config,
  queryParams,
}: InterfaceAPIClientPutRequest): any {
  return api.put(`${constructQueryParams(url, queryParams)}`, data, config);
}

export function del({
  url,
  config,
  queryParams,
}: InterfaceAPIClientDeleteRequest): any {
  return api.delete(`${constructQueryParams(url, queryParams)}`, config);
}

export const APIClient = {
  get: get,
  post: post,
  put: put,
  del: del,
};
