function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div className="employee-card">
      <div className="employee-top">
        <div className="avatar">
          {employee.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3>{employee.name}</h3>
          <p>{employee.employeeId}</p>
        </div>
      </div>

      <div className="employee-info">
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Gender:</strong> {employee.gender}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Local Address:</strong> {employee.localAddress}</p>
        <p><strong>Permanent Address:</strong> {employee.permanentAddress}</p>
      </div>

      <div className="card-buttons">
        <button onClick={() => onEdit(employee)}>Edit</button>
        <button onClick={() => onDelete(employee.id)}>Delete</button>
      </div>
    </div>
  );
}

export default EmployeeCard;