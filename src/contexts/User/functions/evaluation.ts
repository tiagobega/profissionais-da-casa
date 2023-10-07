import type { ErrorHandler } from "../types";
import type {
  CreateEvaluationData,
  DeleteEvaluationData,
  SingleEvaluationData,
  UpdateEvaluationData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const evaluationFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateEvaluationData) => {
    const response = await UserService.createEvaluation(data);
    return withErrorHandler(response, errorHandler);
  };

  const edit = async (data: UpdateEvaluationData) => {
    const response = await UserService.putEvaluation(data);
    return withErrorHandler(response, errorHandler);
  };

  const deleteEvaluation = async (data: DeleteEvaluationData) => {
    const response = await UserService.deleteEvaluation(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingle = async (data: SingleEvaluationData) => {
    const response = await UserService.getEvaluation(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAll = async () => {
    const response = await UserService.getAllEvaluation();
    return withErrorHandler(response, errorHandler);
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
