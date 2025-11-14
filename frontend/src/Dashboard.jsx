import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="sidebar">

      <h4 className="menu-title">Dashboard</h4>

      <ul className="menu-list">
        <li> Children</li>
        <li> Donors</li>
        <li> Donations</li>
        <li> Volunteers</li>
        <li> Events</li>
        <li> Reports</li>
        <li> Messages</li>
        <li> Staff</li>
        <li> Settings</li>
      </ul>

    </div>
  );
}

export default Dashboard;
