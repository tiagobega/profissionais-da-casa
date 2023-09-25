import { AxiosError, AxiosRequestConfig } from "axios";
import axios from "config/axios";

export type UserServiceRequestOptions = {
  data?: any;
  config?: AxiosRequestConfig;
};

export interface GenericError {
  messages: string[];
}

export class BaseService {
  static async request<SuccessResponse, ErrorResponse = GenericError>(
    path: string,
    type: "post" | "put" | "get",
    options: UserServiceRequestOptions = {}
  ): Promise<SuccessResponse | AxiosError<ErrorResponse>> {
    const { config, data = {} } = options;

    try {
      let response;

      if (type === "get") {
        response = await axios.api.get<SuccessResponse>(path);
      } else {
        response = await axios.api[type]<SuccessResponse>(path, data, config);
      }

      return response.data;
    } catch (err) {
      return err as AxiosError<ErrorResponse>;
    }
  }
}
