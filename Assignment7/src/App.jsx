import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/Header";
import ProtectedRoute from "./Components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";

import "./App.css";

function App() {
  const defaultTasks = [
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Finish the React authentication assignment.",
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
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Header />
              <Dashboard tasks={tasks} />
            </ProtectedRoute>
          }
        />

        {/* Tasks */}
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Header />
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
              />
            </ProtectedRoute>
          }
        />

        {/* Add Task */}
        <Route
          path="/add-task"
          element={
            <ProtectedRoute>
              <Header />
              <AddTask addTask={addTask} />
            </ProtectedRoute>
          }
        />

        {/* Task Details */}
        <Route
          path="/tasks/:id"
          element={
            <ProtectedRoute>
              <Header />
              <TaskDetails
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            </ProtectedRoute>
          }
        />

        {/* Completed Tasks */}
        <Route
          path="/completed"
          element={
            <ProtectedRoute>
              <Header />
              <CompletedTasks tasks={tasks} />
            </ProtectedRoute>
          }
        />

        {/* Default */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        {/* Invalid URL */}
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;