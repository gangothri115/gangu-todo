import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {

  // Load tasks from LocalStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (newTask) => {

    if (newTask.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Complete Task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Edit Task
  const editTask = (id) => {

    const updated = prompt("✏ Enter Updated Task");

    if (!updated || updated.trim() === "") return;

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: updated }
          : task
      )
    );
  };

  // Search + Filter
  const filteredTasks = tasks
    .filter((task) =>
      task.text.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) => {

      if (filter === "completed") return task.completed;

      if (filter === "pending") return !task.completed;

      return true;

    });

  return (
    <div className="container">

      <Navbar />

      <div className="todo-container">

        {/* Search Section */}

        <div className="search-container">

          {/* <h3 className="section-title">
            Search Tasks
          </h3> */}

          <input
            className="search"
            type="text"
            placeholder="🔍 Search your task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
            

        </div>

        {/* Add Task Section */}

        <div className="add-section">

          {/* <h3 className="section-title">
            ➕ Add New Task
          </h3> */}

          <TodoForm addTask={addTask} />

        </div>

        {/* Filters */}

        <div className="filters">

          <button
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>

          <button
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>

        </div>

        {/* Todo List */}

        <TodoList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />

      </div>

    </div>
  );
};

export default App;