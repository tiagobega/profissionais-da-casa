import type { ErrorHandler } from "../types";
import type {
  DeleteProfessionalData,
  Professional,
  ProfessionalSignUpData,
  ProfessionalUpdateData,
  SingleProfessionalData,
} from "services/User/types";

import { AxiosError } from "axios";
import { useState } from "react";
import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const professionalFunctions = (errorHandler: ErrorHandler) => {
  const [myProfessional, setMyProfessional] = useState<
    Professional | undefined
  >();
  const [professional, setProfessional] = useState<Professional | undefined>();

  const register = async (params: ProfessionalSignUpData) => {
    const response = await UserService.professionalSignUp(params);

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    setMyProfessional(response);

    return response;
  };

  const update = async (data: ProfessionalUpdateData) => {
    const response = await UserService.putProfessional(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingle = async (data: SingleProfessionalData) => {
    const response = await UserService.getProfessional(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    setProfessional(response);

    return response;
  };

  const getAll = async () => {
    const response = await UserService.getAllProfessional();
    return withErrorHandler(response, errorHandler);
  };

  const deleteProfessional = async (data: DeleteProfessionalData) => {
    const response = await UserService.deleteProfessional(data);
    return withErrorHandler(response, errorHandler);
  };

  return {
    /**
     * any professional in app
     */
    professional,
    setProfessional,
    
    /**
     * professional related to the logged user
     */
    myProfessional,
    setMyProfessional,

    register,
    update,
    getSingle,
    getAll,
    deleteProfessional,
  };
};

export type ProfessionalFunctionsReturn = ReturnType<
  typeof professionalFunctions
>;
