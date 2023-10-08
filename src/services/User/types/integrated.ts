import { CreateManyLocationData } from "./location";
import { Professional, ProfessionalSignUpData } from "./professional";
import { CreateManySocialMediaData, SocialMedia } from "./socialMedia";
import { Me, SignUpData } from "./user";

export interface IntegratedSignUpData {
  userParams: SignUpData;
  proProfileParams: Omit<ProfessionalSignUpData, "userId">;
  locationParams: Omit<CreateManyLocationData, "professionalId">;
  socialMediaParams: Omit<CreateManySocialMediaData, "professionalId">;
}

export type IntegratedSignUpResponse = {
  locations: Location[];
  socialMedias: SocialMedia[];
  session: {
    accessToken: string;
  };
  user: Me;
  professional: Professional;
};

export type IntegratedSignUpObj = {
  [key in keyof IntegratedSignUpData]: string;
};
