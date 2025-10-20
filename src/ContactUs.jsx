import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
    console.log("Contact form data:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "solid black",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
          rows="5"
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <button
          type="submit"
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
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
