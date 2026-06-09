import { FilePlus2 } from "lucide-react";

export default function ReportsHeader() {
  const handleGenerateReport = () => {
    // TODO: Implement report generation modal/flow
    alert("Report generation feature coming soon!");
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-white">Security Reports</h1>

        <p className="mt-2 max-w-2xl text-slate-400">
          Security audits, compliance reports and infrastructure analytics across your multi-cloud environments.
        </p>
      </div>

      <button
        type="button"
        onClick={handleGenerateReport}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 font-semibold text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <FilePlus2 size={18} />
        Generate Report
      </button>
    </div>
  );
}
