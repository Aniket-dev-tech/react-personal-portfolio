import React from 'react';

const ProjectFilters = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`text-sm px-4 py-1.5 rounded-full border transition 
            ${
              activeFilter === filter
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50'
                : 'border-cyan-400/20 text-cyan-200 hover:bg-cyan-500/10'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
