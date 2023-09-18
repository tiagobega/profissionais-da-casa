import { AxiosError } from "axios";
import type {
  CreateLocationData,
  CreateSubplanData,
  GenericError,
  Me,
  Professional,
  ProfessionalSignUpData,
  ProfessionalUpdateData,
  SendFileData,
  SignIn,
  SignInData,
  SignInError,
  SignUp,
  SignUpData,
  SingleRole,
  Subplan,
} from "./types";

import axios, { API_ROUTES } from "config/axios";

import { Role } from "constants/roles";

import { mimeTypeToExtension } from "constants/mimeTypes";

export class UserService {
  //EVALUATIONS
  static async createEvaluation() {}
  static async putEvaluation() {}
  static async deleteEvaluation() {}
  static async getEvaluation() {}
  static async getAllEvaluation() {}

  //FAQ

  static async createFAQ() {}
  static async putFAQ() {}
  static async deleteFAQ() {}
  static async getFAQ() {}
  static async getAllFAQ() {}

  static async createFAQBlock() {}
  static async putFAQBlock() {}
  static async deleteFAQBlock() {}
  static async getFAQBlock() {}
  static async getAllFAQBlock() {}

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

  static async createLocation(data: CreateLocationData) {
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
  } //done

  static async putProfessional(data: ProfessionalUpdateData) {
    try {
      const response = await axios.api.put<Professional>(
        API_ROUTES.PUT.PROFESSIONAL_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  } //done

  static async getProfessional(id?: Professional["id"]) {
    try {
      const response = await axios.api.post<Professional>(
        API_ROUTES.POST.PROFESSIONAL_SINGLE,
        { id }
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  } //done

  static async getAllProfessional() {
    try {
      const response = await axios.api.get<Professional>(
        API_ROUTES.GET.PROFESSIONAL_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  } //done

  static async deleteProfessional(id: Professional["id"]) {
    try {
      const response = await axios.api.post<{ messages: string }>(
        API_ROUTES.POST.PROFESSIONAL_DELETE,
        { id }
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  //ROLES
  static async getSingleRole(id: string) {
    try {
      const response = await axios.api.get<SingleRole>(
        API_ROUTES.POST.ROLE_SINGLE
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
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

  static async createRole() {}
  static async putRole() {}
  static async deleteRole() {}

  //SOCIAL MEDIA

  static async createSocialMedia() {}
  static async putSocialMedia() {}
  static async deleteSocialMedia() {}
  static async getSocialMedia() {}
  static async getAllSocialMedia() {}

  //SUBPLAN

  static async createSubplan(data: CreateSubplanData) {
    try {
      const response = await axios.api.post<Subplan>(
        API_ROUTES.POST.SUBPLAN_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  static async putSubplan(data: Subplan) {
    try {
      const response = await axios.api.post<{ messages: string }>(
        API_ROUTES.PUT.SUBPLAN_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  static async deleteSubplan(data: { name: string } | { id: string }) {
    try {
      const response = await axios.api.post<{ messages: string }>(
        API_ROUTES.POST.SUBPLAN_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  static async getSubplan(data: { name: string } | { id: string }) {
    try {
      const response = await axios.api.post<{ subPlans: Subplan[] }>(
        API_ROUTES.POST.SUBPLAN_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  static async getAllSubplan() {
    try {
      const response = await axios.api.get<{ subPlans: Subplan[] }>(
        API_ROUTES.GET.SUBPLAN_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

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
}
