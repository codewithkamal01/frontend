import { Calendar, Download, FileText, CheckCircle, AlertCircle } from "lucide-react";

const severityStyles = {
  Critical: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
    icon: AlertCircle,
  },
  Routine: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    icon: CheckCircle,
  },
  Analysis: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    icon: FileText,
  },
};

export default function ReportItem({ title, date, size, status, severity }) {
  const style = severityStyles[severity] || severityStyles.Analysis;
  const Icon = style.icon;

  const handleDownload = () => {
    // TODO: Implement actual download
    alert(`Downloading: ${title}`);
  };

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] sm:flex-row sm:items-center">
      {/* Icon */}
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bg}`}>
        <FileText className={style.text} size={22} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="font-semibold text-white group-hover:text-indigo-400 transition">
          {title}
        </h4>

        <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </span>

          <span className="flex items-center gap-1">
            <span>{size}</span>
          </span>

          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${style.bg} ${style.text}`}
          >
            <Icon size={12} />
            {severity}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={handleDownload}
        className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <Download size={16} />
        Download
      </button>
    </div>
  );
}
