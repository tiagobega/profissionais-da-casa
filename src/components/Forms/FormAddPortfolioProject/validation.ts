import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const usePortfolioProjectSchema = z.object({
  title: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
  image: z.string().min(0),
});
