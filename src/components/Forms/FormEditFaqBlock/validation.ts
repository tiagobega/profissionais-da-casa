import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const faqBlockSchema = z.object({
  title: z.string().min(1, formErrors.ERROR_REQUIRED),
});
