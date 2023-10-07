import type { ErrorHandler, UserContext } from "../types";
import type {
  AdminUpdateUserData,
  AllUserResponse,
  ForgotPasswordData,
  Me,
  ResendEmailData,
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
import { withErrorHandler } from "./withErrorHandler";

export const userFunctions = (errorHandler: ErrorHandler) => {
  const [logged, setLogged] = useState(false);
  const [me, setMe] = useState<Me | undefined>();

  const getMe = async () => {
    const response = withErrorHandler(await UserService.getMe(), errorHandler);

    response && setMe(response);

    return response;
  };

  const updateMe = async (data: UpdateUserData) => {
    const response = withErrorHandler(
      await UserService.putMe(data),
      errorHandler
    );

    response && setMe(response);

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

    const loginResponse = withErrorHandler(response, errorHandler);

    if (!loginResponse) return loginResponse;

    UserUtils.setAuthToken(loginResponse.accessToken);

    recreateApiAuthInterceptors();

    const meResponse = await getMe();

    if (!meResponse) return false;

    setMe(meResponse);
    setLogged(true);

    return {
      accessToken: loginResponse.accessToken,
      me: meResponse,
    };
  };

  const register = async (data: SignUpData) => {
    const response = withErrorHandler(
      await UserService.signUp(data),
      errorHandler
    );

    if (!response) return response;

    UserUtils.setAuthToken(response.session.accessToken);
    recreateApiAuthInterceptors();
    setLogged(true);

    setMe(response.user);

    return response;
  };

  const forgotPassword = async (data: ForgotPasswordData) => {
    const response = await UserService.forgotPassword(data);

    return withErrorHandler(response, errorHandler);
  };

  const resetPassword = async (data: ResetPasswordData) => {
    const response = await UserService.resetPassword(data);

    return withErrorHandler(response, errorHandler);
  };

  const updatePassword = async (data: UpdatePasswordData) => {
    const response = await UserService.updatePassword(data);

    return withErrorHandler(response, errorHandler);
  };

  /**
   * TODO ADMIN FUNCTIONS
   */

  const getAll = async () =>
    withErrorHandler(await UserService.getAllUsers(), errorHandler);

  const adminUpdateMe = async (data: AdminUpdateUserData) => {};

  const resendEmailVerification = async (data: ResendEmailData) =>
    withErrorHandler(
      await UserService.resentEmailVerification(data),
      errorHandler
    );
  const resendMeEmailVerification = async () =>
    withErrorHandler(
      await UserService.resendMeEmailVerification(),
      errorHandler
    );

  return {
    logged,
    setLogged,

    me,
    setMe,
    updateMe,
    getMe,
    getAll,
    register,
    login,
    logout,
    forgotPassword,
    resetPassword,
    updatePassword,
    
    resendMeEmailVerification,
    resendEmailVerification,
  };
};

export type UserFunctionsReturn = ReturnType<typeof userFunctions>;
