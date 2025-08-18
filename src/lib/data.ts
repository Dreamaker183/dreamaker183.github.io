import { Code, Github, Globe, Linkedin, Server, Terminal } from "lucide-react";
import { FigmaIcon } from "@/components/icons";


export const personalData = {
  name: "Anson Chan",
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
  { name: "Python", iconUrl: "https://cdn.simpleicons.org/python", url: "https://www.python.org/" },
  { name: "C++", iconUrl: "https://cdn.simpleicons.org/cplusplus", url: "https://isocpp.org/" },
  { name: "C", iconUrl: "https://cdn.simpleicons.org/c", url: "https://www.open-std.org/jtc1/sc22/wg14/" },
  { name: "Java", iconUrl: "https://cdn.simpleicons.org/openjdk", url: "https://www.oracle.com/java/" },
  { name: "SQL", iconUrl: "https://cdn.simpleicons.org/mysql", url: "https://www.mysql.com/" },
  { name: "Swift", iconUrl: "https://cdn.simpleicons.org/swift", url: "https://www.swift.org/" },
  { name: "Linux", iconUrl: "https://cdn.simpleicons.org/linux", url: "https://www.kernel.org/" },
  { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs", url: "https://nextjs.org/" },
  { name: "Expo", iconUrl: "https://cdn.simpleicons.org/expo", url: "https://expo.dev/" },
  { name: "React Native", iconUrl: "https://cdn.simpleicons.org/react", url: "https://reactnative.dev/" },
  { name: "Figma", iconUrl: "https://cdn.simpleicons.org/figma", url: "https://www.figma.com/" },
  { name: "Altium PCB Design", iconUrl: "https://cdn.simpleicons.org/altiumdesigner", url: "https://www.altium.com/altium-designer" },
] as const;

export const workExperience = [
  {
    role: "Front-end/Backend Web App Developer Intern",
    company: "Pokeguide Limited",
    period: "Jun 2025 - Sep 2025",
    iconUrl: "https://api.iconify.design/lucide/code-2.svg",
    logoUrl: "/image/pokeguide.png",
    url: "https://www.pokeguide.com/",
    description:
      "Developed and maintained dynamic, responsive web and mobile applications using Next.js 15, React, and Expo, delivering seamless user experiences across platforms. Integrated Tailwind CSS for efficient, modern UI styling, ensuring consistent design and rapid development cycles. Built and optimized server-side rendered and static applications using Next.js App Router.",
  },
  {
    role: "Design & Marketing Intern",
    company: "RightPick Technology Limited",
    period: "Dec 2024 - Jan 2025",
    iconUrl: "https://api.iconify.design/lucide/megaphone.svg",
    logoUrl: "/image/RightPick.jpeg",
    url: "https://rightpickhk.com/",
    description:
      "Assisted in planning and executing digital marketing strategies to promote RightPick’s AI-driven JUPAS recommendation platform. Conducted research on emerging education and career trends to align campaigns with user needs. Created engaging social media content and analyzed performance metrics to optimize marketing efforts.",
  },
  {
    role: "STEM Tutor (Part-time)",
    company: "10Botics Limited | StemWork | SkyDream",
    period: "Feb 2024 - Present",
    iconUrl: "https://api.iconify.design/lucide/book-open.svg",
    logoUrl: "/image/10botics_logo.jpeg",
    url: "https://10botics.com/",
    description:
      "Conducted tutoring sessions in STEM subjects for diverse student groups, tailoring approaches to individual learning styles. Delivered interactive STEM content and workshops across more than 30 primary and secondary schools. Engaged in public speaking for audiences of over 500 students, promoting STEM education through fun, hands-on activities.",
  },
  {
    role: "IT Support Specialist Intern",
    company: "DACHSER",
    period: "Jun 2023 - Sep 2023",
    iconUrl: "https://api.iconify.design/lucide/server.svg",
    logoUrl: "/image/dachser.png",
    url: "https://www.dachser.com/en/",
    description:
      "Provided technical support across the Asia Pacific region, ensuring timely and effective issue resolution. Assisted in system and network maintenance, contributing to operational reliability and efficiency. Resolved technical issues and provided excellent customer service to internal clients, improving productivity and satisfaction.",
  },
];

export const education = [
  {
    institution: "City University of Hong Kong",
    degree: "Bachelor of Engineering in Information Engineering",
    period: "2023 – 2026",
    iconUrl: "https://api.iconify.design/lucide/graduation-cap.svg",
    logoUrl: "/image/Cityu.jpg",
    url: "https://www.cityu.edu.hk/",
    description: "",
  },
  {
    institution: "HKU SPACE Community College",
    degree: "Associate of Engineering, Major in Computer Science",
    period: "2021 - 2023",
    iconUrl: "https://api.iconify.design/lucide/graduation-cap.svg",
    logoUrl: "/image/HKUSPACE.jpeg",
    url: "https://hkuspace.hku.hk/",
    description: "",
  },
];

export const projects = [
  {
    title: "Consensual Movements of Multiple Autonomous Agents (FYP)",
    description:
      "Final Year Project at City University of Hong Kong focusing on the coordinated movements of autonomous agents.",
    tags: ["MATLAB"],
    links: [],
    comingSoon: true,
  },
  {
    title: "Fittix - AI Dressing App",
    description:
      "A startup project developing an AI-powered dressing app. My role included UX/UI design in Figma, full-stack development using React Native and Python, and integrating AI with ComfyUI. The project was submitted to HK Challenge Plus 2024 and IET YPEC 2024.",
    tags: ["Figma", "React Native", "Python", "Stable Diffusion", "ComfyUI"],
    links: [
      { name: "GitHub", url: "#", icon: Github },
      { name: "Figma", url: "#", icon: FigmaIcon },
    ],
  },
  {
    title: "Current+ - Smart Power SaaS",
    description:
      "An innovative power subscription platform that optimizes energy consumption through smart, flexible, and cost-effective solutions using AI-driven analytics. My contributions were primarily in mobile app development using Swift and creating interactive 3D visualizations with Spline.",
    tags: ["Swift", "Spline", "Arduino", "SaaS"],
    links: [{ name: "GitHub", url: "#", icon: Github }],
  },
  {
    title: "Portfolio Website",
    description:
      "This personal portfolio, built with Next.js and Tailwind CSS, to showcase my skills and projects.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    links: [{ name: "GitHub", url: "#", icon: Github }],
  },
];
