import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddStaff.css";

const BASE_URL = "http://localhost:5000/api";

function AddStaff() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    role: "",
    phone: ""
  });

  const [staffList, setStaffList] = useState([]);

  // Fetch staff from backend
  const fetchStaff = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/staff`);
      setStaffList(res.data);
    } catch (err) {
      console.error("Failed to load staff", err);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, email, password, role, phone } = form;

    if (!fullname || !email || !password || !role || !phone) {
      alert("Please fill all required fields");
      return;
    }

    try {
      // Add new staff
      const res = await axios.post(`${BASE_URL}/staff`, form);

      // ⚡ Store user + token in localStorage immediately
      localStorage.setItem("user", JSON.stringify({
        user: res.data.user || res.data, // backend may return user object
        token: res.data.token
      }));

      alert("Staff added successfully");

      setForm({ fullname: "", email: "", password: "", address: "", role: "", phone: "" });
      fetchStaff();
    } catch (err) {
      console.error("Error adding staff", err);
      alert("Failed to add staff");
    }
  };

  return (
    <div className="staff-container">
      <h2>Add Staff</h2>

      <form onSubmit={handleSubmit} className="staff-form">
        <label>
          Full Name
          <input name="fullname" value={form.fullname} onChange={handleChange} type="text" placeholder="Full Name" />
        </label>
        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" value={form.plainPassword} onChange={handleChange} type="password" placeholder="Password" />
        </label>
        <label>
          Address
          <input name="address" value={form.address} onChange={handleChange} type="text" placeholder="Address (optional)" />
        </label>
        <label>
          Role
          <input name="role" value={form.role} onChange={handleChange} type="text" placeholder="Role" />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone Number" />
        </label>

        <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center" }}>
          <button type="submit">Add Staff</button>
        </div>
      </form>

      <hr />

      <h3>Staff List</h3>
      <table className="staff-table">
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
            <tr><td colSpan="7" style={{ textAlign: "center" }}>No staff found</td></tr>
          ) : (
            staffList.map((staff, index) => (
              <tr key={staff._id}>
                <td>{index + 1}</td>
                <td>{staff.fullname}</td>
                <td>{staff.email}</td>
                <td>{staff.plainPassword || "N/A"}</td>
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

export default AddStaff;
