import newProfessional from "../emails/newProfessional.html?raw";
import acceptProfessional from "../emails/acceptProfessional.html?raw";
import rejectProfessional from "../emails/rejectProfessional.html?raw";
import leadToProfessional from "../emails/leadToProfessional.html?raw";
import inactiveProfessional from "../emails/inactiveProfessional.html?raw";

export const EMAIL_TEMPLATE = {
  NEW_PROFESSIONAL: "NEW_PROFESSIONAL",
  REJECT_PROFESSIONAL: "REJECT_PROFESSIONAL",
  ACCEPT_PROFESSIONAL: "ACCEPT_PROFESSIONAL",
  LEAD_TO_PROFESSIONAL: "LEAD_TO_PROFESSIONAL",
  INACTIVE_PROFESSIONAL: "INACTIVE_PROFESSIONAL",
} as const;

export type EmailTemplate =
  (typeof EMAIL_TEMPLATE)[keyof typeof EMAIL_TEMPLATE];

export const templates: {
  [key in EmailTemplate]: { type: "local"; html: string } | { type: "space" };
} = {
  NEW_PROFESSIONAL: {
    type: "local",
    html: newProfessional,
  },
  ACCEPT_PROFESSIONAL: {
    type: "local",
    html: acceptProfessional,
  },
  REJECT_PROFESSIONAL: {
    type: "local",
    html: rejectProfessional,
  },
  LEAD_TO_PROFESSIONAL: {
    type: "local",
    html: leadToProfessional,
  },
  INACTIVE_PROFESSIONAL: {
    type: "local",
    html: inactiveProfessional,
  },
};
