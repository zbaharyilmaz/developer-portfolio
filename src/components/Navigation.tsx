"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home } from "lucide-react";
import { navItems } from "@/data/navigation";
import { styles, fontFamily } from "@/utils/styles";
import { animations } from "@/hooks/useAnimations";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop Blur Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dune-dark/80 backdrop-blur-md border-b border-dune-gold/20 textured-bg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Left Home Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="hidden md:flex"
            >
              <motion.a
                href="#home"
                whileHover={animations.socialHover}
                className="flex items-center space-x-2 p-3 bg-dune-gold/10 rounded-full hover:bg-dune-gold/20 transition-all duration-300 border border-dune-gold/30 text-dune-gold"
              >
                <Home size={20} />
                <span className="font-medium text-sm" style={{ fontFamily }}>
                  Home
                </span>
              </motion.a>
            </motion.div>

            {/* Right Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{
                    color: "#FF9E00",
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(255, 158, 0, 0.4)",
                  }}
                  className={`${styles.navLink} text-base font-medium text-dune-gold/80 hover:text-dune-gold transition-all duration-200 tracking-wider uppercase px-3 py-2 rounded-lg hover:bg-dune-gold/10`}
                  style={{ fontFamily }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-dune-gold hover:text-dune-gold/80 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            className="md:hidden overflow-hidden absolute top-full left-0 right-0 bg-dune-dark/98 backdrop-blur-lg border-t border-dune-gold/20 z-50 shadow-2xl"
          >
            <div className="py-4 px-6 space-y-4">
              {/* Mobile Home Link */}
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 text-base font-medium text-dune-gold/80 hover:text-dune-gold transition-all duration-200 tracking-wider uppercase px-3 py-2 rounded-lg hover:bg-dune-gold/10 hover:scale-105 hover:drop-shadow-lg"
                style={{ fontFamily }}
              >
                <Home size={16} />
                <span>Home</span>
              </a>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`${styles.navLink} block text-base font-medium text-dune-gold/80 hover:text-dune-gold transition-all duration-200 tracking-wider uppercase px-3 py-2 rounded-lg hover:bg-dune-gold/10 hover:scale-105 hover:drop-shadow-lg`}
                  style={{ fontFamily }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
