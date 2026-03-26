import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div>
      <Sidebar />
      <Navbar />

      {/* Page Content */}
      <div className="ml-72 pt-20 p-6 bg-[#0A0E14] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
