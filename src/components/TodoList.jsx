import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
}) => {

  if (tasks.length === 0) {

    return <h2 style={{textAlign:"center"}}>

        🎯 No Tasks Yet

        </h2>

  }

  return (

    <div className="todo-list">

      {tasks.map((task) => (

        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />

      ))}  

    </div>

  );

};

export default TodoList;