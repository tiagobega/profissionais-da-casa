import type { ErrorHandler } from "../types";
import type {
  CreateLeadData,
  DeleteLeadData,
  SingleLeadData,
  UpdateLeadData,
} from "services/User/types";

import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const leadFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateLeadData) => {
    const response = await UserService.createLead(data);
    return withErrorHandler(response, errorHandler);
  };

  const edit = async (data: UpdateLeadData) => {
    const response = await UserService.putLead(data);
    return withErrorHandler(response, errorHandler);
  };

  const deleteLead = async (data: DeleteLeadData) => {
    const response = await UserService.deleteLead(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingle = async (data: SingleLeadData) => {
    const response = await UserService.getLead(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAll = async () => {
    const response = await UserService.getAllLeads();
    return withErrorHandler(response, errorHandler);
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
