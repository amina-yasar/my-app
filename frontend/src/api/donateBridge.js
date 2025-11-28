import axios from "axios";

export const donateAPI = async (data) => {
  return axios.post("http://localhost:5000/api/donate", data);
};

// Get all donors
export const getDonorsAPI = async () => {
  return axios.get("http://localhost:5000/api/donate");
};
