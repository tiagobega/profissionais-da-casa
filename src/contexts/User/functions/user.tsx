import type { ErrorHandler, UserContext } from "../types";
import type {
  AdminUpdateUserData,
  ForgotPasswordData,
  Me,
  ResetPasswordData,
  SignInData,
  SignUpData,
  UpdatePasswordData,
  UpdateUserData,
} from "services/User/types";

import { AxiosError } from "axios";

import Session from "utils/Session";

import { useState } from "react";
import { UserService } from "services/User";
import { UserUtils } from "utils/user";
import { recreateApiAuthInterceptors } from "config/axios";

export const userFunctions = (errorHandler: ErrorHandler) => {
  const [logged, setLogged] = useState(false);
  const [me, setMe] = useState<Me | undefined>();

  const getMe = async () => {
    const response = await UserService.getMe();

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    setMe(response);

    return response;
  };

  const updateMe = async (data: UpdateUserData) => {
    const response = await UserService.putMe(data);

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    setMe(response);

    return response;
  };

  const logout = (callback: () => void) => {
    setLogged(false);
    setMe(undefined);
    Session.destroy("auth");
    callback();
  };

  const login = async (data: SignInData) => {
    const response = await UserService.singIn(data);

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    UserUtils.setAuthToken(response.accessToken);

    recreateApiAuthInterceptors();

    const meResponse = await getMe();

    if (!meResponse) return false;

    setMe(meResponse);
    setLogged(true);

    return {
      accessToken: response.accessToken,
      me: meResponse,
    };
  };

  const register = async (data: SignUpData) => {
    const response = await UserService.signUp(data);

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    UserUtils.setAuthToken(response.session.accessToken);
    recreateApiAuthInterceptors();
    setLogged(true);

    setMe(response.user);

    return response;
  };

  const forgotPassword = async (data: ForgotPasswordData) => {
    const response = await UserService.forgotPassword(data);

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const resetPassword = async (data: ResetPasswordData) => {
    const response = await UserService.resetPassword(data);

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const updatePassword = async (data: UpdatePasswordData) => {
    const response = await UserService.updatePassword(data);

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  /**
   * TODO ADMIN FUNCTIONS
   */

  const adminUpdateMe = async (data: AdminUpdateUserData) => {
    // const response = await UserService.create;
  };

  return {
    logged,
    setLogged,

    me,
    setMe,
    updateMe,
    getMe,

    register,
    login,
    logout,
    forgotPassword,
    resetPassword,
    updatePassword,
  };
};

export type UserFunctionsReturn = ReturnType<typeof userFunctions>;
