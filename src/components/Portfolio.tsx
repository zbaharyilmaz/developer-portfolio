"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: "💰 Split Smart",
      description:
        "A modern group expense sharing app built with Next.js — track, split, and settle your expenses with friends effortlessly.",
      image: "/projects/split-smart.gif",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/codEdu-Collective/split-smart",
      live: "https://split-smart-eight.vercel.app/",
      featured: true,
    },
    {
      title: "📈 Product Track Manager",
      description:
        "Track Your Stock, Boost Your Growth! Product Track Manager is a modern web application for managing product data, sales, purchases, and more. Built with React, Vite, Tailwind CSS, Redux, and Axios.",
      image: "/projects/product-track-manager.gif",
      technologies: ["React", "Vite", "Tailwind CSS", "Redux", "Axios"],
      github: "https://github.com/zbaharyilmaz/product-track-manager",
      live: "https://product-track-manager-app.netlify.app/",
      featured: true,
    },
    {
      title: "🎯 Fullstack Todo App",
      description:
        "This project is a Fullstack Todo application built with React for the frontend and Express (Node.js) for the backend. It uses SQLite and Sequelize ORM for persistent data storage.",
      image: "/projects/to-do-app.gif",
      technologies: ["React", "Express", "SQLite", "Sequelize"],
      github: "https://github.com/zbaharyilmaz/fullstack-todo-app",
      live: "#",
      featured: true,
    },
    {
      title: "⚡ Fullstack Task Manager",
      description:
        "A modern and user-friendly task management application. A web-based platform with admin and user roles that provides real-time updates. Built with React, TypeScript, Express, MongoDB.",
      image: "/projects/task-manager.png",
      technologies: ["React", "TypeScript", "Express", "MongoDB"],
      github: "https://github.com/zbaharyilmaz/fullstack-task-manager",
      live: "#",
      featured: true,
    },
    {
      title: "🧠 Mental Health App",
      description:
        "A web application designed to help individuals manage their mental health by providing a platform for booking appointments with psychologists. The app allows users to view available psychologists and track appointments.",
      image: "/projects/mental-health-app.gif",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/zbaharyilmaz/mental-health-app",
      live: "https://zbaharyilmaz.github.io/mental-health-app/",
      featured: true,
    },
    {
      title: "🎬 TS Dune Movie Website",
      description:
        "A modern, responsive website dedicated to the Dune movie franchise built with React, TypeScript, and Sass. Features interactive trailers, multi-page navigation, smooth animations, and a dark theme with gold accents.",
      image: "/projects/dune-website.gif",
      technologies: ["React", "TypeScript", "Sass", "Framer Motion"],
      github: "https://github.com/zbaharyilmaz/ts-dune-movie-website",
      live: "#",
      featured: true,
    },
    {
      title: "🎬 Watch Hub App",
      description:
        "Your Ultimate Entertainment Hub! Watch Hub is a modern, full-stack entertainment discovery app built with Next.js 15, featuring authentication, dark mode, and a beautiful user interface.",
      image: "/projects/watch-hub.png",
      technologies: ["Next.js 15", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/zbaharyilmaz/watch-hub-app",
      live: "#",
      featured: false,
    },
    {
      title: "💼 Shift Cycle Management App",
      description:
        "Effortlessly manage shifts and cycles! ShiftCycle Management App is a modern frontend application designed to efficiently manage shift and cycle operations with user-friendly interface.",
      image: "/projects/shift-cycle-app.gif",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      github: "https://github.com/zbaharyilmaz/shift-cycle-management-app",
      live: "#",
      featured: false,
    },
    {
      title: "💻 TS ZeTech Page",
      description:
        "A modern corporate website for ZeTech technology education platform built with React, TypeScript, and Bootstrap 5. Features responsive design, orange gradient theme, and parallax effects.",
      image: "/projects/zetech.gif",
      technologies: ["React", "TypeScript", "Bootstrap 5", "Sass"],
      github: "https://github.com/zbaharyilmaz/ts-zetech-page",
      live: "#",
      featured: false,
    },
    {
      title: "🎮 Node.js Game Store",
      description:
        "Your Ultimate Game Store! Game Grid which is built with Express.js, EJS, and Bootstrap offers a smooth and responsive experience for all gamers. Browse a wide catalog of both free and paid games.",
      image: "/projects/nodejs-game-store.gif",
      technologies: ["Express.js", "EJS", "Bootstrap", "Node.js"],
      github: "https://github.com/zbaharyilmaz/node.js-game-store",
      live: "#",
      featured: false,
    },
    {
      title: "⏰ Next Tick Tasks",
      description:
        "Tick it off, keep it simple. Tick Tasks is a modern full-stack Todo app built with the latest technologies like Next.js, MongoDB, Zustand and Prisma ORM.",
      image: "/projects/tick-tasks-demo.gif",
      technologies: ["Next.js", "MongoDB", "Zustand", "Prisma"],
      github: "https://github.com/zbaharyilmaz/next-tick-tasks",
      live: "https://next-tick-tasks.vercel.app/",
      featured: false,
    },
    {
      title: "🎮 Hypergames",
      description:
        "Where Gamers Meet! HYPERGAMES is an online platform constructed with React, Tailwind CSS and Firebase. It allows gamers to buy video games, including both classic and new releases.",
      image: "/projects/hyper-games.gif",
      technologies: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
      github: "https://github.com/zbaharyilmaz/hypergames",
      live: "#",
      featured: false,
    },
    {
      title: "🎬 Cineflix App",
      description:
        "Flix Your Movie Night! Cineflix is your gateway to a vast world of movies! Search, explore, and discover movie details, ratings, and more in a sleek, user-friendly interface.",
      image: "/projects/cineflix.gif",
      technologies: ["React", "Tailwind CSS", "Firebase", "Axios"],
      github: "https://github.com/zbaharyilmaz/cineflix-app",
      live: "https://cineflix-app-gilt.vercel.app/",
      featured: false,
    },
    {
      title: "💼 Portfolio Boyd Sass",
      description:
        "A personal portfolio homepage showcasing the skills and projects of a Full Stack Web Developer, built using the SASS 7-1 Pattern. Includes responsive design with navigation to different sections.",
      image: "/projects/boyd-stevens.png",
      technologies: ["Sass", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/codEdu-Collective/portfolio-boyd-sass",
      live: "https://codedu-collective.github.io/portfolio-boyd-sass/",
      featured: false,
    },
    {
      title: "📝 NextJS Todo App",
      description:
        "A modern Todo app built with Next.js 15 and React 19, featuring Material-UI components, Emotion styling, ESLint code quality, and Cypress testing.",
      image: "/projects/ts-todo-app.png",
      technologies: ["Next.js 15", "React 19", "Material-UI", "Cypress"],
      github: "https://github.com/codEdu-Collective/nextjs-todo-app",
      live: "https://nextjs-todo-app.vercel.app",
      featured: false,
    },
    {
      title: "☕ Cafebahz",
      description:
        "Modern Coffee Shop Website - Welcome to Cafebahz, a beautifully designed, responsive coffee shop website that brings the warmth and charm of a local café to the digital world!",
      image: "/projects/cafebahz.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/zbaharyilmaz/cafebahz",
      live: "https://cafebahz.vercel.app",
      featured: false,
    },
    {
      title: "🔢 Guess Secret Number Game",
      description:
        "Guess The Secret Number Game - Project aims to create find the number game (between 0 to 100). A fun and interactive guessing game with modern UI.",
      image: "/projects/number-game.gif",

      technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      github: "https://github.com/zbaharyilmaz/guess-secret-number-game",
      live: "https://zbaharyilmaz.github.io/guess-secret-number-game/",
      featured: false,
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section
      id="portfolio"
      className="py-20 bg-dune-dark relative overflow-hidden"
    >
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 90, 0],
            y: [0, -70, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/5 left-1/6 w-64 h-64 bg-dune-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -110, 0],
            y: [0, 90, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-dune-gold/8 rounded-full blur-2xl"
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
            My Works
          </h2>
          <p className="text-xl text-dune-sand/80 max-w-3xl mx-auto font-sans">
            A collection of projects that showcase my skills and passion for
            development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 rounded-xl overflow-hidden border border-dune-gold/20 hover:border-dune-gold/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-dune-gold/10 to-dune-gold/5 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 size={48} className="text-dune-gold/30" />
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-dune-gold text-dune-dark text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dune-gold mb-3 group-hover:text-dune-gold/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dune-sand/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dune-gold/10 text-dune-gold text-xs rounded-full border border-dune-gold/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-dune-gold/10 text-dune-gold rounded-lg hover:bg-dune-gold/20 transition-colors text-sm font-medium border border-dune-gold/20"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  {project.live && project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-dune-gold text-dune-dark rounded-lg hover:bg-dune-gold/90 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && allProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-dune-gold/10 text-dune-gold rounded-full font-medium hover:bg-dune-gold/20 transition-all duration-300 font-sans border border-dune-gold/20"
            >
              <span>Show More Projects</span>
              <ChevronDown size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 rounded-xl p-8 border border-dune-gold/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dune-gold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-dune-sand/80 mb-6">
              I&apos;m always excited to take on new challenges and create
              amazing projects. Let&apos;s discuss how we can bring your ideas
              to life!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-dune-gold text-dune-dark rounded-full font-medium hover:bg-dune-gold/90 transition-all duration-300 font-sans"
            >
              <span>Get In Touch</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
