import { useEffect, useState } from "react";

function SecurityScoreCard({ score = 85, onAutoFix, loading}) { 
  const [progress, setProgress] = useState(0);

  const radius = 85;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  useEffect(() => {
    setTimeout(() => {
      setProgress(score);
    }, 200);
  }, [score]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-[rgb(21,26,33)] rounded-4xl p-8 flex flex-col items-center text-center">
      {/* Circle */}
      <div className="relative w-48 h-48 flex items-center justify-center mb-6">
        <svg width="192" height="192" className="-rotate-90">
          {/* Background Circle */}
          <circle
            stroke="rgb(32,38,47)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="96"
            cy="96"
          />

          {/* Progress Circle */}
          <circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx="96"
            cy="96"
            style={{
              transition: "stroke-dashoffset 1s ease",
            }}
          />

          {/* Gradient */}
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#9BA8FF" />
              <stop offset="100%" stopColor="#A58CFF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-bold text-white">{progress}%</span>
          <span className="text-[10px] uppercase text-[rgb(129,236,255)]">
            Security Score
          </span>
        </div>
      </div>

      <h4 className="text-lg font-semibold text-white mb-2">
        Posture Status: Optimized
      </h4>

      <p className="text-sm text-[rgb(168,171,179)]">
        Your AWS environment is performing above average.
      </p>

      <button onClick={onAutoFix} disabled={loading} className="mt-8 w-full py-3 border border-[rgba(68,72,79,0.2)] rounded-xl text-[rgb(155,168,255)] cursor-pointer hover:bg-[rgb(32,38,47)] ">
        {loading ? "Fixing Issues..." : "Auto Fix All Issues"}
      </button>
    </div>
  );
}

export default SecurityScoreCard;
