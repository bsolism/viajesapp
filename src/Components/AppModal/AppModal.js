import React from "react";
import { Box, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function AppModal({ open, handleClose, children, title }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-descripcion"
    >
      <Box sx={style}>
        <Typography>{title}</Typography>
        {children}
      </Box>
    </Modal>
  );
}
