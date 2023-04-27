import React from "react";
import { Formik } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Grid, Box } from "@mui/material";

export default function AppFormik({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  innerRef,
  width = 800,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          width: width,
        }}
      >
        <Grid container spacing={1}>
          <Formik
            innerRef={innerRef}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {() => <>{children}</>}
          </Formik>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
}
