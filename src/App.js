import React from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import Header from "./components/Header";

import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />

          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
        </>
      </ThemeProvider>
    </Provider>
  );
}
