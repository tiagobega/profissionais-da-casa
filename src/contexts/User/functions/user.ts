import type { ErrorHandler, UserContext } from "../types";
import type {
  AdminUpdateUserData,
  ForgotPasswordData,
  Me,
  ResendEmailData,
  ResetPasswordData,
  SignInData,
  SignUpData,
  UpdatePasswordData,
  UpdateUserData,
} from "services/User/types";

import Session from "utils/Session";

import { templates } from "constants/emailTemplate";

import { useState } from "react";
import { UserService } from "services/User";
import { UserUtils } from "utils/user";
import { recreateApiAuthInterceptors } from "config/axios";
import { withErrorHandler } from "./withErrorHandler";
import { ProfessionalFunctionsReturn } from "./professional";

export const userFunctions = (
  errorHandler: ErrorHandler,
  professional: ProfessionalFunctionsReturn
) => {
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

  const registerToken = async (accessToken: string) => {
    UserUtils.setAuthToken(accessToken);

    recreateApiAuthInterceptors();
  };

  const professionalVerification = async (user: Me) => {
    if (user.roleRel.name === "professional") {
      const professionalResponse = await professional.getSingle({
        userId: user.id,
      });

      if (professionalResponse) {
        professional.setMyProfessional(professionalResponse);
      }
    }
  };

  const login = async (data: SignInData) => {
    const response = await UserService.singIn(data);

    const loginResponse = withErrorHandler(response, errorHandler);

    if (!loginResponse) return loginResponse;

    registerToken(loginResponse.accessToken);

    const me = await getMe();
    if (!me) return false;

    await professionalVerification(me);

    setMe(me);
    setLogged(true);

    return {
      me,
      accessToken: loginResponse.accessToken,
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
    registerToken,
    logout,
    forgotPassword,
    resetPassword,
    updatePassword,

    resendMeEmailVerification,
    resendEmailVerification,
  };
};

export type UserFunctionsReturn = ReturnType<typeof userFunctions>;
