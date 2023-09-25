import type { ErrorHandler } from "../types";
import type { SendFileData } from "services/User/types";

import { UserService } from "services/User";
import { AxiosError } from "axios";

export const fileFunctions = (errorHandler: ErrorHandler) => {
  const sendFile = async (data: SendFileData) => {
    const response = await UserService.sendFile(data);

    if (response instanceof AxiosError) {
      errorHandler(response);
      return false;
    }

    return response;
  };

  return {
    sendFile,
  };
};

export type FileFunctionsReturn = ReturnType<typeof fileFunctions>;
