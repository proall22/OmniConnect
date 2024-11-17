import { motion } from "framer-motion";
import { useState } from "react";

export default function SlackIntegration() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-30"
    >
      <button
        onClick={handleConnect}
        className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"></svg>
        <span className="font-medium text-gray-900 dark:text-white">
          {isConnected ? "Connected to Slack" : "Connect with Slack"}
        </span>
      </button>
    </motion.div>
  );
}
