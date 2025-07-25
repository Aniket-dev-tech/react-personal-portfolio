import React, { useRef, useState } from 'react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const [imageError, setImageError] = useState(false);

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

  const fallbackImage = 'https://via.placeholder.com/600x400?text=Project+Image';

  return (
    <div
      ref={cardRef}
      className="relative bg-white/5 border border-cyan-400/30 rounded-2xl shadow-lg p-6 backdrop-blur-lg flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.3)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none transition-all duration-200 ease-out rounded-2xl z-0"
      />

      <div className="relative z-10 flex flex-col h-full">
        <img
          src={imageError ? fallbackImage : project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl mb-4"
          onError={() => setImageError(true)}
        />

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <TechBadge key={i} text={tech} />
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

export default ProjectCard;
