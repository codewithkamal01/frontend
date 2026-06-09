import ReportItem from "./ReportItem";
import { reports } from "../../Data/reportsData";

export default function ReportsList() {
  const handleViewArchive = () => {
    // TODO: Implement archive view
    alert("Archive view coming soon!");
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">Recent Reports</h3>

          <p className="mt-1 text-sm text-slate-400">
            Security audits, compliance scans and threat assessments.
          </p>
        </div>

        <button
          type="button"
          onClick={handleViewArchive}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          View Archive
        </button>
      </div>

      {/* Report List */}
      <div className="space-y-4">
        {reports.length > 0 ? (
          reports.map((report) => (
            <ReportItem key={report.id} {...report} />
          ))
        ) : (
          <div className="text-center py-8 text-slate-400">
            No reports available yet.
          </div>
        )}
      </div>
    </div>
  );
}
