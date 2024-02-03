import { ClientModel } from "@Domain/Models/ClientModel";

export interface InterfaceResponseCalculateRoute {
  clients: {
    distance: number;
    client: ClientModel;
  }[];
  totalDistance: number;
}
