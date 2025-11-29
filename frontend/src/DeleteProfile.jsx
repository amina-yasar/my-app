import React, { useEffect, useState } from "react";
import { getStaffAPI, deleteStaffAPI } from "./api/staffBridge";
import "./DeleteProfile.css";

function DeleteProfile() {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all staff
  const fetchStaff = async () => {
    try {
      const res = await getStaffAPI();
      setStaffList(res.data); // Show all staff
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch staff:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  // Delete a staff profile
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this staff?")) return;

    try {
      await deleteStaffAPI(id);
      // Remove deleted staff from local state
      setStaffList(staffList.filter((staff) => staff._id !== id));
      alert("Staff profile deleted successfully!");
    } catch (err) {
      console.error("Failed to delete staff:", err);
      alert("Failed to delete staff profile");
    }
  };

  if (loading) return <p>Loading staff list...</p>;

  return (
    <div className="staff-list-container">
      <h2 className="staff-list-title">All Staff Members</h2>

      <table className="staff-list-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {staffList.length === 0 ? (
            <tr>
              <td colSpan="6">No staff found.</td>
            </tr>
          ) : (
            staffList.map((staff) => (
              <tr key={staff._id}>
                <td>{staff.fullname}</td>
                <td>{staff.email}</td>
                <td>{staff.phone}</td>
                <td>{staff.address}</td>
                <td>{staff.role}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(staff._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteProfile;
