import ComplianceChart from "../components/dashboard/ComplianceChart";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import LiveAlerts from "../components/dashboard/LiveAlerts";
import SecurityScoreCard from "../components/dashboard/SecurityScoreCard";
import StatsGrid from "../components/dashboard/StatsGrid";

export default function Dashboard() {
  return (
    <div className="bg-[#0A0E14] min-h-screen">
      <div className="max-w-screen-2xl mx-auto space-y-10 p-4 sm:p-6 lg:p-8">
        <DashboardHeader />

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SecurityScoreCard />
          </div>

          <div className="lg:col-span-8">
            <StatsGrid />
          </div>

          <div className="lg:col-span-8">
            <ComplianceChart />
          </div>

          <div className="lg:col-span-4">
            <LiveAlerts />
          </div>
        </div>
      </div>
    </div>
  );
}
