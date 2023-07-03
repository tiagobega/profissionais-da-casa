import type { UserContext, ContextProviderProps } from "./types";

import {
  EmailConfirmationParams,
  EmailError,
  EmailReponse,
  LoginError,
  LoginParams,
  RegisterError,
  RegisterParams,
  RegisterResponse,
  User,
} from "constants/user";

import React, { useContext, useState } from "react";

import { AxiosError } from "axios";
import { api, API_ROUTES } from "config/axios";
import { LoginResponse } from "constants/user";
import { useToast } from "contexts/Toast";

export const userContext = React.createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { addToast } = useToast();

  const [logged, setLogged] = useState(false);

  const [currentUser, setCurrentUser] = useState<UserContext["currentUser"]>();
  const [registeredUser, setRegsiteredUser] =
    useState<UserContext["registeredUser"]>();

  const login = async (params: LoginParams) => {
    try {
      const response = await api.post<LoginResponse>(API_ROUTES.POST.AUTH, {
        identifier: params.email,
        password: params.password,
      });

      // setLogged(true);
    } catch (err) {
      const { response } = err as AxiosError<LoginError>;

      if (!response) return;

      addToast(response.data.error.message, {
        autoDestroy: false,
        timer: 5000,
      });
    }
  };

  const logout = () => {};

  const sendEmailConfirmation = async (params: EmailConfirmationParams) => {
    try {
      const response = await api.post<EmailReponse>(
        API_ROUTES.POST.AUTH_SEND_EMAIL_CONFIRMATION,
        params
      );
    } catch (err) {
      const error = err as EmailError;
    }
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
      const email = response.data.user.email;

      await sendEmailConfirmation({ email });
      callback();
    } catch (err) {
      const { response } = err as AxiosError<RegisterError>;

      if (!response) return;

      addToast(response.data.error.message, {
        autoDestroy: false,
        timer: 5000,
      });
    }
  };

  return (
    <userContext.Provider
      value={{ logged, login, logout, register, registeredUser, currentUser }}
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
