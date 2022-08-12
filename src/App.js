import "./App.css";
import PageHeader from "./components/PageHeader";
import ListHeader from "./components/ListHeader";
import TaskProvider from "./components/TaskProvider";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <ListHeader />
      <TaskProvider />
    </div>
  );
}

export default App;
