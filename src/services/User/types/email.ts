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
  params?: unknown;
} & (
  | {
      template: "NEW_PROFESSIONAL";
      params: {
        USER_NAME: string;
        PROFILE_LINK: string;
      };
    }
  | {
      template: "ACCEPT_PROFESSIONAL";
      params: {
        USER_NAME: string;
        PROFILE_LINK: string;
      };
    }
  | {
      template: "REJECT_PROFESSIONAL";
      params: {
        USER_NAME: string;
        PROFILE_LINK: string;
      };
    }
  | {
      template: "INACTIVE_PROFESSIONAL";
    }
  | {
      template: "LEAD_TO_PROFESSIONAL";
      params: {
        SIGNATURE: string;
        DESCRIPTION: string;
      };
    }
  | { template: "WELCOME_PROFESSIONAL" }
  | { template: "WELCOME_USER" }
);
