import React from "react";
import { motion } from "framer-motion";

function AboutText() {
  return (
    <motion.div
      className="w-full h-auto py-16 flex justify-center flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] leading-tight md:leading-[100px] lg:leading-[120px] xl:leading-[140px] text-center tracking-tighter font-bold">
        <span className="text-blue-400">About Me,</span> a Web <span className="text-blue-500">Developer</span> and <span className="text-blue-600">Designer</span>
      </p>
        <span className= "lg:text-xl sm:text-sm text-center tracking-tight text-gray-500 mt-5">(keep scrolling)</span>
    </motion.div>
  );
}

export default AboutText;
