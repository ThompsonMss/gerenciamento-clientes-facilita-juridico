import { InterfaceAPIClientQueryParams } from "../interfaces";

export function constructQueryParams(
  endpoint: string,
  queryParams?: Array<InterfaceAPIClientQueryParams>
) {
  if (queryParams !== undefined) {
    if (Array.isArray(queryParams)) {
      if (queryParams.length > 0) {
        const contem = endpoint.includes("?");
        let stringQueryParams = `${!contem ? "?" : ""}`;

        queryParams.map((item) => {
          stringQueryParams += `${item.key}=${encodeURIComponent(item.value)}&`;
        });

        return (endpoint += stringQueryParams);
      }
    }
  }

  return endpoint;
}
