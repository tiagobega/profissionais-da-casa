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
} from "constants/user";

import React, { useContext, useEffect, useState } from "react";

import { AxiosError } from "axios";
import {
  api,
  API_ROUTES,
  recreateApiAuthInterceptors,
  tokenRequest,
} from "config/axios";
import { LoginResponse } from "constants/user";
import { useToast } from "contexts/Toast";
import { Session } from "utils/Session";
import { UserService } from "services/User";
import { GenericError, Me, SignUp } from "services/User/types";
import { UserUtils } from "utils/user";

export const userContext = React.createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { addToast } = useToast();

  const [logged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserContext["currentUser"]>();
  const [roles, setRoles] = useState<UserContext["roles"]>([]);
  const [currentProfessional, setCurrentProfessional] =
    useState<UserContext["currentProfessional"]>();

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

    UserUtils.setAuthToken(response.accessToken);

    recreateApiAuthInterceptors();

    const meResponse = await getMe();

    if (!meResponse) return false;

    setLogged(true);

    callback(meResponse);

    return response;
  };

  const getMe: UserContext["getMe"] = async () => {
    const response = await UserService.getMe();

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    setCurrentUser(response);

    return response;
  };

  const putMe: UserContext["putMe"] = async (data) => {
    const response = await UserService.putMe(data);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    // setCurrentUser(response);

    return response;
  };

  const getRoles: UserContext["getRoles"] = async () => {
    const response = await UserService.getRoles();

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    setRoles(response);

    return response;
  };

  const getSingleRole: UserContext["getSingleRole"] = async (id) => {
    const response = await UserService.getSingleRole(id);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    return response;
  };

  const logout: UserContext["logout"] = (callback) => {
    setLogged(false);
    setCurrentUser(undefined);
    Session.destroy("auth");
    callback();
  };

  const register: UserContext["register"] = async (params) => {
    const response = await UserService.signUp(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    UserUtils.setAuthToken(response.session.accessToken);
    recreateApiAuthInterceptors();
    setLogged(true);

    setCurrentUser(response.user);

    return response;
  };

  const registerProfessional: UserContext["registerProfessional"] = async (
    params
  ) => {
    const response = await UserService.professionalSignUp(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    setCurrentProfessional(response);

    return response;
  };

  const updateProfessional: UserContext["updateProfessional"] = async () => {

  }

  const sendFile: UserContext["sendFile"] = async (params) => {
    const response = await UserService.sendFile(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    return response;
  };
  
  const createLocations: UserContext["createLocation"] = async (params) => {
    const response = await UserService.createStates(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    return response;
  };

  const createSocialMedia: UserContext["createSocialMedias"] = async (params) => {

  }

  useEffect(() => {
    (async () => {
      if (!tokenRequest.success) {
        return;
      }

      const meResponse = await getMe();

      if (!meResponse) return;
      setLogged(true);
    })();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
  }, [currentUser, logged]);

  return (
    <userContext.Provider
      value={{
        logged,
        login,
        logout,
        register,
        getMe,
        putMe,
        getRoles,
        getSingleRole,
        registerProfessional,
        sendFile,
        createStates,
        createSocialMedia,
        registeredUser,
        currentUser,
        currentProfessional,
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
