import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="relative mt-20 bg-white pt-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="font-['Orbitron'] text-2xl font-bold">
              <span className="text-gray-900 dark:text-white">Omni</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Connect
              </span>
            </Link>
            <p className="max-w-sm text-gray-600 dark:text-gray-300">
              Revolutionizing workspace collaboration with IBM Watson's advanced
              AI technology.
            </p>
            <div className="flex space-x-4">
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/yourusername/omniconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative rounded-full bg-gray-100 p-2 transition-all duration-300 hover:bg-blue-500 dark:bg-gray-800 dark:hover:bg-blue-900/20"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-500/10 group-hover:to-purple-500/10 group-hover:opacity-100" />
                  <svg
                    className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative rounded-full bg-gray-100 p-2 transition-all duration-300 hover:bg-blue-500 dark:bg-gray-800 dark:hover:bg-blue-900/20"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-500/10 group-hover:to-purple-500/10 group-hover:opacity-100" />
                  <svg
                    className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative rounded-full bg-gray-100 p-2 transition-all duration-300 hover:bg-blue-500 dark:bg-gray-800 dark:hover:bg-blue-900/20"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-500/10 group-hover:to-purple-500/10 group-hover:opacity-100" />
                  <svg
                    className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  About OmniConnect
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <a
                  href="https://lablab.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Lablabai
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
              Core Features
            </h3>
            <ul className="space-y-4">
              {[
                "Smart Meeting Assistant",
                "Task Management",
                "Real-time Analytics",
                "IBM Watson Integration",
              ].map((feature) => (
                <li key={feature} className="text-gray-600 dark:text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <a
                  href="mailto:contact@omniconnect.dev"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  contact@omniconnect.dev
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/yourusername/omniconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 py-8 dark:border-gray-700">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024{" "}
              <a href="/" className="hover:text-blue-400">
                OmniConnect
              </a>{" "}
              . Built for IBM Hackathon.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
