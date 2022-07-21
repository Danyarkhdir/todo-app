import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "To Do App",
      date: "2015-01-01T00:00:00.000Z",
      reminder: false,
      done: false,
    },
    {
      id: 2,
      title: "To Do App",
      date: "2015-01-01T00:00:00.000Z",
      reminder: false,
      done: false,
    },
    {
      id: 3,
      title: "To Do App",
      date: "2015-01-01T00:00:00.000Z",
      reminder: false,
      done: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const onDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const setReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="max-w-2xl my-8 mx-auto min-h-screen p-8 border-2 border-sky-800 rounded-3xl">
      <Header
        title="To Do App"
        onAdd={() => setShowAddTask(!showAddTask)}
        showBtn={showAddTask}
      />
      <Navbar />
      <Tasks
        onDelete={onDelete}
        tasks={tasks}
        onDone={onDone}
        setReminder={setReminder}
      />
    </div>
  );
}

export default App;
