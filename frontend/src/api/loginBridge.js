import axios from "axios";

// General login API (for users/admin)
export const loginAPI = async (data) => {
  return axios.post("http://localhost:5000/api/login", data);
};
