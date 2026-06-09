import Chart from "react-apexcharts";

export default function ResourceDistribution() {
  const series = [45, 30, 15, 10];

  const options = {
    labels: ["AWS", "Azure", "GCP", "Other"],

    colors: ["#6366f1", "#8b5cf6", "#06b6d4", "#475569"],

    stroke: {
      colors: ["#0a0e14"],
      width: 2,
    },

    legend: {
      position: "bottom",
      labels: {
        colors: "#cbd5e1",
      },
    },

    theme: {
      mode: "dark",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },

    dataLabels: {
      enabled: true,
      formatter: (val) => {
        return Math.round(val) + "%";
      },
      style: {
        colors: ["#fff"],
      },
    },

    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm">
      <h3 className="mb-6 text-xl font-semibold text-white">Resource Distribution</h3>

      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
}
