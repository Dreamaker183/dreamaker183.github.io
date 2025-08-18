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
  PythonIcon,
  CppIcon,
  CIcon,
  JavaIcon,
  SqlIcon,
  SwiftIcon,
  LinuxIcon,
  ExpoIcon,
  FigmaIcon,
  AltiumIcon,
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
  { name: "Python", icon: PythonIcon },
  { name: "C++", icon: CppIcon },
  { name: "C", icon: CIcon },
  { name: "Java", icon: JavaIcon },
  { name: "SQL", icon: SqlIcon },
  { name: "Swift", icon: SwiftIcon },
  { name: "Linux", icon: LinuxIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Expo", icon: ExpoIcon },
  { name: "React Native", icon: ReactIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Altium PCB Design", icon: AltiumIcon },
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
    title: "Consensual Movements of Multiple Autonomous Agents (FYP)",
    description:
      "Final Year Project at City University of Hong Kong focusing on the coordinated movements of autonomous agents.",
    tags: ["MATLAB"],
    links: [{ name: "Code", url: "#", icon: Github }],
  },
  {
    title: "Fittix - AI Dressing App",
    description:
      "A startup project developing an AI-powered dressing app. My role included UX/UI design in Figma, full-stack development using React Native and Python, and integrating AI with ComfyUI. The project was submitted to HK Challenge Plus 2024 and IET YPEC 2024.",
    tags: ["Figma", "React Native", "Python", "Stable Diffusion", "ComfyUI"],
    links: [{ name: "Code", url: "#", icon: Github }],
  },
  {
    title: "Current+ - Smart Power SaaS",
    description:
      "An innovative power subscription platform that optimizes energy consumption through smart, flexible, and cost-effective solutions using AI-driven analytics. My contributions were primarily in mobile app development using Swift and creating interactive 3D visualizations with Spline.",
    tags: ["Swift", "Spline", "Arduino", "SaaS"],
    links: [{ name: "Code", url: "#", icon: Github }],
  },
  {
    title: "Portfolio Website",
    description:
      "This personal portfolio, built with Next.js and Tailwind CSS, to showcase my skills and projects.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    links: [
      { name: "Code", url: "#", icon: Github },
    ],
  },
];
