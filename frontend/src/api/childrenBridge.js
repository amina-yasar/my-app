import axios from "axios";

const API_URL = "http://localhost:5000/api/children";

export const addChildAPI = async (childData) => {
  return await axios.post(API_URL, childData);
};

export const getChildrenAPI = async () => {
  return await axios.get(API_URL);
};

export const deleteChildAPI = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
