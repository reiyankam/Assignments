import { Link } from "react-router-dom";

function Tasks({ tasks, deleteTask }) {
  const activeTasks = tasks.filter(
    (task) => task.status !== "Closed"
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(id);
    }
  };

  return (
    <main className="tasks-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">TASK LIST</p>
          <h1>All Tasks</h1>
          <p>View and manage your current tasks.</p>
        </div>

        <Link to="/add-task" className="add-task-btn">
          + Add Task
        </Link>
      </div>

      <section className="task-grid">
        {activeTasks.length === 0 ? (
          <p>No active tasks available.</p>
        ) : (
          activeTasks.map((task) => (
            <article className="task-card" key={task.id}>
              <div className="task-card-top">
                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>

                <span className="status">
                  {task.status}
                </span>
              </div>

              <h2>{task.title}</h2>

              <p>{task.description}</p>

              <div className="task-info">
                <span>📁 {task.category}</span>
                <span>📅 {task.dueDate}</span>
              </div>

              <div className="task-buttons">
                <Link
                  to={`/tasks/${task.id}`}
                  className="details-btn"
                >
                  View Details →
                </Link>

                <button
                  className="delete-task-btn"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default Tasks;