import React, { useEffect, useState } from "react";
import { getStaffByIdAPI } from "./api/staffBridge";
import "./ViewProfile.css";

function ViewProfile() {
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = () => {
   const stored = JSON.parse(localStorage.getItem("user"));
const staffId = stored?.user?._id; // ✅ get id from stored.user
const token = stored?.token;

if (!staffId || !token) {
  setError("User not logged in or invalid user ID");
  setLoading(false);
  return;
}


    getStaffByIdAPI(staffId, token)
      .then((res) => {
        if (res.data) setStaff(res.data);
        else setError("Staff profile not found");
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load profile");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProfile();

    // Listen to localStorage changes
    const handleStorageChange = () => {
      fetchProfile();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="staff-list-container">
      <h2 className="staff-list-title">My Profile</h2>
      <table className="staff-list-table">
        <tbody>
          <tr>
            <th>Full Name</th>
            <td>{staff?.fullname || "N/A"}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{staff?.email || "N/A"}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td>{staff?.plainPassword}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{staff?.phone || "N/A"}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{staff?.address || "N/A"}</td>
          </tr>
          <tr>
            <th>Role</th>
            <td>{staff?.role || "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewProfile;
