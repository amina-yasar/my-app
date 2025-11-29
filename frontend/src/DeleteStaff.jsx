import React, { useState, useEffect } from "react";
import { getStaffAPI, deleteStaffAPI } from "./api/staffBridge"; // your API file
import "./DeleteStaff.css";

const DeleteStaff = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all staff
  const fetchStaff = async () => {
    try {
      setLoading(true);
      const res = await getStaffAPI();
      setStaffList(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch staff.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  // Delete staff by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this staff?")) return;

    try {
      await deleteStaffAPI(id);
      setStaffList(staffList.filter((staff) => staff._id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete staff.");
    }
  };

  if (loading) return <p>Loading staff...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="delete-staff-container">
      <h2>Staff List</h2>
      <table className="staff-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff._id}>
              <td>{staff.fullname}</td>
              <td>{staff.email}</td>
              <td>{staff.role}</td>
              <td>{staff.phone}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(staff._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {staffList.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No staff found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteStaff;
