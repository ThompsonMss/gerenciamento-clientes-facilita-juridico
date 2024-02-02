import { APIClient } from "@Infrastructure/APIClient";
import { InterfaceResponse } from "./InterfaceResponse";
import { InterfaceRequest } from "./interfaceRequest";

export async function update(props: InterfaceRequest): Promise<InterfaceResponse> {

    const response = await APIClient.put({
        url: `client/${props.id}`,
        data: props.data
    });

    return response;
}