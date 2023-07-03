import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const registerProfessionalSchema = z
  .object({
    name: z.string().min(1, formErrors.ERROR_REQUIRED),
    email: z
      .string()
      .min(1, formErrors.ERROR_REQUIRED)
      .email(formErrors.ERROR_INVALID),
    phone: z.string().min(11, formErrors.ERROR_INVALID),
    cep: z.string().min(8, minChars(8)),
    cpf: z.string().min(11, minChars(8)),
    birthDate: z.date(),
    password: z.string().min(8, minChars(8)),
    passwordConfirm: z.string().min(8, minChars(8)),
    terms: z.boolean(),
    registerTech: z.string().min(1, formErrors.ERROR_REQUIRED),
    companyName: z.string().min(1, formErrors.ERROR_REQUIRED),
    cnpj: z.string().min(14, formErrors.ERROR_INVALID),
    formation: z.string().min(1, formErrors.ERROR_REQUIRED),
    institution: z.string().min(1, formErrors.ERROR_REQUIRED),
    creaCau: z.string(),
    formationLevel: z.string().min(1, formErrors.ERROR_REQUIRED),
    formationDetail: z.string().min(1, formErrors.ERROR_REQUIRED),
    formationYear: z.string().min(1, formErrors.ERROR_REQUIRED),
    profilePicture: z.instanceof(FileList),
    portfolio: z.instanceof(FileList),
    linkedin: z.string().min(1, formErrors.ERROR_REQUIRED),
    facebook: z.string().min(1, formErrors.ERROR_REQUIRED),
    instagram: z.string().min(1, formErrors.ERROR_REQUIRED),
    pinterest: z.string().min(1, formErrors.ERROR_REQUIRED),
    otherSocials: z.string().min(1, formErrors.ERROR_REQUIRED),
  })
  .refine((data) => data.passwordConfirm == data.password, {
    message: "Digitar a mesma senha novamente",
    path: ["passwordConfirm"],
  })
  .refine((data) => data.terms === true, {
    message: "É obrigatório o aceite dos termos e condições",
    path: ["agree"],
  });
