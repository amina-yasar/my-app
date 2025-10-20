import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { BsSuitHeartFill } from "react-icons/bs";
import "./DonateNow.css";

function DonateNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your donation of Rs.${formData.amount} is appreciated.`);
    setFormData({ name: "", email: "", amount: "" }); 
  };

  return (
    <div className="donate-container">
      <h1 className="donate-heading">Donate Us Now</h1>

      <p className="donate-text">
        Your generous donations help provide food, shelter, education, and medical care for the children. Every contribution makes a big difference in their lives and the community.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="donate-input"
        />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="donate-input"
        />

        <label htmlFor="amount">Donation Amount (Rs):</label><br />
        <input
          type="text"
          id="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount in Rs"
          required
          className="donate-input donate-input-last"
        />

        <Link to="/donate"><button
          type="button"
          className="donate-btn"
        >
          <BsSuitHeartFill className="donate-icon" />
          Donate Now
        </button></Link> 
      </form>
    </div>
  );
}

export default DonateNow;
