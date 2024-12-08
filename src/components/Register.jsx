import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false); // State for success dialog
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password }); // Add API call here

    // Simulate successful registration
    setSuccess(true);

    // Hide the dialog after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="register-container">
      {/* Success dialog */}
      {success && <div className="success-dialog">Registration Successful!</div>}

      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
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
          <button type="submit" className="form-button">Register</button>
        </form>
        <div className="switch-container">
          <span>Already have an account?</span>
          <button className="switch-button" onClick={() => navigate("/login")}>
            Switch to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
