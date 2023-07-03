import { formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const codeSchema = z.object({
  code: z.string().min(5, minChars(5)),
});
