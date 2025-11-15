import axios from "axios";

export const addMemberAPI = async (data) => {
    return axios.post("http://localhost:5000/api/members", data);
};
