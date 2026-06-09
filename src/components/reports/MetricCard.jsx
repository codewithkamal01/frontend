import { TrendingUp, ShieldAlert, ShieldCheck, Database } from "lucide-react";

const typeStyles = {
  success: {
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },

  danger: {
    icon: ShieldAlert,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },

  info: {
    icon: Database,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
};

export default function MetricCard({ title, value, trend, type = "info" }) {
  const style = typeStyles[type];
  const Icon = style.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]">
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">{value}</h3>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <TrendingUp size={15} className={style.color} />

            <span>{trend}</span>
          </div>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bg}`}
        >
          <Icon size={22} className={style.color} />
        </div>
      </div>
    </div>
  );
}
