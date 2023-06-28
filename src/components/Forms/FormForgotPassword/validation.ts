import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const forgotSchema = z.object({
  email: z
    .string()
    .min(1, formErrors.ERROR_REQUIRED)
    .email(formErrors.ERROR_INVALID),
});
