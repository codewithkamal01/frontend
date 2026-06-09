const severityStyles = {
  Critical: {
    badge: "bg-red-500/10 text-red-400 border border-red-500/20",
    dot: "bg-red-500",
  },
  High: {
    badge: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    dot: "bg-orange-500",
  },
  Medium: {
    badge: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    dot: "bg-yellow-500",
  },
  Low: {
    badge: "bg-green-500/10 text-green-400 border border-green-500/20",
    dot: "bg-green-500",
  },
};

export default function AlertItem({ severity, title, description, time }) {
  const style = severityStyles[severity] || severityStyles.Low;

  return (
    <div className="border-b border-slate-800 p-5 transition-all duration-300 hover:bg-slate-800/30">
      <div className="mb-3 flex items-start justify-between">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${style.badge}`}
        >
          <span className={`h-2 w-2 rounded-full ${style.dot}`} />
          {severity}
        </div>

        <span className="text-xs text-slate-500">{time}</span>
      </div>

      <h4 className="mb-2 text-sm font-semibold text-white">{title}</h4>

      <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}
