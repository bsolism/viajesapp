import React from "react";
import { Grid } from "@mui/material";
import AppFormik from "../Formik/AppFormik";
import FieldText from "../Fields/FieldText";
import FieldSubmit from "../Fields/FieldSubmit";
import FieldSwitch from "../Fields/FieldSwitch";
import Employee from "../../../Models/Employee";
import apiEmployee from "../../../Services/apiEmployee";
import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string().required("Name Required").min(2).label("Name"),
});

export default function AddEmployee({ setData, handleClose }) {
  const handleSubmit = async (values) => {
    await apiEmployee.CreateEmployee(values).then((res) => {
      if (res.status === 200) {
        setData((data) => [...data, res.data]);
      }
    });
    handleClose();
  };

  return (
    <AppFormik
      width={410}
      initialValues={Employee}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Grid item xs={12} marginLeft={4} marginTop={2}>
        <FieldText name="name" label="Name" required />
        <FieldSwitch name="isManager" label="Es Gerente" value={false} />

        <FieldSubmit title="Send" />
      </Grid>
    </AppFormik>
  );
}
