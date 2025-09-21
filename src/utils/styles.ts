// Common style classes used across components
export const commonStyles = {
  // Background colors
  sectionBg: "bg-gray-900 relative overflow-hidden",

  // Card styles
  card: "bg-white/10 rounded-xl border border-dune-gold/20 hover:border-dune-gold/50 transition-all duration-300",
  cardDark:
    "bg-white/5 rounded-xl border border-dune-gold/20 hover:border-dune-gold/50 transition-all duration-300",

  // Text colors
  heading: "text-dune-gold font-retro",
  subheading: "text-dune-sand/80 font-mono",
  bodyText: "text-dune-sand",

  // Button styles
  primaryButton:
    "px-6 py-3 bg-dune-gold rounded-lg font-medium hover:bg-dune-gold/90 transition-all duration-300 text-dune-dark font-mono",
  secondaryButton:
    "px-6 py-3 bg-dune-gold/10 rounded-lg font-medium hover:bg-dune-gold/20 transition-all duration-300 text-dune-gold font-mono border border-dune-gold/20",

  // Input styles
  input:
    "w-full px-4 py-3 bg-white/10 border border-dune-gold/20 rounded-lg focus:border-dune-gold focus:outline-none transition-colors text-dune-sand placeholder-dune-sand/50",

  // Animation variants
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },

  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },

  // Hover effects
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },
};

// Atmospheric background component props
export const atmosphericBg = {
  topLeft: {
    animate: {
      x: [0, 100, 0],
      y: [0, -50, 0],
      scale: [1, 1.1, 1],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    },
    className:
      "absolute top-1/4 left-1/4 w-64 h-64 bg-dune-gold/5 rounded-full blur-3xl",
  },

  bottomRight: {
    animate: {
      x: [0, -80, 0],
      y: [0, 60, 0],
      scale: [1, 0.9, 1],
    },
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut",
    },
    className:
      "absolute bottom-1/3 right-1/3 w-48 h-48 bg-dune-gold/8 rounded-full blur-2xl",
  },
};
