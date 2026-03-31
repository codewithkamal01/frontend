import RecentScanRow from "./RecentScanRow";

function RecentScansTable({ scans, loading }) {
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-400">Loading scans...</div>
    );
  }

  if (!scans.length) {
    return (
      <div className="p-10 text-center text-gray-400">No scans found.</div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-white">Recent Scans</h3>
        <button className="text-[rgb(155,168,255)] text-sm">
          View History →
        </button>
      </div>

      <div className="bg-[rgb(15,20,26)] rounded-3xl overflow-hidden border border-[rgba(68,72,79,0.1)]">
        <table className="w-full">
          <thead className="bg-[rgb(21,26,33)] text-[rgb(168,171,179)] text-xs">
            <tr>
              <th className="px-8 py-5">Date & Time</th>
              <th className="px-8 py-5">Provider</th>
              <th className="px-8 py-5">Issues</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {scans.map((scan) => (
              <RecentScanRow key={scan.id} scan={scan} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentScansTable;
