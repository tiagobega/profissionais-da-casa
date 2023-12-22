import type { ErrorHandler } from "../types";
import type { SendEmailData, SendEmailParams } from "services/User/types/email";
import cssTemplate from "../../../emails/style.css?raw";
import { UserService } from "services/User";
import { templates } from "constants/emailTemplate";
import { withErrorHandler } from "./withErrorHandler";
import { useToast } from "contexts/Toast";

function parseParams(params: { [key: string]: any } | unknown) {
  if (!params) return "";
  return Object.keys(params)
    .map((key) => `${key}=${(params as any)[key]}`)
    .join(",");
}

export const emailFunctions = (errorHandler: ErrorHandler) => {
  const { addToast } = useToast();

  const sendEmail = async (
    { subject, text, email, template, params }: SendEmailParams,
    showToast = false
  ) => {
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
          currentTemplate.html = selectedTemplate.html.replace(
            `<link rel="stylesheet" href="styles.css" />`,
            `<style>${cssTemplate}</style>`
          );;

          console.log(currentTemplate.html);

          break;

        case "space":
          currentTemplate.template = template;
          break;
      }
    }

    const handler = withErrorHandler(
      await UserService.sendEmail({ ...data, ...currentTemplate }),
      errorHandler
    );

    if (handler && showToast) {
      addToast("e-mail enviado com sucesso", {
        type: "success",
        autoDestroy: true,
      });
    }

    return handler;
  };

  return {
    sendEmail,
  };
};

export type EmailFunctionsReturn = ReturnType<typeof emailFunctions>;
