import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactSupport from "../common/ContactSupport";

const faqs = [
  {
    question: "What is OmniConnect?",
    answer:
      "OmniConnect is an AI-powered workspace assistant that integrates with IBM Watson to enhance team collaboration, task management, and productivity. It provides smart features for meetings, task tracking, and personal development.",
  },
  {
    question: "How does the AI integration work?",
    answer:
      "OmniConnect uses IBM Watson's advanced NLP capabilities to process and understand user inputs, automate task management, provide intelligent meeting summaries, and offer personalized recommendations for improved productivity.",
  },
  {
    question: "What features are included in the platform?",
    answer:
      "Key features include Smart Meeting Assistant, Task Management, Real-time Analytics, Personal Development Tracking, and Team Collaboration tools. Each feature is powered by AI to provide an intelligent and efficient workspace experience.",
  },
  {
    question: "Is my data secure with OmniConnect?",
    answer:
      "Yes, OmniConnect prioritizes data security with enterprise-grade encryption, secure IBM Watson integration, and compliance with industry standards. Your data is protected with state-of-the-art security measures.",
  },
  {
    question: "Can I integrate OmniConnect with other tools?",
    answer:
      "Yes, OmniConnect offers seamless integration with popular tools like Slack, Google Calendar, Microsoft Teams, and other workplace applications to provide a unified workspace experience.",
  },
  {
    question: "How can I get started with OmniConnect?",
    answer:
      "Getting started is easy! Simply sign up for an account, complete the initial setup process, and our intelligent onboarding system will guide you through personalizing your workspace and connecting your team.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about OmniConnect
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mt-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between rounded-lg bg-white p-6 text-left shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="h-6 w-6 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-b-lg bg-gray-50 p-6 dark:bg-gray-700/50">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Still have questions?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContactModal(true)}
            className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Contact Support
          </motion.button>
        </div>

        <ContactSupport
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </section>
  );
}
