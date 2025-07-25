import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects.js';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  useEffect(() => {
    const filtered = activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === activeFilter);
    setFilteredProjects(filtered);
    setVisibleCount(6);
  }, [activeFilter]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="py-20 px-4 sm:px-6 md:px-16 bg-black text-white" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My <span className='text-blue-400'>Projects</span></h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-full border transition-all ${
              activeFilter === cat
                ? 'bg-cyan-500 text-black border-cyan-400'
                : 'text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.slice(0, visibleCount).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="text-cyan-300 border border-cyan-400/40 px-6 py-2 rounded-md hover:bg-cyan-400/10 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glare = glareRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.15), transparent 60%)`;
  };

  const handleMouseLeave = () => {
    glareRef.current.style.background = 'none';
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-white/5 border border-cyan-400/30 rounded-2xl shadow-lg p-6 backdrop-blur-lg h-[500px] max-h-[500px] flex flex-col justify-between overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.3)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none transition-all duration-200 ease-out rounded-2xl z-0"
      />

      <div className="relative z-10 flex flex-col h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-400/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 border border-cyan-400/40 px-4 py-1.5 rounded-md hover:bg-cyan-400/10 transition"
            >
              🔗 View Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 border border-cyan-400/40 px-4 py-1.5 rounded-md hover:bg-cyan-400/10 transition"
            >
              💻 GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
