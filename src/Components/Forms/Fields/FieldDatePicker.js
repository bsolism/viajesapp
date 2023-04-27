import React from "react";
import { FormControlLabel, FormGroup, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormikContext, ErrorMessage } from "formik";

export default function FieldDatePicker({ name, label, value }) {
  const { values, setFieldValue } = useFormikContext();
  const handleChange = (e) => {
    setFieldValue(name, e);
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <DesktopDatePicker
              label={label}
              inputFormat="yyyy-MM-dd"
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    style: { fontSize: 9, padding: 0 },
                  }}
                  InputLabelProps={{ style: { fontSize: 9 } }}
                />
              )}
            />
          }
          label=""
          labelPlacement="start"
        />
      </FormGroup>
    </>
  );
}
