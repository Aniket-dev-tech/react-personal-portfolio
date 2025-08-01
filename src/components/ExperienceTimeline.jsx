import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import experienceData from "../data/experience";
import { Briefcase, Brain } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  "Frontend Developer Intern": <Briefcase className="w-5 h-5 text-blue-400 mr-2" />,
  "AI Research Volunteer": <Brain className="w-5 h-5 text-blue-400 mr-2" />,
};

function ExperienceTimeline() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative w-full px-2 md:px-4 py-20 bg-black">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
        My Learning <span className="text-blue-500">Journey</span>
      </h2>

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Timeline vertical line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500 shadow-blue-500/50 shadow-md z-0 origin-top scale-y-0"
        />

        {experienceData
          .slice()
          .reverse()
          .map((exp, index) => {
            const isRight = index % 2 === 0;
            const Icon = icons[exp.role] || null;

            return (
              <div key={index} className="w-full mb-20 flex relative">
                {/* Left side */}
                <div className={`w-1/2 hidden sm:flex ${!isRight ? "justify-end pr-4" : ""}`}>
                  {!isRight && (
                    <div className="text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-white/10 max-w-xs sm:max-w-sm md:max-w-md text-right backdrop-blur-md hover:shadow-blue-400/40 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-end mb-1">
                        {Icon}
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-gray-400 italic">{exp.date}</p>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-200">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-4 z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center shadow-md overflow-hidden">
                    {exp.icon && (
                      <img
                        src={exp.icon}
                        alt={`${exp.company} icon`}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    )}
                  </div>
                </div>

                {/* Right side */}
                <div className={`w-1/2 hidden sm:flex ${isRight ? "justify-start pl-4" : ""}`}>
                  {isRight && (
                    <div className="text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-white/10 max-w-xs sm:max-w-sm md:max-w-md text-left backdrop-blur-md hover:shadow-blue-400/40 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                          {exp.role}
                        </h3>
                        {Icon}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-gray-400 italic">{exp.date}</p>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-200">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Small screen layout */}
                <div className="sm:hidden w-full flex justify-center mt-6">
                  <div className="text-white p-4 rounded-xl shadow-lg border border-white/10 max-w-xs text-center backdrop-blur-md hover:shadow-blue-400/40 hover:shadow-xl transition-all duration-300 mt-10">
                    <div className="flex items-center justify-center mb-1">
                      {Icon}
                      <h3 className="text-lg font-semibold text-blue-400">{exp.role}</h3>
                    </div>
                    <p className="text-sm text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400 italic">{exp.date}</p>
                    <p className="mt-3 text-sm text-gray-200">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
