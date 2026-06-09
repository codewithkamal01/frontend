import Chart from "react-apexcharts";

export default function SeverityChart() {
  const series = [
    {
      name: "Issues",
      data: [42, 31, 64, 14],
    },
  ];

  const options = {
    chart: {
      toolbar: { show: false },
      background: "transparent",
      zoom: {
        enabled: false,
      },
    },

    theme: {
      mode: "dark",
    },

    plotOptions: {
      bar: {
        borderRadius: 10,
        distributed: true,
        columnWidth: "65%",
      },
    },

    colors: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"],

    xaxis: {
      categories: ["Low", "Medium", "High", "Critical"],
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
      labels: {
        style: {
          colors: "#94a3b8",
        },
      },
    },

    dataLabels: {
      enabled: false,
    },

    grid: {
      borderColor: "#1e293b",
      strokeDashArray: 4,
    },

    tooltip: {
      theme: "dark",
    },

    legend: {
      show: false,
    },
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm">
      <h3 className="mb-6 text-xl font-semibold text-white">Issues by Severity</h3>

      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}
