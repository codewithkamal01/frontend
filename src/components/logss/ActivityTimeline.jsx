import {
  AlertCircle,
  CheckCircle,
  Info,
  TrendingUp,
  Zap,
  Package,
  FileText,
} from "lucide-react";

const typeConfig = {
  scan: { icon: Package, color: "bg-blue-500/10 text-blue-400" },
  alert: { icon: AlertCircle, color: "bg-red-500/10 text-red-400" },
  policy: { icon: FileText, color: "bg-purple-500/10 text-purple-400" },
  remediation: { icon: CheckCircle, color: "bg-emerald-500/10 text-emerald-400" },
  config: { icon: TrendingUp, color: "bg-yellow-500/10 text-yellow-400" },
  report: { icon: Info, color: "bg-indigo-500/10 text-indigo-400" },
};

export default function ActivityTimeline({ activities = [] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm">
      <h3 className="mb-8 text-xl font-semibold text-white">Activity Timeline</h3>

      <div className="space-y-6">
        {activities.map((activity, index) => {
          const config = typeConfig[activity.type] || typeConfig.info;
          const Icon = config.icon;

          return (
            <div key={activity.id} className="flex gap-4">
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${config.color}`}
                >
                  <Icon size={20} />
                </div>
                {index < activities.length - 1 && (
                  <div className="my-2 h-12 w-0.5 bg-gradient-to-b from-slate-700 to-slate-800" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2 pt-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-white">{activity.action}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {activity.description}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-xs text-slate-500">
                    {activity.timestamp}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-slate-800/50 px-2 py-1 text-xs text-slate-400">
                    {activity.user}
                  </span>
                  <span className="inline-block rounded-full bg-slate-800/50 px-2 py-1 text-xs capitalize text-slate-400">
                    {activity.type}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
