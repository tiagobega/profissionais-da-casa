import type { ErrorHandler } from "../types";
import type {
  CreateFaqBlockData,
  CreateFaqQuestionData,
  DeleteFaqBlockData,
  DeleteFaqQuestionData,
  SingleFaqBlockData,
  SingleFaqQuestionData,
  UpdateFaqBlockData,
  UpdateFaqQuestionData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const faqFunctions = (errorHandler: ErrorHandler) => {
  //Block

  const createBlock = async (data: CreateFaqBlockData) => {
    const response = await UserService.createFaqBlock(data);
    return withErrorHandler(response, errorHandler);
  };

  const editBlock = async (data: UpdateFaqBlockData) => {
    const response = await UserService.putFaqBlock(data);
    return withErrorHandler(response, errorHandler);
  };

  const deleteBlock = async (data: DeleteFaqBlockData) => {
    const response = await UserService.deleteFaqBlock(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingleBlock = async (data: SingleFaqBlockData) => {
    const response = await UserService.getFaqBlock(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAllBlock = async () => {
    const response = await UserService.getAllFaqBlock();
    return withErrorHandler(response, errorHandler);
  };

  //Question

  const createQuestion = async (data: CreateFaqQuestionData) => {
    const response = await UserService.createFaqQuestion(data);
    return withErrorHandler(response, errorHandler);
  };

  const editQuestion = async (data: UpdateFaqQuestionData) => {
    const response = await UserService.putFaqQuestion(data);
    return withErrorHandler(response, errorHandler);
  };

  const deleteQuestion = async (data: DeleteFaqQuestionData) => {
    const response = await UserService.deleteFaqQuestion(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingleQuestion = async (data: SingleFaqQuestionData) => {
    const response = await UserService.getFaqQuestion(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAllQuestion = async () => {
    const response = await UserService.getAllFaqQuestion();
    return withErrorHandler(response, errorHandler);
  };

  return {
    createQuestion,
    editQuestion,
    deleteQuestion,
    getSingleQuestion,
    getAllQuestion,
    createBlock,
    editBlock,
    deleteBlock,
    getSingleBlock,
    getAllBlock,
  };
};

export type FAQFunctionsReturn = ReturnType<typeof faqFunctions>;
