function AutoFixButton({ action }) {
  return (
    <button
      className="px-4 py-1.5 rounded-lg text-xs font-bold"
      style={{
        background:
          action === "Auto Fix"
            ? "linear-gradient(135deg, rgb(155,168,255), rgb(165,140,255))"
            : "rgb(32,38,47)",
        color: action === "Auto Fix" ? "black" : "rgb(168,171,179)",
      }}
    >
      {action}
    </button>
  );
}

export default AutoFixButton;
