import { API_HOST } from "../Utils/Constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const GetCarriers = () => {
  const url = `${API_HOST}${endPoint.getCarriers}`;
  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
const CreateCarrier = (value) => {
  const url = `${API_HOST}${endPoint.createcarrier}`;
  return axios
    .post(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const apiCarrier = { GetCarriers, CreateCarrier };
export default apiCarrier;
