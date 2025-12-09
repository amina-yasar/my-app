import React, { useState, useEffect } from "react";
import AdminContext from "./AdminContext";

function AdminProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Load admin user from localStorage if present
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    if (storedUser?.role === "admin" && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
