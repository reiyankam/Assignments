import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ addTask }) {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "Academic",
    dueDate: "",
    status: "Raised",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate) {
      alert("Please fill in all required fields.");
      return;
    }

    addTask(task);

    alert("Task added successfully!");

    navigate("/tasks");
  };

  return (
    <main className="add-task-page">
      <div className="page-heading">
        <p className="eyebrow">NEW TASK</p>
        <h1>Add Task</h1>
        <p>Create a new academic or personal task.</p>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <label>
          Task Header
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />
        </label>

        <label>
          Task Description
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Enter task description"
            rows="4"
          />
        </label>

        <label>
          Priority
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>

        <label>
          Category
          <select
            name="category"
            value={task.category}
            onChange={handleChange}
          >
            <option>Academic</option>
            <option>Personal</option>
          </select>
        </label>

        <label>
          Raised Date & Time
          <input
            type="text"
            value={new Date().toLocaleString()}
            readOnly
          />
        </label>

        <label>
          Due Date
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Status
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option>Raised</option>
            <option>Pending</option>
            <option>Closed</option>
          </select>
        </label>

        <button type="submit" className="submit-task-btn">
          Add Task
        </button>
      </form>
    </main>
  );
}

export default AddTask;