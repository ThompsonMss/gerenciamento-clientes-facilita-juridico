import { ClientModel } from "@Domain/Models/ClientModel";

export interface InterfaceRequest
  extends Omit<
    ClientModel,
    "id" | "dddphone" | "createdat" | "updatedat" | "deletedat"
  > {}
