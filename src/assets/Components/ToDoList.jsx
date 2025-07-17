// components/TodoList.jsx
import React from "react";

const TodoList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className="space-y-2 w-full">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-white p-3 rounded shadow"
        >
          <span
            onClick={() => onToggle(task.id)}
            className={`flex-1 cursor-pointer ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700 transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
