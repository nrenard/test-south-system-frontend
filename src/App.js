import React from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />

        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
