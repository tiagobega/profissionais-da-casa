import { formErrors, maxChars } from "constants/formErrors";
import * as z from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z
    .string()
    .min(1, formErrors.ERROR_REQUIRED)
    .max(300, maxChars(300)),
  onlineAppointment: z.boolean(),
  tags: z.array(z.string()).min(1, "Selecione ao menos uma categoria"),
  linkedin: z
    .string()
    .max(0, formErrors.ERROR_INVALID)
    .or(
      z.string().url({
        message: formErrors.ERROR_INVALID,
      })
    ),
  facebook: z
    .string()
    .max(0, formErrors.ERROR_INVALID)
    .or(
      z.string().url({
        message: formErrors.ERROR_INVALID,
      })
    ),
  instagram: z
    .string()
    .max(0, formErrors.ERROR_INVALID)
    .or(
      z.string().url({
        message: formErrors.ERROR_INVALID,
      })
    )
    .or(
      z.string().startsWith("@", "O handle do instagram deve começar por ˜@˜")
    ),
  pinterest: z
    .string()
    .max(0, formErrors.ERROR_INVALID)
    .or(
      z.string().url({
        message: formErrors.ERROR_INVALID,
      })
    ),
  otherSocials: z
    .string()
    .max(0, formErrors.ERROR_INVALID)
    .or(
      z.string().url({
        message: formErrors.ERROR_INVALID,
      })
    ),
});
