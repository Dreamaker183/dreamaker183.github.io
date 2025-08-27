import { Code, Github, Globe, Linkedin, Server, Terminal } from "lucide-react";


export const personalData = {
  name: "Anson Chan",
  title: "Software Developer & IT Consultant",
  location: "Hong Kong",
  profilePicture: "/image/Screenshot 2025-08-19 at 12.36.18 AM.png",
  about:
    "A final-year Information Engineering student at CityU, I am deeply passionate about full-stack development and AI integration. With hands-on experience in IT support, STEM education, and AI-driven projects, I excel at solving complex problems. I am actively seeking a software engineering role where I can apply my skills to contribute to an innovative and forward-thinking team.",
  socials: [
    { name: "GitHub", url: "https://github.com/Dreamaker183", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/anson-c-887474241/", icon: Linkedin },
  ],
};

export const skills = [
  // Frontend & Web Technologies
  { name: "React", iconUrl: "https://cdn.simpleicons.org/react", url: "https://reactjs.org/", category: "Frontend" },
  { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs", url: "https://nextjs.org/", category: "Frontend" },
  { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript", url: "https://www.typescriptlang.org/", category: "Frontend" },
  { name: "React Native", iconUrl: "https://cdn.simpleicons.org/react", url: "https://reactnative.dev/", category: "Frontend" },
  { name: "Expo", iconUrl: "https://cdn.simpleicons.org/expo", url: "https://expo.dev/", category: "Frontend" },
  { name: "Swift", iconUrl: "https://cdn.simpleicons.org/swift", url: "https://www.swift.org/", category: "Frontend" },
  
  // UI/UX & Design
  { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss", url: "https://tailwindcss.com/", category: "UI/UX" },
  { name: "Figma", iconUrl: "https://cdn.simpleicons.org/figma", url: "https://www.figma.com/", category: "UI/UX" },
  { name: "shadcn/ui", iconUrl: "https://cdn.simpleicons.org/shadcnui", url: "https://ui.shadcn.com/", category: "UI/UX" },
  { name: "Mantine UI", iconUrl: "https://cdn.simpleicons.org/mantine", url: "https://mantine.dev/", category: "UI/UX" },
  { name: "Recharts", iconUrl: "https://api.iconify.design/lucide/bar-chart-3.svg", url: "https://recharts.org/", category: "UI/UX" },
  { name: "Spline", iconUrl: "https://api.iconify.design/lucide/box.svg", url: "https://spline.design/", category: "UI/UX" },
  { name: "Altium PCB Design", iconUrl: "https://cdn.simpleicons.org/altiumdesigner", url: "https://www.altium.com/altium-designer", category: "PCB Design Tools" },
  
  // Backend & Database
  { name: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel", url: "https://laravel.com/", category: "Backend" },
  { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql", url: "https://www.postgresql.org/", category: "Backend" },
  { name: "SQL", iconUrl: "https://cdn.simpleicons.org/mysql", url: "https://www.mysql.com/", category: "Backend" },
  { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker", url: "https://www.docker.com/", category: "Backend" },
  
  // Programming Languages
  { name: "Python", iconUrl: "https://cdn.simpleicons.org/python", url: "https://www.python.org/", category: "Languages" },
  { name: "C++", iconUrl: "https://cdn.simpleicons.org/cplusplus", url: "https://isocpp.org/", category: "Languages" },
  { name: "C", iconUrl: "https://cdn.simpleicons.org/c", url: "https://www.open-std.org/jtc1/sc22/wg14/", category: "Languages" },
  { name: "Java", iconUrl: "https://cdn.simpleicons.org/openjdk", url: "https://www.oracle.com/java/", category: "Languages" },
  { name: "MATLAB", iconUrl: "https://api.iconify.design/lucide/calculator.svg", url: "https://www.mathworks.com/products/matlab.html", category: "Languages" },
  
  // AI & Machine Learning
  { name: "Stable Diffusion", iconUrl: "https://api.iconify.design/logos/stability-ai.svg", url: "https://stability.ai/", category: "AI Tools" },
  { name: "ComfyUI", iconUrl: "https://api.iconify.design/lucide/brain.svg", url: "https://github.com/comfyanonymous/ComfyUI", category: "AI Tools" },
  { name: "Genkit", iconUrl: "https://api.iconify.design/lucide/sparkles.svg", url: "https://genkit.ai/", category: "AI Tools" },
  
  // Development Tools & Libraries
  { name: "TanStack Query", iconUrl: "https://api.iconify.design/lucide/database.svg", url: "https://tanstack.com/query", category: "Dev Tools" },
  { name: "React Hook Form", iconUrl: "https://cdn.simpleicons.org/reacthookform", url: "https://react-hook-form.com/", category: "Dev Tools" },
  { name: "Zod", iconUrl: "https://cdn.simpleicons.org/zod", url: "https://zod.dev/", category: "Dev Tools" },
  { name: "Google Maps", iconUrl: "https://cdn.simpleicons.org/googlemaps", url: "https://developers.google.com/maps", category: "Dev Tools" },
  
  // Hardware & Systems
  { name: "Linux", iconUrl: "https://cdn.simpleicons.org/linux", url: "https://www.kernel.org/", category: "Systems" },
  { name: "Arduino", iconUrl: "https://api.iconify.design/logos/arduino.svg", url: "https://www.arduino.cc/", category: "Systems" },
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
    role: "Digital Design & Marketing Intern",
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
      "React Native + Expo mobile app for fashion enthusiasts: browse fashion news, read style blogs, search trends, try virtual outfits, manage profiles and saved items, and write blogs. Built with Expo Router and TypeScript.",
    tags: ["Figma", "React Native", "Python", "Stable Diffusion", "ComfyUI"],
    links: [
      { name: "Figma", url: "https://www.figma.com/proto/2Xz0FqZLx70YhzRVpjlUTX/Fittix?m=dev&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=43-6238&starting-point-node-id=43%3A6666&t=hDqCoM1RXZpwbRMq-1", iconUrl: "https://cdn.simpleicons.org/figma" },
    ],
  },
  {
    title: "Pet Band Tracking App",
    description:
      "Web tool to visualize pet location tracks on an interactive Google Map. Converts BD-09 to WGS-84, shows raw GPS/Wi‑Fi points, renders a smoothed road‑snapped route via Directions API, supports time filtering, source toggles, and opens the route in Google Maps. Assigned by Pokeguide Limited.",
    tags: ["Next.js", "TypeScript", "Google Maps", "Tailwind CSS", "shadcn/ui"],
    links: [],
    assignedBy: "Pokeguide Limited",
    assignedLogoUrl: "/image/pokeguide.png",
  },
  {
    title: "Current+ - Smart Power SaaS",
    description:
      "An innovative power subscription platform that optimizes energy consumption through smart, flexible, and cost-effective solutions using AI-driven analytics. My contributions were primarily in mobile app development using Swift and creating interactive 3D visualizations with Spline.",
    tags: ["Swift", "Spline", "Arduino", "SaaS"],
    links: [{ name: "GitHub", url: "https://github.com/Dreamaker183/Current-swift-app.git", icon: Github }],
    schoolBy: "EE3070 (A+) — City University of Hong Kong",
    schoolLogoUrl: "/image/Cityu.jpg",
  },
  {
    title: "PokeValue - Pokémon TCG Price Index",
    description:
      "Modern dashboard for tracking Pokémon TCG market values: overall index, regional trends, trending cards, powerful search/filtering, detailed card views (graded prices, candlestick charts, recent trades), browse-by-set, responsive UI with light/dark mode. Assigned by Pokeguide Limited.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
    links: [],
    assignedBy: "Pokeguide Limited",
    assignedLogoUrl: "/image/pokeguide.png",
  },
  {
    title: "WOW Events Booking Platform",
    description:
      "A comprehensive event management platform built with React frontend and Laravel backend, featuring multilingual support (English, Traditional Chinese, Simplified Chinese), venue management, member management, and event organization capabilities. Assigned by Pokeguide Limited.",
    tags: ["React", "TypeScript", "Laravel", "PostgreSQL", "Mantine UI", "TanStack Query", "Docker"],
          links: [
        { name: "Website", url: "https://wowwow.com.hk/", icon: Globe },
      ],
    assignedBy: "Pokeguide Limited",
    assignedLogoUrl: "/image/pokeguide.png",
  },
  {
    title: "GrindSite - Startup Grind Conference 2025 (InvestHK Event)",
    description:
      "Modern, interactive single-page conference site with animated sections and a dynamic schedule. Fully responsive UI built with Tailwind CSS and shadcn/ui; component-driven architecture for maintainability.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Genkit",
      "React Hook Form",
      "Zod",
      "Lucide",
    ],
    links: [],
  },
];
