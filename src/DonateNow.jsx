import React, { useState } from "react";

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
    alert(`Thank you, ${formData.name}! Your donation of $${formData.amount} is appreciated.`);
    setFormData({ name: "", email: "", amount: "" }); 
  };

  return (
    <div style={{ border:"solid black",maxWidth: "500px", margin: "auto", padding: "20px", fontFamily: "'Times New Roman', Times, serif" }}>
      <h1 style={{ color: "orange", textAlign: "center" }}>Donate to Our Orphanage</h1>

      <p>
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
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
<label htmlFor="amount">Donation Amount (Rs):</label><br />
  <input
  type="text"
  id="amount"
  value={formData.amount}
  onChange={handleChange}
  placeholder="Enter amount in Rs"
  required
  style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
/>



     <button
  type="submit"
  style={{
    backgroundColor: "orange",
    color: "white",
    padding: "8px 16px",   
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",      
    margin: "20px auto",   
    fontSize: "14px",      
    width: "auto",        
    minWidth: "120px",     
  }}
>
  Donate Now
</button>

      </form>
    </div>
  );
}

export default DonateNow;
