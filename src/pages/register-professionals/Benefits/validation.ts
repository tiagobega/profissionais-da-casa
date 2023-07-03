import * as z from "zod";

export const benefitTermsSchema = z.object({
  terms: z.boolean(),
});
