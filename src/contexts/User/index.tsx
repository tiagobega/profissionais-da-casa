import type { UserContext, ContextProviderProps } from "./types";

import {
  EmailConfirmationParams,
  EmailError,
  EmailReponse,
  LoginError,
  LoginParams,
  MeResponse,
  RegisterError,
  RegisterParams,
  RegisterResponse,
  User,
} from "constants/user";

import React, { useContext, useEffect, useState } from "react";

import { AxiosError } from "axios";
import { api, API_ROUTES, recreateApiAuthInterceptors } from "config/axios";
import { LoginResponse } from "constants/user";
import { useToast } from "contexts/Toast";
import { Session } from "utils/Session";
import { UserService } from "services/User";
import { GenericError, SignUp } from "services/User/types";
import { UserUtils } from "utils/user";

export const userContext = React.createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { addToast } = useToast();

  const [logged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserContext["currentUser"]>();
  const [registeredUser, setRegisteredUser] =
    useState<UserContext["registeredUser"]>();

  const handleErrors = (responseData: AxiosError<GenericError>) => {
    responseData.response?.data.messages.forEach((message: string) => {
      addToast(message, {
        type: "error",
        autoDestroy: true,
        timer: 5000,
      });
    });
  };

  const login: UserContext["login"] = async (params, callback) => {
    const response = await UserService.singIn(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    console.log(response);

    UserUtils.setAuthToken(response.accessToken);

    recreateApiAuthInterceptors();
  };

  const logout: UserContext["logout"] = (callback) => {
    setLogged(false);
    setCurrentUser(undefined);
    Session.destroy("auth");
    callback();
  };

  const register: UserContext["register"] = async (params, callback) => {
    const response = await UserService.signUp(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    console.log(response);

    callback();
  };

  return (
    <userContext.Provider
      value={{
        logged,
        login,
        logout,
        register,
        registeredUser,
        currentUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(userContext);

  if (!context)
    throw new Error(
      "The useUser hook should be used inside a UserContext provider"
    );

  return context;
};
