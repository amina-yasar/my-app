import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Dashboard.css";

function Dashboard() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <div className="sidebar">

      <h4 className="menu-title">Dashboard</h4>

      <ul className="menu-list">

        {/* Children */}
        <li onClick={() => toggleMenu("children")}>
          Children ▾
        </li>
        {openMenu === "children" && (
          <ul className="submenu">
            <li><Link to="/admin/add-children">Add Child</Link></li>
            <li><Link to="/admin/update-child">Update Child</Link></li>
            <li><Link to="/admin/view-child">View Children</Link></li>
            <li><Link to="/admin/delete-child">Delete Child</Link></li>
          </ul>
        )}

        {/* Donors */}
        <li onClick={() => toggleMenu("donors")}>
          Donors ▾
        </li>
        {openMenu === "donors" && (
          <ul className="submenu">
          <li><Link to="/admin/add-donor">Add Donor</Link></li>
            <li><Link to="/admin/update-donor">Update Donor</Link></li>
            <li><Link to="/admin/view-donor">View Donor</Link></li>
            <li><Link to="/admin/delete-donor">Delete Donor</Link></li>
          </ul>
        )}

        {/* Events */}
        <li onClick={() => toggleMenu("events")}>
          Events ▾
        </li>
        {openMenu === "events" && (
          <ul className="submenu">
            <li>Add Event</li>
            <li>Update Event</li>
            <li>View Events</li>
            <li>Delete Event</li>
          </ul>
        )}

        {/* Staff */}
        <li onClick={() => toggleMenu("staff")}>
          Staff ▾
        </li>
        {openMenu === "staff" && (
          <ul className="submenu">
            <li>Add Staff</li>
            <li>Update Staff</li>
            <li>View Staff</li>
            <li>Delete Staff</li>
          </ul>
        )}

        {/* Reports */}
        <li onClick={() => toggleMenu("reports")}>
          Reports ▾
        </li>
        {openMenu === "reports" && (
          <ul className="submenu">
            <li>Monthly Reports</li>
            <li>Annual Reports</li>
            <li>Children Reports</li>
            <li>Financial Reports</li>
          </ul>
        )}

        {/* Settings */}
        <li onClick={() => toggleMenu("settings")}>
          Settings ▾
        </li>
        {openMenu === "settings" && (
          <ul className="submenu">
            <li>Profile Settings</li>
            <li>Account Settings</li>
            <li>Theme Settings</li>
            <li>System Preferences</li>
          </ul>
        )}

      </ul>
    </div>
  );
}

export default Dashboard;
