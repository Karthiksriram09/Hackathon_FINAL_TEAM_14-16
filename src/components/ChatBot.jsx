import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm here to help you. How are you feeling today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const questions = [
    { id: 1, question: "Do you often feel stressed or anxious?" },
    { id: 2, question: "Do you find it hard to relax or enjoy activities?" },
    { id: 3, question: "Do you have trouble sleeping or feel tired frequently?" },
    { id: 4, question: "Do you feel sad or down most of the time?" },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSend = () => {
    if (userInput.trim() === "") return;

    const updatedMessages = [...messages, { type: "user", text: userInput }];

    if (currentQuestionIndex < questions.length) {
      updatedMessages.push({
        type: "bot",
        text: questions[currentQuestionIndex].question,
      });
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Final message based on responses
      const summaryMessage = "Thank you for answering. Based on your responses, here are some tips and resources for you.";
      updatedMessages.push({ type: "bot", text: summaryMessage });
    }

    setMessages(updatedMessages);
    setUserInput("");
  };

  return (
    <div className="chatbot-container">
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
            <button onClick={() => navigate("/chatbot")} className="nav-link">Chatbot</button>
          </li>
          <li>
            <button onClick={() => navigate("/login")} className="logout-button">Logout</button>
          </li>
        </ul>
      </nav>

      {/* Chatbox */}
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="input-section">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="chat-input"
          />
          <button onClick={handleSend} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
