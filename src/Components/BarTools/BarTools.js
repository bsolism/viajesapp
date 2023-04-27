import React from "react";
import Box from "@mui/material/Box";
import BtnAdd from "./BtnAdd";
import FieldSearch from "./FieldSearch";

export default function BarTools({ pag, handleOpen }) {
  return (
    <Box sx={{ display: "flex" }}>
      <BtnAdd title={pag} handleOpen={handleOpen} />
      <FieldSearch />
    </Box>
  );
}
