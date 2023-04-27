import React from "react";
import { Grid } from "@mui/material";
import AppFormik from "../Formik/AppFormik";
import FieldText from "../Fields/FieldText";
import FieldSubmit from "../Fields/FieldSubmit";
import Agency from "../../../Models/Agency";
import apiAgency from "../../../Services/apiAgency";
import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string().required("Name Required").min(2).label("Name"),
  address: Yup.string().required("Address Required").min(2).label("Address"),
});

export default function AddAgency({ setData, handleClose }) {
  const handleSubmit = async (values) => {
    await apiAgency.CreateAgency(values).then((res) => {
      if (res.status === 200) {
        setData((data) => [...data, res.data]);
      }
    });
    handleClose();
  };
  return (
    <AppFormik
      width={410}
      initialValues={Agency}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Grid item xs={12} marginLeft={4} marginTop={2}>
        <FieldText name="name" label="Name" required />
        <FieldText name="address" label="Address" required />

        <FieldSubmit title="Send" />
      </Grid>
    </AppFormik>
  );
}
