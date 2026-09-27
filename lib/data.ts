import type { StaticImageData } from "next/image";

import blogApp from "@/app/assets/blogApp.webp";
import apple from "@/app/assets/Apple.webp";
import medicare from "@/app/assets/medicare.webp";
import wrapper from "@/app/assets/wrapper.webp";
import pixelQuiz from "@/app/assets/pixelQuiz.webp";
import workLink from "@/app/assets/workLink.webp";
import openbook from "@/app/assets/openbook.webp";

export const profile = {
  name: "Avishkar Mahalingpure",
  role: "Software Engineer",
  location: "Glasgow, UK",
  email: "avimahalingpure10@gmail.com",
  github: "https://github.com/Spikree",
  linkedin: "https://www.linkedin.com/in/avishkar-mahalingpure/",
  resume: "/Avishkar_Resume.pdf",
  siteUrl: "https://avi-dev.vercel.app",
};

export const experience = [
  {
    period: "Dec 2024 – Jun 2025",
    role: "Software Engineer Intern",
    company: "Eduplus Campus",
    summary:
      "Built backend modules in Groovy and Gradle for an ERP system used by universities and businesses, and rebuilt its legacy frontend into an accessible, consistent UI.",
  },
  {
    period: "Dec 2023 – Mar 2024",
    role: "Software Engineer Intern",
    company: "Eduplus Campus",
    summary:
      "Built and shipped a cross-platform Flutter app end to end, from design through REST API integration to deployment and handover.",
  },
];

export const education = [
  {
    period: "2026",
    degree: "MSc Advanced Computer Science",
    school: "University of Strathclyde",
  },
  {
    period: "2025",
    degree: "BSc Computer Science",
    school: "Sharad Institute of Technology",
  },
];

export type Project = {
  title: string;
  summary: string;
  image: StaticImageData;
  stack: string[];
  link?: string;
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Medicare Pro",
    featured: true,
    summary:
      "Healthcare platform with role-based access for doctors and patients, Gemini-powered patient summaries, real-time chat and Redis caching.",
    image: medicare,
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "Socket.io", "Gemini API"],
    link: "https://medicare-client.onrender.com/",
    github: "https://github.com/Spikree/medicare-client.git",
  },
  {
    title: "OpenBook",
    featured: true,
    summary:
      "Local-first, open-source NotebookLM alternative for learners with disabilities. AI models run on-device through Ollama.",
    image: openbook,
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Ollama"],
    github: "https://github.com/Spikree/openbook.git",
  },
  {
    title: "WorkLink",
    featured: true,
    summary:
      "Freelance marketplace with job bidding, real-time chat, two-way ratings and encrypted user data.",
    image: workLink,
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io"],
    link: "https://worklink-client.onrender.com/",
    github: "https://github.com/stars/Spikree/lists/worklink",
  },
  {
    title: "HTML Wrapper",
    summary: "VS Code extension, published on the Marketplace, that wraps a selection in any HTML tag.",
    image: wrapper,
    stack: ["TypeScript", "VS Code API"],
    link: "https://marketplace.visualstudio.com/items?itemName=Spikey.wrapper-html",
    github: "https://github.com/Spikree/element-wrapping-vs-code-extension-",
  },
  {
    title: "Tech Blogs",
    summary: "Full-stack blogging platform.",
    image: blogApp,
    stack: ["Next.js", "MongoDB"],
    link: "https://tech-blogs-chi.vercel.app",
    github: "https://github.com/Spikree/Tech-Blogs",
  },
  {
    title: "Pixel Quiz Quest",
    summary: "Quiz app built for a frontend UI hackathon.",
    image: pixelQuiz,
    stack: ["React", "TypeScript"],
    link: "https://pixel-quiz-seven.vercel.app/",
    github: "https://github.com/Spikree/Pixel-Quiz",
  },
  {
    title: "Apple Clone",
    summary: "Apple product page recreated with 3D and scroll animation.",
    image: apple,
    stack: ["React Three Fiber", "GSAP"],
    link: "https://apple-website-clone-6the.onrender.com/",
    github: "https://github.com/Spikree/apple-website-clone-",
  },
];

export const facts = [
  { label: "Currently", value: "MSc Advanced Computer Science, University of Strathclyde" },
  { label: "Looking for", value: "Graduate software engineering roles" },
  { label: "Experience", value: "2 software engineering internships" },
  { label: "Core stack", value: "Java, Spring Boot, TypeScript, React, Node.js, PostgreSQL" },
];

export const skills = [
  { group: "Languages", items: ["Java", "TypeScript", "JavaScript", "Groovy", "C#", "Python"] },
  { group: "Backend", items: ["Spring Boot", "Node.js", "Express", "FastAPI", "Gradle", "Socket.io"] },
  {
    group: "Frontend",
    items: ["React", "Redux", "Zustand", "Tailwind CSS", "Radix UI", "shadcn/ui", "Flutter", "Next.js"],
  },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Docker", "VS Code Extensions", "Google Gemini API", "Ollama", "Unity"],
  },
];
