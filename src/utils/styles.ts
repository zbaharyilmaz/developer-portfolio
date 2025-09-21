// Common CSS classes for consistent styling across components
export const styles = {
  // Typography
  sectionTitle: "text-5xl md:text-6xl font-bold mb-6 text-dune-gold",
  sectionSubtitle: "text-2xl text-dune-sand/80 max-w-3xl mx-auto",
  sectionSubtitleSmall: "text-xl text-dune-sand/80 max-w-3xl mx-auto",
  
  // Cards
  card: "bg-white/10 rounded-xl p-8 border border-dune-gold/20",
  cardHover: "hover:border-dune-gold/50 transition-all duration-300",
  
  // Buttons
  primaryButton: "px-10 py-4 bg-dune-gold rounded-full font-medium text-dune-dark hover:bg-dune-gold/90 transition-all duration-300 border border-dune-gold/30",
  secondaryButton: "px-10 py-4 border border-dune-gold rounded-full font-medium text-dune-gold hover:bg-dune-gold/10 transition-all duration-300",
  
  // Background animations
  backgroundOrb: "absolute inset-0",
  
  // Container
  container: "max-w-7xl mx-auto px-6",
  containerSmall: "max-w-4xl mx-auto px-6",
  
  // Text
  bodyText: "text-dune-sand/80 leading-relaxed text-xl",
  bodyTextSmall: "text-dune-sand/80 leading-relaxed text-lg",
  
  // Form
  formInput: "w-full px-4 py-3 bg-white/15 border border-dune-gold/20 rounded-lg focus:border-dune-gold focus:outline-none transition-colors text-dune-sand placeholder-dune-sand/50",
  formLabel: "block text-base font-medium text-dune-sand mb-2",
  
  // Social links
  socialIcon: "p-4 bg-custom-orange/10 rounded-full hover:bg-custom-orange/20 transition-all duration-300 border border-custom-orange/30",
  
  // Navigation
  navLink: "text-dune-gold/80 hover:text-dune-gold transition-all duration-200 tracking-wider uppercase px-3 py-2 rounded-lg hover:bg-dune-gold/10 hover:scale-105 hover:drop-shadow-lg",
  
  // Footer
  footerText: "text-dune-gold/80 text-base",
  footerTitle: "text-lg font-bold text-dune-gold",
  footerBrandTitle: "text-xl font-bold text-dune-gold",
} as const;

// Font family constant
export const fontFamily = "Single Day, cursive";