import { APIClient } from "@Infrastructure/APIClient";
import { InterfaceResponse } from "./interfaceResponse";
import { InterfaceRequest } from "./interfaceRequest";

import { InterfaceAPIClientQueryParams } from "@Infrastructure/APIClient/interfaces";

export async function getAll(
  props: InterfaceRequest
): Promise<InterfaceResponse> {
  const queryParams: InterfaceAPIClientQueryParams[] = [];

  if (props?.filters) {
    Object.entries(props.filters).map((filter) => {
      const [key, value]: any = filter;
      queryParams.push({ key, value });
    });
  }

  if (props?.page) {
    queryParams.push({ key: "page", value: props.page });
  }

  const response = await APIClient.get({
    url: "client-count",
    queryParams: queryParams,
  });

  return response;
}
