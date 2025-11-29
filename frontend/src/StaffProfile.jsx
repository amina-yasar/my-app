import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StaffProfile.css";

function StaffProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="staff-dashboard-container">

      {/* ---------- TOP HEADER ---------- */}
      <header className="staff-header">
        <h1 className="menu-heading">Staff Profile</h1>
      </header>

      {/* ---------- SIDEBAR ---------- */}
      <aside className="staff-sidebar">
        <h3 className="sidebar-title">Staff Menu</h3>

        <ul className="sidebar-list">
          {/* STAFF PROFILE MENU */}
          <li onClick={() => toggleMenu("profile")}>
            Profile {openMenu === "profile" ? "▴" : "▾"}
          </li>

          {openMenu === "profile" && (
            <ul className="submenu">
              <li><Link to="/staff/create-profile">Create Profile</Link></li>
              <li><Link to="/staff/view-profile">View Profile</Link></li>
              <li><Link to="/staff/update-profile">Update Profile</Link></li>
              <li><Link to="/staff/delete-profile">Delete Profile</Link></li>
            </ul>
          )}
        </ul>

        {/* ---------- LOGOUT BUTTON BELOW ALL ITEMS ---------- */}
        <div className="sidebar-logout">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="staff-content">
        <h2 className="welcome-text">Welcome, {user?.fullname}</h2>
        <p>Select an option from the sidebar to manage your staff profile.</p>

        {/* ---------- STAFF DETAILS ---------- */}
        <div className="staff-details">
          <h3>Staff Information</h3>
          <table>
            <tbody>
              <tr>
                <td><strong>Full Name:</strong></td>
                <td>{user?.fullname}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <td><strong>Phone Number:</strong></td>
                <td>{user?.phone}</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{user?.address}</td>
              </tr>
              <tr>
                <td><strong>Password:</strong></td>
                <td>{user?.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

    </div>
  );
}

export default StaffProfile;
