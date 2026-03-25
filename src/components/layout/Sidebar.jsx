import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { name: "Misconfigurations", icon: "gpp_maybe", path: "/misconfigurations",},
    { name: "Scan Cloud", icon: "cloud_sync", path: "/scan-cloud" },
    { name: "Reports", icon: "analytics", path: "/reports" },
    { name: "Logs", icon: "terminal", path: "/logs" },
  ];

  const base =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-['Space_Grotesk'] font-medium tracking-tight";

  return (
    <div
      className="w-72 h-screen bg-[#0f141a] p-4"
    >
      <div class="px-4 mb-10">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg flex signal-gradient items-center justify-center">
            <span className="material-symbols-outlined material-filled text-[#001c8e] text-xl">
              shield
            </span>
          </div>
          <div>
            <h1 class="text-xl font-bold bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent font-['Space_Grotesk'] tracking-tight">
              AutoCloud Guard
            </h1>
            <p class="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Active Defense
            </p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-2 ">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              `${base} ${
                isActive
                  ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border-r-2 border-blue-500"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-50">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${base} ${isActive ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border-r-2 border-blue-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`
          }
        >
          <span className="material-symbols-outlined">settings</span>
          Settings
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
