import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./VirtualSessions.css";
import { useNavigate } from "react-router-dom";

const VirtualSessions = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const availableDates = [new Date(2024, 11, 10), new Date(2024, 11, 12), new Date(2024, 11, 14)];

  const handleDateClick = (date) => {
    if (availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())) {
      setSelectedDate(date);
      alert(`Session booked on ${date.toDateString()}`);
    } else {
      alert("This date is not available for booking.");
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && availableDates.some((d) => d.toDateString() === date.toDateString())) {
      return "available-date";
    }
    return null;
  };

  const videos = [
    {
      id: "bNtLd73CQPU",
      title: "Anxiety Management",
      link: "https://www.youtube.com/watch?v=bNtLd73CQPU",
    },
    {
      id: "eGVWRvNe1-A",
      title: "Stress Reduction Techniques",
      link: "https://www.youtube.com/watch?v=eGVWRvNe1-A",
    },
    {
      id: "Gljq2FHzTvY",
      title: "Overcoming Depression",
      link: "https://www.youtube.com/watch?v=Gljq2FHzTvY",
    },
  ];

  return (
    <div className="virtual-sessions-container">
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

      {/* Header */}
      <header className="hero-section">
        <h1>Virtual Sessions</h1>
        <p>Select an available date to book your session and explore therapy videos below.</p>
      </header>

      {/* Booking Section */}
      <section className="booking-section">
        <h2>Book Your Session</h2>
        <div className="calendar-container">
          <Calendar
            onClickDay={handleDateClick}
            tileClassName={tileClassName}
          />
          {selectedDate && <p className="selected-date">Selected Date: {selectedDate.toDateString()}</p>}
        </div>
      </section>

      {/* Therapy Videos Section */}
      <section className="therapy-videos-section">
        <h2>Therapy Videos</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <div
              className="video-card"
              key={video.id}
              onClick={() => window.open(video.link, "_blank")}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                alt={video.title}
              />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 SMHS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default VirtualSessions;
