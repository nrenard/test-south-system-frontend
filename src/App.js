import React from "react";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import history from "./services/history";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import Header from "./components/Header";
import ScrollToChangePage from "./components/ScrollToChangePage";

import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />

          <Router history={history}>
            <Header />
            <Routes />

            <ScrollToChangePage />
          </Router>
          <ToastContainer draggablePercent={60} autoClose={1000} />
        </>
      </ThemeProvider>
    </Provider>
  );
}
