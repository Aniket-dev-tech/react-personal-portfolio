import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import skills from "../data/skills";

const TOTAL_COLUMNS = 12;
const TOTAL_ROWS = 4;
const TOTAL_CELLS = TOTAL_COLUMNS * TOTAL_ROWS;

const glowColors = {
  ReactJS: "#61dafb",
  TailwindCSS: "#38bdf8",
  JavaScript: "#f7df1e",
  Node: "#3c873a",
  "Node.js": "#3c873a",
  MongoDB: "#4db33d",
  HTML5: "#e44d26",
  CSS3: "#264de4",
  Python: "#3776ab",
  Git: "#f1502f",
  GSAP: "#88ce02",
  Express: "#ffffff",
  Bootstrap: "#7952b3",
  PostgreSQL: "#336791",
  "C++": "#00599c",
  Postman: "#ff6c37",
};

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const SkillGrid = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const shuffledSkills = shuffle(skills).map((skill) => ({
    ...skill,
    glowColor: glowColors[skill.name] || "#ffffff",
  }));

  return (
    <div
      id="skills"
      ref={containerRef}
      className="w-full min-h-screen bg-black text-white py-16 px-4 flex items-center justify-center"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 w-full max-w-screen-xl mx-auto">
        {shuffledSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group w-full aspect-square flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: index * 0.1 }}
          >
            <div className="relative">
              <img
                src={skill.icon}  
                alt={skill.name}
                loading="lazy"
                className="w-20 h-20 object-contain transition-all duration-300"
                style={{
                  filter: `drop-shadow(0 0 6px ${skill.glowColor})`,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = `drop-shadow(0 0 16px ${skill.glowColor})`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = `drop-shadow(0 0 6px ${skill.glowColor})`;
                }}
              />

              {/* Glass reflection overlay */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-10 blur-sm" />
            </div>

            <p className="text-sm text-white mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
