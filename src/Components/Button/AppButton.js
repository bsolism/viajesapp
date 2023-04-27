import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function AppButton({ title, handle }) {
  return (
    <Button variant="filter" onClick={handle}>
      <Typography variant="text" marginRight={2}>
        Filtrar
      </Typography>
      <FilterAltIcon fontSize="small" />
    </Button>
  );
}
