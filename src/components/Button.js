import { MdAddTask } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Button({ text, color, onClick, showIcon }) {
  return (
    <button
      className={`${color}  text-white font-bold py-2 px-4 rounded-xl inline-flex items-center`}
      onClick={onClick}
    >
      {showIcon === false ? <AiFillCloseCircle /> : <MdAddTask />}
      <span className="ml-2">{text}</span>
    </button>
  );
}
