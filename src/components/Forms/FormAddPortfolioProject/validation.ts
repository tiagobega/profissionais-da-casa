import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const usePortifolioProjectSchema = z.object({
  name: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
});
