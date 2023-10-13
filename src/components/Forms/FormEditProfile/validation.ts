import { formErrors } from "constants/formErrors";
import { fileRefine } from "utils/fileValidation";
import * as z from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
  profilePicture: fileRefine({ required: false }),
  backgroundPicture: fileRefine({ size: 5, required: false }),
  states: z.array(z.string()),
  onlineAppointment: z.boolean(),
});
