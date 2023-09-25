import type { ErrorHandler } from "../types";
import type {
  CreateLeadData,
  DeleteLeadData,
  SingleLeadData,
  UpdateLeadData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";

export const leadFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateLeadData) => {
    const response = await UserService.createLead(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const edit = async (data: UpdateLeadData) => {
    const response = await UserService.putLead(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deleteLead = async (data: DeleteLeadData) => {
    const response = await UserService.deleteLead(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingle = async (data: SingleLeadData) => {
    const response = await UserService.getLead(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAll = async () => {
    const response = await UserService.getAllLeads();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  return {
    create,
    edit,
    deleteLead,
    getSingle,
    getAll,
  };
};

export type LeadFunctionsReturn = ReturnType<typeof leadFunctions>;
