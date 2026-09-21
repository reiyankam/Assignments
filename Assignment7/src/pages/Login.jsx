import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const token = "JWT-" + Date.now();

   if (remember) {
  localStorage.setItem("taskManagerToken", token);
  localStorage.setItem("taskManagerUsername", username);
  localStorage.setItem("rememberUser", "true");
} else {
  sessionStorage.setItem("taskManagerToken", token);
  sessionStorage.setItem("taskManagerUsername", username);
  localStorage.removeItem("taskManagerToken");
  localStorage.removeItem("taskManagerUsername");
  localStorage.removeItem("rememberUser");
}

    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <div className="login-box">
        <p className="eyebrow">AUTHENTICATION</p>

        <h1>Task Manager</h1>

        <p>Login to manage your tasks</p>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              placeholder="Enter username"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter password"
            />
          </label>

          <div className="password-strength">
            <span>Password Strength:</span>

            <strong>
              {password.length === 0
                ? "—"
                : password.length < 6
                ? "Weak"
                : password.length < 10
                ? "Medium"
                : "Strong"}
            </strong>
          </div>

          <label className="remember-option">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) =>
                setRemember(e.target.checked)
              }
            />
            Remember User
          </label>

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;