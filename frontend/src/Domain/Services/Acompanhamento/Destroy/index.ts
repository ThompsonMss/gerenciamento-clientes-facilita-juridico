import { APIClient } from "@Infrastructure/APIClient";
import { InterfaceRequest } from "./interfaceRequest";
import { ClientModel } from "@Domain/Models/ClientModel";

export async function destroy(props: InterfaceRequest): Promise<ClientModel> {
  const response = await APIClient.del({
    url: `client/${props.id}`,
  });

  return response;
}
