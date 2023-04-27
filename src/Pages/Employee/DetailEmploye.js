import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../Layout";

export default function DetailEmploye() {
  const location = useLocation();
  const [data, setData] = useState();
  const [dataRow, setdataRow] = useState([]);

  useEffect(() => {
    setData(location.state);
  }, []);

  return (
    <MainLayout>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography variant="h6" noWrap component="div">
          Nombre Colaborador:
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{ marginLeft: 4, color: "#A9A9A9" }}
        >
          {data ? data[0].name : " "}
        </Typography>
      </Box>
      <Grid item xs={8} height="80vh">
        <DataGrid
          rows={dataRow.length > 0 ? dataRow : []}
          columns={columns}
          // onRowSelectionModelChange={(ids) => {
          //   const selected = data.filter((row) => row.id === ids[0]);
          //   console.log(selected);
          //   setSelectRow(selected);
          // }}
          // onCellDoubleClick={() =>
          //   navigate("/agency/detail", { state: selectRow })
          // }
        />
      </Grid>
    </MainLayout>
  );
}

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "address",
    headerName: "address",
    width: 200,
  },
  {
    field: "distance",
    headerName: "Distance",
    width: 200,
  },
];
