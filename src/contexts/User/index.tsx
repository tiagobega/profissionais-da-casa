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
import { api, API_ROUTES } from "config/axios";
import { LoginResponse } from "constants/user";
import { useToast } from "contexts/Toast";
import { Session } from "utils/Session";

export const userContext = React.createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { addToast } = useToast();

  const [logged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserContext["currentUser"]>();
  const [registeredUser, setRegisteredUser] =
    useState<UserContext["registeredUser"]>();

  const login: UserContext["login"] = async (params, callback) => {
    try {
      const response = await api.post<LoginResponse>(API_ROUTES.POST.AUTH, {
        identifier: params.email,
        password: params.password,
      });

      Session.set({ accessToken: response.data.jwt }, { context: "auth" });
      setLogged(true);
      setCurrentUser(response.data.user);
      callback();
    } catch (err) {
      const { response } = err as AxiosError<LoginError>;

      if (!response) return;

      addToast(response.data.error.message, {
        autoDestroy: true,
        timer: 5000,
      });
    }
  };

  const logout: UserContext["logout"] = (callback) => {
    setLogged(false);
    setCurrentUser(undefined);
    Session.destroy("auth");
    callback();
  };

  const register: UserContext["register"] = async (params, callback) => {
    const { name, email, phone, zipCode, password, RG, CPF } = params;
    const data = {
      username: name,
      RG,
      CPF,
      email,
      password,
      ProfilePhone: phone,
      ProfilePostalCode: zipCode,
    };

    try {
      const response = await api.post<RegisterResponse>(
        API_ROUTES.POST.AUTH_REGISTER,
        data
      );

      setRegisteredUser(response.data.user);

      const email = response.data.user.email;

      await sendEmailConfirmation({ email });

      callback();
    } catch (err) {
      const { response } = err as AxiosError<RegisterError>;

      if (!response) return;

      addToast(response.data.error.message, {
        autoDestroy: true,
        timer: 5000,
      });
    }
  };

  const sendEmailConfirmation: UserContext["sendEmailConfirmation"] = async (
    params: EmailConfirmationParams
  ) => {
    try {
      const response = await api.post<EmailReponse>(
        API_ROUTES.POST.AUTH_SEND_EMAIL_CONFIRMATION,
        params
      );

      if (!response.data.sent) {
        addToast("Não foi possível enviar um e-mail de confirmação", {
          autoDestroy: true,
          timer: 5000,
        });
      } else {
        addToast(`Um email foi enviado para: ${response.data.email}`, {
          autoDestroy: true,
          timer: 5000,
        });
      }
    } catch (err) {
      const error = err as EmailError;
      addToast("Não foi possível enviar um e-mail de confirmação", {
        autoDestroy: true,
        timer: 5000,
      });
    }
  };

  const me = async () => {
    try {
      const response = await api.get<MeResponse>(API_ROUTES.GET.USERS_ME);

      setCurrentUser(response.data);
      setLogged(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const { accessToken } = Session.get("auth");

    if (accessToken && !currentUser) {
      me();
    }
  }, []);

  return (
    <userContext.Provider
      value={{
        logged,
        login,
        logout,
        register,
        sendEmailConfirmation,
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
