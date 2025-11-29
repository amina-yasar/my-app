// src/api/eventsBridge.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/events";

export const getEventsAPI = () => axios.get(BASE_URL);
export const addEventAPI = (eventData) => axios.post(BASE_URL, eventData);
export const updateEventAPI = (id, eventData) => axios.put(`${BASE_URL}/${id}`, eventData);
export const deleteEventAPI = (id) => axios.delete(`${BASE_URL}/${id}`);