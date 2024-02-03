import React from "react";

import { ClientModel } from "@Domain/Models/ClientModel";
import { ServiceClient } from "@Domain/Services/Clients";
import { catchError } from "@Shared/Helpers/catchError";
import { toast } from "@Shared/Helpers/toast";
import { useNavigate } from "react-router-dom";
import { nameOfroutes } from "@Routes/nameOfroutes";
import { InterfaceFilters } from "@Domain/Services/Clients/GetAll/interfaceRequest";
import { ServiceRoute } from "@Domain/Services/Route";
import { InterfaceResponseCalculateRoute } from "@Domain/Services/Route/CalculateRoute/interfaceResponse";

const defaultValuesFilters: InterfaceFilters = {
  name: "",
  email: "",
  phone: "",
};

export function useController() {
  const navigate = useNavigate();

  const [onFilters, setOnFilters] =
    React.useState<InterfaceFilters>(defaultValuesFilters);
  const [filters, setFilters] =
    React.useState<InterfaceFilters>(defaultValuesFilters);
  const [showModalFilters, setShowModalFilters] = React.useState(false);

  const hasFilters = React.useMemo(() => {
    let has = false;

    Object.values(onFilters).map((value) => {
      if (value !== null && value !== undefined && value !== "") {
        has = true;
      }
    });

    return has;
  }, [onFilters]);

  const [page, setPage] = React.useState(1);
  const [totalClient, setTotalClient] = React.useState(0);

  const [load, setLoad] = React.useState(true);
  const [data, setData] = React.useState<ClientModel[]>([]);

  const numberOfPages = Math.ceil((totalClient <= 0 ? 1 : totalClient) / 20);
  const pages = new Array(numberOfPages).fill(0);

  function handleRegisterClient() {
    navigate(nameOfroutes.clientsRegister);
  }

  function handleUpdateClient(client: ClientModel) {
    navigate(nameOfroutes.clientsUpdate, { state: { client } });
  }

  function handlePage(page: number) {
    setPage(page);
  }

  function handleFilters(key: keyof InterfaceFilters, value: any) {
    setFilters((prevState) => ({ ...prevState, [key]: value }));
  }

  function handleDoFilter() {
    setOnFilters(filters);
    setShowModalFilters(false);
  }

  function handleClearFilters() {
    setFilters(defaultValuesFilters);
    setOnFilters(defaultValuesFilters);
    setShowModalFilters(false);
  }

  async function getData(numberPage = 1, filters?: InterfaceFilters) {
    try {
      setLoad(true);

      const params: { page: number; filters?: InterfaceFilters } = {
        page: numberPage,
      };

      if (filters) {
        const filtersValid: any = {};

        Object.entries(filters).map((filter) => {
          const [key, value] = filter;

          if (!!key && value !== null && value !== undefined && value !== "") {
            filtersValid[key] = value;
          }
        });

        params.filters = filtersValid;
        params.page = 1;
      }

      const [clients, dataCount] = await Promise.all([
        ServiceClient.getAll(params),
        ServiceClient.count(params),
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

  function handleShowModalFilters(value: boolean) {
    setShowModalFilters(value);
  }

  React.useEffect(() => {
    getData(page, onFilters);
  }, [page, onFilters]);

  /**
   * CONTROLER PARA CALCULAR ROTA
   */

  const [loadCalcRoute, setLoadCalcRoute] = React.useState(false);
  const [showModalRoute, setShowModalRoute] = React.useState(false);
  const [dataRoute, setDataRoute] =
    React.useState<InterfaceResponseCalculateRoute>({
      clients: [],
      totalDistance: 0,
    });

  function handleShowModalRoute(value: boolean) {
    if (value) {
      setShowModalRoute(true);
      getDataRoute();
    } else {
      setShowModalRoute(false);
      setDataRoute({
        clients: [],
        totalDistance: 0,
      });
    }
  }

  async function getDataRoute() {
    try {
      setLoadCalcRoute(true);

      const response = await ServiceRoute.calculateRoute();
      setDataRoute(response);
    } catch (e) {
      catchError(e);
    } finally {
      setLoadCalcRoute(false);
    }
  }

  return {
    states: {
      load,
      data,
      loadDeleteClient,
      page,
      totalClient,
      pages,
      filters,
      showModalFilters,
      hasFilters,
      loadCalcRoute,
      showModalRoute,
      dataRoute,
    },
    handles: {
      handleDeleteClient,
      handlePage,
      handleRegisterClient,
      handleUpdateClient,
      handleClearFilters,
      handleFilters,
      handleDoFilter,
      handleShowModalFilters,
      handleShowModalRoute,
    },
  };
}
