import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
