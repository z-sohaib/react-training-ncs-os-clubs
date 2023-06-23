import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div className="bg-green-500 flex justify-between px-8 py-4 items-center">
      <p className="text-xl font-bold">LOGO</p>
      <div className="flex gap-x-4 items-center">
        <Link to="/" className={location.pathname === "/" ? "underline" : ""}>
          All Posts
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "underline" : ""}
        >
          About
        </Link>
      </div>
    </div>
  );
}
