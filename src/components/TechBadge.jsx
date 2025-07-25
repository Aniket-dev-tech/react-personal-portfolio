const TechBadge = ({ text }) => {
  return (
    <span className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-400/30">
      {text}
    </span>
  );
};

export default TechBadge;
