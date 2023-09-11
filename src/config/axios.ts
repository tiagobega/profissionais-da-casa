import axios from "axios";
import { UserUtils } from "../utils/user";

export const API_POST_ROUTES = {
  SIGN_IN: "/user/signin",
  SIGN_UP: "/user/signup",
  
  ROLE_SINGLE: "/role/getone",
  ROLE_CREATE: "/role/create",
  ROLE_DELETE: "/role/delete",

  SUBPLAN_CREATE: "/subplan/create",
  SUBPLAN_SINGLE: "/subplan/getone",
  SUBPLAN_DELETE: "/subplan/delete",
} as const;

export const API_GET_ROUTES = {
  USER_ME: "/user/me",
  ROLE_ALL: "/role/getall",
  SUBPLAN_ALL: "/subplan/getall",
} as const;

export const API_PUT_ROUTES = {
  USER_ME: "/user/me",
  ROLE_EDIT: "/role/edit",
  SUBPLAN_EDIT: "/subplan/edit",
} as const;

export const API_DELETE_ROUTES = {};

export const API_ROUTES = {
  POST: API_POST_ROUTES,
  GET: API_GET_ROUTES,
  PUT: API_PUT_ROUTES,
  DELETE: API_DELETE_ROUTES,
} as const;

export const api = axios.create({
  baseURL:
    import.meta.env.MODE === "production"
      ? ""
      : "https://api.cadacasa.tiagobega.xyz/v1/",
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
