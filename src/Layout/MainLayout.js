import React from "react";
import AppDrawer from "../Components/Drawer";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Utils/Theme";

export default function MainLayout({ children }) {
  return (
    <ThemeProvider theme={Theme}>
      <AppDrawer>{children}</AppDrawer>
    </ThemeProvider>
  );
}
