import axios from "axios";

export const addEventAPI = async (data) => {
    return axios.post("http://localhost:5000/api/events", data);
};
