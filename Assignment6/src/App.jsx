import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import ProtectedRoute from "./Components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import AddTask from "./pages/AddTask";
import CompletedTasks from "./pages/CompletedTasks";

import "./App.css";

function App() {
  const defaultTasks = [
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Finish the React Router assignment.",
      priority: "High",
      category: "Academic",
      raisedDate: "2026-09-21T10:00",
      dueDate: "2026-09-25",
      status: "Pending",
    },
    {
      id: 2,
      title: "Prepare Presentation",
      description: "Prepare slides for the college presentation.",
      priority: "Medium",
      category: "Academic",
      raisedDate: "2026-09-21T11:00",
      dueDate: "2026-09-28",
      status: "Raised",
    },
    {
      id: 3,
      title: "Buy Study Materials",
      description: "Purchase notebooks and other study materials.",
      priority: "Low",
      category: "Personal",
      raisedDate: "2026-09-21T12:00",
      dueDate: "2026-09-30",
      status: "Pending",
    },
    {
      id: 4,
      title: "Submit College Assignment",
      description: "Submitted the assignment successfully.",
      priority: "High",
      category: "Academic",
      raisedDate: "2026-09-18T10:00",
      dueDate: "2026-09-18",
      status: "Closed",
    },
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("taskManagerTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem(
      "taskManagerTasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now(),
      raisedDate: new Date().toISOString(),
    };

    setTasks((currentTasks) => [
      ...currentTasks,
      taskWithId,
    ]);
  };

  const updateTask = (updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== taskId
      )
    );
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard tasks={tasks} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks/:id"
          element={
            <ProtectedRoute>
              <TaskDetails
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-task"
          element={
            <ProtectedRoute>
              <AddTask addTask={addTask} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/completed"
          element={
            <ProtectedRoute>
              <CompletedTasks tasks={tasks} />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;