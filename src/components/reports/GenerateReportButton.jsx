import { FilePlus2, Sparkles } from "lucide-react";

export default function GenerateReportButton() {
  return (
    <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/40 active:scale-[0.98]">
      <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex items-center gap-3">
        <FilePlus2 size={20} />

        <span>Generate Report</span>

        <Sparkles size={16} className="opacity-70" />
      </div>
    </button>
  );
}
