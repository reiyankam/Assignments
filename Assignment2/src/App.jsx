import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StudentList from "./Components/StudentList";
import "./App.css";

function App() {
  const [sortHigh, setSortHigh] = useState(true);

  const students = [
    {
      name: "Reiyanka Mondal",
      roll: "BCA101",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 8.6,
      photo: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Ananya Das",
      roll: "BCA102",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/150?img=44"
    },
    {
      name: "Priya Sharma",
      roll: "BCA103",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 8.1,
      photo: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Riya Sen",
      roll: "BCA104",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 9.5,
      photo: "https://i.pravatar.cc/150?img=49"
    },
    {
      name: "Soham Roy",
      roll: "BCA105",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 7.9,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Aditi Ghosh",
      roll: "BCA106",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 8.8,
      photo: "https://i.pravatar.cc/150?img=45"
    }
  ];

  const sortedStudents = [...students].sort((a, b) =>
    sortHigh ? b.cgpa - a.cgpa : a.cgpa - b.cgpa
  );

  return (
    <>
      <Header />

      <main id="home">
        <section className="hero">
          <p className="tag">STUDENT INFORMATION PORTAL</p>
          <h1>Meet Our Students</h1>
          <p>
            A simple student management portal built using
            React Props and reusable components.
          </p>

          <button onClick={() => setSortHigh(!sortHigh)}>
            Sort CGPA {sortHigh ? "High → Low" : "Low → High"}
          </button>
        </section>

        <section id="students" className="students-section">
          <h2>Student Directory</h2>
          <p className="section-text">
            Student information passed through reusable React components.
          </p>

          <StudentList students={sortedStudents} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;