import { errorFileSize, formErrors, minChars } from "constants/formErrors";
import {
  ACCEPTED_IMAGE_TYPES,
  verifyFileSize,
  verifyFileType,
} from "utils/fileValidation";
import * as z from "zod";

const fileRefine = ({
  size,
  mimeTypeList,
  required = true,
}: {
  size?: number;
  mimeTypeList?: string[];
  required?: boolean;
} = {}) =>
  z.instanceof(FileList).superRefine((fileList, ctx) => {
    if (!fileList.length) {
      if (required) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: formErrors.ERROR_FILE,
        });
      }
      return;
    }

    if (!verifyFileType(fileList[0], mimeTypeList)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: formErrors.ERROR_INVALID,
      });
    }

    if (!verifyFileSize(fileList[0], size)) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_big,
        type: "array",
        message: errorFileSize(size),
        maximum: (size || 2) * 1000000,
        inclusive: true,
      });
    }
  });

export const usePortfolioProjectSchema = z.object({
  title: z.string().min(1, formErrors.ERROR_REQUIRED),
  description: z.string().min(1, formErrors.ERROR_REQUIRED),
  image: fileRefine({ required: false, size: 5 }),
});
