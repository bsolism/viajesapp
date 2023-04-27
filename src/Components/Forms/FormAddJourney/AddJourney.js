import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import AppFormik from "../Formik/AppFormik";
import FieldText from "../Fields/FieldText";
import FieldSubmit from "../Fields/FieldSubmit";
import FieldSelect from "../Fields/FieldSelect";
import apiCarrier from "../../../Services/apiCarrier";
import apiAgency from "../../../Services/apiAgency";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import apiJourney from "../../../Services/apiJourney";
import * as Yup from "yup";

const validation = Yup.object().shape({
  carrierId: Yup.number().required("Carrier Required").min(1).label("Carrier"),
  agencyId: Yup.number().required("Agency Required").min(1).label("Agency"),
  employeeId: Yup.number()
    .required("Employee Required")
    .min(1)
    .label("Employee"),
  distance: Yup.number().required("Distance Required").min(1).label("Distance"),
});

export default function AddJourney({ data, setData, handleClose }) {
  const [dataAgencies, setDataAgencies] = useState([]);
  const [dataCarriers, setDataCarriers] = useState([]);
  const [dataEmployees, setDataEmployees] = useState([]);
  const [dataJourneyByCarrier, setDataJourneyByCarrier] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    getAgenciesWithEmployees();
    getCarriers();
  }, []);

  const getAgenciesWithEmployees = async () => {
    await apiAgency.GetAllAgenciesWithEmployees().then((res) => {
      if (res.status === 200) {
        setDataAgencies(res.data);
      }
    });
  };
  const getCarriers = async () => {
    await apiCarrier.GetCarriers().then((res) => {
      if (res.status === 200) {
        setDataCarriers(res.data);
      }
    });
  };

  const handleChangeAgency = (e) => {
    if (dataAgencies.length > 0) {
      const employees = dataAgencies.filter((x) => x.id === e);
      setDataEmployees(employees[0].employees);
    }
  };
  const handleChangeEmployee = (e) => {
    if (dataEmployees.length > 0) {
      const employee = dataEmployees.filter((x) => x.id === e);
      ref.current.setFieldValue("distance", employee[0].distance);
    }
  };
  const handleChangeCarrier = async (e) => {
    await apiJourney.GetJourneysByCarrier(e).then((res) => {
      if (res.status === 200) {
        setDataJourneyByCarrier(res.data);
      }
    });
  };

  const handleSubmit = async (values) => {
    const existToday = existJourneyToday(values);
    const validateDistance = validateKM(values);
    if (!existToday && validateDistance) {
      await apiJourney.CreateJourney(values).then((res) => {
        if (res.status === 200) {
          var newJourney = journeMap(values);
          setData((data) => [...data, newJourney]);
          handleClose();
        }
      });
    }
  };
  const existJourneyToday = (values) => {
    const dateToday = new Date();
    const exist = data.filter(
      (x) =>
        x.employeeId === values.employeeId &&
        dayjs(x.date).format("YYYY-MM-DD") ===
          dayjs(dateToday).format("YYYY-MM-DD")
    );
    if (exist.length > 0) {
      toast.warning("El Empleado ya viajó hoy");
      return true;
    } else {
      return false;
    }
  };
  const validateKM = (values) => {
    var Km = values.distance;
    if (dataJourneyByCarrier.length > 0) {
      dataJourneyByCarrier.forEach((item) => {
        Km = Km + item.distance;
      });
      if (Km > 100) {
        toast.warning("El Transportista superó el limite de distancia");
        return false;
      } else {
        return true;
      }
    }
    return true;
  };
  const journeMap = (values) => {
    var carrier = dataCarriers.filter((x) => x.id === values.carrierId);
    var agency = dataAgencies.filter((x) => x.id === values.agencyId);
    var employee = dataEmployees.filter((x) => x.id === values.employeeId);
    var journey = {
      agencyName: agency[0].name,
      carrierId: carrier[0].id,
      carrierName: carrier[0].name,
      date: new Date(),
      distance: values.distance,
      employeeId: employee[0].id,
      employeeName: employee[0].name,
      id: data.length + 1,
    };
    return journey;
  };
  return (
    <AppFormik
      width={410}
      initialValues={{
        carrierId: 0,
        agencyId: 0,
        employeeId: 0,
        distance: 0,
      }}
      innerRef={ref}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      <Grid item xs={12} marginLeft={4} marginTop={2}>
        <FieldSelect
          name="agencyId"
          label="Choice Agency"
          data={dataAgencies}
          setDataId={handleChangeAgency}
        />
        <FieldSelect
          name="employeeId"
          label="Choice Employee"
          data={dataEmployees}
          setDataId={handleChangeEmployee}
        />
        <FieldSelect
          name="carrierId"
          label="Choice Carrier"
          data={dataCarriers}
          setDataId={handleChangeCarrier}
        />
        <FieldText name="distance" label="Distance" required disabled />
        <FieldSubmit title="Send" />
      </Grid>
    </AppFormik>
  );
}
