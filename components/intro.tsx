"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Profile from "@/public/profile.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionView } from "@/lib/hooks";
import { useActiveSection } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <section
      ref={ref}
      id="home"
      className=" mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src={Profile}
              alt="Ravishankar M"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
              width="192"
              quality="95"
              priority={true}
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ravishankar M.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> With{" "}
        <span className="font-bold">1 year</span> of relative experience. I
        enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="  group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7  py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className=" opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center rounded-full bg-white p-4 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ravi-shankar-06706b23b/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center rounded-full bg-white p-4 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Raviennumnaan"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
