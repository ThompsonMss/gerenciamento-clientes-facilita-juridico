import { APIClient } from "@Infrastructure/APIClient";
import { InterfaceResponseCalculateRoute } from "./interfaceResponse";

export async function calculateRoute(): Promise<InterfaceResponseCalculateRoute> {
  const response = await APIClient.get({
    url: "calculate-route",
  });

  return response;
}
