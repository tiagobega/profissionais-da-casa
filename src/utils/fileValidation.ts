import { errorFileSize, formErrors, minChars } from "constants/formErrors";
import * as z from "zod";

export const MAX_FILE_SIZE_MB = 2;
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const verifyFileType = (
  file: File,
  mimeTypeList: string[] = ACCEPTED_IMAGE_TYPES
) => {
  return mimeTypeList.indexOf(file.type) > -1;
};

export const verifyFileSize = (
  file: File,
  sizeLimitMB: number = MAX_FILE_SIZE_MB
) => {
  return file.size < sizeLimitMB * 1000000;
};

export const fileRefine = ({
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
