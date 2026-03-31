function SeverityFilter({ severity, setSeverity }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-[rgb(21,26,33)] rounded-xl border border-[rgba(68,72,79,0.1)]">
      <span className="text-xs font-['Inter'] text-[rgb(168,171,179)]">
        Severity:
      </span>

      <div className="relative">
        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="appearance-none bg-[rgb(32,38,47)] text-[rgb(241,243,252)] text-xs font-bold px-4 py-2 pr-8 rounded-lg outline-none border border-[rgba(68,72,79,0.2)] hover:border-[rgb(155,168,255)] transition-all cursor-pointer"
        >
          <option value="All">All Criticalities</option>
          <option value="High">High Only</option>
          <option value="Med">Medium & High</option>
          <option value="Low">Low Only</option>
        </select>

        {/* Dropdown Arrow */}
        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[rgb(168,171,179)] pointer-events-none text-sm">
          expand_more
        </span>
      </div>
    </div>
  );
}

export default SeverityFilter;
