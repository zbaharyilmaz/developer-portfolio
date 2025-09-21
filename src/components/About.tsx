"use client";

import { motion } from "framer-motion";
import { Code, Heart, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code is my passion.",
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Creating intuitive and delightful user experiences.",
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Finding creative solutions to complex problems.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dune-dark relative overflow-hidden">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-56 h-56 bg-dune-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-dune-gold/8 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dune-gold font-display">
            About Me
          </h2>
          <p className="text-xl text-dune-sand/80 max-w-3xl mx-auto font-sans">
            Passionate developer crafting digital experiences with creativity
            and precision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-dune-gold mb-6">My Story</h3>
            <p className="text-dune-sand/80 leading-relaxed">
              With a solid background shaped by years of working with
              mathematics and algorithms, I bring strong problem-solving
              abilities and a passion for continuous learning to every project I
              work on. My journey is centered around frontend
              technologies—especially React and Next.js—where I focus on
              building responsive, user-friendly, and high-performing web
              applications.
            </p>
            <p className="text-dune-sand/80 leading-relaxed">
              I actively use CSS, Sass, Bootstrap, Material UI, Styled
              Components, and Tailwind CSS to craft clean and scalable
              interfaces. I believe that true quality lies in the details—both
              in code and in user experience. By keeping up with the latest
              tools, libraries, and best practices, I constantly strive to grow
              as a developer and deliver solutions that are not only functional
              but impactful.
            </p>
            <p className="text-dune-sand/80 leading-relaxed">
              This journey is far from over—each line of code is a step toward
              mastering the craft.
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                  viewport={{ once: true }}
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
                    <p className="text-dune-sand/80">{interest.description}</p>
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
