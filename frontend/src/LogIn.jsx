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
      // Call the backend login API
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // Extract the user object returned by backend
      const user = res.data.user;

      if (!user || !user._id) {
        alert("Login failed: Invalid user data returned from server.");
        return;
      }

      // Save the user object for later use (ViewProfile, etc.)
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", user._id);

      alert("Login successful!");

      // Redirect based on role
      if (user.role === "admin") navigate("/adminportal");
      else if (user.role === "staff") navigate("/staffprofile");
      else navigate("/");

    } catch (err) {
      console.error("Login failed:", err);
      alert(err.response?.data?.error || "Login failed. Try again.");
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

          <button type="submit" className="btn-login">
            Log In
          </button>

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
