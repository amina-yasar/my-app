import { useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AdminContext from "./context/AdminContext"; // Admin-only
import "./LogIn.css";

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // Admin context
  const adminContext = useContext(AdminContext);
  const setAdminUser = adminContext?.setUser;
  const setAdminToken = adminContext?.setToken;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const loggedUser = res.data.user;
      const token = res.data.token;

      // Save admin in context + localStorage
      if (loggedUser.role === "admin") {
        setAdminUser?.(loggedUser);
        setAdminToken?.(token);
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
        navigate("/adminportal");
      }
      // Staff: only localStorage + redirect
      else if (loggedUser.role === "staff") {
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
        navigate("/staff/profile");
      } else {
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
        navigate("/");
      }

      alert("Login successful!");
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
