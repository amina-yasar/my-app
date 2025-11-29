// src/components/UpdateStaff.jsx
import React, { useState, useEffect } from "react";
import { getStaffAPI, updateStaffAPI } from "./api/staffBridge";
import "./UpdateStaff.css";

function UpdateStaff() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    role: "",
    phone: "",
  });

  const [staffList, setStaffList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch all staff
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

  // Populate form when editing
  const handleEdit = (staff) => {
    setForm({
      fullname: staff.fullname || "",
      email: staff.email || "",
      password: staff.password || "", // show current password for admin
      address: staff.address || "",
      role: staff.role || "",
      phone: staff.phone || "",
    });
    setEditingId(staff._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Update staff
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editingId) {
      alert("Please select a staff member to edit.");
      return;
    }

    if (!form.fullname || !form.email || !form.role || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    try {
      await updateStaffAPI(editingId, form);
      alert("Staff updated successfully!");
      setForm({ fullname: "", email: "", password: "", address: "", role: "", phone: "" });
      setEditingId(null);
      fetchStaff();
    } catch (err) {
      console.error("Error updating staff:", err);
      alert("Failed to update staff");
    }
  };

  return (
    <div className="update-staff-container">
      <h2>Update Staff</h2>

      <form onSubmit={handleSubmit} className="update-staff-form">
        <label>
          Full Name
          <input name="fullname" value={form.fullname} onChange={handleChange} type="text" />
        </label>

        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} type="email" />
        </label>

        <label>
          Password
          <input name="password" value={form.password} onChange={handleChange} type="text" />
        </label>

        <label>
          Address
          <input name="address" value={form.address} onChange={handleChange} type="text" />
        </label>

        <label>
          Role
          <input name="role" value={form.role} onChange={handleChange} type="text" />
        </label>

        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} type="text" />
        </label>

        <div className="button-group">
          <button type="submit">Update Staff</button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setForm({ fullname: "", email: "", password: "", address: "", role: "", phone: "" });
                setEditingId(null);
              }}
              style={{ marginLeft: "10px" }} // Add space between buttons
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr />

      <h3>Staff List</h3>
      <table className="staff-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Edit</th>
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
            staffList.map((staff) => (
              <tr key={staff._id}>
                <td>{staff.fullname}</td>
                <td>{staff.email}</td>
                <td>{staff.password}</td> {/* Show password */}
                <td>{staff.address}</td> {/* Show address */}
                <td>{staff.role}</td>
                <td>{staff.phone}</td>
                <td>
                  <button onClick={() => handleEdit(staff)}>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UpdateStaff;
