import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Theme-aware chart options
const getThemeColors = () => {
  const isDark = document.documentElement.classList.contains("dark");
  return {
    gridColor: isDark ? "rgba(75, 85, 99, 0.3)" : "rgba(209, 213, 219, 0.5)",
    textColor: isDark ? "rgba(229, 231, 235, 0.8)" : "rgba(55, 65, 81, 0.8)",
    tooltipBackground: isDark
      ? "rgba(17, 24, 39, 0.8)"
      : "rgba(255, 255, 255, 0.8)",
  };
};

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        padding: 20,
        font: {
          family: "'Inter', sans-serif",
          size: 12,
        },
        usePointStyle: true,
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
      padding: 12,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleFont: {
        family: "'Inter', sans-serif",
        size: 14,
        weight: "600",
      },
      bodyFont: {
        family: "'Inter', sans-serif",
        size: 12,
      },
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
    },
  },
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
};

export default function DataVisualization({ type, data, options = {} }) {
  const themeColors = getThemeColors();

  const chartOptions = {
    ...defaultOptions,
    ...options,
    scales: {
      ...(type !== "radar" && {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: themeColors.textColor,
            font: {
              family: "'Inter', sans-serif",
              size: 12,
            },
          },
        },
        y: {
          grid: {
            color: themeColors.gridColor,
            drawBorder: false,
          },
          ticks: {
            color: themeColors.textColor,
            font: {
              family: "'Inter', sans-serif",
              size: 12,
            },
            padding: 8,
          },
        },
      }),
      ...(type === "radar" && {
        r: {
          beginAtZero: true,
          grid: {
            color: themeColors.gridColor,
          },
          ticks: {
            color: themeColors.textColor,
            font: {
              family: "'Inter', sans-serif",
              size: 12,
            },
            backdropColor: "transparent",
          },
          pointLabels: {
            color: themeColors.textColor,
            font: {
              family: "'Inter', sans-serif",
              size: 12,
            },
          },
        },
      }),
    },
    plugins: {
      ...defaultOptions.plugins,
      ...options.plugins,
      legend: {
        ...defaultOptions.plugins.legend,
        ...options.plugins?.legend,
        labels: {
          ...defaultOptions.plugins.legend.labels,
          ...options.plugins?.legend?.labels,
          color: themeColors.textColor,
        },
      },
    },
  };

  // Enhanced chart data with better styling
  const enhancedData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      ...(type === "line" && {
        tension: 0.4,
        fill: true,
      }),
      ...(type === "bar" && {
        borderRadius: 4,
        maxBarThickness: 40,
      }),
    })),
  };

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <Line
            data={enhancedData}
            options={chartOptions}
            className="transition-opacity duration-300"
          />
        );
      case "bar":
        return (
          <Bar
            data={enhancedData}
            options={chartOptions}
            className="transition-opacity duration-300"
          />
        );
      case "radar":
        return (
          <Radar
            data={enhancedData}
            options={chartOptions}
            className="transition-opacity duration-300"
          />
        );
      default:
        return <div>Unsupported chart type</div>;
    }
  };

  return <div className="relative h-full w-full">{renderChart()}</div>;
}
