import axios from "axios";
import { UserUtils } from "../utils/user";

export const API_POST_ROUTES = {
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
} as const;

export const API_GET_ROUTES = {
  USER_ME: "/users/me",
} as const;

export const API_PUT_ROUTES = {
  USER_ME: "/users/me",
} as const;

export const API_DELETE_ROUTES = {};

export const API_ROUTES = {
  POST: API_POST_ROUTES,
  GET: API_GET_ROUTES,
  PUT: API_PUT_ROUTES,
  DELETE: API_DELETE_ROUTES,
} as const;

export const api = axios.create({
  baseURL: import.meta.env.MODE === "production" ? "" : "localhost:4000/v1",
});

const createApiAuthInterceptor = () => {
  const tokenRequest = UserUtils.getAuthToken();

  const accessToken = tokenRequest.accessToken;

  api.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  return {
    tokenRequest,
    accessToken,
  };
};

export const recreateApiAuthInterceptors = () => {
  api.interceptors.request.clear();

  return createApiAuthInterceptor();
};

export const { tokenRequest, accessToken } = createApiAuthInterceptor();

export default {
  api,
};
