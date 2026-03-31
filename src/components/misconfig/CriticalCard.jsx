function CriticalCard({total}) {
  return (
    <div className="col-span-12 lg:col-span-4 p-6 rounded-3xl flex flex-col justify-between group cursor-default bg-[rgb(21,26,33)] border border-[rgba(68,72,79,0.15)]">
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-2xl bg-[rgba(255,110,132,0.15)] text-[rgb(215,51,87)]">
          <span className="material-symbols-outlined">warning</span>
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-[rgb(215,51,87)]">
          +12% vs last scan
        </span>
      </div>

      <div className="mt-8">
        <h3 className="text-5xl font-bold text-[rgb(241,243,252)] group-hover:text-[rgb(215,51,87)] transition-colors">
          {total}
        </h3>
        <p className="text-[rgb(168,171,179)] text-sm font-medium mt-1">
          Critical Misconfigurations
        </p>
      </div>
    </div>
  );
}

export default CriticalCard;
