import React, { useState } from "react";

const TodoForm = ({ addTask }) => {

  const [input, setInput] = useState("");

  const handleSubmit = () => {

    addTask(input);

    setInput("");
  };

  return (

    <div className="todo-form">

      <input
        type="text"
        placeholder="Enter your task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Task
      </button>

    </div>

  );
};

export default TodoForm;