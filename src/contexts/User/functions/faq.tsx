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

export const faqFunctions = (errorHandler: ErrorHandler) => {
  //Block

  const createBlock = async (data: CreateFaqBlockData) => {
    const response = await UserService.createFaqBlock(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const editBlock = async (data: UpdateFaqBlockData) => {
    const response = await UserService.putFaqBlock(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deleteBlock = async (data: DeleteFaqBlockData) => {
    const response = await UserService.deleteFaqBlock(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingleBlock = async (data: SingleFaqBlockData) => {
    const response = await UserService.getFaqBlock(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAllBlock = async () => {
    const response = await UserService.getAllFaqBlock();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  //Question

  const createQuestion = async (data: CreateFaqQuestionData) => {
    const response = await UserService.createFaqQuestion(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const editQuestion = async (data: UpdateFaqQuestionData) => {
    const response = await UserService.putFaqQuestion(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deleteQuestion = async (data: DeleteFaqQuestionData) => {
    const response = await UserService.deleteFaqQuestion(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingleQuestion = async (data: SingleFaqQuestionData) => {
    const response = await UserService.getFaqQuestion(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAllQuestion = async () => {
    const response = await UserService.getAllFaqQuestion();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  return {
    createQuestion,
    editQuestion,
    deleteQuestion,
    getSingleQuestion,
    getAllQuestion,
  };
};

export type FAQFunctionsReturn = ReturnType<typeof faqFunctions>;
