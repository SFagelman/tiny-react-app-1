import { useState } from "react";

export default function Adder({ setTasks }) {
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((currTasks) => {
      return [...currTasks, { task: taskInput }];
    });

    setTaskInput("");
  };

  return (
    <section className="adder">
      <p className="task-instruction">Add your new task below:</p>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="task-input">
          New Task:
        </label>
        <input
          className="input-box"
          onChange={handleChange}
          id="task-input"
          type="text"
          value={taskInput}
        />
        <button className="add-button">Add</button>
      </form>
    </section>
  );
}
