import { useEffect, useState } from "react";

function ScanProgressCard({
  status = "idle",
  progress = 0,
  message = "No scan running",
}) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const statusColor = {
    running: "text-[rgb(155,168,255)]",
    completed: "text-green-400",
    failed: "text-red-400",
    idle: "text-gray-400",
  };

  useEffect(() => {
    setAnimatedProgress(0);
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="bg-[rgb(21,26,33)] rounded-4xl p-8 border-l-4 border-[rgb(155,168,255)]">
      <div className="flex justify-between mb-6">
        <div>
          <h3 className={`text-xl font-semibold ${statusColor[status]}`}>
            {status === "running" && "Scan in Progress"}
            {status === "completed" && "Scan Completed"}
            {status === "failed" && "Scan Failed"}
            {status === "idle" && "No Scan Running"}
          </h3>
        </div>

        <span className="px-4 py-1 flex items-center bg-[rgba(155,168,255,0.1)] text-[rgb(155,168,255)] text-xs rounded-full uppercase">
          {status}
        </span>
      </div>

      {/* Message */}
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-400">{message}</span>
        <span className="text-2xl text-[rgb(155,168,255)] font-bold">
          {animatedProgress}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-3 w-full bg-[rgb(32,38,47)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${animatedProgress}%`,
            background:
              "linear-gradient(135deg, rgb(155,168,255), rgb(165,140,255))",
          }}
        />
      </div>
    </div>
  );
}

export default ScanProgressCard;
