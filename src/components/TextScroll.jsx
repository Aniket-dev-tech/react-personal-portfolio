"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const TextScroll = ({ text, default_velocity = 2, className }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [repetitions, setRepetitions] = useState(1);
  const directionRef = useRef(1); // 1 for LTR, -1 for RTL

  useEffect(() => {
    const updateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const requiredRepeats = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(requiredRepeats);
      }
    };

    updateRepetitions();
    window.addEventListener("resize", updateRepetitions);
    return () => window.removeEventListener("resize", updateRepetitions);
  }, [text]);

  useEffect(() => {
    const unsubscribe = velocityFactor.on("change", (v) => {
      if (Math.abs(v) < 0.01) return; // Ignore tiny changes

      // Set directionRef based on scroll direction
      if (v > 0) {
        directionRef.current = -1; // Scroll down → RTL
      } else if (v < 0) {
        directionRef.current = 1; // Scroll up → LTR
      }
    });

    return () => unsubscribe();
  }, []);

  const x = useTransform(baseX, (v) =>
    `${wrap(-100 / repetitions, 0, v)}%`
  );

  useAnimationFrame((_, delta) => {
    const baseSpeed = default_velocity;
    const direction = directionRef.current;
    const moveBy = direction * baseSpeed * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden whitespace-nowrap" ref={containerRef}>
      <motion.div className={`inline-block ${className}`} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null}>
            {text}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextScroll;
