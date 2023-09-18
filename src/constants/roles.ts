export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  PROFESSIONAL: "professional",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
