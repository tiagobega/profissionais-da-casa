import type { UserContext, ContextProviderProps } from "./types";
import React, { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { tokenRequest } from "config/axios";
import { useToast } from "contexts/Toast";
import { GenericError } from "services/Base";

import {
  evaluationFunctions,
  faqFunctions,
  fileFunctions,
  leadFunctions,
  locationFunctions,
  portfolioProjectFunctions,
  professionalFunctions,
  userFunctions,
  roleFunctions,
  socialMediaFunctions,
  subplanFunctions,
} from "./functions";

export const userContext = React.createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { addToast } = useToast();
  const errorHandler = (responseData: AxiosError<GenericError>) => {
    responseData.response?.data.messages.forEach((message: string) => {
      addToast(message, {
        type: "error",
        autoDestroy: true,
        timer: 5000,
      });
    });
  };

  const evaluation = evaluationFunctions(errorHandler);
  const faq = faqFunctions(errorHandler);
  const file = fileFunctions(errorHandler);
  const lead = leadFunctions(errorHandler);
  const user = userFunctions(errorHandler);
  const professional = professionalFunctions(errorHandler);
  const location = locationFunctions(errorHandler);
  const portfolioProject = portfolioProjectFunctions(errorHandler);
  const role = roleFunctions(errorHandler);
  const socialMedia = socialMediaFunctions(errorHandler);
  const subplan = subplanFunctions(errorHandler);

  useEffect(() => {
    (async () => {
      if (!tokenRequest.success) {
        return;
      }

      const meResponse = await user.getMe();

      if (!meResponse) return;

      if (meResponse.role === "professional") {
        const professionalResponse = await professional.getSingle({
          id: meResponse.id,
        });

        if (professionalResponse) {
          professional.setMyProfessional(professionalResponse);
        }
      }
      user.setLogged(true);
    })();
  }, []);

  return (
    <userContext.Provider
      value={{
        evaluation,
        faq,
        file,
        lead,
        location,
        portfolioProject,
        professional,
        role,
        socialMedia,
        subplan,
        user,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(userContext);

  if (!context)
    throw new Error(
      "The useApi hook should be used inside a UserContext provider"
    );

  return context;
};

export const useUser = () => {
  return useApi().user;
};
