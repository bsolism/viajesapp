import { API_HOST } from "../Utils/Constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const GetEmployees = () => {
  const url = `${API_HOST}${endPoint.getemployees}`;
  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
const CreateEmployee = (value) => {
  const url = `${API_HOST}${endPoint.createemployee}`;
  return axios
    .post(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const apiEmployee = { GetEmployees, CreateEmployee };
export default apiEmployee;
