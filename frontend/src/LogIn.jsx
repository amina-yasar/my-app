import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // added useNavigate
import "./LogIn.css"; 
import { loginAPI } from "./api/loginBridge"; // Axios bridge

function LogIn() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate(); // for programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };

    // Admin login check
    if (data.username === "aminayasir805@gmail.com" && data.password === "amina12345") {
      navigate("/adminportal"); // redirect to admin page
      return;
    }

    try {
      const res = await loginAPI(data);
      console.log(res.data); // backend response
      alert("Login API called successfully!");
    } catch (err) {
      console.error(err);
      alert("Error calling Login API");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-heading">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              className="form-input"
              placeholder="Enter your username"
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
