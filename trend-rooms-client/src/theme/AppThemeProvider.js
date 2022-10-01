import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppTheme from "./AppTheme";

function AppThemeProvider(prop) {
  return <ThemeProvider theme={AppTheme}>{prop.children}</ThemeProvider>;
}

export default AppThemeProvider;
