function ProgressCard() {
  const stats = [
    {
      title: "S3 Security",
      progress: 80,
      desc: "89% Protected",
      color: "linear-gradient(135deg, rgb(155,168,255), rgb(165,140,255))",
    },
    {
      title: "IAM Compliance",
      progress: 33,
      desc: "32% Verified",
      color: "rgb(129,236,255)",
    },
  ];

  return (
    <>
      {stats.map((item) => (
        <div
          key={item.title}
          className="p-6 rounded-3xl border border-[rgba(68,72,79,0.1)] bg-[rgb(15,20,26)]"
        >
          <h4 className="text-[rgb(168,171,179)] text-xs uppercase tracking-widest mb-4">
            {item.title}
          </h4>

          <div className="w-full bg-[rgb(32,38,47)] h-1 rounded-full overflow-hidden">
            <div
              className="h-full"
              style={{
                width: `${item.progress}%`,
                background: item.color,
              }}
            />
          </div>

          <p className="text-[rgb(241,243,252)] font-bold text-2xl mt-4">
            {item.desc}
          </p>
        </div>
      ))}
    </>
  );
}

export default ProgressCard;
