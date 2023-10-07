export * from "./evaluation";
export * from "./faq";
export * from "./file";
export * from "./integrated";
export * from "./lead";
export * from "./location";
export * from "./portfolioProject";
export * from "./professional";
export * from "./role";
export * from "./socialMedia";
export * from "./subplan";
export * from "./user";

export interface DeleteResponse {
  messages: string;
}

export interface AuthCookie {
  accessToken: string;
}
