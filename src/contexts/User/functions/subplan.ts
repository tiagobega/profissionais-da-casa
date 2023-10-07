import type { ErrorHandler } from "../types";
import type {
  CreateSubplanData,
  DeleteSubplanData,
  SingleSubplanData,
  UpdateSubplanData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const subplanFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateSubplanData) => {
    const response = await UserService.createSubplan(data);
    return withErrorHandler(response, errorHandler);
  };

  const edit = async (data: UpdateSubplanData) => {
    const response = await UserService.putSubplan(data);
    return withErrorHandler(response, errorHandler);
  };

  const deleteSubplan = async (data: DeleteSubplanData) => {
    const response = await UserService.deleteSubplan(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingle = async (data: SingleSubplanData) => {
    const response = await UserService.getSubplan(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAll = async () => {
    const response = await UserService.getAllSubplan();
    return withErrorHandler(response, errorHandler);
  };

  return {
    create,
    edit,
    deleteSubplan,
    getSingle,
    getAll,
  };
};

export type SubplanFunctionsReturn = ReturnType<typeof subplanFunctions>;
