import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../Layout";
import BarTools from "../../Components/BarTools";
import AppModal from "../../Components/AppModal";
import AddJourney from "../../Components/Forms/FormAddJourney";
import apiJourney from "../../Services/apiJourney";
import moment from "moment";

export default function Journey() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getJourneys();
  }, []);

  const getJourneys = async () => {
    await apiJourney.GetJourneys().then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };

  return (
    <>
      <MainLayout>
        <BarTools pag="Journey" handleOpen={handleOpen} />
        <Grid item xs={8} height="80vh">
          <DataGrid
            rows={data.length > 0 ? data : []}
            columns={columns}
            loading={data.length > 0 ? false : true}
          />
        </Grid>
      </MainLayout>
      <AppModal open={open} handleClose={handleClose} title="Add Journey">
        <AddJourney data={data} setData={setData} handleClose={handleClose} />
      </AppModal>
    </>
  );
}
const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 50,
  },
  {
    field: "employeeName",
    headerName: "Name",
    width: 200,
  },
  {
    field: "agencyName",
    headerName: "Agency",
    width: 200,
  },
  {
    field: "carrierName",
    headerName: "Carrier",
    width: 200,
  },
  {
    field: "distance",
    headerName: "Distance",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    renderCell: (params) => {
      return moment(params.value).format("MMMM Do YYYY");
    },
  },
];
