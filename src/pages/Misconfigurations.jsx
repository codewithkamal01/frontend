import { useState, useEffect } from "react";
import MisconfigHeader from "../components/misconfig/MisconfigHeader";
import MisconfigStats from "../components/misconfig/MisconfigStats";
import TableContainer from "../components/misconfig/TableContainer";
import { tableData } from "../Data/misconfigData";
import { useOutletContext } from "react-router-dom";

function Misconfigurations() {
  const { search } = useOutletContext();
  const [provider, setProvider] = useState("All");
  const [severity, setSeverity] = useState("All");
  const [data, setData] = useState(tableData);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let filtered = data;

    if (provider !== "All") {
      filtered = filtered.filter((item) => item.provider === provider);
    }

    if (severity === "High") {
      filtered = filtered.filter((i) => i.severity === "High");
    }

    if (severity === "Med") {
      filtered = filtered.filter((i) => i.severity === "Med");
    }

    if (severity === "Low") {
      filtered = filtered.filter((i) => i.severity === "Low");
    }

    //search filter
    if (search.trim() !== "") {
      filtered = filtered.filter(
        (item) =>
          item.issue.toLowerCase().includes(search.toLowerCase()) ||
          item.provider.toLowerCase().includes(search.toLowerCase()) ||
          item.status.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFilteredData(filtered);
  }, [provider, severity, search, data]);

  const handleRescan = () => {
    setLoading(true);

    // backend scan
    setTimeout(() => {
      const newData = data.map((item) => ({
        ...item,
        status: Math.random() > 0.5 ? "Detected" : "Remediated",
        severity: ["High", "Med", "Low"][Math.floor(Math.random() * 3)],
      }));

      setData(newData);
      setLoading(false);
    }, 1200);
  };

  const handleAutoFix = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Remediated", severity: "Low", action: "Fixed" }
          : item,
      ),
    );
  };

  return (
    <div className="bg-[#0a0e14] min-h-screen space-y-6">
      <MisconfigHeader
        provider={provider}
        setProvider={setProvider}
        severity={severity}
        setSeverity={setSeverity}
        onRescan={handleRescan}
      />

      <MisconfigStats tableData={filteredData} />

      <TableContainer
        tableData={filteredData}
        loading={loading}
        onAutoFix={handleAutoFix}
      />

      <div className="mt-12 text-center opacity-20 select-none">
        <span className="font-['Space_Grotesk'] font-bold text-6xl text-transparent bg-gradient-to-b from-[#9BA8FF] to-transparent bg-clip-text">
          AUTO CLOUD GUARD
        </span>
      </div>
    </div>
  );
}

export default Misconfigurations;
