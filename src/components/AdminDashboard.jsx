import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = ({ onAddBook, onAddCounselor }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@student.com", role: "Student" },
    { id: 2, name: "Jane Smith", email: "jane@student.com", role: "Student" },
  ]);

  const [counselors, setCounselors] = useState([
    { id: 1, name: "Dr. Jane Smith", specialization: "Anxiety", email: "jane@counselor.com" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", email: "", password: "", role: "Student" });
  const [newBook, setNewBook] = useState({ title: "", image: null });
  const [newCounselor, setNewCounselor] = useState({ name: "", specialization: "", email: "" });

  // Handle adding a student
  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.password || !newStudent.role) {
      alert("Please fill all the fields.");
      return;
    }

    const studentToAdd = {
      id: Math.floor(Math.random() * 10000),
      ...newStudent,
    };

    setStudents((prevStudents) => [...prevStudents, studentToAdd]);
    setNewStudent({ name: "", email: "", password: "", role: "Student" });
  };

  // Handle deleting a student
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Handle adding a book
  const handleAddBook = () => {
    if (!newBook.title || !newBook.image) {
      alert("Please provide both title and image for the book.");
      return;
    }

    const bookToAdd = { ...newBook };
    onAddBook(bookToAdd);
    setNewBook({ title: "", image: null });
  };

  // Handle adding a counselor
  const handleAddCounselor = () => {
    if (!newCounselor.name || !newCounselor.specialization || !newCounselor.email) {
      alert("Please fill all the fields.");
      return;
    }

    const counselorToAdd = {
      id: Math.floor(Math.random() * 10000),
      ...newCounselor,
    };

    setCounselors((prevCounselors) => [...prevCounselors, counselorToAdd]);
    setNewCounselor({ name: "", specialization: "", email: "" });
    onAddCounselor(counselorToAdd);
  };

  // Handle image upload for books
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewBook((prevBook) => ({ ...prevBook, image: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Students Section */}
      <div className="students-section">
        <h2>Manage Students</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.role}</td>
                <td>
                  <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-student-form">
          <h3>Add New Student</h3>
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={newStudent.password}
            onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
          />
          <select
            value={newStudent.role}
            onChange={(e) => setNewStudent({ ...newStudent, role: e.target.value })}
          >
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="Counselor">Counselor</option>
          </select>
          <button onClick={handleAddStudent}>Add Student</button>
        </div>
      </div>

      {/* Books Section */}
      <div className="books-section">
        <h2>Add Recommended Book</h2>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {newBook.image && <img src={newBook.image} alt="Book Preview" className="book-preview" />}
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      {/* Counselors Section */}
      <div className="counselors-section">
        <h2>Manage Counselors</h2>
        <ul>
          {counselors.map((counselor) => (
            <li key={counselor.id}>
              {counselor.name} - {counselor.specialization} ({counselor.email})
            </li>
          ))}
        </ul>
        <div className="add-counselor-form">
          <h3>Add New Counselor</h3>
          <input
            type="text"
            placeholder="Name"
            value={newCounselor.name}
            onChange={(e) => setNewCounselor({ ...newCounselor, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Specialization"
            value={newCounselor.specialization}
            onChange={(e) => setNewCounselor({ ...newCounselor, specialization: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newCounselor.email}
            onChange={(e) => setNewCounselor({ ...newCounselor, email: e.target.value })}
          />
          <button onClick={handleAddCounselor}>Add Counselor</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
