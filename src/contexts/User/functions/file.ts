import type { ErrorHandler } from "../types";
import type { SendFileData } from "services/User/types";

import { UserService } from "services/User";
import { AxiosError } from "axios";
import { withErrorHandler } from "./withErrorHandler";

export const fileFunctions = (errorHandler: ErrorHandler) => {
  const sendFile = async (data: SendFileData) => {
    const response = await UserService.sendFile(data);

    return withErrorHandler(response, errorHandler);
  };

  return {
    sendFile,
  };
};

export type FileFunctionsReturn = ReturnType<typeof fileFunctions>;
