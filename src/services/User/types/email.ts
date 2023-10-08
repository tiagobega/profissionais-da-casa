import { EmailTemplate } from "constants/emailTemplate";

export type SendEmailData = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  template?: string;
  templateParams?: string;
};

export type SendEmailParams = {
  email: string;
  subject: string;
  text: string;
  template?: EmailTemplate;
} & (
  | {
      template: "NEW_PROFESSIONAL";
      params: {
        USER_NAME: string;
        PROFILE_LINK: string;
      };
    }
  | {
      template: "ACTIVE_PROFESSIONAL";
      params: {};
    }
  | {
      template: "INACTIVE_PROFESSIONAL";
      params: {};
    }
  | {
      template: "LEAD_TO_PROFESSIONAL";
      params: {
        professionalName: string;
        description: string;
        phoneContact: string;
        emailContact: string;
      };
    }
);
