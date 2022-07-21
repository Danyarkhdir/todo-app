import Task from "./Task";
import { FaSadCry } from "react-icons/fa";
export default function Tasks({ onDelete, tasks, onDone, setReminder }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((item) => (
          <Task
            key={item.id}
            task={item}
            onDelete={onDelete}
            onDone={onDone}
            setReminder={setReminder}
          />
        ))
      ) : (
        <h1 className="text-center my-20 text-5xl flex items-center justify-center ">
          No Tasks To Do <FaSadCry color="#ffcc33" className="ml-4" />
        </h1>
      )}
      {}
    </div>
  );
}
