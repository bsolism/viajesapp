import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MainLayout from "../../Layout";
import AppModal from "../../Components/AppModal";
import EnrollEmployee from "../../Components/Forms/FormEnrollEmployee";
import apiAgency from "../../Services/apiAgency";

export default function DetailAgency() {
  const location = useLocation();
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [dataRow, setDataRow] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setData(location.state);
    getEmployeesByAgency(location.state[0].id);
  }, [location]);

  const getEmployeesByAgency = async (id) => {
    await apiAgency.GetEmployeesByAgency(id).then((res) => {
      if (res.status === 200) {
        setDataRow(res.data.employees);
      }
    });
  };

  return (
    <>
      <MainLayout>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Typography variant="h6" noWrap component="div">
            Nombre Agencia:
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginLeft: 4, color: "#A9A9A9" }}
          >
            {data ? data[0].name : " "}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginLeft: 14 }}
          >
            Direccion:
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginLeft: 4, color: "#A9A9A9" }}
          >
            {data ? data[0].address : " "}
          </Typography>
        </Box>
        <Grid item xs={8} height="80vh">
          <Button variant="add-device" onClick={handleOpen}>
            Vincular Colaborador
            <AddCircleOutlineIcon fontSize="small" />
          </Button>
          <DataGrid
            rows={dataRow.length > 0 ? dataRow : []}
            columns={columns}
            loading={dataRow ? false : true}
          />
        </Grid>
      </MainLayout>
      <AppModal open={open} handleClose={handleClose} title="Add Agency">
        <EnrollEmployee
          agencyId={data ? data[0].id : ""}
          dataRows={dataRow}
          setData={setDataRow}
          handleClose={handleClose}
        />
      </AppModal>
    </>
  );
}
const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "distance",
    headerName: "Distancia",
    width: 200,
  },
];
