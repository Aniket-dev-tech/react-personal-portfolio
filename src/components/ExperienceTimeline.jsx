import React from "react";
import { motion } from "framer-motion";
import experienceData from "../data/experience";
import { Briefcase, Brain } from "lucide-react"; // Use icons from lucide-react or add your custom SVGs

const icons = {
  "Frontend Developer Intern": <Briefcase className="w-5 h-5 text-blue-400 mr-2" />,
  "AI Research Volunteer": <Brain className="w-5 h-5 text-blue-400 mr-2" />,
  // Add more roles with icons here
};

function ExperienceTimeline() {
  return (
    <div className="relative w-full px-4 py-20 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        My Learning <span className="text-blue-500">Journey</span>
      </h2>

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 shadow-blue-500/50 shadow-md" />

        {experienceData
          .slice()
          .reverse()
          .map((exp, index) => {
            const isRight = index % 2 === 0; // even index = right side
            const Icon = icons[exp.role] || null;

            return (
              <motion.div
                key={index}
                className="w-full mb-16 flex relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Left side card */}
                {isRight ? (
                  <div className="w-1/2" />
                ) : (
                  <div className="w-1/2 flex justify-end pr-6">
                    <div className=" text-white p-6 rounded-xl shadow-lg border border-white/10 max-w-sm text-right backdrop-blur-md hover:shadow-blue-400/40 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-end mb-1">
                        {Icon}
                        <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                      </div>
                      <p className="text-sm text-gray-300">{exp.company}</p>
                      <p className="text-sm text-gray-400 italic">{exp.date}</p>
                      <p className="mt-3 text-sm text-gray-200">{exp.description}</p>
                    </div>
                  </div>
                )}

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-5 w-5 h-5 bg-blue-400 border-4 border-[#0d1117] rounded-full z-10 shadow-blue-500 shadow-sm" />

                {/* Right side card */}
                {isRight ? (
                  <div className="w-1/2 flex justify-start pl-6">
                    <div className=" text-white p-6 rounded-xl shadow-lg border border-white/10 max-w-sm text-left backdrop-blur-md hover:shadow-blue-400/40 hover:shadow-xl transition-all duration-300">
                      <div className="text-left flex items-center mb-1">
                        <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                        {Icon}
                      </div>
                      <p className="text-sm text-gray-300">{exp.company}</p>
                      <p className="text-sm text-gray-400 italic">{exp.date}</p>
                      <p className="mt-3 text-sm text-gray-200">{exp.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-1/2" />
                )}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
