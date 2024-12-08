import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student"); // Default role as "Student"
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Special case for Admin
    if (email === "admin" && password === "admin" && role === "Admin") {
      navigate("/admin-dashboard");
      return;
    }

    // General validation for non-Admin roles
    if (!email.includes("@")) {
      alert("Please enter a valid email address containing '@'.");
      return;
    }

    // Redirect based on role
    switch (role) {
      case "Student":
        navigate("/home");
        break;
      case "Counselor":
        navigate("/counselor-dashboard");
        break;
      default:
        alert("Invalid role selected!");
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <div className="role-selection">
            <label>
              <input
                type="radio"
                value="Student"
                checked={role === "Student"}
                onChange={(e) => setRole(e.target.value)}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                value="Counselor"
                checked={role === "Counselor"}
                onChange={(e) => setRole(e.target.value)}
              />
              Counselor
            </label>
            <label>
              <input
                type="radio"
                value="Admin"
                checked={role === "Admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              Admin
            </label>
          </div>
          <button type="submit" className="form-button">Login</button>
        </form>
        <div className="switch-container">
          <span>Don’t have an account?</span>
          <button className="switch-button" onClick={() => navigate("/register")}>
            Switch to Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
