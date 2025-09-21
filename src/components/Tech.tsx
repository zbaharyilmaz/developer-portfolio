"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Palette } from "lucide-react";

const Tech = () => {
  const techCategories = [
    {
      icon: Code2,
      title: "⚛️ Core",
      color: "text-blue-400",
      technologies: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "React Router", level: 80 },
        { name: "Context API", level: 85 },
        { name: "Redux", level: 75 },
        { name: "Redux Toolkit", level: 80 },
        { name: "Custom Hooks", level: 85 },
        { name: "Formik", level: 70 },
        { name: "Yup", level: 75 },
        { name: "React Hook Form", level: 80 },
      ],
    },
    {
      icon: Database,
      title: "⚙️ Backend & Database",
      color: "text-green-400",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Prisma", level: 75 },
        { name: "NextAuth.js", level: 70 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "Mongoose", level: 75 },
        { name: "Python", level: 65 },
        { name: "REST API", level: 85 },
        { name: "Firebase Auth", level: 70 },
      ],
    },
    {
      icon: Palette,
      title: "🎨 Styling & UI",
      color: "text-purple-400",
      technologies: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 75 },
        { name: "Bootstrap", level: 80 },
        { name: "React Bootstrap", level: 70 },
        { name: "CSS3", level: 85 },
        { name: "Styled Components", level: 75 },
        { name: "Sass", level: 70 },
      ],
    },
    {
      icon: Cloud,
      title: "🧰 Tools & Workflow",
      color: "text-orange-400",
      technologies: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 },
        { name: "npm", level: 90 },
        { name: "Yarn", level: 85 },
        { name: "pnpm", level: 80 },
        { name: "Thunder", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "Netlify", level: 80 },
        { name: "Docker", level: 70 },
        { name: "ESLint", level: 85 },
        { name: "PostCSS", level: 75 },
      ],
    },
  ];

  return (
    <section id="tech" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/5 w-72 h-72 bg-dune-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-dune-gold/8 rounded-full blur-2xl"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dune-gold font-retro">
            Technologies
          </h2>
          <p className="text-xl text-dune-sand/80 max-w-3xl mx-auto font-mono">
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
              viewport={{ once: true }}
              className="bg-white/10 rounded-xl p-6 border border-dune-gold/20 hover:border-dune-gold/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-dune-gold/10 rounded-full">
                  <category.icon size={24} className={`text-dune-gold`} />
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
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-dune-sand font-medium text-sm">
                        {tech.name}
                      </span>
                      <span className="text-dune-gold/80 text-xs">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
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
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 rounded-xl p-8 border border-dune-gold/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dune-gold mb-4">
              Always Learning
            </h3>
            <p className="text-dune-sand/80 leading-relaxed">
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
