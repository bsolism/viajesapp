import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useFormikContext, ErrorMessage } from "formik";

export default function FieldSelect({ name, label, data, setDataId }) {
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
    if (name === "agencyId" || name === "employeeId" || name === "carrierId")
      setDataId(e.target.value);
  };

  return (
    <FormControl fullWidth variant="standard">
      <InputLabel style={{ fontSize: 12 }}>{label}</InputLabel>
      <Select
        sx={{ fontSize: 12 }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        displayEmpty
        defaultValue=""
        label={label}
        onChange={handleChange}
      >
        {data
          ? data.map((value) => (
              <MenuItem
                key={value.id}
                value={value.id}
                name={value.name}
                style={{ fontSize: 12 }}
              >
                {value.name}
              </MenuItem>
            ))
          : null}
      </Select>
      <ErrorMessage
        name={name}
        component="div"
        style={{ fontSize: 10, color: "red" }}
      />
    </FormControl>
  );
}
