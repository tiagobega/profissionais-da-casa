import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const contactProfessionalSchema = z.object({
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
  recipient: z.string().min(1, formErrors.ERROR_REQUIRED),
  byEmail: z.boolean(),
  byWhatsapp: z.boolean(),
});
