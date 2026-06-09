import { useState, useEffect } from "react";
import LogsHeader from "../components/logs/LogsHeader";
import LogsStats from "../components/logs/LogsStats";
import LogsTable from "../components/logs/LogsTable";
import ActivityTimeline from "../components/logs/ActivityTimeline";
import { activityLogs } from "../Data/logsData";
import { useOutletContext } from "react-router-dom";

function Logs() {
  const { search } = useOutletContext();
  const [filteredLogs, setFilteredLogs] = useState(activityLogs);
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'timeline'

  useEffect(() => {
    if (!search) {
      setFilteredLogs(activityLogs);
      return;
    }

    const s = search.toLowerCase();
    const filtered = activityLogs.filter(
      (log) =>
        log.action.toLowerCase().includes(s) ||
        log.description.toLowerCase().includes(s) ||
        log.user.toLowerCase().includes(s) ||
        log.type.toLowerCase().includes(s)
    );
    setFilteredLogs(filtered);
  }, [search]);

  return (
    <div className="bg-[#0A0E14] min-h-screen">
      <div className="max-w-screen-2xl mx-auto space-y-10 p-8">
        {/* Header */}
        <LogsHeader />

        {/* Stats */}
        <LogsStats />

        {/* View Toggle & Content */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Activity Log</h2>

            <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/30 p-1">
              <button
                onClick={() => setViewMode("table")}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  viewMode === "table"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Table View
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  viewMode === "timeline"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Timeline View
              </button>
            </div>
          </div>

          {/* Content */}
          {filteredLogs.length > 0 ? (
            <>
              {viewMode === "table" ? (
                <LogsTable logs={filteredLogs} />
              ) : (
                <ActivityTimeline activities={filteredLogs} />
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-12 text-center backdrop-blur-sm">
              <p className="text-slate-400">
                No logs found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Logs;