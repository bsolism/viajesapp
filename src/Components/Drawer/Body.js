import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Theme from "../../Utils/Theme";
import DrawerHeader from "./Header";

export default function BodyDrawer({ children, theme }) {
  return (
    <ThemeProvider theme={Theme}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader theme={theme} />
        {children}
      </Box>
    </ThemeProvider>
  );
}
