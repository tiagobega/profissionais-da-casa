import { formErrors } from "constants/formErrors";
import { fileRefine } from "utils/fileValidation";
import * as z from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
  onlineAppointment: z.boolean(),
  tags: z.array(z.string()).min(1, "Selecione ao menos uma categoria"),
});
