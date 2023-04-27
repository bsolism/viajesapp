import { API_HOST } from "../Utils/Constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const CreateEnrollEmployee = (value) => {
  const url = `${API_HOST}${endPoint.createenrollemployee}`;
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
