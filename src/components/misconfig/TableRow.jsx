import AutoFixButton from "./AutoFixButton";
function TableRow({ row, onAutoFix }) {
  const severityStyles = {
    High: {
      background: "rgb(167,1,56)",
      color: "rgb(255,178,185)",
    },
    Med: {
      background: "rgb(92,0,247)",
      color: "rgb(236,227,255)",
    },
    Low: {
      background: "rgba(0,227,253,0.2)",
      color: "rgb(0,212,236)",
    },
  };

  const statusDot = {
    Detected: "rgb(215,51,87)",
    Remediating: "rgb(129,236,255)",
    Fixed: "rgb(129,236,255)",
  };

  return (
    <tr className="hover:bg-[rgba(32,38,47,0.3)] transition-colors">
      <td className="px-8 py-5">
        <div className="flex flex-col">
          <span className="text-[rgb(241,243,252)] font-bold">{row.name}</span>
          <span className="text-[10px] text-[rgb(168,171,179)] font-mono">
            {row.id}
          </span>
        </div>
      </td>
      <td className="px-6 py-5">
        <span className="text-[rgb(168,171,179)] text-sm">{row.issue}</span>
      </td>
      <td className="px-6 py-5">
        <span className="text-xs text-[rgb(168,171,179)]">
          {row.provider} {row.region}
        </span>
      </td>
      <td className="px-6 py-5 text-center">
        <span
          className="px-3 py-1 rounded-full text-[10px] font-black uppercase"
          style={severityStyles[row.severity]}
        >
          {row.severity}
        </span>
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: statusDot[row.status] }}
          ></span>
          <span className="text-sm text-[rgb(241,243,252)]">{row.status}</span>
        </div>
      </td>
      <td className="px-5 py-2 text-right cursor-pointer">
        <AutoFixButton onClick={() => onAutoFix(row.id)} action={row.action} />
      </td>
    </tr>
  );
}

export default TableRow;
