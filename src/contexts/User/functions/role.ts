import type { ErrorHandler } from "../types";
import type {
  CreateRoleData,
  DeleteRoleData,
  SingleRoleData,
  UpdateRoleData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const roleFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateRoleData) => {
    const response = await UserService.createRole(data);
    return withErrorHandler(response, errorHandler);
  };

  const edit = async (data: UpdateRoleData) => {
    const response = await UserService.putRole(data);
    return withErrorHandler(response, errorHandler);
  };

  const deleteRole = async (data: DeleteRoleData) => {
    const response = await UserService.deleteRole(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingle = async (data: SingleRoleData) => {
    const response = await UserService.getRole(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAll = async () => {
    const response = await UserService.getAllRole();
    return withErrorHandler(response, errorHandler);
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
