import axios from "axios";

// Base URL of your backend
const API_BASE = "http://localhost:5000/api";

// ====== Auth ======

// Login
export const loginAPI = async (email, password) => {
  const res = await axios.post(`${API_BASE}/login`, { email, password });
  // Save JWT to localStorage automatically
  localStorage.setItem("token", res.data.token);
  return res.data;
};

// Register
export const registerAPI = async (name, email, password) => {
  const res = await axios.post(`${API_BASE}/register`, { name, email, password });
  return res.data;
};

// Logout (remove token)
export const logout = () => {
  localStorage.removeItem("token");
};

// Get JWT from localStorage
const getToken = () => localStorage.getItem("token");

// ====== Headers for protected routes ======
const authHeader = () => ({
  headers: { Authorization: `Bearer ${getToken()}` }
});

// ====== Protected Routes ======

// Add a donation
export const donateAPI = async (donationData) => {
  return axios.post(`${API_BASE}/donate`, donationData, authHeader());
};

// Add a child
export const addChildAPI = async (childData) => {
  return axios.post(`${API_BASE}/children/add`, childData, authHeader());
};

// Add a member
export const addMemberAPI = async (memberData) => {
  return axios.post(`${API_BASE}/members/add`, memberData, authHeader());
};

// Add an event
export const addEventAPI = async (eventData) => {
  return axios.post(`${API_BASE}/events/add`, eventData, authHeader());
};

// Save some generic data
export const saveAPI = async (saveData) => {
  return axios.post(`${API_BASE}/save`, saveData, authHeader());
};
