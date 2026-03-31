import CriticalCard from "./CriticalCard";
import ProgressCard from "./ProgressCard";

function MisconfigStats({ tableData }) {
  if (!tableData) return null;

  const total = tableData.length || 1;

  const critical = tableData.filter((item) => item.severity === "High").length;
  const medium = tableData.filter((item) => item.severity === "Med").length;
  const low = tableData.filter((item) => item.severity === "Low").length;

  const stats = [
    {
      title: "S3 Security",
      progress: Math.round(((total - critical) / total) * 100),
      desc: "Protected",
      color: "linear-gradient(135deg, rgb(155,168,255), rgb(165,140,255))",
    },
    {
      title: "IAM Compliance",
      progress: Math.round(((total - medium) / total) * 100),
      desc: "Verified",
      color: "rgb(129,236,255)",
    },
  ];

  const autoRemediation = {
    enabled: true,
    regions: "4/6",
  };
  return (
    <div className="grid grid-cols-12 gap-6 mb-10">
      {/* Critical Misconfigurations Card */}
      <div className="col-span-12 lg:col-span-4">
        <CriticalCard total={critical} />
      </div>

      {/* Right Side Cards */}
      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <ProgressCard
            key={item.title}
            title={item.title}
            progress={item.progress}
            desc={`${item.progress}% ${item.desc}`}
            color={item.color}
          />
        ))}

        {/* Auto Remediation */}
        <div className="p-6 rounded-3xl border border-[rgba(68,72,79,0.1)] bg-[rgb(15,20,26)] relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-[rgb(168,171,179)] text-xs uppercase tracking-widest mb-4">
              Auto-Remediation
            </h4>
            <p className="text-[rgb(241,243,252)] font-bold text-2xl">
              {autoRemediation.enabled ? "Enabled" : "Disabled"}
            </p>
            <p className="text-[10px] mt-2 text-[rgb(129,236,255)]">
              Active in {autoRemediation.regions} regions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisconfigStats;
