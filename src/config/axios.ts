import axios from "axios";
import { Session } from "utils/Session";

export const API_POST_ROUTES = {} as const;

export const API_ROUTES = {
  POST: {
    AUTH: "/auth/local",
    AUTH_REGISTER: "/auth/local/register",
    AUTH_FORGOT_PASSWORD: "/auth/forgot-password",
    AUTH_RESET_PASSWORD: "/auth/reset-password",
    AUTH_SEND_EMAIL_CONFIRMATION: "/auth/send-email-confirmation",
    USERS: "/users",
    USERS_PERMISSIONS_ROLES: "/users-permissions/roles",
  },
  GET: {
    USERS: "/users",
    USERS_ME: "/users/me",
    USERS_PERMISSIONS: "/users-permissions/permissions",
    USERS_PERMISSIONS_ROLES: "/users-permissions/roles",
  },
  PUT: {
    USERS: "/users",
  },
  DELETE: {
    USERS: "/users",
    USERS_PERMISSIONS_ROLES: "/users-permissions/roles",
  },
} as const;



export const api = axios.create({
  baseURL: "https://api.cadacasa.com.br/api",
});

api.interceptors.request.use((config) => {
  const authSession: any = Session.get("auth");

  if (authSession.accessToken) {
    config.headers!.Authorization = `Bearer ${authSession.accessToken}`;
  }

  return config;
});

export default {
  api,
};
