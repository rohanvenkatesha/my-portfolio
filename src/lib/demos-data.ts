import { PlayCircle } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export type Demo = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const demos: Demo[] = [
  {
    title: "AI Resume Analyzer",
    description: "See how well a resume matches a job description.",
    href: "/projects/resume-analyzer",
    icon: PlayCircle,
  },
  // {
  //   title: "AI Portfolio Chatbot",
  //   description: "Ask an AI assistant questions about me.",
  //   href: "/#", // Link to the chatbot
  //   icon: Bot,
  // },
  // When you add more demos, just add a new object here!
];