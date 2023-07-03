import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const resendSchema = z.object({
  email: z.string().email(formErrors.ERROR_INVALID),
});
