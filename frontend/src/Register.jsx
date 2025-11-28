import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Register.css'; 
import { registerAPI } from "./api/registerBridge";
import registrationImage from './assets/images/registration.png';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Map frontend fields to backend fields
    const dataToSend = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address,
      role: formData.role
    };

    try {
      // ✅ Call backend
      const res = await registerAPI(dataToSend);
      console.log("Backend response:", res.data);
      alert("Registered successfully!");

      // ✅ Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: '',
        role: '',
      });
    } catch (err) {
      // ✅ Proper error display
      console.error("Register API error:", err.response?.data || err);
      alert(err.response?.data?.error || "Error calling Register API");
    }
  };

  return (
    <div className="register-page-container">
      
      <div className="register-image">
        <img src={registrationImage} alt="Registration" />
        <p className="register-info">
          Join us in supporting children in need. By registering, you can become a donor, volunteer, or partner to make a real difference in their lives.
        </p>
      </div>

      <div className="registration-form-container">
        <h1 className="registration-form-heading">Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-input"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              className="form-input"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Role --</option>
              <option value="donor">Donor</option>
              <option value="volunteer">Volunteer</option>
              <option value="guardian">Partner</option>
            </select>
          </div>

          <button type="submit" className="btn-login">
            Register
          </button>

          <p className="form-footer">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
