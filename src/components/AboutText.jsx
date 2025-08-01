import React from "react";
import { motion } from "framer-motion";

function AboutText() {
  return (
    <motion.div
      className="w-full h-auto py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] leading-tight md:leading-[100px] lg:leading-[120px] xl:leading-[140px] text-center tracking-tighter font-bold">
        <span className="text-blue-400">About Me,</span> a Web Developer and
        Designer
      </p>
    </motion.div>
  );
}

export default AboutText;
