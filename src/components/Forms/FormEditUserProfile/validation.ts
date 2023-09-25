import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(1, formErrors.ERROR_REQUIRED),
  email: z.string().min(1, formErrors.ERROR_REQUIRED),
  cep: z.string().length(8, formErrors.ERROR_INVALID),
  phone: z.string().length(11, formErrors.ERROR_INVALID),
});
