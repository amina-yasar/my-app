import React, { useState } from "react";
import "./GetInvolved.css";
import { Link } from 'react-router-dom';

function GetInvolved() {
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

  const cardData = [
    {
      title: "Partners",
      description:
        "We believe in the power of collaboration. Partnering with us allows organizations to leverage their resources and networks to create measurable and lasting change in the lives of vulnerable children. By becoming a partner, you'll join a community of like-minded organizations that work together towards common goals. Your expertise, resources, and networks are invaluable in making a difference in the lives of children in need.",
    },
    {
      title: "Volunteers",
      description:
        "Our volunteers are the heartbeat of our mission. Whether it's a few hours a week or leading a project, your dedication helps shape the future of the children we serve. As a volunteer, you'll be actively involved in various activities such as tutoring, mentorship, event planning, and more. Each volunteer's contribution makes a meaningful impact, helping to build a stronger, brighter future for these children. Your time, effort, and passion are vital in creating lasting change.",
    },
    {
      title: "Fundraise",
      description:
        "Fundraising is a powerful way to contribute. Host events or share our cause to help us raise the resources needed to support children in need. Whether you’re organizing a charity run, a dinner event, or an online campaign, your fundraising efforts will directly support programs that provide education, healthcare, and other essential services to children living in challenging conditions. Your commitment to raising funds will help change the lives of countless children and create a lasting, positive impact on their communities.",
    },
  ];

  return (
    <div className="get-involved-container">
      {/* First Column: Get Involved content */}
      <div className="col-12 col-lg-6 col-md-4">
        <div className="container">
          <h1 className="get-involved-heading">Get Involved</h1>

          {/* Card Data */}
          <div className="row" style={{ width: "100%" }}>
            {cardData.map(({ title, description }, index) => (
              <div
                key={index}
                className="col-12"
                style={{
                  marginBottom: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div className="card-section">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-description">{description}</p>
                  <Link to="/login">
                    <button type="button" className="card-button">
                      LogIn
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Column: Registration Form */}
      <div className="col-12 col-lg-6 col-md-4">
        <div className="registration-form-container">
          <h2 className="registration-form-heading">Registration Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                className="form-select"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">-- Select Role --</option>
                <option value="donor">Donor</option>
                <option value="volunteer">Volunteer</option>
                <option value="guardian">Partner</option>
              </select>
            </div>

            <button type="submit" className="submit-button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
