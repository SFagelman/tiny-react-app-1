import List from "./List";
import Adder from "./Adder";
import { useState } from "react";

export default function TaskProvider() {
  const [tasks, setTasks] = useState([
    { task: "Build app" },
    { task: "Pay mortgage" },
    { task: "Do laundry" },
    { task: "Do dishes" },
  ]);
  return (
    <>
      <Adder setTasks={setTasks} />
      <h3 className="list-title">Here's what you have to do:</h3>
      <List tasks={tasks} />
    </>
  );
}
