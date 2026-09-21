import { useParams, Link, useNavigate } from "react-router-dom";

function TaskDetails({ tasks, updateTask, deleteTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find(
    (item) => item.id === Number(id)
  );

  if (!task) {
    return (
      <main className="details-page">
        <h1>Task Not Found</h1>

        <Link to="/tasks">
          ← Back to Tasks
        </Link>
      </main>
    );
  }

  const handleStatusChange = (e) => {
    updateTask({
      ...task,
      status: e.target.value,
    });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(task.id);
      navigate("/tasks");
    }
  };

  return (
    <main className="details-page">
      <Link
        to="/tasks"
        className="back-link"
      >
        ← Back to Tasks
      </Link>

      <div className="details-card">
        <p className="eyebrow">
          TASK DETAILS
        </p>

        <h1>{task.title}</h1>

        <p className="description">
          {task.description}
        </p>

        <div className="details-grid">
          <div>
            <span>Priority</span>
            <strong>{task.priority}</strong>
          </div>

          <div>
            <span>Category</span>
            <strong>{task.category}</strong>
          </div>

          <div>
            <span>Status</span>

            <select
              value={task.status}
              onChange={handleStatusChange}
            >
              <option>Raised</option>
              <option>Pending</option>
              <option>Closed</option>
            </select>
          </div>

          <div>
            <span>Due Date</span>
            <strong>{task.dueDate}</strong>
          </div>

          <div>
            <span>Raised Date</span>
            <strong>
              {new Date(
                task.raisedDate
              ).toLocaleString()}
            </strong>
          </div>

          <div>
            <span>Task ID</span>
            <strong>#{task.id}</strong>
          </div>
        </div>

        <div className="task-buttons">
          <button
            className="delete-task-btn"
            onClick={handleDelete}
          >
            Delete Task
          </button>
        </div>
      </div>
    </main>
  );
}

export default TaskDetails;