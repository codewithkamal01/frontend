import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

function MainLayout() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <Navbar
        search={search}
        setSearch={setSearch}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Page Content */}
      <div className="lg:ml-72 pt-20 lg:pt-20 pt-16 p-4 sm:p-6 bg-[#0A0E14] min-h-screen">
        <Outlet context={{ search }} />
      </div>
    </div>
  );
}

export default MainLayout;
