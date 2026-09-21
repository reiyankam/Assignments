import { Link } from "react-router-dom";

function CompletedTasks({ tasks }) {
  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  return (
    <main className="completed-page">
      <div className="page-heading">
        <p className="eyebrow">TASK HISTORY</p>

        <h1>Completed Tasks</h1>

        <p>
          Tasks that have been successfully completed.
        </p>
      </div>

      <section className="task-grid">
        {completedTasks.length === 0 ? (
          <p>No completed tasks yet.</p>
        ) : (
          completedTasks.map((task) => (
            <article
              className="task-card completed-card"
              key={task.id}
            >
              <div className="task-card-top">
                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>

                <span className="status closed">
                  ✓ {task.status}
                </span>
              </div>

              <h2>{task.title}</h2>

              <p>{task.description}</p>

              <div className="task-info">
                <span>
                  📁 {task.category}
                </span>

                <span>
                  📅 {task.dueDate}
                </span>
              </div>

              <Link
                to={`/tasks/${task.id}`}
                className="details-btn"
              >
                View Details →
              </Link>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default CompletedTasks;