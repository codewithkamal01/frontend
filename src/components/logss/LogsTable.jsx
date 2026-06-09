import { AlertCircle, CheckCircle, Info, TrendingUp, Zap } from "lucide-react";

const severityConfig = {
  critical: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
    icon: AlertCircle,
    badge: "bg-red-500/20",
  },
  warning: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    border: "border-yellow-500/20",
    icon: TrendingUp,
    badge: "bg-yellow-500/20",
  },
  success: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    icon: CheckCircle,
    badge: "bg-emerald-500/20",
  },
  info: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    icon: Info,
    badge: "bg-blue-500/20",
  },
};

export default function LogsTable({ logs = [] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900/50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Event
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Type
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              User
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Severity
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {logs.map((log) => {
            const severity = severityConfig[log.severity] || severityConfig.info;
            const Icon = severity.icon;

            return (
              <tr
                key={log.id}
                className="transition hover:bg-slate-800/30"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {log.action}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {log.description}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm capitalize text-slate-300">
                    {log.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-400">{log.user}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${severity.badge} ${severity.text}`}
                  >
                    <Icon size={12} />
                    {log.severity.charAt(0).toUpperCase() +
                      log.severity.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-500">
                    {log.timestamp}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
