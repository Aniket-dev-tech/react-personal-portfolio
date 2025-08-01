// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import AboutMe from './AboutMe';

function About() {
  return (
    <motion.div
      className="w-full h-auto px-4 md:px-20 lg:px-36 xl:px-[150px] mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AboutText />
      <AboutImage />
      <AboutMe />
    </motion.div>
  );
}

export default About;