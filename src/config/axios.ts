import axios from "axios";
import { UserUtils } from "../utils/user";

export const API_POST_ROUTES = {
  EVALUATION_SINGLE: "/evaluation/getone",
  EVALUATION_CREATE: "/evaluation/create",
  EVALUATION_DELETE: "/evaluation/delete",

  FAQ_BLOCK_CREATE: "/faq_block/create",
  FAQ_BLOCK_SINGLE: "/faq_block/getone",
  FAQ_BLOCK_DELETE: "/faq_block/delete",

  FAQ_QUESTION_CREATE: "/faq_question/create",
  FAQ_QUESTION_SINGLE: "/faq_question/getone",
  FAQ_QUESTION_DELETE: "/faq_question/delete",

  FILE_UPLOAD: "/file/upload",

  LOCATION_CREATE_MANY: "/location/createmany",
  LOCATION_CREATE: "/location/create",

  SUBPLAN_CREATE: "/subplan/create",
  SUBPLAN_SINGLE: "/subplan/getone",
  SUBPLAN_DELETE: "/subplan/delete",

  PROFESSIONAL_CREATE: "/proprofile/create",
  PROFESSIONAL_SINGLE: "/proprofile/getone",
  PROFESSIONAL_DELETE: "/proprofile/delete",

  PORTFOLIO_PROJECT_CREATE: "/portproj/create",
  PORTFOLIO_PROJECT_SINGLE: "/portproj/getone",
  PORTFOLIO_PROJECT_DELETE: "/portproj/delete",

  ROLE_SINGLE: "/role/getone",
  ROLE_CREATE: "/role/create",
  ROLE_DELETE: "/role/delete",

  USER_SIGN_IN: "/user/signin",
  USER_SIGN_UP: "/user/signup",
  USER_DELETE: "/user/delete",
  USER_FORGOT_PASSWORD: "/user/forgotpass",
} as const;

export const API_GET_ROUTES = {
  EVALUATION_ALL: "/evaluation/getall",

  FAQ_BLOCK_ALL: "/faq_block/getall",

  FAQ_QUESTION_ALL: "/faq_block/getall",

  PORTFOLIO_PROJECT_ALL: "/portproj/getall",

  PROFESSIONAL_ALL: "/proprofile/getall",

  ROLE_ALL: "/role/getall",

  SUBPLAN_ALL: "/subplan/getall",

  USER_ME: "/user/me",
  USER_ALL: "/user/all",
} as const;

export const API_PUT_ROUTES = {
  EVALUATION_EDIT: "/evaluation/edit",

  FAQ_BLOCK_EDIT: "/faq_block/edit",

  FAQ_QUESTION_EDIT: "/faq_question/edit",

  PORTFOLIO_PROJECT_EDIT: "/portproj/edit",

  PROFESSIONAL_EDIT: "/proprofile/edit",

  ROLE_EDIT: "/role/edit",

  SUBPLAN_EDIT: "/subplan/edit",

  USER_ME: "/user/me",
  USER_EDIT: "/user/edit",
  USER_PASSWORD: "/user/me/passowrd",
  USER_RESET_PASSWORD: "/user/resetpass",
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
