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

export const locationFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateLocationData) => {
    const response = await UserService.createLocation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const createMany = async (data: CreateManyLocationData) => {
    const response = await UserService.createManyLocation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const edit = async (data: UpdateLocationData) => {
    const response = await UserService.putLocation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const editMany = async (data: UpdateManyLocationData) => {
    const response = await UserService.putManyLocation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deleteLocation = async (data: DeleteLocationData) => {
    const response = await UserService.deleteLocation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };
  const deleteManyLocation = async (data: DeleteManyLocationData) => {
    const response = await UserService.deleteManyLocation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingle = async (data: SingleLocationData) => {
    const response = await UserService.getLocation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAll = async () => {
    const response = await UserService.getAllLocation();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
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
