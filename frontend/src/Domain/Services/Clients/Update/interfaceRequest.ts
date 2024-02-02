import { ClientModel } from "@Domain/Models/ClientModel";

export interface InterfaceRequest {
  id: string;
  data: Omit<
    ClientModel,
    "id" | "dddphone" | "createdat" | "updatedat" | "deletedat"
  >;
}
