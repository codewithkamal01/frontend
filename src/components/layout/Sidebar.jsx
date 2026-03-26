import { NavLink } from "react-router";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "dashboard", path: "/dashboard" },
    {
      name: "Misconfigurations",
      icon: "gpp_maybe",
      path: "/misconfigurations",
    },
    { name: "Scan Cloud", icon: "cloud_sync", path: "/scan-cloud" },
    { name: "Reports", icon: "analytics", path: "/reports" },
    { name: "Logs", icon: "terminal", path: "/logs" },
  ];

  const base =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-['Space_Grotesk'] font-medium tracking-tight";

  const active =
    "bg-gradient-to-r from-[#9BA8FF]/10 to-[#A58CFF]/10 text-[#9BA8FF] border-r-2 border-[#9BA8FF]";

  const inactive = "text-[#A8ABB3] hover:text-[#F1F3FC] hover:bg-[#20262F]";

  return (
    <div className="w-72 h-screen bg-[#0f141a] p-4 border-r border-[#20262F] fixed left-0 top-0 flex flex-col justify-between">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="px-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#9BA8FF] to-[#A58CFF]">
              <span className="material-symbols-outlined text-[#092e61] text-xl">
                shield
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-br from-[#9BA8FF] to-[#A58CFF] bg-clip-text text-transparent font-['Space_Grotesk']">
                AutoCloud Guard
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">
                Active Defense
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Settings */}
      <NavLink
        to="/settings"
        className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      >
        <span className="material-symbols-outlined">settings</span>
        Settings
      </NavLink>
    </div>
  );
}

export default Sidebar;
