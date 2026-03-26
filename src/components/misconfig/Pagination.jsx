function Pagination() {
  return (
    <div className="px-8 py-6 bg-[rgba(32,38,47,0.5)] flex items-center justify-between border-t border-[rgba(68,72,79,0.1)]">
      {/* Left Text */}
      <p className="text-xs text-[#A8ABB3] font-medium">
        Showing <span className="text-[#F1F3FC]">5</span> of{" "}
        <span className="text-[#F1F3FC]">42</span> critical issues
      </p>

      {/* Pagination Buttons */}
      <div className="flex gap-2">
        <button className="w-8 h-8 rounded-lg bg-[#20262F] flex items-center justify-center text-[#A8ABB3] hover:bg-gradient-to-br hover:from-[#9BA8FF] hover:to-[#A58CFF] hover:text-[#14141E] transition-all">
          <span className="material-symbols-outlined text-sm">
            chevron_left
          </span>
        </button>
        <button className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9BA8FF] to-[#A58CFF] flex items-center justify-center text-[#14141E] font-bold text-xs">
          1
        </button>
        <button className="w-8 h-8 rounded-lg bg-[#20262F] flex items-center justify-center text-[#A8ABB3] hover:bg-gradient-to-br hover:from-[#9BA8FF] hover:to-[#A58CFF] hover:text-[#14141E] transition-all text-xs font-bold">
          2
        </button>
        <button className="w-8 h-8 rounded-lg bg-[#20262F] flex items-center justify-center text-[#A8ABB3] hover:bg-gradient-to-br hover:from-[#9BA8FF] hover:to-[#A58CFF] hover:text-[#14141E] transition-all text-xs font-bold">
          3
        </button>
        <button className="w-8 h-8 rounded-lg bg-[#20262F] flex items-center justify-center text-[#A8ABB3] hover:bg-gradient-to-br hover:from-[#9BA8FF] hover:to-[#A58CFF] hover:text-[#14141E] transition-all">
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
