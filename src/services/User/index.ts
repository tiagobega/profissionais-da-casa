import { AxiosError } from "axios";
import {
  Me,
  Professional,
  ProfessionalSignUpData,
  SignIn,
  SignInData,
  SignInError,
  SignUp,
  SignUpData,
  SingleRole,
} from "./types";
import axios, { API_ROUTES } from "config/axios";
import { Role } from "constants/roles";

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

  static async professionalSignUp(data: ProfessionalSignUpData) {
    try {
      const response = await axios.api.post<Professional>(
        API_ROUTES.POST.SIGN_UP,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  static async getMe() {
    try {
      const response = await axios.api.get<Me>(API_ROUTES.GET.USER_ME);
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  static async putMe(data: Partial<Me>) {
    try {
      const response = await axios.api.put<Me>(API_ROUTES.PUT.USER_ME, data);
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  static async getRoles() {
    try {
      const response = await axios.api.get<Role[]>(API_ROUTES.GET.ROLE_ALL);
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  static async getSingleRole(id: string) {
    try {
      const response = await axios.api.get<SingleRole>(
        API_ROUTES.POST.ROLE_SINGLE
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }
}
