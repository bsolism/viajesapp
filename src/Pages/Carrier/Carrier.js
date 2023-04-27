import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../Layout";
import BarTools from "../../Components/BarTools";
import { useNavigate } from "react-router-dom";
import apiCarrier from "../../Services/apiCarrier";
import AppModal from "../../Components/AppModal";
import AddCarrier from "../../Components/Forms/FormAddCarrier";

export default function Carrier() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectRow, setSelectRow] = useState();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getCarrier = async () => {
      await apiCarrier.GetCarriers().then((resp) => {
        if (resp.status === 200) {
          setData(resp.data);
        }
      });
    };
    getCarrier();
  }, []);

  return (
    <>
      <MainLayout>
        <BarTools pag="Carrier" handleOpen={handleOpen} />
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
              navigate("/carrier/detail", { state: selectRow })
            }
          />
        </Grid>
      </MainLayout>
      <AppModal open={open} handleClose={handleClose} title="Add Carrier">
        <AddCarrier setData={setData} handleClose={handleClose} />
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
    field: "pricePerKM",
    headerName: "Price By KM",
    width: 200,
  },
];
