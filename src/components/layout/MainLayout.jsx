import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

function MainLayout() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Sidebar />
      <Navbar search={search} setSearch={setSearch} />

      {/* Page Content */}
      <div className="ml-72 pt-20 p-6 bg-[#0A0E14] min-h-screen">
        <Outlet context={{ search }} />
      </div>
    </div>
  );
}

export default MainLayout;
