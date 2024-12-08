import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home"; // Your HomePage component
import OneOnOneSessions from "./components/OneOnOneSessions";
import AdminDashboard from "./components/AdminDashboard";
import VirtualSessions from "./components/VirtualSessions";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/one-on-one-sessions" element={<OneOnOneSessions />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/virtual-sessions" element={<VirtualSessions />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
