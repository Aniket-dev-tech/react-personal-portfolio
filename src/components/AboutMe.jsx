import React from "react";
import { motion } from "framer-motion";

const text = `a builder at heart with a passion for clean code, creative UIs, and AI-powered solutions. Currently upskilling in DSA, React, and deep learning to shape real-world tech.`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function AboutMe() {
  return (
    <motion.div
      className="w-full h-auto px-4 md:px-20 lg:px-36 xl:px-[150px] mt-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.p className="text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
        {text.split(" ").map((word, i) => (
          <motion.span key={i} variants={child} className="inline-block mr-1">
            {word}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}

export default AboutMe;
