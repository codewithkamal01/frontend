import { ArrowUpRight } from "lucide-react";

const badgeStyles = {
  stable: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

  warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",

  danger: "bg-red-500/10 text-red-400 border border-red-500/20",

  success: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
};

export default function StatsCard({
  title,
  value,
  badge,
  icon,
  subtitle,
  trend,
  iconBg = "bg-indigo-500/10",
  iconColor = "text-indigo-400",
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div className="relative mb-6 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}
        >
          <span className={`material-symbols-outlined ${iconColor}`}>
            {icon}
          </span>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider ${
            badgeStyles[badge?.toLowerCase()] || "bg-slate-800 text-slate-300"
          }`}
        >
          {badge}
        </span>
      </div>

      {/* Content */}
      <div>
        <p className="text-sm font-medium text-slate-400">{title}</p>

        <div className="mt-2 flex items-center gap-3">
          <h3 className="text-4xl font-bold tracking-tight text-white">
            {value}
          </h3>

          {trend && (
            <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">
              <ArrowUpRight size={14} />
              {trend}
            </div>
          )}
        </div>

        <p className="mt-4 text-sm text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}
