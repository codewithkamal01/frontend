import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-white">Security Overview</h1>

        <p className="mt-2 text-slate-400">
          Real-time surveillance across 14 multi-cloud environments.
        </p>
      </div>

      <button
        type="button"
        onClick={() => navigate("/scan-cloud")}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <Rocket size={18} />
        Scan Cloud Now
      </button>
    </div>
  );
}
