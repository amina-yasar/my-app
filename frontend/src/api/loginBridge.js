import axios from "axios";

export const loginAPI = async (data) => {
  return axios.post("http://localhost:5000/api/login", data);
};
