import React, { useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);
  const [counselors, setCounselors] = useState([]);

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const handleAddCounselor = (counselor) => {
    setCounselors((prevCounselors) => [...prevCounselors, counselor]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard onAddBook={handleAddBook} onAddCounselor={handleAddCounselor} />}
        />
        <Route
          path="/home"
          element={<Home books={books} counselors={counselors} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
