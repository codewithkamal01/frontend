import SeverityFilter from "./SeverityFilter";

function MisconfigHeader({
  provider,
  setProvider,
  severity,
  setSeverity,
  onRescan,
}) {
  const providers = [{ name: "AWS" }, { name: "Azure" }, { name: "GCP" }];
  const providerBtn =
    "flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer transition-all cursor-pointer";

  const getProviderStyle = (name) =>
    `${providerBtn} ${
      provider === name
        ? "px-4 py-2 rounded-lg text-xs font-bold font-['Inter'] bg-[rgb(32,38,47)] text-[rgb(155,168,255)]"
        : "px-4 py-2 rounded-lg text-xs font-bold font-['Inter'] text-[rgb(168,171,179)] hover:text-[rgb(241,243,252)]"
    }`;

  return (
    <div className="px-5 max-w-[1600px] mx-auto">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tight text-[rgb(241,243,252)] font-['Space_Grotesk']">
            Misconfigurations
          </h2>
          <p className="text-[rgb(168,171,179)] font-['Manrope']">
            Security vulnerabilities detected across your multi-cloud
            infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {/* Provider Filter */}
          <div className="bg-[rgb(21,26,33)] rounded-xl p-1 flex">
            {providers.map((item) => (
              <button
                key={item.name}
                onClick={() => setProvider(item.name)}
                className={getProviderStyle(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* Severity Filter */}
          <SeverityFilter severity={severity} setSeverity={setSeverity} />
          <button
            onClick={onRescan}
            className="px-6 py-2 rounded-xl cursor-pointer text-sm font-bold text-black flex items-center gap-2"
            style={{
              background:
                "linear-gradient(135deg, rgb(155,168,255), rgb(165,140,255))",
            }}
          >
            <span className="material-symbols-outlined text-sm">refresh</span>
            Rescan Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MisconfigHeader;
