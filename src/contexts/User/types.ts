import type { Role } from "constants/roles";
import type {
  Me,
  Professional,
  ProfessionalSignUpData,
  SignIn,
  SignInData,
  SignUp,
  SignUpData,
  SingleRole,
} from "services/User/types";

export interface UserContext {
  logged: boolean;
  getMe: () => Promise<Me | false>;
  putMe: (data: Partial<Me>) => Promise<Me | false>;
  getRoles: () => Promise<Role[] | false>;
  getSingleRole: (id: string) => Promise<SingleRole | false>;
  login: (
    params: SignInData,
    callback: (user: Me) => void
  ) => Promise<SignIn | false>;
  logout: (callback: () => void) => void;
  register: (params: SignUpData) => Promise<SignUp | false>;
  registerProfessional: (data: ProfessionalSignUpData) => Promise<Professional>;
  registeredUser?: Me;
  currentUser?: Me;
  currentProfessional?: Professional;
  roles?: Role[];
  // sendEmailConfirmation: (params: EmailConfirmationParams) => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
