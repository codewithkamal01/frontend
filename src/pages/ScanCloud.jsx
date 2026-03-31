import { useEffect, useState } from "react";
import RecentScansTable from "../components/scan/RecentScansTable";
import ScanConfigCard from "../components/scan/ScanConfigCard";
import ScanHeader from "../components/scan/ScanHeader";
import ScanProgressCard from "../components/scan/ScanProgressCard";
import ScanStats from "../components/scan/ScanStats";
import SecurityScoreCard from "../components/scan/SecurityScoreCard";
import { recentScansData } from "../Data/scanData";
import { useOutletContext } from "react-router-dom";

function ScanCloud() {
  const { search } = useOutletContext();
  const [filteredScans, setFilteredScans] = useState(recentScansData);

  const [provider, setProvider] = useState("AWS");
  const [accessKey, setAccessKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [scanType, setScanType] = useState("quick");

  const [scanStatus, setScanStatus] = useState("idle");
  const [scanProgress, setScanProgress] = useState(0);
  const [scanMessage, setScanMessage] = useState("");

  const [scans, setScans] = useState(recentScansData);
  const [loading, setLoading] = useState(false);
  const [securityScore, setSecurityScore] = useState(85);
  const [stats, setStats] = useState({
    resources: 1240,
    issues: 42,
    critical: 12,
  });

  const handleAutoFix = () => {
    setLoading(true);

    setTimeout(() => {
      setSecurityScore(92);
      setStats({
        resources: 1240,
        issues: 10,
        critical: 2,
      });
      setLoading(false);
    }, 1500);
  };

  const startScan = () => {
    setScanStatus("running");
    setScanProgress(0);
    setScanMessage("Initializing scan...");

    let progress = 0;

    const interval = setInterval(() => {
      progress += 5;
      setScanProgress(progress);

      if (progress === 25)
        setScanMessage("Analyzing S3 bucket configurations...");
      if (progress === 50) setScanMessage("Checking IAM permissions...");
      if (progress === 75)
        setScanMessage("Scanning network security groups...");
      if (progress === 90) setScanMessage("Finalizing scan results...");

      if (progress >= 100) {
        clearInterval(interval);
        setScanStatus("completed");
        setScanMessage("Scan completed successfully");

        setSecurityScore(88);
        setStats({
          resources: 1300,
          issues: 22,
          critical: 5,
        });

        setScans((prev) => [
          {
            id: Date.now(),
            provider: "AWS",
            duration: "2m 14s",
            issues: 22,
            status: "Completed",
            date: new Date().toLocaleDateString(),
          },
          ...prev,
        ]);
      }
    }, 300);
  };
  useEffect(() => {
    if (!search) {
      setFilteredScans(scans);
      return;
    }
    const s = search.toLowerCase();

    const filtered = scans.filter(
      (scan) =>
        scan.provider.toLowerCase().includes(s) ||
        scan.status.toLowerCase().includes(s) ||
        String(scan.issues).includes(s),
    );
    setFilteredScans(filtered);
  }, [search, scans]);

  return (
    <div className="bg-[#0a0e14] min-h-screen">
      <div className="max-w-screen-2xl mx-auto space-y-10">
        <ScanHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            <ScanConfigCard
              provider={provider}
              setProvider={setProvider}
              accessKey={accessKey}
              setAccessKey={setAccessKey}
              secretKey={secretKey}
              setSecretKey={setSecretKey}
              scanType={scanType}
              setScanType={setScanType}
              startScan={startScan}
            />
            <ScanProgressCard
              status={scanStatus}
              progress={scanProgress}
              message={scanMessage}
            />
          </div>

          <div className="lg:col-span-5 space-y-8">
            <SecurityScoreCard
              score={securityScore}
              onAutoFix={handleAutoFix}
              loading={loading}
            />
            <ScanStats stats={stats} />
          </div>
        </div>

        <RecentScansTable scans={filteredScans} loading={loading} />
      </div>
    </div>
  );
}

export default ScanCloud;
