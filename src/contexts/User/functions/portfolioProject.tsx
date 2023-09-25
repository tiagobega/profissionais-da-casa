import type { ErrorHandler } from "../types";
import type {
  CreatePortfolioProjectData,
  DeletePortfolioProjectData,
  SinglePortfolioProjectData,
  UpdatePortfolioProjectData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";

export const portfolioProjectFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreatePortfolioProjectData) => {
    const response = await UserService.createPortfolioProject(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const edit = async (data: UpdatePortfolioProjectData) => {
    const response = await UserService.putPortfolioProject(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deletePortfolioProject = async (data: DeletePortfolioProjectData) => {
    const response = await UserService.deletePortfolioProject(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingle = async (data: SinglePortfolioProjectData) => {
    const response = await UserService.getPortfolioProject(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAll = async () => {
    const response = await UserService.getAllPortfolioProject();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  return {
    create,
    edit,
    deletePortfolioProject,
    getSingle,
    getAll,
  };
};

export type PortfolioProjectFunctionsReturn = ReturnType<
  typeof portfolioProjectFunctions
>;
