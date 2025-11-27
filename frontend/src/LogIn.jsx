import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAPI } from "./api/loginBridge";
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
      const res = await loginAPI({ email, password });
      console.log("Backend response:", res.data);

      const token = res.data.token;
      if (!token) {
        alert("Token not received from backend!");
        return;
      }

      // Save JWT
      localStorage.setItem("authToken", token);
      console.log("JWT saved:", token);

      // Redirect based on admin
      if (res.data.isAdmin) {
        navigate("/adminportal");
      } else {
        navigate("/collections");
      }

      alert("Login successful!");
    } catch (err) {
      console.error(
        "Login failed:",
        err.response ? err.response.data : err
      );
      alert("Login failed: Invalid credentials or server error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-heading">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn-login">
              Log In
            </button>
          </div>

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
