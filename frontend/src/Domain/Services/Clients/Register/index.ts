import { APIClient } from "@Infrastructure/APIClient";
import { InterfaceResponse } from "./InterfaceResponse";
import { InterfaceRequest } from "./interfaceRequest";

export async function register(props: InterfaceRequest): Promise<InterfaceResponse> {

    const response = await APIClient.post({
        url: 'client',
        data: props
    });

    return response;
}