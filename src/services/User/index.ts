import { AxiosError } from "axios";

import axios, { API_ROUTES } from "config/axios";

import type * as ST from "./types/";

import { mimeTypeToExtension } from "constants/mimeTypes";

export class UserService {
  //EVALUATIONS

  static async createEvaluation(data: ST.CreateEvaluationData) {
    try {
      const response = await axios.api.post<ST.Evaluation>(
        API_ROUTES.POST.EVALUATION_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async putEvaluation(data: ST.UpdateEvaluationData) {
    try {
      const response = await axios.api.put<ST.Evaluation>(
        API_ROUTES.PUT.EVALUATION_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async deleteEvaluation(data: ST.DeleteEvaluationData) {
    try {
      const response = await axios.api.post<ST.Evaluation>(
        API_ROUTES.POST.EVALUATION_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getEvaluation(data: ST.SingleEvaluationData) {
    try {
      const response = await axios.api.post<ST.Evaluation>(
        API_ROUTES.POST.EVALUATION_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getAllEvaluation() {
    try {
      const response = await axios.api.get<ST.AllEvaluationResponse>(
        API_ROUTES.GET.EVALUATION_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  //FAQ BLOCK

  static async createFaqBlock(data: ST.CreateFaqBlockData) {
    try {
      const response = await axios.api.post<ST.FaqBlock>(
        API_ROUTES.POST.FAQ_BLOCK_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async putFaqBlock(data: ST.UpdateFaqBlockData) {
    try {
      const response = await axios.api.put<ST.FaqBlock>(
        API_ROUTES.PUT.FAQ_BLOCK_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async deleteFaqBlock(data: ST.DeleteFaqBlockData) {
    try {
      const response = await axios.api.post<ST.FaqBlock>(
        API_ROUTES.POST.FAQ_BLOCK_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getFaqBlock(data: ST.SingleFaqBlockData) {
    try {
      const response = await axios.api.post<ST.FaqBlock>(
        API_ROUTES.POST.FAQ_BLOCK_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getAllFaqBlock() {
    try {
      const response = await axios.api.get<ST.AllFaqBlockResponse>(
        API_ROUTES.GET.FAQ_BLOCK_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  //FAQ QUESTION
  static async createFaqQuestion(data: ST.CreateFaqQuestionData) {
    try {
      const response = await axios.api.post<ST.FaqQuestion>(
        API_ROUTES.POST.FAQ_QUESTION_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async putFaqQuestion(data: ST.UpdateFaqQuestionData) {
    try {
      const response = await axios.api.put<ST.FaqQuestion>(
        API_ROUTES.PUT.FAQ_QUESTION_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async deleteFaqQuestion(data: ST.DeleteFaqQuestionData) {
    try {
      const response = await axios.api.post<ST.FaqQuestion>(
        API_ROUTES.POST.FAQ_QUESTION_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getFaqQuestion(data: ST.SingleFaqQuestionData) {
    try {
      const response = await axios.api.post<ST.FaqQuestion>(
        API_ROUTES.POST.FAQ_QUESTION_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getAllFaqQuestion() {
    try {
      const response = await axios.api.get<ST.AllFaqQuestionResponse>(
        API_ROUTES.GET.FAQ_QUESTION_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  //FILE

  static async sendFile(data: ST.SendFileData) {
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
      return err as AxiosError<ST.GenericError>;
    }
  }

  //LEADS
  static async createLeads() {}
  static async putLeads() {}
  static async deleteLeads() {}
  static async getLeads() {}
  static async getAllLeads() {}

  //LOCATION

  static async createLocation(data: ST.CreateLocationData) {
    try {
      const response = await axios.api.post<unknown>(
        API_ROUTES.POST.LOCATION_CREATE_MANY,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }
  static async putLocation() {}
  static async deleteLocation() {}
  static async getLocation() {}
  static async getAllLocation() {}

  //PROFESSIONAL

  static async professionalSignUp(data: ST.ProfessionalSignUpData) {
    try {
      const response = await axios.api.post<ST.Professional>(
        API_ROUTES.POST.PROFESSIONAL_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async putProfessional(data: ST.ProfessionalUpdateData) {
    try {
      const response = await axios.api.put<ST.Professional>(
        API_ROUTES.PUT.PROFESSIONAL_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getProfessional(data: ST.SingleProfessionalData) {
    try {
      const response = await axios.api.post<ST.Professional>(
        API_ROUTES.POST.PROFESSIONAL_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getAllProfessional() {
    try {
      const response = await axios.api.get<ST.AllProfessionalData>(
        API_ROUTES.GET.PROFESSIONAL_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async deleteProfessional(data: ST.DeleteProfessionalData) {
    try {
      const response = await axios.api.post<ST.DeleteResponse>(
        API_ROUTES.POST.PROFESSIONAL_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  //ROLES

  static async getRole(data: ST.SingleRoleData) {
    try {
      const response = await axios.api.post<ST.Role>(
        API_ROUTES.POST.ROLE_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getAllRole() {
    try {
      const response = await axios.api.get<ST.AllRoleResponse>(
        API_ROUTES.GET.ROLE_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async createRole(data: ST.CreateRoleData) {
    try {
      const response = await axios.api.post<ST.Role>(
        API_ROUTES.POST.ROLE_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async putRole(data: ST.UpdateRoleData) {
    try {
      const response = await axios.api.post<ST.Role>(
        API_ROUTES.PUT.ROLE_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async deleteRole(data: ST.DeleteRoleData) {
    try {
      const response = await axios.api.post<ST.DeleteResponse>(
        API_ROUTES.POST.ROLE_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  //SOCIAL MEDIA
  static async createSocialMedia() {}
  static async putSocialMedia() {}
  static async deleteSocialMedia() {}
  static async getSocialMedia() {}
  static async getAllSocialMedia() {}

  //SUBPLAN

  static async createSubplan(data: ST.CreateSubplanData) {
    try {
      const response = await axios.api.post<ST.Subplan>(
        API_ROUTES.POST.SUBPLAN_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async putSubplan(data: ST.Subplan) {
    try {
      const response = await axios.api.post<{ messages: string }>(
        API_ROUTES.PUT.SUBPLAN_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
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
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getSubplan(data: { name: string } | { id: string }) {
    try {
      const response = await axios.api.post<{ subPlans: ST.Subplan[] }>(
        API_ROUTES.POST.SUBPLAN_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getAllSubplan() {
    try {
      const response = await axios.api.get<{ subPlans: ST.Subplan[] }>(
        API_ROUTES.GET.SUBPLAN_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  //USER

  static async singIn(data: ST.SignInData) {
    try {
      const response = await axios.api.post<ST.SignInResponse>(
        API_ROUTES.POST.USER_SIGN_IN,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async signUp(data: ST.SignUpData) {
    try {
      const response = await axios.api.post<ST.SignUpResponse>(
        API_ROUTES.POST.USER_SIGN_UP,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async getMe() {
    try {
      const response = await axios.api.get<ST.Me>(API_ROUTES.GET.USER_ME);
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }

  static async putMe(data: Partial<ST.Me>) {
    try {
      const response = await axios.api.put<ST.Me>(API_ROUTES.PUT.USER_ME, data);
      return response.data;
    } catch (err) {
      return err as AxiosError<ST.GenericError>;
    }
  }
}
