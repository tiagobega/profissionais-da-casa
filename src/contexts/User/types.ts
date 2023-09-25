import { AxiosError } from "axios";

import type { GenericError } from "services/User/types";
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
} from "./functions";

import { SubplanFunctionsReturn } from "./functions/subplan";

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
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
