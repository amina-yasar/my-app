import axios from "axios";

// POST login data to backend
export const loginAPI = async (data) => {
  return axios.post("http://localhost:5000/api/login", data);
};
