import type { ErrorHandler } from "../types";
import type {
  CreateManySocialMediaData,
  CreateSocialMediaData,
  DeleteSocialMediaData,
  SingleSocialMediaData,
  UpdateSocialMediaData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const socialMediaFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateSocialMediaData) => {
    const response = await UserService.createSocialMedia(data);
    return withErrorHandler(response, errorHandler);
  };

  const createMany = async (data: CreateManySocialMediaData) => {
    const response = await UserService.createManySocialMedia(data);
    return withErrorHandler(response, errorHandler);
  };

  const edit = async (data: UpdateSocialMediaData) => {
    const response = await UserService.putSocialMedia(data);
    return withErrorHandler(response, errorHandler);
  };

  const deleteSocialMedia = async (data: DeleteSocialMediaData) => {
    const response = await UserService.deleteSocialMedia(data);
    return withErrorHandler(response, errorHandler);
  };

  const getSingle = async (data: SingleSocialMediaData) => {
    const response = await UserService.getSocialMedia(data);
    return withErrorHandler(response, errorHandler);
  };

  const getAll = async () => {
    const response = await UserService.getAllSocialMedia();
    return withErrorHandler(response, errorHandler);
  };

  return {
    create,
    createMany,
    edit,
    deleteSocialMedia,
    getSingle,
    getAll,
  };
};

export type SocialMediaFunctionsReturn = ReturnType<
  typeof socialMediaFunctions
>;
