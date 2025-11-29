import axios from "axios";

export const donateAPI = async (data) => {
  return axios.post("http://localhost:5000/api/donate", data);
};

// Get all donors
export const getDonorsAPI = async () => {
  return axios.get("http://localhost:5000/api/donate");
};
// Delete a donor by ID
export const deleteDonorAPI = async (id) => {
  return axios.delete(`http://localhost:5000/api/donate/${id}`);
};
