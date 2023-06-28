import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, formErrors.ERROR_REQUIRED)
    .email(formErrors.ERROR_INVALID),
  password: z.string().min(8, minChars(8)),
});
