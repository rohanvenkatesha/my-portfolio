import { Layers, Database, Cloud, BrainCircuit, type LucideIcon } from 'lucide-react';

// --- TYPE DEFINITIONS ---
export type Skill = {
  name: string;
  logo: string;
};

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
};

// --- SKILLS DATA ---
export const skillsData: SkillCategory[] = [
    {
    name: "Frontend",
    icon: Layers,
    skills: [
      { name: "React.js", logo: "/icons/react.png" },
      { name: "Next.js", logo: "/icons/next.png" },
      { name: "TypeScript", logo: "/icons/ts.png" },
      { name: "JavaScript", logo: "/icons/js.png" },
      { name: "Framer Motion", logo: "/icons/framer.png" },
    ],
  },
  {
    name: "Backend",
    icon: Database,
    skills: [
      { name: "Python", logo: "/icons/python.png" },
      { name: "Node.js", logo: "/icons/node-js.png" },
      { name: "Java", logo: "/icons/java.png" },
      { name: "Django", logo: "/icons/django.png" },
      { name: "FastAPI", logo: "/icons/fastapi.png" },
      { name: "PostgreSQL", logo: "/icons/postgre.png" },
      { name: "MySQL", logo: "/icons/mysql.png" },
      { name: "MongoDB", logo: "/icons/mongodb.png" },
    ],
  },
  {
    name: "AI/ML",
    icon: BrainCircuit,
    skills: [
      { name: "PyTorch", logo: "/icons/pytorch.png" },
      { name: "TensorFlow", logo: "/icons/tensorflow.png" },
      { name: "Scikit-learn", logo: "/icons/scikit.png" },
      { name: "Pandas", logo: "/icons/pandas.png" },
      { name: "NumPy", logo: "/icons/numpy.png" },
      { name: "OpenCV", logo: "/icons/opencv.png" },
      { name: "NLP", logo: "/icons/nlp.png" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: Cloud,
    skills: [
      { name: "AWS", logo: "/icons/aws.png" },
      { name: "Docker", logo: "/icons/docker.png" },
      { name: "Git", logo: "/icons/git.png" },
      { name: "Jenkins", logo: "/icons/jenkins.png" },
    //   { name: "Terraform", logo: "/icons/terraform.png" },
      { name: "Shell Scripting", logo: "/icons/shellscript.png" },
      { name: "JIRA", logo: "/icons/jira.png" },
    ],
  },
];