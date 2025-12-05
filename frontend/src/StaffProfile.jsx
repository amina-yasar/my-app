import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./StaffProfile.css";

const BASE_URL = "http://localhost:5000/api";

function StaffProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = storedUser?.token;

  useEffect(() => {
    if (!token) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    const config = { headers: { Authorization: `Bearer ${token}` } };

    // Fetch staff profile
    axios.get(`${BASE_URL}/staff/profile`, config)
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load profile");
        setLoading(false);
      });
  }, [token]);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="staff-dashboard-container">
      <header className="staff-header">
        <h1 className="menu-heading">Staff Profile</h1>
      </header>

      <aside className="staff-sidebar">
        <h3 className="sidebar-title">Staff Menu</h3>
        <ul className="sidebar-list">
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

        <div className="sidebar-logout">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <main className="staff-content">
        <h2 className="welcome-text">Welcome, {user?.fullname}</h2>
        <p>Select an option from the sidebar to manage your profile.</p>

        <div className="staff-details">
          <h3>Staff Information</h3>
          <table>
            <tbody>
              <tr><td><strong>Full Name:</strong></td><td>{user?.fullname}</td></tr>
              <tr><td><strong>Email:</strong></td><td>{user?.email}</td></tr>
               <tr><td><strong>Password:</strong></td><td>{user?.plainPassword}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>{user?.phone}</td></tr>
              <tr><td><strong>Address:</strong></td><td>{user?.address}</td></tr>
              <tr><td><strong>Role:</strong></td><td>{user?.role}</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default StaffProfile;
