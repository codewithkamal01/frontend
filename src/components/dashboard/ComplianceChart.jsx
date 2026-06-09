import Chart from "react-apexcharts";
import { TrendingUp } from "lucide-react";

export default function ComplianceChart() {
  const series = [
    {
      name: "Compliance Score",
      data: [65, 72, 78, 84, 91, 96],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: "transparent",
    },

    theme: {
      mode: "dark",
    },

    colors: ["#818cf8"],

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
      width: 4,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.02,
        stops: [0, 100],
      },
    },

    grid: {
      borderColor: "#1e293b",
      strokeDashArray: 4,
    },

    tooltip: {
      theme: "dark",
      y: {
        formatter: (value) => `${value}%`,
      },
    },

    xaxis: {
      categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      labels: {
        style: {
          colors: "#94a3b8",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: (value) => `${value}%`,
        style: {
          colors: "#94a3b8",
        },
      },
    },

    legend: {
      show: false,
    },
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Resource Compliance Trends
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            90-day historical audit across cloud environments
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
          <TrendingUp size={16} />
          +31%
        </div>
      </div>

      <Chart options={options} series={series} type="area" height={340} />
    </div>
  );
}
