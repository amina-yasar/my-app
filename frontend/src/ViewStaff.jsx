// src/components/ViewStaff.jsx
import React, { useState, useEffect } from "react";
import { getStaffAPI } from "./api/staffBridge";
import "./ViewStaff.css";

function ViewStaff() {
  const [staffList, setStaffList] = useState([]);

  const fetchStaff = async () => {
    try {
      const res = await getStaffAPI();
      setStaffList(res.data);
    } catch (err) {
      console.error("Failed to load staff", err);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div className="view-staff-container">
      <h2>Staff List</h2>

      <table className="view-staff-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Role</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {staffList.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No staff found
              </td>
            </tr>
          ) : (
            staffList.map((staff, index) => (
              <tr key={staff._id}>
                <td>{index + 1}</td>
                <td>{staff.fullname}</td>
                <td>{staff.email}</td>
                <td>{staff.password}</td>
                <td>{staff.address}</td>
                <td>{staff.role}</td>
                <td>{staff.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStaff;
