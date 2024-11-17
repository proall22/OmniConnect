import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const heroFeatures = [
  { icon: "🤖", text: "AI-Powered Intelligence" },
  { icon: "🔄", text: "IBM Watson Integration" },
  { icon: "⚡", text: "Real-time Processing" },
  { icon: "🛡️", text: "Enterprise Security" },
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const controls = useAnimation();

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    let animationFrame;
    const animateGradient = () => {
      controls.start({
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
      });
      animationFrame = requestAnimationFrame(animateGradient);
    };
    animationFrame = requestAnimationFrame(animateGradient);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition, controls]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10"
    >
      <motion.div
        animate={controls}
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-64 w-64"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 50, 0],
              rotate: [0, 180, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5" />
          </motion.div>
        ))}
      </div>

      <div className="container relative mx-auto grid min-h-screen px-4 lg:grid-cols-2">
        <div className="z-10 flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pl-8 md:pl-12 lg:pl-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 dark:bg-blue-900/50"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="ml-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                Powered by IBM Watson
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 font-['Orbitron'] text-5xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Intelligent
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Workspace Assistant
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transform your workflow with AI-powered intelligence that adapts
              to your needs. Experience seamless collaboration and enhanced
              productivity.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm dark:bg-gray-800/80 dark:text-gray-300"
                >
                  <span role="img" aria-label={feature.text}>
                    {feature.icon}
                  </span>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/dashboard"
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                >
                  Get Started
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="rounded-lg border-2 border-gray-300 bg-white/50 px-8 py-3 text-lg font-semibold text-gray-600 backdrop-blur-sm transition-all hover:border-blue-600 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden lg:flex lg:items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15 - i * 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="absolute h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-400"
                  style={{
                    top: `${Math.sin((2 * Math.PI * i) / 3) * 150}px`,
                    left: `${Math.cos((2 * Math.PI * i) / 3) * 150}px`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="h-auto w-full text-white dark:text-gray-800"
          viewBox="0 0 1440 200"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 C1150,200 1350,0 1440,100 L1440,200 L0,200 Z" />
        </svg>
      </div>
    </div>
  );
}
