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

export const addImageSchema = z.object({
  picture: fileRefine({ required: true, size: 2 }),
});
