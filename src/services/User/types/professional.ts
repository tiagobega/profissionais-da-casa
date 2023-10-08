import { Evaluation } from "./evaluation";
import { Lead } from "./lead";
import { Location } from "./location";
import { PortfolioProject } from "./portfolioProject";
import { SocialMedia } from "./socialMedia";

export interface Professional {
  id: string;
  userId: string;

  name: string;

  companyName: string;
  cnpj: string;
  formationInstitute: string;
  formationDetails: string;
  formation: string;
  caucrea: string;
  yearConclusion: string;
  phone: string;
  professionalRegister: string;
  professionalLevel: string;

  profilePicture: string;
  backgroundPicture: string;

  onlineAppointment: boolean;
  birthDate: string;
  createdAt: string;
  description: string;
  active: boolean;
  subscriptionPlanId: string;

  tags: string[];
  locations: Location[];
  socialMedias: SocialMedia[];
  portfolioProjects: PortfolioProject[];
  evaluations: Evaluation[];
  leads: Lead[];
}

export type ProfessionalSignUpData = Omit<
  Professional,
  | "id"
  | "createdAt"
  | "leads"
  | "evaluations"
  | "portfolioProjects"
  | "tags"
  | "locations"
  | "socialMedias"
> & { tags: string };

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
