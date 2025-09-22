"use client";

import { motion } from "framer-motion";
import { interests } from "@/data/about";
import { styles } from "@/utils/styles";
import { animations, viewport } from "@/hooks/useAnimations";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dune-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className={styles.backgroundOrb}>
        <motion.div
          animate={animations.backgroundOrb1.animate}
          transition={animations.backgroundOrb1.transition}
          className="absolute top-1/3 right-1/4 w-56 h-56 bg-dune-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={animations.backgroundOrb2.animate}
          transition={animations.backgroundOrb2.transition}
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-dune-gold/8 rounded-full blur-2xl"
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
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionSubtitle}>
            Passionate developer crafting digital experiences with creativity
            and precision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div
            initial={animations.fadeInLeft.initial}
            whileInView={animations.fadeInLeft.animate}
            transition={animations.fadeInLeft.transition}
            viewport={viewport}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-dune-gold mb-6">My Story</h3>
            <p className={`${styles.bodyText} text-justify text-dune-sand`}>
              With a solid background shaped by years of working with
              mathematics and algorithms, I bring strong problem-solving
              abilities and a passion for continuous learning to every project I
              work on. My journey is centered around frontend
              technologies—especially React and Next.js—where I focus on
              building responsive, user-friendly, and high-performing web
              applications.
            </p>
            <p className={`${styles.bodyText} text-justify text-dune-sand`}>
              I actively work with modern technologies such as React,
              JavaScript, TypeScript, Next.js, Tailwind CSS, Prisma, NextAuth,
              MongoDB, Express.js, Material UI, Formik, Yup, Zod, Zustand,
              Redux, REST API, Firebase, Sass, Bootstrap, HTML5, and CSS3 to
              build clean, scalable, and high-performance web applications. I
              believe that true quality lies in the details—both in code and in
              user experience. By keeping up with the latest tools, libraries,
              and best practices, I constantly strive to grow as a developer and
              deliver solutions that are not only functional but impactful.
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={animations.fadeInRight.initial}
            whileInView={animations.fadeInRight.animate}
            transition={animations.fadeInRight.transition}
            viewport={viewport}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-dune-gold mb-6">
              What Drives Me
            </h3>
            <div className="grid gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={viewport}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-dune-gold/20 hover:border-dune-gold/50 transition-all duration-300"
                >
                  <div className="p-3 bg-dune-gold/10 rounded-full">
                    <interest.icon size={24} className="text-dune-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dune-sand mb-2">
                      {interest.title}
                    </h4>
                    <p className={styles.bodyTextSmall}>
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
