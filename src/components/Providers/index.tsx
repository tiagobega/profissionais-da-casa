import React from "react";

import type { ProvidersProps, StyledProviderProps } from "./types";

import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { defaultTheme } from "styles/defaultTheme";
import { UserContextProvider } from "contexts/User";
import client from "config/queryClient";

const StyledProvider = ({ children }: StyledProviderProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={client}>
      <StyledProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </StyledProvider>
    </QueryClientProvider>
  );
};

export default Providers;
