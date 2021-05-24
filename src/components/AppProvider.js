import React from "react";
import { GlobalStyle } from "style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>{children}
    </ThemeProvider>
  );
};

export default AppProvider;
