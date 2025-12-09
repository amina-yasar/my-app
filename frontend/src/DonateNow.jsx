import React, { useState } from "react";
import { donateAPI } from "./api/donateBridge"; // Axios bridge
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

  const handleSubmit = async (e) => {
    e.preventDefault();
     // prevent page reload
    // try {
    //   // Call backend via Axios
    //   const res = await donateAPI(formData);
    //   console.log(res.data); // backend response
    //   alert(`Thank you, ${formData.name}! Your donation of Rs.${formData.amount} is appreciated.`);


         
      
    //   // Clear form
    //   setFormData({ name: "", email: "", amount: "" });
    // } catch (err) {
    //   console.error(err);
    //   alert("Error calling Donate API");
    // }
    
  
  };

  return (
    <div className="donate-container">
      <h1 className="donate-heading">Donate Us Now</h1>
      <p className="donate-text">
        Your generous donations help provide food, shelter, education, and medical care for the children.
      </p>
      
      {/* ✅ Form triggers handleSubmit correctly */}
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

        {/* ✅ Submit button: triggers onSubmit */}
        <button type="submit" className="donate-btn">
          <BsSuitHeartFill className="donate-icon" /> Donate Now
        </button>
      </form>
    </div>
  );
}

export default DonateNow;
