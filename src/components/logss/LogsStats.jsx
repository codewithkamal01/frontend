import { AlertCircle, Activity, TrendingUp, CheckCircle } from "lucide-react";

const statCards = [
  {
    title: "Total Events",
    value: "2,847",
    icon: Activity,
    color: "bg-indigo-500/10 text-indigo-400",
    trend: "+128 today",
  },
  {
    title: "Critical Alerts",
    value: "8",
    icon: AlertCircle,
    color: "bg-red-500/10 text-red-400",
    trend: "3 unresolved",
  },
  {
    title: "Auto-Fixes Applied",
    value: "156",
    icon: CheckCircle,
    color: "bg-emerald-500/10 text-emerald-400",
    trend: "+12 this week",
  },
  {
    title: "Avg Response Time",
    value: "2.3m",
    icon: TrendingUp,
    color: "bg-blue-500/10 text-blue-400",
    trend: "57% faster",
  },
];

export default function LogsStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]"
          >
            {/* Background Glow */}
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.color}`}>
                  <Icon size={20} />
                </div>
              </div>

              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {card.title}
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white">{card.value}</h3>
              <p className="mt-2 text-xs text-slate-400">{card.trend}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
