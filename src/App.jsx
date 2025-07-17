// App.jsx
import React, { useState } from "react";
import TodoInput from "./assets/Components/TodoInput";
import TodoList from "./assets/Components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
        <TodoInput onAdd={addTask} />
        <TodoList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
      </div>
    </div>
  );
};

export default App;
