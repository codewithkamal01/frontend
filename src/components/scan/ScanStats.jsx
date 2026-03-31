function ScanStats({ stats }) {
  if (!stats) return null;

  const statItems = [
    {
      label: "Resources Scanned",
      value: stats.resources,
      color: "text-white",
      span: "",
      border: "",
    },
    {
      label: "Issues Found",
      value: stats.issues,
      color: "text-white",
      span: "",
      border: "",
    },
    {
      label: "Critical Vulnerabilities",
      value: stats.critical,
      color: "text-red-400",
      span: "col-span-2",
      border: "border border-red-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {statItems.map((item, index) => (
        <div
          key={index}
          className={`bg-[rgb(21,26,33)] rounded-3xl p-6 ${item.span} ${item.border}`}
        >
          <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
          <p className="text-xs text-gray-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default ScanStats;
