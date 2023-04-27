import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useFormikContext, ErrorMessage } from "formik";

export default function FieldText({ name, value, ...props }) {
  const { values, setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    if (props.type === "number") {
      setFieldValue(name, parseInt(e.target.value));
    } else {
      setFieldValue(name, e.target.value);
    }
  };

  return (
    <Box>
      <TextField
        fullWidth
        name={name}
        label={name}
        variant="standard"
        onChange={handleChange}
        value={value !== undefined ? value : values[name]}
        inputProps={{ style: { fontSize: 12 } }}
        InputLabelProps={{ style: { fontSize: 12 } }}
        {...props}
      />
      <ErrorMessage
        name={name}
        component="div"
        style={{ fontSize: 10, color: "red" }}
      />
    </Box>
  );
}
