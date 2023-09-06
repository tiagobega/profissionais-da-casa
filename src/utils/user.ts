import type { AuthCookie } from "../services/User/types";

import queryString from "query-string";
import { Session } from "./Session";

export class UserUtils {
  static getAuthToken() {
    /**
     * try with cookies
     */
    const response = {
      success: false,
      accessToken: "",
    };

    const authCookie = Session.get<AuthCookie>("auth");

    if (authCookie) {
      response.success = true;
      response.accessToken = authCookie.data.accessToken;

      return response;
    }

    /**
     * Try with queries then create cookie
     */

    const { accessToken } = queryString.parse(window.location.search);

    if (accessToken && typeof accessToken == "string") {
      this.setAuthToken(accessToken);
      response.success = true;
      response.accessToken = accessToken;
    }
    return response;
  }

  static setAuthToken(accessToken: string) {
    return Session.set(
      { accessToken },
      {
        context: "auth",
      }
    );
  }
}
