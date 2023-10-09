import newProfessional from "../emails/newProfessional.html?raw";

export const EMAIL_TEMPLATE = {
  NEW_PROFESSIONAL: "NEW_PROFESSIONAL",
  INACTIVE_PROFESSIONAL: "INACTIVE_PROFESSIONAL",
  ACTIVE_PROFESSIONAL: "ACTIVE_PROFESSIONAL",
  LEAD_TO_PROFESSIONAL: "LEAD_TO_PROFESSIONAL",
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
  ACTIVE_PROFESSIONAL: {
    type: "local",
    html: newProfessional,
  },
  INACTIVE_PROFESSIONAL: {
    type: "local",
    html: newProfessional,
  },
  LEAD_TO_PROFESSIONAL: {
    type: "local",
    html: newProfessional,
  },
};
