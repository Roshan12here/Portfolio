"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a passionate and self-taught 19-year-old{" "}
        <span className="font-medium"> frontend developer </span>, My expertise lies in crafting dynamic and responsive user interfaces using cutting-edge technologies such as {" "}
        <span className="font-bold">React and Next.js. </span>.{" "}
        Committed to delivering high-quality solutions, I thrive on the challenges of web development and am dedicated to continuous learning. With a proven ability to transform ideas into functional and visually appealing
        <span className="font-medium">
      Websites
        </span>
        I bring a combination of creativity and technical proficiency to every project. Eager to take on new challenges, I am fueled by a strong work ethic and a relentless pursuit of excellence in my field.      </p>
<p>
        <span className="italic">When I'm not coding</span>, I enjoy reading books, playing cricket and designing . 
       I'm currently learning new skills 
        like Copywritting and Ruby on Rails.
      </p>
    </motion.section>
  );
}
