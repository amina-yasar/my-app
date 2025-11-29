import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateProfile.css";

function CreateProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "staff",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullname || !form.email || !form.password || !form.phone || !form.address) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      // Get logged-in user (admin) ID to set as createdBy
      const loggedInUser = JSON.parse(localStorage.getItem("user"));

      const staffData = { ...form, createdBy: loggedInUser?._id };

      const res = await axios.post("http://localhost:5000/api/staff", staffData);

      // Save created staff in localStorage so ViewProfile can access it
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Staff profile created successfully!");

      
    } catch (err) {
      console.error("Error creating staff:", err);
      alert("Failed to create staff profile");
    }
  };

  return (
    <div className="staff-list-container">
      <h2 className="staff-list-title">Create Staff Profile</h2>

      <form onSubmit={handleSubmit} className="staff-list-form">
        <label>
          Full Name:
          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </label>

        <div className="form-buttons">
          <button type="submit" className="btn-create">
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProfile;
