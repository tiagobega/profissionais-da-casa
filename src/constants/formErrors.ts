import { MAX_FILE_SIZE_MB } from "utils/fileValidation";

export const formErrors = {
  ERROR_REQUIRED: "Esse campo é obrigatório",
  ERROR_MINIMUN_AGE: "Você deve ter ao menos 18 anos",
  ERROR_TERMS: "Você deve aceitar os termos e condições",
  ERROR_NAME: "Escreva seu nome",
  ERROR_FOOD: "Selecione uma comida",
  ERROR_FILE: "Selecione um arquivo",
  ERROR_INVALID: "Formato inválido",
};

export const minChars = (number: number) => {
  return `Pelo menos ${number} caracteres`;
};
export const maxChars = (number: number) => {
  return `No máximo ${number} caracteres`;
};

export const exactChars = (number: number) => {
  return `Este campo deve ter exatamente ${number} caracteres`;
};

export const errorFileSize = (number: number = MAX_FILE_SIZE_MB) => {
  return `A tamanho do arquivo excede o limite de ${number} MB`;
};
