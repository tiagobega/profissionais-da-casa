import { AxiosError } from "axios";
import {
  CreateManyLocationData,
  Me,
  Professional,
  ProfessionalSignUpData,
  SendFileData,
  SignIn,
  SignInData,
  SignInError,
  SignUp,
  SignUpData,
  SingleRole,
} from "./types";
import axios, { API_ROUTES } from "config/axios";
import { Role } from "constants/roles";
import { mimeTypeToExtension } from "constants/mimeTypes";

export class UserService {
  //ROLES

  static async getRoles() {
    try {
      const response = await axios.api.get<Role[]>(API_ROUTES.GET.ROLE_ALL);
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  static async createRole() {}
  static async putRole() {}
  static async deleteRole() {}

  //USER

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

  //PROFESSIONAL

  static async professionalSignUp(data: ProfessionalSignUpData) {
    try {
      const response = await axios.api.post<Professional>(
        API_ROUTES.POST.PROFESSIONAL_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  static async putProfessional(data: Partial<Professional>) {
    try {
      const response = await axios.api.put<Professional>(
        API_ROUTES.PUT.PROFESSIONAL_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  static async getProfessional(id: string) {
    try {
      const response = await axios.api.post<Professional>(
        API_ROUTES.POST.PROFESSIONAL_SINGLE,
        { id }
      );
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

  //FILE

  static async sendFile(data: SendFileData) {
    data.acl ??= "public-read";
    data.contentEncoding ??= "base64";

    data.filename += `_${Date.now()}${mimeTypeToExtension[data.contentType]}`;

    try {
      const response = await axios.api.post<string>(
        API_ROUTES.POST.FILE_UPLOAD,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }

  //LOCATION

  static async createLocation(data: CreateManyLocationData) {
    try {
      const response = await axios.api.post<unknown>(
        API_ROUTES.POST.LOCATION_CREATE_MANY,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<SignInError>;
    }
  }
  static async putLocation() {}
  static async deleteLocation() {}
  static async getLocation() {}
  static async getAllLocation() {}

  //SOCIAL MEDIA

  static async createSocialMedia() {}
  static async putSocialMedia() {}
  static async deleteSocialMedia() {}
  static async getSocialMedia() {}
  static async getAllSocialMedia() {}

  //FAQ

  static async createFAQ() {}
  static async putFAQ() {}
  static async deleteFAQ() {}
  static async getFAQ() {}
  static async getAllFAQ() {}

  //SUBPLAN

  static async createSubplan() {}
  static async putSubplan() {}
  static async deleteSubplan() {}
  static async getSubplan() {}
  static async getAllSubplan() {}
}

