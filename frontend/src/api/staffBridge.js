import axios from "axios";

const BASE_URL = "http://localhost:5000/api/staff"; // Make sure this matches your backend route

// GET all staff
export const getStaffAPI = () => axios.get(BASE_URL);

// ADD staff
export const addStaffAPI = (staffData) => axios.post(BASE_URL, staffData);

// UPDATE staff
export const updateStaffAPI = (id, staffData) => axios.put(`${BASE_URL}/${id}`, staffData);

// DELETE staff (optional, if you implement delete)
export const deleteStaffAPI = (id) => axios.delete(`${BASE_URL}/${id}`);

// Get staff by ID (keep only ONE declaration)
export const getStaffByIdAPI = (id) => axios.get(`${BASE_URL}/${id}`);

// Get admin profile (no token required)
export const getAdminProfileAPI = () => axios.get(`${BASE_URL}/admin/profile`);
// Get logged-in staff profile
export const getStaffProfileAPI = (token) =>
  axios.get(`${BASE_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
