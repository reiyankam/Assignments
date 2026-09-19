function StudentCard({ student }) {
  return (
    <div className="student-card">
      <img src={student.photo} alt={student.name} />

      <div className="student-info">
        <h2>{student.name}</h2>

        <p><strong>Roll No:</strong> {student.roll}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Semester:</strong> {student.semester}</p>

        <div className="cgpa">
          CGPA: {student.cgpa}
        </div>
      </div>
    </div>
  );
}

export default StudentCard;