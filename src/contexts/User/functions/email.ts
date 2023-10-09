import type { ErrorHandler } from "../types";
import type { SendEmailData, SendEmailParams } from "services/User/types/email";

import { UserService } from "services/User";
import { templates } from "constants/emailTemplate";
import { withErrorHandler } from "./withErrorHandler";

function parseParams(params: { [key: string]: any } | unknown) {
  if (!params) return "";
  return Object.keys(params)
    .map((key) => `${key}=${(params as any)[key]}`)
    .join(",");
}

export const emailFunctions = (errorHandler: ErrorHandler) => {
  const sendEmail = async ({
    subject,
    text,
    email,
    template,
    params,
  }: SendEmailParams) => {
    const data = {
      subject,
      text,
      to: email,
    };

    const currentTemplate: Partial<SendEmailData> = {};

    if (template) {
      const selectedTemplate = templates[template];

      currentTemplate.templateParams = parseParams(params);

      switch (selectedTemplate.type) {
        case "local":
          currentTemplate.html = selectedTemplate.html;
          break;

        case "space":
          currentTemplate.template = template;
          break;
      }
    }

    return withErrorHandler(
      await UserService.sendEmail({ ...data, ...currentTemplate }),
      errorHandler
    );
  };

  return {
    sendEmail,
  };
};

export type EmailFunctionsReturn = ReturnType<typeof emailFunctions>;
