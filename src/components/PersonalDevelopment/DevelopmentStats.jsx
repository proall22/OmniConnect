import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const initialStats = [
  {
    id: 1,
    name: "Skills Mastered",
    value: 12,
    target: 15,
    change: "+3",
    changeType: "increase",
    icon: "🎯",
    color: "blue",
  },
  {
    id: 2,
    name: "Learning Hours",
    value: 156,
    target: 200,
    change: "+28",
    changeType: "increase",
    icon: "⏱️",
    color: "purple",
  },
  {
    id: 3,
    name: "Resources Completed",
    value: 24,
    target: 30,
    change: "+5",
    changeType: "increase",
    icon: "📚",
    color: "green",
  },
  {
    id: 4,
    name: "Achievement Score",
    value: 850,
    target: 1000,
    change: "+120",
    changeType: "increase",
    icon: "🏆",
    color: "yellow",
  },
];

const StatCard = ({ stat, onClick }) => {
  const getProgressColor = useCallback((color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
      purple:
        "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
      green:
        "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
      yellow:
        "from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500",
    };
    return colors[color] || colors.blue;
  }, []);

  return (
    <motion.div
      layout
      initial={false}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{stat.icon}</span>
          <div
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              stat.changeType === "increase"
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
            }`}
          >
            {stat.change}
          </div>
        </div>

        <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          {stat.name}
        </p>
        <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
          {stat.value}
        </p>

        <div className="mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(
                stat.color
              )}`}
              style={{
                width: `${(stat.value / stat.target) * 100}%`,
                transition: "width 0.5s ease-out",
              }}
            />
          </div>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Target: {stat.target}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function DevelopmentStats() {
  const [stats, setStats] = useState(initialStats);
  const [selectedStat, setSelectedStat] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((currentStats) =>
        currentStats.map((stat) => ({
          ...stat,
          value: Math.min(
            stat.value + Math.floor(Math.random() * 3),
            stat.target
          ),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gpu-accelerated">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
            onClick={() => setSelectedStat(stat)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedStat && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStat(null)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedStat.name} Details
                </h3>
                <button
                  onClick={() => setSelectedStat(null)}
                  className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Current Value
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {selectedStat.value}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Target
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {selectedStat.target}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Progress
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {Math.round(
                      (selectedStat.value / selectedStat.target) * 100
                    )}
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Recent Change
                  </span>
                  <span
                    className={`font-semibold ${
                      selectedStat.changeType === "increase"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {selectedStat.change}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
