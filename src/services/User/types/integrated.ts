import { CreateManyLocationData } from "./location";
import { ProfessionalSignUpData } from "./professional";
import { CreateManySocialMediaData } from "./socialMedia";
import { SignUpData } from "./user";

export interface IntegratedSignUpData {
  userParams: SignUpData;
  proProfileParams: Omit<ProfessionalSignUpData, "userId">;
  locationParams: Omit<CreateManyLocationData, "professionalId">;
  socialMediaParams: Omit<CreateManySocialMediaData, "professionalId">;
}

export type IntegratedSignUpResponse = {
  // [key in keyof IntegratedSignUpData]: string;
};

export type IntegratedSignUpObj = {
  [key in keyof IntegratedSignUpData]: string;
};
