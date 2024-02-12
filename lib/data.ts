import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FastReactPizzaImg from "@/public/fast-react-pizza.png";
import HouseMarketPlaceImg from "@/public/house-market-place.png";
import GithubFinderImg from "@/public/github-finder.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fast React Pizza App",
    description:
      "Fast React Pizza App is a dynamic and user-friendly web application built with React.js, designed to streamline the pizza ordering experience for users.",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: FastReactPizzaImg,
  },
  {
    title: "House Market Place",
    description:
      "House Market Place is a comprehensive real estate platform built on React.js, offering users the ability to buy, sell, or rent properties with ease.",
    tags: ["React", "Redux", "Firebase"],
    imageUrl: HouseMarketPlaceImg,
  },
  {
    title: "GitHub Finder App",
    description:
      "Github Finder is a powerful web application built using React.js that simplifies the process of discovering GitHub profiles.",
    tags: ["React", "CSS", "Github"],
    imageUrl: GithubFinderImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
