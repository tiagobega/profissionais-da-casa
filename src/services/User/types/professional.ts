import { Evaluation } from "./evaluation";
import { Lead } from "./lead";
import { Location } from "./location";
import { PortfolioProject } from "./portfolioProject";
import { SocialMedia } from "./socialMedia";

export interface Professional {
  id: string;
  userId: string;
  subscriptionPlanId: string;
  name: string;
  professionalRegister: string;
  companyName: string;
  cnpj: string;
  phone: string;
  formationInstitute: string;
  formationDetails: string;
  formation: string;
  caucrea: string;
  yearConclusion: string;
  tags: "";
  profilePicture: string;
  backgroundPicture: string;
  onlineAppointment: boolean;
  birthDate: string;
  locations: Location[];
  socialMedias: SocialMedia[];
  portfolioProjects: PortfolioProject[];
  evaluations: Evaluation[];
  leads: Lead[];
}

export type ProfessionalSignUpData = {
  userId: string;
  subscriptionPlanId: string;
  name: string;
  professionalRegister: string;
  companyName: string;
  cnpj: string;
  zipCode: string;
  phone: string;
  formationInstitute: string;
  formationDetails: string;
  formation: string;
  caucrea: string;
  yearConclusion: string;
  tags: string;
  profilePicture: string;
  backgroundPicture: string;
  birthDate: string;
  onlineAppointment: boolean;
};

export type ProfessionalUpdateData = Partial<
  Omit<
    Professional,
    "locations" | "socialMedias" | "portfolioProjects" | "evaluations" | "leads"
  > &
    (Pick<Professional, "id"> | Pick<Professional, "userId">) & {
      currentUserId?: Professional["userId"];
      newUserId?: Professional["userId"];
    }
>;

export type SingleProfessionalData =
  | Pick<Professional, "id">
  | Pick<Professional, "userId">;

export type DeleteProfessionalData =
  | Pick<Professional, "id">
  | Pick<Professional, "userId">;

export type AllProfessionalResponse = {
  proProfiles: Professional[];
};
