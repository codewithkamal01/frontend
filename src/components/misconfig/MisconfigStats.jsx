import CriticalCard from "./CriticalCard";
import ProgressCard from "./ProgressCard";

function MisconfigStats() {
  return (
    <div className="grid grid-cols-12 gap-6 mb-10">
      
      {/* Critical Misconfigurations Card */}
      <div className="col-span-12 lg:col-span-4">
        <CriticalCard />
      </div>

      {/* Right Side Cards */}
      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProgressCard />

        {/* Auto Remediation */}
        <div className="p-6 rounded-3xl border border-[rgba(68,72,79,0.1)] bg-[rgb(15,20,26)] relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-[rgb(168,171,179)] text-xs uppercase tracking-widest mb-4">
              Auto-Remediation
            </h4>
            <p className="text-[rgb(241,243,252)] font-bold text-2xl">
              Enabled
            </p>
            <p className="text-[10px] mt-2 text-[rgb(129,236,255)]">
              Active in 4/6 regions
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MisconfigStats;