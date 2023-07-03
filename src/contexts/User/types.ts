import { LoginParams, RegisterParams, User } from "constants/user";

export interface UserContext {
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
  register: (params: RegisterParams, callback: () => void) => void;
  registeredUser?: User;
  currentUser?: User;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
