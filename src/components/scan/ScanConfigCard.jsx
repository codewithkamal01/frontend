function ScanConfigCard({
  provider,
  setProvider,
  accessKey,
  setAccessKey,
  secretKey,
  setSecretKey,
  scanType,
  setScanType,
  startScan,
}) {
  const providers = [
    { name: "AWS", icon: "cloud" },
    { name: "Azure", icon: "layers" },
    { name: "GCP", icon: "filter_drama" },
  ];
  const providerBtn =
    "flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer transition-all cursor-pointer";

  const scanTypeBtn =
    "p-4 rounded-xl flex-1 cursor-pointer transition-all cursor-pointer";

  const getProviderStyle = (name) =>
    `${providerBtn} ${
      provider === name
        ? "border border-[rgb(155,168,255)] bg-[rgba(155,168,255,0.05)] text-[rgb(155,168,255)]"
        : "bg-[rgb(32,38,47)] text-[rgb(168,171,179)] hover:bg-[rgb(40,46,55)]"
    }`;

  return (
    <div className="bg-[rgb(21,26,33)] rounded-4xl p-8 border border-[rgba(68,72,79,0.1)]">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-[rgba(155,168,255,0.1)] flex items-center justify-center">
          <span className="material-symbols-outlined text-[rgb(155,168,255)]">
            settings_suggest
          </span>
        </div>
        <h3 className="text-xl font-semibold text-[rgb(241,243,252)]">
          Configuration
        </h3>
      </div>

      <div className="space-y-6">
        {/* Cloud Provider */}
        <div>
          <label className="text-xs uppercase text-[rgb(168,171,179)] mb-3 block">
            Cloud Provider
          </label>

          <div className="grid grid-cols-3 gap-4">
            {providers.map((item) => (
              <button
                key={item.name}
                onClick={() => setProvider(item.name)}
                className={getProviderStyle(item.name)}
              >
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
                <span className="text-xs font-bold">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Access Keys */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="password"
            placeholder="Access Key ID"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
            className="bg-black rounded-xl py-3 px-4 text-sm text-white"
          />

          <input
            type="password"
            placeholder="Secret Access Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            className="bg-black rounded-xl py-3 px-4 text-sm text-white"
          />
        </div>

        {/* Scan Type */}
        <div className="flex gap-4">
          <div
            onClick={() => setScanType("quick")}
            className={`${scanTypeBtn} ${
              scanType === "quick"
                ? "bg-[rgba(155,168,255,0.1)] border border-[rgb(155,168,255)]"
                : "bg-[rgb(32,38,47)]"
            }`}
          >
            <p className="font-bold text-sm text-white">Quick Scan</p>
            <p className="text-xs text-gray-400">Fast, core checks</p>
          </div>

          <div
            onClick={() => setScanType("full")}
            className={`${scanTypeBtn} ${
              scanType === "full"
                ? "bg-[rgba(155,168,255,0.1)] border border-[rgb(155,168,255)]"
                : "bg-[rgb(32,38,47)]"
            }`}
          >
            <p className="font-bold text-sm text-white">Full Scan</p>
            <p className="text-xs text-gray-400">Deep infrastructure audit</p>
          </div>
        </div>

        {/* Start Scan */}
        <button
          onClick={startScan}
          disabled={!accessKey || !secretKey}
          className="w-full py-5 rounded-2xl font-bold text-lg cursor-pointer disabled:opacity-40"
          style={{
            background:
              "linear-gradient(135deg, rgb(155,168,255), rgb(165,140,255))",
          }}
        >
          Start Scan
        </button>
      </div>
    </div>
  );
}

export default ScanConfigCard;
