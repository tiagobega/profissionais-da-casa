import type { UserContextI, ContextProviderProps } from "./types";
import React, { useContext, useState } from "react";

const initialState = {
  logged: false,
};

export const UserContext = React.createContext<UserContextI>(initialState);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const [logged, setLogged] = useState(false);

  const login = () => {};

  const logout = () => {};

  return (
    <UserContext.Provider value={{ logged, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { login, logout, logged } = useContext(UserContext);

  if (!login || !logout)
    throw new Error(
      "The useUser hook should be used inside a UserContext provider"
    );

  return {
    login,
    logout,
    logged,
  };
};
