import type { ErrorHandler } from "../types";
import type {
  CreatePortfolioProjectData,
  DeletePortfolioProjectData,
  SinglePortfolioProjectData,
  UpdatePortfolioProjectData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const portfolioProjectFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreatePortfolioProjectData) => {
    const response = await UserService.createPortfolioProject(data);
    return withErrorHandler(response, errorHandler);
  };

  const edit = async (data: UpdatePortfolioProjectData) => {
    const response = await UserService.putPortfolioProject(data);
    return withErrorHandler(response, errorHandler);
  };

  const deletePortfolioProject = async (data: DeletePortfolioProjectData) => {
    const response = await UserService.deletePortfolioProject(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingle = async (data: SinglePortfolioProjectData) => {
    const response = await UserService.getPortfolioProject(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAll = async () => {
    const response = await UserService.getAllPortfolioProject();
    return withErrorHandler(response, errorHandler);
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
