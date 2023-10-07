import { AxiosError } from "axios";
import { GenericError } from "services/Base";
import { ErrorHandler } from "../types";

export function withErrorHandler<TResponse>(
  response: AxiosError<GenericError, any> | TResponse,
  errorHandler: ErrorHandler
) {
  if (response instanceof AxiosError) {
    errorHandler(response);
    return false;
  }
  return response;
}
