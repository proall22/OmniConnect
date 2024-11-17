import { useState } from "react";
import { motion } from "framer-motion";
import DataVisualization from "./DataVisualization";
import DateRangePicker from "./DateRangePicker";
import MetricCard from "./MetricCard";

const analyticsData = {
  taskCompletion: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Completed Tasks",
        data: [30, 45, 38, 52, 48, 60],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  meetingEfficiency: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Meeting Duration (hours)",
        data: [8, 6, 7, 5],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  },
  skillProgress: {
    labels: ["React", "Node.js", "TypeScript", "AWS", "UI/UX", "DevOps"],
    datasets: [
      {
        label: "Current Level",
        data: [80, 70, 65, 55, 75, 60],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 0.8)",
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#3B82F6",
      },
    ],
  },
};

const metrics = [
  {
    name: "Task Completion Rate",
    value: "85%",
    change: "+12%",
    trend: "up",
    icon: "📈",
    description: "Tasks completed vs planned",
  },
  {
    name: "Average Meeting Duration",
    value: "45 mins",
    change: "-15%",
    trend: "down",
    icon: "⏱️",
    description: "Time spent in meetings",
  },
  {
    name: "Active Projects",
    value: "12",
    change: "+2",
    trend: "up",
    icon: "📊",
    description: "Currently running projects",
  },
  {
    name: "Learning Hours",
    value: "24h",
    change: "+8h",
    trend: "up",
    icon: "📚",
    description: "Time spent on learning",
  },
];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [activeView, setActiveView] = useState("week");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Track your performance and progress
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex rounded-lg bg-white shadow-sm dark:bg-gray-800">
            {["day", "week", "month", "year"].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  activeView === view
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {view}
              </button>
            ))}
          </div>

          <DateRangePicker
            onChange={setDateRange}
            startDate={dateRange.start}
            endDate={dateRange.end}
          />
        </div>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MetricCard metric={metric} />
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Task Completion Trend
            </h2>
            <select className="rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm dark:border-gray-600 dark:bg-gray-700">
              <option>Last 6 months</option>
              <option>Last 3 months</option>
              <option>Last month</option>
            </select>
          </div>
          <div className="h-[300px]">
            <DataVisualization
              type="line"
              data={analyticsData.taskCompletion}
              options={{
                maintainAspectRatio: false,
                interaction: {
                  intersect: false,
                  mode: "index",
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Meeting Efficiency
            </h2>
            <select className="rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm dark:border-gray-600 dark:bg-gray-700">
              <option>This month</option>
              <option>Last month</option>
              <option>Last quarter</option>
            </select>
          </div>
          <div className="h-[300px]">
            <DataVisualization
              type="bar"
              data={analyticsData.meetingEfficiency}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card lg:col-span-2"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Skill Distribution
            </h2>
            <button className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-400">
              View Details
            </button>
          </div>
          <div className="h-[400px]">
            <DataVisualization
              type="radar"
              data={analyticsData.skillProgress}
              options={{
                maintainAspectRatio: false,
                scales: {
                  r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      stepSize: 20,
                    },
                  },
                },
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
