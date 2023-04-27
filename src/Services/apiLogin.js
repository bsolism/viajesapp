import { API_HOST } from "../Utils/Constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const CreateLogin = (value) => {
  const url = `${API_HOST}${endPoint.login}`;
  return axios
    .post(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const CreateUser = (value) => {
  const url = `${API_HOST}${endPoint.createuser}`;
  return axios
    .post(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const apiLogin = { CreateLogin, CreateUser };
export default apiLogin;
