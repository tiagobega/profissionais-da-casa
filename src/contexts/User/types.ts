import type { Role } from "constants/roles";
import type {
  CreateLocationData,
  CreateManySocialMediaData,
  Me,
  Professional,
  ProfessionalSignUpData,
  ProfessionalUpdateData,
  SendFileData,
  SignIn,
  SignInData,
  SignUp,
  SignUpData,
  SingleRole,
} from "services/User/types";

export interface UserContext {
  //FAQ FUNCTIONS

  //ROLE FUNCTIONS
  roles?: Role[];

  getRoles: () => Promise<Role[] | false>;
  getSingleRole: (id: string) => Promise<SingleRole | false>;

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

  getMe: () => Promise<Me | false>;
  putMe: (data: Partial<Me>) => Promise<Me | false>;
  login: (
    data: SignInData,
    callback: (user: Me) => void
  ) => Promise<SignIn | false>;
  logout: (callback: () => void) => void;
  register: (data: SignUpData) => Promise<SignUp | false>;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
