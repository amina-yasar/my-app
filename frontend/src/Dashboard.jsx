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
          <li><Link to="/admin/add-events">Add Event</Link></li>
            <li><Link to="/admin/update-events">Update Event</Link></li>
            <li><Link to="/admin/view-events">View Event</Link></li>
            <li><Link to="/admin/delete-events">Delete Event</Link></li>
          </ul>
        )}

        {/* Staff */}
        <li onClick={() => toggleMenu("staff")}>
          Staff ▾
        </li>
        {openMenu === "staff" && (
        <ul className="submenu">
          <li><Link to="/admin/add-staff">Add Staff</Link></li>
            <li><Link to="/admin/update-staff">Update Staff</Link></li>
            <li><Link to="/admin/view-staff">View Staff</Link></li>
            <li><Link to="/admin/delete-staff">Delete Staff</Link></li>
          </ul>
        )}

         {/* admin */}
        <li onClick={() => toggleMenu("admin")}>
          Admin ▾
        </li>
        {openMenu === "admin" && (
          <ul className="submenu">
            <li><Link to="/admin/add-admin">Add Admin</Link></li>
            <li><Link to="/admin/update-admin">Update Admin</Link></li>
            <li><Link to="/admin/view-admin">View Admin</Link></li>
            <li><Link to="/admin/delete-admin">Delete Admin</Link></li>
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
