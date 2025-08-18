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
  name: "Chun Hin Chan",
  title: "Software Developer & Entrepreneur",
  location: "Hong Kong",
  profilePicture: "https://placehold.co/400x400.png",
  about:
    "A final-year Information Engineering student at CityU, I am deeply passionate about full-stack development and AI integration. With hands-on experience in IT support, STEM education, and AI-driven projects, I excel at solving complex problems. I am actively seeking a software engineering role where I can apply my skills to contribute to an innovative and forward-thinking team.",
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
    role: "Front-end/Backend Web App Developer Intern",
    company: "Pokeguide Limited",
    period: "Jun 2025 - Sep 2025",
    description:
      "Developed and maintained dynamic, responsive web and mobile applications using Next.js 15, React, and Expo, delivering seamless user experiences across platforms. Integrated Tailwind CSS for efficient, modern UI styling, ensuring consistent design and rapid development cycles. Built and optimized server-side rendered and static applications using Next.js App Router.",
  },
  {
    role: "Design & Marketing Intern",
    company: "RightPick Technology Limited",
    period: "Dec 2024 - Jan 2025",
    description:
      "Assisted in planning and executing digital marketing strategies to promote RightPick’s AI-driven JUPAS recommendation platform. Conducted research on emerging education and career trends to align campaigns with user needs. Created engaging social media content and analyzed performance metrics to optimize marketing efforts.",
  },
  {
    role: "STEM Tutor (Part-time)",
    company: "10Botics Limited | StemWork | SkyDream",
    period: "Feb 2024 - Present",
    description:
      "Conducted tutoring sessions in STEM subjects for diverse student groups, tailoring approaches to individual learning styles. Delivered interactive STEM content and workshops across more than 30 primary and secondary schools. Engaged in public speaking for audiences of over 500 students, promoting STEM education through fun, hands-on activities.",
  },
  {
    role: "IT Support Specialist Intern",
    company: "DACHSER",
    period: "Jun 2023 - Sep 2023",
    description:
      "Provided technical support across the Asia Pacific region, ensuring timely and effective issue resolution. Assisted in system and network maintenance, contributing to operational reliability and efficiency. Resolved technical issues and provided excellent customer service to internal clients, improving productivity and satisfaction.",
  },
];

export const education = [
  {
    institution: "City University of Hong Kong",
    degree: "Bachelor of Engineering in Information Engineering",
    period: "2023 – 2026",
    description: "",
  },
  {
    institution: "HKU SPACE Community College",
    degree: "Associate of Engineering",
    period: "2021 - 2023",
    description: "Major in Computer Science",
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