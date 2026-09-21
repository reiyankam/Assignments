import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("taskManagerToken");
    localStorage.removeItem("taskManagerUsername");
    localStorage.removeItem("rememberUser");

    sessionStorage.removeItem("taskManagerToken");
    sessionStorage.removeItem("taskManagerUsername");

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
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/tasks">
          Tasks
        </NavLink>

        <NavLink to="/add-task">
          Add Task
        </NavLink>

        <NavLink to="/completed">
          Completed
        </NavLink>
      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;