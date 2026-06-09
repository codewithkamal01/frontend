import ReportMetrics from "../components/reports/ReportMetrics";
import ReportsHeader from "../components/reports/ReportsHeader";
import ReportsList from "../components/reports/ReportsList";
import ResourceDistribution from "../components/reports/ResourceDistribution";
import SeverityChart from "../components/reports/SeverityChart";

function Reports() {
  return (
    <div className="bg-[#0A0E14] min-h-screen">
      <div className="max-w-screen-2xl mx-auto space-y-10 p-8">
        {/* Header */}
        <ReportsHeader />

        {/* Metrics */}
        <ReportMetrics />

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SeverityChart />
          </div>

          <div className="lg:col-span-5">
            <ResourceDistribution />
          </div>
        </div>

        {/* Reports List */}
        <ReportsList />
      </div>
    </div>
  );
}

export default Reports;
