import axios from "axios";

export const saveDataAPI = async (data) => {
    return axios.post("http://localhost:5000/api/save", data);
};
