import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialGoals = [
  {
    id: 1,
    title: "Master React Advanced Patterns",
    category: "Technical",
    deadline: "2024-06-30",
    progress: 65,
    milestones: [
      { id: 1, title: "Complete Advanced React Course", completed: true },
      { id: 2, title: "Build 3 Complex Projects", completed: false },
      { id: 3, title: "Write Technical Blog Posts", completed: false },
    ],
    priority: "High",
    status: "In Progress",
  },
  {
    id: 2,
    title: "AWS Certification",
    category: "Certification",
    deadline: "2024-08-15",
    progress: 30,
    milestones: [
      { id: 1, title: "Complete AWS Training", completed: false },
      { id: 2, title: "Practice Tests", completed: false },
      { id: 3, title: "Schedule Exam", completed: false },
    ],
    priority: "Medium",
    status: "In Progress",
  },
];

export default function GoalTracker() {
  const [goals, setGoals] = useState(initialGoals);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [filter, setFilter] = useState("all");
  const [newGoal, setNewGoal] = useState({
    title: "",
    category: "Technical",
    deadline: "",
    progress: 0,
    milestones: [],
    priority: "Medium",
    status: "Not Started",
  });

  const handleAddGoal = (e) => {
    e.preventDefault();
    setGoals([...goals, { ...newGoal, id: goals.length + 1 }]);
    setNewGoal({
      title: "",
      category: "Technical",
      deadline: "",
      progress: 0,
      milestones: [],
      priority: "Medium",
      status: "Not Started",
    });
    setShowAddModal(false);
  };

  const updateGoalProgress = (id, newProgress) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, progress: newProgress } : goal
      )
    );
  };

  const toggleMilestone = (goalId, milestoneId) => {
    setGoals(
      goals.map((goal) => {
        if (goal.id === goalId) {
          const updatedMilestones = goal.milestones.map((milestone) =>
            milestone.id === milestoneId
              ? { ...milestone, completed: !milestone.completed }
              : milestone
          );
          const progress = Math.round(
            (updatedMilestones.filter((m) => m.completed).length /
              updatedMilestones.length) *
              100
          );
          return { ...goal, milestones: updatedMilestones, progress };
        }
        return goal;
      })
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30";
      case "medium":
        return "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30";
      case "low":
        return "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30";
      default:
        return "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30";
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Goal Tracker
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Track and achieve your professional goals
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddModal(true)}
          className="rounded-full bg-blue-100 p-2 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-400"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </motion.button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {["all", "in progress", "completed", "not started"].map(
          (filterType) => (
            <motion.button
              key={filterType}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterType)}
              className={`rounded-full px-4 py-1 text-sm font-medium capitalize transition-colors ${
                filter === filterType
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {filterType}
            </motion.button>
          )
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {goals
            .filter(
              (goal) => filter === "all" || goal.status.toLowerCase() === filter
            )
            .map((goal) => (
              <motion.div
                key={goal.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedGoal(goal)}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {goal.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {goal.category}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getPriorityColor(
                          goal.priority
                        )}`}
                      >
                        {goal.priority}
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {goal.progress}%
                  </span>
                </div>

                <div className="mt-4">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      transition={{ duration: 0.5 }}
                      className="absolute h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {goal.milestones.filter((m) => m.completed).length} of{" "}
                    {goal.milestones.length} milestones completed
                  </p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedGoal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGoal(null)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedGoal.title}
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Deadline
                  </p>
                  <p className="text-gray-900 dark:text-white">
                    {new Date(selectedGoal.deadline).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Milestones
                  </p>
                  <div className="mt-2 space-y-2">
                    {selectedGoal.milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className="flex items-center space-x-3"
                      >
                        <button
                          onClick={() =>
                            toggleMilestone(selectedGoal.id, milestone.id)
                          }
                          className={`rounded p-1 ${
                            milestone.completed
                              ? "text-green-600 dark:text-green-400"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                        <span
                          className={`text-sm ${
                            milestone.completed
                              ? "text-gray-500 line-through dark:text-gray-400"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {milestone.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedGoal(null)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Add New Goal
              </h3>
              <form onSubmit={handleAddGoal} className="mt-6 space-y-4">
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    Add Goal
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
