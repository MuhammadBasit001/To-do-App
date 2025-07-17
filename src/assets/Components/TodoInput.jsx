// components/TodoInput.jsx
import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div className="flex gap-2 mb-4 w-full">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
