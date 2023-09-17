import type { Role } from "constants/roles";
import type {
  CreateManyLocationData,
  CreateManySocialMediaData,
  Me,
  Professional,
  ProfessionalSignUpData,
  SendFileData,
  SignIn,
  SignInData,
  SignUp,
  SignUpData,
  SingleRole,
} from "services/User/types";

export interface UserContext {
  logged: boolean;

  //ROLE FUNCTIONS
  getRoles: () => Promise<Role[] | false>;
  getSingleRole: (id: string) => Promise<SingleRole | false>;

  //USER FUNCTIONS
  getMe: () => Promise<Me | false>;
  putMe: (data: Partial<Me>) => Promise<Me | false>;
  login: (
    data: SignInData,
    callback: (user: Me) => void
  ) => Promise<SignIn | false>;
  logout: (callback: () => void) => void;
  register: (data: SignUpData) => Promise<SignUp | false>;

  //PROFESSIONAL FUNCTIONS
  registerProfessional: (data: ProfessionalSignUpData) => Promise<false |Professional>;
  putProfessional: (data: Partial<Professional>) => Promise<false | Professional>;
  getProfessional: (id: Professional["id"]) => Promise<false |Professional>;
  getAllProfessionals: () => Promise<false | Professional>;
  deleteProfessional: (id: Professional["id"]) => Promise<false |Professional>;
  //FILE FUNCTIONS

  sendFile: (data: SendFileData) => Promise<string | false>;

  //LOCATION FUNCTIONS

  createLocation: (data: CreateManyLocationData) => Promise<any>;

  //SOCIALMEDIA FUNCTIONS

  createSocialMedias: (data: CreateManySocialMediaData) => Promise<any>;

  //FAQ FUNCTIONS
  //PROJECT FUNCTIONS

  registeredUser?: Me;
  currentUser?: Me;
  currentProfessional?: Professional;
  roles?: Role[];
  // sendEmailConfirmation: (params: EmailConfirmationParams) => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
