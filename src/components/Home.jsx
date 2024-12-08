import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

import HappyBook from "./HappyBook.jpg";
import FeelBook from "./FeelBook.jpg";
import BodyBook from "./BodyBook.jpg";
import MindBook from "./MindBook.jpg";
import GrowthBook from "./GrowthBook.jpg";
import HopeBook from "./HopeBook.jpg";

import Counselor1 from "./Counselor1.jpg";
import Counselor2 from "./Counselor2.jpg";
import Counselor3 from "./Counselor3.jpg";
import Counselor4 from "./Counselor4.jpg";
import Counselor5 from "./Counselor5.jpg";

const counselors = [
  { id: 1, name: "Dr. Jane Smith", issue: "Anxiety", rating: 4.8, image: Counselor1 },
  { id: 2, name: "Dr. Robert Johnson", issue: "Depression", rating: 4.6, image: Counselor2 },
  { id: 3, name: "Dr. Emily Davis", issue: "Stress Management", rating: 4.7, image: Counselor3 },
  { id: 4, name: "Dr. Michael Brown", issue: "Trauma", rating: 4.9, image: Counselor4 },
  { id: 5, name: "Dr. Sarah Wilson", issue: "Self-Esteem", rating: 4.5, image: Counselor5 },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCounselors = counselors.filter((counselor) =>
    counselor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
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
          <li>
            <button onClick={() => navigate("/login")} className="logout-button">Logout</button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to SMHS</h1>
        <p>Your one-stop solution for mental health resources and support</p>
      </header>

      {/* Books Section */}
      <section id="books" className="section">
        <h2>Recommended Books</h2>
        <div className="scrolling-books-container">
          <div className="scrolling-books">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="book-card">
                  <img src={HappyBook} alt="The Happiness Trap" />
                  <p>"The Happiness Trap" by Russ Harris</p>
                </div>
                <div className="book-card">
                  <img src={FeelBook} alt="Feeling Good" />
                  <p>"Feeling Good: The New Mood Therapy" by David D. Burns</p>
                </div>
                <div className="book-card">
                  <img src={BodyBook} alt="The Body Keeps the Score" />
                  <p>"The Body Keeps the Score" by Bessel van der Kolk</p>
                </div>
                <div className="book-card">
                  <img src={MindBook} alt="Mind Over Mood" />
                  <p>"Mind Over Mood" by Dennis Greenberger</p>
                </div>
                <div className="book-card">
                  <img src={GrowthBook} alt="The Subtle Art of Growth" />
                  <p>"The Subtle Art of Growth" by Mark Manson</p>
                </div>
                <div className="book-card">
                  <img src={HopeBook} alt="Hope in the Darkness" />
                  <p>"Hope in the Darkness" by Jane Doe</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Counselors Section */}
      <section id="counselors" className="section">
        <h2>Counselors</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search counselor by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="counselors-list">
          {filteredCounselors.map((counselor) => (
            <div className="counselor-card" key={counselor.id}>
              <img src={counselor.image} alt={counselor.name} />
              <h3>{counselor.name}</h3>
              <p>Specialized in: {counselor.issue}</p>
              <p>Rating: ⭐ {counselor.rating}</p>
            </div>
          ))}
          {filteredCounselors.length === 0 && (
            <p className="no-results">No counselors found.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 SMHS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
