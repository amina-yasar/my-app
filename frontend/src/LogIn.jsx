import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";

function LogIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Login API
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Store user info + JWT token
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login successful!");

      // Navigate based on role
      if (res.data.user.role === "admin") navigate("/adminportal");
      else if (res.data.user.role === "staff") navigate("/staff/profile");
      else navigate("/");

    } catch (err) {
      console.error("Login failed:", err);
      alert(err.response?.data?.error || "Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-heading">Log In</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              ref={emailRef}
              type="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn-login">Log In</button>

          <div className="form-footer">
            <p>
              Don't have an account? <Link to="/registration">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
