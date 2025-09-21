import { Code, Heart, Coffee, Lightbulb } from "lucide-react";

export interface Interest {
  icon: typeof Code;
  title: string;
  description: string;
}

export const interests: Interest[] = [
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
