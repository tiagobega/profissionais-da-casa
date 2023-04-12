export interface UserContextI {
  logged: boolean;
  login?: () => void;
  logout?: () => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
