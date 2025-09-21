"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { styles, fontFamily } from "@/utils/styles";
import { animations } from "@/hooks/useAnimations";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Dune Dark Background */}
      <div className="absolute inset-0 bg-dune-dark" />

      {/* Parallax Layer 1 - Dark Overlay */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"
      />

      {/* Parallax Layer 2 - Atmospheric Fog */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
        className="absolute inset-0 bg-gradient-to-t from-custom-green/50 via-transparent to-custom-green/40"
      />

      {/* Parallax Layer 3 - Subtle Texture */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"
      />

      {/* Floating Code Particles with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-custom-orange/15 font-mono text-xs"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              y: [null, -200],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
            style={{
              transform: `translateZ(${Math.random() * 100}px)`,
            }}
          >
            {[
              "<div>",
              "</div>",
              "{ }",
              "const",
              "function",
              "return",
              "React",
              "Next.js",
              "TypeScript",
            ].map((code, idx) => (
              <div key={idx} className="mb-1 opacity-50">
                {code}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Magical Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -150, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-custom-orange/10 to-custom-orange/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 200, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-custom-orange/8 to-custom-orange/3 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-custom-orange/10 to-custom-orange/5 rounded-full blur-lg"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center max-w-5xl mx-auto px-6"
      >
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold mb-8 text-dune-gold drop-shadow-2xl"
          style={{ fontFamily }}
        >
          BAHAR TURKSOY
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-4xl text-dune-sand mb-16 font-light tracking-wider drop-shadow-lg"
          style={{ fontFamily }}
        >
          Full Stack Development
        </motion.p>

        {/* Magical CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.a
            href="#portfolio"
            whileHover={animations.hover}
            whileTap={{ scale: 0.95 }}
            className={styles.primaryButton}
            style={{ fontFamily }}
          >
            🚀 Explore Projects
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/zbaharyilmaz/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={animations.hover}
            whileTap={{ scale: 0.95 }}
            className={styles.secondaryButton}
            style={{ fontFamily }}
          >
            💬 Let&apos;s Connect
          </motion.a>
        </motion.div>

        {/* Magical Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <motion.a
            whileHover={animations.socialHover}
            href="https://github.com/zbaharyilmaz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <Github size={28} className="text-custom-orange" />
          </motion.a>
          <motion.a
            whileHover={animations.socialHoverReverse}
            href="https://www.linkedin.com/in/zbaharyilmaz/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <Linkedin size={28} className="text-custom-orange" />
          </motion.a>
        </motion.div>

        {/* Magical Scroll Indicator */}
      </motion.div>
    </section>
  );
};

export default Hero;
