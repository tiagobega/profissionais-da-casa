import { exactChars, formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const resetPasswordSchema = z
  .object({
    code: z.string().length(6, exactChars(6)),
    password: z.string().min(6, minChars(6)),
    passwordConfirmation: z.string().min(6, minChars(6)),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["passwordConfirmation"],
        message: "As senhas digitadas devem ser iguais",
      });
    }
  });
