import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div
        className="logo"
        onClick={() => navigate("/dashboard")}
      >
        Task<span>Manager</span>
      </div>

      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/add-task">Add Task</NavLink>
        <NavLink to="/completed">Completed</NavLink>
      </nav>
    </header>
  );
}

export default Header;
