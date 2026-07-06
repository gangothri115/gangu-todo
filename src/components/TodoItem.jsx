import React from "react";

const TodoItem = ({
  task,
  deleteTask,
  toggleComplete,
  editTask,
}) => {

  return (

    <div className="todo-item">

      <p
        className={
          task.completed
            ? "completed"
            : ""
        }
      >
        {task.text}
      </p>

      <div>

        <button
          onClick={() => toggleComplete(task.id)}
        >
          ✅
        </button>

        <button
          onClick={() => editTask(task.id)}
        >
          📝
        </button>

        <button
          onClick={() => deleteTask(task.id)}
        >
          🗑
        </button>

      </div>

    </div>

  );

};

export default TodoItem;