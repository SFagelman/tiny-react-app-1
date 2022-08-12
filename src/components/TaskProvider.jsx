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
      <List tasks={tasks} />
    </>
  );
}
