import axios from "axios";

const BASE_URL = "http://localhost:5000/api/dashboard";

export const getChildrenCountAPI = () => axios.get(`${BASE_URL}/children/count`);
export const getStaffCountAPI = () => axios.get(`${BASE_URL}/staff/count`);
export const getDonationsTotalAPI = () => axios.get(`${BASE_URL}/donations/total`);
export const getEventsCountAPI = () => axios.get(`${BASE_URL}/events/count`);
