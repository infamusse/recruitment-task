import React from "react";
import { Provider } from "react-redux";

import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";

import { store } from "./redux/store";

import "./styles/global.scss";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#192A56" },
    secondary: { main: "#FBC531" },
  },
});

const App = () => (
  <Provider store={store}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout />
      </ThemeProvider>
    </StylesProvider>
  </Provider>
);

export { App };
