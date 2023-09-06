// import {
//   LoginParams,
//   RegisterParams,
//   User,
//   EmailConfirmationParams,
// } from "constants/user";

import type { Me, SignInData, SignUpData } from "services/User/types";

export interface UserContext {
  logged: boolean;
  login: (params: SignInData, callback: () => void) => void;
  logout: (callback: () => void) => void;
  register: (params: SignUpData, callback: () => void) => void;
  registeredUser?: Me;
  currentUser?: Me;
  // sendEmailConfirmation: (params: EmailConfirmationParams) => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
