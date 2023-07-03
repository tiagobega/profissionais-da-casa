import axios from "axios";

export const API_POST_ROUTES = {} as const;

export const API_ROUTES = {
  POST: {
    AUTH: "/auth/local",
    AUTH_REGISTER: "/auth/local/register",
    AUTH_FORGOT_PASSWORD: "/auth/forgot-password",
    AUTH_RESET_PASSWORD: "/auth/reset-password",
    AUTH_SEND_EMAIL_CONFIRMATION: "/auth/send-email-confirmation",
  },
  GET: {},
  PUT: {},
  DELETE: {},
} as const;

export const api = axios.create({
  baseURL: "https://api.cadacasa.com.br/api",
});

api.interceptors.request.use((config) => {
  return config;
});

export default {
  api,
};
