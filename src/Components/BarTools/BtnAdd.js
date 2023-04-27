import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function BtnAdd({ title, handleOpen }) {
  return (
    <Button variant="add-device" onClick={handleOpen}>
      <Typography variant="text" marginRight={2}>
        New {title}
      </Typography>
      <AddCircleOutlineIcon fontSize="small" />
    </Button>
  );
}
