import axios from "axios";

export const registerAPI = (data) => {
  return axios.post("http://localhost:5000/api/register", data);
};
