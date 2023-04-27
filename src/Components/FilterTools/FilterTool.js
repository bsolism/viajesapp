import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FieldDatePicker from "../Forms/Fields/FieldDatePicker";
import AppFormik from "../Forms/Formik";
import FieldSubmit from "../Forms/Fields/FieldSubmit";
import { toast } from "react-toastify";
import dayjs from "dayjs";

export default function FilterTool({ setData, data, sumarColumna }) {
  const handleSubmit = (values) => {
    if (validateDate(values)) {
      var newData = data.filter(
        (x) =>
          x.date >= dayjs(values.dateInit).format("YYYY-MM-DD") &&
          x.date <= dayjs(values.dateEnd).format("YYYY-MM-DD")
      );
      setData(newData);
      sumarColumna(newData);
    }
  };

  const validateDate = (values) => {
    if (values.dateInit > values.dateEnd) {
      toast.warning("La fecha de inicio no puede ser mayor a la fecha final");
      return false;
    }
    return true;
  };

  return (
    <AppFormik
      initialValues={{ dateInit: "", dateEnd: "" }}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Typography variant="h6" noWrap component="div">
          Desde:
        </Typography>
        <FieldDatePicker name="dateInit" />
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{ marginLeft: 15 }}
        >
          Hasta:
        </Typography>
        <FieldDatePicker name="dateEnd" />
        <FieldSubmit title="Filtrar" style={{ marginLeft: 25 }} />
      </Box>
    </AppFormik>
  );
}
