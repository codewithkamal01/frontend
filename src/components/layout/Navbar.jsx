import { Bell, Search } from "lucide-react";
import { useLocation } from "react-router";

function Navbar({ search, setSearch, setSidebarOpen }) {
  const location = useLocation();

  const placeholders = {
    "/dashboard": "Search infrastructure, alerts...",
    "/misconfigurations": "Search resources, issues or cloud accounts...",
    "/scan-cloud": "Search scans...",
    "/reports": "Search reports, assets or vulnerabilities...",
    "/logs": "Search logs...",
    "/settings": "Search settings...",
  };

  const placeholder = placeholders[location.pathname] || "Search...";

  return (
    <div className="fixed top-0 left-0 right-0 lg:left-72 h-14 bg-[#0f141a]/60 backdrop-blur-xl border-b border-[#20262F] flex items-center justify-between px-4 sm:px-6 z-40">
      <div className="flex items-center gap-3 w-full max-w-4xl">
        <button
          type="button"
          className="lg:hidden text-[#A8ABB3] hover:text-[#F1F3FC]"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A8ABB3]"
            size={16}
          />
          <input
            type="text"
            placeholder={placeholder}
            className="bg-[#20262F]/70 text-[#F1F3FC] pl-9 py-1.5 text-sm rounded-lg w-full outline-none focus:ring-1 focus:ring-[#9BA8FF]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Bell className="text-[#A8ABB3] cursor-pointer hover:text-[#F1F3FC]" />
    </div>
  );
}

export default Navbar;