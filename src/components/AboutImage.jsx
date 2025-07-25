import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import profileImg from '../assets/IMG_5614.png';

function AboutImage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  // Scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Animate position and scale
  const y = useTransform(scrollYProgress, [0, 1], [80, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.25]);

  return (
    <motion.div
      ref={ref}
      // ⬇️ Increase height to stretch scroll time and keep image pinned
      className="w-full h-[200vh] flex items-start justify-center relative"
    >
      {/* Sticky image */}
      <div className="sticky top-[20vh] z-10">
        <motion.img
          src={profileImg}
          alt="About Me"
          className="h-96 object-cover rounded-xl"
          style={{ y, scale }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 0.95 } : { opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        />
      </div>
    </motion.div>
  );
}

export default AboutImage;
