import React from "react";
import { Switch, FormControlLabel, FormGroup } from "@mui/material";
import { useFormikContext } from "formik";

export default function FieldSwitch({ name, label, value }) {
  const { values, setFieldValue } = useFormikContext();

  const onChange = (e) => {
    setFieldValue(name, e.target.checked);
  };
  return (
    <FormGroup className="form-group">
      <FormControlLabel
        control={
          <Switch checked={value ? value : values[name]} onChange={onChange} />
        }
        label={<span style={{ fontSize: 11 }}>{label}</span>}
        labelPlacement="start"
        style={{ fontSize: 11 }}
      />
    </FormGroup>
  );
}
