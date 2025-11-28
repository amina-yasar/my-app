import api from "./axiosInstance";

// ➤ ADD a new member (POST request)
export const addMemberAPI = async (data) => {
  return api.post("/members", data);
};

// ➤ GET all members (GET request)
export const getMembersAPI = async () => {
  return api.get("/members");
};
