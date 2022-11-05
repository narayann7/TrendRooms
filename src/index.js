import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./controllers/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import AppTheme from "./theme/AppTheme";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={AppTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
