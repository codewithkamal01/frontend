function ProgressCard({ title, progress, desc, color }) {
  return (
    <div className="p-6 rounded-3xl border border-[rgba(68,72,79,0.1)] bg-[rgb(15,20,26)]">
      <h4 className="text-[rgb(168,171,179)] text-xs uppercase tracking-widest mb-4">
        {title}
      </h4>

      <div className="w-full bg-[rgb(32,38,47)] h-1 rounded-full overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: color,
          }}
        />
      </div>

      <p className="text-[rgb(241,243,252)] font-bold text-2xl mt-4">{desc}</p>
    </div>
  );
}

export default ProgressCard;
