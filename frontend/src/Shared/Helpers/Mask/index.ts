import { ddd } from "./ddd";
import { telefone } from "./telefone";
import { celular } from "./celular";
import { inteiro } from "./inteiro";

export const Mask = {
  ddd,
  telefone,
  celular,
  inteiro,
};

export type IMask =
  | "cpf"
  | "cnpj"
  | "cnpj_cpf"
  | "ddd"
  | "telefone"
  | "celular"
  | "cep"
  | "dinheiro"
  | "data"
  | "numeroDia"
  | "inteiro"
  | "quilometros";
