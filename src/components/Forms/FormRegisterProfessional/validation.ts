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

export const registerProfessionalSchema = z
  .object({
    name: z.string().min(1, formErrors.ERROR_REQUIRED),
    email: z
      .string()
      .min(1, formErrors.ERROR_REQUIRED)
      .email(formErrors.ERROR_INVALID),
    phone: z
      .string({ required_error: formErrors.ERROR_REQUIRED })
      .min(15, formErrors.ERROR_INVALID),
    cep: z
      .string({ required_error: formErrors.ERROR_REQUIRED })
      .min(9, formErrors.ERROR_INVALID),
    cpf: z
      .string({ required_error: formErrors.ERROR_REQUIRED })
      .min(14, formErrors.ERROR_INVALID),
    birthdate: z
      .string({ required_error: formErrors.ERROR_REQUIRED })
      .min(10, formErrors.ERROR_INVALID),
    password: z.string().min(8, minChars(8)),
    passwordConfirm: z.string().min(8, minChars(8)),
    registerTech: z.string().min(1, formErrors.ERROR_REQUIRED),
    companyName: z.string().min(1, formErrors.ERROR_REQUIRED),
    cnpj: z.string().min(14, formErrors.ERROR_INVALID),
    formation: z.string().min(1, formErrors.ERROR_REQUIRED),
    institution: z.string().min(1, formErrors.ERROR_REQUIRED),
    formationLevel: z.string().min(1, formErrors.ERROR_REQUIRED),
    formationYear: z.string().min(4, formErrors.ERROR_REQUIRED),
    formationDetail: z.string(),
    terms: z.boolean(),
    creaCau: z.string(),
    onlineAppointment: z.boolean(),
    linkedin: z.string().url({ message: formErrors.ERROR_INVALID }),
    facebook: z.string().url({
      message: formErrors.ERROR_INVALID,
    }),
    instagram: z.string().url({
      message: formErrors.ERROR_INVALID,
    }),
    pinterest: z.string().url({
      message: formErrors.ERROR_INVALID,
    }),
    otherSocials: z.string().url({
      message: formErrors.ERROR_INVALID,
    }),

    portfolio: fileRefine({
      size: 5,
      mimeTypeList: ["application/pdf", ...ACCEPTED_IMAGE_TYPES],
      required: false,
    }),
    profilePicture: fileRefine({ required: false }),
    backgroundPicture: fileRefine({ size: 5, required: false }),

    states: z.array(z.string()),
  })
  .refine((data) => data.passwordConfirm == data.password, {
    message: "Digitar a mesma senha novamente",
    path: ["passwordConfirm"],
  })
  .refine((data) => data.terms, {
    message: "É obrigatório o aceite dos termos e condições",
    path: ["agree"],
  })
  .refine((data) => data.onlineAppointment || !!data.states.length, {
    message: "Pelo menos um dos campos abaixo deve ser preenchido",
    path: ["states"],
  });
