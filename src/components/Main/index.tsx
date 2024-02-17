import React from "react";
import { MainContainer } from "./style";

export interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <MainContainer>{children}</MainContainer>;
};
