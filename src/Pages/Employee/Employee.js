import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../Layout";
import BarTools from "../../Components/BarTools";
import { useNavigate } from "react-router-dom";
import apiEmployee from "../../Services/apiEmployee";
import AddEmployee from "../../Components/Forms/FormAddEmployee";
import AppModal from "../../Components/AppModal";

export default function Employee() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectRow, setSelectRow] = useState();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getEmployee = async () => {
      await apiEmployee.GetEmployees().then((resp) => {
        if (resp.status === 200) {
          setData(resp.data);
        }
      });
    };
    getEmployee();
  }, []);
  return (
    <>
      <MainLayout>
        <BarTools pag="Employee" handleOpen={handleOpen} />
        <Grid item xs={8} height="80vh">
          <DataGrid
            rows={data.length > 0 ? data : []}
            columns={columns}
            loading={data.length > 0 ? false : true}
            // onRowSelectionModelChange={(ids) => {
            //   const selected = data.filter((row) => row.id === ids[0]);
            //   console.log(selected);
            //   setSelectRow(selected);
            // }}
            // onCellDoubleClick={() =>
            //   navigate("/employee/detail", { state: selectRow })
            // }
          />
        </Grid>
      </MainLayout>
      <AppModal open={open} handleClose={handleClose} title="Add Employee">
        <AddEmployee setData={setData} handleClose={handleClose} />
      </AppModal>
    </>
  );
}
const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 200,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
];
