import type { ErrorHandler } from "../types";
import type {
  CreateRoleData,
  DeleteRoleData,
  SingleRoleData,
  UpdateRoleData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";

export const roleFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateRoleData) => {
    const response = await UserService.createRole(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const edit = async (data: UpdateRoleData) => {
    const response = await UserService.putRole(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deleteRole = async (data: DeleteRoleData) => {
    const response = await UserService.deleteRole(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingle = async (data: SingleRoleData) => {
    const response = await UserService.getRole(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAll = async () => {
    const response = await UserService.getAllRole();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  return {
    create,
    edit,
    deleteRole,
    getSingle,
    getAll,
  };
};

export type RoleFunctionsReturn = ReturnType<typeof roleFunctions>;
