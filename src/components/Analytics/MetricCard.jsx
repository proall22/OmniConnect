import { motion } from "framer-motion";

export default function MetricCard({ metric }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{metric.icon}</span>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ${
              metric.trend === "up"
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
            }`}
          >
            {metric.change}
          </motion.div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {metric.name}
          </h3>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {metric.value}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {metric.description}
          </p>
        </div>
      </div>
    </div>
  );
}
