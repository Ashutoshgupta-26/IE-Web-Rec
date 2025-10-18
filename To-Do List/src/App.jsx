import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const updated = [...tasks];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setTasks(updated);
  };

  const moveDown = (index) => {
    if (index === tasks.length - 1) return;
    const updated = [...tasks];
    [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setTasks(updated);
  };

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <div className="buttons">
              <button onClick={() => deleteTask(index)}>❌</button>
              <button onClick={() => moveUp(index)}>⬆️</button>
              <button onClick={() => moveDown(index)}>⬇️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
