import React from "react";
import { Link, useNavigate } from "react-router-dom";
import admin from "./assets/images/admin.png";
import "./AdminMenu.css";

function AdminMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to login page and replace history so back button won't go back to admin
    navigate("/login", { replace: true });
    
  // Optional: clear history stack by replacing with home first
  // If you want back button to go Home, you could do:
  window.history.pushState({}, "", "/"); // sets the current history entry to Home
  };

  return (
    <div className="menu">

      {/* Middle Heading */}
      <div className="menu-heading">
        Admin Portal
      </div>

      {/* Right side items */}
      <div className="right-items">
        {/* Notification Bell */}
        <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
          <li className="nav-item">
            <a className="nav-link position-relative" href="#">
              <i className="bi bi-bell fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </a>
          </li>
        </ul>

        {/* Admin Info */}
        <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
          <li className="nav-item d-flex align-items-center">
            <img src={admin} alt="Admin" className="admin-img me-2" />
            <span className="me-2">Admin</span>
            <Link className="nav-link" to="/admin/admin-profile">Profile</Link>
          </li>
        </ul>

        {/* Search */}
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" />
          <button className="search-btn" type="submit">Search</button>
        </form>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="logout-btn d-flex align-items-center"
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default AdminMenu;
