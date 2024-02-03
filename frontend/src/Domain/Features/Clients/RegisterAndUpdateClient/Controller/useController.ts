import React from "react";

import { catchError } from "@Shared/Helpers/catchError";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { InterfaceFormInput } from "../Interfaces/InterfaceFormInput";

import { toast } from "@Shared/Helpers/toast";
import { Mask } from "@Shared/Helpers/Mask";
import { ServiceClient } from "@Domain/Services/Clients";
import { useNavigate } from "react-router-dom";
import { nameOfroutes } from "@Routes/nameOfroutes";

const initDefaultValues = {
  name: "",
  email: "",
  phone: "",
};

export function useController() {
  const navigate = useNavigate();

  /**
   * CONTROLER PARA VALIDAR FORM E SUBMIT
   */

  const schema = yup
    .object({
      name: yup.string().required("Ops! O nome é obrigatório."),
      email: yup
        .string()
        .email("Insira um e-mail válido.")
        .required("Ops! O e-mail é obrigatório."),
      phone: yup
        .string()
        .min(14, "Insira telefone válido.")
        .required("Ops! O telefone é obrigatório."),
    })
    .required();

  const {
    control,
    formState: { errors },
    handleSubmit,
    // setValue,
  } = useForm<InterfaceFormInput>({
    resolver: yupResolver(schema),
    defaultValues: initDefaultValues,
  });

  const [loadSubmit, setLoadSubmit] = React.useState(false);

  const onSubmit: SubmitHandler<InterfaceFormInput> = async (dataSubmit) => {
    try {
      setLoadSubmit(true);

      await ServiceClient.register({
        name: dataSubmit.name,
        email: dataSubmit.email,
        phone: Mask.telefone.removeMask(dataSubmit.phone),
      });

      toast.sucesso("Cliente cadastrado com sucesso.");
      navigate(nameOfroutes.clients);
    } catch (e) {
      catchError(e);
    } finally {
      setLoadSubmit(false);
    }
  };

  /**
   * CONTROLER PARA POPULAR CAMPOS
   */

  function populateForm() {
    /**
     * if (data !== null) {
      setValue("tempo_medio", data.tempo_medio);
      setValue(
        "pedido_minimo",
        !!data.pedido_minimo ? Mask.dinheiro.setMask(data.pedido_minimo) : ""
      );
    }
     */
  }

  /**
 *   React.useEffect(() => {
    populateForm();
  }, [data]);
 */

  return {
    states: {
      errors,
      control,
      loadSubmit,
    },

    handlers: {
      handleSubmit: handleSubmit(onSubmit),
    },
    refs: {},
  };
}
