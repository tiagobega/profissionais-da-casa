import type { UserContext, ContextProviderProps } from "./types";
import React, { useContext, useEffect, useState } from "react";

import { AxiosError } from "axios";
import { recreateApiAuthInterceptors, tokenRequest } from "config/axios";

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
  const [myProfessional, setMyProfessional] =
    useState<UserContext["myProfessional"]>();

  const [roles, setRoles] = useState<UserContext["roles"]>([]);

  const [faqBlocks, getFaqBlocks] = useState();

  const [currentProfessional, setCurrentProfessional] =
    useState<UserContext["currentProfessional"]>();

  const handleErrors = (responseData: AxiosError<GenericError>) => {
    responseData.response?.data.messages.forEach((message: string) => {
      addToast(message, {
        type: "error",
        autoDestroy: true,
        timer: 5000,
      });
    });
  };

  //EVALUATION
  const createEvaluation: UserContext['createEvaluation'] = async (data) => {
    const response = await UserService.sendFile(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    return response;
  };
  const putEvaluation: UserContext['putEvaluation'] = async (data) => {};
  const deleteEvaluation: UserContext['deleteEvaluation'] = () => {};
  const getEvaluation: UserContext['getEvaluation'] = () => {};
  const getAllEvaluation: UserContext['getAllEvaluation'] = () => {};

  //FAQ
  const createFAQ = () => {};
  const putFAQ = () => {};
  const deleteFAQ = () => {};
  const getFAQ = () => {};
  const getAllFAQ = () => {};

  const createFAQBlock = () => {};
  const putFAQBlock = () => {};
  const deleteFAQBlock = () => {};
  const getFAQBlock = () => {};
  const getAllFAQBlock = () => {};

  //FILE
  const sendFile: UserContext["sendFile"] = async (params) => {
    const response = await UserService.sendFile(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    return response;
  };

  //LOCATION

  const createLocations: UserContext["createLocations"] = async (params) => {
    const response = await UserService.createLocation(params);

    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    return response;
  };
  const putLocation = () => {};
  const deleteLocation = () => {};
  const getLocation = () => {};
  const getAllLocations = () => {};

  //PROFESSIONAL

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

  const putProfessional: UserContext["putProfessional"] = async (data) => {
    const response = await UserService.putProfessional(data);
    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    return response;
  };

  const getProfessional: UserContext["getProfessional"] = async (data) => {
    const response = await UserService.getProfessional(data);
    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    setCurrentProfessional(response);

    return response;
  };

  const getAllProfessionals: UserContext["getAllProfessionals"] = async () => {
    const response = await UserService.getAllProfessional();
    if (response instanceof AxiosError) {
      handleErrors(response);
      return false;
    }

    return response;
  };

  const deleteProfessional = () => {};

  //ROLES

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

  const createRole = () => {};
  const putRole = () => {};
  const deleteRole = () => {};

  //SOCIAL MEDIA
  const createSocialMedia = () => {};
  const createManySocialMedia = () => {};
  const putSocialMedia = () => {};
  const deleteSocialMedia = () => {};
  const getSocialMedia = () => {};
  const getAllSocialMedia = () => {};

  //SUBPLAN
  const createSubplan = () => {};
  const putSubplan = () => {};
  const deleteSubplan = () => {};
  const getSubplan = () => {};

  //USER
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

  const logout: UserContext["logout"] = (callback) => {
    setLogged(false);
    setCurrentUser(undefined);
    Session.destroy("auth");
    callback();
  };

  useEffect(() => {
    (async () => {
      if (!tokenRequest.success) {
        return;
      }

      const meResponse = await getMe();

      if (!meResponse) return;

      if(meResponse.role === "professional") {
        
      }

      setLogged(true);
    })();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
  }, [currentUser, logged]);

  return (
    <userContext.Provider
      value={{
        //EVALUATIONS

        //FAQ

        //FILE
        sendFile,

        //LOCATION
        createLocations,

        //PROFESSIONAL
        currentProfessional,
        myProfessional,
        registerProfessional,
        getProfessional,
        getAllProfessionals,

        //ROLES
        getRoles,
        getSingleRole,

        //SOCIAL MEDIA

        //SUBPLAN

        //USER
        logged,
        currentUser,
        login,
        logout,
        register,
        getMe,
        putMe,

        putProfessional,
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
