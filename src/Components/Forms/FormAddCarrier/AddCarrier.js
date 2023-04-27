import React from "react";
import { Grid } from "@mui/material";
import AppFormik from "../Formik/AppFormik";
import FieldText from "../Fields/FieldText";
import FieldSubmit from "../Fields/FieldSubmit";
import Carrier from "../../../Models/Carrier";
import apiCarrier from "../../../Services/apiCarrier";
import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string().required("Name Required").min(2).label("Name"),
  dni: Yup.string().required("DNI Required").min(11).label("DNI"),
  pricePerKm: Yup.number()
    .required("Price Required")
    .min(1)
    .label("Price Per KM"),
});

export default function AddCarrier({ setData, handleClose }) {
  const handleSubmit = async (values) => {
    await apiCarrier.CreateCarrier(values).then((res) => {
      if (res.status === 200) {
        setData((data) => [...data, res.data]);
      }
    });
    handleClose();
  };

  return (
    <AppFormik
      width={410}
      initialValues={Carrier}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Grid item xs={12} marginLeft={4} marginTop={2}>
        <FieldText name="name" label="Name" required />
        <FieldText name="dni" label="DNI" required />
        <FieldText
          name="pricePerKm"
          label="Price Per KM"
          required
          type="number"
        />

        <FieldSubmit title="Send" />
      </Grid>
    </AppFormik>
  );
}
