import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
  state: z.string(),
  city: z.string(),
  location: z.string(),
});
