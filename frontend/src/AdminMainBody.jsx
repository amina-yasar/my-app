import React, { useContext, useEffect } from "react";
import Dashboard from "./Dashboard";
import DashboardArea from "./DashboardArea";
import AdminContext from "./context/AdminContext"; 
import "./AdminMainBody.css";

function AdminMainBody() {
  const { user } = useContext(AdminContext);

  useEffect(() => {
    console.log("Logged in user:", user);
  }, [user]);

  return (
    <div className="admin-row">
      <div className="admin-col-6">
        <Dashboard />
      </div>
      <div className="admin-col-6">
        <DashboardArea />
      </div>
    </div>
  );
}

export default AdminMainBody;
