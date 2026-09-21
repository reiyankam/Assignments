import { useParams, Link } from "react-router-dom";

function TaskDetails({ tasks, updateTask }) {
  const { id } = useParams();

  const task = tasks.find(
    (item) => item.id === Number(id)
  );

  if (!task) {
    return (
      <main className="details-page">
        <h1>Task Not Found</h1>
        <Link to="/tasks">← Back to Tasks</Link>
      </main>
    );
  }

  const handleStatusChange = (e) => {
    updateTask({
      ...task,
      status: e.target.value,
    });
  };

  return (
    <main className="details-page">
      <Link to="/tasks" className="back-link">
        ← Back to Tasks
      </Link>

      <div className="details-card">
        <p className="eyebrow">TASK DETAILS</p>

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
            <span>Raised Date & Time</span>
            <strong>
              {new Date(task.raisedDate).toLocaleString()}
            </strong>
          </div>

          <div>
            <span>Due Date</span>
            <strong>{task.dueDate}</strong>
          </div>

          <div>
            <span>Task ID</span>
            <strong>#{task.id}</strong>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TaskDetails;