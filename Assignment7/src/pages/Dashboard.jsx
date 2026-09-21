function Dashboard({ tasks }) {
  const username =
    localStorage.getItem("taskManagerUsername") || "User";

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Closed"
  ).length;

  return (
    <main className="dashboard">
      <section className="dashboard-hero">
        <p className="eyebrow">
          AUTHENTICATED DASHBOARD
        </p>

        <h1>Welcome, {username}!</h1>

        <p>
          You are successfully logged in to Task Manager.
        </p>
      </section>

      <section className="auth-info">

        <div className="auth-card">
          <span>📋</span>
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="auth-card">
          <span>⏳</span>
          <h3>Pending Tasks</h3>
          <p>{pendingTasks}</p>
        </div>

        <div className="auth-card">
          <span>✓</span>
          <h3>Completed Tasks</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="auth-card">
          <span>🔐</span>
          <h3>Authentication</h3>
          <p>JWT token is active.</p>
        </div>

      </section>
    </main>
  );
}

export default Dashboard;