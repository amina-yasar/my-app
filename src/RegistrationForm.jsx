import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        border: "solid black",
        padding: "20px",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="fullName" style={{ display: "block", marginBottom: "5px" }}>
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="phone" style={{ display: "block", marginBottom: "5px" }}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="address" style={{ display: "block", marginBottom: "5px" }}>
            Address
          </label>
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "5px" }}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="role" style={{ display: "block", marginBottom: "5px" }}>
            Role
          </label>
          <select
            id="role"
            className="form-select"
            value={formData.role}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">-- Select Role --</option>
            <option value="donor">Donor</option>
            <option value="volunteer">Volunteer</option>
            <option value="guardian">Guardian</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "block",
            margin: "0 auto",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
