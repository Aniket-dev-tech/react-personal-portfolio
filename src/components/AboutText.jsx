import React from 'react';
import { motion } from 'framer-motion';

function AboutText() {
  return (
    <motion.div
      className="w-full h-[50vh]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-[8rem] leading-[140px] text-center tracking-tighter font-bold">
        <span className="text-blue-400">About Me,</span> a Web Developer and Designer
      </p>
    </motion.div>
  );
}

export default AboutText;
