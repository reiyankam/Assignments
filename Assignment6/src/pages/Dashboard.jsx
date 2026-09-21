function Dashboard({ tasks }) {
  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High" && task.status !== "Closed"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  return (
    <main className="dashboard">
      <section className="dashboard-hero">
        <p className="eyebrow">TASK MANAGEMENT</p>
        <h1>Welcome to Task Manager</h1>
        <p>
          Organize your academic and personal tasks in one place.
        </p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>📋</span>
          <h3>Total Tasks</h3>
          <strong>{totalTasks}</strong>
        </div>

        <div className="stat-card">
          <span>⏳</span>
          <h3>Pending</h3>
          <strong>{pendingTasks}</strong>
        </div>

        <div className="stat-card">
          <span>🔴</span>
          <h3>High Priority</h3>
          <strong>{highPriority}</strong>
        </div>

        <div className="stat-card">
          <span>✅</span>
          <h3>Completed</h3>
          <strong>{completedTasks}</strong>
        </div>
      </section>

      <section className="dashboard-actions">
        <a href="/tasks">View Tasks</a>
        <a href="/add-task">Add New Task</a>
        <a href="/completed">Completed Tasks</a>
      </section>
    </main>
  );
}

export default Dashboard;