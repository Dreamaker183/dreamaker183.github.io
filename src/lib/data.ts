import {
  Code,
  Github,
  Globe,
  Linkedin,
  Server,
  Terminal,
} from "lucide-react";

import {
  FirebaseIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/icons";

export const personalData = {
  name: "Your Name",
  title: "Software Developer & Entrepreneur",
  location: "Hong Kong",
  profilePicture: "https://placehold.co/400x400.png",
  about:
    "I am a passionate software developer with a knack for building elegant solutions to complex problems. My expertise lies in full-stack development, with a focus on modern web technologies like React, Next.js, and Node.js. I'm also interested in stock trading, fitness, and emerging technologies, and I love exploring how technology can solve real-world challenges.",
  values: [
    "Continuous Learning",
    "User-Centric Design",
    "Code Quality",
    "Collaboration",
  ],
  socials: [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ],
};

export const skills = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "REST APIs", icon: Server },
  { name: "CLI Tools", icon: Terminal },
];

export const workExperience = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description:
      "Led the development of a high-traffic e-commerce platform using Next.js and TypeScript. Mentored junior developers and improved code quality by implementing a comprehensive testing strategy.",
  },
  {
    role: "Software Developer",
    company: "Innovate Co.",
    period: "2018 - 2020",
    description:
      "Developed and maintained client-facing web applications using React and Node.js. Collaborated with designers and product managers to deliver new features and enhance user experience.",
  },
];

export const education = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "2014 - 2018",
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "This personal portfolio, built with Next.js and Tailwind CSS, to showcase my skills and projects.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    imageUrl: "https://placehold.co/600x400.png",
    links: [
      { name: "Code", url: "#", icon: Code },
      { name: "Live", url: "#", icon: Globe },
    ],
    aiHint: "portfolio website",
  },
  {
    title: "E-commerce Platform",
    description:
      "A feature-rich online store with a custom CMS, payment gateway integration, and a responsive design.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://placehold.co/600x400.png",
    links: [
      { name: "Code", url: "#", icon: Code },
      { name: "Live", url: "#", icon: Globe },
    ],
    aiHint: "online store",
  },
  {
    title: "Stock Trading Bot",
    description:
      "An automated trading bot that uses algorithmic strategies to trade stocks on various exchanges.",
    tags: ["Python", "Pandas", "API Integration"],
    imageUrl: "https://placehold.co/600x400.png",
    links: [{ name: "Code", url: "#", icon: Code }],
    aiHint: "stock chart",
  },
  {
    title: "Fitness Tracker App",
    description:
      "A mobile-friendly application for tracking workouts, setting fitness goals, and monitoring progress over time.",
    tags: ["React Native", "Firebase", "Chart.js"],
    imageUrl: "https://placehold.co/600x400.png",
    links: [{ name: "Code", url: "#", icon: Code }],
    aiHint: "fitness app",
  },
];
