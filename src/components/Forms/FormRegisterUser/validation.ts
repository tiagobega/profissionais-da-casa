import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().min(1, formErrors.ERROR_REQUIRED),
    email: z
      .string()
      .min(1, formErrors.ERROR_REQUIRED)
      .email(formErrors.ERROR_INVALID),
    phone: z.string().min(14, formErrors.ERROR_INVALID),
    cpf: z.string().min(14, formErrors.ERROR_INVALID),
    cep: z.string().min(9, minChars(9)),
    password: z.string().min(8, minChars(8)),
    passwordConfirm: z.string().min(8, minChars(8)),
    terms: z.boolean(),
  })
  .refine((data) => data.passwordConfirm == data.password, {
    message: "Digitar a mesma senha novamente",
    path: ["passwordConfirm"],
  })
  .refine((data) => data.terms === true, {
    message: "É obrigatório o aceite dos termos e condições",
    path: ["agree"],
  });
