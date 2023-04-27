import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBarDrawer from "./AppBarDrawer";
import SideBar from "./SideBar";
import BodyDrawer from "./Body";

export default function AppDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBarDrawer
        title="Sistema de Viajes Colaboradores"
        open={open}
        theme={theme}
        handleDrawerOpen={handleDrawerOpen}
      />
      <SideBar
        open={open}
        theme={theme}
        handleDrawerClose={handleDrawerClose}
      />
      <BodyDrawer theme={theme}>{children}</BodyDrawer>
    </Box>
  );
}
