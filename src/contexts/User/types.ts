import { AxiosError } from "axios";

import {
  UserFunctionsReturn,
  EvaluationFunctionsReturn,
  ProfessionalFunctionsReturn,
  FAQFunctionsReturn,
  FileFunctionsReturn,
  LeadFunctionsReturn,
  PortfolioProjectFunctionsReturn,
  LocationFunctionsReturn,
  RoleFunctionsReturn,
  SocialMediaFunctionsReturn,
  IntegratedFunctionsReturn,
  SubplanFunctionsReturn,
  EmailFunctionsReturn,
} from "./functions";

import { GenericError } from "services/Base";

export type UserContextPromise<T> = Promise<T | false>;
export type ErrorHandler = (responseData: AxiosError<GenericError>) => void;

export interface UserContext {
  evaluation: EvaluationFunctionsReturn;
  faq: FAQFunctionsReturn;
  file: FileFunctionsReturn;
  lead: LeadFunctionsReturn;
  location: LocationFunctionsReturn;
  portfolioProject: PortfolioProjectFunctionsReturn;
  professional: ProfessionalFunctionsReturn;
  role: RoleFunctionsReturn;
  socialMedia: SocialMediaFunctionsReturn;
  subplan: SubplanFunctionsReturn;
  user: UserFunctionsReturn;
  integrated: IntegratedFunctionsReturn;
  email: EmailFunctionsReturn;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
