// Common animation variants for consistent animations across components
export const animations = {
  // Fade in from bottom
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },

  // Fade in from left
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },

  // Fade in from right
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },

  // Fade in with delay
  fadeInWithDelay: (delay: number = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  }),

  // Stagger children animation
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Individual stagger item
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },

  // Hover animations
  hover: {
    scale: 1.05,
    boxShadow: "0 0 30px rgba(255, 158, 0, 0.5)",
  },

  hoverSmall: {
    scale: 1.1,
    boxShadow: "0 0 20px rgba(255, 158, 0, 0.4)",
  },

  // Background orb animations
  backgroundOrb1: {
    animate: {
      x: [0, 80, 0] as number[],
      y: [0, -40, 0] as number[],
      scale: [1, 1.2, 1] as number[],
    },
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },

  backgroundOrb2: {
    animate: {
      x: [0, -60, 0] as number[],
      y: [0, 50, 0] as number[],
      scale: [1, 0.8, 1] as number[],
    },
    transition: {
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },

  // Social icon hover
  socialHover: {
    scale: 1.2,
    rotate: 5,
    boxShadow: "0 0 20px rgba(255, 158, 0, 0.4)",
  },

  socialHoverReverse: {
    scale: 1.2,
    rotate: -5,
    boxShadow: "0 0 20px rgba(255, 158, 0, 0.4)",
  },
} as const;

// Viewport configuration for scroll animations
export const viewport = { once: true };
