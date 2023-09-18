export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  PROFESSIONAL: "professional",
} as const;

export type RoleName = (typeof ROLES)[keyof typeof ROLES];
