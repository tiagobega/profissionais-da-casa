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
import { Loading } from "components/Loading";
import { integratedFunctions } from "./functions/integrated";

export const userContext = React.createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(true);
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
  const integrated = integratedFunctions(errorHandler);

  useEffect(() => {
    (async () => {
      if (!tokenRequest.success) {
        return setLoading(false);
      }

      const meResponse = await user.getMe();

      if (!meResponse) return setLoading(false);

      if (meResponse.roleRel.name === "professional") {
        const professionalResponse = await professional.getSingle({
          userId: meResponse.id,
        });

        if (professionalResponse) {
          professional.setMyProfessional(professionalResponse);
        }
      }

      user.setLogged(true);
      setLoading(false);
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
        integrated,
      }}
    >
      {loading ? <Loading /> : children}
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
