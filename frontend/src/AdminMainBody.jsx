import React from 'react';
import Dashboard from "./Dashboard";
import DashboardArea from "./DashboardArea";
import './AdminMainBody.css';

function AdminMainBody() {
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
