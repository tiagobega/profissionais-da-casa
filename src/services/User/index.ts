import { AxiosError } from "axios";
import { SignIn, SignInData, SignInError, SignUp, SignUpData } from "./types";
import axios, { API_ROUTES } from "config/axios";

export class UserService {
  static async singIn(data: SignInData) {
    try {
      const response = await axios.api.post<SignIn>(
        API_ROUTES.POST.SIGN_IN,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  static async signUp(data: SignUpData) {
    try {
      const response = await axios.api.post<SignUp>(
        API_ROUTES.POST.SIGN_UP,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }
}
