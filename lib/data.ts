import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airbndimg from "@/public/pro1.png";
import carimg from '@/public/pro2.png'
import dashimg from '@/public/pro3.png'
import uiimg from '@/public/pro4.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Freecodecamp.org",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    Link:'',
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Gujrat,Pakistan",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnd",
    description:
"Next.js and TypeScript powered Airbnb clone: Register/login, upload property details/photos, and plan trips to explore others' listed places.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: airbndimg,
    Label:"https://myairbndcloneapp.vercel.app/"
  },
  {
    title: "CarBuddy",
    description:
"Next.js car app: Search, filter, and explore car models with detailed information, providing an efficient and user-friendly experience.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "RapidApi"],
    imageUrl: carimg,
    Label:"https://carapp-flax.vercel.app/"
  },
  {
    title: "Admin Dashboard",
    description:
    "Next.js Admin Dashboard: Modern UX/UI design, intuitive interface, and dynamic charts powered by Chart.js for insightful data visualization.",
    tags: ["React", "Next.js", "Chart.js","Tailwind", ],
    imageUrl: dashimg,
    Label:"https://dashboard-user-gamma.vercel.app/"
  },
  {
    title: "Modern UX/UI Travel site",
    description:
    "Next.js travel website: Experience seamless exploration with modern UX/UI design, showcasing a Travel app",
    tags: ["React", "Next.js", "Tailwind", "Typescript"],
    imageUrl: uiimg,
    Label:"https://travel-ui-ux-lime.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  'Vue js',
  "Git",
  "Tailwind",
  'Scss',
  "MongoDB",
  "Redux",
  "Framer Motion",
] as const;
