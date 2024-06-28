import { useRef, useState } from "react";

export default function NewTask({ setTasks }) {
  const [taskInput, setTaskInput] = useState("");
  function handleChange(event) {
    const { value } = event.target;
    setTaskInput(value);
  }
  function handleAddTask() {
    setTasks((prevTask) => [...prevTask, taskInput]);
    setTaskInput("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={taskInput}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-red-500"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}
