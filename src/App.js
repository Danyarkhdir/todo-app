import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import { Routes, Route } from "react-router-dom";
import AddTaskForm from "./components/AddTaskForm";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const onAddTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task, done: false };
    setTasks([...tasks, newTask]);
  };
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
    <div className="lg:max-w-2xl md:max-w-lg sm:max-w-md xs:max-w-sm my-8   max-w-sm p-8 mx-auto min-h-screen  border-2 border-sky-800 rounded-3xl">
      <Header
        title="To Do App"
        onAdd={() => setShowAddTask(!showAddTask)}
        showBtn={showAddTask}
      />
      <AddTaskForm onAddTask={showAddTask} onAdd={onAddTask} />

      {!showAddTask && (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Tasks
                    onDelete={onDelete}
                    tasks={tasks}
                    onDone={onDone}
                    setReminder={setReminder}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
