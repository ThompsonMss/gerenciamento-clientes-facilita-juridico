import React from "react";

import { ClientModel } from "@Domain/Models/ClientModel";
import { ServiceClient } from "@Domain/Services/Clients";
import { catchError } from "@Shared/Helpers/catchError";
import { toast } from "@Shared/Helpers/toast";

export function useController() {
  const [page, setPage] = React.useState(0);
  const [totalClient, setTotalClient] = React.useState(0);

  const [load, setLoad] = React.useState(true);
  const [data, setData] = React.useState<ClientModel[]>([]);

  const numberOfPages = Math.ceil((totalClient <= 0 ? 1 : totalClient) / 20);
  const pages = new Array(numberOfPages).fill(0);

  function handlePage(page: number) {
    setPage(page);
  }

  async function getData(numberPage = 0) {
    try {
      setLoad(true);

      const [clients, dataCount] = await Promise.all([
        ServiceClient.getAll({ page: numberPage }),
        ServiceClient.count({ page: numberPage }),
      ]);

      setData(clients);
      setTotalClient(dataCount.count);
    } catch (e) {
      catchError(
        e,
        "Não foi possível carregar os clientes. Por favor, tente novamente."
      );
    } finally {
      setLoad(false);
    }
  }

  const [loadDeleteClient, setLoadDeleteClient] = React.useState<string | null>(
    null
  );

  async function handleDeleteClient(id: string) {
    try {
      setLoadDeleteClient(id);

      await ServiceClient.destroy({ id });
      setData(data.filter((item) => item.id !== id));

      toast.sucesso("Cliente excluído com sucesso.");
    } catch (e) {
      catchError(e, "Não foi possível excluir esse cliente.");
    } finally {
      setLoadDeleteClient(null);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (page !== 0) {
      getData(page);
    }
  }, [page]);

  return {
    states: {
      load,
      data,
      loadDeleteClient,
      page,
      totalClient,
      pages,
    },
    handles: {
      handleDeleteClient,
      handlePage,
    },
  };
}
