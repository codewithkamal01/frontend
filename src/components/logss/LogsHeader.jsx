    import { Filter } from "lucide-react";

export default function LogsHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-white">Activity Logs</h1>
        <p className="mt-2 text-slate-400">
          Real-time monitoring of security events, changes, and system activities.
        </p>
      </div>

      <button
        type="button"
        className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 font-semibold text-slate-300 transition hover:border-indigo-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <Filter size={18} />
        Filter Events
      </button>
    </div>
  );
}
