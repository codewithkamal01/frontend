import { ShieldCheck, TrendingUp } from "lucide-react";

export default function SecurityScoreCard({ score = 85 }) {
  const radius = 88;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (score / 100) * circumference;

  const getStatus = () => {
    if (score >= 90)
      return {
        label: "Excellent",
        color: "text-emerald-400",
      };

    if (score >= 75)
      return {
        label: "Robust",
        color: "text-indigo-400",
      };

    if (score >= 60)
      return {
        label: "Moderate",
        color: "text-amber-400",
      };

    return {
      label: "At Risk",
      color: "text-red-400",
    };
  };

  const status = getStatus();

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_50px_rgba(99,102,241,0.08)]">
      {/* Glow */}
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Security Posture</h3>

          <p className="mt-1 text-sm text-slate-400">
            Overall cloud security health
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10">
          <ShieldCheck className="h-5 w-5 text-indigo-400" />
        </div>
      </div>

      {/* Score Ring */}
      <div className="relative mx-auto flex h-60 w-60 items-center justify-center">
        <svg className="-rotate-90" width="240" height="240">
          {/* Outer Glow Ring */}
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#0f172a"
            strokeWidth="16"
          />

          {/* Progress */}
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="url(#securityGradient)"
            strokeWidth="16"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 1s ease",
            }}
          />

          <defs>
            <linearGradient
              id="securityGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Content */}
        <div className="absolute text-center">
          <h2 className="text-6xl font-bold text-white">
            {score}
            <span className="text-2xl text-indigo-400">%</span>
          </h2>

          <p className={`mt-2 text-sm font-medium ${status.color}`}>
            {status.label}
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-6 rounded-2xl bg-indigo-500/5 p-4">
        <p className="text-sm text-slate-400">
          Your infrastructure scores{" "}
          <span className="font-semibold text-indigo-400">13% above</span> the
          average cloud security benchmark.
        </p>
      </div>
    </div>
  );
}
