import { formErrors, maxChars } from "constants/formErrors";
import * as z from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z
    .string()
    .min(1, formErrors.ERROR_REQUIRED)
    .max(300, maxChars(300)),
  onlineAppointment: z.boolean(),
  tags: z.array(z.string()).min(1, "Selecione ao menos uma categoria"),
});
