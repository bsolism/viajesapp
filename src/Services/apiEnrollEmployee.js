import { API_HOST } from "../Utils/Constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const CreateEnrollEmployee = (value) => {
  console.log(value);
  const url = `${API_HOST}${endPoint.createenrollemployee}`;
  console.log(url);
  return axios
    .post(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const apiEnrolEmployee = { CreateEnrollEmployee };
export default apiEnrolEmployee;
