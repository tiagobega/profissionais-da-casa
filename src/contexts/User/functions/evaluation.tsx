import type { ErrorHandler } from "../types";
import type {
  CreateEvaluationData,
  DeleteEvaluationData,
  SingleEvaluationData,
  UpdateEvaluationData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";

export const evaluationFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateEvaluationData) => {
    const response = await UserService.createEvaluation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const edit = async (data: UpdateEvaluationData) => {
    const response = await UserService.putEvaluation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deleteEvaluation = async (data: DeleteEvaluationData) => {
    const response = await UserService.deleteEvaluation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingle = async (data: SingleEvaluationData) => {
    const response = await UserService.getEvaluation(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAll = async () => {
    const response = await UserService.getAllEvaluation();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  return {
    create,
    edit,
    deleteEvaluation,
    getSingle,
    getAll,
  };
};

export type EvaluationFunctionsReturn = ReturnType<typeof evaluationFunctions>;
