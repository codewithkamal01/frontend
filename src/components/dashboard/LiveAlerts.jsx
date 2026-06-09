import { useNavigate } from "react-router-dom";
import { alerts } from "../../Data/dashboardData";
import AlertItem from "./AlertItem";
import { Bell } from "lucide-react";

export default function LiveAlerts() {
  const navigate = useNavigate();

  return (
    <div className="h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 text-indigo-400" />
          <h3 className="text-lg font-semibold text-white">Live Alerts</h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          <span className="text-xs text-slate-400">Live</span>
        </div>
      </div>

      {/* Alert List */}
      <div className="max-h-[500px] overflow-y-auto">
        {alerts.length > 0 ? (
          alerts.map((alert) => <AlertItem key={alert.title} {...alert} />)
        ) : (
          <div className="p-6 text-center text-sm text-slate-400">
            No active alerts at the moment.
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4">
        <button
          type="button"
          onClick={() => navigate("/logs")}
          className="w-full rounded-lg bg-slate-800 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          View All Incidents
        </button>
      </div>
    </div>
  );
}
