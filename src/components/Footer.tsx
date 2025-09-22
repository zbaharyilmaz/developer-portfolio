"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { quickLinks } from "@/data/navigation";
import { styles } from "@/utils/styles";
import { animations, viewport } from "@/hooks/useAnimations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/zbaharyilmaz",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zbaharyilmaz/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <footer className="bg-black border-t border-dune-gold/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className={styles.backgroundOrb}>
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-dune-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-dune-gold/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-dune-gold/20 font-mono text-xs"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 400),
              opacity: 0,
            }}
            animate={{
              y: [null, -150],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
            style={{
              transform: `translateZ(${Math.random() * 50}px)`,
            }}
          >
            {[
              "npm install",
              "git commit",
              "deploy",
              "build",
              "start",
              "dev",
              "test",
              "lint",
            ].map((code, idx) => (
              <div key={idx} className="mb-1 opacity-50">
                {code}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={viewport}
            className="space-y-2"
          >
            <h3 className={styles.footerBrandTitle}>BAHAR TURKSOY</h3>
            <p className={`${styles.footerText} leading-relaxed text-justify`}>
              Full Stack Developer crafting modern web experiences with passion
              and precision.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={viewport}
                  whileHover={animations.socialHover}
                  className={`p-2 bg-dune-gold/10 rounded-full hover:bg-dune-gold/20 transition-all duration-300 border border-dune-gold/30 text-dune-gold ${social.color}`}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={viewport}
            className="space-y-2 text-center"
          >
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={viewport}
                >
                  <a
                    href={link.href}
                    className="text-dune-gold/80 hover:text-dune-gold transition-colors block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={viewport}
            className="space-y-2 text-right"
          >
            <h4 className={styles.footerTitle}>Get In Touch</h4>
            <div className="space-y-2">
              <p className={`${styles.footerText} text-right`}>
                Ready to work together?
              </p>
              <motion.a
                href="https://www.linkedin.com/in/zbaharyilmaz/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-3 sm:px-4 py-2 bg-dune-gold text-dune-dark rounded-full font-medium hover:bg-dune-gold/90 transition-all duration-300 text-sm sm:text-base ml-auto"
              >
                <Linkedin size={14} className="mr-2 text-black" />
                Connect
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={viewport}
          className="border-t border-dune-gold/20 mt-6 pt-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-dune-gold/60 text-base text-justify">
              © {currentYear} Bahar Turksoy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <motion.a
                href="https://github.com/zbaharyilmaz/developer-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-dune-gold/60 hover:text-dune-gold transition-colors"
              >
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
