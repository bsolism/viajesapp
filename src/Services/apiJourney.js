import { API_HOST } from "../Utils/Constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const CreateJourney = (value) => {
  const url = `${API_HOST}${endPoint.createjourney}`;
  return axios
    .post(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const GetJourneys = () => {
  const url = `${API_HOST}${endPoint.getjourneys}`;
  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
const GetJourneysByCarrier = (id) => {
  const url = `${API_HOST}${endPoint.getjourneybycarrier}${id}`;
  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
const GetJourneysByCarrierId = (id) => {
  const url = `${API_HOST}${endPoint.getjourneybycarrierid}${id}`;
  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

const apiJourney = {
  CreateJourney,
  GetJourneys,
  GetJourneysByCarrier,
  GetJourneysByCarrierId,
};
export default apiJourney;
