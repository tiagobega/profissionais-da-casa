import {
  LoginParams,
  RegisterParams,
  User,
  EmailConfirmationParams,
} from "constants/user";

export interface UserContext {
  logged: boolean;
  login: (params: LoginParams, callback: () => void) => void;
  logout: (callback: () => void) => void;
  register: (params: RegisterParams, callback: () => void) => void;
  registeredUser?: User;
  currentUser?: User;
  sendEmailConfirmation: (params: EmailConfirmationParams) => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
