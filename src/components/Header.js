import Button from "./Button";
export default function Header({ title, onAdd, showBtn }) {
  return (
    <div className="flex items-center justify-between border-t-4 rounded-t-xl border-b-4 border-sky-800 rounded-b-3xl p-4 bg-black">
      <h1 className="text-3xl  font-serif font-extrabold text-white">
        {title}
      </h1>
      <Button
        text={showBtn ? "Close" : "Add"}
        color={showBtn ? "bg-red-600" : "bg-green-600"}
        showIcon={showBtn ? false : true}
        onClick={onAdd}
      />
    </div>
  );
}

Header.defaultProps = { title: "My App" };
