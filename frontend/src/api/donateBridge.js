import axios from "axios";

export const donateAPI = async (data) => {
    return axios.post("http://localhost:5000/api/donate", data);
};
