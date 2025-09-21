export interface NavItem {
  name: string;
  href: string;
}

import { LucideIcon } from "lucide-react";

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export interface QuickLink {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Tech", href: "#tech" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export const quickLinks: QuickLink[] = [
  { name: "About", href: "#about" },
  { name: "Tech", href: "#tech" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];
