export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const projects: Project[] = [
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
      "A modern movie and TV show discovery app built with React and TypeScript. Features include search functionality, movie details, watchlists, and responsive design.",
    image: "/projects/watch-hub.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    github: "https://github.com/zbaharyilmaz/watch-hub-app",
    live: "#",
    featured: false,
  },
  {
    title: "🎮 Hyper Games Store",
    description:
      "A modern gaming platform built with React and Node.js. Features game browsing, user authentication, shopping cart, and payment integration.",
    image: "/projects/hyper-games.gif",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/zbaharyilmaz/hyper-games-store",
    live: "#",
    featured: false,
  },
  {
    title: "🎬 CineFlix App",
    description:
      "A movie streaming platform built with React and Firebase. Features include movie browsing, user profiles, watchlists, and real-time updates.",
    image: "/projects/cineflix.gif",
    technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
    github: "https://github.com/zbaharyilmaz/cineflix-app",
    live: "#",
    featured: false,
  },
  {
    title: "🏪 Node.js Game Store",
    description:
      "A full-stack gaming e-commerce platform built with Node.js, Express, and MongoDB. Features include user authentication, product management, and order processing.",
    image: "/projects/nodejs-game-store.gif",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/zbaharyilmaz/nodejs-game-store",
    live: "#",
    featured: false,
  },
  {
    title: "📊 Photo Contest Rankings",
    description:
      "A dynamic photo contest application with real-time rankings and voting system. Built with React and Firebase for instant updates.",
    image: "/projects/photo-contest-rankings.gif",
    technologies: ["React", "Firebase", "Tailwind CSS", "Real-time DB"],
    github: "https://github.com/zbaharyilmaz/photo-contest-rankings",
    live: "#",
    featured: false,
  },
  {
    title: "🔄 Shift Cycle App",
    description:
      "A work shift management application for tracking employee schedules and shift rotations. Built with React and local storage.",
    image: "/projects/shift-cycle-app.gif",
    technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
    github: "https://github.com/zbaharyilmaz/shift-cycle-app",
    live: "#",
    featured: false,
  },
  {
    title: "✅ Tick Tasks Demo",
    description:
      "A simple and elegant task management application with drag-and-drop functionality and progress tracking.",
    image: "/projects/tick-tasks-demo.gif",
    technologies: ["React", "JavaScript", "CSS3", "Drag & Drop"],
    github: "https://github.com/zbaharyilmaz/tick-tasks-demo",
    live: "#",
    featured: false,
  },
  {
    title: "🎯 TypeScript Todo App",
    description:
      "A modern todo application built with TypeScript and React. Features include type safety, local storage, and clean UI design.",
    image: "/projects/ts-todo-app.png",
    technologies: ["React", "TypeScript", "CSS3", "Local Storage"],
    github: "https://github.com/zbaharyilmaz/ts-todo-app",
    live: "#",
    featured: false,
  },
  {
    title: "🏢 Boyd Stevens Website",
    description:
      "A professional business website for Boyd Stevens company. Features modern design, responsive layout, and contact forms.",
    image: "/projects/boyd-stevens.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/zbaharyilmaz/boyd-stevens-website",
    live: "#",
    featured: false,
  },
  {
    title: "☕ Cafe Bahz Website",
    description:
      "A beautiful cafe website with menu display, location information, and contact details. Built with modern web technologies.",
    image: "/projects/cafebahz.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/zbaharyilmaz/cafe-bahz-website",
    live: "#",
    featured: false,
  },
  {
    title: "🔢 Number Game",
    description:
      "An interactive number guessing game with multiple difficulty levels and scoring system. Built with vanilla JavaScript.",
    image: "/projects/number-game.gif",
    technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
    github: "https://github.com/zbaharyilmaz/number-game",
    live: "https://zbaharyilmaz.github.io/guess-secret-number-game/",
    featured: false,
  },
];
