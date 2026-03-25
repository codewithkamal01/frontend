import { Bell, Search } from "lucide-react";
import { useLocation } from "react-router";

function Navbar() {
  const location = useLocation();

  const placeholders = {
    "/dashboard": "Search infrastructure, alerts...",
    "/misconfigurations": "Search resources, issues or cloud accounts...",
    "/scan-cloud": "Search scans...",
    "/reports": "Search reports, assests or vulnerabilities...",
    "/logs": "Search logs...",
    "/settings": "Search settings...",
  };

  const placeholder = placeholders[location.pathname] || "Search...";

  return (
    <div className="bg-[#0f141a] w-full h-14 flex items-center justify-between px-6 ">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={15}
        />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-[#000000] text-gray-300 pl-9 py-1 text-sm rounded-lg w-96 outline-none"
        />
      </div>

      <Bell className="text-gray-300 cursor-pointer" />
    </div>
  );
}

export default Navbar;
