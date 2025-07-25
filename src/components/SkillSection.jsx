import React from 'react';
import SkillGrid from './SkillGrid';

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="w-full bg-black py-10 px-4 md:px-8 overflow-hidden relative"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
        My <span className="text-blue-400">Skills</span>
      </h2>
      <SkillGrid />
    </section>
  );
};

export default SkillSection;
