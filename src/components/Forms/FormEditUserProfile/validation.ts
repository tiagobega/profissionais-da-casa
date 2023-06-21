import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const editProfileSchema = z
  .object({
    name: z.string().min(1, formErrors.ERROR_REQUIRED),
    email: z.string().min(1, formErrors.ERROR_REQUIRED),
    cep: z.string().min(9, formErrors.ERROR_INVALID),
    phone: z.string().min(12, formErrors.ERROR_REQUIRED),
    passwordOld: z.string().optional(),
    password: z.string().optional(),
    passwordConfirm: z.string().optional(),
    photo: z.custom<File>().optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Digite novamente a mesma senha",
    path: ["confirm"],
  })
  .refine((data) => data.password !== data.passwordOld, {
    message: "Digite uma nova senha",
    path: ["confirm"],
  });
