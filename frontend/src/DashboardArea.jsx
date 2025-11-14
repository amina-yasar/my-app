import React from "react";
import "./DashboardArea.css";

function DashboardArea() {
  return (
    <div className="main-content">

      {/* Dashboard Stats Cards */}
      <div className="stats-cards">
        <div className="card">
          <h3>Total Children</h3>
          <p>120</p>
        </div>
        <div className="card">
          <h3>Total Staff</h3>
          <p>25</p>
        </div>
        <div className="card">
          <h3>Total Donations</h3>
          <p>$ 1,50,000</p>
        </div>
        <div className="card">
          <h3>Upcoming Events</h3>
          <p>3</p>
        </div>
      </div>

    </div>
  );
}

export default DashboardArea;
