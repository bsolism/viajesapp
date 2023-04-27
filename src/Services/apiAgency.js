import { API_HOST } from "../Utils/Constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const GetAgencies = () => {
  const url = `${API_HOST}${endPoint.getagencies}`;
  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
const CreateAgency = (value) => {
  const url = `${API_HOST}${endPoint.createagency}`;
  return axios
    .post(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const GetEmployeesByAgency = (value) => {
  const url = `${API_HOST}${endPoint.getEmployeesByAgency}${value}`;
  return axios
    .get(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const GetAllAgenciesWithEmployees = () => {
  const url = `${API_HOST}${endPoint.getagencieswithemployees}`;
  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const apiAgency = {
  GetAgencies,
  CreateAgency,
  GetEmployeesByAgency,
  GetAllAgenciesWithEmployees,
};
export default apiAgency;
