import type { ErrorHandler } from "../types";
import type {
  CreateSocialMediaData,
  DeleteSocialMediaData,
  SingleSocialMediaData,
  UpdateSocialMediaData,
} from "services/User/types";

import { AxiosError } from "axios";
import { UserService } from "services/User";

export const socialMediaFunctions = (errorHandler: ErrorHandler) => {
  const create = async (data: CreateSocialMediaData) => {
    const response = await UserService.createSocialMedia(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const edit = async (data: UpdateSocialMediaData) => {
    const response = await UserService.putSocialMedia(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const deleteSocialMedia = async (data: DeleteSocialMediaData) => {
    const response = await UserService.deleteSocialMedia(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getSingle = async (data: SingleSocialMediaData) => {
    const response = await UserService.getSocialMedia(data);
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  const getAll = async () => {
    const response = await UserService.getAllSocialMedia();
    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  return {
    create,
    edit,
    deleteSocialMedia,
    getSingle,
    getAll,
  };
};

export type SocialMediaFunctionsReturn = ReturnType<
  typeof socialMediaFunctions
>;
