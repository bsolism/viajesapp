import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../Layout";
import apiJourney from "../../Services/apiJourney";
import dayjs from "dayjs";
import FilterTool from "../../Components/FilterTools";

export default function DetailCarrier() {
  const location = useLocation();
  const [data, setData] = useState();
  const [dataRow, setDataRow] = useState([]);
  const [total, setTotal] = useState(0);
  const [dataFilter, setDataFilter] = useState([]);
  useEffect(() => {
    setData(location.state);
    GetJourneyByCarrier(location.state[0].id);
  }, [location.state]);

  const GetJourneyByCarrier = async (id) => {
    const journeys = await apiJourney.GetJourneysByCarrierId(id).then((res) => {
      return res;
    });
    if (journeys.status === 200) {
      return JourneyMapper(journeys.data);
    }
  };

  const JourneyMapper = (values) => {
    let journeys = [];
    values.forEach((item) => {
      var journ = {
        id: item.id,
        employeeName: item.employee.name,
        agencyName: item.agency.name,
        distance: item.distance,
        total: item.distance * item.carrier.pricePerKM,
        date: dayjs(item.date).format("YYYY-MM-DD"),
      };
      journeys.push(journ);
    });
    setDataRow(journeys);
    setDataFilter(journeys);
    sumarColumna(journeys);
  };
  const sumarColumna = (journeys) => {
    var sumNumber = 0;
    journeys.forEach((item) => {
      sumNumber = sumNumber + item.total;
    });
    setTotal(sumNumber);
  };

  return (
    <MainLayout>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography variant="h6" noWrap component="div">
          {data ? data[0].name : " "}
        </Typography>
      </Box>
      <FilterTool
        setData={setDataRow}
        data={dataFilter}
        sumarColumna={sumarColumna}
      />
      <Grid item xs={8} height="60vh">
        <DataGrid rows={dataRow.length > 0 ? dataRow : []} columns={columns} />
      </Grid>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="h6" noWrap component="div">
          Total
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{ marginLeft: 20 }}
        >
          {total.toLocaleString("es-HN", {
            style: "currency",
            currency: "HNL",
          })}
        </Typography>
      </Box>
    </MainLayout>
  );
}
const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 10,
  },
  {
    field: "employeeName",
    headerName: "Name",
    width: 150,
  },
  {
    field: "agencyName",
    headerName: "Agency",
    width: 150,
  },
  {
    field: "distance",
    headerName: "Distance",
    width: 100,
  },
  {
    field: "total",
    headerName: "Total",
    width: 50,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
  },
];
