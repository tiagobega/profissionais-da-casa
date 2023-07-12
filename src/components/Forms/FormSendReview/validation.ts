import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const sendReviewSchema = z.object({
  cost: z.number().min(1, formErrors.ERROR_REQUIRED),
  deadline: z.number().min(1, formErrors.ERROR_REQUIRED),
  functionality: z.number().min(1, formErrors.ERROR_REQUIRED),
  handedOver: z.number().min(1, formErrors.ERROR_REQUIRED),
  customerRelationship: z.number().min(1, formErrors.ERROR_REQUIRED),
  testimonial: z.string().min(1, formErrors.ERROR_REQUIRED),
});
