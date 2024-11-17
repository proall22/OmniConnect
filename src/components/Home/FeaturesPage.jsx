import { motion } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "Smart Meeting Assistant",
    description:
      "AI-powered meeting management with real-time summarization and intelligent scheduling.",
    details: [
      "Automated agenda creation",
      "Real-time meeting summaries",
      "Smart calendar integration",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: "✅",
    title: "Task Management",
    description:
      "Intelligent task prioritization and automated follow-ups powered by IBM Watson.",
    details: [
      "Smart to-do lists",
      "Performance tracking",
      "Automated reminders",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "🔍",
    title: "Knowledge Retrieval",
    description:
      "Real-time information access with IBM Watson Discovery integration.",
    details: [
      "Dynamic knowledge base",
      "Contextual responses",
      "Sentiment analysis",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: "👥",
    title: "Customer Engagement",
    description: "Personalized customer interactions across multiple channels.",
    details: [
      "Smart recommendations",
      "Journey management",
      "Multi-channel support",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-['Orbitron'] text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Powered by Advanced AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Experience the future of workspace collaboration with our
            intelligent features
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div
                className={`mb-4 inline-block rounded-lg bg-gradient-to-r p-3 ${feature.color}`}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      className="mr-2 h-4 w-4 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {detail}
                  </motion.li>
                ))}
              </ul>

              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-5 dark:group-hover:opacity-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl"
          >
            Start Using OmniConnect
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
