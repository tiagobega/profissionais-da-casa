import { formErrors, minChars, exactChars } from "constants/formErrors";
import * as z from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, minChars(6)),
    newPassword: z.string().min(6, minChars(6)),
    confirm: z.string().min(6, minChars(6)),
  })
  .superRefine(({ newPassword, confirm }, ctx) => {
    if (newPassword !== confirm) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas digitadas devem ser iguais",
      });
    }
  })
  .superRefine(({ newPassword, currentPassword }, ctx) => {
    if (newPassword == currentPassword) {
      ctx.addIssue({
        code: "custom",
        message: "A nova senha deve ser diferente da atual",
      });
    }
  });
