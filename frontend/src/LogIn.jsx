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

      // Backend now sends user object
      const user = res.data.user;

      if (!user) {
        alert("Login failed: user not found or invalid credentials.");
        return;
      }

      // Save user info in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User saved:", user);

      // Redirect based on role (if you have roles in DB)
      if (user.role === "admin") {
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
      alert("Login failed. Invalid credentials or server error.");
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
