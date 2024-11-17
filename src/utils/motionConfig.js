export const springConfig = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const transitionConfig = {
  type: "tween",
  duration: 0.5,
  ease: "easeInOut",
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
