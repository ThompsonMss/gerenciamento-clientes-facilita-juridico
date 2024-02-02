import { cnpj } from './cnpj';
import { cpf } from './cpf';
import { cnpj_cpf } from './cnpj_cpf';
import { ddd } from './ddd';
import { telefone } from './telefone';
import { celular } from './celular';
import { cep } from './cep';
import { dinheiro } from './dinheiro';
import { numeroDia } from './numeroDia';
import { data } from './data';
import { inteiro } from './inteiro';
import { quilometros } from './quilometros';

export const Mask = {
    cnpj,
    cpf,
    cnpj_cpf,
    ddd,
    telefone,
    celular,
    cep,
    dinheiro,
    data,
    numeroDia,
    inteiro,
    quilometros
};

export type IMask =
    "cpf"
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
    | "quilometros"