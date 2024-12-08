import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OneOnOneSessions.css";

const OneOnOneSessions = () => {
  const navigate = useNavigate();
  const [selectedSession, setSelectedSession] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const counselors = [
    { id: 1, name: "Dr. Jane Smith", specialization: "Anxiety", price: "₹500/session" },
    { id: 2, name: "Dr. Robert Johnson", specialization: "Depression", price: "₹600/session" },
    { id: 3, name: "Dr. Emily Davis", specialization: "Stress Management", price: "₹550/session" },
    { id: 4, name: "Dr. Michael Brown", specialization: "Trauma", price: "₹700/session" },
    { id: 5, name: "Dr. Sarah Wilson", specialization: "Self-Esteem", price: "₹500/session" },
  ];

  const handleBookNow = (session) => {
    setSelectedSession(session);
  };

  const handleProceedToPayment = () => {
    // Simulate payment confirmation
    setPaymentStatus("success");
    alert(`Payment successful for ${selectedSession.name}'s session!`);
    setSelectedSession(null); // Reset selection after payment
  };

  return (
    <div className="one-on-one-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="brand-name">SMHS</h2>
        <ul className="nav-links">
          <li>
            <button onClick={() => navigate("/home")} className="nav-link">Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/one-on-one-sessions")} className="nav-link">One-on-One Sessions</button>
          </li>
          <li>
            <button onClick={() => navigate("/virtual-sessions")} className="nav-link">Virtual Sessions</button>
          </li>
          <li>
            <button onClick={() => navigate("/chatbot")} className="nav-link">ChatBot</button>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <header className="one-on-one-header">
        <h1>One-on-One Sessions</h1>
        <p>Choose a counselor for a personalized session</p>
      </header>
      <div className="counselors-grid">
        {counselors.map((counselor) => (
          <div className="counselor-card" key={counselor.id}>
            <h3>{counselor.name}</h3>
            <p>Specialization: {counselor.specialization}</p>
            <p>Price: {counselor.price}</p>
            <button
              className="book-now-button"
              onClick={() => handleBookNow(counselor)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
      {selectedSession && (
        <div className="payment-container">
          <h3>Proceed to Payment for {selectedSession.name}</h3>
          <p>Specialization: {selectedSession.specialization}</p>
          <p>Price: {selectedSession.price}</p>
          <button className="proceed-button" onClick={handleProceedToPayment}>
            Confirm Booking
          </button>
        </div>
      )}
      {paymentStatus && (
        <div className={`payment-status ${paymentStatus}`}>
          <p>Payment was successful! Your session has been booked.</p>
        </div>
      )}
    </div>
  );
};

export default OneOnOneSessions;
