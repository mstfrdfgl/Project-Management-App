import { useState } from "react";
import NewTask from "./NewTask";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  function handleDeleteTask() {
    setTasks((prevValue) => {
      return prevValue.filter((value) => value.id !== tasks.id);
    });
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask setTasks={setTasks} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          this project does not have any tasks yet
        </p>
      )}

      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task, index) => {
          return (
            <li key={index} className="flex justify-between my-4">
              <span>{task}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={handleDeleteTask}
              >
                Clear
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
