import axios from "axios";

export const registerAPI = async (data) => {
    return axios.post("http://localhost:5000/api/register", data);
};
