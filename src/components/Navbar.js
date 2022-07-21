import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="flex items-center justify-center mt-6 ">
      <Link
        to="/"
        className={`px-4 py-2 mr-4 text-2xl font-extrabold hover:text-sky-700 ${
          location.pathname === "/"
            ? "border-t-2 border-b-2 border-sky-700 rounded-lg text-sky-700"
            : ""
        }`}
      >
        Tasks
      </Link>
      <Link
        to="/about"
        className={`px-4 py-2 ml-4 text-2xl font-extrabold hover:text-sky-700image.png ${
          location.pathname === "/about"
            ? "border-t-2 border-b-2 border-sky-700 rounded-lg text-sky-700"
            : ""
        }`}
      >
        About
      </Link>
    </div>
  );
}
