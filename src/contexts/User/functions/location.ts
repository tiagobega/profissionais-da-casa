import type { ErrorHandler } from "../types";
import type {
  CreateLocationData,
  CreateManyLocationData,
  DeleteLocationData,
  DeleteManyLocationData,
  SingleLocationData,
  UpdateLocationData,
  UpdateManyLocationData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const locationFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateLocationData) => {
    const response = await UserService.createLocation(data);
    return withErrorHandler(response, errorHandler);
  };

  const createMany = async (data: CreateManyLocationData) => {
    const response = await UserService.createManyLocation(data);
    return withErrorHandler(response, errorHandler);
  };

  const edit = async (data: UpdateLocationData) => {
    const response = await UserService.putLocation(data);
    return withErrorHandler(response, errorHandler);
  };

  const editMany = async (data: UpdateManyLocationData) => {
    const response = await UserService.putManyLocation(data);
    return withErrorHandler(response, errorHandler);
  };

  const deleteLocation = async (data: DeleteLocationData) => {
    const response = await UserService.deleteLocation(data);
    return withErrorHandler(response, errorHandler);
  };
  const deleteManyLocation = async (data: DeleteManyLocationData) => {
    const response = await UserService.deleteManyLocation(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingle = async (data: SingleLocationData) => {
    const response = await UserService.getLocation(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAll = async () => {
    const response = await UserService.getAllLocation();
    return withErrorHandler(response, errorHandler);
  };

  return {
    create,
    createMany,
    edit,
    editMany,
    deleteLocation,
    deleteManyLocation,
    getSingle,
    getAll,
  };
};

export type LocationFunctionsReturn = ReturnType<typeof locationFunctions>;
