import axios from "axios";
import { UserUtils } from "../utils/user";

export const API_POST_ROUTES = {
  EMAIL_SEND: "/mail/send",
  EMAIL_ADD_TEMPLATE: "/mail/addtemplate",

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

  LEAD_CREATE: "/lead/create",
  LEAD_SINGLE: "/lead/getone",
  LEAD_DELETE: "/lead/delete",

  INTEGRATED: "/integrated/signup",

  LOCATION_CREATE_MANY: "/location/createmany",
  LOCATION_CREATE: "/location/create",
  LOCATION_DELETE_MANY: "/location/deletemany",
  LOCATION_DELETE: "/location/delete",
  LOCATION_SINGLE: "/location/getone",

  PROFESSIONAL_CREATE: "/proprofile/create",
  PROFESSIONAL_SINGLE: "/proprofile/getone",
  PROFESSIONAL_DELETE: "/proprofile/delete",

  PORTFOLIO_PROJECT_CREATE: "/portproj/create",
  PORTFOLIO_PROJECT_SINGLE: "/portproj/getone",
  PORTFOLIO_PROJECT_DELETE: "/portproj/delete",

  ROLE_SINGLE: "/role/getone",
  ROLE_CREATE: "/role/create",
  ROLE_DELETE: "/role/delete",

  SOCIALMEDIA_SINGLE: "/socialmedia/getone",
  SOCIALMEDIA_CREATE_MANY: "/socialmedia/createmany",
  SOCIALMEDIA_CREATE: "/socialmedia/create",
  SOCIALMEDIA_DELETE: "/socialmedia/delete",

  SUBPLAN_CREATE: "/subplan/create",
  SUBPLAN_SINGLE: "/subplan/getone",
  SUBPLAN_DELETE: "/subplan/delete",

  USER_SIGN_IN: "/user/signin",
  USER_SIGN_UP: "/user/signup",
  USER_DELETE: "/user/delete",
  USER_FORGOT_PASSWORD: "/user/forgotpass",
  USER_ME_RESEND_EMAIL: "/user/me/senduserverify",
  USER_RESEND_EMAIL: "/user/senduserverify",
} as const;

export const API_GET_ROUTES = {
  EVALUATION_ALL: "/evaluation/getall",

  FAQ_BLOCK_ALL: "/faq_block/getall",

  FAQ_QUESTION_ALL: "/faq_question/getall",

  LEAD_ALL: "/lead/getall",

  LOCATION_ALL: "/location/getall",

  PORTFOLIO_PROJECT_ALL: "/portproj/getall",

  PROFESSIONAL_ALL: "/proprofile/getall",

  ROLE_ALL: "/role/getall",

  SOCIALMEDIA_ALL: "/socialmedia/getall",

  SUBPLAN_ALL: "/subplan/getall",

  USER_ME: "/user/me",
  USER_ALL: "/user/getall",
} as const;

export const API_PUT_ROUTES = {
  EVALUATION_EDIT: "/evaluation/edit",

  FAQ_BLOCK_EDIT: "/faq_block/edit",

  FAQ_QUESTION_EDIT: "/faq_question/edit",

  LEAD_EDIT: "/lead/edit",

  LOCATION_EDIT_MANY: "/location/editmany",
  LOCATION_EDIT: "/location/edit",

  PORTFOLIO_PROJECT_EDIT: "/portproj/edit",

  PROFESSIONAL_EDIT: "/proprofile/edit",

  ROLE_EDIT: "/role/edit",

  SOCIALMEDIA_EDIT: "/socialmedia/edit",

  SUBPLAN_EDIT: "/subplan/edit",

  USER_ME: "/user/me",
  USER_EDIT: "/user/edit",
  USER_PASSWORD: "/user/me/password",
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
      ? "https://api.cadacasa.tiagobega.xyz/v1/"
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
