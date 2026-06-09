import { stats } from "../../Data/dashboardData";
import StatsCard from "./StatsCards";


export default function StatsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {stats.map((item) => (
        <StatsCard key={item.title} {...item} />
      ))}
    </div>
  );
}
