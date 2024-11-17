import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
  addMonths,
  subMonths,
} from "date-fns";

export default function Calendar({ meetings, selectedDate, onSelectDate }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isAnimating, setIsAnimating] = useState(false);

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const hasMeeting = (date) => {
    return meetings.some((meeting) => isSameDay(new Date(meeting.date), date));
  };

  const handleMonthChange = (direction) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentMonth(
        direction === "next"
          ? addMonths(currentMonth, 1)
          : subMonths(currentMonth, 1)
      );
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
      <div className="border-b border-gray-200 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <motion.h2
            key={currentMonth.toString()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {format(currentMonth, "MMMM yyyy")}
          </motion.h2>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMonthChange("prev")}
              className="rounded-lg bg-white p-2 shadow-md transition-all hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <svg
                className="h-5 w-5 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMonthChange("next")}
              className="rounded-lg bg-white p-2 shadow-md transition-all hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <svg
                className="h-5 w-5 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400"
            >
              {day}
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMonth.toString()}
            initial={{ opacity: 0, x: isAnimating ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAnimating ? 100 : -100 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-7 gap-2"
          >
            {days.map((day) => {
              const isSelected = isSameDay(day, selectedDate);
              const hasEvent = hasMeeting(day);
              const isCurrentDay = isToday(day);

              return (
                <motion.button
                  key={day.toString()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectDate(day)}
                  className={`relative flex aspect-square items-center justify-center rounded-lg text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-lg dark:bg-blue-500"
                      : hasEvent
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span
                    className={
                      isCurrentDay
                        ? "rounded-full border-2 border-blue-500 p-1"
                        : ""
                    }
                  >
                    {format(day, "d")}
                  </span>
                  {hasEvent && !isSelected && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500" />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="border-t border-gray-200 p-6 dark:border-gray-700">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          {format(selectedDate, "MMMM d, yyyy")}
        </h3>
        <div className="space-y-2">
          {meetings
            .filter((meeting) =>
              isSameDay(new Date(meeting.date), selectedDate)
            )
            .map((meeting) => (
              <motion.div
                key={meeting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {meeting.title}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {format(new Date(meeting.date), "h:mm a")}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
