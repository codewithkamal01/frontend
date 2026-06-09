import MetricCard from "./MetricCard";
import { reportMetrics } from "../../Data/reportsData";

export default function ReportMetrics() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {reportMetrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
}
