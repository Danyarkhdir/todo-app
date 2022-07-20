import { MdAddTask } from "react-icons/md";
export default function Button({ text }) {
  return (
    <button
      className={`bg-green-400  font-bold py-2 px-4 rounded-xl inline-flex items-center`}
    >
      <MdAddTask color="black" />
      <span className="ml-2">{text}</span>
    </button>
  );
}
