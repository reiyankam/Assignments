import { useState } from "react";
import Header from "./Components/Header";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";
import Footer from "./Components/Footer";
import "./App.css";

const initialEmployees = [
  {
    id: 1,
    name: "Reiyanka Mondal",
    employeeId: "EMP001",
    department: "IT",
    gender: "Female",
    phone: "9876543210",
    localAddress: "Kolkata",
    permanentAddress: "West Bengal"
  },
  {
    id: 2,
    name: "Ananya Das",
    employeeId: "EMP002",
    department: "HR",
    gender: "Female",
    phone: "9876543211",
    localAddress: "Salt Lake",
    permanentAddress: "Kolkata"
  },
  {
    id: 3,
    name: "Soham Roy",
    employeeId: "EMP003",
    department: "Finance",
    gender: "Male",
    phone: "9876543212",
    localAddress: "Howrah",
    permanentAddress: "West Bengal"
  },
  {
    id: 4,
    name: "Priya Sharma",
    employeeId: "EMP004",
    department: "Marketing",
    gender: "Female",
    phone: "9876543213",
    localAddress: "Dum Dum",
    permanentAddress: "Kolkata"
  }
];

const emptyForm = {
  name: "",
  employeeId: "",
  department: "",
  gender: "",
  phone: "",
  localAddress: "",
  permanentAddress: ""
};

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setEmployees(
        employees.map((employee) =>
          employee.id === editingId
            ? { ...employee, ...formData }
            : employee
        )
      );

      setEditingId(null);
    } else {
      const newEmployee = {
        ...formData,
        id: Date.now()
      };

      setEmployees([...employees, newEmployee]);
    }

    setFormData(emptyForm);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleEdit = (employee) => {
    setFormData(employee);
    setEditingId(employee.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleCancel = () => {
    setFormData(emptyForm);
    setEditingId(null);
  };

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div>
      <Header />

      <main id="home">
        <section className="hero">
          <div>
            <p className="tag">EMPLOYEE MANAGEMENT SYSTEM</p>

            <h1>
              Manage Your
              <span> Employees</span>
            </h1>

            <p className="hero-text">
              Add, edit, search and manage employee information
              from one simple dashboard.
            </p>
          </div>

          <div className="hero-card">
            <span>👥</span>
            <h2>{employees.length}</h2>
            <p>Total Employees</p>
          </div>
        </section>

        <section className="dashboard" id="employees">
          <EmployeeForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            editingId={editingId}
            onCancel={handleCancel}
          />

          <div className="directory-header">
            <div>
              <h2>Employee Directory</h2>
              <p>{filteredEmployees.length} employees displayed</p>
            </div>

            <div className="filters">
              <input
                type="text"
                placeholder="🔍 Search employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="All">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
          </div>

          <EmployeeList
            employees={filteredEmployees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;