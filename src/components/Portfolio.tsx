"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { styles } from "@/utils/styles";
import { animations, viewport } from "@/hooks/useAnimations";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="portfolio"
      className="py-20 bg-dune-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className={styles.backgroundOrb}>
        <motion.div
          animate={animations.backgroundOrb1.animate}
          transition={animations.backgroundOrb1.transition}
          className="absolute top-1/5 left-1/6 w-64 h-64 bg-dune-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={animations.backgroundOrb2.animate}
          transition={animations.backgroundOrb2.transition}
          className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-dune-gold/8 rounded-full blur-2xl"
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
          <h2 className={styles.sectionTitle}>Portfolio</h2>
          <p className={`${styles.sectionSubtitle} text-center`}>
            A showcase of my recent projects and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={animations.staggerItem}
              whileHover={{ y: -10 }}
              className={`${styles.card} ${styles.cardHover} group`}
            >
              {/* Project Image */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden shadow-lg group-hover:shadow-dune-gold/20 transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-dune-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-dune-sand">
                  {project.title}
                </h3>
                <p className="text-dune-sand/80 leading-relaxed text-lg text-justify">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-dune-gold/10 to-dune-gold/5 text-dune-gold rounded-full text-sm border border-dune-gold/20 hover:from-dune-gold/20 hover:to-dune-gold/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={animations.hoverSmall}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-dune-gold/10 border border-dune-gold/30 rounded-lg text-dune-gold hover:bg-dune-gold/20 transition-colors text-sm sm:text-base"
                    aria-label={`View source code for ${project.title} (opens in new tab)`}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={animations.hoverSmall}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-dune-gold text-dune-dark rounded-lg hover:bg-dune-gold/90 transition-colors text-sm sm:text-base"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={viewport}
          className="text-center mb-16"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={animations.hover}
            whileTap={{ scale: 0.95 }}
            className={`${styles.primaryButton} inline-flex items-center gap-2`}
          >
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
            {showAll ? "Show Less" : "See More"}
          </motion.button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={viewport}
          className={`${styles.card} text-center`}
        >
          <h3 className="text-2xl font-bold text-dune-gold mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="text-dune-sand/80 mb-6 text-center">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
          <motion.a
            href="https://www.linkedin.com/in/zbaharyilmaz/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={animations.hover}
            className={`${styles.secondaryButton} inline-flex items-center gap-2`}
          >
            <ExternalLink size={20} />
            Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
