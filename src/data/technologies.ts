import { Code2, Database, Cloud, Palette } from "lucide-react";

export interface Technology {
  name: string;
  level: number;
}

export interface TechCategory {
  icon: typeof Code2;
  title: string;
  color: string;
  technologies: Technology[];
}

export const techCategories: TechCategory[] = [
  {
    icon: Code2,
    title: "Core",
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
    title: "Backend & Database",
    color: "text-green-400",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Prisma", level: 75 },
      { name: "NextAuth.js", level: 70 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "Mongoose", level: 75 },
      { name: "REST API", level: 85 },
      { name: "Firebase Auth", level: 70 },
    ],
  },
  {
    icon: Palette,
    title: "Styling & UI",
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
    title: "Tools & Workflow",
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
