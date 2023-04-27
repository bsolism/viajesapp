import React from "react";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";

export default function FieldSubmit({ title, ...props }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      variant="outlined"
      onClick={handleSubmit}
      style={{ marginTop: "20px" }}
      {...props}
    >
      {title}
    </Button>
  );
}
