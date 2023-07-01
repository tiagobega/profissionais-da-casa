import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const accountSchema = z.object({
  type: z.string().nullable(),
});
