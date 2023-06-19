import { formErrors } from "constants/formErrors";
import * as z from "zod";

export const sendReviewSchema = z.object({
  rating: z.number().min(1, formErrors.ERROR_REQUIRED),
  testimonial: z.string().min(1, formErrors.ERROR_REQUIRED),
});
