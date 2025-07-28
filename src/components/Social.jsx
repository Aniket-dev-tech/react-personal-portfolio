import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const Social = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-medium uppercase dark:text-white/90 sm:text-7xl md:text-8xl tracking-tight"
      style={{
        lineHeight: 0.75,

      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={`top-${i}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={`bottom-${i}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Social;
