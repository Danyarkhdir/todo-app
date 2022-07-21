import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAccessAlarm } from "react-icons/md";

export default function Task({ task, onDelete, onDone, setReminder }) {
  return (
    <div className="pt-4 px-6 flex">
      <div className="flex items-center">
        <input
          onChange={() => onDone((task.done = !task.done))}
          className="w-6 h-6"
          type="checkbox"
        />
      </div>
      <div
        className={`w-screen ml-4   py-2 px-4 border-2 border-black rounded-xl bg-gray-300  ${
          task.done ? "line-through" : "hover:bg-gray-400"
        } `}
        onDoubleClick={() => setReminder(task.id)}
      >
        <h2
          className="flex justify-between items-center text-xl font-bold"
          key={task.id}
        >
          {task.title}
          <AiFillDelete
            onClick={() => onDelete(task.id)}
            size="30px"
            cursor="pointer"
            color="#ff4444"
          />
        </h2>
        <p className="flex justify-between items-center font-bold h-8">
          {task.date}
          {!task.done && task.reminder && (
            <MdOutlineAccessAlarm size="30px" color="black" />
          )}
        </p>
      </div>
    </div>
  );
}
