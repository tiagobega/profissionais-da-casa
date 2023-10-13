import { ACCEPTED_IMAGE_TYPES, fileRefine } from "utils/fileValidation";
import * as z from "zod";

export const addPortfolioSchema = z.object({
  portfolio: fileRefine({
    size: 5,
    mimeTypeList: ["application/pdf", ...ACCEPTED_IMAGE_TYPES],
    required: false,
  }),
});
