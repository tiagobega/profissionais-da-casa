import * as z from "zod";

export const ERROR_REQUIRED = "Esse campo é obrigatório";
export const ERROR_MINIMUN_AGE = "Você deve ter ao menos 18 anos";
export const ERROR_TERMS = "Você deve aceitar os termos e condições";
export const ERROR_NAME = "Escreva seu nome";

export const formTestSchema = z.object({
  name: z.string().min(1, ERROR_NAME),
  age: z
    .number({
      required_error: ERROR_REQUIRED,
      invalid_type_error: ERROR_REQUIRED,
    })
    .min(18, ERROR_MINIMUN_AGE),
  profession: z.string({
    required_error: ERROR_REQUIRED,
    invalid_type_error: ERROR_REQUIRED,
  }),

  terms: z.literal(true, {
    errorMap: () => ({ message: ERROR_REQUIRED }),
  }),
});
