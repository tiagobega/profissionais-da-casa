import type { ErrorHandler } from "../types";
import type {
  CreateSubplanData,
  DeleteSubplanData,
  SingleSubplanData,
  UpdateSubplanData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";

export const subplanFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateSubplanData) => {
    const response = await UserService.createSubplan(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const edit = async (data: UpdateSubplanData) => {
    const response = await UserService.putSubplan(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deleteSubplan = async (data: DeleteSubplanData) => {
    const response = await UserService.deleteSubplan(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingle = async (data: SingleSubplanData) => {
    const response = await UserService.getSubplan(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAll = async () => {
    const response = await UserService.getAll();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
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
