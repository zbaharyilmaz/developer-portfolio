"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/data/technologies";
import { styles } from "@/utils/styles";
import { animations, viewport } from "@/hooks/useAnimations";

const Tech = () => {
  return (
    <section id="tech" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className={styles.backgroundOrb}>
        <motion.div
          animate={animations.backgroundOrb1.animate}
          transition={animations.backgroundOrb1.transition}
          className="absolute top-1/4 left-1/5 w-72 h-72 bg-dune-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={animations.backgroundOrb2.animate}
          transition={animations.backgroundOrb2.transition}
          className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-dune-gold/8 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={animations.fadeInUp.initial}
          whileInView={animations.fadeInUp.animate}
          transition={animations.fadeInUp.transition}
          viewport={viewport}
          className="text-center mb-16"
        >
          <h2 className={styles.sectionTitle}>Technologies</h2>
          <p className={`${styles.sectionSubtitle} text-center`}>
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={viewport}
              className={`${styles.card} ${styles.cardHover}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-dune-gold/10 rounded-full">
                  <category.icon size={24} className="text-dune-gold" />
                </div>
                <h3 className="text-xl font-bold text-dune-gold">
                  {category.title}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                    viewport={viewport}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-dune-sand font-medium text-base">
                        {tech.name}
                      </span>
                      <span className="text-dune-gold/80 text-sm">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: techIndex * 0.05 }}
                        viewport={viewport}
                        className="bg-dune-gold h-1.5 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={viewport}
          className="mt-16 text-center"
        >
          <div className={`${styles.card} max-w-4xl mx-auto`}>
            <h3 className="text-2xl font-bold text-dune-gold mb-4">
              Always Learning
            </h3>
            <p className={`${styles.bodyText} text-center`}>
              Technology evolves rapidly, and so do I. I&apos;m constantly
              exploring new frameworks, tools, and methodologies to stay at the
              forefront of web development. My passion for learning drives me to
              experiment with cutting-edge technologies and share knowledge with
              the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
