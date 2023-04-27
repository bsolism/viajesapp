import React from "react";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  Dashboard,
  ChevronLeft,
  ChevronRight,
  Store,
  Badge,
  DriveEta,
  Moving,
} from "@mui/icons-material";
import Drawer from "./Drawer";
import DrawerHeader from "./Header";
import ListItemSide from "./ListItemSide";

export default function SideBar({ open, theme, handleDrawerClose }) {
  return (
    <Drawer variant="permanent" open={open} theme={theme}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemSide linkTo="/home" primary="Home" open={open}>
            <Dashboard />
          </ListItemSide>
          <ListItemSide linkTo="/agency" primary="Agency" open={open}>
            <Store />
          </ListItemSide>
          <ListItemSide linkTo="/employee" primary="Employee" open={open}>
            <Badge />
          </ListItemSide>
          <ListItemSide linkTo="/carrier" primary="Carrier" open={open}>
            <DriveEta />
          </ListItemSide>
          <ListItemSide linkTo="/journey" primary="Journey" open={open}>
            <Moving />
          </ListItemSide>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
