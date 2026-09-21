import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide header on login page
  if (location.pathname === "/login") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("taskManagerLoggedIn");
    navigate("/login");
  };

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

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}

export default Header;