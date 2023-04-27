import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../Layout";
import BarTools from "../../Components/BarTools";
import { useNavigate } from "react-router-dom";
import apiAgency from "../../Services/apiAgency";
import AppModal from "../../Components/AppModal";
import AddAgency from "../../Components/Forms/FormAddAgency";

export default function Agency() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectRow, setSelectRow] = useState();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getAgencies = async () => {
      await apiAgency.GetAgencies().then((resp) => {
        if (resp.status === 200) {
          setData(resp.data);
        }
      });
    };
    getAgencies();
  }, []);

  return (
    <>
      <MainLayout>
        <BarTools pag="Agency" handleOpen={handleOpen} />
        <Grid item xs={8} height="80vh">
          <DataGrid
            rows={data.length > 0 ? data : []}
            columns={columns}
            loading={data.length > 0 ? false : true}
            onRowSelectionModelChange={(ids) => {
              const selected = data.filter((row) => row.id === ids[0]);
              setSelectRow(selected);
            }}
            onCellDoubleClick={() =>
              navigate("/agency/detail", { state: selectRow })
            }
          />
        </Grid>
      </MainLayout>
      <AppModal open={open} handleClose={handleClose} title="Add Agency">
        <AddAgency setData={setData} handleClose={handleClose} />
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
  {
    field: "address",
    headerName: "Address",
    width: 200,
  },
];
