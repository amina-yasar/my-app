import axios from "axios";

export const addChildAPI = async (data) => {
    return axios.post("http://localhost:5000/api/children", data);
};
