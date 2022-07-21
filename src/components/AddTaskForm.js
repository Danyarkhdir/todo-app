import { useState } from "react";
export default function AddTaskForm({ onAddTask, onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a task");
      return;
    }
    onAdd({ title, date, reminder });
    setTitle("");
    setDate("");
    setReminder(false);
    alert("Task Added Successfully");
  };
  return (
    onAddTask && (
      <form onSubmit={onSubmit} className="p-4">
        <div className="flex  flex-col  p-2">
          <label className="text-xl">Task</label>
          <input
            type="text"
            placeholder="Description..."
            value={title}
            className="border-2 border-black p-2 rounded-md mt-1"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex  flex-col  p-2">
          <label className="text-xl">Date</label>
          <input
            type="date"
            placeholder="Add Task"
            className="border-2 border-black p-2 rounded-md mt-1"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center p-2">
          <label className="text-xl font-sans font-bold">Set Reminder</label>
          <input
            type="checkbox"
            placeholder="Add Task"
            className="h-5 w-5 ml-4"
            value={reminder}
            checked={reminder}
            onChange={(e) => {
              setReminder(e.currentTarget.checked);
            }}
          />
        </div>
        <input
          className="block my-6 mx-auto bg-sky-900 text-white w-11/12 p-2 rounded-lg"
          type="submit"
          value="Save Task"
        />
      </form>
    )
  );
}
