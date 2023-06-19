import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const editProfileSchema = z.object({
  date: z.date(),
});
