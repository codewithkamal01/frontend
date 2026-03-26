import AutoFixButton from "./AutoFixButton";
import Pagination from "./Pagination";

function TableRow() {
  const tableData = [
    {
      name: "prod-customer-data-01",
      id: "arn:aws:s3:::customer-v1-storage",
      issue: "S3 Bucket Public Access",
      provider: "AWS",
      region: "us-east-1",
      severity: "High",
      status: "Detected",
      action: "Auto Fix",
    },
    {
      name: "legacy-api-gateway",
      id: "az:resource/network/gw-002",
      issue: "Weak TLS Configuration",
      provider: "Azure",
      region: "West Europe",
      severity: "Med",
      status: "Remediating",
      action: "Fixing...",
    },
    {
      name: "temp-dev-worker-node",
      id: "gcp:compute/instances/dev-291",
      issue: "Default Service Account Used",
      provider: "GCP",
      region: "us-central1",
      severity: "Low",
      status: "Detected",
      action: "Auto Fix",
    },
    {
      name: "root-account-access",
      id: "iam:user/root-9902",
      issue: "MFA Not Enabled",
      provider: "AWS",
      region: "Global",
      severity: "High",
      status: "Detected",
      action: "Auto Fix",
    },
    {
      name: "analytics-db-cluster",
      id: "rds:db/cluster-final-v2",
      issue: "Encryption at Rest Disabled",
      provider: "AWS",
      region: "eu-west-1",
      severity: "High",
      status: "Detected",
      action: "Auto Fix",
    },
  ];

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
    <>
      {tableData.map((item, index) => (
        <tr
          key={item.id}
          className="hover:bg-[rgba(32,38,47,0.3)] transition-colors"
        >
          <td className="px-8 py-5">
            <div className="flex flex-col">
              <span className="text-[rgb(241,243,252)] font-bold">
                {item.name}
              </span>
              <span className="text-[10px] text-[rgb(168,171,179)] font-mono">
                {item.id}
              </span>
            </div>
          </td>
          <td className="px-6 py-5">
            <span className="text-[rgb(168,171,179)] text-sm">
              {item.issue}
            </span>
          </td>
          <td className="px-6 py-5">
            <span className="text-xs text-[rgb(168,171,179)]">
              {item.provider} {item.region}
            </span>
          </td>
          <td className="px-6 py-5 text-center">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-black uppercase"
              style={severityStyles[item.severity]}
            >
              {item.severity}
            </span>
          </td>
          <td className="px-6 py-5">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: statusDot[item.status] }}
              ></span>
              <span className="text-sm text-[rgb(241,243,252)]">
                {item.status}
              </span>
            </div>
          </td>
          <td className="px-5 py-2 text-right">
            <AutoFixButton action={item.action} />
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableRow;
