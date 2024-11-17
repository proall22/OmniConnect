import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 dark:bg-gray-900">
       
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-800 py-20 dark:from-blue-900 dark:to-indigo-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-['Orbitron'] text-4xl font-bold text-white md:text-6xl">
              About OmniConnect
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Revolutionizing workspace collaboration with IBM Watson's advanced AI technology
            </p>
          </motion.div>
        </div>
      </div>

      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                OmniConnect aims to transform how teams collaborate by leveraging cutting-edge AI technology. 
                We're building the future of workplace productivity, where intelligent assistance meets human potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-lg bg-blue-100 px-4 py-2 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
                  IBM Watson Integration
                </div>
                <div className="rounded-lg bg-purple-100 px-4 py-2 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200">
                  Advanced NLP
                </div>
                <div className="rounded-lg bg-indigo-100 px-4 py-2 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200">
                  Smart Analytics
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 p-1"
            >
              <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                <div className="grid gap-4">
                  {[
                    { number: "99%", text: "Task Completion Rate" },
                    { number: "50%", text: "Productivity Increase" },
                    { number: "24/7", text: "AI Assistance" },
                    { number: "100+", text: "Enterprise Clients" }
                  ].map((stat, index) => (
                    <div key={index} className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{stat.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     
      <section className="bg-white py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Powered by Advanced Technology</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Built with cutting-edge technologies to deliver unparalleled performance and reliability
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "IBM Watson",
                description: "Advanced AI and machine learning capabilities for intelligent processing",
                icon: "🤖"
              },
              {
                title: "Real-time Processing",
                description: "Lightning-fast response times with optimized performance",
                icon: "⚡"
              },
              {
                title: "Secure Infrastructure",
                description: "Enterprise-grade security with end-to-end encryption",
                icon: "🛡️"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-gray-50 p-6 text-center dark:bg-gray-700"
              >
                <div className="mb-4 text-4xl">{tech.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{tech.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to Transform Your Workspace?</h2>
            <p className="mb-8 text-lg text-blue-100">
              Join the future of intelligent collaboration with OmniConnect
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/dashboard"
                className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:shadow-xl"
              >
                Get Started Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}