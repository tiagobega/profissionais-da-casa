import type {
  CreateLocationData,
  Me,
  Professional,
  ProfessionalSignUpData,
  ProfessionalUpdateData,
  Role,
  SendFileData,
  SignInData,
  SignInResponse,
  SignUpData,
  SignUpResponse,
} from "services/User/types";

import {
  AllEvaluationResponse,
  CreateEvaluationData,
  DeleteEvaluationData,
  DeleteResponse,
  Evaluation,
  SingleEvaluationData,
  UpdateEvaluationData,
} from "services/User/types/";

export type UserContextPromise<T> = Promise<T | false>;

export interface UserContext {
  //EVALUATION FUNCTIONS
  createEvaluation: (
    data: CreateEvaluationData
  ) => UserContextPromise<Evaluation>;
  deleteEvaluation: (
    data: DeleteEvaluationData
  ) => UserContextPromise<DeleteResponse>;
  putEvaluation: (data: UpdateEvaluationData) => UserContextPromise<Evaluation>;
  getEvaluation: (data: SingleEvaluationData) => UserContextPromise<Evaluation>;
  getAllEvaluation: () => UserContextPromise<AllEvaluationResponse>;

  //FAQ FUNCTIONS

  //ROLE FUNCTIONS
  roles?: Role[];

  getRoles: () => Promise<Role[] | false>;
  getSingleRole: (id: string) => Promise<Role | false>;

  //PROFESSIONAL FUNCTIONS

  myProfessional?: Professional;
  currentProfessional?: Professional;

  registerProfessional: (
    data: ProfessionalSignUpData
  ) => Promise<false | Professional>;
  putProfessional: (
    data: ProfessionalUpdateData
  ) => Promise<false | Professional>;
  getProfessional: (id: Professional["id"]) => Promise<false | Professional>;
  getAllProfessionals: () => Promise<false | Professional>;
  // deleteProfessional: (id: Professional["id"]) => Promise<false | Professional>;

  //FILE FUNCTIONS

  sendFile: (data: SendFileData) => Promise<string | false>;

  //LOCATION FUNCTIONS

  createLocations: (data: CreateLocationData) => Promise<any>;

  //SOCIALMEDIA FUNCTIONS

  //PROJECT FUNCTIONS

  //SUBPLAN FUNCTIONS

  //USER FUNCTIONS
  currentUser?: Me;
  logged: boolean;

  putMe: (data: Partial<Me>) => UserContextPromise<Me>;
  register: (data: SignUpData) => UserContextPromise<SignUpResponse>;
  login: (data: SignInData) => UserContextPromise<SignInResponse>;

  getMe: () => UserContextPromise<Me>;

  logout: (callback: () => void) => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
