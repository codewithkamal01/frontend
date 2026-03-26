function SeverityFilter() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-[rgb(21,26,33)] rounded-xl border border-[rgba(68,72,79,0.1)]">
      <span className="text-xs font-['Inter'] text-[rgb(168,171,179)]">
        Severity:
      </span>
      <select className="bg-transparent border-none text-xs font-bold font-['Inter'] focus:ring-0 cursor-pointer text-[rgb(241,243,252)] p-0 pr-6">
        <option>All Criticalities</option>
        <option>High Only</option>
        <option>Medium & High</option>
        <option>Low Only</option>
      </select>
    </div>
  );
}

export default SeverityFilter;
