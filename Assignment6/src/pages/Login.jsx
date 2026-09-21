import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("taskManagerLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Task Manager</h1>
        <p>Login to manage your tasks</p>

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;