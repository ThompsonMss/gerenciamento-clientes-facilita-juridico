import React from "react";

import { catchError } from "@Shared/Helpers/catchError";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { InterfaceFormInput } from "../Interfaces/InterfaceFormInput";

import { toast } from "@Shared/Helpers/toast";
import { Mask } from "@Shared/Helpers/Mask";
import { ServiceClient } from "@Domain/Services/Clients";
import { useLocation, useNavigate } from "react-router-dom";
import { nameOfroutes } from "@Routes/nameOfroutes";

const initDefaultValues = {
  name: "",
  email: "",
  phone: "",
  xcoordinate: "",
  ycoordinate: "",
};

export function useController() {
  const navigate = useNavigate();
  const location = useLocation();

  const dataEdit = location.state
    ? location.state?.client
      ? location.state?.client
      : false
    : false;

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
      xcoordinate: yup
        .number()
        .integer("A coordenada deve ser um número inteiro.")
        .nullable(),
      ycoordinate: yup
        .number()
        .integer("A coordenada deve ser um número inteiro.")
        .nullable(),
    })
    .required();

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<InterfaceFormInput>({
    resolver: yupResolver(schema),
    defaultValues: initDefaultValues,
  });

  const [loadSubmit, setLoadSubmit] = React.useState(false);

  const onSubmit: SubmitHandler<InterfaceFormInput> = async (dataSubmit) => {
    try {
      setLoadSubmit(true);

      if (dataEdit) {
        await ServiceClient.update({
          id: dataEdit.id,
          data: {
            name: dataSubmit.name,
            email: dataSubmit.email,
            phone: Mask.telefone.removeMask(dataSubmit.phone),
            xcoordinate: dataSubmit.xcoordinate
              ? parseInt(dataSubmit.xcoordinate)
              : undefined,
            ycoordinate: dataSubmit.ycoordinate
              ? parseInt(dataSubmit.ycoordinate)
              : undefined,
          },
        });

        toast.sucesso("Cliente atualizado com sucesso.");
      } else {
        await ServiceClient.register({
          name: dataSubmit.name,
          email: dataSubmit.email,
          phone: Mask.telefone.removeMask(dataSubmit.phone),
          xcoordinate: dataSubmit.xcoordinate
            ? parseInt(dataSubmit.xcoordinate)
            : undefined,
          ycoordinate: dataSubmit.ycoordinate
            ? parseInt(dataSubmit.ycoordinate)
            : undefined,
        });

        toast.sucesso("Cliente cadastrado com sucesso.");
      }

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
    if (dataEdit) {
      setValue("name", dataEdit.name);
      setValue("email", dataEdit.email);
      setValue(
        "phone",
        Mask.telefone.setMask(`${dataEdit.dddphone}${dataEdit.phone}`)
      );

      setValue("xcoordinate", dataEdit.xcoordinate ? dataEdit.xcoordinate : "");
      setValue("ycoordinate", dataEdit.ycoordinate ? dataEdit.ycoordinate : "");
    }
  }

  React.useEffect(() => {
    if (dataEdit) {
      populateForm();
    }
  }, [dataEdit]);

  function handleGoBack() {
    navigate(nameOfroutes.clients);
  }

  return {
    states: {
      errors,
      control,
      loadSubmit,
    },

    handlers: {
      handleSubmit: handleSubmit(onSubmit),
      handleGoBack,
    },
    refs: {},
  };
}
