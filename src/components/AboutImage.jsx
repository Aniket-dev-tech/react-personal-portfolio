import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import profileImg from "../assets/IMG_5614.png";

function AboutImage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -30]); // reduced for smoother scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.15]);

  return (
    <motion.div
      ref={ref}
      className="w-full h-[200vh] flex items-start justify-center relative"
    >
      <div className="sticky top-[20vh] z-10">
        <motion.img
          src={profileImg}
          alt="About Me"
          className="w-72 sm:w-80 md:w-96 lg:w-[28rem] object-cover rounded-xl shadow-lg"
          style={{ y, scale }}
          initial={{ opacity: 0, scale: 0.95 }} // no large jump from 0.9
          animate={isInView ? { opacity: 1, scale: 0.95 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        />
      </div>
    </motion.div>
  );
}

export default AboutImage;
