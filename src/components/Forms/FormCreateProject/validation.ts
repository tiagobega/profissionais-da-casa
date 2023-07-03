import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const createProjectSchema = z.object({
  customer: z.string().min(1, formErrors.ERROR_REQUIRED),
  email: z
    .string()
    .min(1, formErrors.ERROR_REQUIRED)
    .email({ message: formErrors.ERROR_INVALID }),
  phone: z.string().min(11, minChars(11)),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
});
