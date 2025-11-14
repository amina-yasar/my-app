import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        border: "solid black",
        padding: "20px",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

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
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
