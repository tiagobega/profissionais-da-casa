import axios from "axios";

// import Session from "../utils/Session/Session";

export const api = axios.create({
  baseURL: "",
});

api.interceptors.request.use((config) => {
  // const authSession: any = Session.Get("auth");

  // if (authSession.accessToken) {
  //   config.headers!.Authorization = `Bearer ${authSession.accessToken}`;
  // }

  return config;
});

export default {
  api,
};
