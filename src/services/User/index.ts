import type * as ST from "./types/";
import { AxiosError } from "axios";

import axios, { API_ROUTES } from "config/axios";
import { BaseService, GenericError } from "services/Base";
import { mimeTypeToExtension } from "constants/mimeTypes";

function createSignUpIntegratedObj(
  data: ST.IntegratedSignUpData
): ST.IntegratedSignUpObj {
  const obj: Partial<ST.IntegratedSignUpObj> = {};
  let dataKey: keyof typeof obj;

  for (dataKey in data) {
    obj[dataKey] = JSON.stringify(data[dataKey]);
  }

  return obj as Required<typeof obj>;
}

export class UserService extends BaseService {
  //EMAIL
  static async sendEmail(data: ST.SendEmailData) {
    return await this.request(API_ROUTES.POST.EMAIL_SEND, "post", { data });
  }

  //EVALUATIONS
  static async createEvaluation(data: ST.CreateEvaluationData) {
    return await this.request<ST.Evaluation>(
      API_ROUTES.POST.EVALUATION_CREATE,
      "post",
      {
        data,
      }
    );
  }
  static async putEvaluation(data: ST.UpdateEvaluationData) {
    try {
      const response = await axios.api.put<ST.Evaluation>(
        API_ROUTES.PUT.EVALUATION_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllEvaluation() {
    try {
      const response = await axios.api.get<ST.AllEvaluationResponse>(
        API_ROUTES.GET.EVALUATION_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllFaqBlock() {
    try {
      const response = await axios.api.get<ST.AllFaqBlockResponse>(
        API_ROUTES.GET.FAQ_BLOCK_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllFaqQuestion() {
    try {
      const response = await axios.api.get<ST.AllFaqQuestionResponse>(
        API_ROUTES.GET.FAQ_QUESTION_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
    }
  }

  //INTEGRATED
  static async signUpIntegrated(data: ST.IntegratedSignUpData) {
    const dataObj = createSignUpIntegratedObj(data);

    return await this.request<ST.IntegratedSignUpResponse>(
      API_ROUTES.POST.INTEGRATED,
      "post",
      {
        data: dataObj,
      }
    );
  }

  //LEADS
  static async createLead(data: ST.CreateLeadData) {
    try {
      const response = await axios.api.post<ST.Lead>(
        API_ROUTES.POST.LEAD_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async putLead(data: ST.UpdateLeadData) {
    try {
      const response = await axios.api.put<ST.Lead>(
        API_ROUTES.PUT.LEAD_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async deleteLead(data: ST.DeleteLeadData) {
    try {
      const response = await axios.api.post<ST.Lead>(
        API_ROUTES.POST.LEAD_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getLead(data: ST.SingleLeadData) {
    try {
      const response = await axios.api.post<ST.Lead>(
        API_ROUTES.POST.LEAD_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllLeads() {
    try {
      const response = await axios.api.get<ST.AllLeadResponse>(
        API_ROUTES.GET.LEAD_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  //LOCATION
  static async createLocation(data: ST.CreateLocationData) {
    try {
      const response = await axios.api.post<ST.Location>(
        API_ROUTES.POST.LOCATION_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async createManyLocation(data: ST.CreateManyLocationData) {
    try {
      const response = await axios.api.post<ST.CreateManyLocationResponse>(
        API_ROUTES.POST.LOCATION_CREATE_MANY,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async putLocation(data: ST.UpdateLocationData) {
    try {
      const response = await axios.api.put<unknown>(
        API_ROUTES.POST.LOCATION_CREATE_MANY,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async putManyLocation(data: ST.UpdateManyLocationData) {
    try {
      const response = await axios.api.put<unknown>(
        API_ROUTES.PUT.LOCATION_EDIT_MANY,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async deleteLocation(data: ST.DeleteLocationData) {
    try {
      const response = await axios.api.post<ST.DeleteResponse>(
        API_ROUTES.POST.LOCATION_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async deleteManyLocation(data: ST.DeleteManyLocationData) {
    try {
      const response = await axios.api.post<ST.DeleteResponse>(
        API_ROUTES.POST.LOCATION_DELETE_MANY,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getLocation(data: ST.SingleLocationData) {
    try {
      const response = await axios.api.post<ST.Location>(
        API_ROUTES.POST.LOCATION_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllLocation() {
    try {
      const response = await axios.api.get<ST.AllLocationResponse>(
        API_ROUTES.GET.LOCATION_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  //PORTFOLIO PROJETCT

  static async createPortfolioProject(data: ST.CreatePortfolioProjectData) {
    try {
      const response = await axios.api.post<ST.PortfolioProject>(
        API_ROUTES.POST.PORTFOLIO_PROJECT_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async putPortfolioProject(data: ST.UpdatePortfolioProjectData) {
    try {
      const response = await axios.api.put<ST.Role>(
        API_ROUTES.PUT.PORTFOLIO_PROJECT_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async deletePortfolioProject(data: ST.DeletePortfolioProjectData) {
    try {
      const response = await axios.api.post<ST.DeleteResponse>(
        API_ROUTES.POST.PORTFOLIO_PROJECT_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getPortfolioProject(data: ST.SinglePortfolioProjectData) {
    try {
      const response = await axios.api.post<ST.PortfolioProject>(
        API_ROUTES.POST.PORTFOLIO_PROJECT_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllPortfolioProject() {
    try {
      const response = await axios.api.get<ST.AllPortfolioProjectResponse>(
        API_ROUTES.GET.PORTFOLIO_PROJECT_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  //PROFESSIONAL
  static async professionalSignUp(data: ST.ProfessionalSignUpData) {
    try {
      const response = await axios.api.post<ST.Professional>(
        API_ROUTES.POST.PROFESSIONAL_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllProfessional() {
    try {
      const response = await axios.api.get<ST.AllProfessionalResponse>(
        API_ROUTES.GET.PROFESSIONAL_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  //ROLES
  static async createRole(data: ST.CreateRoleData) {
    try {
      const response = await axios.api.post<ST.Role>(
        API_ROUTES.POST.ROLE_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async putRole(data: ST.UpdateRoleData) {
    try {
      const response = await axios.api.put<ST.Role>(
        API_ROUTES.PUT.ROLE_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
    }
  }
  static async getRole(data: ST.SingleRoleData) {
    try {
      const response = await axios.api.post<ST.Role>(
        API_ROUTES.POST.ROLE_SINGLE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllRole() {
    try {
      const response = await axios.api.get<ST.AllRoleResponse>(
        API_ROUTES.GET.ROLE_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  //SOCIAL MEDIA
  static async createSocialMedia(data: ST.CreateSocialMediaData) {
    try {
      const response = await axios.api.post<ST.SocialMedia>(
        API_ROUTES.POST.SOCIALMEDIA_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async createManySocialMedia(data: ST.CreateManySocialMediaData) {
    try {
      const response = await axios.api.post<ST.CreateManySocialMediaResponse>(
        API_ROUTES.POST.SOCIALMEDIA_CREATE_MANY,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async putSocialMedia(data: ST.UpdateSocialMediaData) {
    try {
      const response = await axios.api.put<ST.SocialMedia>(
        API_ROUTES.PUT.SOCIALMEDIA_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async deleteSocialMedia(data: ST.DeleteSocialMediaData) {
    try {
      const response = await axios.api.post<ST.DeleteResponse>(
        API_ROUTES.POST.SOCIALMEDIA_DELETE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getSocialMedia(data: ST.SingleSocialMediaData) {
    try {
      const response = await axios.api.post<ST.SocialMedia>(
        API_ROUTES.PUT.SOCIALMEDIA_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getAllSocialMedia() {
    try {
      const response = await axios.api.get<ST.AllSocialMediaResponse>(
        API_ROUTES.GET.SOCIALMEDIA_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }

  //SUBPLAN
  static async createSubplan(data: ST.CreateSubplanData) {
    try {
      const response = await axios.api.post<ST.Subplan>(
        API_ROUTES.POST.SUBPLAN_CREATE,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async putSubplan(data: ST.UpdateSubplanData) {
    try {
      const response = await axios.api.put<{ messages: string }>(
        API_ROUTES.PUT.SUBPLAN_EDIT,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async deleteSubplan(data: ST.DeleteSubplanData) {
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
  static async getSubplan(data: ST.SingleSubplanData) {
    try {
      const response = await axios.api.post<{ subPlans: ST.Subplan[] }>(
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
      const response = await axios.api.get<{ subPlans: ST.Subplan[] }>(
        API_ROUTES.GET.SUBPLAN_ALL
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
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
      return err as AxiosError<GenericError>;
    }
  }
  static async putMe(data: ST.UpdateUserData) {
    try {
      const response = await axios.api.put<ST.Me>(API_ROUTES.PUT.USER_ME, data);
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async forgotPassword(data: ST.ForgotPasswordData) {
    try {
      const response = await axios.api.post<ST.ForgotPasswordResponse>(
        API_ROUTES.POST.USER_FORGOT_PASSWORD,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async resetPassword(data: ST.ResetPasswordData) {
    try {
      const response = await axios.api.put<ST.ResetPasswordResponse>(
        API_ROUTES.PUT.USER_RESET_PASSWORD,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async updatePassword(data: ST.UpdatePasswordData) {
    try {
      const response = await axios.api.put<ST.UpdatePasswordResponse>(
        API_ROUTES.PUT.USER_PASSWORD,
        data
      );
      return response.data;
    } catch (err) {
      return err as AxiosError<GenericError>;
    }
  }
  static async getMe() {
    return await this.request<ST.Me>(API_ROUTES.GET.USER_ME, "get");
  }
  static async getAllUsers() {
    return await this.request<ST.AllUserResponse>(
      API_ROUTES.GET.USER_ALL,
      "get"
    );
  }
  static async resendMeEmailVerification() {
    return await this.request<ST.ResendEmailResponse>(
      API_ROUTES.POST.USER_ME_RESEND_EMAIL,
      "post"
    );
  }
  static async resentEmailVerification(data: ST.ResendEmailData) {
    return await this.request<ST.ResendEmailResponse>(
      API_ROUTES.POST.USER_RESEND_EMAIL,
      "post",
      { data }
    );
  }
  static async getSingleUser(data: ST.SingleUserData) {
    return await this.request<ST.Me>(API_ROUTES.POST.USER_SIGLE, "post", {
      data,
    });
  }
  static async putUser(data: ST.AdminUpdateUserData) {
    return await this.request<ST.Me>(API_ROUTES.PUT.USER_EDIT, "put", { data });
  }
}
