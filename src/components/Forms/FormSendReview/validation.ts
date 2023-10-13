import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const sendReviewSchema = z.object({
  cost: z.number().min(1, formErrors.ERROR_REQUIRED),
  deadlines: z.number().min(1, formErrors.ERROR_REQUIRED),
  functionality: z.number().min(1, formErrors.ERROR_REQUIRED),
  quality: z.number().min(1, formErrors.ERROR_REQUIRED),
  relationship: z.number().min(1, formErrors.ERROR_REQUIRED),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
});
