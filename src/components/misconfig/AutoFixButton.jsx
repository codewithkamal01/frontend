function AutoFixButton({ action, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 rounded-lg text-xs font-bold"
      style={{
        background:
          action === "Auto Fix"
            ? "linear-gradient(135deg, #9BA8FF, #A58CFF)"
            : "rgb(32,38,47)",
        color: action === "Auto Fix" ? "black" : "rgb(168,171,179)",
      }}
    >
      {action}
    </button>
  );
}

export default AutoFixButton;
