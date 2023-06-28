export const formErrors = {
  ERROR_REQUIRED: "Esse campo é obrigatório",
  ERROR_MINIMUN_AGE: "Você deve ter ao menos 18 anos",
  ERROR_TERMS: "Você deve aceitar os termos e condições",
  ERROR_NAME: "Escreva seu nome",
  ERROR_FOOD: "Selecione uma comida",
  ERROR_FILE: "Selecione uma imagem",
  ERROR_INVALID: "Formato inválido",
};

export const minChars = (number: number) => {
  return `Pelo menos ${number} caracteres`;
};
