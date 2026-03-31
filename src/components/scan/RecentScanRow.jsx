function RecentScanRow({ scan }) {
  const providerIcon = {
    AWS: "cloud",
    Azure: "layers",
    GCP: "filter_drama",
  };

  const statusColor = {
    Completed: "text-green-400",
    Failed: "text-red-400",
    Running: "text-yellow-400",
  };

  return (
    <tr className="border-t border-[rgba(68,72,79,0.1)] hover:bg-[rgb(21,26,33)] transition">
      {/* Date */}
      <td className="px-8 py-5 text-[rgb(241,243,252)]">{scan.date}</td>

      {/* Provider */}
      <td className="px-8 py-5">
        <div className="flex items-center gap-2 text-[rgb(168,171,179)]">
          <span className="material-symbols-outlined text-[rgb(155,168,255)] text-sm">
            {providerIcon[scan.provider]}
          </span>
          {scan.provider} {scan.environment}
        </div>
      </td>

      {/* Issues */}
      <td className="px-8 py-5">
        {scan.issues === 0 ? (
          <span className="px-2 py-1 text-[10px] rounded bg-[rgb(32,38,47)] text-[rgb(168,171,179)]">
            0 Issues
          </span>
        ) : (
          <span className="px-2 py-1 text-[10px] rounded bg-[rgba(255,0,0,0.15)] text-red-400">
            {scan.issues} Critical
          </span>
        )}
      </td>

      {/* Status */}
      <td className="px-8 py-5">
        <div className={`flex items-center gap-2 ${statusColor[scan.status]}`}>
          <span className="w-2 h-2 rounded-full bg-current"></span>
          <span className="text-xs">{scan.status}</span>
        </div>
      </td>

      {/* Actions */}
      <td className="px-8 py-5">
        <button className="text-[rgb(155,168,255)]">
          <span className="material-symbols-outlined">
            {scan.status === "Failed" ? "refresh" : "visibility"}
          </span>
        </button>
      </td>
    </tr>
  );
}

export default RecentScanRow;
