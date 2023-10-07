import type { ErrorHandler } from "../types";
import type {
  CreateLeadData,
  DeleteLeadData,
  IntegratedSignUpData,
  SingleLeadData,
  UpdateLeadData,
} from "services/User/types";

import { UserService } from "services/User";
import { withErrorHandler } from "./withErrorHandler";

export const integratedFunctions = (errorHandler: ErrorHandler) => {
  const signUp = async (data: IntegratedSignUpData) =>
    withErrorHandler(await UserService.signUpIntegrated(data), errorHandler);

  return {
    signUp,
  };
};

export type IntegratedFunctionsReturn = ReturnType<typeof integratedFunctions>;
