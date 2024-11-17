import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content:
      "OmniConnect has revolutionized how our team collaborates. The intuitive interface and powerful features have boosted our productivity significantly.",
    author: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Solutions Inc.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    tags: ["Project Management", "Collaboration"],
  },
  {
    id: 2,
    content:
      "The analytics dashboard provides invaluable insights into our team's performance. It's helped us optimize our workflow and identify bottlenecks effectively.",
    author: "Michael Chen",
    role: "Team Lead",
    company: "Innovation Labs",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    tags: ["Analytics", "Performance"],
  },
  {
    id: 3,
    content:
      "The meeting management system has transformed how we handle remote collaboration. It's a game-changer for distributed teams.",
    author: "Emily Rodriguez",
    role: "Operations Director",
    company: "Global Systems",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    tags: ["Remote Work", "Meetings"],
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Teams Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300">
            See what our users have to say about their experience with
            OmniConnect
          </p>
        </div>

        <div className="relative mt-16 h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="mx-auto max-w-3xl">
                <div className="card overflow-hidden bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="relative px-6 py-8 sm:px-10 sm:pt-10">
                    <div className="absolute left-0 top-0 h-16 w-16 -translate-x-6 -translate-y-6 transform overflow-hidden">
                      <div className="h-24 w-24 rotate-45 transform bg-blue-600 dark:bg-blue-500"></div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].author}
                            className="h-12 w-12 rounded-full"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {testimonials[activeIndex].author}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {testimonials[activeIndex].role} at{" "}
                              {testimonials[activeIndex].company}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          {renderStars(testimonials[activeIndex].rating)}
                        </div>
                      </div>

                      <blockquote className="mt-8">
                        <p className="text-xl text-gray-700 dark:text-gray-200">
                          "{testimonials[activeIndex].content}"
                        </p>
                      </blockquote>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {testimonials[activeIndex].tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
            onClick={() => paginate(-1)}
          >
            <svg
              className="h-6 w-6"
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
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
            onClick={() => paginate(1)}
          >
            <svg
              className="h-6 w-6"
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
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-blue-600 w-4 dark:bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
