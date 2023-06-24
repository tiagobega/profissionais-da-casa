import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const faqQuestionSchema = z.object({
  title: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
  category: z.string().min(1, formErrors.ERROR_REQUIRED),
});
