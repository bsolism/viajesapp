import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import AppFormik from "../Formik/AppFormik";
import FieldText from "../Fields/FieldText";
import FieldSubmit from "../Fields/FieldSubmit";
import FieldSelect from "../Fields/FieldSelect";
import Carrier from "../../../Models/Carrier";
import apiCarrier from "../../../Services/apiCarrier";
import apiEmployee from "../../../Services/apiEmployee";
import apiEnrolEmployee from "../../../Services/apiEnrollEmployee";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function EnrollEmployee({
  agencyId,
  dataRows,
  setData,
  handleClose,
}) {
  const [dataSelect, setDataSelect] = useState([]);
  const [dataId, setDataId] = useState();

  useEffect(() => {
    getAllEmployee();
  }, []);

  const getAllEmployee = async () => {
    await apiEmployee.GetEmployees().then((res) => {
      if (res.status === 200) {
        setDataSelect(res.data);
      }
    });
  };

  const handleSubmit = async (values) => {
    values.agencyId = agencyId;
    const validKM = validateKM(values);
    const validEmployee = validateExisting(values);
    if (validKM && validEmployee) {
      await apiEnrolEmployee.CreateEnrollEmployee(values).then((res) => {
        if (res.status === 200) {
          var newEnroll = dataSelect.filter((x) => x.id === values.employeeId);
          newEnroll[0].distance = values.distance;
          setData((data) => [...data, newEnroll[0]]);
          handleClose();
        } else {
          toast.warning("No se pudo registrar");
        }
      });
    }
  };

  const validateKM = (values) => {
    if (values.distance > 0 && values.distance <= 50) {
      return true;
    } else {
      toast.warning("KM fuera de rango aceptado");
      return false;
    }
  };
  const validateExisting = (values) => {
    const employeeExist = dataRows.filter((x) => x.id === values.employeeId);
    if (employeeExist.length === 0) {
      return true;
    } else {
      toast.warning("Empleado ya existe en la agencia");
      return false;
    }
  };

  return (
    <AppFormik
      width={410}
      initialValues={{ agencyId: 0, employeeId: 0, distance: 0 }}
      onSubmit={handleSubmit}
    >
      <Grid item xs={12} marginLeft={4} marginTop={2}>
        <FieldSelect
          name="employeeId"
          label="Choice Employee"
          data={dataSelect}
          setDataId={setDataId}
        />
        <FieldText name="distance" label="Distance KM" required type="number" />

        <FieldSubmit title="Send" />
      </Grid>
    </AppFormik>
  );
}
