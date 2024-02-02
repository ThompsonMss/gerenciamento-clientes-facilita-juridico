import React from "react";

import { ClientModel } from "@Domain/Models/ClientModel";
import { ServiceClient } from "@Domain/Services/Clients";
import { catchError } from "@Shared/Helpers/catchError";

export function useController() {
  const [load, setLoad] = React.useState(true);
  const [data, setData] = React.useState<ClientModel[]>([]);

  async function getData() {
    try {
      setLoad(true);

      const response = await ServiceClient.getAll({});
      setData(response);
    } catch (e) {
      catchError(
        e,
        "Não foi possível carregar os clientes. Por favor, tente novamente."
      );
    } finally {
      setLoad(false);
    }
  }

  

  React.useEffect(() => {
    getData();
  }, []);

  return {
    states: {
      load,
      data,
    },
    handles: {},
  };
}
